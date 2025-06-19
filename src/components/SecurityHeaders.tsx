import { useEffect } from 'react';
import { generateCSPHeader } from '@/utils/security';

// Component to set security-related meta tags and headers
const SecurityHeaders = () => {
  useEffect(() => {
    // Set CSP meta tag for additional security
    const cspMeta = document.createElement('meta');
    cspMeta.httpEquiv = 'Content-Security-Policy';
    cspMeta.content = generateCSPHeader();
    document.head.appendChild(cspMeta);

    // Set additional security meta tags
    const metaTags = [
      { httpEquiv: 'X-Content-Type-Options', content: 'nosniff' },
      { httpEquiv: 'X-XSS-Protection', content: '1; mode=block' },
      { httpEquiv: 'Referrer-Policy', content: 'strict-origin-when-cross-origin' }
    ];

    metaTags.forEach(tag => {
      const meta = document.createElement('meta');
      meta.httpEquiv = tag.httpEquiv;
      meta.content = tag.content;
      document.head.appendChild(meta);
    });

    // Cleanup function
    return () => {
      // Remove CSP meta tag on component unmount
      const existingCSP = document.querySelector('meta[http-equiv="Content-Security-Policy"]');
      if (existingCSP) {
        existingCSP.remove();
      }
    };
  }, []);

  return null; // This component doesn't render anything
};

export default SecurityHeaders;
