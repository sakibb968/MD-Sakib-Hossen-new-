export interface ServiceItem {
  id: string;
  name: string;
  category: 'advertising' | 'tracking' | 'creative' | 'automation';
  shortDescription: string;
  fullDescription: string;
  deliverables: string[];
  techStack: string[];
  trackingSignal: string;
  iconName: string;
}

export interface IndustryItem {
  id: string;
  name: string;
  headline: string;
  avgJobValue: string;
  commonBottleneck: string;
  leakPoints: string[];
  customSolution: string;
  trackingBlueprint: string[];
}

export interface ProcessStepItem {
  number: string;
  title: string;
  phase: string;
  description: string;
  activities: string[];
  deliverable: string;
}

export interface WorkFrameworkItem {
  id: string;
  industry: string;
  title: string;
  scope: string;
  problem: string;
  strategy: string;
  solution: string;
  measurementFramework: string[];
  technologies: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export interface TechItem {
  name: string;
  category: string;
  role: string;
  description: string;
}

export interface ContactFormData {
  fullName: string;
  businessName: string;
  email: string;
  website: string;
  services: string[];
  monthlyBudget: string;
  message: string;
}

export interface BookingFormData {
  fullName: string;
  email: string;
  businessName: string;
  website: string;
  timezone: string;
  date: string;
  timeSlot: string;
  monthlyBudget: string;
  primaryGoal: string;
  notes: string;
}
