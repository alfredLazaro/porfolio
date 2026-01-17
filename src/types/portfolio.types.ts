// ============================================
// src/types/portfolio.types.ts
// ============================================
export interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  image?: string; // Optional: Add project screenshot URL
  highlights?: string[]; // Optional: Key features or achievements
}

export interface SkillSet {
  category: string;
  items: string[];
}

export interface PersonalInfo {
  name: string;
  title: string;
  about: string;
  github: string;
  linkedin: string;
  email: string;
  twitter?: string; // Optional
  website?: string; // Optional
  resume?: string; // Optional: Link to resume PDF
}

export interface WorkExperience {
  company: string;
  position: string;
  period: string;
  description: string;
  achievements?: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  description?: string;
}