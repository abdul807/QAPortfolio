import { ContactForm } from '../components/ContactForm';
import { ContactInfo } from '../components/ContactInfo';
import { SocialLinks } from '../components/SocialLinks';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h1>
          <p className="text-lg text-primary/60 dark:text-white/60 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <ContactInfo />
            <SocialLinks />
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}