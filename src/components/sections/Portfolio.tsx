import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { Star, Eye } from 'lucide-react';

// Import images
import learnnexusImg from '../../assets/projects/learnnexus.webp';
import hiretrackImg from '../../assets/projects/hiretrack.webp';
import tuneflowImg from '../../assets/projects/tuneflow.webp';
import designStudioImg from '../../assets/projects/design_studio.webp';

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Motion values for cursor following
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for cursor follow
  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const isFirstCard = index === 0;

  return (
    <motion.div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ 
        opacity: 0, 
        x: isFirstCard ? -50 : 0, 
        y: !isFirstCard ? 50 : 0 
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0, 
        y: 0 
      }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ 
        duration: 1.2, 
        ease: [0.23, 1, 0.32, 1],
        delay: index * 0.1 
      }}
      className="w-[90vw] sm:w-[85vw] md:w-[75vw] lg:w-[1000px] flex-shrink-0 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-center bg-white py-6 md:py-10 rounded-[2rem] border border-black/5 relative group lg:cursor-none overflow-hidden h-auto lg:h-auto"
    >
      <a href={project.link} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-40 block lg:cursor-none" />
      
      {/* High-Fidelity Cursor Badge (Desktop Only) */}
      <motion.div 
         style={{ 
           left: springX, 
           top: springY,
           opacity: isHovered ? 1 : 0,
           scale: isHovered ? 1 : 0.5,
           x: "-50%",
           y: "-50%"
         }}
         className="hidden lg:flex absolute z-50 pointer-events-none w-24 h-24 items-center justify-center pointer-events-none"
      >
          <div className="absolute inset-0 bg-black rounded-full shadow-2xl" />
          <motion.svg 
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            viewBox="0 0 100 100" 
            className="absolute inset-0 w-full h-full scale-[0.88] drop-shadow-lg"
          >
             <defs>
                <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
             </defs>
             <text className="text-[9.5px] font-black uppercase tracking-[0.25em] fill-white">
                <textPath href="#circlePath">
                   Visit Project • Visit • Visit •
                </textPath>
             </text>
          </motion.svg>
          <div className="relative z-10 w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-inner">
             <Eye size={20} className="text-black" />
          </div>
      </motion.div>

      {/* Left Content */}
      <div className="lg:col-span-5 flex flex-col pt-0 px-6 sm:px-10 relative z-10">
        <div className="flex items-center gap-3 md:gap-4 mb-2">
           <div className="w-6 md:w-8 h-[2px] bg-[#FF6B00]" />
           <h3 className="text-[20px] xs:text-[24px] md:text-[34px] font-black tracking-tighter text-black">{project.title}</h3>
        </div>
        <p className="text-[11px] md:text-[14px] font-medium text-black/40 leading-relaxed mt-2 md:mt-4 line-clamp-3 md:line-clamp-none">
          {project.description}
        </p>
        <div className="hidden md:flex flex-col gap-2 md:gap-4 mt-5 md:mt-6">
          {project.features.slice(0, 3).map((feature: string, i: number) => (
            <div key={i} className="flex gap-3 md:gap-4 group/item cursor-default">
               <div className="mt-1"><Star size={11} className="text-[#FF6B00]" /></div>
               <p className="text-[10px] md:text-[12px] font-bold text-black/20 group-hover/item:text-black/50 transition-colors tracking-tight">
                  {feature}
               </p>
            </div>
          ))}
        </div>
        <div className="hidden md:flex flex-wrap gap-2 md:gap-2.5 mt-6 md:mt-8">
          {project.stack.map((tech: string) => (
            <div key={tech} className="bg-black/[0.03] border border-black/5 rounded-lg px-2.5 md:px-4 py-1 flex items-center gap-2 group/pill cursor-default">
               <span className="text-[8px] md:text-[10px] font-black uppercase tracking-wider text-black/40 group-hover/pill:text-black transition-colors">{tech}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Visuals */}
      <div className="lg:col-span-7 relative group px-6 sm:px-10 lg:pl-0 lg:pr-10">
        <motion.div 
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1, delay: (index * 0.1) + 0.3, ease: [0.23, 1, 0.32, 1] }}
          className={`relative rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden bg-gradient-to-br ${project.color} border border-white/10 h-[240px] xs:h-[280px] sm:h-[320px] md:h-[380px] mt-4 lg:mt-0`}
        >
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-orange-500/5 blur-[120px] rounded-full pointer-events-none" />
           <div className="relative z-10 h-full">
              <div className="rounded-xl overflow-hidden shadow-2xl transform-gpu h-full">
                 <img src={project.mockups.desktop} className="w-full h-full object-cover" alt="Desktop" />
              </div>
           </div>
        </motion.div>
      </div>

      {/* Vertical Divider line (Hidden on Mobile) */}
      <div className="hidden lg:block absolute left-[41.666667%] top-10 bottom-10 pointer-events-none translate-x-[-50%] z-0">
         <div className="w-[1px] h-full bg-black/[0.06]" />
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Calculate transformation based on project count (4 projects)
  // More translation needed on mobile as container is relatively wider
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66%"]);

  const projects = [
    {
      id: "01",
      title: "LearnNexus",
      description: "An advanced, integrated LMS platform featuring comprehensive course tracking, real-time engagement analytics, and seamless content delivery.",
      features: [
        "Advanced course-tracking & certificate generation system",
        "Real-time learner engagement & retention analytics",
        "Seamless high-bandwidth video content delivery network"
      ],
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
      mockups: { mobile1: learnnexusImg, mobile2: learnnexusImg, desktop: learnnexusImg },
      color: "from-orange-600/10 to-orange-900/5",
      link: "https://learnnexus.vercel.app/"
    },
    {
      id: "02",
      title: "HireTrack",
      description: "An intelligent, AI-powered recruitment portal designed to streamline candidate sourcing and simplify automated technical hiring workflows.",
      features: [
        "AI-driven automated candidate matching & scoring",
        "Streamlined technical assessment pipeline integration",
        "Enterprise-grade recruiter dashboard with real-time tracking"
      ],
      stack: ["Next.js", "PostgreSQL", "Clerk", "Radix UI", "Zod"],
      mockups: { mobile1: hiretrackImg, mobile2: hiretrackImg, desktop: hiretrackImg },
      color: "from-blue-600/10 to-blue-900/5",
      link: "https://hiretrack.vercel.app/"
    },
    {
      id: "03",
      title: "TuneFlow",
      description: "A sleek, social music streaming web application providing personalized active playback queues and precise real-time listening analytics.",
      features: [
        "Personalized active playback queue recommendation engine",
        "Real-time social listening sync & analytics dashboard",
        "High-fidelity Low-Latency audio processing engine"
      ],
      stack: ["React", "TypeScript", "WebSockets", "Node.js", "Express"],
      mockups: { mobile1: tuneflowImg, mobile2: tuneflowImg, desktop: tuneflowImg },
      color: "from-purple-600/10 to-purple-900/5",
      link: "https://tuneflow-4vd5.onrender.com/"
    },
    {
      id: "04",
      title: "Design Studio",
      description: "A high-performance interactive portfolio showcase tailored specifically for presenting premium design projects.",
      features: [
        "Interactive high-performance case study showcase",
        "Enterprise-level creative project presentational engine",
        "High-fidelity cinematic visual experience and smooth motion"
      ],
      stack: ["React", "TailwindCSS", "Framer Motion", "GSAP", "Three.js"],
      mockups: { mobile1: designStudioImg, mobile2: designStudioImg, desktop: designStudioImg },
      color: "from-orange-600/10 to-orange-900/5",
      link: "https://design-studio-lovat.vercel.app/"
    }
  ];

  return (
    <section ref={targetRef} id="portfolio" className="relative h-[280vh] md:h-[250vh] bg-transparent text-black">
      <div className="sticky top-0 h-screen md:h-[100vh] flex flex-col items-center justify-start overflow-hidden pt-0">
        
        {/* Sticky Section Header */}
        <div className="relative z-50 mb-2 h-fit pointer-events-none px-6 md:px-12 lg:px-20 w-full text-left pt-6 md:pt-14">
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="pointer-events-auto"
           >
             <p className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.4em] md:tracking-[0.5em] text-black/30 mb-2">Crafting Modern Experiences</p>
             <h2 className="text-[28px] mb-6 xs:text-[34px] sm:text-[38px] md:text-[54px] font-black tracking-tighter leading-none uppercase text-black">
               Venture <span className="font-['Cormorant_Garamond'] italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] via-[#FDBA74] to-[#EB3678] tracking-tight">Showcase</span>
             </h2>
           </motion.div>
        </div>

        {/* Horizontal Track Container */}
        <div className="pt-1 flex h-full items-center relative w-full">
          <motion.div 
            style={{ x }} 
            className="flex gap-6 md:gap-12 px-5 md:px-12 lg:px-20 h-auto items-center"
          >
            {projects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
