export type NavSection = 'home' | 'work' | 'ai-automation' | 'writing' | 'about' | 'resume' | 'contact';

export interface MetricItem {
  id: string;
  number: string;
  unit?: string;
  shortDescription: string;
  context: string;
  contribution: string;
  verified: boolean;
  category: 'fintech' | 'payments' | 'operations' | 'growth';
}

export type CategoryFilter = 
  | 'All' 
  | 'Fintech' 
  | 'Payments' 
  | 'AI' 
  | 'Automation' 
  | 'Product Strategy' 
  | 'Technical Product' 
  | 'UX' 
  | 'Operations';

export interface CaseStudySection {
  title: string;
  content: string;
  bulletPoints?: string[];
  expandableTechDetails?: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  company: string;
  period: string;
  role: string;
  tags: CategoryFilter[];
  summary: string;
  impactMetrics: { label: string; value: string }[];
  problem: string;
  context: string;
  usersAndStakeholders: string[];
  businessObjective: string;
  productChallenge: string;
  approach: string[];
  keyDecisions: { decision: string; rationale: string; tradeOff: string }[];
  diagramType?: 'event-driven' | 'fraud-api' | 'asset-lifecycle' | 'merchant-pos' | 'savings-growth' | 'bill-reconciliation';
  solution: string;
  outcome: string;
  metrics: string[];
  lessonsLearned: string[];
  isFeatured?: boolean;
}

export interface SelectedProject {
  id: string;
  title: string;
  category: string;
  description: string;
  role: string;
  highlights: string[];
}

export interface AutomationWorkflowStep {
  step: 'trigger' | 'ai-processing' | 'decision' | 'action' | 'output';
  label: string;
  detail: string;
  iconName?: string;
}

export interface AutomationProject {
  id: string;
  title: string;
  status: 'Built' | 'Prototyped' | 'Experimented with' | 'Concept';
  category: string;
  description: string;
  manualProcess: string;
  trigger: string;
  aiTask: string;
  workflow: AutomationWorkflowStep[];
  toolsUsed: string[];
  actionTaken: string;
  expectedOutcome: string;
  timeSaved: string;
  humanInTheLoop: string;
  failureHandling: string;
}

export interface Article {
  id: string;
  title: string;
  subtitle: string;
  category: 'Product Management' | 'Fintech' | 'AI' | 'UX' | 'Technology' | 'Career' | 'Personal Reflections';
  date: string;
  readTime: string;
  excerpt: string;
  contentMarkdown: string;
  isFeatured?: boolean;
  externalLink?: string;
}

export interface CareerExperience {
  id: string;
  title: string;
  company: string;
  period: string;
  isCurrent?: boolean;
  location?: string;
  description: string;
  achievements: string[];
  skillsUsed: string[];
}

export interface SkillGroup {
  category: 'Product' | 'Fintech' | 'Technical' | 'AI' | 'Design / Product Tools' | 'Automation';
  description: string;
  skills: string[];
}
