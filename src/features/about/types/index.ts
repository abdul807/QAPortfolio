export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  achievements: string[];
}

export interface Education {
  id: string;
  degree: string;
  school: string;
  period: string;
  gpa?: string;
}

export interface Skill {
  name: string;
  icon: string;
  category: string;
}

export interface Certificate {
  name: string;
  issuer: string;
  date: string;
  icon: string;
  category: string;
}