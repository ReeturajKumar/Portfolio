// Comprehensive responsive utility system

// Breakpoints (matching modern standards)
export const BREAKPOINTS = {
  // Mobile first approach
  xs: 0,     // Extra small devices
  sm: 480,   // Small devices (landscape phones)
  md: 768,   // Medium devices (tablets)
  lg: 1024,  // Large devices (laptops)
  xl: 1280,  // Extra large devices (desktops)
  '2xl': 1536 // 2X Large devices (large desktops)
};

// Device type detection
export const getDeviceType = (width) => {
  if (width < BREAKPOINTS.sm) return 'xs';
  if (width < BREAKPOINTS.md) return 'sm';
  if (width < BREAKPOINTS.lg) return 'md';
  if (width < BREAKPOINTS.xl) return 'lg';
  if (width < BREAKPOINTS['2xl']) return 'xl';
  return '2xl';
};

// Media query helpers
export const media = {
  xs: `@media (max-width: ${BREAKPOINTS.sm - 1}px)`,
  sm: `@media (min-width: ${BREAKPOINTS.sm}px) and (max-width: ${BREAKPOINTS.md - 1}px)`,
  md: `@media (min-width: ${BREAKPOINTS.md}px) and (max-width: ${BREAKPOINTS.lg - 1}px)`,
  lg: `@media (min-width: ${BREAKPOINTS.lg}px) and (max-width: ${BREAKPOINTS.xl - 1}px)`,
  xl: `@media (min-width: ${BREAKPOINTS.xl}px) and (max-width: ${BREAKPOINTS['2xl'] - 1}px)`,
  '2xl': `@media (min-width: ${BREAKPOINTS['2xl']}px)`,
  
  // Range queries
  mobile: `@media (max-width: ${BREAKPOINTS.md - 1}px)`, // xs + sm
  tablet: `@media (min-width: ${BREAKPOINTS.md}px) and (max-width: ${BREAKPOINTS.lg - 1}px)`,
  desktop: `@media (min-width: ${BREAKPOINTS.lg}px)`, // lg + xl + 2xl
  touch: `@media (max-width: ${BREAKPOINTS.lg - 1}px)`, // mobile + tablet
};

// Responsive value getter
export const getResponsiveValue = (values, deviceType) => {
  if (typeof values === 'object' && values !== null) {
    // Return the most specific value available
    return values[deviceType] || 
           values.lg || 
           values.md || 
           values.sm || 
           values.xs || 
           values.default;
  }
  return values;
};

// Common responsive styles
export const responsiveStyles = {
  // Container styles
  container: (deviceType) => ({
    maxWidth: getResponsiveValue({
      xs: '100%',
      sm: '100%',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    }, deviceType),
    margin: '0 auto',
    padding: getResponsiveValue({
      xs: '0 16px',
      sm: '0 20px',
      md: '0 24px',
      lg: '0 32px',
      xl: '0 40px',
      '2xl': '0 48px'
    }, deviceType),
  }),

  // Typography scales
  fontSize: {
    xs: {
      xs: '12px', sm: '12px', md: '13px', lg: '14px', xl: '14px', '2xl': '14px'
    },
    sm: {
      xs: '14px', sm: '14px', md: '15px', lg: '16px', xl: '16px', '2xl': '16px'
    },
    base: {
      xs: '16px', sm: '16px', md: '17px', lg: '18px', xl: '18px', '2xl': '18px'
    },
    lg: {
      xs: '18px', sm: '18px', md: '20px', lg: '22px', xl: '24px', '2xl': '24px'
    },
    xl: {
      xs: '20px', sm: '22px', md: '24px', lg: '28px', xl: '32px', '2xl': '32px'
    },
    '2xl': {
      xs: '24px', sm: '28px', md: '32px', lg: '36px', xl: '40px', '2xl': '44px'
    },
    '3xl': {
      xs: '28px', sm: '32px', md: '40px', lg: '48px', xl: '56px', '2xl': '64px'
    },
    '4xl': {
      xs: '32px', sm: '40px', md: '48px', lg: '64px', xl: '72px', '2xl': '80px'
    }
  },

  // Spacing scales
  spacing: {
    xs: {
      xs: '4px', sm: '4px', md: '6px', lg: '8px', xl: '8px', '2xl': '8px'
    },
    sm: {
      xs: '8px', sm: '8px', md: '10px', lg: '12px', xl: '12px', '2xl': '12px'
    },
    md: {
      xs: '12px', sm: '14px', md: '16px', lg: '20px', xl: '20px', '2xl': '20px'
    },
    lg: {
      xs: '16px', sm: '20px', md: '24px', lg: '32px', xl: '32px', '2xl': '32px'
    },
    xl: {
      xs: '20px', sm: '28px', md: '32px', lg: '48px', xl: '48px', '2xl': '48px'
    },
    '2xl': {
      xs: '24px', sm: '32px', md: '48px', lg: '64px', xl: '64px', '2xl': '64px'
    },
    '3xl': {
      xs: '32px', sm: '48px', md: '64px', lg: '96px', xl: '96px', '2xl': '96px'
    }
  },

  // Grid systems
  grid: {
    cols1: { gridTemplateColumns: '1fr' },
    cols2: { 
      xs: { gridTemplateColumns: '1fr' },
      sm: { gridTemplateColumns: '1fr' },
      md: { gridTemplateColumns: 'repeat(2, 1fr)' },
      lg: { gridTemplateColumns: 'repeat(2, 1fr)' },
      xl: { gridTemplateColumns: 'repeat(2, 1fr)' },
      '2xl': { gridTemplateColumns: 'repeat(2, 1fr)' }
    },
    cols3: { 
      xs: { gridTemplateColumns: '1fr' },
      sm: { gridTemplateColumns: '1fr' },
      md: { gridTemplateColumns: 'repeat(2, 1fr)' },
      lg: { gridTemplateColumns: 'repeat(3, 1fr)' },
      xl: { gridTemplateColumns: 'repeat(3, 1fr)' },
      '2xl': { gridTemplateColumns: 'repeat(3, 1fr)' }
    },
    cols4: { 
      xs: { gridTemplateColumns: '1fr' },
      sm: { gridTemplateColumns: 'repeat(2, 1fr)' },
      md: { gridTemplateColumns: 'repeat(2, 1fr)' },
      lg: { gridTemplateColumns: 'repeat(3, 1fr)' },
      xl: { gridTemplateColumns: 'repeat(4, 1fr)' },
      '2xl': { gridTemplateColumns: 'repeat(4, 1fr)' }
    }
  }
};

// Hook for responsive values
export const useResponsive = (windowWidth = 0) => {
  const deviceType = getDeviceType(windowWidth);
  
  const isMobile = windowWidth < BREAKPOINTS.md;
  const isTablet = windowWidth >= BREAKPOINTS.md && windowWidth < BREAKPOINTS.lg;
  const isDesktop = windowWidth >= BREAKPOINTS.lg;
  const isTouch = windowWidth < BREAKPOINTS.lg;

  const getValue = (values) => getResponsiveValue(values, deviceType);
  
  const getStyle = (styleKey, variant = 'base') => {
    const styles = responsiveStyles[styleKey];
    if (styles && styles[variant]) {
      return getValue(styles[variant]);
    }
    return styles;
  };

  return {
    deviceType,
    isMobile,
    isTablet,
    isDesktop,
    isTouch,
    getValue,
    getStyle,
    container: responsiveStyles.container(deviceType),
    breakpoints: BREAKPOINTS
  };
};

// Common responsive component styles
export const componentStyles = {
  // Card styles
  card: (deviceType) => ({
    padding: getResponsiveValue({
      xs: '16px', sm: '20px', md: '24px', lg: '32px', xl: '32px', '2xl': '40px'
    }, deviceType),
    borderRadius: getResponsiveValue({
      xs: '12px', sm: '14px', md: '16px', lg: '20px', xl: '20px', '2xl': '24px'
    }, deviceType),
  }),

  // Button styles
  button: {
    sm: (deviceType) => ({
      padding: getResponsiveValue({
        xs: '8px 16px', sm: '10px 18px', md: '10px 20px', 
        lg: '12px 24px', xl: '12px 24px', '2xl': '12px 28px'
      }, deviceType),
      fontSize: getResponsiveValue(responsiveStyles.fontSize.sm, deviceType),
    }),
    md: (deviceType) => ({
      padding: getResponsiveValue({
        xs: '12px 24px', sm: '14px 28px', md: '14px 32px', 
        lg: '16px 36px', xl: '16px 36px', '2xl': '18px 40px'
      }, deviceType),
      fontSize: getResponsiveValue(responsiveStyles.fontSize.base, deviceType),
    }),
    lg: (deviceType) => ({
      padding: getResponsiveValue({
        xs: '16px 32px', sm: '18px 36px', md: '20px 40px', 
        lg: '24px 48px', xl: '24px 48px', '2xl': '28px 56px'
      }, deviceType),
      fontSize: getResponsiveValue(responsiveStyles.fontSize.lg, deviceType),
    })
  }
};