import { Skill } from '../types';

interface SkillsProps {
  skills: Skill[];
}

export function Skills({ skills }: SkillsProps) {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Skills">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
          <span className="gradient-text">Skills & Expertise</span>
        </h2>
        <p className="text-primary/60 dark:text-white/60 max-w-2xl mx-auto">
          Technologies and tools I work with to deliver exceptional results
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className="group p-6 rounded-2xl glass hover:shadow-xl transition-all hover:scale-105 text-center animate-fade-in"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
              {skill.icon}
            </div>
            <h3 className="font-medium text-sm">{skill.name}</h3>
            <span className="text-xs text-primary/40 dark:text-white/40">
              {skill.category}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}