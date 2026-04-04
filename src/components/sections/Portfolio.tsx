import { useLayoutEffect, useRef, useState } from "react";
import { Star, Eye } from "lucide-react";
import { motion } from "motion/react";
import { useScroll, useTransform } from "framer-motion";
import {
  FADE_UP,
  TRANSITIONS,
  STAGGER_CONTAINER,
} from "../../constants/motion";

import learnnexusImg from "../../assets/projects/learnnexus.webp";
import hiretrackImg from "../../assets/projects/hiretrack.webp";
import tuneflowImg from "../../assets/projects/tuneflow.webp";
import designStudioImg from "../../assets/projects/design_studio.webp";
import beanHavenCafeImg from "../../assets/projects/Bean.webp";

type Project = {
  id: string;
  title: string;
  description: string;
  features: string[];
  stack: string[];
  mockups: { mobile1: string; mobile2: string; desktop: string };
  color: string;
  link: string;
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div
      variants={FADE_UP}
      initial="initial"
      whileInView="animate"
      viewport={{ once: false, amount: 0.1 }}
      transition={TRANSITIONS.smooth}
      className="w-[90vw] sm:w-[85vw] md:w-[75vw] lg:w-[1000px] shrink-0 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-center bg-white py-6 md:py-8 rounded-4xl border border-black/5 relative group overflow-hidden h-auto lg:h-[420px]"
    >
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 z-40 block"
        aria-label={`Open ${project.title}`}
      />

      <motion.div variants={STAGGER_CONTAINER(0.1, 0.1)} className="contents">
        <div className="hidden lg:flex absolute z-30 pointer-events-none w-24 h-24 items-center justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100">
          <div className="absolute inset-0 bg-black rounded-full shadow-2xl" />
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 w-full h-full scale-[0.88] drop-shadow-lg"
          >
            <defs>
              <path
                id={`circlePath-${project.id}`}
                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              />
            </defs>
            <text className="text-[9.5px] font-black uppercase tracking-[0.25em] fill-white">
              <textPath href={`#circlePath-${project.id}`}>
                Visit Project • Visit • Visit •
              </textPath>
            </text>
          </svg>
          <div className="relative z-10 w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-inner">
            <Eye size={20} className="text-black" />
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col pt-0 px-6 sm:px-10 relative z-10">
          <motion.div
            variants={FADE_UP}
            className="flex items-center gap-3 md:gap-4 mb-2"
          >
            <div className="w-4 md:w-6 h-[2px] bg-[#FF6B00]" />
            <h3 className="text-[18px] xs:text-[22px] md:text-[28px] font-black tracking-tighter text-black">
              {project.title}
            </h3>
          </motion.div>
          <motion.p
            variants={FADE_UP}
            className="text-[10px] md:text-[13px] font-medium text-black/40 leading-relaxed mt-1 md:mt-2 line-clamp-3 md:line-clamp-none"
          >
            {project.description}
          </motion.p>
          <motion.div
            variants={STAGGER_CONTAINER(0.05, 0.2)}
            className="hidden md:flex flex-col gap-2 md:gap-3 mt-4 md:mt-5"
          >
            {project.features.slice(0, 3).map((feature, i) => (
              <motion.div
                key={i}
                variants={FADE_UP}
                className="flex gap-3 md:gap-4 group/item cursor-default"
              >
                <div className="mt-1">
                  <Star size={11} className="text-[#FF6B00]" />
                </div>
                <p className="text-[10px] md:text-[12px] font-bold text-black/20 group-hover/item:text-black/50 tracking-tight">
                  {feature}
                </p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            variants={STAGGER_CONTAINER(0.05, 0.3)}
            className="hidden md:flex flex-wrap gap-2 md:gap-2 mt-4 md:mt-6"
          >
            {project.stack.map((tech) => (
              <motion.div
                key={tech}
                variants={FADE_UP}
                className="bg-black/3 border border-black/5 rounded-lg px-2 md:px-3 py-1 flex items-center gap-2 group/pill cursor-default"
              >
                <span className="text-[8px] md:text-[9px] font-black uppercase tracking-wider text-black/40 group-hover/pill:text-black">
                  {tech}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={FADE_UP}
          transition={{ delay: 0.4, ...TRANSITIONS.smooth }}
          className="lg:col-span-7 relative group px-6 sm:px-10 lg:pl-0 lg:pr-10"
        >
          <div
            className={`relative rounded-3xl md:rounded-[2.5rem] overflow-hidden bg-linear-to-br ${project.color} border border-white/10 h-[220px] xs:h-[260px] sm:h-[300px] md:h-[320px] mt-4 lg:mt-0`}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-orange-500/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="relative z-10 h-full">
              <div className="rounded-xl overflow-hidden shadow-2xl transform-gpu h-full">
                <img
                  src={project.mockups.desktop}
                  className="w-full h-full object-cover"
                  alt="Desktop"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <div className="hidden lg:block absolute left-[41.666667%] top-10 bottom-10 pointer-events-none translate-x-[-50%] z-0">
        <div className="w-px h-full bg-black/6" />
      </div>
    </motion.div>
  );
};

const PORTFOLIO_PROJECTS: Project[] = [
  {
    id: "01",
    title: "LearnNexus",
    description:
      "An advanced, integrated LMS platform featuring comprehensive course tracking, real-time engagement analytics, and seamless content delivery.",
    features: [
      "Advanced course-tracking & certificate generation system",
      "Real-time learner engagement & retention analytics",
      "Seamless high-bandwidth video content delivery network",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
    mockups: {
      mobile1: learnnexusImg,
      mobile2: learnnexusImg,
      desktop: learnnexusImg,
    },
    color: "from-orange-600/10 to-orange-900/5",
    link: "https://learnnexus.vercel.app/",
  },
  {
    id: "02",
    title: "HireTrack",
    description:
      "An intelligent, AI-powered recruitment portal designed to streamline candidate sourcing and simplify automated technical hiring workflows.",
    features: [
      "AI-driven automated candidate matching & scoring",
      "Streamlined technical assessment pipeline integration",
      "Enterprise-grade recruiter dashboard with real-time tracking",
    ],
    stack: ["Next.js", "PostgreSQL", "Clerk", "Radix UI", "Zod"],
    mockups: {
      mobile1: hiretrackImg,
      mobile2: hiretrackImg,
      desktop: hiretrackImg,
    },
    color: "from-blue-600/10 to-blue-900/5",
    link: "https://hiretrack.vercel.app/",
  },
  {
    id: "03",
    title: "TuneFlow",
    description:
      "A sleek, social music streaming web application providing personalized active playback queues and precise real-time listening analytics.",
    features: [
      "Personalized active playback queue recommendation engine",
      "Real-time social listening sync & analytics dashboard",
      "High-fidelity Low-Latency audio processing engine",
    ],
    stack: ["React", "TypeScript", "WebSockets", "Node.js", "Express"],
    mockups: {
      mobile1: tuneflowImg,
      mobile2: tuneflowImg,
      desktop: tuneflowImg,
    },
    color: "from-purple-600/10 to-purple-900/5",
    link: "https://tuneflow-4vd5.onrender.com/",
  },
  {
    id: "04",
    title: "Design Studio",
    description:
      "A high-performance interactive portfolio showcase tailored specifically for presenting premium design projects.",
    features: [
      "Interactive high-performance case study showcase",
      "Enterprise-level creative project presentational engine",
      "High-fidelity cinematic visual experience and smooth motion",
    ],
    stack: ["React", "TailwindCSS", "Framer Motion", "GSAP", "Three.js"],
    mockups: {
      mobile1: designStudioImg,
      mobile2: designStudioImg,
      desktop: designStudioImg,
    },
    color: "from-orange-600/10 to-orange-900/5",
    link: "https://design-studio-lovat.vercel.app/",
  },
  {
    id: "05",
    title: "Bean Haven Cafe",
    description:
      "Minimalist coffee café website capturing a cozy, nostalgic vibe with a simple menu, smooth ordering, and a focus on coffee culture.",
    features: [
      "Clean, minimal display of classic beverages like Americano, Latte, and Cappuccino.",
      "Quick order flow with easy detail entry and drink selection.",
      "Aesthetic, calming theme focused on relaxation and coffee culture",
    ],
    stack: ["React", "TailwindCSS", "Framer Motion"],
    mockups: {
      mobile1: designStudioImg,
      mobile2: beanHavenCafeImg,
      desktop: beanHavenCafeImg,
    },
    color: "from-orange-600/10 to-orange-900/5",
    link: "https://coffee-cafe-sigma-two.vercel.app/",
  },
];

const Portfolio = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [maxShiftPx, setMaxShiftPx] = useState(0);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  useLayoutEffect(() => {
    const sticky = stickyRef.current;
    const track = trackRef.current;
    if (!sticky || !track) return;

    const update = () => {
      setMaxShiftPx(Math.max(0, track.scrollWidth - sticky.clientWidth));
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(track);
    ro.observe(sticky);
    return () => ro.disconnect();
  }, []);

  const x = useTransform(scrollYProgress, (p) => -p * maxShiftPx);

  return (
    <section
      id="portfolio"
      ref={targetRef}
      className="relative h-[300vh] bg-transparent text-black"
    >
      <div
        ref={stickyRef}
        className="sticky top-0 h-screen flex flex-col items-start justify-center overflow-hidden"
      >
        <motion.div
          variants={STAGGER_CONTAINER(0.1, 0.2)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: false, amount: 0.2 }}
          transition={TRANSITIONS.smooth}
          className="px-6 md:px-12 lg:px-20 w-full text-left pt-2 md:pt-4 lg:pt-6 mb-6 md:mb-10"
        >
          <motion.p
            variants={FADE_UP}
            className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.4em] md:tracking-[0.5em] text-black/30 mb-2"
          >
            Crafting Modern Experiences
          </motion.p>
          <motion.h2
            variants={FADE_UP}
            className="text-[28px] mb-1 xs:text-[34px] sm:text-[38px] md:text-[54px] font-black tracking-tighter leading-none uppercase text-black"
          >
            Venture{" "}
            <span className="font-['Cormorant_Garamond'] italic font-normal text-transparent bg-clip-text bg-linear-to-r from-[#FF6B00] via-[#FDBA74] to-[#EB3678] tracking-tight">
              Showcase
            </span>
          </motion.h2>
        </motion.div>

        <motion.div
          ref={trackRef}
          style={{ x }}
          className="flex gap-6 md:gap-12 px-6 md:px-12 lg:px-20 items-start"
        >
          {PORTFOLIO_PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
          <div className="shrink-0 w-6 md:w-12 lg:w-20" aria-hidden />
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
