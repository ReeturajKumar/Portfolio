import { useRef } from "react";
import { MapPin } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import {
  FADE_UP,
  TRANSITIONS,
  STAGGER_CONTAINER,
} from "../../constants/motion";

import hexawareLogo from "/src/assets/companies/hexaware.png";
import vigomergeLogo from "/src/assets/companies/vigomerge.png";
import jioLogo from "/src/assets/companies/jio.png";
import greamioLogo from "/src/assets/companies/Greamio.png";

const Journey = () => {
  /** Scroll progress through the experience list only (accurate vs whole section). */
  const experienceListRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: experienceListRef,
    offset: ["start end", "end start"],
  });
  /** Avatar sits on the leading edge of the filled segment (same progress as black fill). */
  const avatarTop = useTransform(scrollYProgress, [0, 1], ["5%", "95%"]);

  const experiences = [
    {
      id: "01",
      company: "GREAMIO TECHNOLOGIES",
      logo: greamioLogo,
      location: "Nagpur",
      role: "FULL STACK DEVELOPER",
      period: "2026",
      duration: "Dec 2025 — Present",
      highlights:
        "Full-stack developer building and deploying scalable apps with React, Next.js, and Node.js, specializing in APIs, auth, payments, and CI/CD.",
      stack: ["React", "AI", "Node JS", "TypeScript"],
    },
    {
      id: "02",
      company: "HEXAWARE TECHNOLOGIES",
      logo: hexawareLogo,
      location: "Mumbai",
      role: "Software Engineer Intern",
      period: "2025",
      duration: "Mar 2025 — May 2025",
      highlights:
        "Developed AI-powered e-commerce app with PayPal & chatbot automation. Enhanced state management & UI responsiveness.",
      stack: ["React", "AI", "PayPal", "Redux"],
    },
    {
      id: "03",
      company: "VIGOMERGE INC",
      logo: vigomergeLogo,
      location: "Pune",
      role: "Associate Engineer Intern",
      period: "2024",
      duration: "Sep 2023 — Feb 2024",
      highlights:
        "Built full-stack appointment system. Optimized Redux state consistency. Contributed to 25% faster CI/CD deployment.",
      stack: ["Redux", "CI/CD", "Node.js", "Agile"],
    },
    {
      id: "04",
      company: "JIO PLATFORMS LTD",
      logo: jioLogo,
      location: "Mumbai",
      role: "Software Engineer Intern",
      period: "2023",
      duration: "Jul 2023 — Oct 2023",
      highlights:
        "Built AI Expense Tracker with PDF extraction (Next.js/Node). Implemented JWT & automated email workflows.",
      stack: ["Next.js", "Node.js", "MongoDB", "JWT"],
    },
  ];

  return (
    <section
      id="journey"
      className="relative w-full bg-transparent pt-6 md:pt-10 pb-14 md:pb-16 px-4 md:px-12 lg:px-20 overflow-x-clip text-black"
    >
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-start gap-10 md:gap-12 lg:grid-cols-[minmax(240px,360px)_4.5rem_1fr] lg:items-stretch lg:gap-x-6 lg:gap-y-0 xl:grid-cols-[minmax(260px,400px)_5rem_1fr] xl:gap-x-8">
        <motion.div
          variants={STAGGER_CONTAINER(0.1, 0)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: false, amount: 0.2 }}
          className="sticky top-[64px] z-40 mb-6 space-y-5 bg-white py-2 transition-all duration-500 md:space-y-6 lg:top-32 lg:mb-0 lg:self-start lg:bg-transparent -mx-4 px-4 lg:mx-0 lg:px-0"
        >
          <div className="space-y-5 md:space-y-6 text-left">
            <motion.div
              variants={FADE_UP}
              className="flex items-center gap-3 md:gap-4"
            >
              <div className="w-8 md:w-10 h-px shrink-0 bg-black/10" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-black/40">
                The Narrative
              </span>
            </motion.div>

            <motion.h2
              variants={FADE_UP}
              className="text-[38px] xs:text-[44px] md:text-[64px] font-black tracking-tighter leading-[0.92] uppercase text-black"
            >
              Professional <br />
              <span className="font-['Cormorant_Garamond'] italic font-normal text-transparent bg-clip-text bg-linear-to-r from-[#FF6B00] via-[#FDBA74] to-[#EB3678] tracking-tight">
                Journey
              </span>
            </motion.h2>
          </div>

          <motion.div
            variants={FADE_UP}
            className="pt-7 md:pt-9 border-t border-black/6 space-y-7 md:space-y-8 hidden md:block"
          >
            <p className="text-[13px] md:text-[14px] font-medium leading-relaxed italic pr-2 md:pr-8 lg:pr-10 text-black/60">
              &quot;A chronological archive of technical milestones, internship
              breakthroughs, and evolutionary growth in full-stack
              engineering.&quot;
            </p>

            <div className="flex items-center gap-8 md:gap-10 text-black/60">
              <div className="flex flex-col gap-0.5">
                <span className="text-[20px] md:text-[24px] font-black italic tracking-tighter text-black">
                  04
                </span>
                <span className="text-[9px] font-black uppercase tracking-widest text-black/30">
                  Milestones
                </span>
              </div>
              <div className="w-px h-11 shrink-0 bg-black/5" />
              <div className="flex flex-col gap-0.5">
                <span className="text-[20px] md:text-[24px] font-black italic tracking-tighter text-black">
                  01+
                </span>
                <span className="text-[9px] font-black uppercase tracking-widest text-black/30">
                  Years
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <div
          className="relative hidden h-full min-h-0 w-full justify-self-end lg:translate-x-4 xl:translate-x-5 2xl:translate-x-6 lg:block"
          aria-hidden
        >
          <div className="relative ml-auto mr-0 h-full w-full max-w-[4.5rem] xl:max-w-[5rem]">
            {/* Track: gray full height; black fill grows top → bottom with scroll through experience list */}
            <div className="pointer-events-none absolute inset-y-10 left-1/2 w-[5px] -translate-x-1/2 overflow-hidden rounded-full bg-black/10 md:w-[6px]">
              <motion.div
                className="h-full w-full origin-top rounded-full bg-black"
                style={{ scaleY: scrollYProgress }}
              />
            </div>
            <motion.div
              className="pointer-events-none absolute left-1/2 z-[15] h-11 w-11 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-2 border-black shadow-md ring-2 ring-white md:h-12 md:w-12"
              style={{ top: avatarTop }}
            >
              <img
                src="/Navbar.png"
                alt=""
                className="h-full w-full object-cover object-[center_20%] scale-110"
                draggable={false}
              />
            </motion.div>
          </div>
        </div>

        <div
          ref={experienceListRef}
          className="min-w-0 space-y-5 md:space-y-7 lg:pl-2 lg:pr-0 xl:pl-8 2xl:pl-12"
        >
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              variants={FADE_UP}
              initial="initial"
              whileInView="animate"
              viewport={{ once: false, amount: 0.1 }}
              className="relative group grid grid-cols-1 lg:grid-cols-12 lg:grid-rows-[auto_auto_auto] gap-x-6 gap-y-5 md:gap-x-8 md:gap-y-6 lg:gap-x-10 py-7 md:py-9 lg:py-10 border-b border-black/4 last:border-0 hover:bg-black/[0.01] transition-all duration-500 rounded-2xl px-4 md:px-5 -mx-4 md:-mx-5"
            >
              {/* Row 1: duration (left rail) + logo & company — aligned on one band */}
              <motion.div
                variants={FADE_UP}
                transition={{ delay: 0.1 + idx * 0.05 }}
                className="relative z-10 min-w-0 lg:col-span-3 lg:row-start-1 lg:self-center"
              >
                <div className="border-l-2 border-[#FF6B00]/40 pl-4 md:pl-5 group-hover:border-[#FF6B00] transition-all duration-500">
                  <p className="font-display text-[14px] font-black uppercase leading-tight tracking-tight text-black/90 group-hover:text-[#FF6B00] transition-colors sm:text-[15px] md:text-[17px] lg:text-[18px]">
                    {exp.duration}
                  </p>
                  <div className="mt-2 flex flex-nowrap items-center gap-2">
                    <span className="text-[9px] font-black uppercase tracking-widest text-[#FF6B00]/70">
                      Timeline Pillar
                    </span>
                    <span className="h-1 w-1 shrink-0 rounded-full bg-[#FF6B00]/40 group-hover:bg-[#FF6B00] transition-colors" />
                  </div>
                </div>
              </motion.div>

              <div className="relative z-10 min-w-0 lg:col-span-9 lg:row-start-1 lg:self-center">
                <motion.div
                  variants={STAGGER_CONTAINER(0.1, 0.2)}
                  className="flex items-start gap-4 md:gap-5"
                >
                  <motion.div
                    variants={FADE_UP}
                    className="h-12 w-12 shrink-0 overflow-hidden rounded-2xl border border-black/5 bg-white p-2 shadow-sm transition-all duration-500 group-hover:-translate-y-0.5 group-hover:border-[#FF6B00]/40 group-hover:shadow-lg md:h-14 md:w-14"
                  >
                    <img
                      src={exp.logo}
                      className="h-full w-full object-contain grayscale transition-all duration-700 group-hover:grayscale-0"
                      alt={exp.company}
                    />
                  </motion.div>
                  <div className="min-w-0 space-y-1">
                    <motion.h3
                      variants={FADE_UP}
                      className="text-[20px] font-black uppercase leading-tight tracking-tighter text-black xs:text-[22px] md:text-[30px] lg:text-[32px]"
                    >
                      {exp.company}
                    </motion.h3>
                    <motion.div
                      variants={FADE_UP}
                      className="flex flex-wrap items-center gap-x-3 gap-y-1 md:gap-x-4"
                    >
                      <span className="text-[10px] font-black uppercase tracking-wider text-[#FF6B00] md:text-[11px]">
                        {exp.role}
                      </span>
                      <span className="hidden h-1 w-1 rounded-full bg-black/10 xs:block" />
                      <div className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-widest text-black/40 md:text-[10px]">
                        <MapPin
                          size={10}
                          className="transition-colors group-hover:text-[#FF6B00]"
                        />
                        {exp.location}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>

              {/* Row 2–3: body copy + tags aligned with company column */}
              <motion.p
                variants={FADE_UP}
                className="text-[14px] font-medium italic leading-relaxed text-black/60 group-hover:text-black/80 md:text-[15px] lg:col-span-9 lg:col-start-4 lg:row-start-2 max-w-2xl"
              >
                &quot;{exp.highlights}&quot;
              </motion.p>

              <motion.div
                variants={STAGGER_CONTAINER(0.05, 0.4)}
                className="flex flex-wrap gap-2 md:gap-2.5 lg:col-span-9 lg:col-start-4 lg:row-start-3"
              >
                {exp.stack.map((tech) => (
                  <motion.span
                    key={tech}
                    variants={FADE_UP}
                    className="cursor-default rounded-lg border border-black/5 bg-black/3 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.2em] text-black/60 transition-all duration-300 hover:bg-black hover:text-white"
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ x: 72, opacity: 0 }}
        whileInView={{ x: 0, opacity: 0.02 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={TRANSITIONS.slow}
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 hidden w-full max-w-[1400px] -translate-x-1/2 -translate-y-1/2 select-none lg:block"
      >
        <div className="flex w-full justify-end pr-2 xl:pr-6">
          <span className="inline-block origin-center translate-x-[18%] rotate-90 text-[clamp(4.5rem,12vw,12.5rem)] font-black uppercase tracking-tighter whitespace-nowrap text-black/10">
            TIMELINE_ARCHIVE_2025
          </span>
        </div>
      </motion.div>
    </section>
  );
};

export default Journey;
