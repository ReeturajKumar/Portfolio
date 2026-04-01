import { motion } from 'framer-motion';

const Marquee = () => {
  const words = ['Engineer', 'Architect', 'Develop', 'Deploy', 'Scale'];
  const multiWords = Array(12).fill(words).flat();

  return (
    <section className="relative w-full h-full overflow-hidden flex items-center justify-center [perspective:2000px]">
       {/* Banner 1: Diagonal from Top-Left to Bottom-Right */}
      <div 
        className="absolute top-1/2 left-1/2 w-[220vw] bg-white border-y-[2px] border-[#1a1a1a] py-2 md:py-4 z-20 [transform-style:preserve-3d]"
        style={{ transform: 'translate(-50%, -50%) rotate(12deg) rotateX(15deg)' }}
      >
        <div className="flex whitespace-nowrap overflow-hidden">
          <motion.div
            className="flex items-center whitespace-nowrap"
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 100,
            }}
          >
            {[...Array(2)].map((_, groupIdx) => (
              <div key={`g1-${groupIdx}`} className="flex items-center shrink-0">
                {multiWords.map((word, idx) => (
                   <div key={`b1-${groupIdx}-${idx}`} className="flex items-center shrink-0">
                     <span className="text-[#1a1a1a] text-base md:text-xl lg:text-2xl font-black capitalize tracking-wide mr-6 md:mr-10 lg:mr-14">{word}</span>
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black/30 w-4 h-4 md:w-5 md:h-5 mr-6 md:mr-10 lg:mr-14">
                       <path d="M12 0C12 6.62742 17.3726 12 24 12C17.3726 12 12 17.3726 12 24C12 17.3726 6.62742 12 0 12C6.62742 12 12 6.62742 12 0Z" fill="currentColor"/>
                     </svg>
                   </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Banner 2: Crossing from bottom-left to top-right */}
      <div 
        className="absolute top-1/2 left-1/2 w-[220vw] bg-white border-y-[2px] border-[#1a1a1a] text-[#1a1a1a] py-2 md:py-4 z-10 [transform-style:preserve-3d]"
        style={{ transform: 'translate(-50%, -50%) rotate(-12deg) rotateX(-15deg) translateZ(-100px)' }}
      >
        <div className="flex whitespace-nowrap overflow-hidden">
          <motion.div
            className="flex items-center whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 100,
            }}
          >
            {[...Array(2)].map((_, groupIdx) => (
              <div key={`g2-${groupIdx}`} className="flex items-center shrink-0">
                {multiWords.map((word, idx) => (
                   <div key={`b2-${groupIdx}-${idx}`} className="flex items-center shrink-0">
                     <span className="text-[#1a1a1a] text-base md:text-xl lg:text-2xl font-black capitalize tracking-wide mr-6 md:mr-10 lg:mr-14">{word}</span>
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black/30 w-4 h-4 md:w-5 md:h-5 mr-6 md:mr-10 lg:mr-14">
                       <path d="M12 0C12 6.62742 17.3726 12 24 12C17.3726 12 12 17.3726 12 24C12 17.3726 6.62742 12 0 12C6.62742 12 12 6.62742 12 0Z" fill="currentColor"/>
                     </svg>
                   </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Marquee;
