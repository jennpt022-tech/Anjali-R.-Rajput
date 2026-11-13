export interface AcademicItem {
  id: string;
  level: string;
  title: string;
  institution: string;
  passingYear: string;
  gradeOrPercentage: string;
  description?: string;
  isCurrent?: boolean;
  semesters?: {
    sem: string;
    status: 'completed' | 'in-progress';
    subjects: string[];
    cgpa?: string;
    grade?: string;
  }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  brief: string;
  details: string;
  execution: string[];
  outcome: string;
  tags: string[];
  imageUrl?: string;
  demoUrl?: string;
  pdfUrl?: string;
  pdfTitle?: string;
  anjaliRole?: string;
  externalLinks?: { label: string; url: string }[];
  featured?: boolean;
}

export interface AchievementItem {
  id: string;
  title: string;
  badgeCategory: string;
  description: string;
  highlight: string;
  dateOrYear: string;
  iconType: 'academic' | 'speaker' | 'trophy' | 'leadership';
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface PortfolioProfile {
  name: string;
  role: string;
  headlineBio: string;
  bioLines: string[];
  cgpa: string;
  email: string;
  location: string;
  linkedinUrl: string;
  portraitUrl: string;
  cvPdfUrl: string;
  currentCollege: string;
  degree: string;
  gradYear: string;
  skills: SkillGroup[];
  areasOfInterest: string[];
}
