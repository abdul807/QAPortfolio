import { Education as EducationType } from '../types';

interface EducationProps {
  education: EducationType[];
}

export function Education({ education }: EducationProps) {
  return (
    <section aria-label="Education">
      <h2 className="text-2xl md:text-3xl font-display font-bold mb-8 flex items-center gap-3">
        <span className="text-gold">🎓</span>
        Education
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className="glass p-6 rounded-xl hover:shadow-xl transition-all hover:scale-105 animate-fade-in"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <h3 className="text-lg font-semibold mb-1">{edu.degree}</h3>
            <p className="text-primary/60 dark:text-white/60 mb-2">{edu.school}</p>
            <span className="text-sm text-gold">{edu.period}</span>
            {edu.gpa && (
              <p className="mt-2 text-sm text-primary/50 dark:text-white/50">
                GPA: {edu.gpa}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}