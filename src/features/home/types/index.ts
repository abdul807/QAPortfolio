export interface HeroData {
  greeting: string;
  name: string;
  title: string;
  description: string;
  badge: string;
}

export interface Skill {
  name: string;
  icon: string;
  category: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  repoUrl: string;
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  content: string;
}