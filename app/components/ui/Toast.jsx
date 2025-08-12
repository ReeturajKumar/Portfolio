'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, AlertCircle, X, Info, AlertTriangle } from 'lucide-react';

const toastTypes = {
  success: {
    icon: CheckCircle,
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    borderColor: 'rgba(67, 233, 123, 0.3)',
    backgroundColor: 'rgba(67, 233, 123, 0.1)',
    textColor: '#43e97b',
  },
  error: {
    icon: AlertCircle,
    gradient: 'linear-gradient(135deg, #ff0844 0%, #ffb199 100%)',
    borderColor: 'rgba(255, 8, 68, 0.3)',
    backgroundColor: 'rgba(255, 8, 68, 0.1)',
    textColor: '#ff0844',
  },
  warning: {
    icon: AlertTriangle,
    gradient: 'linear-gradient(135deg, #ffa726 0%, #ffcc02 100%)',
    borderColor: 'rgba(255, 167, 38, 0.3)',
    backgroundColor: 'rgba(255, 167, 38, 0.1)',
    textColor: '#ffa726',
  },
  info: {
    icon: Info,
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    borderColor: 'rgba(102, 126, 234, 0.3)',
    backgroundColor: 'rgba(102, 126, 234, 0.1)',
    textColor: '#667eea',
  },
};

export default function Toast({ 
  message, 
  type = 'success', 
  isVisible, 
  onClose, 
  duration = 5000,
  position = 'bottom-right' 
}) {
  const [shouldRender, setShouldRender] = useState(isVisible);
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    if (isVisible) {
      setShouldRender(true);
      setProgress(100);
      
      // Progress bar animation
      const progressInterval = setInterval(() => {
        setProgress(prev => {
          const newProgress = prev - (100 / (duration / 50));
          return newProgress <= 0 ? 0 : newProgress;
        });
      }, 50);

      // Auto close after duration
      const timer = setTimeout(() => {
        onClose();
        clearInterval(progressInterval);
      }, duration);

      return () => {
        clearTimeout(timer);
        clearInterval(progressInterval);
      };
    } else {
      const timer = setTimeout(() => setShouldRender(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  const getPositionStyles = () => {
    const baseStyle = {
      position: 'fixed',
      zIndex: 9999,
    };

    switch (position) {
      case 'top-right':
        return { ...baseStyle, top: '20px', right: '20px' };
      case 'top-left':
        return { ...baseStyle, top: '20px', left: '20px' };
      case 'bottom-left':
        return { ...baseStyle, bottom: '20px', left: '20px' };
      case 'bottom-right':
      default:
        return { ...baseStyle, bottom: '20px', right: '20px' };
    }
  };

  const toastConfig = toastTypes[type];
  const Icon = toastConfig.icon;

  if (!shouldRender) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          style={getPositionStyles()}
          initial={{ 
            opacity: 0, 
            scale: 0.8,
            x: position.includes('right') ? 100 : -100,
            y: position.includes('top') ? -50 : 50
          }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            x: 0,
            y: 0
          }}
          exit={{ 
            opacity: 0, 
            scale: 0.8,
            x: position.includes('right') ? 100 : -100,
            y: position.includes('top') ? -50 : 50
          }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 30,
            duration: 0.3
          }}
        >
          <div
            style={{
              minWidth: '320px',
              maxWidth: '400px',
              background: 'rgba(10, 10, 10, 0.95)',
              border: `1px solid ${toastConfig.borderColor}`,
              borderRadius: '16px',
              padding: '16px',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Progress bar */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                height: '3px',
                width: `${progress}%`,
                background: toastConfig.gradient,
                transition: 'width 0.05s linear',
                borderTopLeftRadius: '16px',
                borderTopRightRadius: progress > 95 ? '16px' : '0',
              }}
            />

            {/* Background glow effect */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '50%',
                background: `linear-gradient(180deg, ${toastConfig.backgroundColor} 0%, transparent 100%)`,
                opacity: 0.5,
              }}
            />

            {/* Content */}
            <div style={{ 
              display: 'flex', 
              alignItems: 'flex-start', 
              gap: '12px',
              position: 'relative',
              zIndex: 1
            }}>
              {/* Icon */}
              <motion.div
                style={{
                  width: '40px',
                  height: '40px',
                  background: toastConfig.gradient,
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  boxShadow: `0 8px 25px ${toastConfig.textColor}40`,
                }}
                initial={{ rotate: -180, scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
              >
                <Icon style={{ width: '20px', height: '20px', color: 'white' }} />
              </motion.div>

              {/* Message */}
              <div style={{ flex: 1, paddingTop: '2px' }}>
                <motion.div
                  style={{
                    fontSize: '15px',
                    fontWeight: '600',
                    color: 'white',
                    lineHeight: 1.4,
                    marginBottom: '4px',
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {type === 'success' && 'Success!'}
                  {type === 'error' && 'Error!'}
                  {type === 'warning' && 'Warning!'}
                  {type === 'info' && 'Info'}
                </motion.div>
                <motion.div
                  style={{
                    fontSize: '14px',
                    color: '#d1d5db',
                    lineHeight: 1.4,
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25 }}
                >
                  {message}
                </motion.div>
              </div>

              {/* Close button */}
              <motion.button
                onClick={onClose}
                style={{
                  width: '24px',
                  height: '24px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: 'none',
                  borderRadius: '6px',
                  color: '#888',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s ease',
                  flexShrink: 0,
                }}
                whileHover={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  color: '#fff',
                  scale: 1.1
                }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ delay: 0.3 }}
              >
                <X style={{ width: '14px', height: '14px' }} />
              </motion.button>
            </div>

            {/* Floating particles effect */}
            {type === 'success' && (
              <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    style={{
                      position: 'absolute',
                      width: '3px',
                      height: '3px',
                      background: toastConfig.textColor,
                      borderRadius: '50%',
                      left: `${20 + i * 12}%`,
                      top: '50%',
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                      y: [-20, -40, -60],
                      x: [0, Math.random() * 20 - 10, Math.random() * 40 - 20],
                    }}
                    transition={{
                      duration: 2,
                      delay: 0.5 + i * 0.1,
                      ease: "easeOut"
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Toast Provider Hook
export function useToast() {
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'success', duration = 5000) => {
    setToast({ message, type, duration, id: Date.now() });
  };

  const hideToast = () => {
    setToast(null);
  };

  const ToastContainer = () => (
    toast && (
      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={!!toast}
        onClose={hideToast}
        duration={toast.duration}
        position="bottom-right"
      />
    )
  );

  return { showToast, hideToast, ToastContainer };
}