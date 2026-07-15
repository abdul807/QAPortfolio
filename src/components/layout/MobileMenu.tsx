import { Link, useLocation } from 'react-router-dom';
import { NAV_ITEMS } from '@/constants/navigation';
import { useEffect, useRef } from 'react';

interface MobileMenuProps {
  isOpen: boolean;
}

export function MobileMenu({ isOpen }: MobileMenuProps) {
  const location = useLocation();
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
          <Link
            key={item.path}
            to={item.path}
            className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
              location.pathname === item.path
                ? 'bg-gold/10 text-gold'
                : 'text-primary/70 dark:text-white/70 hover:bg-gold/5 hover:text-primary dark:hover:text-white'
            }`}
            aria-current={location.pathname === item.path ? 'page' : undefined}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}