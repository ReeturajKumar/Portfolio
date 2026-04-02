import { MapPin, Zap, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { FADE_UP, TRANSITIONS, STAGGER_CONTAINER } from "../../constants/motion";

import hexawareLogo from '/src/assets/companies/hexaware.png';
import vigomergeLogo from '/src/assets/companies/vigomerge.png';
import jioLogo from '/src/assets/companies/jio.png';
import greamioLogo from '/src/assets/companies/Greamio.png';

const Journey = () => {
  const experiences = [
     {
      id: "01",
      company: "GREAMIO TECHNOLOGIES",
      logo: greamioLogo,
      location: "Nagpur",
      role: "FULL STACK DEVELOPER",
      period: "2026",
      duration: "Dec 2025 — Present",
      highlights: "Full-stack developer building and deploying scalable apps with React, Next.js, and Node.js, specializing in APIs, auth, payments, and CI/CD.",
      stack: ["React", "AI", "Node JS", "TypeScript"]
    },
    {
      id: "02",
      company: "HEXAWARE TECHNOLOGIES",
      logo: hexawareLogo,
      location: "Mumbai",
      role: "Software Engineer Intern",
      period: "2025",
      duration: "Mar 2025 — May 2025",
      highlights: "Developed AI-powered e-commerce app with PayPal & chatbot automation. Enhanced state management & UI responsiveness.",
      stack: ["React", "AI", "PayPal", "Redux"]
    },
    {
      id: "03",
      company: "VIGOMERGE INC",
      logo: vigomergeLogo,
      location: "Pune",
      role: "Associate Engineer Intern",
      period: "2024",
      duration: "Sep 2023 — Feb 2024",
      highlights: "Built full-stack appointment system. Optimized Redux state consistency. Contributed to 25% faster CI/CD deployment.",
      stack: ["Redux", "CI/CD", "Node.js", "Agile"]
    },
    {
      id: "04",
      company: "JIO PLATFORMS LTD",
      logo: jioLogo,
      location: "Mumbai",
      role: "Software Engineer Intern",
      period: "2023",
      duration: "Jul 2023 — Oct 2023",  
      highlights: "Built AI Expense Tracker with PDF extraction (Next.js/Node). Implemented JWT & automated email workflows.",
      stack: ["Next.js", "Node.js", "MongoDB", "JWT"]
    }
  ];

  return (
    <section id="journey" className="relative w-full bg-transparent pt-6 md:pt-10 pb-12 px-4 md:px-12 lg:px-20 overflow-x-clip text-black">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-14 lg:gap-40 items-start">
        
        <motion.div 
          variants={STAGGER_CONTAINER(0.1, 0)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: false, amount: 0.2 }}
          className="lg:col-span-4 sticky top-32 self-start space-y-6 md:space-y-8"
        >
          <div className="space-y-4 text-left">
            <motion.div variants={FADE_UP} className="flex items-center gap-3">
              <div className="w-8 md:w-10 h-px bg-black/10" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-black/40">The Narrative</span>
            </motion.div>
            
            <motion.h2 variants={FADE_UP} className="text-[38px] xs:text-[44px] md:text-[64px] font-black tracking-tighter leading-[0.9] uppercase text-black">
              Professional <br />
              <span className="font-['Cormorant_Garamond'] italic font-normal text-transparent bg-clip-text bg-linear-to-r from-[#FF6B00] via-[#FDBA74] to-[#EB3678] tracking-tight">Journey</span>
            </motion.h2>
          </div>

          <motion.div variants={FADE_UP} className="pt-6 md:pt-8 border-t border-black/6 space-y-6">
            <p className="text-[13px] md:text-[14px] font-medium leading-relaxed italic pr-4 md:pr-12 text-black/60">
              &quot;A chronological archive of technical milestones, internship breakthroughs, and evolutionary growth in full-stack engineering.&quot;
            </p>
            
            <div className="flex items-center gap-6 text-black/60">
              <div className="flex flex-col">
                <span className="text-[20px] md:text-[24px] font-black italic tracking-tighter text-black">03</span>
                <span className="text-[9px] font-black uppercase tracking-widest text-black/30">Milestones</span>
              </div>
              <div className="w-px h-10 bg-black/5" />
              <div className="flex flex-col">
                <span className="text-[20px] md:text-[24px] font-black italic tracking-tighter text-black">01+</span>
                <span className="text-[9px] font-black uppercase tracking-widest text-black/30">Years</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <div className="lg:col-span-8 space-y-2 md:space-y-4 relative">
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            whileInView={{ height: "100%", opacity: 1 }}
            viewport={{ once: false }}
            transition={{ ...TRANSITIONS.smooth, duration: 1.5 }}
            className="absolute left-0 lg:left-[-80px] top-4 bottom-4 w-px bg-black/6 hidden md:block" 
          />

          {experiences.map((exp, idx) => (
            <motion.div 
              key={exp.id}
              variants={FADE_UP}
              initial="initial"
              whileInView="animate"
              viewport={{ once: false, amount: 0.1 }}
              className="relative group grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 py-8 md:py-12 border-b border-black/4 last:border-0 hover:bg-black/[0.01] transition-all duration-500 rounded-2xl px-4 -mx-4"
            >
              <div className="hidden md:flex absolute left-[-5px] lg:left-[-85px] top-10 md:top-12 w-2.5 h-2.5 rounded-full bg-white border-2 border-[#FF6B00] z-10 transition-all duration-500 group-hover:scale-125 group-hover:bg-[#FF6B00]" />

              <motion.div 
                variants={FADE_UP}
                transition={{ delay: 0.1 + idx * 0.05 }}
                className="md:col-span-2 relative z-10"
              >
                <div className="flex flex-col gap-1.5 border-l-2 border-[#FF6B00]/40 pl-5 group-hover:border-[#FF6B00] transition-all duration-500">
                  <span className="text-[17px] md:text-[22px] font-black tracking-tighter italic leading-[1.1] block text-black/80 group-hover:text-[#FF6B00] transition-all duration-500 uppercase">
                    {exp.duration}
                  </span>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[9px] font-black uppercase tracking-widest text-[#FF6B00]/60">Timeline Pillar</span>
                    <span className="w-1 h-1 rounded-full bg-[#FF6B00]/30 group-hover:bg-[#FF6B00] transition-colors" />
                  </div>
                </div>
              </motion.div>

              <div className="md:col-span-6 space-y-6 relative z-10">
                <div className="space-y-4">
                  <motion.div 
                    variants={STAGGER_CONTAINER(0.1, 0.2)}
                    className="flex items-center gap-5"
                  >
                    <motion.div variants={FADE_UP} className="w-12 h-12 md:w-14 md:h-14 shrink-0 bg-white border border-black/5 rounded-2xl overflow-hidden p-2 group-hover:border-[#FF6B00]/40 shadow-sm transition-all duration-500 group-hover:shadow-lg group-hover:-translate-y-1">
                      <img src={exp.logo} className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-700" alt={exp.company} />
                    </motion.div>
                    <div className="space-y-0.5">
                      <motion.h3 variants={FADE_UP} className="text-[20px] xs:text-[22px] md:text-[32px] font-black tracking-tighter uppercase leading-tight text-black group-hover:tracking-tight transition-all duration-500">
                        {exp.company}
                      </motion.h3>
                      <motion.div variants={FADE_UP} className="flex flex-wrap items-center gap-3 md:gap-4">
                        <span className="text-[10px] md:text-[11px] font-black uppercase tracking-wider text-[#FF6B00]">{exp.role}</span>
                        <span className="hidden xs:block w-1 h-1 rounded-full bg-black/10" />
                        <div className="flex items-center gap-1.5 text-[9px] md:text-[10px] font-bold text-black/40 uppercase tracking-widest">
                          <MapPin size={10} className="group-hover:text-[#FF6B00] transition-colors" />
                          {exp.location}
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>

                <motion.p variants={FADE_UP} className="text-[14px] md:text-[15px] font-medium text-black/60 leading-relaxed max-w-lg italic group-hover:text-black/80 transition-colors">
                  &quot;{exp.highlights}&quot;
                </motion.p>

                <motion.div variants={STAGGER_CONTAINER(0.05, 0.4)} className="flex flex-wrap gap-2 md:gap-2.5 pt-2">
                  {exp.stack.map(tech => (
                    <motion.span 
                      key={tech} 
                      variants={FADE_UP} 
                      className="text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1.5 bg-black/3 text-black/60 border border-black/5 rounded-lg hover:bg-black hover:text-white transition-all duration-300 cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
              </div>

              <motion.div 
                variants={FADE_UP}
                transition={{ delay: 0.3, ...TRANSITIONS.smooth }}
                className="md:col-span-4 flex flex-col justify-start md:items-end relative z-10"
              >
                <div className="p-6 md:p-8 bg-black/3 border border-black/5 rounded-[2rem] w-full md:w-auto md:min-w-[200px] group-hover:bg-black group-hover:text-white transition-all duration-700 group-hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.3)] transform-gpu group-hover:-translate-y-2">
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] opacity-40 group-hover:opacity-60 transition-opacity">Milestone Impact</span>
                  </div>
                  <div className="mt-5 pt-5 border-t border-black/5 group-hover:border-white/10 flex justify-between items-center transition-colors">
                    <Zap size={16} className="text-[#FF6B00] animate-pulse" />
                    <Star size={14} className="opacity-0 group-hover:opacity-100 transition-all duration-500 fill-[#FF6B00] text-[#FF6B00]" />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div 
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 0.02 }}
        viewport={{ once: false }}
        transition={TRANSITIONS.slow}
        className="absolute top-1/2 right-[-5%] -translate-y-1/2 rotate-90 pointer-events-none select-none hidden lg:block text-black/10"
      >
        <span className="text-[200px] font-black uppercase tracking-tighter whitespace-nowrap">TIMELINE_ARCHIVE_2025</span>
      </motion.div>
    </section>
  );
};

export default Journey;
