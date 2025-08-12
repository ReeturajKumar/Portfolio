'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useResponsive } from '../../lib/responsive';
import { 
  Code2, Brain, Palette, Rocket, Database, Server,
  Globe, Cpu, Smartphone, Cloud, Lock, GitBranch,
  Layers, Terminal, Coffee, Zap, Trophy, Target,
  Sparkles, Star, Heart, Shield, Award, TrendingUp,
  Users, Lightbulb, Gauge, Package, Boxes, Workflow,
  MonitorSmartphone, Briefcase, GraduationCap, MapPin,
  Calendar, Clock, CheckCircle2, ArrowRight, Hexagon,
  Pentagon, Triangle, Circle, Square, Diamond, Mail,
  Github, Linkedin, Twitter, ArrowDown, BookOpen,
  Gem, PenTool, Layout, FileCode, Settings, MousePointer2,
  Eye, Fingerprint, Wifi, Bluetooth, Headphones, Camera
} from 'lucide-react';

// Enhanced floating icons with more variety and better animations
const floatingIcons = [
  { Icon: Brain, gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', delay: 0, size: 'large' },
  { Icon: Database, gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', delay: 0.5, size: 'medium' },
  { Icon: Palette, gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', delay: 1, size: 'small' },
  { Icon: Terminal, gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)', delay: 1.5, size: 'large' },
  { Icon: Cloud, gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)', delay: 2, size: 'medium' },
  { Icon: Shield, gradient: 'linear-gradient(135deg, #ff0844 0%, #ffb199 100%)', delay: 2.5, size: 'small' },
  { Icon: Rocket, gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)', delay: 3, size: 'medium' },
  { Icon: Zap, gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)', delay: 3.5, size: 'small' },
  { Icon: Globe, gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)', delay: 4, size: 'large' },
  { Icon: Heart, gradient: 'linear-gradient(135deg, #a8caba 0%, #5d4e75 100%)', delay: 4.5, size: 'small' },
];

// Interactive particles - safe for SSR
const generateParticles = () => Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  delay: Math.random() * 5,
  duration: 3 + Math.random() * 4,
  size: 2 + Math.random() * 4,
}));

// Skills data from resume
const skillsData = [
  { 
    category: 'Frontend',
    Icon: Layout,
    color: '#667eea',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    skills: [
      { name: 'React/Next.js', level: 95 },
      { name: 'HTML/CSS', level: 92 },
      { name: 'JavaScript', level: 90 },
      { name: 'Tailwind CSS', level: 88 }
    ]
  },
  { 
    category: 'Backend & Database',
    Icon: Server,
    color: '#f093fb',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    skills: [
      { name: 'Node.js', level: 88 },
      { name: 'Express.js', level: 85 },
      { name: 'MongoDB', level: 90 },
      { name: 'Python', level: 82 }
    ]
  },
  { 
    category: 'Tools & Cloud',
    Icon: Cloud,
    color: '#4facfe',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    skills: [
      { name: 'Redux', level: 92 },
      { name: 'GitHub', level: 88 },
      { name: 'Vercel/Render', level: 85 },
      { name: 'CI/CD', level: 80 }
    ]
  }
];

// Projects data from resume
const projectsData = [
  {
    title: 'LearnNexus - LMS Platform',
    description: 'An intuitive LMS portal enabling seamless course management, student enrollment, and progress tracking for online learning with Student & Admin Dashboard.',
    technologies: ['Next.js 13', 'Tailwind CSS', 'TypeScript'],
    link: 'https://learnnexus.vercel.app/',
    github: '#',
    image: '/images/projects/learnnexus.png', // Your own image
    Icon: GraduationCap,
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },
  {
    title: 'HireTrack - Job Platform',
    description: 'Modern job platform connecting seekers and employers with tools for applications, resumes, and admin management with Analytics & Reports.',
    technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Clerk', 'Firebase', 'ShadCN UI'],
    link: 'https://hiretrack.vercel.app/',
    github: '#',
    image: '/images/projects/hiretrack.png', // Your own image
    Icon: Briefcase,
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  },
  {
    title: 'Real Estate Portal',
    description: 'Built a secure platform for users to buy and sell properties with Google & Manual Authentication for secure logins.',
    technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'Tailwind CSS'],
    link: 'https://rutu-estate.onrender.com',
    github: '#',
    image: '/images/projects/realestate.png', // Your own image
    Icon: Globe,
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  },
  {
    title: 'TuneFlow - Music Streaming App',
    description: 'Built a music streaming app with real-time social interactions, authentication (Clerk), live chat, and an admin panel.',
    technologies: ['React', 'TypeScript', 'Zustand', 'WebSockets', 'MongoDB'],
    link: 'https://tuneflow-4vd5.onrender.com/',
    github: '#',
    image: '/images/projects/tuneflow.png', // Your own image
    Icon: Headphones,
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
  }
];

// Journey data from resume
const journeyData = [
  { id: 'journey-1', year: '2021', title: 'Started CS Degree', desc: 'Bachelor of Technology in Computer Science at OmDayal Group', Icon: GraduationCap, gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' },
  { id: 'journey-2', year: '2023', title: 'Jio Platforms Intern', desc: 'Developed doctor appointment booking system using React with Redux', Icon: Code2, gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' },
  { id: 'journey-3', year: '2024 Q2', title: 'Flutter Developer', desc: 'Built responsive Spotify UI clone at Think Again Lab, Kolkata', Icon: Smartphone, gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' },
  { id: 'journey-4', year: '2024 Q3', title: 'Full Stack Engineer', desc: 'Built appointment booking system with Stripe at VigoMerge Inc', Icon: Server, gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)' },
  { id: 'journey-5', year: '2025', title: 'Software Engineer', desc: 'Built e-commerce web app with AI ChatBot at Hexaware Technologies', Icon: Brain, gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)' },
];

// Achievements data from resume
const achievements = [
  { value: '4+', label: 'Major Projects', Icon: Trophy, gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' },
  { value: '5', label: 'Internships', Icon: Briefcase, gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' },
  { value: '3+', label: 'Years Learning', Icon: Calendar, gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' },
  { value: '15+', label: 'Technologies', Icon: Code2, gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)' },
];

// Enhanced floating icon component with interactive features
function FloatingIcon({ Icon, gradient, delay, index, size, isMobile }) {
  const positions = [
    { left: '5%', top: '20%' },
    { left: '15%', top: '45%' },
    { left: '8%', top: '70%' },
    { left: '22%', top: '85%' },
    { left: '88%', top: '15%' },
    { left: '78%', top: '40%' },
    { left: '92%', top: '65%' },
    { left: '85%', top: '85%' },
    { left: '95%', top: '35%' },
    { left: '3%', top: '95%' },
  ];

  const mobilePositions = [
    { left: '3%', top: '15%' },
    { left: '8%', top: '35%' },
    { left: '5%', top: '60%' },
    { left: '10%', top: '85%' },
    { left: '88%', top: '20%' },
    { left: '85%', top: '45%' },
    { left: '90%', top: '70%' },
    { left: '83%', top: '90%' },
    { left: '92%', top: '10%' },
    { left: '2%', top: '90%' },
  ];

  const currentPositions = isMobile ? mobilePositions : positions;
  
  const getSizeConfig = (size, isMobile) => {
    const configs = {
      small: { width: isMobile ? 35 : 50, iconSize: isMobile ? 18 : 24 },
      medium: { width: isMobile ? 45 : 65, iconSize: isMobile ? 22 : 30 },
      large: { width: isMobile ? 55 : 80, iconSize: isMobile ? 28 : 38 }
    };
    return configs[size] || configs.medium;
  };

  const sizeConfig = getSizeConfig(size, isMobile);

  const iconStyle = {
    position: 'absolute',
    ...currentPositions[index % currentPositions.length],
    zIndex: (index % 5) + 1,  // Use index-based zIndex instead of random
  };

  const iconContainerStyle = {
    width: `${sizeConfig.width}px`,
    height: `${sizeConfig.width}px`,
    background: gradient,
    borderRadius: `${sizeConfig.width * 0.3}px`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: `0 ${sizeConfig.width * 0.3}px ${sizeConfig.width * 0.8}px rgba(0, 0, 0, 0.4)`,
    border: '1px solid rgba(255, 255, 255, 0.15)',
    cursor: 'pointer',
  };

  return (
    <motion.div
      style={iconStyle}
      initial={{ scale: 0, opacity: 0, rotate: -180 }}
      animate={{
        scale: [0.8, 1.2, 0.9, 1.1, 1],
        opacity: [0.3, 0.8, 0.5, 0.9, 0.6],
        y: [0, -25, 10, -15, 0],
        x: index < 5 ? [0, 15, -8, 12, 0] : [0, -15, 8, -12, 0],
        rotate: [0, 15, -10, 8, 0],
      }}
      transition={{
        duration: 8 + (index * 0.4),
        delay: delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      whileHover={{
        scale: 1.3,
        rotate: 360,
        transition: { duration: 0.8, ease: "easeOut" }
      }}
      whileTap={{
        scale: 0.9,
        rotate: -180,
        transition: { duration: 0.3 }
      }}
    >
      <motion.div 
        style={iconContainerStyle}
        whileHover={{
          boxShadow: `0 ${sizeConfig.width * 0.5}px ${sizeConfig.width * 1.2}px rgba(102, 126, 234, 0.6)`,
        }}
      >
        <Icon 
          style={{ 
            width: `${sizeConfig.iconSize}px`, 
            height: `${sizeConfig.iconSize}px`, 
            color: 'white',
            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
          }} 
        />
      </motion.div>
    </motion.div>
  );
}

// Particle component for background animation
function Particle({ particle }) {
  return (
    <motion.div
      style={{
        position: 'absolute',
        left: `${particle.x}%`,
        top: `${particle.y}%`,
        width: `${particle.size}px`,
        height: `${particle.size}px`,
        background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.3), rgba(240, 147, 251, 0.3))',
        borderRadius: '50%',
        pointerEvents: 'none',
      }}
      animate={{
        y: [-20, -100, -20],
        opacity: [0, 1, 0],
        scale: [0.5, 1, 0.5],
      }}
      transition={{
        duration: particle.duration,
        delay: particle.delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

// Enhanced skill bar with hover effects and animations
function SkillBar({ skill, delay, gradient, index }) {
  const barRef = useRef(null);
  const isInView = useInView(barRef, { once: true });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={barRef}
      initial={{ opacity: 0, x: -30, rotateY: -15 }}
      animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
      transition={{ 
        duration: 0.7, 
        delay: delay,
        type: "spring",
        stiffness: 100,
        damping: 20
      }}
      style={{ 
        marginBottom: '24px',
        perspective: '1000px'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
    >
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: '12px' 
      }}>
        <motion.span 
          style={{ 
            fontSize: '15px', 
            color: isHovered ? '#ffffff' : '#d1d5db', 
            fontWeight: '600',
            transition: 'color 0.3s ease'
          }}
          animate={{
            x: isHovered ? 5 : 0,
          }}
        >
          {skill.name}
        </motion.span>
        <motion.div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <motion.span 
            style={{ 
              fontSize: '14px', 
              fontWeight: '700',
              background: gradient,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ 
              duration: 0.5, 
              delay: delay + 0.4,
              type: "spring",
              stiffness: 200
            }}
          >
            {skill.level}%
          </motion.span>
          <motion.div
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: gradient,
            }}
            animate={{
              scale: isHovered ? [1, 1.5, 1] : 1,
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: index * 0.2
            }}
          />
        </motion.div>
      </div>
      
      <motion.div 
        style={{ 
          width: '100%', 
          height: '12px', 
          background: 'rgba(255, 255, 255, 0.08)', 
          borderRadius: '50px',
          overflow: 'hidden',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          position: 'relative'
        }}
        whileHover={{
          boxShadow: '0 0 20px rgba(102, 126, 234, 0.3)',
        }}
      >
        {/* Background shimmer effect */}
        <motion.div
          style={{
            position: 'absolute',
            top: 0,
            left: '-100%',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
          }}
          animate={isInView ? {
            left: '100%',
          } : {}}
          transition={{
            duration: 1.5,
            delay: delay + 0.5,
            ease: "easeOut"
          }}
        />
        
        {/* Main progress bar */}
        <motion.div
          style={{
            height: '100%',
            background: gradient,
            borderRadius: '50px',
            boxShadow: isHovered 
              ? `0 0 25px ${gradient.match(/#[a-fA-F0-9]{6}/)?.[0] || '#667eea'}60`
              : `0 0 15px ${gradient.match(/#[a-fA-F0-9]{6}/)?.[0] || '#667eea'}40`,
            position: 'relative',
            overflow: 'hidden',
          }}
          initial={{ width: 0 }}
          animate={isInView ? { 
            width: `${skill.level}%`,
          } : { width: 0 }}
          transition={{ 
            duration: 2, 
            delay: delay + 0.3, 
            ease: "easeOut" 
          }}
        >
          {/* Animated glow effect */}
          <motion.div
            style={{
              position: 'absolute',
              top: '50%',
              right: '10px',
              transform: 'translateY(-50%)',
              width: '4px',
              height: '4px',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.8)',
              boxShadow: '0 0 10px rgba(255,255,255,0.5)',
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: delay + 1,
            }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default function AboutSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowWidth, setWindowWidth] = useState(0);
  const [activeTab, setActiveTab] = useState('skills');
  const [cursorGlow, setCursorGlow] = useState(false);
  const [particles, setParticles] = useState([]);
  const sectionRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 300, damping: 50 });
  const smoothY = useSpring(mouseY, { stiffness: 300, damping: 50 });
  
  const responsive = useResponsive(windowWidth);
  const { isMobile, isTablet, isDesktop, getValue, getStyle } = responsive;

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    setParticles(generateParticles());

    const handleMouseMove = (e) => {
      const rect = sectionRef.current?.getBoundingClientRect();
      if (rect) {
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setMousePosition({ x, y });
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      }
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    const handleMouseEnter = () => setCursorGlow(true);
    const handleMouseLeave = () => setCursorGlow(false);

    const section = sectionRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
      section.addEventListener('mouseenter', handleMouseEnter);
      section.addEventListener('mouseleave', handleMouseLeave);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      if (section) {
        section.removeEventListener('mousemove', handleMouseMove);
        section.removeEventListener('mouseenter', handleMouseEnter);
        section.removeEventListener('mouseleave', handleMouseLeave);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [mouseX, mouseY]);

  // Using responsive utility instead of manual breakpoints

  // Main section style matching Hero section
  const sectionStyle = {
    position: 'relative',
    minHeight: getValue({
      xs: '100vh', sm: '100vh', md: '100vh',
      lg: '100vh', xl: '105vh', '2xl': '110vh'
    }),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)',
    paddingTop: getValue({
      xs: '80px', sm: '85px', md: '90px',
      lg: '100px', xl: '110px', '2xl': '120px'
    }),
    paddingBottom: getValue({
      xs: '40px', sm: '45px', md: '50px',
      lg: '60px', xl: '70px', '2xl': '80px'
    }),
  };

  const backgroundOverlayStyle = {
    position: 'absolute',
    inset: 0,
    background: !isMobile 
      ? `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
          rgba(102, 126, 234, 0.15) 0%, 
          rgba(240, 147, 251, 0.1) 25%, 
          rgba(79, 172, 254, 0.05) 50%, 
          transparent 70%)`
      : 'linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(240, 147, 251, 0.05) 100%)',
    pointerEvents: 'none',
    transition: 'background 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    filter: cursorGlow ? 'brightness(1.2)' : 'brightness(1)',
  };

  const gridPatternStyle = {
    position: 'absolute',
    inset: 0,
    backgroundImage: `
      linear-gradient(rgba(102, 126, 234, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(102, 126, 234, 0.03) 1px, transparent 1px),
      linear-gradient(45deg, rgba(240, 147, 251, 0.01) 1px, transparent 1px)
    `,
    backgroundSize: isMobile ? '25px 25px, 25px 25px, 50px 50px' : '40px 40px, 40px 40px, 80px 80px',
    opacity: 0.6,
    animation: 'gridFloat 20s ease-in-out infinite',
  };

  const meshGradientStyle = {
    position: 'absolute',
    inset: 0,
    background: `
      radial-gradient(circle at 20% 20%, rgba(102, 126, 234, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(240, 147, 251, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 40% 70%, rgba(79, 172, 254, 0.06) 0%, transparent 50%),
      radial-gradient(circle at 90% 80%, rgba(67, 233, 123, 0.04) 0%, transparent 50%)
    `,
    pointerEvents: 'none',
    opacity: cursorGlow ? 0.8 : 0.6,
    transition: 'opacity 0.3s ease',
  };

  const contentContainerStyle = {
    position: 'relative',
    zIndex: 10,
    width: '100%',
    ...responsive.container,
    maxWidth: getValue({
      xs: '100%', sm: '100%', md: '768px',
      lg: '1024px', xl: '1200px', '2xl': '1400px'
    }),
  };

  const badgeStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: isMobile ? '6px' : '8px',
    padding: isMobile ? '8px 16px' : '10px 24px',
    marginBottom: isMobile ? '24px' : '40px',
    borderRadius: '9999px',
    background: 'rgba(102, 126, 234, 0.1)',
    border: '1px solid rgba(102, 126, 234, 0.3)',
    backdropFilter: 'blur(10px)',
  };

  const headingStyle = {
    fontSize: isMobile ? '2.5rem' : isTablet ? '3.5rem' : '5rem',
    fontWeight: 'bold',
    marginBottom: isMobile ? '16px' : '30px',
    lineHeight: 1.2,
    color: 'white',
    textAlign: 'center',
  };

  const gradientTextStyle = {
    background: 'linear-gradient(135deg, #667eea 0%, #f093fb 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  };

  const descriptionStyle = {
    fontSize: isMobile ? '0.95rem' : '1.125rem',
    color: '#888',
    maxWidth: '700px',
    margin: '0 auto',
    lineHeight: 1.6,
    textAlign: 'center',
    marginBottom: isMobile ? '40px' : '60px',
  };

  const tabButtonStyle = (isActive) => ({
    padding: isMobile ? '10px 20px' : '12px 28px',
    background: isActive 
      ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
      : 'rgba(255, 255, 255, 0.05)',
    color: isActive ? 'white' : '#888',
    border: isActive ? 'none' : '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '50px',
    fontSize: isMobile ? '14px' : '15px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    backdropFilter: 'blur(10px)',
  });

  const cardStyle = {
    padding: isMobile ? '24px' : '32px',
    background: 'rgba(255, 255, 255, 0.02)',
    borderRadius: '24px',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)',
    marginBottom: '24px',
    transition: 'all 0.3s ease',
  };

  return (
    <section ref={sectionRef} id="about" style={sectionStyle}>
      {/* Enhanced background effects */}
      <div style={meshGradientStyle} />
      <div style={backgroundOverlayStyle} />
      <div style={gridPatternStyle} />

      {/* Interactive cursor follower */}
      {!isMobile && cursorGlow && (
        <motion.div
          style={{
            position: 'fixed',
            left: 0,
            top: 0,
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(102, 126, 234, 0.1) 0%, transparent 70%)',
            borderRadius: '50%',
            pointerEvents: 'none',
            zIndex: 5,
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            x: smoothX,
            y: smoothY,
          }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 30
          }}
        />
      )}

      {/* Enhanced floating icons */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 2 }}>
        {floatingIcons.slice(0, isMobile ? 6 : 10).map((item, index) => (
          <FloatingIcon
            key={index}
            Icon={item.Icon}
            gradient={item.gradient}
            delay={item.delay}
            index={index}
            size={item.size}
            isMobile={isMobile}
          />
        ))}
      </div>

      {/* Animated particles */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1 }}>
        {particles.length > 0 && particles.slice(0, isMobile ? 10 : 20).map((particle) => (
          <Particle key={particle.id} particle={particle} />
        ))}
      </div>

      {/* Main content */}
      <motion.div
        style={contentContainerStyle}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Section Badge */}
        <motion.div
          style={{ textAlign: 'center' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div style={badgeStyle}>
            <Sparkles style={{ width: isMobile ? '14px' : '16px', height: isMobile ? '14px' : '16px', color: '#667eea' }} />
            <span style={{ fontSize: isMobile ? '12px' : '14px', color: '#a0a0a0' }}>Get to know me better</span>
            <Star style={{ width: isMobile ? '14px' : '16px', height: isMobile ? '14px' : '16px', color: '#f093fb' }} />
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h2
          style={headingStyle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          About <span style={gradientTextStyle}>Me</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          style={descriptionStyle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          I'm a passionate full-stack developer with expertise in creating beautiful, 
          functional digital experiences. Turning complex problems into elegant solutions.
        </motion.p>

        {/* Bio Card */}
        <motion.div
          style={{
            ...cardStyle,
            marginBottom: isMobile ? '48px' : '64px',
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          whileHover={{ 
            transform: 'translateY(-5px)',
            boxShadow: '0 30px 80px rgba(102, 126, 234, 0.2)',
          }}
        >
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
            gap: isMobile ? '32px' : '48px',
            alignItems: 'center',
          }}>
            {/* Text content */}
            <div>
              <motion.div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '24px',
                }}
                whileHover={{ x: 10 }}
              >
                <div style={{
                  width: '48px',
                  height: '48px',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)',
                }}>
                  <Brain style={{ width: '24px', height: '24px', color: 'white' }} />
                </div>
                <h3 style={{
                  fontSize: isMobile ? '20px' : '24px',
                  fontWeight: 'bold',
                  color: 'white',
                }}>Creative Developer</h3>
              </motion.div>

              <p style={{
                fontSize: isMobile ? '15px' : '16px',
                color: '#d1d5db',
                lineHeight: 1.8,
                marginBottom: '20px',
              }}>
                Hi! I'm <span style={{ color: '#667eea', fontWeight: '600' }}>Reeturaj Kumar</span>, 
                a results-driven Frontend Developer specializing in React.js, with hands-on experience building 
                and delivering dynamic web applications, including e-commerce platforms and appointment booking systems.
              </p>

              <p style={{
                fontSize: isMobile ? '15px' : '16px',
                color: '#d1d5db',
                lineHeight: 1.8,
                marginBottom: '24px',
              }}>
                Proficient in React and Redux for scalable UI development, with working knowledge of the MERN stack. 
                Passionate about clean, maintainable code and intuitive UI/UX design.
              </p>

              {/* Info items */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '20px',
                marginBottom: '32px',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <MapPin style={{ width: '18px', height: '18px', color: '#a0a0a0' }} />
                  <span style={{ color: '#d1d5db', fontSize: '14px' }}>West Bengal, India</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Mail style={{ width: '18px', height: '18px', color: '#a0a0a0' }} />
                  <span style={{ color: '#d1d5db', fontSize: '14px' }}>reeturajvats587@gmail.com</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <GraduationCap style={{ width: '18px', height: '18px', color: '#a0a0a0' }} />
                  <span style={{ color: '#d1d5db', fontSize: '14px' }}>CS Student (2025)</span>
                </div>
              </div>

              {/* CTA Button - Download Resume */}
              <motion.a
                href="/Reeturaj-Kumar-Resume.pdf"
                download="Reeturaj-Kumar-Resume.pdf"
                style={{
                  padding: isMobile ? '12px 24px' : '14px 32px',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '9999px',
                  fontSize: isMobile ? '14px' : '16px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 10px 30px rgba(102, 126, 234, 0.3)',
                  textDecoration: 'none',
                }}
                whileHover={{ scale: 1.05, boxShadow: '0 15px 40px rgba(102, 126, 234, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  // Analytics tracking (optional)
                  console.log('Resume downloaded');
                }}
              >
                <BookOpen style={{ width: '18px', height: '18px' }} />
                Download Resume
              </motion.a>
            </div>

            {/* Visual side */}
            <div style={{
              position: 'relative',
              height: isMobile ? '300px' : '400px',
              background: 'rgba(255, 255, 255, 0.02)',
              borderRadius: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              border: '1px solid rgba(255, 255, 255, 0.05)',
            }}>
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{ textAlign: 'center' }}
              >
                <div style={{
                  width: '120px',
                  height: '120px',
                  margin: '0 auto 24px',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  borderRadius: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 20px 60px rgba(102, 126, 234, 0.4)',
                }}>
                  <Code2 style={{ width: '60px', height: '60px', color: 'white' }} />
                </div>
                <h4 style={{ color: 'white', fontSize: '20px', fontWeight: 'bold', marginBottom: '8px' }}>
                  Full Stack Developer
                </h4>
                <p style={{ color: '#888', fontSize: '14px' }}>
                  Building the future, one line at a time
                </p>
              </motion.div>

              {/* Floating elements */}
              {['</>', '{ }', '[ ]', '( )', '=>'].map((code, i) => (
                <motion.div
                  key={i}
                  style={{
                    position: 'absolute',
                    color: 'rgba(102, 126, 234, 0.3)',
                    fontSize: '20px',
                    fontFamily: 'monospace',
                    fontWeight: 'bold',
                    top: `${20 + (i * 18)}%`,
                    left: `${10 + (i * 15)}%`,
                  }}
                  animate={{
                    y: [0, -15, 0],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3 + i,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                >
                  {code}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: isMobile ? '8px' : '16px',
            marginBottom: isMobile ? '32px' : '48px',
            flexWrap: 'wrap',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {['skills', 'projects', 'journey', 'achievements'].map((tab) => (
            <motion.button
              key={tab}
              style={tabButtonStyle(activeTab === tab)}
              onClick={() => setActiveTab(tab)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        {/* Tab Content */}
        {activeTab === 'skills' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
              gap: '24px',
            }}
          >
            {skillsData.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                style={cardStyle}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                whileHover={{ 
                  transform: 'translateY(-5px)',
                  boxShadow: '0 30px 80px rgba(102, 126, 234, 0.2)',
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '24px',
                }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    background: category.gradient,
                    borderRadius: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: `0 4px 15px ${category.color}30`,
                  }}>
                    <category.Icon style={{ width: '22px', height: '22px', color: 'white' }} />
                  </div>
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    color: 'white',
                  }}>{category.category}</h3>
                </div>

                {category.skills.map((skill, index) => (
                  <SkillBar 
                    key={skill.name} 
                    skill={skill} 
                    delay={categoryIndex * 0.1 + index * 0.05}
                    gradient={category.gradient}
                    index={index}
                  />
                ))}
              </motion.div>
            ))}
          </motion.div>
        )}

        {activeTab === 'projects' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
              gap: '24px',
            }}
          >
            {projectsData.map((project, index) => (
              <motion.div
                key={project.title}
                style={{
                  ...cardStyle,
                  padding: '0',
                  overflow: 'hidden',
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  transform: 'translateY(-8px)',
                  boxShadow: '0 25px 60px rgba(102, 126, 234, 0.2)',
                }}
              >
                {/* Project Image */}
                <div style={{
                  width: '100%',
                  height: '200px',
                  position: 'relative',
                  overflow: 'hidden',
                }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease',
                    }}
                    onError={(e) => {
                      e.target.style.background = project.gradient;
                      e.target.style.display = 'flex';
                      e.target.style.alignItems = 'center';
                      e.target.style.justifyContent = 'center';
                      e.target.innerHTML = `<project.Icon style="width: 48px; height: 48px; color: white;" />`;
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    width: '40px',
                    height: '40px',
                    background: 'rgba(0, 0, 0, 0.7)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <project.Icon style={{ width: '20px', height: '20px', color: 'white' }} />
                  </div>
                </div>

                {/* Project Content */}
                <div style={{ padding: isMobile ? '20px' : '24px' }}>
                  {/* Project Header */}
                  <div style={{
                    marginBottom: '16px',
                  }}>
                    <h3 style={{
                      fontSize: '20px',
                      fontWeight: 'bold',
                      color: 'white',
                      marginBottom: '8px',
                      background: project.gradient,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}>{project.title}</h3>
                  </div>

                  {/* Project Description */}
                  <p style={{
                    fontSize: '15px',
                    color: '#b0b0b0',
                    lineHeight: 1.7,
                    marginBottom: '20px',
                    fontWeight: '400',
                  }}>{project.description}</p>

                  {/* Technologies */}
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px',
                    marginBottom: '20px',
                  }}>
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        style={{
                          padding: '6px 14px',
                          background: 'rgba(102, 126, 234, 0.15)',
                          border: '1px solid rgba(102, 126, 234, 0.4)',
                          borderRadius: '20px',
                          fontSize: '13px',
                          color: '#c0c0ff',
                          fontWeight: '500',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div style={{
                    display: 'flex',
                    gap: '12px',
                  }}>
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        flex: 1,
                        padding: '12px 20px',
                        background: project.gradient,
                        color: 'white',
                        textDecoration: 'none',
                        borderRadius: '10px',
                        fontSize: '14px',
                        fontWeight: '600',
                        textAlign: 'center',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        cursor: 'pointer',
                        boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)',
                      }}
                      whileHover={{ 
                        scale: 1.02,
                        boxShadow: '0 6px 20px rgba(102, 126, 234, 0.4)'
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Globe style={{ width: '16px', height: '16px' }} />
                    Live Demo
                  </motion.a>
                    {project.github !== '#' && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          padding: '12px 20px',
                          background: 'rgba(255, 255, 255, 0.08)',
                          color: '#e5e5e5',
                          textDecoration: 'none',
                          borderRadius: '10px',
                          fontSize: '14px',
                          fontWeight: '600',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '8px',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          cursor: 'pointer',
                        }}
                        whileHover={{ 
                          scale: 1.02, 
                          backgroundColor: 'rgba(255, 255, 255, 0.12)',
                          borderColor: 'rgba(255, 255, 255, 0.3)'
                        }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Github style={{ width: '16px', height: '16px' }} />
                        Code
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {activeTab === 'journey' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              maxWidth: '800px',
              margin: '0 auto',
            }}
          >
            {journeyData.map((item, index) => (
              <motion.div
                key={item.id}
                style={{
                  display: 'flex',
                  gap: '24px',
                  marginBottom: '32px',
                  position: 'relative',
                }}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Timeline line */}
                {index < journeyData.length - 1 && (
                  <div style={{
                    position: 'absolute',
                    left: isMobile ? '22px' : '35px',
                    top: '60px',
                    width: '2px',
                    height: '80px',
                    background: 'linear-gradient(180deg, rgba(102, 126, 234, 0.3) 0%, transparent 100%)',
                  }} />
                )}

                {/* Icon */}
                <motion.div
                  style={{
                    width: isMobile ? '48px' : '70px',
                    height: isMobile ? '48px' : '70px',
                    minWidth: isMobile ? '48px' : '70px',
                    background: item.gradient,
                    borderRadius: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
                  }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <item.Icon style={{ width: isMobile ? '24px' : '35px', height: isMobile ? '24px' : '35px', color: 'white' }} />
                </motion.div>

                {/* Content */}
                <div style={{ flex: 1 }}>
                  <div style={{
                    padding: isMobile ? '16px' : '20px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    borderRadius: '16px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      marginBottom: '8px',
                    }}>
                      <span style={{
                        padding: '4px 12px',
                        background: 'rgba(102, 126, 234, 0.1)',
                        border: '1px solid rgba(102, 126, 234, 0.3)',
                        borderRadius: '20px',
                        fontSize: '12px',
                        fontWeight: 'bold',
                        color: '#a0a0ff',
                      }}>{item.year}</span>
                      <h4 style={{
                        fontSize: isMobile ? '16px' : '18px',
                        fontWeight: 'bold',
                        color: 'white',
                      }}>{item.title}</h4>
                    </div>
                    <p style={{
                      fontSize: '14px',
                      color: '#888',
                    }}>{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {activeTab === 'achievements' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
              gap: '24px',
            }}
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                style={{
                  ...cardStyle,
                  textAlign: 'center',
                  padding: isMobile ? '20px' : '28px',
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  y: -8,
                  scale: 1.03,
                  boxShadow: '0 25px 60px rgba(102, 126, 234, 0.25)',
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                whileTap={{
                  scale: 0.98,
                  y: -2,
                  transition: { duration: 0.1 }
                }}
              >
                <motion.div
                  style={{
                    width: '64px',
                    height: '64px',
                    margin: '0 auto 16px',
                    background: achievement.gradient,
                    borderRadius: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                  }}
                  animate={{ 
                    rotate: [0, 3, -3, 0],
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  whileHover={{
                    rotate: 0,
                    scale: 1.1,
                    boxShadow: '0 15px 40px rgba(0, 0, 0, 0.4)',
                    transition: { duration: 0.3 }
                  }}
                >
                  <achievement.Icon style={{ width: '32px', height: '32px', color: 'white' }} />
                </motion.div>
                <motion.div
                  style={{
                    fontSize: isMobile ? '24px' : '32px',
                    fontWeight: 'bold',
                    background: achievement.gradient,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    marginBottom: '8px',
                  }}
                >
                  {achievement.value}
                </motion.div>
                <div style={{
                  fontSize: '14px',
                  color: '#888',
                }}>{achievement.label}</div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </motion.div>

      {/* Enhanced CSS animations */}
      <style jsx>{`
        @keyframes gridFloat {
          0%, 100% { 
            transform: translateX(0) translateY(0) rotate(0deg);
            opacity: 0.6;
          }
          25% { 
            transform: translateX(-5px) translateY(-3px) rotate(1deg);
            opacity: 0.4;
          }
          50% { 
            transform: translateX(3px) translateY(-8px) rotate(-0.5deg);
            opacity: 0.7;
          }
          75% { 
            transform: translateX(-2px) translateY(5px) rotate(0.8deg);
            opacity: 0.5;
          }
        }

        @keyframes sparkle {
          0%, 100% { 
            opacity: 0.3;
            transform: scale(0.8) rotate(0deg);
          }
          50% { 
            opacity: 1;
            transform: scale(1.2) rotate(180deg);
          }
        }

        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg);
          }
          33% { 
            transform: translateY(-10px) rotate(2deg);
          }
          66% { 
            transform: translateY(5px) rotate(-1deg);
          }
        }

        @keyframes glow {
          0%, 100% { 
            box-shadow: 0 0 20px rgba(102, 126, 234, 0.2);
          }
          50% { 
            box-shadow: 0 0 40px rgba(102, 126, 234, 0.4), 0 0 60px rgba(240, 147, 251, 0.2);
          }
        }

        /* Scrollbar styling for better UX */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 4px;
          transition: all 0.3s ease;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #764ba2, #f093fb);
        }
      `}</style>
    </section>
  );
}