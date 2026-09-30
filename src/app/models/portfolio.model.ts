export interface Project {
  id: string;
  title: string;
  role: string;
  period?: string;
  description: string;
  highlights: string[];
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}