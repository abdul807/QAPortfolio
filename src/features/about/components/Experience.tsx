import { Experience as ExperienceType } from '../types';

interface ExperienceProps {
  experiences: ExperienceType[];
}

export function Experience({ experiences }: ExperienceProps) {
  return (
    <section aria-label="Work experience">
      <h2 className="text-2xl md:text-3xl font-display font-bold mb-8 flex items-center gap-3">
        <span className="text-gold">💼</span>
        Work Experience
      </h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-gold before:to-accent/20 animate-fade-in"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-gold border-2 border-white dark:border-primary transform -translate-x-1.5" />
            <div className="glass p-6 rounded-xl hover:shadow-xl transition-shadow">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <span className="px-3 py-1 rounded-full bg-gold/10 text-gold text-sm font-medium">
                  {exp.period}
                </span>
              </div>
              <p className="text-primary/60 dark:text-white/60 mb-3">
                {exp.company}
              </p>
              <ul className="space-y-2 text-primary/70 dark:text-white/70">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-gold mt-1">▸</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}