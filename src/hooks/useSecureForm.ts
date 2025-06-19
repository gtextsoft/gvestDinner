
import { useState } from 'react';
import { 
  sanitizeInput, 
  validateEmail, 
  validatePhone, 
  validateName, 
  checkRateLimit,
  validateHoneypot 
} from '@/utils/security';
import { toast } from '@/components/ui/use-toast';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  event: string;
  message: string;
  honeypot: string; // Anti-bot field
}

interface ValidationErrors {
  [key: string]: string;
}

export const useSecureForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<ValidationErrors>({});

  const validateForm = (data: FormData): ValidationErrors => {
    const newErrors: ValidationErrors = {};

    // Honeypot validation (anti-bot)
    if (!validateHoneypot(data.honeypot)) {
      newErrors.honeypot = 'Bot detected';
      return newErrors;
    }

    // Name validation
    if (!validateName(data.firstName)) {
      newErrors.firstName = 'Please enter a valid first name (2-50 characters, letters only)';
    }

    if (!validateName(data.lastName)) {
      newErrors.lastName = 'Please enter a valid last name (2-50 characters, letters only)';
    }

    // Email validation
    if (!validateEmail(data.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone validation
    if (!validatePhone(data.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    // Event selection validation
    if (!data.event || data.event === '') {
      newErrors.event = 'Please select an event';
    }

    return newErrors;
  };

  const submitForm = async (data: FormData): Promise<boolean> => {
    setIsSubmitting(true);
    setErrors({});

    try {
      // Rate limiting check
      if (!checkRateLimit('contact_form')) {
        toast({
          variant: "destructive",
          title: "Too Many Requests",
          description: "Please wait before submitting another form. Maximum 5 submissions per hour."
        });
        return false;
      }

      // Validate form
      const validationErrors = validateForm(data);
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return false;
      }

      // Sanitize inputs
      const sanitizedData = {
        firstName: sanitizeInput(data.firstName),
        lastName: sanitizeInput(data.lastName),
        email: sanitizeInput(data.email),
        phone: sanitizeInput(data.phone),
        event: sanitizeInput(data.event),
        message: sanitizeInput(data.message)
      };

      // Log form submission (in production, this would go to your backend)
      console.log('Secure form submission:', sanitizedData);

      toast({
        title: "Registration Submitted",
        description: "Thank you for your interest! We'll contact you soon."
      });

      return true;
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: "There was an error submitting your form. Please try again."
      });
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    submitForm,
    isSubmitting,
    errors,
    validateForm
  };
};
