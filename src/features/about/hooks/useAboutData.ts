import { Experience, Education, Skill } from '../types';

export function useAboutData() {
  const experiences: Experience[] = [
    {
      id: '1',
      title: 'Senior Quality Assurance Engineer',
      company: 'TechCorp Innovations',
      period: '2021 - Present',
      achievements: [
        'Led QA team of 5 engineers, implementing automated testing strategies',
        'Reduced bug escape rate by 60% through comprehensive testing frameworks',
        'Implemented CI/CD pipeline with automated testing, reducing deployment time by 40%',
      ],
    },
    {
      id: '2',
      title: 'Full Stack Developer & QA Lead',
      company: 'StartupXYZ',
      period: '2019 - 2021',
      achievements: [
        'Developed and maintained multiple web applications using React and Node.js',
        'Established QA processes and testing standards for the engineering team',
        'Created automated test suites covering 85% of the codebase',
      ],
    },
    {
      id: '3',
      title: 'Junior Developer & QA Analyst',
      company: 'InnovateInc',
      period: '2018 - 2019',
      achievements: [
        'Performed manual and automated testing for enterprise applications',
        'Collaborated with development teams to improve code quality',
        'Wrote technical documentation and test plans',
      ],
    },
  ];

  const education: Education[] = [
    {
      id: '1',
      degree: 'MSc in Computer Science',
      school: 'University of Technology',
      period: '2016 - 2018',
      gpa: '3.8/4.0',
    },
    {
      id: '2',
      degree: 'BSc in Software Engineering',
      school: 'State University',
      period: '2012 - 2016',
      gpa: '3.9/4.0',
    },
  ];

  const skills: Skill[] = [
    { name: 'Jest', icon: '🧪', category: 'Testing' },
    { name: 'Cypress', icon: '🎯', category: 'Testing' },
    { name: 'Selenium', icon: '🤖', category: 'Testing' },
    { name: 'React', icon: '⚛️', category: 'Frontend' },
    { name: 'TypeScript', icon: '📘', category: 'Frontend' },
    { name: 'Next.js', icon: '▲', category: 'Frontend' },
    { name: 'Python', icon: '🐍', category: 'Backend' },
    { name: 'Node.js', icon: '🟢', category: 'Backend' },
    { name: 'Docker', icon: '🐳', category: 'DevOps' },
    { name: 'AWS', icon: '☁️', category: 'DevOps' },
    { name: 'Kubernetes', icon: '⎈', category: 'DevOps' },
    { name: 'Jira', icon: '📋', category: 'Management' },
    { name: 'Agile', icon: '🔄', category: 'Management' },
    { name: 'Scrum', icon: '🏃', category: 'Management' },
  ];


  const certificates: Certificate[] = [
    {
      name: 'ISTQB Certified Tester',
      issuer: 'ISTQB',
      date: '2023',
      icon: '📜',
      category: 'Quality Assurance',
    },
    {
      name: 'AWS Certified Developer',
      issuer: 'Amazon Web Services',
      date: '2022',
      icon: '☁️',
      category: 'Cloud',
    },
    {
      name: 'Scrum Master Certified',
      issuer: 'Scrum Alliance',
      date: '2022',
      icon: '🔄',
      category: 'Project Management',
    },
    {
      name: 'Professional Scrum Product Owner',
      issuer: 'Scrum.org',
      date: '2023',
      icon: '📋',
      category: 'Project Management',
    },
    {
      name: 'React Developer Certification',
      issuer: 'Meta',
      date: '2023',
      icon: '⚛️',
      category: 'Development',
    },
    {
      name: 'Google Cloud Professional',
      issuer: 'Google Cloud',
      date: '2022',
      icon: '🌐',
      category: 'Cloud',
    },
    {
      name: 'Certified Kubernetes Administrator',
      issuer: 'CNCF',
      date: '2023',
      icon: '⎈',
      category: 'DevOps',
    },
    {
      name: 'Agile Leadership Certificate',
      issuer: 'ICAgile',
      date: '2023',
      icon: '🎯',
      category: 'Project Management',
    },
    {
      name: 'Test Automation Engineering',
      issuer: 'Selenium WebDriver',
      date: '2022',
      icon: '🤖',
      category: 'Quality Assurance',
    },
    {
      name: 'DevOps Professional',
      issuer: 'DevOps Institute',
      date: '2022',
      icon: '🚀',
      category: 'DevOps',
    },
    {
      name: 'Python Programming Certification',
      issuer: 'Python Institute',
      date: '2023',
      icon: '🐍',
      category: 'Development',
    },
    {
      name: 'Project Management Professional',
      issuer: 'PMI',
      date: '2023',
      icon: '📊',
      category: 'Project Management',
    },
  ];


  return {
    experiences,
    education,
    skills,
    certificates,
  };
}