import { motion, type Variants } from 'framer-motion';
import { MapPin, Zap, Star } from 'lucide-react';

// Import Company Logos
import hexawareLogo from '/src/assets/companies/hexaware.png';
import vigomergeLogo from '/src/assets/companies/vigomerge.png';
import jioLogo from '/src/assets/companies/jio.png';

const Journey = () => {
  const experiences = [
    {
      id: "01",
      company: "HEXAWARE TECHNOLOGIES",
      logo: hexawareLogo,
      location: "Mumbai",
      role: "Software Engineer Intern",
      period: "2025",
      duration: "MAR — MAY",
      impact: "30% Step Reduction",
      highlights: "Developed AI-powered e-commerce app with PayPal & chatbot automation. Enhanced state management & UI responsiveness.",
      stack: ["React", "AI", "PayPal", "Redux"]
    },
    {
      id: "02",
      company: "VIGOMERGE INC",
      logo: vigomergeLogo,
      location: "Pune",
      role: "Associate Engineer Intern",
      period: "2024",
      duration: "SEP — FEB",
      impact: "99.9% Reliability",
      highlights: "Built full-stack appointment system. Optimized Redux state consistency. Contributed to 25% faster CI/CD deployment.",
      stack: ["Redux", "CI/CD", "Node.js", "Agile"]
    },
    {
      id: "03",
      company: "JIO PLATFORMS LTD",
      logo: jioLogo,
      location: "Mumbai",
      role: "Software Engineer Intern",
      period: "2023",
      duration: "JUL — OCT",
      impact: "Neural Extraction",
      highlights: "Built AI Expense Tracker with PDF extraction (Next.js/Node). Implemented JWT & automated email workflows.",
      stack: ["Next.js", "Node.js", "MongoDB", "JWT"]
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const leftVariants: Variants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const rightVariants: Variants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section id="journey" className="relative w-full bg-transparent pt-12 pb-6 px-4 md:px-12 lg:px-20 overflow-hidden text-black">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-16">
        
        {/* Left Column: Fixed Context (Sticky on Desktop) - Coming from Left */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={leftVariants}
          className="lg:col-span-4 lg:sticky lg:top-24 h-fit space-y-6 md:space-y-8"
        >
          <div className="space-y-4">
            <motion.div variants={itemVariants} className="flex items-center gap-3">
              <div className="w-8 md:w-10 h-[1px] bg-black/10" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-black/40">The Narrative</span>
            </motion.div>
            
            <motion.h2 variants={itemVariants} className="text-[38px] xs:text-[44px] md:text-[64px] font-black tracking-tighter leading-[0.9] uppercase text-black">
              Professional <br />
              <span className="font-['Cormorant_Garamond'] italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] via-[#FDBA74] to-[#EB3678] tracking-tight">Journey</span>
            </motion.h2>
          </div>

          <motion.div variants={itemVariants} className="pt-6 md:pt-8 border-t border-black/[0.06] space-y-6">
            <p className="text-[13px] md:text-[14px] font-medium text-black/40 leading-relaxed italic pr-4 md:pr-8 text-black/60">
              "A chronological archive of technical milestones, internship breakthroughs, and evolutionary growth in full-stack engineering."
            </p>
            
            <div className="flex items-center gap-6 text-black/60">
              <div className="flex flex-col">
                <span className="text-[20px] md:text-[24px] font-black italic tracking-tighter text-black">03</span>
                <span className="text-[9px] font-black uppercase tracking-widest text-black/30">Milestones</span>
              </div>
              <div className="w-[1px] h-10 bg-black/5" />
              <div className="flex flex-col">
                <span className="text-[20px] md:text-[24px] font-black italic tracking-tighter text-black">02+</span>
                <span className="text-[9px] font-black uppercase tracking-widest text-black/30">Years</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Timeline Content - Coming from Right */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={containerVariants}
          className="lg:col-span-8 space-y-2 md:space-y-4 relative"
        >
          <div className="absolute left-0 lg:left-[-48px] top-4 bottom-4 w-[1px] bg-black/[0.06] hidden md:block" />

          {experiences.map((exp) => (
            <motion.div 
              key={exp.id}
              variants={rightVariants}
              className="relative group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 py-8 md:py-10 border-b border-black/[0.04] last:border-0"
            >
              <div className="hidden md:flex absolute left-[-5px] lg:left-[-53px] top-10 md:top-12 w-2.5 h-2.5 rounded-full bg-white border-2 border-[#FF6B00] z-10 group-hover:scale-150 transition-transform duration-500" />

              <div className="md:col-span-2 space-y-1">
                <span className="text-[24px] md:text-[28px] font-black tracking-tighter italic leading-none block text-black/80">
                  {exp.period}
                </span>
                <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-black/30 block">
                  {exp.duration}
                </span>
              </div>

              <div className="md:col-span-6 space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 bg-white border border-black/[0.05] rounded-xl overflow-hidden p-1.5 md:p-2 group-hover:border-[#FF6B00]/30 transition-colors duration-500 shadow-sm">
                      <img src={exp.logo} className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500" alt={exp.company} />
                    </div>
                    <div className="space-y-0.5">
                      <h3 className="text-[18px] xs:text-[20px] md:text-[28px] font-black tracking-tighter uppercase leading-tight group-hover:translate-x-1 md:group-hover:translate-x-2 transition-transform duration-500 text-black">
                        {exp.company}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 md:gap-3">
                        <span className="text-[10px] md:text-[11px] font-black uppercase tracking-wider text-[#FF6B00]">{exp.role}</span>
                        <span className="hidden xs:block w-1 h-1 rounded-full bg-black/10" />
                        <div className="flex items-center gap-1 text-[9px] md:text-[10px] font-bold text-black/40 uppercase tracking-widest">
                          <MapPin size={10} />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-[13px] md:text-[14px] font-medium text-black/60 leading-relaxed max-w-md italic">
                  "{exp.highlights}"
                </p>

                <div className="flex flex-wrap gap-1.5 md:gap-2 pt-1 md:pt-2">
                  {exp.stack.map(tech => (
                    <span key={tech} className="text-[8px] font-black uppercase tracking-[0.2em] px-2 py-1 bg-black/[0.03] text-black/60 border border-black/5 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="md:col-span-4 flex flex-col justify-start md:items-end">
                <div className="p-5 md:p-6 bg-black/[0.02] border border-black/[0.05] rounded-2xl w-full md:w-auto md:min-w-[180px] group-hover:bg-black group-hover:text-white transition-all duration-500 transform group-hover:-translate-y-1">
                  <div className="flex flex-col gap-1">
                    <span className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.2em] opacity-40">Milestone Impact</span>
                    <span className="text-[18px] md:text-[20px] font-black tracking-tighter italic uppercase truncate">
                      {exp.impact}
                    </span>
                  </div>
                  <div className="mt-4 pt-4 border-t border-black/5 group-hover:border-white/10 flex justify-between items-center">
                    <Zap size={14} className="text-[#FF6B00]" />
                    <Star size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="absolute top-1/2 right-[-5%] -translate-y-1/2 rotate-90 pointer-events-none opacity-[0.02] select-none hidden lg:block text-black/10">
        <span className="text-[200px] font-black uppercase tracking-tighter whitespace-nowrap">TIMELINE_ARCHIVE_2025</span>
      </div>
    </section>
  );
};

export default Journey;
