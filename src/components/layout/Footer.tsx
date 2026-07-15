import { Link } from 'react-router-dom';
import { NAV_ITEMS } from '@/constants/navigation';
import { SOCIAL_LINKS } from '@/constants/social';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-primary/5 dark:bg-white/5 border-t border-gold/10"
      role="contentinfo"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-display font-bold gradient-text mb-4">
              Portfolio
            </h2>
            <p className="text-primary/60 dark:text-white/60 max-w-md">
              Quality Assurance Engineer, Vibe Coder & Project Manager. Building
              exceptional digital experiences with precision and creativity.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {NAV_ITEMS.map(item => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-primary/60 dark:text-white/60 hover:text-gold transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              {SOCIAL_LINKS.map(link => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary/60 dark:text-white/60 hover:text-gold transition-colors"
                    aria-label={link.name}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary/10 dark:border-white/10 text-center text-sm text-primary/40 dark:text-white/40">
          <p>&copy; {currentYear} Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}