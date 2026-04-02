import { useEffect, useState } from 'react';

const DEFAULT_USER = 'ReeturajKumar';
const DEFAULT_REPO = 'Portfolio';

type CommitPayload = {
  sha: string;
  html_url: string;
  commit: {
    message: string;
    author: { date: string | null; name: string };
  };
};

export type LatestCommitState =
  | { status: 'idle' | 'loading' }
  | { status: 'error'; message: string }
  | {
      status: 'ready';
      message: string;
      date: string;
      /** Compact label for the time pill, e.g. "17h ago" */
      badgeTime: string;
      sha: string;
      commitUrl: string;
      repoLabel: string;
    };

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
  const years = Math.floor(months / 12);
  return rtf.format(-years, 'year');
}

function formatCompactBadgeTime(iso: string): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return '';
  const seconds = Math.floor((Date.now() - date.getTime()) / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  if (days > 0) return `${days}d ago`;
  if (hours > 0) return `${hours}h ago`;
  if (minutes > 0) return `${minutes}m ago`;
  return 'just now';
}

export function useLatestPortfolioCommit(refetchMs = 5 * 60 * 1000) {
  const user = import.meta.env.VITE_GITHUB_USER ?? DEFAULT_USER;
  const repo = import.meta.env.VITE_GITHUB_REPO ?? DEFAULT_REPO;

  const [state, setState] = useState<LatestCommitState>({ status: 'loading' });

  useEffect(() => {
    let cancelled = false;
    let requestId = 0;

    const fetchLatest = async () => {
      const myId = ++requestId;

      setState((s) => (s.status === 'ready' ? s : { status: 'loading' }));

      const url = `https://api.github.com/repos/${encodeURIComponent(user)}/${encodeURIComponent(repo)}/commits?per_page=1`;

      try {
        const res = await fetch(url, {
          headers: { Accept: 'application/vnd.github+json' },
        });

        if (cancelled || myId !== requestId) return;

        if (!res.ok) {
          const errText =
            res.status === 404 ? 'Repository not found' : `GitHub returned ${res.status}`;
          setState({ status: 'error', message: errText });
          return;
        }

        const data = (await res.json()) as CommitPayload[];
        if (cancelled || myId !== requestId) return;

        const head = data[0];
        if (!head?.commit?.message) {
          setState({ status: 'error', message: 'No commits found' });
          return;
        }

        const authorDate = head.commit.author?.date;
        setState({
          status: 'ready',
          message: firstLine(head.commit.message),
          date: authorDate ? formatRelativeTime(authorDate) : '',
          badgeTime: authorDate ? formatCompactBadgeTime(authorDate) : '',
          sha: head.sha.slice(0, 7),
          commitUrl: head.html_url,
          repoLabel: `${user}/${repo}`,
        });
      } catch (e: unknown) {
        if (cancelled || myId !== requestId) return;
        setState({
          status: 'error',
          message: e instanceof Error ? e.message : 'Could not load commit',
        });
      }
    };

    void fetchLatest();
    const id = window.setInterval(() => void fetchLatest(), refetchMs);

    return () => {
      cancelled = true;
      window.clearInterval(id);
    };
  }, [user, repo, refetchMs]);

  return { state, user, repo };
}
