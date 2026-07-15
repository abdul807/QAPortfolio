import { Certificate } from '../types';

interface CertificatesProps {
  certificates: Certificate[];
}

export function Certificates({ certificates }: CertificatesProps) {
  return (
    <section aria-label="Certificates">
      <h2 className="text-2xl md:text-3xl font-display font-bold mb-8 flex items-center gap-3 text-[rgb(var(--foreground))]">
        <span className="text-gold">🏆</span>
        Certificates & Credentials
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {certificates.map((cert, index) => (
          <div
            key={cert.name}
            className="glass-card p-6 rounded-xl hover:shadow-xl transition-all hover:scale-105 text-center animate-fade-in group"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
              {cert.icon}
            </div>
            <h3 className="font-semibold text-sm text-[rgb(var(--foreground))] mb-1">
              {cert.name}
            </h3>
            <p className="text-xs text-[rgb(var(--foreground))]/60 mb-2">
              {cert.issuer}
            </p>
            <span className="text-xs text-gold font-medium">
              {cert.date}
            </span>
            <div className="mt-2">
              <span className="inline-block px-2 py-0.5 text-xs rounded-full bg-gold/10 text-gold">
                {cert.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}