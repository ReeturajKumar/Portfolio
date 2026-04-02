import { Music, Zap, Layout, Github as GhIcon } from 'lucide-react';
import { motion } from 'motion/react';
import { FADE_UP, STAGGER_CONTAINER } from "../../constants/motion";
import img1 from "../../assets/bg.jpg"

const DotGrid = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
    <div 
      className="absolute inset-0" 
      style={{ 
        backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
        backgroundSize: '24px 24px' 
      }} 
    />
    <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#FF6B00]/10 rounded-full blur-3xl opacity-20" />
    <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-[#EC4899]/10 rounded-full blur-3xl opacity-20" />
  </div>
);

const BuildingDaily = () => {
  return (
    <section id="building-daily" className="relative w-full pt-4 pb-20 px-6 md:px-12 lg:px-20 bg-transparent overflow-hidden text-black">
      <div className="max-w-[1400px] mx-auto">
        <motion.div 
          variants={STAGGER_CONTAINER(0.1, 0)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: false, amount: 0.2 }}
          className="text-center mb-8 md:mb-12 space-y-2"
        >
          <motion.p variants={FADE_UP} className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.5em] md:tracking-[0.6em] text-black/30">MY SITE — {new Date().getFullYear()}</motion.p>
          <motion.h2 variants={FADE_UP} className="text-[32px] xs:text-[42px] md:text-[68px] lg:text-[84px] font-black tracking-tighter leading-[0.95] text-black">
            Discover what keeps <br className="hidden xs:block" />
            me <span className="font-['Cormorant_Garamond'] italic font-normal text-transparent bg-clip-text bg-linear-to-r from-[#FF3BFF] via-[#EC4899] to-[#FF6B00] tracking-tight lowercase">building daily</span>
          </motion.h2>
        </motion.div>

        <motion.div 
          variants={STAGGER_CONTAINER(0.1, 0.2)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: false, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          
          <motion.div variants={FADE_UP} className="group relative h-[360px] md:h-[380px] rounded-[32px] bg-[#0A0A0A] border border-white/5 p-6 md:p-8 overflow-hidden hover:border-white/10 transition-colors duration-500">
            <motion.div variants={STAGGER_CONTAINER(0.1, 0.1)} className="h-full flex flex-col justify-between relative z-10">
              <div className="flex items-center gap-3 md:gap-4 mt-6 md:mt-8">
                 <motion.div variants={FADE_UP} className="w-16 h-16 md:w-20 md:h-20 bg-[#151515] rounded-2xl border border-white/5 flex items-center justify-center shadow-2xl group-hover:border-white/10 transition-colors">
                    <GhIcon size={28} className="text-white" />
                 </motion.div>
                 <motion.div variants={FADE_UP} className="w-16 h-16 md:w-20 md:h-20 bg-[#151515] rounded-2xl border border-white/5 flex items-center justify-center shadow-2xl group-hover:border-white/10 transition-colors">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-[#FF6B00] flex items-center justify-center">
                       <div className="w-2 h-2 bg-[#FF6B00] rounded-full animate-ping" />
                    </div>
                 </motion.div>
                 <motion.div variants={FADE_UP} className="w-16 h-16 md:w-20 md:h-20 bg-[#151515] rounded-2xl border border-white/5 flex items-center justify-center shadow-2xl group-hover:border-white/10 transition-colors">
                    <Layout size={28} className="text-yellow-400 opacity-60" />
                 </motion.div>
              </div>

              <div className="space-y-2">
                <motion.p variants={FADE_UP} className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-[#FF6B00]/60">GitHub & Open Source</motion.p>
                <motion.h3 variants={FADE_UP} className="text-xl md:text-2xl font-black text-white tracking-tight uppercase leading-tight">
                  Constantly contributing <br />
                  and building
                </motion.h3>
              </div>
            </motion.div>
            <DotGrid />
          </motion.div>

          <motion.div variants={FADE_UP} className="group relative h-[360px] md:h-[380px] rounded-[32px] bg-[#0A0A0A] border border-white/5 p-6 md:p-8 overflow-hidden hover:border-white/10 transition-colors duration-500">
            <motion.div variants={STAGGER_CONTAINER(0.1, 0.1)} className="h-full flex flex-col justify-between relative z-10">
              <div className="space-y-4 mt-2 md:mt-4">
                 <motion.div variants={FADE_UP} className="flex justify-end pr-2 md:pr-4">
                    <div className="bg-[#151515] border border-white/5 rounded-2xl p-3 md:p-4 max-w-[90%] md:max-w-[85%] group-hover:border-white/10 transition-colors">
                       <p className="text-[9px] md:text-[10px] font-medium text-white/60">&quot;Should we optimize the re-rendering logic?&quot;</p>
                    </div>
                 </motion.div>
                 <div className="flex items-start gap-2 md:gap-3">
                    <motion.div variants={FADE_UP} className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#FF6B00] flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(255,107,0,0.3)]">
                       <Zap size={14} className="text-white" />
                    </motion.div>
                    <motion.div variants={FADE_UP} className="bg-[#FF6B00]/10 border border-[#FF6B00]/20 rounded-2xl p-3 md:p-4 flex-1 group-hover:border-[#FF6B00]/40 transition-colors">
                       <div className="flex gap-1 mb-2">
                          <span className="w-1 h-1 bg-[#FF6B00] rounded-full" />
                          <span className="w-1 h-1 bg-[#FF6B00] rounded-full" />
                          <span className="w-1 h-1 bg-[#FF6B00] rounded-full" />
                       </div>
                       <p className="text-[9px] md:text-[10px] font-medium text-white/80 leading-relaxed uppercase tracking-widest">
                          Using React Memo and custom hooks for maximum performance!
                       </p>
                    </motion.div>
                 </div>
              </div>

              <div className="space-y-2">
                <motion.p variants={FADE_UP} className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-[#FF6B00]/60">CORE ARCHITECTURE</motion.p>
                <motion.h3 variants={FADE_UP} className="text-xl md:text-2xl font-black text-white tracking-tight uppercase leading-tight">
                  Building high performance <br />
                  pixel-perfect interfaces.
                </motion.h3>
              </div>
            </motion.div>
            <DotGrid />
          </motion.div>

          <motion.a 
            variants={FADE_UP}
            href="https://open.spotify.com/track/7k5TW0wfpXnb39IhRwoSq7"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative h-[360px] md:h-[380px] rounded-[32px] bg-[#0A0A0A] border border-white/5 overflow-hidden hover:border-white/10 flex flex-col cursor-pointer transition-colors duration-500"
          >
            <DotGrid />
            <div className="absolute inset-0 z-0">
               <img 
                 src={img1}
                 className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700" 
                 alt="Full Background Art" 
               />
               <div className="absolute inset-0 bg-linear-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/60" />
            </div>

            <motion.div variants={STAGGER_CONTAINER(0.1, 0.1)} initial="initial" whileInView="animate" viewport={{ once: false }} className="h-full flex flex-col justify-between pb-8">
              <div className="p-6 md:p-8 relative z-20 space-y-4">
                <motion.div variants={FADE_UP} className="flex items-center gap-3">
                  <div className="w-7 h-7 md:w-8 md:h-8 bg-[#1DB954] rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(29,185,84,0.3)]">
                    <Music size={16} className="text-black" />
                  </div>
                  <span className="text-[12px] md:text-[14px] font-black uppercase text-white tracking-[0.2em]">Recent Favorite</span>
                </motion.div>
                
                <motion.h3 variants={FADE_UP} className="text-[14px] md:text-[17px] font-medium text-white leading-relaxed tracking-tight max-w-[280px] md:max-w-[320px]">
                  I&apos;m listening to <span className="font-bold text-white">Another Story</span> by Nicholas Hooper from the album <span className="text-white/40">Harry Potter And The Order Of The Phoenix</span>
                </motion.h3>
              </div>

              <div className="relative w-full flex flex-col items-center z-10 pt-0 pb-12 mt-[-60px] md:mt-[-80px]">
                 <motion.div variants={FADE_UP} className="relative w-56 h-56 md:w-64 md:h-64 z-10">
                    <div className="absolute inset-0 rounded-full bg-[#111111] border-[6px] md:border-8 border-black shadow-[0_0_40px_rgba(0,0,0,0.8)] flex items-center justify-center">
                       <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border border-white/5 flex items-center justify-center overflow-hidden">
                          <img 
                            src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80" 
                            className="w-full h-full object-cover opacity-60 blur-[2px]" 
                            alt="Label" 
                          />
                       </div>
                    </div>
                    <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,transparent_30%,rgba(255,255,255,0.03)_31%,transparent_32%)] bg-size-[4px_4px]" />
                    <div className="absolute inset-0 rounded-full bg-linear-to-tr from-transparent via-white/10 to-transparent opacity-20" />
                 </motion.div>

                 <motion.div 
                   variants={FADE_UP}
                   className="absolute top-[110px] md:top-[130px] w-[180px] md:w-[210px] h-28 md:h-32 overflow-hidden z-20"
                   style={{
                     maskImage: 'radial-gradient(circle, black 40%, transparent 100%)',
                     WebkitMaskImage: 'radial-gradient(circle, black 40%, transparent 100%)'
                   }}
                 >
                    <img 
                      src={img1}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                      alt="Movie Poster" 
                    />
                    <div className="absolute inset-0 bg-linear-to-tr from-white/10 via-transparent to-transparent pointer-events-none" />
                 </motion.div>
              </div>
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default BuildingDaily;
