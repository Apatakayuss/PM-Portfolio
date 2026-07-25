import { AutomationProject } from '../types';

export const aiFrameworkCategories = [
  {
    id: "discovery",
    title: "A. AI-Assisted Product Discovery",
    tagline: "Accelerating qualitative research, competitive synthesis, and problem framing.",
    description: "Using LLMs to rapidly cluster user interviews, map market patterns, and synthesize messy feedback into structured opportunity trees without losing raw sentiment.",
    examples: [
      "Customer Interview Sentiment Clustering: Ingesting 50+ transcript text files and extracting top 5 recurring pain points categorized by user segment.",
      "Competitive Intelligence Digesting: Ingesting rival feature release notes and generating side-by-side gap analysis matrix.",
      "Problem Framing & Reframing: Generating 'How Might We' (HMW) prompts based on raw customer friction logs."
    ]
  },
  {
    id: "documentation",
    title: "B. AI-Assisted Product Documentation",
    tagline: "Transforming raw feature notes into standardized, comprehensive PRDs & FRDs.",
    description: "Structuring requirement generation with custom prompts that enforce completeness, edge-case coverage, user acceptance criteria, and API payload definitions.",
    examples: [
      "PRD/FRD Drafting Engine: Converting bullet-point feature briefs into standard 12-section PRD drafts complete with assumptions and risks.",
      "User Story & Gherkin Generator: Automatically expanding high-level requirements into 'Given-When-Then' acceptance criteria.",
      "Edge-Case Identification: Prompting LLMs with API specs to reveal missing error handlers, timeout states, and boundary conditions."
    ]
  },
  {
    id: "analysis",
    title: "C. AI-Assisted Product Analysis",
    tagline: "Uncovering root causes, metric anomalies, and risk vectors in product datasets.",
    description: "Applying natural language queries over product event logs, transaction failure reports, and drop-off analytics to form diagnostic hypotheses quickly.",
    examples: [
      "Transaction Log Anomaly Diagnosis: Analyzing payment failure error code frequency to identify gateway outage patterns.",
      "Churn Feedback Categorization: Parsing open-ended cancellation reasons into actionable operational categories.",
      "Risk Matrix Generation: Evaluating proposed system changes against security, compliance, and operational vulnerability dimensions."
    ]
  },
  {
    id: "evaluation",
    title: "D. AI Evaluation & Human-In-The-Loop",
    tagline: "Rigorously benchmarking model outputs for accuracy, hallucination, and bias.",
    description: "Product management for AI demands clear evaluation criteria. I establish scoring rubrics to benchmark model responses before deploying automated workflows.",
    examples: [
      "Hallucination Auditing: Comparing AI-generated meeting summaries against raw transcripts using ground-truth checklists.",
      "Evaluation Rubric Design: Scoring outputs across 4 dimensions: Faithfulness, Relevance, Completeness, and Tone.",
      "Human Guardrails: Designing UI patterns where human approval is required prior to executing sensitive external actions (e.g. sending client emails or changing system states)."
    ]
  },
  {
    id: "development",
    title: "E. AI Product Development",
    tagline: "Building AI-native workflows, agentic pipelines, and responsible AI guardrails.",
    description: "Understanding prompt architecture, context window optimization, tool-use/function-calling, and building software where AI serves as an active assistant.",
    examples: [
      "Agentic Task Routing: Directing user intent queries to specific tool endpoints based on structured JSON outputs.",
      "Prompt Engineering Architecture: Few-shot prompting, system message constraints, and schema enforcement via Structured Outputs.",
      "Responsible AI Frameworks: Establishing data privacy protocols to ensure user PII is redacted prior to model API submission."
    ]
  }
];

export const automationProjects: AutomationProject[] = [
  {
    id: "meeting-summary",
    title: "Daily Product Meeting & Action Item Automation",
    status: "Built",
    category: "Workflow Automation",
    description: "Automatically transcribes meeting audio, extracts key product decisions, assigns action item owners with deadlines, and posts structured summaries directly to Slack/Notion.",
    manualProcess: "Product Manager spending 30–45 minutes after every call manually re-listening to recordings, drafting notes, and typing Slack action item lists.",
    trigger: "Product Sync or Architecture Call recording finishes.",
    aiTask: "Parse transcript, filter filler speech, extract decisions, identify owners and explicit deadlines, format in structured markdown.",
    workflow: [
      { step: "trigger", label: "Meeting Ends", detail: "Zoom/Google Meet recording webhook triggers server function." },
      { step: "ai-processing", label: "LLM Extraction", detail: "Transcript ingested with strict extraction prompt to isolate decisions & tasks." },
      { step: "decision", label: "Confidence Check", detail: "Verify if action items have assigned owners and valid dates." },
      { step: "action", label: "Multi-Channel Post", detail: "Format markdown summary and dispatch to Slack channel & Notion database." },
      { step: "output", label: "Structured Summary", detail: "Team receives clear action items within 3 minutes of call end." }
    ],
    toolsUsed: ["Otter/Whisper API", "Gemini API", "Zapier / Make", "Slack Webhook", "Notion API"],
    actionTaken: "Automatically populates project board with tagged action items and sends formatted summary digest to channel.",
    expectedOutcome: "Zero manual note-taking overhead; immediate team alignment on commitments.",
    timeSaved: "3–5 hours per week across product & engineering syncs.",
    humanInTheLoop: "PM reviews automatically created Notion tasks during daily standup.",
    failureHandling: "If transcript quality is below 70% confidence, notifies PM with raw text highlight for 1-click manual edit."
  },
  {
    id: "prd-documentation",
    title: "Requirements to PRD/FRD Drafting Engine",
    status: "Built",
    category: "Product Documentation",
    description: "Ingests raw feature notes, customer request logs, and technical constraints to automatically assemble structured PRD drafts with edge cases and Gherkin user stories.",
    manualProcess: "Writing 10-page PRD specifications from scratch, taking 4–6 hours per feature.",
    trigger: "PM submits bulleted feature brief form in Notion/Jira.",
    aiTask: "Analyze feature brief against PRD schema template. Generate background, user stories, acceptance criteria, error handling states, and non-functional requirements.",
    workflow: [
      { step: "trigger", label: "Brief Submitted", detail: "Form submission sends structured JSON payload." },
      { step: "ai-processing", label: "PRD Schema Generation", detail: "AI fills 10 standardized PRD sections, identifying missing technical assumptions." },
      { step: "decision", label: "Completeness Score", detail: "Check if all API endpoints and user personas are referenced." },
      { step: "action", label: "Draft Document Created", detail: "Generates formatted Google Doc / Notion PRD draft." },
      { step: "output", label: "80% Complete PRD", detail: "PM reviews draft, fills specific domain nuances, and flags for engineering review." }
    ],
    toolsUsed: ["Gemini 1.5 Pro", "Notion API", "Google Docs API", "Python / Node Script"],
    actionTaken: "Creates document draft, tags engineering lead, and highlights sections requiring technical confirmation.",
    expectedOutcome: "Cuts PRD drafting time from 5 hours to 45 minutes of review and refinement.",
    timeSaved: "4 hours per major feature specification.",
    humanInTheLoop: "PM must review and sign off on all requirements before engineering kickoff.",
    failureHandling: "Missing technical details are highlighted in yellow inline callouts asking PM specific clarifying questions."
  },
  {
    id: "feedback-analysis",
    title: "Customer Feedback & Support Ticket Classifier",
    status: "Built",
    category: "Product Intelligence",
    description: "Continuous ingestion pipeline that classifies incoming support tickets, App Store reviews, and NPS surveys by product feature, sentiment, and severity.",
    manualProcess: "Monthly manual reading of 1,000+ support tickets to tally top complaints on spreadsheets.",
    trigger: "New support ticket closed in Zendesk or new App Store review published.",
    aiTask: "Categorize ticket by topic (Payment Failure, Login Issue, UI Bug), assign sentiment score (-1 to +1), and flag urgent system bugs.",
    workflow: [
      { step: "trigger", label: "New Feedback Item", detail: "Webhook fires upon new ticket or review creation." },
      { step: "ai-processing", label: "Multi-Label Classification", detail: "Classifies feedback into product module, sub-category, and severity tier." },
      { step: "decision", label: "Severity Check", detail: "If severity = Critical (e.g. money lost), escalate immediately." },
      { step: "action", label: "Dashboard Ingestion", detail: "Log payload in feedback analytics database; alert Slack if threshold breached." },
      { step: "output", label: "Weekly Insight Digest", detail: "Auto-generated weekly chart showing top friction trends." }
    ],
    toolsUsed: ["Zendesk Webhook", "Gemini Flash API", "PostgreSQL / BigQuery", "Slack Bot"],
    actionTaken: "Populates live customer pain-point matrix and auto-routes critical bugs to on-call engineering.",
    expectedOutcome: "Real-time visibility into customer sentiment shifts without manual ticket reading.",
    timeSaved: "6 hours of monthly manual data tagging.",
    humanInTheLoop: "Support leads audit 5% sampled classifications weekly to verify AI accuracy.",
    failureHandling: "Uncategorized feedback falls back to 'General Review' queue for manual tagging."
  },
  {
    id: "competitive-intel",
    title: "Automated Competitive Intelligence Monitor",
    status: "Prototyped",
    category: "Market Research",
    description: "Monitors competitor changelogs, pricing page updates, and blog posts, synthesizing key strategic moves into a bi-weekly executive report.",
    manualProcess: "Infrequent, ad-hoc manual checking of 10+ competitor websites when time permits.",
    trigger: "Cron schedule triggers web scraping script every 72 hours.",
    aiTask: "Compare new web page snapshots against previous versions, filter minor typo changes, summarize meaningful feature additions or pricing shifts.",
    workflow: [
      { step: "trigger", label: "72h Scheduled Run", detail: "Automated script fetches competitor RSS feeds & changelog URLs." },
      { step: "ai-processing", label: "Diff Summarization", detail: "AI evaluates visual/text diffs to isolate true product changes." },
      { step: "decision", label: "Impact Analysis", detail: "Categorize change level: High (New Feature/Price change) vs Low (Blog post)." },
      { step: "action", label: "Report Assembly", detail: "Generate strategic brief comparing competitor move to our roadmap." },
      { step: "output", label: "Exec Slack Brief", detail: "Distributes clean 1-page digest to product leadership." }
    ],
    toolsUsed: ["Playwright Script", "Gemini 1.5 Flash", "Make.com", "Slack"],
    actionTaken: "Sends bi-weekly strategic intelligence digest with screenshots and impact assessments.",
    expectedOutcome: "Proactive awareness of market shifts without spending hours manually scanning competitor sites.",
    timeSaved: "2 hours per week of manual browsing.",
    humanInTheLoop: "PM validates strategic threat rating before presenting to leadership.",
    failureHandling: "If website blocks scraper, script logs retry alert and uses cached RSS feed."
  },
  {
    id: "knowledge-management",
    title: "Personal Knowledge Base & Article Synthesizer",
    status: "Experimented with",
    category: "Personal Productivity",
    description: "Converts saved articles, technical PDFs, and research papers into structured notes with tagged takeaways, stored in a searchable personal knowledge graph.",
    manualProcess: "Bookmarking dozens of articles that are never re-read or organized.",
    trigger: "User saves URL or uploads PDF via browser extension.",
    aiTask: "Extract core thesis, 3 key insights, actionable PM takeaways, and auto-tag by domain (Fintech, AI, UX, Strategy).",
    workflow: [
      { step: "trigger", label: "URL / PDF Saved", detail: "Browser extension passes content payload to processing server." },
      { step: "ai-processing", label: "Deep Synthesis", detail: "Generates concise executive summary, core arguments, and relevant tags." },
      { step: "decision", label: "Relevance Tagging", detail: "Map article concepts to active portfolio case studies & writing topics." },
      { step: "action", label: "Notion Knowledge Base Sync", detail: "Saves formatted record with search metadata." },
      { step: "output", label: "Instant Searchable Note", detail: "Available for instant recall when writing or designing new features." }
    ],
    toolsUsed: ["Readwise API", "Gemini API", "Notion API", "Chrome Extension"],
    actionTaken: "Populates structured personal wiki categorized by technical and product topics.",
    expectedOutcome: "Transmutes passive content consumption into an active, retrievable knowledge repository.",
    timeSaved: "10+ hours per month of research retrieval.",
    humanInTheLoop: "User adds personal reflection notes before finalizing the entry.",
    failureHandling: "Paywalled URLs trigger fallback request for user to paste selection text."
  }
];
