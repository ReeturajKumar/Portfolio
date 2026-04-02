import { Star } from 'lucide-react';
import { motion } from 'motion/react';

const ProjectBanner = () => {
  const words = [
    "SEO-READY", "IMMERSIVE", "PROTECTED", "DEPENDABLE", 
    "CAPTIVATING", "USER-FRIENDLY", "ADAPTIVE", "PERFORMANCE", "SCALABLE"
  ];

  const fullWords = [...Array(12)].fill(words).flat();

  return (
    <div className="hidden md:block relative py-16 mt-0 bg-transparent overflow-hidden select-none">
      <div className="absolute top-1/2 left-0 w-[400vw] -translate-y-[195%] -rotate-[1.5deg] -translate-x-[20%] z-0 bg-white py-2 md:py-3 border-y border-black/5 shadow-xl">
        <div className="flex whitespace-nowrap overflow-hidden">
          <motion.div 
            animate={{ x: [0, "-50%"] }}
            transition={{ duration: 400, repeat: Infinity, ease: "linear" }}
            className="flex items-center shrink-0"
          >
            {[...Array(2)].map((_, groupIdx) => (
              <div key={`g1-${groupIdx}`} className="flex items-center shrink-0">
                {fullWords.map((word, i) => (
                  <div key={`${groupIdx}-${i}`} className="flex items-center gap-8 md:gap-14 font-['Outfit'] shrink-0 px-4 md:px-7">
                    <span className="text-[14px] sm:text-[16px] md:text-[22px] font-black tracking-[0.2em] text-black italic uppercase">
                      {word}
                    </span>
                    <Star size={14} fill="currentColor" className="text-black/20" />
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      
      <div className="relative z-10 rotate-[2.5deg] bg-black py-2 md:py-4 -skew-x-1 scale-[1.08] md:scale-105 border-y border-white/10">
        <div className="flex whitespace-nowrap overflow-hidden">
          <motion.div 
            animate={{ x: ["-50%", 0] }}
            transition={{ duration: 600, repeat: Infinity, ease: "linear" }}
            className="flex items-center shrink-0"
          >
            {[...Array(2)].map((_, groupIdx) => (
              <div key={`g2-${groupIdx}`} className="flex items-center shrink-0">
                {fullWords.map((word, i) => (
                  <div key={`${groupIdx}-${i}`} className="flex items-center gap-8 md:gap-14 font-['Outfit'] shrink-0 px-4 md:px-7">
                    <span className="text-[18px] sm:text-[20px] md:text-[26px] font-black tracking-[0.2em] text-white uppercase drop-shadow-2xl">
                      {word}
                    </span>
                    <Star size={18} fill="white" className="text-white" />
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

       <div className="absolute top-1/2 left-0 w-full h-px bg-white/5 blur-[1px] z-20 pointer-events-none" />
    </div>
  );
};

export default ProjectBanner;
