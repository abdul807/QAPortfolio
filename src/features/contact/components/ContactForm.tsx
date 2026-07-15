import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ContactFormData, contactSchema } from '../validation/contactSchema';
import { sendContactEmail } from '../services/contactService';
import { useState } from 'react';

export function ContactForm() {
  const [submitError, setSubmitError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitError(null);
    try {
      const result = await sendContactEmail(data);
      if (result.success) {
        reset();
        // Success message will be shown via isSubmitSuccessful
      } else {
        setSubmitError(result.message);
      }
    } catch (error) {
      setSubmitError('An unexpected error occurred. Please try again.');
      console.error('Form submission error:', error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="glass-card p-6 md:p-8 rounded-2xl space-y-6"
      aria-label="Contact form"
      noValidate
    >
      {isSubmitSuccessful && (
        <div
          className="p-4 rounded-lg bg-success/10 text-success border border-success/20 animate-fade-in"
          role="alert"
        >
          ✅ Thank you for your message! I'll get back to you soon.
        </div>
      )}

      {submitError && (
        <div
          className="p-4 rounded-lg bg-danger/10 text-danger border border-danger/20 animate-fade-in"
          role="alert"
        >
          ❌ {submitError}
        </div>
      )}

      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2 text-[rgb(var(--foreground))]">
          Name *
        </label>
        <input
          id="name"
          type="text"
          {...register('name')}
          className="w-full px-4 py-2 rounded-lg bg-[rgb(var(--background))]/50 dark:bg-[rgb(var(--background))]/50 border border-gold/20 focus:border-gold focus:ring-2 focus:ring-gold/20 transition-colors text-[rgb(var(--foreground))]"
          aria-invalid={errors.name ? 'true' : 'false'}
          aria-describedby={errors.name ? 'name-error' : undefined}
          placeholder="John Doe"
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-sm text-danger" role="alert">
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2 text-[rgb(var(--foreground))]">
          Email *
        </label>
        <input
          id="email"
          type="email"
          {...register('email')}
          className="w-full px-4 py-2 rounded-lg bg-[rgb(var(--background))]/50 dark:bg-[rgb(var(--background))]/50 border border-gold/20 focus:border-gold focus:ring-2 focus:ring-gold/20 transition-colors text-[rgb(var(--foreground))]"
          aria-invalid={errors.email ? 'true' : 'false'}
          aria-describedby={errors.email ? 'email-error' : undefined}
          placeholder="john@example.com"
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-sm text-danger" role="alert">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-2 text-[rgb(var(--foreground))]">
          Subject
        </label>
        <input
          id="subject"
          type="text"
          {...register('subject')}
          className="w-full px-4 py-2 rounded-lg bg-[rgb(var(--background))]/50 dark:bg-[rgb(var(--background))]/50 border border-gold/20 focus:border-gold focus:ring-2 focus:ring-gold/20 transition-colors text-[rgb(var(--foreground))]"
          aria-invalid={errors.subject ? 'true' : 'false'}
          aria-describedby={errors.subject ? 'subject-error' : undefined}
          placeholder="Project Inquiry"
        />
        {errors.subject && (
          <p id="subject-error" className="mt-1 text-sm text-danger" role="alert">
            {errors.subject.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2 text-[rgb(var(--foreground))]">
          Message *
        </label>
        <textarea
          id="message"
          rows={5}
          {...register('message')}
          className="w-full px-4 py-2 rounded-lg bg-[rgb(var(--background))]/50 dark:bg-[rgb(var(--background))]/50 border border-gold/20 focus:border-gold focus:ring-2 focus:ring-gold/20 transition-colors resize-y text-[rgb(var(--foreground))]"
          aria-invalid={errors.message ? 'true' : 'false'}
          aria-describedby={errors.message ? 'message-error' : undefined}
          placeholder="Tell me about your project..."
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-sm text-danger" role="alert">
            {errors.message.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3 bg-gradient-to-r from-gold to-accent text-white font-medium rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-gold/20"
        aria-label={isSubmitting ? 'Sending message...' : 'Send message'}
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
          </span>
        ) : (
          'Send Message'
        )}
      </button>
    </form>
  );
}