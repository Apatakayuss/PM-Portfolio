import { MetricItem, CareerExperience, SkillGroup } from '../types';

export const personalInfo = {
  name: "Abdulazeez Apata",
  title: "Product Manager | Fintech & Payments | AI & Automation | Product Strategy",
  email: "Apatakayuss@gmail.com",
  location: "Lagos, Nigeria",
  linkedin: "https://linkedin.com/in/abdulazeezapata",
  github: "https://github.com/abdulazeezapata",
  medium: "https://medium.com/@abdulazeezapata",
  twitter: "https://x.com/abdulazeezapata",
  headline: "Product Manager building better products at the intersection of fintech, payments, AI, and automation.",
  heroBio: "I work on complex products and systems, turning ambiguous problems into clear product strategies, structured requirements, and scalable solutions. My work spans fintech, payments, financial infrastructure, AI-enabled workflows, automation, and digital products.",
  aboutStory: {
    whoIAm: "I am a Product Manager driven by systems thinking, clear problem framing, and building functional software that operates reliably at scale.",
    howIBecamePM: "My journey started with a background in Biochemistry and a Master of Public Health, which trained me in rigorous analytical methodologies, scientific observation, and population-level system dynamics. Transitioning into software engineering as a Frontend Web Developer at Adanian Labs, I discovered my deep passion for product strategy, system architecture, and customer problem-solving, leading me directly into Technical Product Management.",
    howIThink: "I view products as interconnected systems where tech decisions impact user trust and business metrics. I focus on reducing system friction, eliminating manual operational bottlenecks, and structuring clear requirements before writing code.",
    whyFintech: "Financial infrastructure and payment routing present fascinating engineering and regulatory challenges. Ensuring a transaction succeeds in seconds requires alignment across APIs, banks, compliance engines, and user psychology.",
    howAIChangesWork: "I don't treat AI as a content generator; I treat it as a cognitive lever. From synthesizing raw feedback data to automating PRD drafts, evaluating LLM accuracy, and crafting automated workflow pipelines, AI enables me to operate with high velocity and strategic clarity."
  },
  education: [
    {
      degree: "Master of Public Health (MPH)",
      institution: "Higher Institution",
      focus: "Analytical Methods & Health Systems"
    },
    {
      degree: "Bachelor of Science (B.Sc.) in Biochemistry",
      institution: "Higher Institution",
      focus: "Biochemical Systems & Analytical Research"
    }
  ]
};

export const verifiedMetrics: MetricItem[] = [
  {
    id: "transfer-success",
    number: "96%",
    unit: "from ~85%",
    shortDescription: "Transfer Service Success Rate",
    context: "Overhauled transfer routing and error handling across partner payment gateways.",
    contribution: "Led root-cause analysis on failed transactions, redesigned fallback routing logic, and established retry specs for transient bank downtime.",
    verified: true,
    category: "payments"
  },
  {
    id: "tx-time",
    number: "~10s",
    unit: "down from 40-60s",
    shortDescription: "Transaction Confirmation Time",
    context: "Shifted processing from cron-based polling to an event-driven webhook architecture.",
    contribution: "Defined system requirements for real-time webhooks, transaction status listeners, and client polling fallback protocols.",
    verified: true,
    category: "payments"
  },
  {
    id: "ksave-growth",
    number: "₦2 Billion",
    unit: "in 1st year",
    shortDescription: "K-Save Cumulative Deposits",
    context: "Digital savings product growth driven by automated recurring deposit triggers and clear goal-based UI.",
    contribution: "Defined product features for auto-debit triggers, interest accrual visualizers, and withdrawal lock rules.",
    verified: true,
    category: "growth"
  },
  {
    id: "kongapay-merchant",
    number: "₦100 Million",
    unit: "in 4 months",
    shortDescription: "Merchant Transaction Volume",
    context: "POS and digital merchant onboarding platform built for small & mid-sized retail businesses.",
    contribution: "Streamlined merchant KYC verification flows, settled API payment callbacks, and optimized POS terminal receipt synchronization.",
    verified: true,
    category: "fintech"
  },
  {
    id: "iso-compliance",
    number: "ISO 20000-1",
    unit: "Certified",
    shortDescription: "IT Service Management Implementation",
    context: "Standardization of IT operations, incident response SLA tracking, and change management procedures.",
    contribution: "Documented IT asset workflows, service desk catalogs, incident management escalation matrix, and auditing artifacts.",
    verified: true,
    category: "operations"
  },
  {
    id: "fraud-monitoring",
    number: "100%",
    unit: "CBN Compliant",
    shortDescription: "Real-time AML & Fraud Engine",
    context: "API-first transaction monitoring system adhering to Central Bank regulatory guidelines.",
    contribution: "Architected rule configuration specs for risk scoring, velocity checks, and automated AML alert generation.",
    verified: true,
    category: "fintech"
  }
];

export const careerExperiences: CareerExperience[] = [
  {
    id: "tm30",
    title: "Product Manager",
    company: "TM30 Global Limited",
    period: "January 2026 – Present",
    isCurrent: true,
    location: "Lagos, Nigeria",
    description: "Driving product strategy, API integrations, and fintech solutions across enterprise clients and digital banking modules.",
    achievements: [
      "Leading cross-functional engineering teams in delivering scalable financial APIs and payment orchestration platforms.",
      "Defining technical product requirements (PRDs/FRDs), API schemas, and sequence diagrams for high-volume banking workflows.",
      "Integrating AI-assisted discovery pipelines into product discovery to decrease PRD drafting time by 40%."
    ],
    skillsUsed: ["Product Strategy", "API Design", "Fintech Infrastructure", "AI Workflows", "System Requirements"]
  },
  {
    id: "easybill",
    title: "Product Manager",
    company: "Easy Bill",
    period: "February 2023 – August 2024",
    location: "Lagos, Nigeria",
    description: "Managed end-to-end product lifecycle for digital bill payment, utility aggregation, and instant settlement systems.",
    achievements: [
      "Engineered automated reconciliation flows for pending utility payments, reducing customer support tickets by 35%.",
      "Collaborated with engineering to implement webhook event listeners, bringing average bill delivery times down to sub-15 seconds.",
      "Structured product requirements for airtime, data, electricity, and cable TV aggregation APIs."
    ],
    skillsUsed: ["Bill Payments", "Transaction Lifecycle", "Reconciliation", "User Story Mapping", "Postman"]
  },
  {
    id: "kongapay",
    title: "Product Management Role",
    company: "KongaPay",
    period: "Previous Role",
    location: "Lagos, Nigeria",
    description: "Worked on merchant payment acceptance, POS integration, and consumer digital wallet features.",
    achievements: [
      "Contributed to K-Save savings feature which scaled to ~₦2B in deposits within its first year.",
      "Delivered merchant payment features enabling over ₦100M transaction volume within 4 months of release.",
      "Mapped user journeys and backend payment flows for agency banking and web checkout integration."
    ],
    skillsUsed: ["Savings Products", "Merchant Payments", "POS Flows", "KYC & Compliance", "User Journeys"]
  },
  {
    id: "adanian",
    title: "Frontend Web Developer",
    company: "Adanian Labs",
    period: "July 2022 – February 2023",
    description: "Built responsive web applications, interactive UI dashboards, and reusable frontend components.",
    achievements: [
      "Developed high-performance client interfaces using modern JavaScript, React, and RESTful API integrations.",
      "Gained firsthand technical intuition into software development lifecycles, frontend performance, and state management."
    ],
    skillsUsed: ["React", "JavaScript", "REST APIs", "UI/UX Architecture", "Git & GitHub"]
  }
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Product",
    description: "Core product discovery, execution, roadmapping, and stakeholder alignment.",
    skills: [
      "Product Strategy",
      "Product Discovery",
      "Roadmapping & Prioritization",
      "PRDs & FRDs",
      "User Stories & Acceptance Criteria",
      "Stakeholder Management",
      "Product Analytics",
      "Product Operations"
    ]
  },
  {
    category: "Fintech",
    description: "Financial systems, payment routing, compliance, and regulatory tech.",
    skills: [
      "Payments Infrastructure",
      "Digital Banking",
      "Transaction Processing",
      "Fraud Detection & Risk Scoring",
      "AML Monitoring (CBN Standards)",
      "Reconciliation Systems",
      "ISO 20000-1 IT Service Standards"
    ]
  },
  {
    category: "Technical",
    description: "System dependencies, architecture concepts, and engineering interfaces.",
    skills: [
      "RESTful APIs & Webhooks",
      "Event-Driven Architecture",
      "Postman & API Specs",
      "Git & GitHub Workflows",
      "SQL & PostgreSQL Queries",
      "Frontend Principles (React/Vite)",
      "Docker Fundamentals"
    ]
  },
  {
    category: "AI",
    description: "Leveraging generative models, prompt design, and AI workflows for product value.",
    skills: [
      "Prompt Engineering",
      "AI Evaluation & Rubrics",
      "AI-Assisted Discovery & PRD Gen",
      "Agentic Workflows",
      "Responsible AI & Bias Auditing",
      "Human-In-The-Loop Design"
    ]
  },
  {
    category: "Design / Product Tools",
    description: "Artifact creation, process documentation, and user experience mapping.",
    skills: [
      "Figma Wireframing",
      "Process & Swimlane Mapping",
      "User Journey Mapping",
      "Sequence Diagrams",
      "Notion & Jira System Setup"
    ]
  },
  {
    category: "Automation",
    description: "Streamlining knowledge work and operational bottlenecks.",
    skills: [
      "Workflow Automation",
      "AI Automation Pipelines",
      "Process Optimization",
      "Knowledge Base Structuring",
      "Automated Reporting"
    ]
  }
];
