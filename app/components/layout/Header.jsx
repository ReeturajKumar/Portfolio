'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2, Sparkles, Home, User, Briefcase, Mail } from 'lucide-react';
import { useResponsive } from '../../lib/responsive';

const navItems = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'About', href: '#about', icon: User },
  { name: 'Contact', href: '#contact', icon: Mail },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Set initial window width
    setWindowWidth(window.innerWidth);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      // Close mobile menu on resize to desktop
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const responsive = useResponsive(windowWidth);
  const { isMobile, isTablet, isDesktop, getValue, getStyle } = responsive;

  const headerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    transition: 'all 0.5s ease',
    backgroundColor: isScrolled ? 'rgba(10, 10, 10, 0.95)' : 'rgba(10, 10, 10, 0.8)',
    backdropFilter: getValue({
      xs: 'blur(10px)', sm: 'blur(10px)', md: 'blur(12px)', 
      lg: 'blur(15px)', xl: 'blur(15px)', '2xl': 'blur(20px)'
    }),
    borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(255, 255, 255, 0.05)',
    boxShadow: isScrolled ? '0 4px 20px rgba(0, 0, 0, 0.1)' : 'none',
  };

  const containerStyle = {
    ...responsive.container,
    maxWidth: getValue({
      xs: '100%', sm: '100%', md: '768px', 
      lg: '1024px', xl: '1280px', '2xl': '1400px'
    }),
  };

  const navStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: getValue({
      xs: '60px', sm: '64px', md: '68px', 
      lg: '72px', xl: '76px', '2xl': '80px'
    }),
  };

  const logoContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: getValue({
      xs: '8px', sm: '10px', md: '12px', 
      lg: '14px', xl: '16px', '2xl': '16px'
    }),
    textDecoration: 'none',
    cursor: 'pointer',
  };

  const logoStyle = {
    width: getValue({
      xs: '32px', sm: '36px', md: '40px', 
      lg: '44px', xl: '48px', '2xl': '52px'
    }),
    height: getValue({
      xs: '32px', sm: '36px', md: '40px', 
      lg: '44px', xl: '48px', '2xl': '52px'
    }),
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    borderRadius: getValue({
      xs: '8px', sm: '10px', md: '12px', 
      lg: '14px', xl: '16px', '2xl': '18px'
    }),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: getValue({
      xs: '0 2px 10px rgba(102, 126, 234, 0.2)',
      sm: '0 3px 12px rgba(102, 126, 234, 0.25)',
      md: '0 4px 15px rgba(102, 126, 234, 0.3)',
      lg: '0 6px 20px rgba(102, 126, 234, 0.35)',
      xl: '0 8px 25px rgba(102, 126, 234, 0.4)',
      '2xl': '0 10px 30px rgba(102, 126, 234, 0.45)'
    }),
  };

  const logoTextStyle = {
    fontSize: getValue({
      xs: '16px', sm: '18px', md: '20px', 
      lg: '22px', xl: '24px', '2xl': '26px'
    }),
    fontWeight: '700',
    background: 'linear-gradient(135deg, #667eea 0%, #f093fb 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    letterSpacing: getValue({
      xs: '-0.3px', sm: '-0.4px', md: '-0.5px', 
      lg: '-0.6px', xl: '-0.7px', '2xl': '-0.8px'
    }),
  };

  const desktopNavStyle = {
    display: isMobile ? 'none' : 'flex',
    alignItems: 'center',
    gap: getValue({
      md: '4px', lg: '6px', xl: '8px', '2xl': '10px'
    }),
  };

  const navItemStyle = {
    position: 'relative',
    padding: getValue({
      md: '6px 10px', lg: '8px 14px', 
      xl: '10px 16px', '2xl': '12px 18px'
    }),
    color: '#d1d5db',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: getValue({
      md: '4px', lg: '6px', xl: '8px', '2xl': '8px'
    }),
    borderRadius: getValue({
      md: '6px', lg: '8px', xl: '10px', '2xl': '12px'
    }),
    transition: 'all 0.3s ease',
    fontSize: getValue({
      md: '14px', lg: '15px', xl: '16px', '2xl': '16px'
    }),
    fontWeight: '500',
  };

  const ctaButtonStyle = {
    marginLeft: getValue({
      md: '12px', lg: '20px', xl: '24px', '2xl': '28px'
    }),
    padding: getValue({
      md: '8px 18px', lg: '10px 24px', 
      xl: '12px 28px', '2xl': '14px 32px'
    }),
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    border: 'none',
    borderRadius: '50px',
    fontWeight: '600',
    fontSize: getValue({
      md: '13px', lg: '14px', xl: '15px', '2xl': '16px'
    }),
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: getValue({
      md: '6px', lg: '8px', xl: '8px', '2xl': '10px'
    }),
    transition: 'all 0.3s ease',
    boxShadow: getValue({
      md: '0 3px 12px rgba(102, 126, 234, 0.25)',
      lg: '0 4px 15px rgba(102, 126, 234, 0.3)',
      xl: '0 6px 20px rgba(102, 126, 234, 0.35)',
      '2xl': '0 8px 25px rgba(102, 126, 234, 0.4)'
    }),
  };

  const mobileMenuButtonStyle = {
    display: isMobile ? 'flex' : 'none',
    padding: '8px',
    background: 'transparent',
    border: 'none',
    color: '#d1d5db',
    cursor: 'pointer',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const mobileMenuStyle = {
    position: 'fixed',
    top: getValue({
      xs: '60px', sm: '64px'
    }),
    left: 0,
    right: 0,
    backgroundColor: 'rgba(10, 10, 10, 0.98)',
    backdropFilter: getValue({
      xs: 'blur(10px)', sm: 'blur(12px)'
    }),
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    padding: getValue({
      xs: '16px', sm: '20px 20px'
    }),
    display: isMobileMenuOpen && isMobile ? 'block' : 'none',
    maxHeight: getValue({
      xs: '75vh', sm: '80vh'
    }),
    overflowY: 'auto',
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
  };

  const mobileNavItemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: getValue({
      xs: '10px', sm: '12px'
    }),
    padding: getValue({
      xs: '12px 14px', sm: '14px 16px'
    }),
    color: '#d1d5db',
    textDecoration: 'none',
    borderRadius: getValue({
      xs: '8px', sm: '10px'
    }),
    transition: 'all 0.3s ease',
    marginBottom: getValue({
      xs: '6px', sm: '8px'
    }),
    fontSize: getValue({
      xs: '15px', sm: '16px'
    }),
    fontWeight: '500',
    backgroundColor: 'transparent',
    border: '1px solid transparent',
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        style={headerStyle}
      >
        <div style={containerStyle}>
          <nav style={navStyle}>
            {/* Logo */}
            <motion.a
              href="#"
              style={logoContainerStyle}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                style={logoStyle}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Code2 style={{ 
                  width: getValue({
                    xs: '16px', sm: '18px', md: '20px', 
                    lg: '22px', xl: '24px', '2xl': '26px'
                  }), 
                  height: getValue({
                    xs: '16px', sm: '18px', md: '20px', 
                    lg: '22px', xl: '24px', '2xl': '26px'
                  }), 
                  color: 'white' 
                }} />
              </motion.div>
              <span style={logoTextStyle}>Reeturaj</span>
            </motion.a>

            {/* Desktop Navigation */}
            <div style={desktopNavStyle}>
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    style={navItemStyle}
                    whileHover={{ 
                      backgroundColor: 'rgba(102, 126, 234, 0.15)',
                      color: '#ffffff'
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon style={{ width: isTablet ? '16px' : '18px', height: isTablet ? '16px' : '18px' }} />
                    {!isTablet && item.name}
                  </motion.a>
                );
              })}

              <motion.a
                href="/Reeturaj-Kumar-Resume.pdf"
                download="Reeturaj-Kumar-Resume.pdf"
                style={{
                  ...ctaButtonStyle,
                  textDecoration: 'none',
                }}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: '0 6px 20px rgba(102, 126, 234, 0.4)' 
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Sparkles style={{ width: isTablet ? '16px' : '18px', height: isTablet ? '16px' : '18px' }} />
                Download Resume
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <button
              style={mobileMenuButtonStyle}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X style={{ width: '24px', height: '24px' }} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu style={{ width: '24px', height: '24px' }} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && isMobile && (
          <motion.div
            style={mobileMenuStyle}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  style={mobileNavItemStyle}
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileTap={{ scale: 0.95 }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(102, 126, 234, 0.1)';
                    e.currentTarget.style.paddingLeft = '24px';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.paddingLeft = '16px';
                  }}
                >
                  <Icon style={{ width: '20px', height: '20px' }} />
                  <span>{item.name}</span>
                </motion.a>
              );
            })}
            <motion.a
              href="/Reeturaj-Kumar-Resume.pdf"
              download="Reeturaj-Kumar-Resume.pdf"
              style={{
                ...ctaButtonStyle,
                width: '100%',
                marginTop: '16px',
                marginLeft: 0,
                justifyContent: 'center',
                textDecoration: 'none',
              }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: navItems.length * 0.1 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Sparkles style={{ width: '18px', height: '18px' }} />
              Download Resume
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}