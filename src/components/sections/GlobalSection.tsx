import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const SkillPill = ({ name, slug }: any) => (
  <motion.div 
    variants={{
      hidden: { opacity: 0, y: 15 },
      visible: { opacity: 1, y: 0 }
    }}
    whileHover={{ scale: 1.08, y: -3, backgroundColor: 'rgba(255, 255, 255, 0.08)' }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
    className="flex items-center gap-2 px-3.5 py-2 bg-white/[0.04] border border-white/10 rounded-full transition-all group shrink-0 hover:border-white/20 transform-gpu cursor-default"
  >
     <img 
       src={`https://cdn.simpleicons.org/${slug}/white`} 
       alt={name}
       className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity"
     />
     <span className="text-[9px] font-black text-white/80 tracking-tight uppercase whitespace-nowrap font-['Outfit']">{name}</span>
  </motion.div>
);

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

const GlobalSection = () => {
  const zones = [
    { code: 'GB', name: 'UK', active: false, label: 'LONDON', pos: { x: '51%', y: '33%' } },
    { code: 'IN', name: 'India', active: true, label: 'TOKYO', pos: { x: '65%', y: '65%' } },
    { code: 'US', name: 'USA', active: false, label: 'NEW YORK', pos: { x: '25%', y: '45%' } }
  ];

  const skills_all = [
    { name: 'ReactJS', slug: 'react' },
    { name: 'NextJS', slug: 'nextdotjs' },
    { name: 'TypeScript', slug: 'typescript' },
    { name: 'Tailwind CSS', slug: 'tailwindcss' },
    { name: 'Motion', slug: 'framer' },
    { name: 'Sanity', slug: 'sanity' },
    { name: 'Contentful', slug: 'contentful' },
    { name: 'NodeJS', slug: 'nodedotjs' },
    { name: 'ExpressJS', slug: 'express' },
    { name: 'PostgreSQL', slug: 'postgresql' },
    { name: 'MongoDB', slug: 'mongodb' },
    { name: 'Prisma', slug: 'prisma' },
    { name: 'Zustand', slug: 'react' },
    { name: 'Zod', slug: 'zod' },
    { name: 'pnpm', slug: 'pnpm' },
    { name: 'Bun', slug: 'bun' },
    { name: 'Git', slug: 'git' },
    { name: 'GitHub', slug: 'github' },
    { name: 'Vercel', slug: 'vercel' },
    { name: 'AWS', slug: 'amazonaws' },
    { name: 'Docker', slug: 'docker' },
    { name: 'Expo', slug: 'expo' },
    { name: 'Clerk', slug: 'clerk' },
    { name: 'Linux', slug: 'linux' },
  ];


  // Faster, more responsive spring for parent cards
  const activeSpring = { 
    type: "spring" as const, 
    stiffness: 45, 
    damping: 22, 
    mass: 1,
    velocity: 2
  };

  // Ultra-smooth ease-out for internal content to reduce CPU/GPU stutter
  const smoothEase = { 
    duration: 0.8,
    ease: [0.22, 1, 0.36, 1] as const
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: smoothEase
    }
  };

  return (
    <section className="w-full bg-transparent pb-10 px-4 md:px-12 lg:px-20 overflow-x-clip flex flex-col xl:flex-row gap-6 items-start mt-2 relative will-change-transform">
      {/* LEFT: GLOBAL CONNECT */}
      <div className="w-full lg:max-w-[50rem] relative z-10 shrink-0 transform-gpu">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0, x: -80 },
            visible: { 
              opacity: 1, 
              x: 0,
              transition: { ...activeSpring, delay: 0.05, staggerChildren: 0.1 }
            }
          }}
          className="w-full bg-[#0d0d0d] border border-white/10 rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-12 relative overflow-hidden group min-h-[480px] flex flex-col md:flex-row justify-between h-auto md:h-[410px] transform-gpu will-change-[transform,opacity]"
        >
          <div className="absolute inset-y-0 right-0 w-full md:w-1/2 z-0 pointer-events-none overflow-hidden">
             <StarBackground />
             <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#0d0d0d] via-transparent to-transparent z-10" />
          </div>
          
          <div className="absolute -bottom-[280px] -left-[120px] md:-bottom-[220px] md:-left-[180px] w-[500px] md:w-[640px] h-[500px] md:h-[640px] pointer-events-none group-hover:opacity-100 opacity-60 transition-opacity duration-1000 transform-gpu">
             <div className="w-full h-full relative rounded-full flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border border-white/[0.08] shadow-[0_0_80px_rgba(255,255,255,0.05),inset_0_0_80px_rgba(255,255,255,0.05)]" />
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full overflow-hidden"
                >
                   <div className="w-full h-full relative opacity-60" style={{ backgroundImage: 'radial-gradient(circle, #fff 1.2px, transparent 1.2px)', backgroundSize: '16px 16px', maskImage: 'radial-gradient(circle at center, black 40%, transparent 85%)', WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 85%)' }} />
                   {zones.map((zone) => (
                      <div key={zone.code} className="absolute z-20" style={{ left: zone.pos.x, top: zone.pos.y }}>
                         <div className="relative group/point">
                            <div className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-500 border-2 border-white ${zone.active ? 'bg-white shadow-[0_0_24px_rgba(255,255,255,0.8)] scale-125' : 'bg-white/40 border-white/20'}`} />
                            {zone.active && (
                               <motion.div 
                                 animate={{ scale: [1, 2.5], opacity: [0.4, 0] }} 
                                 transition={{ duration: 2.5, repeat: Infinity }} 
                                 className="absolute inset-0 bg-white rounded-full blur-[2px]" 
                               />
                            )}
                         </div>
                      </div>
                   ))}
                </motion.div>
                <div className="absolute inset-0 rounded-full shadow-[inset_-60px_-60px_100px_rgba(0,0,0,0.95),inset_60px_60px_80px_rgba(255,255,255,0.05)] pointer-events-none z-30" />
             </div>
          </div>

          <div className="flex flex-col justify-start z-20 relative lg:max-w-[45%] h-full text-left">
             <motion.div variants={contentVariants} className="mb-4 md:mb-auto">
                <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-white/20 mb-3">Available Globally</p>
                <motion.h2 
                   whileHover={{ x: 8 }}
                   className="text-[28px] xs:text-[32px] md:text-[38px] font-black text-white leading-[1.05] tracking-tighter cursor-default"
                >
                   Adaptable across <br />
                   time zones
                </motion.h2>
             </motion.div>
          </div>

          <div className="flex flex-col justify-between items-center md:items-end z-20 mt-8 md:mt-0 h-full">
             <motion.div variants={contentVariants} className="flex flex-wrap md:flex-col gap-2.5 justify-center md:items-end">
                {zones.map((zone) => (
                   <motion.div 
                     key={zone.code} 
                     whileHover={{ x: -10, scale: 1.02 }}
                     className={`flex items-center gap-3 md:gap-4 px-5 md:px-6 py-2.5 md:py-3 rounded-full border transition-all cursor-pointer min-w-[110px] md:min-w-[130px] group/tag ${zone.active ? 'bg-orange-500/10 border-orange-500/30' : 'bg-white/[0.03] border-white/5 opacity-40 hover:opacity-100'}`}
                   >
                      <span className={`text-[9px] md:text-[10px] font-black uppercase tracking-widest ${zone.active ? 'text-orange-500/40' : 'text-white/20'}`}>{zone.code}</span>
                      <span className={`text-[12px] md:text-[13px] font-black ${zone.active ? 'text-orange-500' : 'text-white'}`}>{zone.name}</span>
                   </motion.div>
                ))}
             </motion.div>
             <motion.div 
                variants={contentVariants} 
                whileHover={{ y: -5 }}
                className="flex flex-col items-center md:items-end text-center md:text-right mt-10 md:mt-auto pb-2 md:pb-4 cursor-default"
              >
                <div className="flex items-center gap-2 text-white/20 mb-1">
                   <MapPin size={10} className="text-orange-500/50" />
                   <span className="text-[8px] font-black uppercase tracking-[0.3em]">Remote</span>
                </div>
                <h3 className="text-[24px] md:text-[30px] font-[900] text-white tracking-tighter leading-none font-['Outfit']">India</h3>
             </motion.div>
          </div>
        </motion.div>
      </div>

      {/* RIGHT: THE MAGIC BEHIND */}
      <motion.div 
         initial="hidden"
         whileInView="visible"
         viewport={{ once: false, amount: 0.1 }}
         variants={{
            hidden: { opacity: 0, x: 80 },
            visible: { 
              opacity: 1, 
              x: 0,
              transition: { ...activeSpring, delay: 0.15, staggerChildren: 0.1 }
            }
         }}
         className="flex-1 w-full relative z-20 bg-[#0d0d0d] border border-white/10 rounded-[2.5rem] md:rounded-[3rem] p-6 md:p-8 flex flex-col items-center justify-start overflow-hidden group/skills h-auto min-h-[480px] md:h-[410px] transform-gpu will-change-[transform,opacity]"
      >
          <StarBackground />
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] md:w-[420px] h-[320px] md:h-[420px] opacity-[0.08] pointer-events-none group-hover:opacity-[0.15] transition-opacity duration-[2000ms] transform-gpu"
          >
             <img 
               src="/chrome_sculpture.png" 
               alt="Sculpture" 
               className="w-full h-full object-contain animate-float-slow"
             />
          </motion.div>
          
          <motion.div variants={contentVariants} className="relative z-50 text-center pb-6 md:pb-8 pt-2">
            <p className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.45em] text-white/30 mb-2 md:mb-3 pl-1">My Skillset</p>
            <div className="group/magic cursor-default">
              <motion.h1 
                whileHover={{ x: 5 }}
                className="text-[32px] xs:text-[38px] md:text-[42px] font-[900] text-white tracking-[-0.07em] leading-none"
              >
                The Magic <motion.span whileHover={{ x: 10, scale: 1.05 }} className="font-['Cormorant_Garamond'] italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#4A72FF] via-[#BC36E0] to-[#EB3678] tracking-tight block md:inline mt-2 md:mt-0 transform-gpu">Behind</motion.span>
              </motion.h1>
            </div>
          </motion.div>

          <motion.div 
             variants={{
               hidden: { opacity: 0, y: 25 },
               visible: { 
                 opacity: 1, 
                 y: 0,
                 transition: { ...smoothEase, staggerChildren: 0.05 }
               }
             }}
             className="w-full relative z-50 flex flex-wrap justify-center gap-2.5 mt-2 md:mt-0.5"
          >
             {skills_all.map((skill) => (
                <SkillPill key={skill.name} {...skill} />
             ))}
          </motion.div>
      </motion.div>
    </section>
  );
};

export default GlobalSection;
