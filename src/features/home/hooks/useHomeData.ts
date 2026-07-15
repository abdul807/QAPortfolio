import { HeroData, Skill, Project, Testimonial } from '../types';

export function useHomeData() {
  // In a real application, this would fetch from an API
  const hero: HeroData = {
    greeting: "Hi, I'm",
    name: 'Usman Abdul Matin',
    title: 'Quality Assurance Engineer, Project Manager & Vibe Coder',
    description:
      'Results-driven Quality Assurance professional with 5+ years of experience ensuring software quality, leading cross-functional projects, and leveraging AI-powered development to accelerate delivery. Recognized for identifying critical issues before they reach users, improving development workflows, and delivering exceptional digital experiences that exceed business and customer expectations',
  };

  const skills: Skill[] = [
    { name: 'Web Development', icon: '⚛️', category: 'Vibe Coding' },
    { name: 'API Testing', icon: '📘', category: 'Testing' },
    { name: 'Manual Testing', icon: '🐍', category: 'Testing' },
    { name: 'Docker', icon: '🐳', category: 'DevOps' },
    { name: 'Bug Tracking', icon: '☁️', category: 'Testing' },
    { name: 'Jest', icon: '🧪', category: 'Testing' },
    { name: 'Cypress', icon: '🎯', category: 'Testing' },
    { name: 'Git', icon: '🔀', category: 'Tools' },
    { name: 'Azure', icon: '🎨', category: 'Management' },
    { name: 'Jira', icon: '📋', category: 'Management' },
    { name: 'Agile', icon: '🔄', category: 'Management' },
    { name: 'SQL', icon: '🗄️', category: 'Database' },
  ];

  const featuredProjects: Project[] = [
    {
      id: '1',
      title: 'E-commerce Platform',
      description:
        'Full-featured e-commerce platform with real-time inventory management and analytics',
      image: 'https://via.placeholder.com/600x400',
      tags: ['React', 'Node.js', 'MongoDB'],
      demoUrl: '#',
      repoUrl: '#',
      featured: true,
    },
    {
      id: '2',
      title: 'AI-Powered Dashboard',
      description:
        'Intelligent dashboard with predictive analytics and machine learning insights',
      image: 'https://via.placeholder.com/600x400',
      tags: ['Python', 'TensorFlow', 'React'],
      demoUrl: '#',
      repoUrl: '#',
      featured: true,
    },
    {
      id: '3',
      title: 'Mobile App Suite',
      description:
        'Cross-platform mobile applications with seamless offline-first architecture',
      image: 'https://via.placeholder.com/600x400',
      tags: ['React Native', 'Firebase', 'TypeScript'],
      demoUrl: '#',
      repoUrl: '#',
      featured: true,
    },
  ];

  const testimonials: Testimonial[] = [
    {
      id: '1',
      author: 'Jane Smith',
      role: 'CTO, TechCorp',
      content:
        'An exceptional engineer who combines technical excellence with strong project management skills.',
    },
    {
      id: '2',
      author: 'Mike Johnson',
      role: 'Lead Developer, StartupXYZ',
      content:
        'One of the most dedicated and skilled QA engineers I\'ve worked with. Attention to detail is unmatched.',
    },
    {
      id: '3',
      author: 'Sarah Williams',
      role: 'Product Manager, InnovateInc',
      content:
        'Brings creativity and structure to every project. A true professional who delivers results.',
    },
  ];

  return {
    hero,
    skills,
    featuredProjects,
    testimonials,
  };
}