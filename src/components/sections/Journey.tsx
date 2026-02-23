import { motion, type Variants } from 'framer-motion';

const Journey = () => {
  const experiences = [
    {
      id: "01",
      company: "HEXAWARE TECHNOLOGIES",
      location: "Mumbai",
      role: "Software Engineer Intern",
      period: "03/2025 - 05/2025",
      impact: "30% Step Reduction",
      highlights: "Developed AI-powered e-commerce app with PayPal & chatbot automation. Enhanced state management & UI responsiveness.",
      stack: ["AI", "E-commerce", "PayPal", "React"]
    },
    {
      id: "02",
      company: "VIGOMERGE INC",
      location: "Pune",
      role: "Associate Engineer Intern",
      period: "09/2024 - 02/2025",
      impact: "99.9% Reliability",
      highlights: "Built full-stack appointment system. Optimized Redux state consistency. Contributed to 25% faster CI/CD deployment.",
      stack: ["Redux", "Full-Stack", "CI/CD", "Agile"]
    },
    {
      id: "03",
      company: "JIO PLATFORMS LTD",
      location: "Mumbai",
      role: "Software Engineer Intern",
      period: "07/2023 - 10/2023",
      impact: "Neural Extraction",
      highlights: "Built AI Expense Tracker with PDF extraction (Next.js/Node). Implemented JWT & automated email workflows.",
      stack: ["Next.js", "MongoDB", "JWT", "AI"]
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section id="journey" className="w-full bg-[#fffff] pt-4 pb-16 px-6 md:px-12 relative overflow-hidden">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        variants={containerVariants}
        className="max-w-7xl mx-auto"
      >
        
        {/* Informative & Clean Header */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-black/10 pb-8"
        >
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
              <span className="text-[9px] font-black uppercase tracking-[0.4em] text-black">Career Development</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-black tracking-tighter italic uppercase leading-none">
              Professional <span className="text-black/10 not-italic">Experience</span>
            </h2>
          </div>
          <div className="max-w-[280px] md:text-right border-l md:border-l-0 md:border-r border-black/10 pl-4 md:pl-0 md:pr-4">
            <p className="text-[10px] font-bold text-black/40 uppercase leading-relaxed tracking-wider italic">
              Selected internship milestones at Hexaware, Jio Platforms, and Vigomerge.
            </p>
          </div>
        </motion.div>

        {/* Triple-Lane Matrix - Professional & Clean */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experiences.map((exp) => (
            <motion.div 
              key={exp.id} 
              variants={itemVariants}
              className="group flex flex-col justify-between transition-all duration-500 min-h-[300px]"
            >
              <div className="space-y-6">
                {/* Simplified Header */}
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-black text-black">ENTRY_{exp.id}</span>
                  <span className="text-[9px] font-bold text-black/40 uppercase tracking-widest">{exp.location}</span>
                </div>

                {/* Core Info */}
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-black/30 uppercase tracking-widest block">{exp.period}</span>
                  <h3 className="text-2xl md:text-3xl font-black text-black tracking-tighter italic uppercase leading-tight group-hover:translate-x-1 transition-transform">
                    {exp.company}
                  </h3>
                  <p className="text-[10px] font-black text-black/50 uppercase tracking-[0.1em]">{exp.role}</p>
                </div>

                {/* Highlights */}
                <p className="text-[12px] font-medium text-black/70 italic leading-relaxed">
                  "{exp.highlights}"
                </p>
              </div>

              {/* Simple Footer */}
              <div className="pt-8 mt-auto border-t border-black/5">
                 <div className="flex flex-wrap gap-1.5 mb-6">
                    {exp.stack.map(s => (
                      <span key={s} className="px-2 py-1 bg-black text-white text-[8px] font-black uppercase tracking-wider">
                        {s}
                      </span>
                    ))}
                 </div>
                 <div className="space-y-1">
                    <span className="text-[8px] font-black text-black/30 uppercase tracking-widest block">Key Results</span>
                    <p className="text-xl font-black text-black tracking-tighter italic">{exp.impact}</p>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Journey;
