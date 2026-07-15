import { Testimonial } from '../types';

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Testimonials">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
          <span className="gradient-text">What People Say</span>
        </h2>
        <p className="text-primary/60 dark:text-white/60 max-w-2xl mx-auto">
          Feedback from colleagues and clients I've had the pleasure of working with
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <blockquote
            key={testimonial.id}
            className="p-6 rounded-2xl glass hover:shadow-xl transition-all hover:scale-105 animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-gold to-accent flex items-center justify-center text-white font-bold text-lg">
                {testimonial.author.charAt(0)}
              </div>
              <div className="ml-4">
                <cite className="font-semibold not-italic">
                  {testimonial.author}
                </cite>
                <p className="text-sm text-primary/40 dark:text-white/40">
                  {testimonial.role}
                </p>
              </div>
            </div>
            <p className="text-primary/70 dark:text-white/70 leading-relaxed">
              "{testimonial.content}"
            </p>
          </blockquote>
        ))}
      </div>
    </section>
  );
}