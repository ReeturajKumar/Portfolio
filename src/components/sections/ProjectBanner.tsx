import { motion, type Variants } from 'framer-motion';
import { Star } from 'lucide-react';

const ProjectBanner = () => {
  const words = [
    "SEO-READY", "IMMERSIVE", "PROTECTED", "DEPENDABLE", 
    "CAPTIVATING", "USER-FRIENDLY", "ADAPTIVE", "PERFORMANCE", "SCALABLE"
  ];

  const marqueeVariants: Variants = {
    animateRight: {
      x: [0, -1000],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 25,
          ease: "linear",
        },
      },
    },
    animateLeft: {
      x: [-1000, 0],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        },
      },
    }
  };

  return (
    <div className="hidden md:block relative pt-6 pb-12 mb-4 md:-mt-10 bg-transparent overflow-hidden select-none">
      {/* Crossing Background Marquee (Rising Slant) - Light Theme */}
      <div className="absolute top-1/2 left-0 w-[140%] -translate-y-1/2 rotate-[4deg] -translate-x-[20%] z-0 bg-black/[0.03] backdrop-blur-[2px] py-3 md:py-4 border-y border-black/5">
        <div className="flex whitespace-nowrap overflow-hidden">
          <motion.div 
            variants={marqueeVariants}
            animate="animateLeft"
            className="flex items-center gap-8 md:gap-12 px-6"
          >
            {[...words, ...words, ...words, ...words].map((word, i) => (
              <div key={i} className="flex items-center gap-8 md:gap-12 font-['Outfit']">
                <span className="text-[13px] sm:text-[15px] md:text-[20px] font-black tracking-[0.2em] text-black/20 uppercase">
                  {word}
                </span>
                <Star size={14} fill="black" className="text-black/10 transition-colors" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* Main Foreground Marquee (Falling Slant) - Semi-Transparent Black */}
      <div className="relative z-10 -rotate-[3deg] bg-black/90 backdrop-blur-sm py-4 md:py-5 shadow-xl skew-x-[-1deg] scale-[1.08] md:scale-105 border-y border-white/5">
        <div className="flex whitespace-nowrap overflow-hidden">
          <motion.div 
            variants={marqueeVariants}
            animate="animateRight"
            className="flex items-center gap-8 md:gap-12 px-6"
          >
            {[...words, ...words, ...words, ...words].map((word, i) => (
              <div key={i} className="flex items-center gap-8 md:gap-12 font-['Outfit']">
                <span className="text-[18px] sm:text-[20px] md:text-[24px] font-black tracking-[0.2em] text-white uppercase drop-shadow-lg">
                  {word}
                </span>
                <Star size={16} fill="white" className="text-white" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

       {/* Intersection Glow (Subtle accent) */}
       <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5 blur-[1px] z-20 pointer-events-none" />
    </div>
  );
};

export default ProjectBanner;
