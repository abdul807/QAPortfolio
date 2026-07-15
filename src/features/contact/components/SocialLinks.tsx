import { SOCIAL_LINKS } from '@/constants/social';

export function SocialLinks() {
  return (
    <div>
      <h2 className="text-2xl font-display font-semibold mb-4">Connect With Me</h2>
      <div className="flex gap-4 flex-wrap">
        {SOCIAL_LINKS.map(link => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl glass hover:shadow-lg hover:scale-105 transition-all"
            aria-label={`Connect on ${link.name}`}
          >
            <span className="font-medium">{link.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}