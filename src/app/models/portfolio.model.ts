export interface Project {
  id: string;
  title: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
  tags: string[];
  repoUrl: string;
  demoUrl?: string;
  featured?: boolean;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}