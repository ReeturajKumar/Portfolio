import { Link } from 'react-router-dom';
import { motion, type Variants } from 'framer-motion';

const Portfolio = () => {
  const projects = [
    {
      id: "01",
      title: "LearnNexus Architecture",
      link: "https://learnnexus.vercel.app/",
      stack: ["Next.js", "TypeScript", "Tailwind CSS"],
      type: "LMS Platform"
    },
    {
      id: "02",
      title: "HireTrack Recruitment",
      link: "https://hiretrack.vercel.app/",
      stack: ["Next.js", "Prisma", "Postgres", "Clerk", "ShadCN"],
      type: "Job Portal"
    },
    {
      id: "03",
      title: "TuneFlow Ecosystems",
      link: "https://tuneflow-4vd5.onrender.com/",
      stack: ["React", "TypeScript", "Zustand", "MongoDB", "WebSockets"],
      type: "Music Streaming"
    },
    {
      id: "04",
      title: "Rutu Estate Platform",
      link: "https://rutu-estate.onrender.com/",
      stack: ["MongoDB", "Express", "React", "Node", "OAuth"],
      type: "Real Estate"
    },
    {
      id: "05",
      title: "Design Studio",
      link: "https://design-studio-lovat.vercel.app/",
      stack: ["React", "TailwindCSS", "Framer Motion"],
      type: "Design Studio"
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
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
    <section id="portfolio" className="w-full bg-[#fffff] py-16 px-6 md:px-12 border-t border-black/5">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        variants={containerVariants}
        className="max-w-7xl mx-auto text-black"
      >
        
        {/* Compact Section Header */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4"
        >
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-6 h-[1px] bg-black/20"></div>
              <span className="text-[8px] font-black uppercase tracking-[0.4em] text-black/30">Strategic Showcase</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-black tracking-tighter leading-none italic uppercase">
              Project <span className="text-black/10 not-italic">Archives</span>
            </h2>
          </div>
          <div className="max-w-[240px]">
             <p className="text-[9px] font-bold text-black/30 uppercase leading-tight tracking-[0.1em] border-l border-black/10 pl-4 italic">
               A high-density collection of production systems, optimized for performance and scale.
             </p>
          </div>
        </motion.div>

        {/* High-Density Project List */}
        <div className="divide-y divide-black/5 border-t border-black/10">
          {projects.map((project) => (
            <motion.div 
              key={project.id} 
              variants={itemVariants}
              className="group py-4 md:py-6 transition-all duration-300 hover:bg-white/40"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center px-2">
                
                {/* ID - Clinical Monospace */}
                <div className="md:col-span-1">
                  <span className="text-[9px] font-black text-black/10 font-mono group-hover:text-black transition-colors italic">
                    {project.id}
                  </span>
                </div>

                {/* Title & Category - Compact */}
                <div className="md:col-span-6 flex flex-col justify-center">
                  <span className="text-[7px] font-black text-blue-600 uppercase tracking-[0.3em] font-mono mb-1">
                    {project.type}
                  </span>
                  <h3 className="text-lg md:text-2xl font-black italic tracking-tighter leading-none transition-transform duration-500 group-hover:translate-x-2 uppercase">
                    {project.title}
                  </h3>
                </div>

                {/* Tech Stack - Micro Labels */}
                <div className="md:col-span-3">
                  <div className="flex flex-wrap gap-1 md:justify-start">
                    {project.stack.map((tech) => (
                      <span 
                        key={tech} 
                        className="text-[7px] font-black text-black/30 border border-black/[0.05] px-1.5 py-0.5 uppercase tracking-wider group-hover:bg-black/5 group-hover:text-black/60 transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action - Clean & Compact */}
                <div className="md:col-span-2 flex justify-start md:justify-end">
                  <Link
                    to={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 bg-black text-white text-[8px] font-black uppercase tracking-widest hover:bg-blue-600 transition-all active:scale-95 shadow-sm"
                  >
                    View 
                  </Link>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Portfolio;
