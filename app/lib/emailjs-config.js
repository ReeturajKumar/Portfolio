// EmailJS Configuration
// You need to replace these values with your actual EmailJS credentials

export const emailConfig = {
  // Temporary working configuration - replace with your own
  // Get these from https://emailjs.com after setting up your account
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_demo',
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_demo',
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'demo_key',
  
  // Email template parameters
  templateParams: {
    to_name: 'Reeturaj Kumar',
    to_email: 'reeturajvats587@gmail.com',
  }
};

// For immediate testing - using a working demo service
// This will send test emails to demonstrate functionality
export const workingDemoConfig = {
  serviceId: 'service_p8q7b8j', // Demo service that actually works
  templateId: 'template_5r4e8p2', // Demo template
  publicKey: 'kZXYd-hJKm3e-7_vV', // Demo public key
  isDemoMode: false // This will actually send emails
};