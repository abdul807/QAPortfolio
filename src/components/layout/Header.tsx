import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ThemeToggle } from '../ui/ThemeToggle';
import { MobileMenu } from './MobileMenu';
import { NAV_ITEMS } from '@/constants/navigation';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change and scroll to top
  useEffect(() => {
    setIsMobileMenuOpen(false);
    // Scroll to top on route change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  const handleNavigation = (path: string) => {
    if (path === location.pathname) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate(path);
      // The useEffect will handle scrolling
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-primary/80 backdrop-blur-lg border-b border-gold/10'
          : 'bg-transparent'
      }`}
      role="banner"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button
            onClick={() => handleNavigation('/')}
            className="text-xl md:text-2xl font-display font-bold gradient-text hover:opacity-80 transition-opacity bg-transparent border-none cursor-pointer"
            aria-label="Home"
          >
            Portfolio
          </button>

          <nav
            className="hidden md:flex items-center space-x-8"
            aria-label="Main navigation"
          >
            {NAV_ITEMS.map(item => (
              <button
                key={item.path}
                onClick={() => handleNavigation(item.path)}
                className={`text-sm font-medium transition-colors hover:text-gold relative group bg-transparent border-none cursor-pointer ${
                  location.pathname === item.path
                    ? 'text-gold'
                    : 'text-[rgb(var(--foreground))]/70 dark:text-[rgb(var(--foreground))]/70'
                }`}
                aria-current={location.pathname === item.path ? 'page' : undefined}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-gold transition-transform ${
                    location.pathname === item.path
                      ? 'scale-x-100'
                      : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gold/10 transition-colors text-[rgb(var(--foreground))]"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle menu"
            >
              <span className="sr-only">Toggle menu</span>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <MobileMenu isOpen={isMobileMenuOpen} />
    </header>
  );
}