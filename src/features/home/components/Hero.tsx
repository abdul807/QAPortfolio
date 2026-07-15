import { Link } from 'react-router-dom';
import { HeroData } from '../types';

interface HeroProps {
  data: HeroData;
}

export function Hero({ data }: HeroProps) {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-accent/5 dark:from-gold/10 dark:to-accent/10" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-gold/10 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float delay-1000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 animate-slide-up">
            <span className="block">{data.greeting}</span>
            <span className="gradient-text">{data.name}</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-primary/70 dark:text-white/70 mb-8 max-w-2xl mx-auto animate-slide-up">
            {data.title}
          </p>

          <p className="text-base text-primary/60 dark:text-white/60 mb-12 max-w-xl mx-auto animate-slide-up">
            {data.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Link
              to="/projects"
              className="px-8 py-3 bg-gradient-to-r from-gold to-accent text-white font-medium rounded-lg hover:opacity-90 transition-opacity shadow-lg shadow-gold/20"
            >
              View My Work
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 border-2 border-gold text-gold font-medium rounded-lg hover:bg-gold/10 transition-colors"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}