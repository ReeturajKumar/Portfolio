import { useState } from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const [activePoint, setActivePoint] = useState<number | null>(null);

  const details = [
    { label: 'Specialization', value: 'Full Stack Architecture', pos: 'top-[15.5%] left-[3.2%]' },
    { label: 'Experience', value: 'Scalable Ecosystems', pos: 'top-[15.5%] right-[3.2%]' },
    { label: 'Core Tech', value: 'React • Node • Cloud', pos: 'bottom-[10.8%] left-[3.2%]' },
    { label: 'Philosophy', value: 'Performance First', pos: 'bottom-[10.8%] right-[3.2%]' }
  ];

  return (
    <section id="about" className="w-full bg-black overflow-hidden flex justify-center py-6 md:py-10">
      <div className="relative w-full max-w-6xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Section Header for Mobile */}
          <div className="md:hidden pb-10 text-center">
            <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 mb-2">Backstory</h2>
            <div className="w-8 h-[1px] bg-white/20 mx-auto"></div>
          </div>

          {/* Image Container with Overlay */}
          <div className="relative group rounded-3xl overflow-hidden border border-white/5 shadow-2xl">
            <img 
              src="/ReeturajAbout.webp" 
              alt="About Reeturaj Kumar" 
              className="w-full h-auto block object-cover"
            />

            {/* Overlaid Introduction - Hidden on small & medium screens to prevent overcrowding */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/80 to-transparent p-10 lg:p-14 xl:p-20 z-20 hidden lg:block">
              <div className="max-w-[800px] mx-auto text-center">
                <p className="text-[16px] lg:text-[18px] font-medium leading-[1.6] text-white/90 drop-shadow-2xl">
                  Full Stack Developer (2025) specializing in <span className="text-white font-bold italic underline decoration-white/20">scalable LMS, e-commerce, and streaming systems</span>. Architecting high-performance apps with clean architecture to deliver production-grade digital experiences.
                </p>
              </div>
            </div>

            {/* Interactive Indicators - Hidden on mobile and tablet (md) for cleaner UI */}
            <div className="hidden lg:block">
              {details.map((item, i) => (
                <div 
                  key={i} 
                  className={`absolute ${item.pos} z-30 flex items-center justify-center`}
                  onMouseEnter={() => setActivePoint(i)}
                  onMouseLeave={() => setActivePoint(null)}
                  onClick={() => setActivePoint(activePoint === i ? null : i)}
                >
                  {/* Pulsating Ring */}
                  <div className="absolute w-8 h-8 md:w-12 md:h-12 border border-white/40 rounded-full animate-ping opacity-75"></div>
                  
                  {/* Interaction Point */}
                  <button className="relative w-4 h-4 md:w-6 md:h-6 bg-white rounded-full flex items-center justify-center cursor-pointer shadow-[0_0_20px_rgba(255,255,255,0.4)] active:scale-90 transition-all duration-300">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-black rounded-full"></div>
                  </button>

                  {/* Revealable Content Card */}
                  <div 
                    className={`absolute top-[-30px] ${i % 2 === 0 ? 'left-[35px]' : 'right-[35px]'} transition-all duration-500 transform ${
                      activePoint === i ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-90 pointer-events-none'
                    } bg-white/95 backdrop-blur-md px-5 py-4 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-40 min-w-[180px] border border-black/5`}
                  >
                    <h3 className="text-[9px] font-black uppercase tracking-[0.2em] text-black/30">
                      {item.label}
                    </h3>
                    <p className="text-[15px] font-black tracking-tight text-black leading-tight mt-1">
                      {item.value}
                    </p>
                    <div className={`absolute top-[40px] ${i % 2 === 0 ? '-left-[8px]' : '-right-[8px]'} w-4 h-4 bg-white/95 rotate-45`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Info Grid - Only shown on mobile and tablet where points are hidden */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 pt-12 pb-16 lg:hidden">
            {details.map((item, i) => (
              <div key={i} className="group cursor-default p-4 rounded-2xl transition-colors hover:bg-white/5 border border-transparent hover:border-white/10">
                <h3 className="text-[9px] font-black uppercase tracking-[0.25em] text-white/30 mb-2 group-hover:text-white/50 transition-colors">
                  {item.label}
                </h3>
                <p className="text-[13px] md:text-[14px] font-bold text-white tracking-tight leading-snug">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
