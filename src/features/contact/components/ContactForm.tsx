import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ContactFormData, contactSchema } from '../validation/contactSchema';

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // In production, this would send the form data to an API
    console.log('Form submitted:', data);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="glass p-6 md:p-8 rounded-2xl space-y-6"
      aria-label="Contact form"
      noValidate
    >
      {isSubmitSuccessful && (
        <div
          className="p-4 rounded-lg bg-success/10 text-success border border-success/20"
          role="alert"
        >
          Thank you for your message! I'll get back to you soon.
        </div>
      )}

      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Name *
        </label>
        <input
          id="name"
          type="text"
          {...register('name')}
          className="w-full px-4 py-2 rounded-lg bg-white/5 dark:bg-primary/5 border border-gold/20 focus:border-gold focus:ring-2 focus:ring-gold/20 transition-colors"
          aria-invalid={errors.name ? 'true' : 'false'}
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-sm text-danger" role="alert">
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email *
        </label>
        <input
          id="email"
          type="email"
          {...register('email')}
          className="w-full px-4 py-2 rounded-lg bg-white/5 dark:bg-primary/5 border border-gold/20 focus:border-gold focus:ring-2 focus:ring-gold/20 transition-colors"
          aria-invalid={errors.email ? 'true' : 'false'}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-sm text-danger" role="alert">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-2">
          Subject
        </label>
        <input
          id="subject"
          type="text"
          {...register('subject')}
          className="w-full px-4 py-2 rounded-lg bg-white/5 dark:bg-primary/5 border border-gold/20 focus:border-gold focus:ring-2 focus:ring-gold/20 transition-colors"
          aria-invalid={errors.subject ? 'true' : 'false'}
          aria-describedby={errors.subject ? 'subject-error' : undefined}
        />
        {errors.subject && (
          <p id="subject-error" className="mt-1 text-sm text-danger" role="alert">
            {errors.subject.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message *
        </label>
        <textarea
          id="message"
          rows={5}
          {...register('message')}
          className="w-full px-4 py-2 rounded-lg bg-white/5 dark:bg-primary/5 border border-gold/20 focus:border-gold focus:ring-2 focus:ring-gold/20 transition-colors resize-y"
          aria-invalid={errors.message ? 'true' : 'false'}
          aria-describedby={errors.message ? 'message-error' : undefined}
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
        className="w-full py-3 bg-gradient-to-r from-gold to-accent text-white font-medium rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label={isSubmitting ? 'Sending message...' : 'Send message'}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}