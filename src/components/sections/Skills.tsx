import { motion, useScroll, useTransform, type Variants } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { useRef } from 'react';

const Skills = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

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
    hidden: { opacity: 0, y: 60 },
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
    <section 
      ref={containerRef}
      id="skills" 
      className="relative w-full min-h-[450px] bg-black flex flex-col items-center justify-center overflow-hidden py-16 px-6"
    >
      {/* Cinematic Liquid Background Art Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img 
          style={{ y }}
          src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80" 
          className="w-full h-full object-cover opacity-50 scale-110" 
          alt="Abstract Background" 
        />
        
        {/* Real-time Continuous Fluid Wave System */}
        <div className="absolute inset-0 z-0 opacity-40">
           <motion.div 
             animate={{ x: ["-50%", "0%"] }}
             transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
             className="absolute -bottom-24 left-0 w-[400%] h-[400px] blur-[100px]"
             style={{
               background: "radial-gradient(ellipse at center, rgba(220,38,38,0.15) 0%, transparent 70%)"
             }}
           />
           <motion.div 
             animate={{ x: ["0%", "-50%"], y: [30, -30] }}
             transition={{ duration: 35, repeat: Infinity, ease: "linear", repeatType: "mirror" }}
             className="absolute -bottom-12 left-0 w-[400%] h-[300px] blur-[120px]"
             style={{
               background: "radial-gradient(ellipse at center, rgba(255,255,255,0.03) 0%, transparent 70%)"
             }}
           />
           <motion.div 
             animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
             transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
             className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[400px] bg-gradient-to-r from-transparent via-[#DC2626]/5 to-transparent blur-[140px]"
           />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Main Split-Executive Content */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.15 }}
        variants={containerVariants}
        className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-20 items-center"
      >
        <div className="space-y-10">
          <motion.div variants={itemVariants} className="space-y-3">
            <h2 className="text-[28px] md:text-[42px] lg:text-[52px] font-black text-white leading-[1] tracking-tight uppercase">
              From Idea To <br />
              Execution <span className="text-white/20">Let's Build</span> <br />
              Something Real!
            </h2>
          </motion.div>

          <div className="space-y-6">
             <motion.div variants={itemVariants}>
               <a 
                 href="mailto:reeturajvats587@gmail.com"
                 className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 hover:bg-white text-white hover:text-black rounded-full backdrop-blur-md border border-white/20 transition-all duration-500 group active:scale-95"
               >
                 <span className="text-xs font-black uppercase tracking-widest leading-none">Get in touch</span>
                 <div className="w-7 h-7 rounded-full bg-white/20 group-hover:bg-black/10 flex items-center justify-center transition-colors">
                   <ArrowRight size={16} className="transition-transform duration-500 group-hover:translate-x-1" />
                 </div>
               </a>
             </motion.div>

             <div className="space-y-4 max-w-xl">
                <motion.p variants={itemVariants} className="text-lg md:text-xl font-bold text-white tracking-tight">
                  Available for full-time roles and selective freelance projects.
                </motion.p>
                <motion.p variants={itemVariants} className="text-xs md:text-sm font-medium text-white/50 leading-relaxed border-l-2 border-white/10 pl-5">
                  I focus on shipping clean, scalable web solutions that support real users and growing products. My approach bridges absolute performance with aesthetic excellence.
                </motion.p>
             </div>
          </div>
        </div>

        <div className="flex flex-col items-center lg:items-end justify-center">
            <motion.div variants={itemVariants} className="relative group cursor-pointer">
              <div className="relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center">
                <div className="absolute inset-0 border-[3px] border-[#DC2626] rounded-full shadow-[0_0_25px_rgba(220,38,38,0.4)] animate-pulse" />
                <motion.div 
                   animate={{ rotate: 360 }}
                   transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                   className="absolute inset-[12px] md:inset-[15px]"
                >
                  <svg viewBox="0 0 100 100" className="w-full h-full fill-white/80">
                    <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
                    <text className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.12em]">
                      <textPath xlinkHref="#circlePath">
                         • open to work • open to work • open to work 
                      </textPath>
                    </text>
                  </svg>
                </motion.div>
                <div className="relative w-10 h-10 flex items-center justify-center">
                  <Star size={24} className="text-white fill-white animate-pulse" />
                  <div className="absolute inset-0 bg-white/20 rounded-full blur-xl scale-150 animate-pulse" />
                </div>
              </div>
              <div className="absolute top-[105%] left-1/2 -translate-x-1/2 md:left-auto md:right-0 md:translate-x-0 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                 <p className="text-[10px] font-black uppercase tracking-widest text-[#DC2626]">Ready for full-stack impact</p>
              </div>
            </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
