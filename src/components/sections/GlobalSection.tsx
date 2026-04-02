import { MapPin } from 'lucide-react';
import StarfieldBackground from '../effects/StarfieldBackground';
import { motion } from 'motion/react';
import { FADE_UP, TRANSITIONS, STAGGER_CONTAINER } from "../../constants/motion";

const SkillPill = ({ name, slug, iconUrl }: { name: string; slug: string; iconUrl?: string }) => (
  <motion.div 
    variants={FADE_UP}
    className="flex items-center gap-2 px-3.5 py-2 bg-white/4 border border-white/10 rounded-full group shrink-0 hover:border-white/20 transform-gpu cursor-default hover:bg-white/8 transition-all duration-300"
  >
      <img 
        src={iconUrl || `https://cdn.simpleicons.org/${slug}`} 
        alt={name}
        className="w-3.5 h-3.5 opacity-80 group-hover:opacity-100 transition-transform duration-300 group-hover:scale-110 object-contain"
      />
      <span className="text-[9px] font-black text-white/80 tracking-tight uppercase whitespace-nowrap font-['Outfit']">{name}</span>
  </motion.div>
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
    { name: 'NodeJS', slug: 'nodedotjs' },
    { name: 'ExpressJS', slug: 'express' },
    { name: 'PostgreSQL', slug: 'postgresql' },
    { name: 'MongoDB', slug: 'mongodb' },
    { name: 'Prisma', slug: 'prisma' },
    { name: 'Zod', slug: 'zod' },
    { name: 'Git', slug: 'git' },
    { name: 'GitHub', slug: 'github' },
    { name: 'Vercel', slug: 'vercel' },
    { name: 'AWS', slug: 'amazonwebservices', iconUrl: 'https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/dark/aws-color.png' },
    { name: 'Docker', slug: 'docker' },
    { name: 'Expo', slug: 'expo' },
    { name: 'Clerk', slug: 'clerk' },
  ];

  return (
    <section className="w-full bg-transparent pb-10 px-4 md:px-12 lg:px-20 overflow-x-clip flex flex-col xl:flex-row gap-6 lg:gap-10 items-center xl:items-stretch mt-2 relative">
      <motion.div 
        variants={FADE_UP}
        initial="initial"
        whileInView="animate"
        viewport={{ once: false }}
        transition={TRANSITIONS.smooth}
        className="w-full lg:max-w-200 relative z-10 shrink-0 transform-gpu"
      >
        <div className="w-full bg-[#131313] border border-white/10 rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-12 relative overflow-hidden group min-h-[480px] flex flex-col md:flex-row justify-between h-auto md:h-[410px] transform-gpu">
          <div className="absolute inset-y-0 right-0 w-full md:w-1/2 z-0 pointer-events-none overflow-hidden">
             <StarfieldBackground />
             <div className="absolute inset-0 bg-linear-to-t md:bg-linear-to-r from-[#131313] via-transparent to-transparent z-10" />
          </div>
          
          <div className="absolute -bottom-[280px] -left-[120px] md:-bottom-[220px] md:-left-[180px] w-[500px] md:w-[640px] h-[500px] md:h-[640px] pointer-events-none group-hover:opacity-100 opacity-80 transform-gpu">
             <div className="w-full h-full relative rounded-full flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border border-white/8 shadow-[0_0_80px_rgba(255,255,255,0.05),inset_0_0_80px_rgba(255,255,255,0.05)]" />
                <div className="absolute inset-0 rounded-full overflow-hidden">
                   <div className="w-full h-full relative opacity-60 animate-[globe-rotation_10s_linear_infinite]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1.2px, transparent 1.2px)', backgroundSize: '24px 24px', maskImage: 'radial-gradient(circle at center, black 40%, transparent 85%)', WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 85%)' }} />
                </div>
                <div className="absolute inset-0 rounded-full shadow-[inset_-60px_-60px_100px_rgba(0,0,0,0.95),inset_60px_60px_80px_rgba(255,255,255,0.05)] pointer-events-none z-30" />
             </div>
          </div>

          <motion.div 
            variants={STAGGER_CONTAINER(0.1, 0.4)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false }}
            className="flex flex-col justify-start z-20 relative lg:max-w-[45%] h-full text-left"
          >
             <div className="mb-4 md:mb-auto">
                <motion.p variants={FADE_UP} className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-white/20 mb-3">Available Globally</motion.p>
                <motion.h2 variants={FADE_UP} className="text-[28px] xs:text-[32px] md:text-[38px] font-black text-white leading-[1.05] tracking-tighter cursor-default">
                   Adaptable across <br />
                   time zones
                </motion.h2>
             </div>
          </motion.div>

          <motion.div 
            variants={STAGGER_CONTAINER(0.1, 0.4)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false }}
            className="flex flex-col justify-between items-center md:items-end z-20 mt-8 md:mt-0 h-full"
          >
             <div className="flex flex-wrap md:flex-col gap-2.5 justify-center md:items-end">
                {zones.map((zone) => (
                   <motion.div 
                     variants={FADE_UP}
                     key={zone.code} 
                     className={`flex items-center gap-3 md:gap-4 px-5 md:px-6 py-2.5 md:py-3 rounded-full border cursor-pointer min-w-[110px] md:min-w-[130px] group/tag ${zone.active ? 'bg-orange-500/10 border-orange-500/30' : 'bg-white/3 border-white/5 opacity-40 hover:opacity-100'}`}
                   >
                      <span className={`text-[9px] md:text-[10px] font-black uppercase tracking-widest ${zone.active ? 'text-orange-500/40' : 'text-white/20'}`}>{zone.code}</span>
                      <span className={`text-[12px] md:text-[13px] font-black ${zone.active ? 'text-orange-500' : 'text-white'}`}>{zone.name}</span>
                   </motion.div>
                ))}
             </div>
             <motion.div variants={FADE_UP} className="flex flex-col items-center md:items-end text-center md:text-right mt-10 md:mt-auto pb-2 md:pb-4 cursor-default">
                <div className="flex items-center gap-2 text-white/20 mb-1">
                   <MapPin size={10} className="text-orange-500/50" />
                   <span className="text-[8px] font-black uppercase tracking-[0.3em]">Remote</span>
                </div>
                <h3 className="text-[24px] md:text-[30px] font-black text-white tracking-tighter leading-none font-['Outfit']">India</h3>
             </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div 
        variants={FADE_UP}
        initial="initial"
        whileInView="animate"
        viewport={{ once: false }}
        transition={{ ...TRANSITIONS.smooth, delay: 0.1 }}
        className="flex-1 w-full relative z-20 bg-[#131313] border border-white/10 rounded-[2.5rem] md:rounded-[3rem] p-6 md:p-8 flex flex-col items-center justify-start overflow-hidden group/skills h-auto min-h-[480px] md:h-[410px] transform-gpu"
      >
          <StarfieldBackground />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] md:w-[420px] h-[320px] md:h-[420px] opacity-8 pointer-events-none group-hover/skills:opacity-15 transform-gpu">
             <div className="w-full h-full animate-[spin_18s_linear_infinite]">
                <img 
                   src="/chrome_sculpture.png" 
                   alt="Sculpture" 
                   className="w-full h-full object-contain"
                   style={{ filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.2)) brightness(1.2)' }}
                />
             </div>
          </div>
          
          <motion.div 
            variants={STAGGER_CONTAINER(0.1, 0.4)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false }}
            className="relative z-50 text-center pb-6 md:pb-8 pt-2"
          >
            <motion.p variants={FADE_UP} className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.45em] text-white/30 mb-2 md:mb-3 pl-1">My Skillset</motion.p>
            <div className="group/magic cursor-default">
              <motion.h1 variants={FADE_UP} className="text-[32px] xs:text-[38px] md:text-[42px] font-black text-white tracking-[-0.07em] leading-none">
                The Magic <span className="font-['Cormorant_Garamond'] italic font-normal text-transparent bg-clip-text bg-linear-to-r from-[#4A72FF] via-[#BC36E0] to-[#EB3678] tracking-tight block md:inline mt-2 md:mt-0 transform-gpu">Behind</span>
              </motion.h1>
            </div>
          </motion.div>

          <motion.div 
            variants={STAGGER_CONTAINER(0.04, 0.4)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false }}
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
