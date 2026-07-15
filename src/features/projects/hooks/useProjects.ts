import { Project } from '../types';

export function useProjects() {
  const projects: Project[] = [
    {
      id: '1',
      title: 'AI-Powered Code Assistant',
      description:
        'Intelligent code completion and suggestion tool using machine learning to enhance developer productivity and code quality.',
      category: 'Vibe Coding',
    },
    {
      id: '2',
      title: 'Real-Time Collaboration Hub',
      description:
        'Live coding platform with multiplayer editing, video conferencing, and real-time code sharing for remote pair programming.',
      category: 'Vibe Coding',
    },
    {
      id: '3',
      title: 'Automated Testing Framework',
      description:
        'End-to-end test automation suite with visual regression testing, performance benchmarking, and comprehensive reporting.',
      category: 'Quality Assurance',
    },
    {
      id: '4',
      title: 'Bug Tracking Dashboard',
      description:
        'Intelligent bug tracking and management system with AI-powered issue prioritization and automated test case generation.',
      category: 'Quality Assurance',
    },
    {
      id: '5',
      title: 'Agile Project Dashboard',
      description:
        'Comprehensive project management platform with sprint planning, resource allocation, and real-time team performance analytics.',
      category: 'Project Management',
    },
    {
      id: '6',
      title: 'Resource Management System',
      description:
        'Smart resource allocation tool with workload balancing, skill matching, and predictive project timeline forecasting.',
      category: 'Project Management',
    },
  ];

  // Get unique categories from projects
  const uniqueCategories = ['All', ...new Set(projects.map(p => p.category))];

  return {
    projects,
    categories: uniqueCategories,
  };
}