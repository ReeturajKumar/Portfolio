import { useEffect, useState } from 'react';

const DEFAULT_USER = 'ReeturajKumar';

/** Successful GitHub HTTP calls allowed per rolling 24h (persisted in localStorage). */
const MAX_REQUESTS_PER_24H = 2;

const CACHE_TTL_MS = 24 * 60 * 60 * 1000;

const STORAGE_KEY = 'portfolio_github_activity_v3';

type PushPayload = {
  ref?: string;
  before?: string;
  after?: string;
  head?: string;
  commits?: Array<{ sha: string; message: string }>;
};

type GitHubEvent = {
  type: string;
  created_at: string;
  repo: { name: string };
  payload: PushPayload;
};

type CommitApiItem = {
  sha: string;
  html_url: string;
  commit: {
    message: string;
    author: { date: string | null; name: string };
  };
};

export type GitHubCommitRow = {
  message: string;
  sha: string;
  commitUrl: string;
  repoLabel: string;
  date: string;
  badgeTime: string;
};

export type LatestCommitState =
  | { status: 'idle' | 'loading' }
  | { status: 'error'; message: string }
  | { status: 'ready'; commits: GitHubCommitRow[] };

type PersistedV3 = {
  v: 3;
  requestTimes: number[];
  cachedAt: number;
  commits: GitHubCommitRow[];
};

function githubHeaders(): HeadersInit {
  const headers: Record<string, string> = {
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
  };
  const token =
    typeof import.meta.env.VITE_GITHUB_TOKEN === 'string'
      ? import.meta.env.VITE_GITHUB_TOKEN.trim()
      : '';
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  return headers;
}

function pruneRequestTimes(times: number[]): number[] {
  const cutoff = Date.now() - CACHE_TTL_MS;
  return times.filter((t) => t > cutoff);
}

function loadPersisted(): PersistedV3 | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const p = JSON.parse(raw) as PersistedV3;
    if (p.v !== 3 || !Array.isArray(p.commits) || !Array.isArray(p.requestTimes)) {
      return null;
    }
    return { ...p, requestTimes: pruneRequestTimes(p.requestTimes) };
  } catch {
    return null;
  }
}

function savePersisted(partial: {
  requestTimes: number[];
  cachedAt: number;
  commits: GitHubCommitRow[];
}) {
  try {
    const payload: PersistedV3 = {
      v: 3,
      requestTimes: pruneRequestTimes(partial.requestTimes),
      cachedAt: partial.cachedAt,
      commits: partial.commits,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch {
    /* ignore */
  }
}

function requestsUsed(times: number[]): number {
  return pruneRequestTimes(times).length;
}

function canMakeRequest(times: number[]): boolean {
  return requestsUsed(times) < MAX_REQUESTS_PER_24H;
}

function recordSuccess(times: number[]): number[] {
  return [...pruneRequestTimes(times), Date.now()];
}

function isRateLimited(res: Response, data: unknown): boolean {
  if (res.status !== 403) return false;
  const msg =
    data && typeof data === 'object' && 'message' in data
      ? String((data as { message: string }).message)
      : '';
  return /rate limit/i.test(msg);
}

function firstLine(message: string): string {
  const line = message.split('\n')[0]?.trim() ?? '';
  return line.length > 100 ? `${line.slice(0, 97)}…` : line;
}

function formatRelativeTime(iso: string): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return '';
  const seconds = Math.floor((Date.now() - date.getTime()) / 1000);
  const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });
  if (seconds < 45) return 'just now';
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return rtf.format(-minutes, 'minute');
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return rtf.format(-hours, 'hour');
  const days = Math.floor(hours / 24);
  if (days < 30) return rtf.format(-days, 'day');
  const months = Math.floor(days / 30);
  if (months < 12) return rtf.format(-months, 'month');
  return rtf.format(-Math.floor(months / 12), 'year');
}

function formatCompactBadgeTime(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return '';
  const seconds = Math.floor((Date.now() - d.getTime()) / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  if (days > 0) return `${days}d ago`;
  if (hours > 0) return `${hours}h ago`;
  if (minutes > 0) return `${minutes}m ago`;
  return 'just now';
}

function fallbackMessageFromRef(ref?: string): string {
  if (!ref) return 'Latest push';
  const branch = ref.replace(/^refs\/heads\//, '');
  return `Push to ${branch || 'default branch'}`;
}

type ParsedPush = {
  fullSha: string;
  repoFullName: string;
  createdAt: string;
  ref?: string;
  message?: string;
};

function collectLatestPushes(events: GitHubEvent[], limit: number): ParsedPush[] {
  const out: ParsedPush[] = [];
  for (const event of events) {
    if (event.type !== 'PushEvent' || !event.repo?.name) continue;
    const { payload, repo, created_at } = event;
    const commits = payload.commits;

    if (commits && commits.length > 0) {
      const tip = commits[commits.length - 1];
      if (!tip?.sha) continue;
      out.push({
        fullSha: tip.sha,
        repoFullName: repo.name,
        createdAt: created_at,
        ref: payload.ref,
        message: firstLine(tip.message),
      });
    } else {
      const headSha = payload.head ?? payload.after;
      if (!headSha) continue;
      out.push({
        fullSha: headSha,
        repoFullName: repo.name,
        createdAt: created_at,
        ref: payload.ref,
        message: undefined,
      });
    }

    if (out.length >= limit) break;
  }
  return out;
}

async function fetchCommitDetail(
  repoFullName: string,
  sha: string,
  headers: HeadersInit
): Promise<CommitApiItem | null> {
  const url = `https://api.github.com/repos/${repoFullName}/commits/${sha}`;
  const res = await fetch(url, { headers });
  if (!res.ok) return null;
  const data = (await res.json()) as CommitApiItem;
  if (!data?.commit?.message) return null;
  return data;
}

function rowFromPush(
  push: ParsedPush,
  detail: CommitApiItem | null
): GitHubCommitRow {
  const createdAt = detail?.commit.author?.date ?? push.createdAt;
  const message =
    push.message ??
    (detail ? firstLine(detail.commit.message) : fallbackMessageFromRef(push.ref));

  return {
    message,
    sha: push.fullSha.slice(0, 7),
    commitUrl: `https://github.com/${push.repoFullName}/commit/${push.fullSha}`,
    repoLabel: push.repoFullName,
    date: formatRelativeTime(createdAt),
    badgeTime: formatCompactBadgeTime(push.createdAt),
  };
}

/**
 * Latest push only, max 2 successful GitHub requests / 24h (localStorage).
 * Request 1: public events. Request 2 (optional): commit message if event has no message body.
 */
export function useLatestGitHubActivity() {
  const user = import.meta.env.VITE_GITHUB_USER ?? DEFAULT_USER;

  const [state, setState] = useState<LatestCommitState>({ status: 'loading' });

  useEffect(() => {
    let cancelled = false;

    const run = async () => {
      const persisted = loadPersisted();
      let times = persisted?.requestTimes ?? [];

      if (
        persisted &&
        persisted.commits.length > 0 &&
        Date.now() - persisted.cachedAt < CACHE_TTL_MS
      ) {
        setState({
          status: 'ready',
          commits: persisted.commits.slice(0, 1),
        });
        return;
      }

      if (!canMakeRequest(times)) {
        if (persisted?.commits.length) {
          setState({
            status: 'ready',
            commits: persisted.commits.slice(0, 1),
          });
        } else {
          setState({
            status: 'error',
            message:
              'GitHub limit: 2 API calls per 24h used. Try tomorrow or set VITE_GITHUB_TOKEN.',
          });
        }
        return;
      }

      setState({ status: 'loading' });
      const headers = githubHeaders();

      try {
        const eventsUrl = `https://api.github.com/users/${encodeURIComponent(user)}/events/public?per_page=40`;
        const eventsRes = await fetch(eventsUrl, { headers });
        const eventsData = await eventsRes.json().catch(() => null);

        if (cancelled) return;

        if (!eventsRes.ok) {
          if (isRateLimited(eventsRes, eventsData)) {
            if (persisted?.commits.length) {
              setState({
                status: 'ready',
                commits: persisted.commits.slice(0, 1),
              });
            } else {
              setState({
                status: 'error',
                message:
                  'GitHub rate limit. Add VITE_GITHUB_TOKEN or try again later.',
              });
            }
            return;
          }
          setState({
            status: 'error',
            message: `GitHub returned ${eventsRes.status}`,
          });
          return;
        }

        times = recordSuccess(times);

        if (!Array.isArray(eventsData)) {
          savePersisted({
            requestTimes: times,
            cachedAt: persisted?.cachedAt ?? Date.now(),
            commits: persisted?.commits ?? [],
          });
          setState({ status: 'error', message: 'Unexpected GitHub response' });
          return;
        }

        const pushes = collectLatestPushes(eventsData as GitHubEvent[], 1);

        if (pushes.length === 0) {
          savePersisted({
            requestTimes: times,
            cachedAt: persisted?.cachedAt ?? Date.now(),
            commits: persisted?.commits?.length ? persisted.commits : [],
          });
          if (persisted?.commits?.length) {
            setState({
              status: 'ready',
              commits: persisted.commits.slice(0, 1),
            });
          } else {
            setState({
              status: 'error',
              message: 'No recent push events in your feed',
            });
          }
          return;
        }

        const push = pushes[0];
        let detail: CommitApiItem | null = null;

        if (!push.message && canMakeRequest(times)) {
          detail = await fetchCommitDetail(
            push.repoFullName,
            push.fullSha,
            headers
          );
          if (cancelled) return;
          if (detail) {
            times = recordSuccess(times);
          }
        }

        const rows = [rowFromPush(push, detail)];

        savePersisted({
          requestTimes: times,
          cachedAt: Date.now(),
          commits: rows,
        });
        setState({ status: 'ready', commits: rows });
      } catch (e: unknown) {
        if (cancelled) return;
        setState({
          status: 'error',
          message: e instanceof Error ? e.message : 'Could not load activity',
        });
      }
    };

    void run();
  }, [user]);

  return { state, user };
}
