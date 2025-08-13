'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
// EmailJS removed - now using FormSubmit (no configuration needed)
import { useToast } from '../ui/Toast';
import { useResponsive } from '../../lib/responsive';
import { 
  Mail, Phone, MapPin, Github, Linkedin,
  Send, MessageSquare, User, AtSign, FileText,
  Sparkles, Star, Heart, Globe, Clock, Calendar,
  CheckCircle, AlertCircle, Loader2, ExternalLink,
  Briefcase, Code2, Rocket, Zap, Shield, Award, 
  TrendingUp, Users, ArrowRight, ChevronRight, 
  Copy, Check, X, BookOpen, Download, PenTool, 
  Palette, Terminal
} from 'lucide-react';

// Floating orbs for background
const floatingOrbs = [
  { color: 'rgba(102, 126, 234, 0.3)', size: 300, x: '10%', y: '20%', duration: 20 },
  { color: 'rgba(240, 147, 251, 0.25)', size: 250, x: '80%', y: '60%', duration: 25 },
  { color: 'rgba(79, 172, 254, 0.2)', size: 350, x: '50%', y: '80%', duration: 30 },
  { color: 'rgba(67, 233, 123, 0.15)', size: 200, x: '20%', y: '70%', duration: 22 },
  { color: 'rgba(250, 112, 154, 0.2)', size: 280, x: '70%', y: '30%', duration: 28 },
];

// Contact methods
const contactMethods = [
  {
    Icon: Mail,
    title: 'Email',
    value: 'reeturajvats587@gmail.com',
    link: 'mailto:reeturajvats587@gmail.com',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    description: 'Drop me an email anytime',
  },
  {
    Icon: Phone,
    title: 'Phone',
    value: '6299045761',
    link: 'tel:+916299045761',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    description: 'Available for calls',
  },
  {
    Icon: MapPin,
    title: 'Location',
    value: 'West Bengal, India',
    link: '#',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    description: 'Open to remote work',
  },
  {
    Icon: Linkedin,
    title: 'LinkedIn',
    value: 'Reeturaj Kumar',
    link: 'https://linkedin.com/in/reeturaj-kumar-372963238',
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    description: 'Connect professionally',
  },
];

// Social links - Only real/working links from resume
const socialLinks = [
  { Icon: Github, href: 'https://github.com/ReeturajKumar', label: 'GitHub', gradient: '#333' },
  { Icon: Linkedin, href: 'https://linkedin.com/in/reeturaj-kumar-372963238', label: 'LinkedIn', gradient: '#0077B5' },
  { Icon: Mail, href: 'mailto:reeturajvats587@gmail.com', label: 'Email', gradient: '#EA4335' },
  { Icon: BookOpen, href: '/Reeturaj-Kumar-Resume.pdf', label: 'Resume', gradient: '#667eea', download: true },
];

// Animated background orb component
function FloatingOrb({ color, size, x, y, duration }) {
  return (
    <motion.div
      style={{
        position: 'absolute',
        width: `${size}px`,
        height: `${size}px`,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        borderRadius: '50%',
        left: x,
        top: y,
        pointerEvents: 'none',
        filter: 'blur(40px)',
      }}
      animate={{
        x: [0, 50, -30, 0],
        y: [0, -60, 40, 0],
        scale: [1, 1.2, 0.9, 1],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const { showToast, ToastContainer } = useToast();
  
  const responsive = useResponsive(windowWidth);
  const { isMobile, isTablet, isDesktop, getValue, getStyle } = responsive;

  // FormSubmit - No configuration needed!

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    
    const handleResize = () => setWindowWidth(window.innerWidth);
    const handleMouseMove = (e) => {
      const rect = sectionRef.current?.getBoundingClientRect();
      if (rect) {
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Using responsive utility instead of manual breakpoints

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // FormSubmit - sends emails directly to your inbox!
      const formData = new FormData(formRef.current);
      
      const response = await fetch('https://formsubmit.co/reeturajvats587@gmail.com', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        // Success - show toast and reset form
        setFormData({ name: '', email: '', message: '' });
        showToast('Your message has been sent successfully! I\'ll get back to you soon.', 'success');
      } else {
        throw new Error('Form submission failed');
      }
      
    } catch (error) {
      console.error('Failed to send message:', error);
      showToast('Failed to send message. Please try again or contact me directly at reeturajvats587@gmail.com', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('reeturajvats587@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

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
      xs: '20px', sm: '25px', md: '30px',
      lg: '35px', xl: '40px', '2xl': '45px'
    }),
  };

  const backgroundOverlayStyle = {
    position: 'absolute',
    inset: 0,
    background: !isMobile 
      ? `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
          rgba(102, 126, 234, 0.1) 0%, 
          transparent 50%)`
      : 'none',
    pointerEvents: 'none',
    transition: 'background 0.3s ease',
  };

  const containerStyle = {
    position: 'relative',
    zIndex: 10,
    width: '100%',
    ...responsive.container,
    maxWidth: getValue({
      xs: '100%', sm: '100%', md: '768px',
      lg: '1024px', xl: '1200px', '2xl': '1400px'
    }),
  };

  const formInputStyle = {
    width: '100%',
    padding: getValue({
      xs: '10px 14px', sm: '12px 16px', md: '13px 18px',
      lg: '14px 20px', xl: '16px 22px', '2xl': '18px 24px'
    }),
    background: 'rgba(255, 255, 255, 0.03)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: getValue({
      xs: '8px', sm: '10px', md: '12px',
      lg: '14px', xl: '16px', '2xl': '18px'
    }),
    color: 'white',
    fontSize: getValue({
      xs: '14px', sm: '15px', md: '16px',
      lg: '16px', xl: '17px', '2xl': '18px'
    }),
    outline: 'none',
    transition: 'all 0.3s ease',
    backdropFilter: getValue({
      xs: 'blur(8px)', sm: 'blur(10px)', md: 'blur(12px)',
      lg: 'blur(15px)', xl: 'blur(18px)', '2xl': 'blur(20px)'
    }),
  };

  const formTextareaStyle = {
    ...formInputStyle,
    minHeight: getValue({
      xs: '100px', sm: '110px', md: '120px',
      lg: '130px', xl: '140px', '2xl': '150px'
    }),
    resize: 'vertical',
    fontFamily: 'inherit',
  };

  return (
    <section ref={sectionRef} id="contact" style={sectionStyle}>
      {/* Background effects */}
      <div style={backgroundOverlayStyle} />
      
      {/* Floating orbs */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        {floatingOrbs.map((orb, index) => (
          <FloatingOrb key={index} {...orb} />
        ))}
      </div>

      {/* Grid pattern */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `linear-gradient(rgba(102, 126, 234, 0.02) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(102, 126, 234, 0.02) 1px, transparent 1px)`,
        backgroundSize: '50px 50px',
        opacity: 0.5,
      }} />

      <motion.div
        style={containerStyle}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        {/* Section Header */}
        <motion.div
          style={{ textAlign: 'center', marginBottom: isMobile ? '48px' : '64px' }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: isMobile ? '8px 16px' : '10px 24px',
              marginBottom: isMobile ? '24px' : '32px',
              borderRadius: '9999px',
              background: 'rgba(102, 126, 234, 0.1)',
              border: '1px solid rgba(102, 126, 234, 0.3)',
              backdropFilter: 'blur(10px)',
            }}
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles style={{ width: '16px', height: '16px', color: '#667eea' }} />
            <span style={{ fontSize: isMobile ? '12px' : '14px', color: '#a0a0a0' }}>
              Let's Connect
            </span>
            <MessageSquare style={{ width: '16px', height: '16px', color: '#f093fb' }} />
          </motion.div>

          <h2 style={{
            fontSize: getValue({
              xs: '2rem', sm: '2.3rem', md: '2.8rem',
              lg: '3.2rem', xl: '3.6rem', '2xl': '4.2rem'
            }),
            fontWeight: 'bold',
            marginBottom: getValue({
              xs: '16px', sm: '18px', md: '20px',
              lg: '22px', xl: '24px', '2xl': '26px'
            }),
            background: 'linear-gradient(135deg, #667eea 0%, #f093fb 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Get In Touch
          </h2>

          <p style={{
            fontSize: getValue({
              xs: '14px', sm: '15px', md: '16px',
              lg: '17px', xl: '18px', '2xl': '19px'
            }),
            color: '#888',
            maxWidth: getValue({
              xs: '90%', sm: '85%', md: '75%',
              lg: '65%', xl: '600px', '2xl': '700px'
            }),
            margin: '0 auto',
            lineHeight: getValue({
              xs: 1.5, sm: 1.55, md: 1.6, lg: 1.6, xl: 1.6, '2xl': 1.65
            }),
          }}>
            Have a project in mind or want to collaborate? 
            I'd love to hear from you. Let's create something amazing together!
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: getValue({
            xs: '1fr', sm: '1fr', md: 'repeat(2, 1fr)',
            lg: 'repeat(2, 1fr)', xl: 'repeat(2, 1fr)', '2xl': 'repeat(2, 1fr)'
          }),
          gap: getValue({
            xs: '24px', sm: '28px', md: '32px',
            lg: '40px', xl: '48px', '2xl': '56px'
          }),
          marginBottom: getValue({
            xs: '48px', sm: '56px', md: '64px',
            lg: '72px', xl: '80px', '2xl': '88px'
          }),
        }}>
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 style={{
              fontSize: getValue({
                xs: '18px', sm: '19px', md: '20px',
                lg: '22px', xl: '24px', '2xl': '26px'
              }),
              fontWeight: 'bold',
              color: 'white',
              marginBottom: getValue({
                xs: '20px', sm: '22px', md: '24px',
                lg: '26px', xl: '28px', '2xl': '30px'
              }),
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Send style={{ width: '20px', height: '20px', color: 'white' }} />
              </div>
              Send Message
            </h3>

            <form ref={formRef} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {/* FormSubmit configuration */}
              <input type="hidden" name="_subject" value="New Portfolio Message!" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              
              <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  style={formInputStyle}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'rgba(102, 126, 234, 0.5)';
                    e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    e.target.style.background = 'rgba(255, 255, 255, 0.03)';
                  }}
                />
              </motion.div>

              <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  style={formInputStyle}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'rgba(102, 126, 234, 0.5)';
                    e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    e.target.style.background = 'rgba(255, 255, 255, 0.03)';
                  }}
                />
              </motion.div>

              <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  style={formTextareaStyle}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'rgba(102, 126, 234, 0.5)';
                    e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    e.target.style.background = 'rgba(255, 255, 255, 0.03)';
                  }}
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                style={{
                  padding: getValue({
                    xs: '12px 24px', sm: '13px 26px', md: '14px 28px',
                    lg: '15px 30px', xl: '16px 32px', '2xl': '18px 36px'
                  }),
                  background: isSubmitting 
                    ? 'rgba(102, 126, 234, 0.5)' 
                    : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                  border: 'none',
                  borderRadius: getValue({
                    xs: '8px', sm: '10px', md: '12px',
                    lg: '14px', xl: '16px', '2xl': '18px'
                  }),
                  fontSize: getValue({
                    xs: '14px', sm: '15px', md: '15px',
                    lg: '16px', xl: '16px', '2xl': '17px'
                  }),
                  fontWeight: '600',
                  cursor: isSubmitting ? 'wait' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 10px 30px rgba(102, 126, 234, 0.3)',
                }}
                whileHover={!isSubmitting ? { scale: 1.02, boxShadow: '0 15px 40px rgba(102, 126, 234, 0.4)' } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 style={{ width: '18px', height: '18px', animation: 'spin 1s linear infinite' }} />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send style={{ width: '18px', height: '18px' }} />
                    Send Message
                  </>
                )}
              </motion.button>

            </form>
          </motion.div>

          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 style={{
              fontSize: getValue({
                xs: '18px', sm: '19px', md: '20px',
                lg: '22px', xl: '24px', '2xl': '26px'
              }),
              fontWeight: 'bold',
              color: 'white',
              marginBottom: getValue({
                xs: '20px', sm: '22px', md: '24px',
                lg: '26px', xl: '28px', '2xl': '30px'
              }),
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Globe style={{ width: '20px', height: '20px', color: 'white' }} />
              </div>
              Contact Info
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.title}
                  href={method.link}
                  target={method.link.startsWith('http') ? '_blank' : '_self'}
                  rel={method.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    padding: '16px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '12px',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{
                    y: -4,
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderColor: 'rgba(102, 126, 234, 0.3)',
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div style={{
                    width: '48px',
                    height: '48px',
                    background: method.gradient,
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <method.Icon style={{ width: '24px', height: '24px', color: 'white' }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ 
                      fontSize: '12px', 
                      color: '#888',
                      marginBottom: '4px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                    }}>
                      {method.title}
                    </div>
                    <div style={{ 
                      fontSize: isMobile ? '14px' : '15px', 
                      color: 'white',
                      marginBottom: '2px',
                    }}>
                      {method.value}
                    </div>
                    <div style={{ 
                      fontSize: '12px', 
                      color: '#666',
                    }}>
                      {method.description}
                    </div>
                  </div>
                  {method.title === 'Email' && (
                    <motion.button
                      onClick={(e) => {
                        e.preventDefault();
                        copyEmail();
                      }}
                      style={{
                        padding: '8px',
                        background: 'rgba(102, 126, 234, 0.1)',
                        border: '1px solid rgba(102, 126, 234, 0.3)',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {copiedEmail ? (
                        <Check style={{ width: '16px', height: '16px', color: '#43e97b' }} />
                      ) : (
                        <Copy style={{ width: '16px', height: '16px', color: '#667eea' }} />
                      )}
                    </motion.button>
                  )}
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div style={{ marginTop: '32px' }}>
              <h4 style={{
                fontSize: '16px',
                fontWeight: '600',
                color: 'white',
                marginBottom: '16px',
              }}>
                Connect on Social
              </h4>
              <div style={{
                display: 'flex',
                gap: '12px',
                flexWrap: 'wrap',
              }}>
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.download ? '_self' : '_blank'}
                    rel={social.download ? '' : 'noopener noreferrer'}
                    download={social.download ? 'Reeturaj-Kumar-Resume.pdf' : undefined}
                    style={{
                      width: '44px',
                      height: '44px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                    whileHover={{
                      y: -3,
                      background: social.gradient,
                      borderColor: social.gradient,
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.Icon style={{ width: '20px', height: '20px', color: 'white' }} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          style={{
            marginTop: '10px',
            paddingTop: '10px',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            textAlign: 'center',
          }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '24px',
            marginBottom: '24px',
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Code2 style={{ width: '24px', height: '24px', color: 'white' }} />
              </div>
              <span style={{
                fontSize: '20px',
                fontWeight: 'bold',
                background: 'linear-gradient(135deg, #667eea 0%, #f093fb 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Reeturaj Kumar
              </span>
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              fontSize: '14px',
              color: '#888',
            }}>
              © {new Date().getFullYear()} Reeturaj Kumar. All rights reserved.
            </div>

            <div style={{
              display: 'flex',
              gap: '24px',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}>
              <a 
                href="#home" 
                style={{ color: '#888', textDecoration: 'none', fontSize: '14px', transition: 'color 0.3s' }}
                onMouseEnter={(e) => e.target.style.color = '#fff'}
                onMouseLeave={(e) => e.target.style.color = '#888'}
              >
                Home
              </a>
              <a 
                href="#about" 
                style={{ color: '#888', textDecoration: 'none', fontSize: '14px', transition: 'color 0.3s' }}
                onMouseEnter={(e) => e.target.style.color = '#fff'}
                onMouseLeave={(e) => e.target.style.color = '#888'}
              >
                About
              </a>
              <a 
                href="#contact" 
                style={{ color: '#888', textDecoration: 'none', fontSize: '14px', transition: 'color 0.3s' }}
                onMouseEnter={(e) => e.target.style.color = '#fff'}
                onMouseLeave={(e) => e.target.style.color = '#888'}
              >
                Contact
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Toast Container */}
      <ToastContainer />

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}