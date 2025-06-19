// Security configuration for the application
export const SECURITY_CONFIG = {
  // Content Security Policy directives
  csp: {
    defaultSrc: ["'self'"],
    styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
    fontSrc: ["'self'", "https://fonts.gstatic.com"],
    imgSrc: ["'self'", "data:", "https:", "blob:"],
    scriptSrc: ["'self'"],
    connectSrc: ["'self'", "https://formspree.io"],
    frameSrc: ["'none'"],
    objectSrc: ["'none'"],
    baseUri: ["'self'"],
    formAction: ["'self'", "https://formspree.io"]
  },
  
  // Rate limiting configuration
  rateLimiting: {
    maxSubmissionsPerHour: 5,
    cooldownPeriod: 3600000 // 1 hour in milliseconds
  },
  
  // Input validation patterns
  validation: {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phone: /^\+?[1-9]\d{1,14}$/,
    name: /^[a-zA-Z\s'-]{2,50}$/
  }
};
