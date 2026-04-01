import { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Twitter, ArrowUpRight, MapPin, Navigation2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const StarBackground = () => (
  <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-35">
    <motion.div 
      animate={{ 
        x: [0, -100, 0],
        y: [0, -60, 0],
        opacity: [0.4, 0.8, 0.4],
      }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="absolute -inset-[200px]"
      style={{ backgroundImage: 'radial-gradient(circle, white 1.6px, transparent 1.6px)', backgroundSize: '50px 50px' }}
    />
    <motion.div 
      animate={{ 
        x: [-60, 0, -60],
        y: [0, -60, 0],
        opacity: [0.3, 0.6, 0.3],
        scale: [1, 1.2, 1]
      }}
      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      className="absolute -inset-[200px]"
      style={{ backgroundImage: 'radial-gradient(circle, white 1.2px, transparent 1.2px)', backgroundSize: '90px 90px', backgroundPosition: '25px 25px' }}
    />
  </div>
);

const CubeGrid = () => {
  const cubes = Array.from({ length: 9 });
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden z-0 scale-90 md:scale-100" style={{ perspective: '1200px' }}>
      <div className="grid grid-cols-3 gap-4 p-4">
        {cubes.map((_, i) => (
          <motion.div
            key={i}
            animate={{
              rotateX: [0, 90, 180, 270, 360],
              rotateY: [0, 90, 180, 270, 360],
              scale: [1, 1.05, 1, 0.95, 1],
              z: [0, 20, 0, -20, 0]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4
            }}
            className="w-16 h-16 rounded-[4px] relative transform-style-3d"
            style={{
              background: 'linear-gradient(145deg, #2a2a2a 0%, #050505 100%)',
              boxShadow: 'inset 2px 2px 4px rgba(255,255,255,0.3), 0 15px 35px rgba(0,0,0,0.8)'
            }}
          >
            {/* High-Fidelity Sharp Chrome Edge Highlights */}
            <div className="absolute inset-0 rounded-[4px] border-t border-r border-white/40 opacity-90" />
            <div className="absolute top-0 right-0 w-[50%] h-[2px] bg-gradient-to-l from-white/70 to-transparent" />
            <div className="absolute top-0 right-0 h-[50%] w-[2px] bg-gradient-to-b from-white/70 to-transparent" />
            <div className="absolute top-0 right-0 w-3 h-3 bg-white/30 blur-[4px]" />
          </motion.div>
        ))}
      </div>
      {/* Deep-Space Backlight */}
      <div className="absolute w-[600px] h-[600px] bg-white/[0.05] rounded-full blur-[140px] -z-10" />
    </div>
  );
};

const About = () => {
  const [time, setTime] = useState(new Date());
  const [copied, setCopied] = useState(false);
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
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contentTransition = { type: "spring" as const, stiffness: 50, damping: 20 };

  return (
    <section id="about" className="w-full bg-transparent pt-4 pb-8 px-4 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-[90rem] mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-5 h-auto md:min-h-[520px]">
        
        {/* CARD 1: IDENTITY */}
        <motion.div 
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ type: "spring" as const, stiffness: 45, damping: 15, delay: 0.1 }}
          className="md:col-span-12 lg:col-span-3 bg-[#0d0d0d] border border-white/10 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 flex flex-col justify-between relative overflow-hidden group h-[500px] md:h-[600px] lg:h-auto"
        >
          <StarBackground />
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ ...contentTransition, delay: 0.4 }}
            className="h-full flex flex-col justify-between relative z-10"
          >
            <div className="z-10">
              <motion.h2 
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="text-[24px] xs:text-[28px] md:text-[32px] font-black text-white leading-none tracking-tighter"
              >
                Reeturaj <span className="font-['Cormorant_Garamond'] italic text-white/50 font-normal">Kumar</span>
              </motion.h2>
              <div className="flex items-center gap-2 mt-3 text-[10px] font-black text-white/20 uppercase tracking-[0.2em]">
                <MapPin size={10} className="text-white/10" />
                NOIDA, IN • {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>

            <div className="relative mt-8 md:mt-auto mb-8 md:mb-10 w-full overflow-hidden">
              <div ref={scrollRef} className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4 text-white scroll-smooth cursor-grab active:cursor-grabbing">
                {['/Reeturaj2.webp', '/ReeturajAbout.webp', '/Reeturaj2.webp'].map((src, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ scale: 1.05, rotate: 0, zIndex: 50 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`flex-none w-[75%] md:w-[65%] snap-center rounded-[1.5rem] overflow-hidden border border-white/10 aspect-[4/5] relative group/photo ${i === 0 ? '-rotate-3 mt-4 ml-6' : i === 1 ? 'rotate-0 mt-0' : 'rotate-3 mt-4 mr-6'}`}
                  >
                    <img src={src} alt="Photo" className="w-full h-full object-cover grayscale group-hover/photo:grayscale-0 transition-all duration-700" />
                  </motion.div>
                ))}
              </div>
              <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[#0d0d0d] to-transparent pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[#0d0d0d] to-transparent pointer-events-none" />
            </div>

            <div className="pt-6 border-t border-white/[0.03] z-10 w-full">
              <div className="flex justify-center gap-7">
                <a href="https://www.linkedin.com/in/reeturaj-kumar-372963238/" target="_blank" rel="noopener noreferrer">
                   <Linkedin className="text-white/20 hover:text-white cursor-pointer transition-colors" size={18} />
                </a>
                <a href="https://github.com/ReeturajKumar" target="_blank" rel="noopener noreferrer">
                   <Github className="text-white/20 hover:text-white cursor-pointer transition-colors" size={18} />
                </a>
                <Twitter className="text-white/20 hover:text-white cursor-pointer transition-colors" size={18} />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* CARD 2: PHILOSOPHY */}
        <motion.div 
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ type: "spring" as const, stiffness: 45, damping: 15 }}
          className="md:col-span-12 lg:col-span-6 bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-12 flex flex-col relative overflow-hidden group min-h-[500px] md:h-auto"
        >
          <StarBackground />
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ ...contentTransition, delay: 0.3 }}
            className="h-full flex flex-col relative z-30"
          >
            {/* Header Row */}
            <div className="flex justify-between items-start mb-8 md:mb-10">
              <motion.div 
                whileHover={{ scale: 1.02, x: 5 }}
                className="flex items-center gap-3 md:gap-4 cursor-default"
              >
                <div className="w-10 h-10 md:w-11 md:h-11 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/20 transition-colors">
                  <Navigation2 className="text-white/40 rotate-[45deg]" size={14} />
                </div>
                <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.25em] text-white/20">Detail-Driven UI</span>
              </motion.div>
              <div className="flex items-center gap-1.5 opacity-30 group-hover:opacity-60 transition-opacity">
                <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-white">Philosophy</span>
                <span className="text-white text-[14px] md:text-base mt-[-2px]">+</span>
              </div>
            </div>

            {/* Core Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-start">
              {/* Left Column: Headlines */}
              <div className="lg:col-span-8 flex flex-col">
                <div className="relative group/text">
                  <motion.h1 
                    whileHover={{ x: 8 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="text-[48px] xs:text-[64px] md:text-[88px] font-[900] leading-[0.6] tracking-[-0.08em] text-white mb-2 cursor-default"
                  >
                    Interfaces
                  </motion.h1>
                  <motion.span 
                    whileHover={{ x: 15, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="font-['Cormorant_Garamond'] italic font-normal text-white/30 hover:text-white/60 transition-colors cursor-default tracking-tight block ml-2 md:ml-4 text-[38px] xs:text-[48px] md:text-[68px] -mt-4 md:-mt-8 transform-gpu"
                  >
                    you can feel.
                  </motion.span>
                </div>
                <p className="text-[13px] md:text-[14px] font-medium text-white/20 leading-relaxed max-w-[300px] mt-8 md:mt-12 tracking-tight">
                  I strive to create digital experiences that feel organic and human, where every pixel has a purpose.
                </p>
              </div>

              {/* Right Column: Tags & Detail */}
              <div className="lg:col-span-4 flex flex-col items-center md:items-end text-center md:text-right pt-4 md:pt-6">
                <div className="flex gap-2 mb-8 md:mb-12 flex-wrap justify-center md:justify-end">
                  {['Motion', 'Type', 'Feedback', 'Craft'].map((tag, i) => (
                    <motion.span 
                      key={tag} 
                      whileHover={{ scale: 1.1, y: -2 }}
                      className={`px-4 md:px-5 py-2 rounded-full text-[8px] md:text-[9px] font-black tracking-tight transition-all uppercase whitespace-nowrap cursor-default ${i === 0 ? 'bg-indigo-600/30 text-indigo-400 border border-indigo-500/20 shadow-[0_0_20px_rgba(79,70,229,0.1)]' : 'border border-white/5 text-white/10 hover:text-white/40 hover:border-white/20'}`}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
                
                <motion.div 
                  whileHover={{ x: -10 }}
                  className="max-w-[200px] md:max-w-[180px] cursor-default"
                >
                  <h3 className="text-[14px] md:text-[16px] font-black text-white/90 mb-2 tracking-tighter uppercase">Micro-interactions</h3>
                  <p className="text-[10px] md:text-[11px] font-medium text-white/20 leading-relaxed uppercase tracking-wider">
                     Subtle movement that confirms intent — never distracting.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* CARD 3: CTA */}
        <motion.div 
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ type: "spring" as const, stiffness: 45, damping: 15, delay: 0.2 }}
          className="md:col-span-12 lg:col-span-3 bg-[#0d0d0d] border border-white/10 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 flex flex-col justify-between relative group h-[480px] md:h-[500px] lg:h-auto overflow-hidden text-white"
        >
          <CubeGrid />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent z-[1]" />
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ ...contentTransition, delay: 0.5 }}
            className="h-full flex flex-col justify-between relative z-10"
          >
            <div className="flex justify-between items-start">
               <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  <div className="absolute w-5 h-5 rounded-full border border-white/10"></div>
               </div>
               <div className="bg-white/5 border border-white/10 rounded-full px-4 py-2 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  <span className="text-[9px] font-black uppercase tracking-wider text-white/70">Available for work</span>
               </div>
            </div>

            <div className="mt-10">
              <motion.h2 
                whileHover={{ y: -5 }}
                className="text-[34px] md:text-[38px] font-black leading-[0.8] tracking-tighter mb-4 pr-4 cursor-default"
              >
                LET'S BUILD <br />
                SOMETHING <br />
                <span className="font-['Cormorant_Garamond'] italic font-normal text-white/50 tracking-tight text-[32px] lowercase block mt-2">that actually works.</span>
              </motion.h2>
              <div className="w-full h-[1px] bg-white/5 my-8"></div>
            </div>

            <div className="mb-auto">
               <div 
                 onClick={copyEmail}
                 className="flex items-center gap-4 group/mail cursor-pointer"
               >
                  <div className="w-10 h-10 rounded-xl border border-white/5 flex items-center justify-center group-hover/mail:border-white/20 transition-all">
                     <div className="w-2 h-2 rounded-sm border border-white/20"></div>
                  </div>
                  <div>
                     <p className="text-[18px] md:text-[20px] font-[700] font-['Cormorant_Garamond'] italic leading-none group-hover/mail:text-white transition-colors">reeturajvats587@gmail.com</p>
                  </div>
               </div>
               <p className="text-[9px] font-black uppercase tracking-[0.4em] text-white/10 mt-6 ml-[52px]">
                 {copied ? 'EMAIL COPIED!' : 'TAP TO COPY EMAIL'}
               </p>
            </div>

            <Link 
              to="#skills"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('skills');
                if (element) {
                  const navHeight = 64;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - navHeight;
                  window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
              }}
              className="w-full bg-white text-black py-4.5 rounded-full font-black text-[11px] uppercase tracking-[0.25em] flex items-center justify-center gap-3 hover:bg-[#e0e0e0] transition-all hover:scale-[0.98] mt-8"
            >
              CONNECT NOW <ArrowUpRight size={14} className="stroke-[3]" />
            </Link>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
