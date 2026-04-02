import { useState, useEffect, useRef } from 'react';
import { Github, ArrowUpRight, MapPin, Globe } from 'lucide-react';
import { motion } from "motion/react";
import { FADE_UP, TRANSITIONS, STAGGER_CONTAINER } from "../../constants/motion";
import StarfieldBackground from '../effects/StarfieldBackground';

const About = () => {
  const [time, setTime] = useState(new Date());

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    
    const scrollTimer = setTimeout(() => {
      if (scrollRef.current) {
        const { scrollWidth, clientWidth } = scrollRef.current;
        scrollRef.current.scrollLeft = (scrollWidth - clientWidth) / 2;
      }
    }, 100);

    return () => {
      clearInterval(timer);
      clearTimeout(scrollTimer);
    };
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText('reeturajvats587@gmail.com');
  };

  return (
    <section id="about" className="w-full bg-transparent pt-4 pb-8 px-4 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-360 mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-5 h-auto md:min-h-[520px]">
        
        <motion.div 
          variants={FADE_UP}
          initial="initial"
          whileInView="animate"
          viewport={{ once: false }}
          transition={TRANSITIONS.smooth}
          className="md:col-span-12 lg:col-span-3 bg-[#131313] border border-white/10 rounded-4xl md:rounded-[2.5rem] p-6 md:p-8 flex flex-col justify-between relative overflow-hidden group h-[500px] md:h-[600px] lg:h-auto"
        >
          <StarfieldBackground />
          <motion.div 
            variants={STAGGER_CONTAINER(0.1, 0.4)}
            className="h-full flex flex-col justify-between relative z-10"
          >
            <motion.div variants={FADE_UP} className="z-10">
              <h2 className="text-[24px] xs:text-[28px] md:text-[32px] font-black text-white leading-none tracking-tighter">
                Reeturaj <span className="font-['Cormorant_Garamond'] italic text-white/50 font-normal">Kumar</span>
              </h2>
              <div className="flex items-center gap-2 mt-3 text-[10px] font-black text-white/40 uppercase tracking-[0.2em]">
                <MapPin size={10} className="text-white/30" />
                NOIDA, IN • {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </motion.div>

            <motion.div variants={FADE_UP} className="relative mt-8 md:mt-auto mb-8 md:mb-10 w-full overflow-hidden">
              <div ref={scrollRef} className="flex gap-3 md:gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4 text-white cursor-grab active:cursor-grabbing px-4">
                {['/2.jpg', '/Reeturaj.png', '/1.jpg'].map((src, i) => (
                  <div 
                    key={i} 
                    className={`flex-none w-[78%] md:w-[65%] snap-center rounded-3xl overflow-hidden border border-white/10 aspect-[3.6/5] md:aspect-4/5 relative group/photo transform-gpu transition-all duration-500 ${
                      i === 0 ? '-rotate-3 mt-4 ml-2 md:ml-6' : 
                      i === 1 ? 'rotate-0 mt-0 scale-105 md:scale-100 z-10' : 
                      'rotate-3 mt-4 mr-2 md:mr-6'
                    }`}
                  >
                    <img 
                      src={src} 
                      alt="Photo" 
                      className={`w-full h-full object-cover transition-transform duration-700 group-hover/photo:scale-110 ${i === 1 ? 'object-top' : i === 0 ? 'object-center' : ''}`} 
                    />
                  </div>
                ))}
              </div>
              <div className="absolute inset-y-0 left-0 w-8 bg-linear-to-r from-[#131313] to-transparent pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-8 bg-linear-to-l from-[#131313] to-transparent pointer-events-none" />
            </motion.div>

            <motion.div variants={FADE_UP} className="pt-6 border-t border-white/3 z-10 w-full mt-auto">
              <div className="flex flex-col gap-3">
                <div className="w-full">
                  <a 
                    href="https://www.linkedin.com/in/reeturaj-kumar-372963238/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group/social relative p-[1.5px] rounded-xl flex items-center justify-center overflow-hidden transition-all duration-500"
                  >
                    {/* Animated border glow (visible only on hover) */}
                    <div className="absolute inset-0 opacity-0 group-hover/social:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_260deg,#ffb433_290deg,#ff3399_320deg,#9933ff_340deg,#3366ff_360deg)] animate-[border-glow_3s_linear_infinite]" />
                    </div>

                    <div className="relative z-10 w-full bg-white group-hover/social:bg-black px-8 py-3 rounded-[calc(0.75rem-1px)] flex items-center justify-center gap-2 transition-all duration-500">
                      <span className="text-[11px] font-black text-black group-hover/social:text-white transition-colors tracking-tight uppercase">LinkedIn</span>
                      <ArrowUpRight size={14} className="text-white opacity-0 -translate-x-2 group-hover/social:opacity-100 group-hover/social:translate-x-0 transition-all duration-500" />
                    </div>
                  </a>
                </div>

                <a 
                  href="https://github.com/ReeturajKumar" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2 text-white/30 hover:text-white transition-all group/gh"
                >
                  <Github size={14} className="group-hover/gh:rotate-12 transition-transform" />
                  <span className="text-[9px] font-black uppercase tracking-[0.3em]">View GitHub Profile</span>
                  <ArrowUpRight size={10} className="opacity-0 group-hover/gh:opacity-100 group-hover/gh:translate-x-0.5 group-hover/gh:-translate-y-0.5 transition-all" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div 
          variants={FADE_UP}
          initial="initial"
          whileInView="animate"
          viewport={{ once: false }}
          transition={{ ...TRANSITIONS.smooth, delay: 0.1 }}
          className="md:col-span-12 lg:col-span-6 bg-[#131313] border border-white/10 rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-12 flex flex-col relative overflow-hidden group min-h-[500px] md:h-auto"
        >
          <StarfieldBackground />
          <motion.div 
            variants={STAGGER_CONTAINER(0.1, 0.5)}
            className="h-full flex flex-col relative z-30"
          >
            <motion.div variants={FADE_UP} className="flex justify-between items-start mb-8 md:mb-10">
              <div className="flex items-center gap-3 md:gap-4 cursor-default">
                <div className="w-10 h-10 md:w-11 md:h-11 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/20">
                  <Globe className="text-white/40 animate-[spin_10s_linear_infinite]" size={16} />
                </div>
                <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.25em] text-white/40">Detail-Driven UI</span>
              </div>
              <div className="flex items-center gap-1.5 opacity-30 group-hover:opacity-60">
                <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-white">Philosophy</span>
                <span className="text-white text-[14px] md:text-base mt-[-2px]">+</span>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-start">
              <div className="lg:col-span-8 flex flex-col">
                <div className="relative group/text">
                  <motion.h1 variants={FADE_UP} className="text-[48px] xs:text-[64px] md:text-[88px] font-black leading-[0.6] tracking-[-0.08em] text-white mb-2 cursor-default">
                    Interfaces
                  </motion.h1>
                  <motion.span variants={FADE_UP} className="font-['Cormorant_Garamond'] italic font-normal text-white/30 hover:text-white/60 cursor-default tracking-tight block ml-2 md:ml-4 text-[38px] xs:text-[48px] md:text-[68px] -mt-4 md:-mt-8 transform-gpu">
                    you can feel.
                  </motion.span>
                </div>
                <motion.p variants={FADE_UP} className="text-[13px] md:text-[14px] font-medium text-white/40 leading-relaxed max-w-[300px] mt-8 md:mt-12 tracking-tight">
                  I strive to create digital experiences that feel organic and human, where every pixel has a purpose.
                </motion.p>
              </div>

              <motion.div variants={FADE_UP} className="lg:col-span-4 flex flex-col items-center md:items-end text-center md:text-right pt-4 md:pt-6">
                <div className="grid grid-cols-2 gap-3 mb-8 md:mb-12 w-full">
                  {['Motion', 'Type', 'Flow', 'Craft'].map((tag, i) => (
                    <div 
                      key={tag} 
                      className="relative overflow-hidden group/chip px-4 md:px-8 py-2 rounded-full border border-white/10 bg-white/5 flex items-center justify-center cursor-default transition-all duration-300 w-full"
                    >
                       <div className="absolute inset-0 bg-black translate-y-[101%] group-hover/chip:translate-y-0 transition-transform duration-300 pointer-events-none" />
                       <span className={`relative z-10 text-[9px] md:text-[10px] font-black tracking-[0.15em] uppercase whitespace-nowrap group-hover/chip:text-white transition-colors duration-300 ${
                         i === 0 ? 'text-indigo-400' : 'text-white/40'
                       }`}>
                         {tag}
                       </span>
                    </div>
                  ))}
                </div>
                
                <div className="max-w-[240px] md:max-w-[220px] cursor-default">
                  <h3 className="text-[14px] md:text-[16px] font-black text-white/90 mb-2 tracking-tighter uppercase">Micro-interactions</h3>
                  <p className="text-[10px] md:text-[11px] font-medium text-white/40 leading-relaxed uppercase tracking-wider">
                     Subtle movement that confirms intent — never distracting.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          variants={FADE_UP}
          initial="initial"
          whileInView="animate"
          viewport={{ once: false }}
          transition={{ ...TRANSITIONS.smooth, delay: 0.2 }}
          className="md:col-span-12 lg:col-span-3 bg-[#131313] border border-white/10 rounded-4xl md:rounded-[2.5rem] p-6 md:p-8 flex flex-col justify-between relative group h-[480px] md:h-[500px] lg:h-auto overflow-hidden text-white"
        >


          <div 
            className="absolute inset-0 flex items-center justify-center p-8 pointer-events-none z-0 scale-[1.5] -rotate-[28deg]"
            style={{ 
              maskImage: 'radial-gradient(circle at center, black 0%, transparent 25%)',
              WebkitMaskImage: 'radial-gradient(circle at center, black 0%, transparent 25%)'
            }}
          >
            <video 
              autoPlay 
              muted 
              loop 
              playsInline 
              className="w-full h-full object-contain relative z-1 mix-blend-mode-plus-lighter brightness-150 contrast-150 opacity-100"
              style={{ filter: 'brightness(1.3) contrast(1.4) saturate(1.1)' }}
            >
              <source src="/cube.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="absolute inset-0 bg-linear-to-t from-[#131313] via-transparent to-transparent z-1" />
          <motion.div 
            variants={STAGGER_CONTAINER(0.1, 0.6)}
            className="h-full flex flex-col justify-between relative z-10"
          >
            <motion.div variants={FADE_UP} className="flex justify-between items-start">
               <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  <div className="absolute w-5 h-5 rounded-full border border-white/10"></div>
               </div>
               <div className="glow-border rounded-full">
                 <div className="glow-border-content !bg-[#131313] px-4 py-2 rounded-full flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.4)]"></div>
                    <span className="text-[9px] font-black uppercase tracking-wider text-white/70">Available for work</span>
                 </div>
               </div>
            </motion.div>

            <motion.div variants={FADE_UP} className="mt-10">
              <h2 className="text-[34px] md:text-[38px] font-black leading-[0.8] tracking-tighter mb-4 pr-4 cursor-default">
                LET&apos;S BUILD <br />
                SOMETHING <br />
                <span className="font-['Cormorant_Garamond'] italic font-normal text-white/50 tracking-tight text-[32px] lowercase block mt-2">that actually works.</span>
              </h2>
            </motion.div>

            <motion.div variants={FADE_UP} className="mt-auto mb-2">
               <div 
                 onClick={copyEmail}
                 onKeyDown={(e) => e.key === 'Enter' && copyEmail()}
                 role="button"
                 tabIndex={0}
                 className="flex items-center gap-4 group/mail cursor-pointer"
               >
                  <div className="w-10 h-10 rounded-xl border border-white/5 flex items-center justify-center group-hover/mail:border-white/20">
                     <div className="w-2 h-2 rounded-sm border border-white/20"></div>
                  </div>
                  <div>
                     <p className="text-[18px] md:text-[20px] font-bold font-['Cormorant_Garamond'] italic leading-none group-hover/mail:text-white">reeturajvats587@gmail.com</p>
                  </div>
               </div>
            </motion.div>

            <motion.div variants={FADE_UP}>
              <a
                href="https://www.linkedin.com/in/reeturaj-kumar-372963238/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full glow-border rounded-full group/connect transition-all duration-300 mt-8 block"
              >
                <div className="glow-border-content !bg-white text-black py-3 px-10 rounded-full font-black text-[11px] uppercase tracking-[0.25em] flex items-center justify-center group-hover/connect:justify-between group-hover/connect:!bg-black group-hover/connect:text-white transition-all duration-500 overflow-hidden">
                  <div className="flex-none w-0 group-hover/connect:w-auto opacity-0 group-hover/connect:opacity-100 transition-all duration-500 flex items-center overflow-hidden">
                    <ArrowUpRight size={14} className="stroke-3" />
                  </div>
                  <span className="transition-all duration-500 translate-x-[-7px] group-hover/connect:translate-x-0">CONNECT NOW</span>
                  <div className="flex-none w-[14px] group-hover/connect:w-0 transition-all duration-500"></div>
                </div>
              </a>
            </motion.div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
