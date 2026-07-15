import { Project } from '../types';
import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface ProjectCardProps extends HTMLAttributes<HTMLDivElement> {
  project: Project;
}

const categoryColors = {
  'Vibe Coding': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  'Quality Assurance': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  'Project Management': 'bg-green-500/20 text-green-400 border-green-500/30',
};

const categoryEmojis = {
  'Vibe Coding': '⚡',
  'Quality Assurance': '🔍',
  'Project Management': '📊',
};

export function ProjectCard({ project, className, ...props }: ProjectCardProps) {
  return (
    <div
      className={cn(
        'glass-card rounded-xl p-6 hover:shadow-xl transition-all hover:scale-[1.02] group',
        className
      )}
      {...props}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="text-xl">{categoryEmojis[project.category]}</span>
            <h3 className="text-xl font-semibold text-[rgb(var(--foreground))] group-hover:text-gold transition-colors">
              {project.title}
            </h3>
          </div>
          <span
            className={cn(
              'px-3 py-1 text-xs font-medium rounded-full border whitespace-nowrap ml-2',
              categoryColors[project.category]
            )}
          >
            {project.category}
          </span>
        </div>
        
        <p className="text-[rgb(var(--foreground))]/60 text-sm leading-relaxed flex-1">
          {project.description}
        </p>
      </div>
    </div>
  );
}