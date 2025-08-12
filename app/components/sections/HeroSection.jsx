'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, Code2, Zap, Globe, Rocket, 
  Star, Heart, Coffee, Gem, Shield,
  Github, Linkedin, Twitter, Mail, ArrowDown, BookOpen
} from 'lucide-react';
import { useResponsive } from '../../lib/responsive';


const socialLinks = [
  { Icon: Github, href: 'https://github.com/ReeturajKumar', label: 'GitHub' },
  { Icon: Linkedin, href: 'https://linkedin.com/in/reeturaj-kumar-372963238', label: 'LinkedIn' },
  { Icon: Mail, href: 'mailto:reeturajvats587@gmail.com', label: 'Email' },
  { Icon: BookOpen, href: '/Reeturaj-Kumar-Resume.pdf', label: 'Resume', download: true },
];

// Floating decorative icons
const floatingIcons = [
  { Icon: Code2, x: '8%', y: '20%', delay: 0, color: '#667eea' },
  { Icon: Rocket, x: '85%', y: '15%', delay: 1, color: '#f093fb' },
  { Icon: Star, x: '5%', y: '75%', delay: 2, color: '#4facfe' },
  { Icon: Zap, x: '90%', y: '80%', delay: 3, color: '#43e97b' },
  { Icon: Globe, x: '15%', y: '50%', delay: 4, color: '#fa709a' },
];


function FloatingIcon({ Icon, x, y, delay, color, isMobile }) {
  if (isMobile) return null; // Hide on mobile for better performance
  
  return (
    <motion.div
      style={{
        position: 'absolute',
        left: x,
        top: y,
        zIndex: 1,
        pointerEvents: 'none',
      }}
      initial={{ opacity: 0, scale: 0, rotate: -180 }}
      animate={{
        opacity: [0, 0.6, 0.8, 0.6],
        scale: [0.8, 1.2, 1, 1.1, 1],
        rotate: [0, 10, -10, 5, 0],
        y: [0, -15, 10, -5, 0],
        x: [0, 5, -5, 2, 0],
      }}
      transition={{
        duration: 8,
        delay: delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <div
        style={{
          width: '50px',
          height: '50px',
          background: `linear-gradient(135deg, ${color}40, ${color}60)`,
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backdropFilter: 'blur(10px)',
          border: `1px solid ${color}30`,
          boxShadow: `0 8px 32px ${color}20`,
        }}
      >
        <Icon 
          style={{ 
            width: '24px', 
            height: '24px', 
            color: color,
            filter: `drop-shadow(0 0 10px ${color}60)`
          }} 
        />
      </div>
    </motion.div>
  );
}

function TypewriterText({ text }) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      // Hide cursor after typing is complete
      const cursorTimeout = setTimeout(() => {
        setShowCursor(false);
      }, 1000);
      return () => clearTimeout(cursorTimeout);
    }
  }, [currentIndex, text]);

  return (
    <>
      {displayText}
      {showCursor && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          style={{
            display: 'inline-block',
            width: '3px',
            height: '1em',
            background: 'linear-gradient(180deg, #667eea 0%, #764ba2 100%)',
            marginLeft: '4px',
            verticalAlign: 'middle',
          }}
        />
      )}
    </>
  );
}

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const responsive = useResponsive(windowWidth);
  const { isMobile, isTablet, isDesktop, getValue, getStyle } = responsive;

  const sectionStyle = {
    position: 'relative',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)',
    marginTop: getValue({
      xs: '60px', sm: '64px', md: '68px', 
      lg: '72px', xl: '76px', '2xl': '80px'
    }),
    paddingTop: getValue({
      xs: '20px', sm: '20px', md: '20px', 
      lg: '20px', xl: '20px', '2xl': '20px'
    }),
    paddingBottom: getValue({
      xs: '20px', sm: '20px', md: '20px', 
      lg: '20px', xl: '20px', '2xl': '20px'
    }),
  };

  const backgroundOverlayStyle = {
    position: 'absolute',
    inset: 0,
    background: !isMobile ? `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(102, 126, 234, 0.1) 0%, transparent 40%)` : 'none',
    pointerEvents: 'none',
    transition: 'background 0.3s ease',
  };

  const gridPatternStyle = {
    position: 'absolute',
    inset: 0,
    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)`,
    backgroundSize: getValue({
      xs: '25px 25px', sm: '30px 30px', md: '35px 35px',
      lg: '45px 45px', xl: '50px 50px', '2xl': '55px 55px'
    }),
    opacity: getValue({
      xs: 0.3, sm: 0.35, md: 0.4, lg: 0.45, xl: 0.5, '2xl': 0.55
    }),
  };

  const contentContainerStyle = {
    position: 'relative',
    zIndex: 10,
    textAlign: 'center',
    ...responsive.container,
    maxWidth: getValue({
      xs: '100%', sm: '100%', md: '768px',
      lg: '1024px', xl: '1200px', '2xl': '1400px'
    }),
    width: '100%',
  };

  const badgeStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: getValue({
      xs: '4px', sm: '6px', md: '7px', 
      lg: '8px', xl: '9px', '2xl': '10px'
    }),
    padding: getValue({
      xs: '6px 14px', sm: '8px 16px', md: '9px 20px',
      lg: '10px 24px', xl: '12px 28px', '2xl': '14px 32px'
    }),
    marginBottom: getValue({
      xs: '12px', sm: '14px', md: '16px',
      lg: '18px', xl: '20px', '2xl': '22px'
    }),
    borderRadius: '9999px',
    background: 'rgba(102, 126, 234, 0.1)',
    border: '1px solid rgba(102, 126, 234, 0.3)',
    backdropFilter: getValue({
      xs: 'blur(8px)', sm: 'blur(10px)', md: 'blur(12px)',
      lg: 'blur(15px)', xl: 'blur(18px)', '2xl': 'blur(20px)'
    }),
  };

  const headingStyle = {
    fontSize: getValue({
      xs: '2rem', sm: '2.5rem', md: '3rem',
      lg: '3.8rem', xl: '4.5rem', '2xl': '5.2rem'
    }),
    fontWeight: 'bold',
    marginBottom: getValue({
      xs: '12px', sm: '16px', md: '20px',
      lg: '24px', xl: '30px', '2xl': '36px'
    }),
    lineHeight: getValue({
      xs: 1.2, sm: 1.2, md: 1.2, lg: 1.15, xl: 1.15, '2xl': 1.1
    }),
    color: 'white',
  };

  const nameStyle = {
    background: 'linear-gradient(135deg, #667eea 0%, #f093fb 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    display: 'inline-block',
    marginLeft: getValue({
      xs: '0', sm: '0', md: '8px',
      lg: '10px', xl: '12px', '2xl': '14px'
    }),
    marginTop: getValue({
      xs: '4px', sm: '4px', md: '0',
      lg: '0', xl: '0', '2xl': '0'
    }),
    paddingRight: getValue({
      xs: '2px', sm: '3px', md: '4px',
      lg: '5px', xl: '6px', '2xl': '7px'
    }),
  };

  const roleStyle = {
    fontSize: getValue({
      xs: '1rem', sm: '1.1rem', md: '1.3rem',
      lg: '1.6rem', xl: '1.8rem', '2xl': '2.2rem'
    }),
    marginBottom: getValue({
      xs: '14px', sm: '16px', md: '18px',
      lg: '20px', xl: '24px', '2xl': '28px'
    }),
    color: '#a0a0a0',
    lineHeight: getValue({
      xs: 1.2, sm: 1.25, md: 1.3, lg: 1.3, xl: 1.3, '2xl': 1.3
    }),
  };

  const descriptionStyle = {
    fontSize: getValue({
      xs: '0.95rem', sm: '1rem', md: '1.05rem',
      lg: '1.15rem', xl: '1.2rem', '2xl': '1.3rem'
    }),
    color: '#a0a0a0',
    maxWidth: getValue({
      xs: '100%', sm: '100%', md: '100%',
      lg: '100%', xl: '100%', '2xl': '100%'
    }),
    margin: getValue({
      xs: '0 auto 24px', sm: '0 auto 28px', md: '0 auto 32px',
      lg: '0 auto 36px', xl: '0 auto 44px', '2xl': '0 auto 52px'
    }),
    lineHeight: getValue({
      xs: 1.6, sm: 1.65, md: 1.7, lg: 1.7, xl: 1.7, '2xl': 1.75
    }),
    padding: getValue({
      xs: '0 16px', sm: '0 20px', md: '0 40px',
      lg: '0 60px', xl: '0 80px', '2xl': '0 100px'
    }),
  };

  const buttonContainerStyle = {
    display: 'flex',
    gap: getValue({
      xs: '10px', sm: '12px', md: '16px',
      lg: '20px', xl: '24px', '2xl': '28px'
    }),
    justifyContent: 'center',
    flexDirection: getValue({
      xs: 'column', sm: 'column', md: 'row',
      lg: 'row', xl: 'row', '2xl': 'row'
    }),
    alignItems: 'center',
    marginBottom: getValue({
      xs: '28px', sm: '32px', md: '36px',
      lg: '40px', xl: '48px', '2xl': '56px'
    }),
    padding: getValue({
      xs: '0 16px', sm: '0 20px', md: '0',
      lg: '0', xl: '0', '2xl': '0'
    }),
  };

  const primaryButtonStyle = {
    padding: isMobile ? '12px 24px' : '14px 32px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    border: 'none',
    borderRadius: '9999px',
    fontSize: isMobile ? '14px' : '16px',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    transition: 'transform 0.2s ease',
    boxShadow: '0 10px 30px rgba(102, 126, 234, 0.3)',
    width: isMobile ? '100%' : 'auto',
    maxWidth: isMobile ? '280px' : 'none',
    textDecoration: 'none',
  };

  const secondaryButtonStyle = {
    padding: isMobile ? '12px 24px' : '14px 32px',
    background: 'transparent',
    color: 'white',
    border: '2px solid rgba(102, 126, 234, 0.5)',
    borderRadius: '9999px',
    fontSize: isMobile ? '14px' : '16px',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    transition: 'all 0.3s ease',
    backdropFilter: 'blur(10px)',
    width: isMobile ? '100%' : 'auto',
    maxWidth: isMobile ? '280px' : 'none',
    textDecoration: 'none',
  };

  const socialContainerStyle = {
    display: 'flex',
    gap: isMobile ? '12px' : '16px',
    justifyContent: 'center',
    marginTop: isMobile ? '32px' : '40px',
    marginBottom: isMobile ? '80px' : '100px',
    flexWrap: 'wrap',
  };

  const socialLinkStyle = {
    width: isMobile ? '44px' : '48px',
    height: isMobile ? '44px' : '48px',
    borderRadius: '50%',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(255, 255, 255, 0.08)',
    backdropFilter: 'blur(10px)',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    color: 'rgba(255, 255, 255, 0.8)',
    cursor: 'pointer',
  };

  const scrollIndicatorStyle = {
    position: 'absolute',
    bottom: isMobile ? '20px' : '30px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '8px',
  };

  return (
    <section id="home" style={sectionStyle}>
      {/* Background effects */}
      <div style={backgroundOverlayStyle} />
      <div style={gridPatternStyle} />
      
      {/* Floating Icons */}
      {floatingIcons.map((icon, index) => (
        <FloatingIcon
          key={index}
          Icon={icon.Icon}
          x={icon.x}
          y={icon.y}
          delay={icon.delay}
          color={icon.color}
          isMobile={isMobile}
        />
      ))}

      {/* Main content */}
      <motion.div
        style={contentContainerStyle}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Badge */}
        <motion.div
          style={{
            ...badgeStyle,
            marginTop: getValue({
              xs: '100px', sm: '105px', md: '110px',
              lg: '115px', xl: '120px', '2xl': '125px'
            }),
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Sparkles style={{ width: isMobile ? '14px' : '16px', height: isMobile ? '14px' : '16px', color: '#667eea' }} />
          <span style={{ fontSize: isMobile ? '12px' : '14px', color: '#a0a0a0' }}>Always Learning • Always Growing</span>
          <Sparkles style={{ width: isMobile ? '14px' : '16px', height: isMobile ? '14px' : '16px', color: '#f093fb' }} />
        </motion.div>

        {/* Heading */}
        <motion.h1
          style={{
            ...headingStyle,
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: isMobile ? 'center' : 'baseline',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span style={{ whiteSpace: 'nowrap' }}>Hi, I'm</span>
          <span style={{
            ...nameStyle,
            fontWeight: 'bold',
            fontSize: 'inherit',
            whiteSpace: 'nowrap',
          }}>
            <TypewriterText text="Reeturaj Kumar" />
          </span>
        </motion.h1>

        {/* Role */}
        <motion.div
          style={roleStyle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <span style={{ 
            background: 'linear-gradient(90deg, #667eea, #f093fb, #4facfe, #667eea)',
            backgroundSize: '200% 100%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: 'gradient 3s ease infinite',
            display: isMobile ? 'block' : 'inline',
          }}>
            Full Stack Developer
          </span>
          <span style={{ display: isMobile ? 'block' : 'inline', marginTop: isMobile ? '4px' : '0' }}> & Lifelong Learner</span>
        </motion.div>

        {/* Description */}
        <motion.p
          style={descriptionStyle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          A passionate CS student on a mission to turn caffeine into code and ideas into reality. 
          I thrive on challenges that push my boundaries, embrace every bug as a learning opportunity, 
          and believe the best code is yet to be written. Currently crafting digital experiences 
          while constantly exploring new technologies and frameworks.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          style={buttonContainerStyle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.a
            href="https://github.com/ReeturajKumar"
            target="_blank"
            rel="noopener noreferrer"
            style={primaryButtonStyle}
            whileHover={{ scale: 1.05, boxShadow: '0 15px 40px rgba(102, 126, 234, 0.4)' }}
            whileTap={{ scale: 0.95 }}
          >
            <Rocket style={{ width: isMobile ? '18px' : '20px', height: isMobile ? '18px' : '20px' }} />
            View My Work
          </motion.a>

          <motion.a
            href="/Reeturaj-Kumar-Resume.pdf"
            download="Reeturaj-Kumar-Resume.pdf"
            style={secondaryButtonStyle}
            whileHover={{ 
              backgroundColor: 'rgba(102, 126, 234, 0.1)',
              borderColor: 'rgba(102, 126, 234, 0.8)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail style={{ width: isMobile ? '18px' : '20px', height: isMobile ? '18px' : '20px' }} />
            Download Resume
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          style={socialContainerStyle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      {!isMobile && (
        <motion.div
          style={scrollIndicatorStyle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown style={{ width: '20px', height: '20px', color: '#667eea' }} />
          </motion.div>
        </motion.div>
      )}

      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
}