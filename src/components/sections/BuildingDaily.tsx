import { useState, useEffect } from 'react';
import { Music, Github as GhIcon, Github, Linkedin} from 'lucide-react';
import { motion } from 'motion/react';
import { FADE_UP, STAGGER_CONTAINER } from "../../constants/motion";
import { useLatestPortfolioCommit } from "../../hooks/useLatestPortfolioCommit";

const GITHUB_HREF = "https://github.com/ReeturajKumar";
const LINKEDIN_HREF = "https://www.linkedin.com/in/reeturaj-kumar-372963238/";
const SPOTIFY_TRACK_HREF = "https://open.spotify.com/track/7k5TW0wfpXnb39IhRwoSq7";

const SPOTIFY_PILL_ROW_A = [
  "Film score",
  "Orchestral",
  "Soundtrack",
  "Fantasy",
  "Epic",
  "OST",
];

const SPOTIFY_PILL_ROW_B = [
  "Harry Potter",
  "Order of the Phoenix",
  "Nicholas Hooper",
  "Another Story",
  "Warner Bros",
  "2007",
];

const SpotifyPill = ({ label }: { label: string }) => (
  <span className="inline-flex shrink-0 items-center gap-1.5 rounded-xl border border-white/8 bg-white/6 px-2.5 py-1 backdrop-blur-sm md:gap-2 md:px-3 md:py-1.5">
    <Music size={13} className="shrink-0 text-white/45 md:size-[14px]" strokeWidth={2.25} aria-hidden />
    <span className="text-[10px] font-semibold tracking-tight text-white/95 md:text-[11px]">
      {label}
    </span>
  </span>
);

const SpotifyMarquee = ({
  items,
  trackClass,
}: {
  items: string[];
  trackClass: "skills-marquee-track-l" | "skills-marquee-track-r";
}) => {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden py-0.5">
      <div className={`${trackClass} will-change-transform gap-2 md:gap-2.5`}>
        {doubled.map((label, i) => (
          <SpotifyPill key={`${label}-${i}`} label={label} />
        ))}
      </div>
    </div>
  );
};

const SpotifyCardRadar = () => (
  <div
    className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]"
    aria-hidden
  >
    <div className="absolute left-1/2 top-[82%] h-[min(120%,420px)] w-[min(140%,620px)] -translate-x-1/2 -translate-y-1/2">
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#DC2626]/12"
          style={{
            width: `${i * 20}%`,
            height: `${i * 20}%`,
            minWidth: 100,
            minHeight: 100,
          }}
        />
      ))}
    </div>
    <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-black/85" />
  </div>
);

const GitHubActivityCard = () => {
  const { state, user, repo } = useLatestPortfolioCommit();

  const footerSocial = [
    { Icon: Github, href: GITHUB_HREF, label: "GitHub" },
    { Icon: Linkedin, href: LINKEDIN_HREF, label: "LinkedIn" },
  ] as const;

  const body = () => {
    if (state.status === 'loading' || state.status === 'idle') {
      return (
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between gap-3">
            <div className="h-3 w-24 rounded bg-white/10 animate-pulse" />
            <div className="h-7 w-20 rounded-full bg-white/10 animate-pulse" />
          </div>
          <div className="h-16 w-full rounded-lg bg-white/5 animate-pulse" />
          <div className="h-4 w-40 rounded bg-white/10 animate-pulse" />
        </div>
      );
    }

    if (state.status === 'error') {
      return (
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between gap-3">
            <span className="text-[11px] font-normal uppercase tracking-widest text-brand-gray">LATEST PUSH</span>
          </div>
          <p className="text-sm text-brand-gray leading-relaxed">
            Couldn&apos;t load activity ({state.message}).{' '}
            <a
              href={`https://github.com/${user}/${repo}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 underline underline-offset-2 hover:text-white"
            >
              Open repo
            </a>
          </p>
        </div>
      );
    }

    if (state.status !== 'ready') {
      return null;
    }

    return (
      <motion.div
        variants={STAGGER_CONTAINER(0.08, 0)}
        className="flex flex-col gap-3"
      >
        <motion.div variants={FADE_UP} className="flex items-center justify-between gap-3 flex-wrap">
          <span className="text-[11px] font-normal uppercase tracking-widest text-brand-gray">LATEST PUSH</span>
          {state.badgeTime ? (
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-950/90 px-3 py-1.5 text-[11px] font-medium text-[#4ADE80]">
              <span className="h-2 w-2 shrink-0 rounded-full bg-[#4ADE80]" aria-hidden />
              {state.badgeTime}
            </span>
          ) : null}
        </motion.div>

        <motion.a
          variants={FADE_UP}
          href={state.commitUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group/msg block text-left"
        >
          <p className="text-[18px] md:text-[22px] font-bold leading-snug tracking-tight text-white group-hover/msg:opacity-90 transition-opacity">
            &quot;{state.message}&quot;
          </p>
        </motion.a>

        <motion.p variants={FADE_UP} className="text-[11px] leading-relaxed">
          <span className="text-brand-gray">Repo: </span>
          <span className="font-mono text-[#EF4444]">{state.repoLabel}</span>
        </motion.p>
      </motion.div>
    );
  };

  return (
    <motion.div
      variants={STAGGER_CONTAINER(0.1, 0.1)}
      initial="initial"
      whileInView="animate"
      viewport={{ once: false, amount: 0.2 }}
      className="flex min-h-0 flex-1 flex-col relative z-10"
    >
      <motion.div
        variants={STAGGER_CONTAINER(0.1, 0.05)}
        className="no-scrollbar flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto"
      >
        <motion.div variants={FADE_UP} className="flex shrink-0 items-center gap-3">
          <GhIcon className="size-7 md:size-8 shrink-0 text-white" strokeWidth={1.75} aria-hidden />
          <span className="font-['Cormorant_Garamond'] italic text-xl md:text-2xl text-white tracking-tight">
            Reeturaj&apos;s Github
          </span>
        </motion.div>
        <motion.div variants={FADE_UP} className="min-h-0">
          {body()}
        </motion.div>
      </motion.div>

      <motion.div
        variants={STAGGER_CONTAINER(0.08, 0)}
        className="flex shrink-0 items-center justify-center gap-10 border-t border-white/10 pt-3 md:gap-12"
      >
        {footerSocial.map(({ Icon, href, label }) => (
          <motion.a
            key={label}
            variants={FADE_UP}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 transition-colors hover:text-neutral-400"
            aria-label={label}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
          >
            <Icon className="size-5 md:size-[22px]" strokeWidth={1.75} />
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  );
};

const DotGrid = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
    <div className="absolute inset-0 dot-grid-layer" aria-hidden />
    <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#FF6B00]/10 rounded-full blur-3xl opacity-20" />
    <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-[#EC4899]/10 rounded-full blur-3xl opacity-20" />
  </div>
);

const LuxuryClock = () => {
  const [targetTime, setTargetTime] = useState(new Date());
  const [zoneIndex, setZoneIndex] = useState(0);

  const zones = [
    { label: 'INDIA', name: 'IST', offset: 5.5 },
    { label: 'LONDON', name: 'GMT', offset: 0 },
    { label: 'NEW YORK', name: 'EST', offset: -5 },
    { label: 'TOKYO', name: 'JST', offset: 9 }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      // Calculate UTC time and then add offset for the selected zone
      const now = new Date();
      const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
      const zoneTime = new Date(utc + (3600000 * zones[zoneIndex].offset));
      setTargetTime(zoneTime);
    }, 1000);
    return () => clearInterval(timer);
  }, [zoneIndex]);

  const cycleZone = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoneIndex((prev) => (prev + 1) % zones.length);
  };

  const seconds = targetTime.getSeconds();
  const minutes = targetTime.getMinutes();
  const hours = targetTime.getHours();

  const secRotate = (seconds / 60) * 360;
  const minRotate = (minutes / 60) * 360;
  const hourRotate = (hours / 24) * 360 + (minutes / 60) * 15;

  return (
    <div 
      onClick={cycleZone}
      className="relative w-60 h-60 md:w-72 md:h-72 shrink-0 flex items-center justify-center group/clock mx-auto transform-gpu transition-all duration-700 hover:scale-105 cursor-pointer active:scale-95"
    >
      {/* High-Res Static Base Image */}
      <img 
        src="/Clock.webp" 
        alt="Precision Clock Face" 
        className="absolute inset-0 w-full h-full object-contain pointer-events-none drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
      />

      {/* Dynamic Hand Layer Overlay */}
      <div className="relative w-full h-full flex items-center justify-center translate-y-[-1px]">
        <svg viewBox="0 0 200 200" className="w-full h-full relative z-20">
          <defs>
            <filter id="crisp-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="0.4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <linearGradient id="hand-facet" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f8fafc" />
              <stop offset="50%" stopColor="#ffffff" />
              <stop offset="50.1%" stopColor="#94a3b8" />
              <stop offset="100%" stopColor="#cbd5e1" />
            </linearGradient>
          </defs>

          {/* Timezone Indicator Label */}
          <text 
            x="100" y="76" 
            textAnchor="middle" 
            fill="white" 
            fillOpacity="0.2" 
            fontSize="7" 
            fontWeight="900" 
            className="tracking-[0.4em] uppercase font-['Outfit'] group-hover/clock:fill-orange-500/60 transition-colors"
          >
            {zones[zoneIndex].label}
          </text>

          {/* Hour Hand */}
          <g transform={`rotate(${hourRotate} 100 100)`} filter="url(#crisp-glow)">
            <path
              d="M100 100 L95.5 100 L100 48 L104.5 100 Z"
              fill="url(#hand-facet)"
              className="drop-shadow-2xl"
            />
          </g>

          {/* Minute Hand */}
          <g transform={`rotate(${minRotate} 100 100)`} filter="url(#crisp-glow)">
            <path
              d="M100 100 L97 100 L100 32 L103 100 Z"
              fill="url(#hand-facet)"
              className="drop-shadow-2xl"
            />
          </g>

          {/* Second Hand */}
          <g transform={`rotate(${secRotate} 100 100)`}>
            <line x1="100" y1="120" x2="100" y2="25" stroke="white" strokeWidth="0.75" strokeOpacity="1" />
            <circle cx="100" cy="100" r="2.5" fill="white" />
          </g>

          {/* Luxury Pinion Cover */}
          <circle cx="100" cy="100" r="5.5" fill="#0c0c0c" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="4.5" fill="url(#hand-facet)" fillOpacity="0.4" />
          <circle cx="100" cy="100" r="1.5" fill="white" />
        </svg>
      </div>
    </div>
  );
};

const BuildingDaily = () => {
  return (
    <section id="building-daily" className="relative w-full pt-4 pb-20 px-6 md:px-12 lg:px-20 bg-transparent overflow-hidden text-black">
      <div className="max-w-[1400px] mx-auto">
        <motion.div 
          variants={STAGGER_CONTAINER(0.1, 0)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: false, amount: 0.2 }}
          className="mb-8 md:mb-12 space-y-3 md:space-y-4"
        >
          <motion.p
            variants={FADE_UP}
            className="text-center text-[9px] md:text-[11px] font-medium uppercase tracking-[0.4em] md:tracking-[0.55em] text-black/55"
          >
            Behind the curtains
          </motion.p>
          <motion.h2
            variants={FADE_UP}
            className="mx-auto flex w-full max-w-[min(100%,1200px)] flex-nowrap items-baseline justify-center gap-x-2 px-2 font-black leading-none tracking-tighter sm:gap-x-3 md:gap-x-4 text-[clamp(1.3rem,5.2vw,4.75rem)]"
          >
            <span className="font-display shrink-0 text-black">Decoding logic</span>
            <span className="lyrics-gradient-text inline-flex shrink-0 items-baseline gap-x-1.5 font-['Cormorant_Garamond'] text-[1em] italic sm:gap-x-2 [&_span]:text-inherit">
              <span className="font-display not-italic font-black tracking-tight text-inherit">
                {'&&'}
              </span>
              <span className="text-inherit font-bold">the lyrics</span>
            </span>
          </motion.h2>
        </motion.div>

        <motion.div 
          variants={STAGGER_CONTAINER(0.1, 0.2)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: false, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          
          <motion.div variants={FADE_UP} className="group relative flex h-[360px] md:h-[380px] flex-col rounded-[20px] md:rounded-[24px] bg-[#0A0A0A] border border-white/5 p-6 md:p-8 overflow-hidden hover:border-white/10 transition-colors duration-500">
            <DotGrid />
            <GitHubActivityCard />
          </motion.div>

          <motion.div variants={FADE_UP} className="group relative h-[360px] md:h-[380px] rounded-[32px] bg-black border border-white/5 p-6 md:p-8 overflow-hidden hover:border-white/10 transition-colors duration-500">
            {/* Clock as a Background Element */}
            <div className="absolute inset-0 flex items-center justify-center mt-[-10px] md:mt-[-40px] z-0 opacity-80 group-hover:opacity-100 transition-opacity duration-700">
               <LuxuryClock />
            </div>

            <motion.div variants={STAGGER_CONTAINER(0.1, 0.1)} className="h-full flex flex-col justify-end relative z-20">
              <div className="relative z-50 space-y-2">
                <motion.p variants={FADE_UP} className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-[#FF6B00]/60">CORE ARCHITECTURE</motion.p>
                <motion.h3 variants={FADE_UP} className="text-xl md:text-2xl font-black text-white tracking-tight uppercase leading-tight">
                  Building high performance <br />
                  pixel-perfect interfaces.
                </motion.h3>
              </div>
            </motion.div>
          </motion.div>

          <motion.a
            variants={FADE_UP}
            href={SPOTIFY_TRACK_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex h-[360px] min-h-0 cursor-pointer flex-col overflow-hidden rounded-[32px] border border-white/5 bg-[#050505] shadow-[0_24px_80px_rgba(0,0,0,0.35)] transition-colors duration-500 hover:border-white/10 md:h-[380px]"
          >
            <SpotifyCardRadar />
            <div className="pointer-events-none absolute inset-0 opacity-35">
              <div className="absolute inset-0 dot-grid-layer" aria-hidden />
            </div>

            <motion.div
              variants={STAGGER_CONTAINER(0.06, 0.05)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: false }}
              className="relative z-10 flex min-h-0 flex-1 flex-col overflow-hidden px-3 pb-3 pt-3 md:px-5 md:pb-4 md:pt-4"
            >
              <motion.h3
                variants={FADE_UP}
                className="shrink-0 text-center font-display text-[11px] font-black italic leading-tight tracking-tight text-white md:text-[13px]"
              >
                <span className="lyrics-gradient-text bg-size-[200%_100%]">
                  Focused on soundtracks that carry the story
                </span>
              </motion.h3>

              <div className="mt-2 shrink-0 space-y-1 md:mt-2.5 md:space-y-1.5">
                <motion.div variants={FADE_UP} className="min-h-0 overflow-hidden">
                  <SpotifyMarquee items={SPOTIFY_PILL_ROW_A} trackClass="skills-marquee-track-l" />
                </motion.div>
                <motion.div variants={FADE_UP} className="min-h-0 overflow-hidden">
                  <SpotifyMarquee items={SPOTIFY_PILL_ROW_B} trackClass="skills-marquee-track-r" />
                </motion.div>
              </div>

              <div className="relative mt-2 flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden md:mt-3">
                <div className="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] shadow-inner">
                  <div className="flex shrink-0 items-center gap-2 border-b border-white/6 bg-[#111]/90 px-2.5 py-1.5 md:px-3 md:py-2">
                    <div className="flex gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-[#ff5f57] md:h-2.5 md:w-2.5" />
                      <span className="h-2 w-2 rounded-full bg-[#febc2e] md:h-2.5 md:w-2.5" />
                      <span className="h-2 w-2 rounded-full bg-[#28c840] md:h-2.5 md:w-2.5" />
                    </div>
                    <div className="mx-auto flex h-6 min-w-0 max-w-[180px] flex-1 items-center justify-center rounded-lg bg-black/40 px-2 ring-1 ring-white/6 md:h-7 md:max-w-[220px]">
                      <span className="truncate text-[9px] font-medium text-white/35 md:text-[10px]">
                        spotify — another story
                      </span>
                    </div>
                    <div className="w-10 shrink-0 md:w-12" aria-hidden />
                  </div>

                  <div className="relative flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden px-2.5 py-3 md:px-4 md:py-3.5">
                    <div
                      className="pointer-events-none absolute inset-0 opacity-[0.2] dot-grid-layer"
                      aria-hidden
                    />
                    <motion.div
                      variants={STAGGER_CONTAINER(0.08, 0.05)}
                      initial="initial"
                      whileInView="animate"
                      viewport={{ once: false }}
                      className="relative z-10 flex min-h-0 flex-1 flex-col items-center justify-center gap-2 text-center md:gap-2.5"
                    >
                      <motion.p
                        variants={FADE_UP}
                        className="font-display max-w-[240px] text-[11px] font-semibold leading-snug text-white md:max-w-[260px] md:text-[13px]"
                      >
                        Something that{" "}
                        <span className="font-black text-[#FF6B00]">carries the story.</span>
                      </motion.p>
                      <motion.p
                        variants={FADE_UP}
                        className="max-w-[240px] text-[9px] leading-snug text-white/45 md:max-w-[260px] md:text-[10px]"
                      >
                        <span className="font-bold text-white/75">Another Story</span>
                        {" · "}
                        <span className="text-white/45">Nicholas Hooper</span>
                        <br />
                        <span className="text-white/35">
                          Harry Potter and the Order of the Phoenix
                        </span>
                      </motion.p>
                      <motion.span
                        variants={FADE_UP}
                        className="mt-0.5 inline-flex shrink-0 items-center justify-center rounded-full bg-white px-5 py-1.5 text-[9px] font-black uppercase tracking-[0.16em] text-black transition-transform group-hover:scale-[1.02] group-active:scale-[0.98] md:px-6 md:py-2 md:text-[10px] md:tracking-[0.18em]"
                      >
                        Open in Spotify
                      </motion.span>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default BuildingDaily;
