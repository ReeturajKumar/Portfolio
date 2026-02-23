import { motion, type Variants } from 'framer-motion';

const Skills = () => {
  const sectors = [
    {
      title: "Programming",
      skills: ["Java", "JavaScript", "TypeScript", "Python"],
      info: "Core languages and logic."
    },
    {
      title: "Frontend",
      skills: ["React", "Next.js", "Redux", "Zustand", "Tailwind"],
      info: "UI and state management."
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "REST APIs", "JWT", "Prisma"],
      info: "Server-side and security."
    },
    {
      title: "Databases",
      skills: ["MongoDB", "PostgreSQL", "Docker", "CI/CD"],
      info: "Storage and infrastructure."
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

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.4,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section id="skills" className="w-full bg-[#fffff] py-12 px-6 md:px-12">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        variants={containerVariants}
        className="max-w-7xl mx-auto"
      >
        
        {/* Simple & Professional Header */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col md:flex-row md:items-end justify-between mb-5 gap-4 pb-4"
        >
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
              <span className="text-[9px] font-black uppercase tracking-[0.2em] text-black">Technical Stack</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-black tracking-tight uppercase italic leading-none">
              Technical <span className="text-black/10 not-italic">Expertise</span>
            </h2>
          </div>
          <p className="text-[10px] font-bold text-black/40 uppercase tracking-wider italic max-w-[280px] md:text-right">
            Technical proficiency in Java, React, Node.js, and Database Systems across full-stack development cycles.
          </p>
        </motion.div>

        {/* Clean 2x2 Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {sectors.map((sector, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="group flex flex-col items-start transition-all duration-300 pt-6"
            >
              {/* Sector Info */}
              <div className="space-y-0.5 mb-4">
                <span className="text-[8px] font-black text-black/20 uppercase tracking-widest">{sector.info}</span>
                <h3 className="text-xl md:text-2xl font-black text-black tracking-tight uppercase italic leading-none">
                  {sector.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="flex flex-wrap gap-x-5 gap-y-2">
                {sector.skills.map((skill) => (
                  <div key={skill} className="flex items-center gap-1.5">
                    <span className="text-[11px] md:text-sm font-bold text-black/50 group-hover:text-black transition-colors uppercase tracking-tight">
                      {skill}
                    </span>
                    <div className="w-1 h-1 bg-black/10 rounded-full"></div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </motion.div>
    </section>
  );
};

export default Skills;
