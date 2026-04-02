import { ArrowRight, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { FADE_UP, STAGGER_CONTAINER, TRANSITIONS } from "../../constants/motion";

const Skills = () => {
  return (
    <section 
      id="skills" 
      className="relative w-full min-h-[450px] bg-black flex flex-col items-center justify-center overflow-hidden py-16 px-6"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80" 
          className="w-full h-full object-cover opacity-50 scale-110" 
          alt="Abstract Background"
          loading="lazy"
          decoding="async"
        />
        
        <div className="absolute inset-0 z-0 opacity-40">
           <div
             className="absolute -bottom-24 left-0 w-[400%] h-[400px] blur-[100px]"
             style={{
               background: "radial-gradient(ellipse at center, rgba(220,38,38,0.15) 0%, transparent 70%)"
             }}
             aria-hidden
           />
           <div
             className="absolute -bottom-12 left-0 w-[400%] h-[300px] blur-[120px]"
             style={{
               background: "radial-gradient(ellipse at center, rgba(255,255,255,0.03) 0%, transparent 70%)"
             }}
             aria-hidden
           />
           <div
             className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[400px] bg-linear-to-r from-transparent via-[#DC2626]/5 to-transparent blur-[140px]"
             aria-hidden
           />
        </div>
        
        <div className="absolute inset-0 bg-linear-to-b from-black via-transparent to-black" />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <motion.div 
        variants={STAGGER_CONTAINER(0.1, 0)}
        initial="initial"
        whileInView="animate"
        viewport={{ once: false, amount: 0.2 }}
        className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-20 items-center"
      >
        <div className="space-y-10">
          <div className="space-y-3">
            <motion.h2 variants={FADE_UP} className="text-[28px] md:text-[42px] lg:text-[52px] font-black text-white leading-none tracking-tight uppercase">
              From Idea To <br />
              Execution <span className="text-white/20">Let&apos;s Build</span> <br />
              Something Real!
            </motion.h2>
          </div>

          <div className="space-y-6">
             <motion.div variants={FADE_UP}>
               <a 
                 href="mailto:reeturajvats587@gmail.com"
                 className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 hover:bg-white text-white hover:text-black rounded-full backdrop-blur-md border border-white/20 group transition-all duration-500"
               >
                 <span className="text-xs font-black uppercase tracking-widest leading-none">Get in touch</span>
                 <div className="w-7 h-7 rounded-full bg-white/20 group-hover:bg-black/10 flex items-center justify-center transition-colors">
                   <ArrowRight size={16} />
                 </div>
               </a>
             </motion.div>

             <motion.div variants={STAGGER_CONTAINER(0.1, 0.3)} className="space-y-4 max-w-xl">
                <motion.p variants={FADE_UP} className="text-lg md:text-xl font-bold text-white tracking-tight">
                  Available for full-time roles and selective freelance projects.
                </motion.p>
                <motion.p variants={FADE_UP} className="text-xs md:text-sm font-medium text-white/50 leading-relaxed border-l-2 border-white/10 pl-5 italic">
                  I focus on shipping clean, scalable web solutions that support real users and growing products. My approach bridges absolute performance with aesthetic excellence.
                </motion.p>
             </motion.div>
          </div>
        </div>

        <motion.div 
          variants={FADE_UP}
          className="flex flex-col items-center lg:items-end justify-center"
        >
            <motion.div variants={STAGGER_CONTAINER(0.1, 0.4)} className="relative group cursor-pointer group">
              <div className="relative w-32 h-32 md:w-48 md:h-48 flex items-center justify-center">
                <motion.div 
                  variants={FADE_UP}
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-[3px] border-[#DC2626]/40 rounded-full group-hover:border-[#DC2626] transition-colors" 
                />
                <motion.div 
                  variants={FADE_UP}
                  initial={{ rotate: 360 }}
                  animate={{ rotate: 0 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 z-0 p-3 md:p-4"
                >
                  <svg viewBox="0 0 100 100" className="w-full h-full fill-white/40 group-hover:fill-white/80 transition-all duration-500">
                    <path id="skillsCirclePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
                    <text className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.14em]">
                      <textPath href="#skillsCirclePath">
                         • open to work • open to work • open to work 
                      </textPath>
                    </text>
                  </svg>
                </motion.div>
                
                <motion.div variants={FADE_UP} className="relative w-12 h-12 md:w-16 md:h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <Star size={28} className="text-white fill-[#DC2626] group-hover:fill-white transition-all duration-500 drop-shadow-[0_0_15px_rgba(220,38,38,0.6)]" />
                  <motion.div 
                    animate={{ 
                      scale: [1, 1.3, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 bg-[#DC2626] rounded-full blur-2xl z-[-1]" 
                  />
                </motion.div>
              </div>
              <motion.div 
                variants={FADE_UP}
                className="absolute top-[105%] left-1/2 -translate-x-1/2 md:left-auto md:right-0 md:translate-x-0 whitespace-nowrap"
              >
                 <p className="text-[10px] font-black uppercase tracking-widest text-[#DC2626] group-hover:tracking-[0.2em] transition-all duration-500">Ready for full-stack impact</p>
              </motion.div>
            </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
