import emailjs from '@emailjs/browser';
import { ContactFormData } from '../validation/contactSchema';

// Initialize EmailJS with your public key
// Get these from https://dashboard.emailjs.com/
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';

export interface EmailResponse {
  success: boolean;
  message: string;
}

export async function sendContactEmail(data: ContactFormData): Promise<EmailResponse> {
  try {
    // Check if EmailJS is configured
    if (!EMAILJS_PUBLIC_KEY || !EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID) {
      console.warn('EmailJS not configured. Using fallback.');
      return sendEmailFallback(data);
    }

    // Send email using EmailJS
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      subject: data.subject || 'New Contact Form Submission',
      message: data.message,
      to_email: 'hello@example.com', // Your email address
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    if (response.status === 200) {
      return {
        success: true,
        message: 'Your message has been sent successfully!',
      };
    } else {
      throw new Error('Failed to send email');
    }
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      success: false,
      message: 'Failed to send message. Please try again later.',
    };
  }
}

// Fallback function if EmailJS is not configured
async function sendEmailFallback(data: ContactFormData): Promise<EmailResponse> {
  // In production, you might want to use a different service or API endpoint
  console.log('Contact form data:', {
    name: data.name,
    email: data.email,
    subject: data.subject || 'New Contact Form Submission',
    message: data.message,
  });

  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000));

  return {
    success: true,
    message: 'Your message has been received! (Demo mode)',
  };
}