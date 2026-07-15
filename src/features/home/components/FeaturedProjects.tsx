import { Link } from 'react-router-dom';
import { Project } from '../types';
import { ProjectCard } from '@/features/projects/components/ProjectCard';

interface FeaturedProjectsProps {
  projects: Project[];
}

export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Featured projects">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
          <span className="gradient-text">Featured Projects</span>
        </h2>
        <p className="text-primary/60 dark:text-white/60 max-w-2xl mx-auto">
          A selection of my most recent and impactful work
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            className="animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          />
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          to="/projects"
          className="inline-block px-8 py-3 border-2 border-gold text-gold font-medium rounded-lg hover:bg-gold/10 transition-colors"
        >
          View All Projects →
        </Link>
      </div>
    </section>
  );
}