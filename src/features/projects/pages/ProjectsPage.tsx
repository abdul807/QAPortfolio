import { useState } from 'react';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectFilters } from '../components/ProjectFilters';
import { useProjects } from '../hooks/useProjects';

export default function ProjectsPage() {
  const { projects, categories } = useProjects();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredProjects = projects.filter(project => {
    const matchesCategory =
      selectedCategory === 'All' || project.category === selectedCategory;
    return matchesCategory;
  });

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-lg text-[rgb(var(--foreground))]/60 max-w-2xl mx-auto">
            A curated collection of my work in Vibe Coding, Quality Assurance, and Project Management
          </p>
        </div>

        <ProjectFilters
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-[rgb(var(--foreground))]/40">
              No projects found in this category
            </p>
          </div>
        )}
      </div>
    </div>
  );
}