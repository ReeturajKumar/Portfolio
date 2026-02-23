import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative w-full bg-[#fffff] px-6 md:px-12 lg:px-16 xl:px-20 py-8 lg:py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
        
        {/* LEFT CONTENT */}
        <motion.div 
          initial={{ opacity: 0, x: -250 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col z-10 order-2 lg:order-1 lg:pr-6"
        >
          <h1 className="text-[17vw] xs:text-[65px] sm:text-[90px] md:text-[110px] lg:text-[82px] xl:text-[150px] font-black leading-[0.85] md:leading-[0.8] tracking-[-0.05em] text-black lowercase mb-6 lg:mb-8">
            <span className="block italic text-black/5 lg:not-italic lg:text-black">full-stack</span>
            <span className="block">architect</span>
          </h1>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 lg:gap-4 xl:gap-6 mb-10 lg:mb-12">
            <div className="flex gap-2 shrink-0">
              {['git', 'in', 'js', 'ts'].map((id) => (
                <div 
                  key={id} 
                  className="w-10 h-10 md:w-11 md:h-11 rounded-full border border-black flex items-center justify-center text-[10px] md:text-[11px] font-black cursor-pointer hover:bg-black hover:text-white transition-all duration-300 uppercase"
                >
                  {id}
                </div>
              ))}
            </div>
            <p className="text-sm md:text-[15px] font-semibold leading-snug text-black max-w-[360px] lg:max-w-[320px] xl:max-w-[400px]">
              Building robust digital architectures with modern stacks. Specialized in crafting high-performance, scalable web applications.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16 lg:gap-4 xl:gap-16 border-t border-black/5 pt-8">
            <div className="flex flex-col gap-1.5">
              <div className="text-4xl sm:text-5xl md:text-[58px] lg:text-[42px] xl:text-[58px] font-black italic leading-none tracking-tighter text-black">+20</div>
              <p className="text-[9px] uppercase font-bold text-black/40 max-w-[140px] leading-tight">
                Scalable projects delivered
              </p>
            </div>
            <div className="flex flex-col gap-1.5">
              <div className="text-4xl sm:text-5xl md:text-[58px] lg:text-[42px] xl:text-[58px] font-black italic leading-none tracking-tighter text-black">+150k</div>
              <p className="text-[9px] uppercase font-bold text-black/40 max-w-[140px] leading-tight">
                Lines of clean code written
              </p>
            </div>
            <div className="flex flex-col gap-1.5 col-span-2 lg:col-span-1 border-t md:border-t-0 border-black/5 pt-6 lg:pt-0">
              <div className="text-4xl sm:text-5xl md:text-[58px] lg:text-[42px] xl:text-[58px] font-black italic leading-none tracking-tighter text-black">+1yr</div>
              <p className="text-[9px] uppercase font-bold text-black/40 max-w-[140px] leading-tight">
                Professional experience
              </p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT VISUAL */}
        <motion.div 
          initial={{ opacity: 0, x: 250 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="relative w-full flex justify-center order-1 lg:order-2"
        >
          <div className="relative w-full overflow-hidden bg-transparent">
            <img 
              src="/Reeturaj2.webp" 
              alt="Reeturaj Kumar" 
              className="w-full h-auto block"
            />
          </div>
        </motion.div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600&display=swap');
      `}</style>
    </section>
  );
};

export default Hero;
