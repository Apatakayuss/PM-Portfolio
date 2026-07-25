import { MetricItem, CareerExperience, SkillGroup } from '../types';

export const personalInfo = {
  name: "Abdulazeez Apata",
  title: "Product Manager | Fintech & Payments | AI & Automation | Product Strategy",
  email: "Apatakayuss@gmail.com",
  location: "Lagos, Nigeria",
  linkedin: "https://www.linkedin.com/in/abdulazeez-apata-5481a5118/",
  github: "https://github.com/Apatakayuss",
  medium: "https://medium.com/@Officialapata",
  twitter: "https://x.com/OfficialApata",
  headline: "Product Manager building better products at the intersection of fintech, payments, AI, and automation.",
  heroBio: "I work on complex products and systems, turning ambiguous problems into clear product strategies, structured requirements, and scalable solutions. My work spans fintech, payments, financial infrastructure, AI-enabled workflows, automation, and digital products.",
  aboutStory: {
    whoIAm: "I am a Product Manager who thinks in systems. ",
    howIBecamePM: "My journey started with a background in Biochemistry and a Master of Public Health, which trained me in rigorous analytical methodologies, scientific observation, and population-level system dynamics. Transitioning into software engineering as a Frontend Web Developer at Adanian Labs, I discovered my deep passion for product strategy, system architecture, and customer problem-solving, leading me directly into Technical Product Management.",
    howIThink: "I am a Product Manager who thinks in systems.\n\nI look beyond the feature or interface in front of the user to understand the processes, dependencies, technology, and operational realities underneath it. I believe a product can only be truly successful when the experience works for the user, the system works reliably, and the business can sustain it.\n\nMy approach starts with clear problem framing. I focus on understanding what is actually broken, identifying where friction and manual bottlenecks exist, and creating clarity before moving into execution. I care about the details of how systems behave—not just when everything goes right, but also when transactions fail, dependencies go down, processes break, or users take unexpected paths.\n\nUltimately, I try to build products that are **useful to users, reliable in operation, and valuable to the business.**", 
    whyFintech: "Financial infrastructure and payment routing present fascinating engineering and regulatory challenges. Ensuring a transaction succeeds in seconds requires alignment across APIs, banks, compliance engines, and user psychology.",
    howAIChangesWork: "I don't treat AI as a content generator; I treat it as a cognitive lever. From synthesizing raw feedback data to automating PRD drafts, evaluating LLM accuracy, and crafting automated workflow pipelines, AI enables me to operate with high velocity and strategic clarity."
  },
  education: [
    {
      degree: "Master of Public Health (MPH)",
      institution: "Ahmadu Bello University",
      focus: "Analytical Methods & Health Systems"
    },
    {
      degree: "Bachelor of Science (B.Sc.) in Biochemistry",
      institution: "University of Ilorin",
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
    number: "₦100M",
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
      "Lead product development for an IT Asset Management System, a telecom asset and identity management platform, defining product requirements, user stories, and roadmap in partnership with engineering,operations, and compliance stakeholders.",
      "Provide product leadership across three concurrent product workstreams, setting strategic priorities, resolving cross-functional dependencies, managing competing stakeholder needs, and serving as the primary point of accountability for successful product delivery.",
      "Produce enterprise-grade product documentation, including Functional Requirements Documents, Product Requirements Documents, user stories, acceptance criteria, and process flows to enable disciplined Agile execution across distributed engineering teams.",
      "Conduct market research and competitive analysis across the Nigerian fintech landscape to identify opportunities in digital banking, payments, merchant services, identity verification, and financial infrastructure.",
      "Partner closely with engineering, compliance, operations, and business stakeholders to align product delivery with regulatory requirements, operational objectives, and organizational strategy",
      "Drive backlog prioritization, sprint planning, and release planning, ensuring engineering efforts remain aligned with business priorities, regulatory deadlines, and customer needs."
    ],
    skillsUsed: ["Product Strategy", "API Design", "Fintech Infrastructure", "AI Workflows", "System Requirements"]
  },

   {
    id: "kongapay",
    title: "Product Manager",
    company: "KongaPay",
    period: "August 2024 – January 2026",
    location: "Lagos, Nigeria",
    description: "Worked on merchant payment acceptance, POS integration, and consumer digital wallet features.",
    achievements: [
      "Own product strategy and delivery for payment, transfer, and financial services products, collaborating with Engineering, Operations, Compliance, and Commercial teams to improve customer and merchant experiences.",
      "Led enhancements to payment and transfer infrastructure by monitoring transaction success rates, identifying integration failures, investigating production issues, and prioritizing reliability improvements, resulting in an 11% increase in service efficiency",
      "Partnered closely with backend and platform engineering teams to define API requirements, improve service integrations, optimize transaction processing workflows, and reduce system bottlenecks affecting transaction performance.",
      "Drove the end-to-end development and launch of K-Save from concept to market, defining product requirements, customer journeys, operational processes, and go-to-market strategy, contributing to over two billion in transaction volume within its first year.",
      "Collaborated with internal stakeholders to streamline operational workflows, improve issue resolution processes, and support scalable service delivery across payment and banking products.",
      "Worked with engineering teams on platform scalability, service resilience, and architecture decisions supporting growth, regulatory compliance, and operational reliability"
    ],
    skillsUsed: ["Savings Products", "Merchant Payments", "POS Flows", "KYC & Compliance", "User Journeys"]
  },
  {
    id: "easybill",
    title: "Product Manager",
    company: "Easy Bill",
    period: "February 2023 – August 2024",
    location: "Lagos, Nigeria",
    description: "Managed end-to-end product lifecycle for digital bill payment, utility aggregation, and instant settlement systems.",
    achievements: [
      "Managed the end-to-end product lifecycle for key bill payment and utility services, delivering features that improved user satisfaction and contributed to recurring revenue growth.",
      "Collaborated with engineering teams to manage and optimize integrations with third-party biller and payment APIs, improving transaction reliability, response handling, and service uptime.",
      "Collaborated with leadership to define product KPIs and align feature prioritization with quarterly revenue goals",
      "Worked with operations and customer support teams to identify service issues, prioritize enhancements, and reduce customer friction across bill payment journeys.",
      "Drove alignment across engineering, operations, and leadership through structured roadmap and review sessions.",
      "Advocated for a data-informed product culture, implementing usage analytics and performance tracking to identify friction points and improve customer retention."
    ],
    skillsUsed: ["Bill Payments", "Transaction Lifecycle", "Reconciliation", "User Story Mapping", "Postman"]
  },
 
  {
    id: "adanian",
    title: "Frontend Web Developer",
    company: "Adanian Labs",
    period: "July 2022 – February 2023",
    description: "Built responsive web applications, interactive UI dashboards, and reusable frontend components.",
    achievements: [
      "Collaborated with product and design teams to translate user requirements into intuitive, responsive web interfaces that improved usability and adoption.",
      "Applied modern front-end technologies to deliver scalable, high-performing applications across multiple devices.",
      "Provided technical input during product feasibility reviews, bridging the gap between engineering constraints and product intent.",
      "Developed a strong understanding of engineering workflows and technical feasibility, shaping a foundation for data-informed product decision-making",
      "Gained foundational experience with API integrations, front-end consumption of backend services, and cross-system data flows"
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
