
import { SECURITY_CONFIG } from '@/config/security';

// Input sanitization
export const sanitizeInput = (input: string): string => {
  return input
    .trim()
    .replace(/[<>\"']/g, '') // Remove potentially dangerous characters
    .substring(0, 1000); // Limit length
};

// Email validation
export const validateEmail = (email: string): boolean => {
  return SECURITY_CONFIG.validation.email.test(email);
};

// Phone validation
export const validatePhone = (phone: string): boolean => {
  return SECURITY_CONFIG.validation.phone.test(phone.replace(/\s/g, ''));
};

// Name validation
export const validateName = (name: string): boolean => {
  return SECURITY_CONFIG.validation.name.test(name);
};

// Rate limiting for form submissions
export const checkRateLimit = (key: string): boolean => {
  try {
    const submissions = JSON.parse(localStorage.getItem(`submissions_${key}`) || '[]');
    const now = Date.now();
    const recentSubmissions = submissions.filter(
      (timestamp: number) => now - timestamp < SECURITY_CONFIG.rateLimiting.cooldownPeriod
    );
    
    if (recentSubmissions.length >= SECURITY_CONFIG.rateLimiting.maxSubmissionsPerHour) {
      return false;
    }
    
    // Update submissions
    recentSubmissions.push(now);
    localStorage.setItem(`submissions_${key}`, JSON.stringify(recentSubmissions));
    return true;
  } catch {
    return true; // Allow submission if localStorage fails
  }
};

// Generate CSP header content
export const generateCSPHeader = (): string => {
  const { csp } = SECURITY_CONFIG;
  return Object.entries(csp)
    .map(([directive, sources]) => `${directive.replace(/([A-Z])/g, '-$1').toLowerCase()} ${sources.join(' ')}`)
    .join('; ');
};

// Honeypot field validation (anti-bot measure)
export const validateHoneypot = (honeypotValue: string): boolean => {
  return honeypotValue === '';
};
