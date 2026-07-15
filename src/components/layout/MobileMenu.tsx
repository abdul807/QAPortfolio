import { Link, useLocation, useNavigate } from 'react-router-dom';
import { NAV_ITEMS } from '@/constants/navigation';
import { useEffect, useRef } from 'react';

interface MobileMenuProps {
  isOpen: boolean;
}

export function MobileMenu({ isOpen }: MobileMenuProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const menuRef = useRef<HTMLDivElement>(null);

  // Trap focus in mobile menu when open
  useEffect(() => {
    if (isOpen && menuRef.current) {
      const focusableElements = menuRef.current.querySelectorAll(
        'a[href], button:not([disabled])'
      );
      if (focusableElements.length > 0) {
        (focusableElements[0] as HTMLElement).focus();
      }
    }
  }, [isOpen]);

  const handleNavigation = (path: string) => {
    if (path === location.pathname) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate(path);
      // The useEffect in Header will handle scrolling
    }
  };

  if (!isOpen) return null;

  return (
    <div
      id="mobile-menu"
      ref={menuRef}
      className="md:hidden bg-white/95 dark:bg-primary/95 backdrop-blur-lg border-b border-gold/10"
      role="navigation"
      aria-label="Mobile navigation"
    >
      <div className="container mx-auto px-4 py-4 space-y-2">
        {NAV_ITEMS.map(item => (
          <button
            key={item.path}
            onClick={() => handleNavigation(item.path)}
            className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ${
              location.pathname === item.path
                ? 'bg-gold/10 text-gold'
                : 'text-[rgb(var(--foreground))]/70 hover:bg-gold/5 hover:text-[rgb(var(--foreground))]'
            }`}
            aria-current={location.pathname === item.path ? 'page' : undefined}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}