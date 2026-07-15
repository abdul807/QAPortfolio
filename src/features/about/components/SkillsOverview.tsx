import { Skill } from '../types';

interface SkillsOverviewProps {
  skills: Skill[];
}

export function SkillsOverview({ skills }: SkillsOverviewProps) {
  const categories = ['Testing', 'Frontend', 'Backend', 'DevOps', 'Management'];
  const categorizedSkills = categories.map(category => ({
    category,
    skills: skills.filter(skill => skill.category === category),
  }));

  return (
    <section aria-label="Skills overview">
      <h2 className="text-2xl md:text-3xl font-display font-bold mb-8 flex items-center gap-3">
        <span className="text-gold">⚡</span>
        Skills & Technologies
      </h2>
      <div className="space-y-8">
        {categorizedSkills.map(
          group =>
            group.skills.length > 0 && (
              <div key={group.category} className="animate-fade-in">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gold mb-4">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {group.skills.map(skill => (
                    <span
                      key={skill.name}
                      className="px-4 py-2 rounded-full glass text-sm hover:shadow-lg transition-all hover:scale-105"
                    >
                      {skill.icon} {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            )
        )}
      </div>
    </section>
  );
}