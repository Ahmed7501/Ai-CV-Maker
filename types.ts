export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  address: string;
  linkedin: string;
  portfolio: string;
  profilePicture?: string;
  logo?: string;
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface Education {
  id: number;
  degree: string;
  school: string;
  location: string;
  startDate: string;
  endDate: string;
}

export interface Skill {
  id: number;
  name: string;
}

export interface CvData {
  personalInfo: PersonalInfo;
  summary: string;
  experience: Experience[];
  education: Education[];
  skills: Skill[];
}

export type TemplateName = 'classic' | 'modern' | 'creative' | 'professional' | 'swiss' | 'executive' | 'portfolio';