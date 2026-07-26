import { CaseStudy, SelectedProject } from '../types';

export const caseStudies: CaseStudy[] = [
  {
    id: "transfer-service-improvement",
    title: "Payments & Transfer Service Reliability Optimization",
    subtitle: "Improving transfer success rate from ~85% to 96% and reducing confirmation latency from ~50s to ~10s via Event-Driven Webhooks.",
    company: "Kongapay",
    period: "2024 – 2026",
    role: "Product Manager",
    tags: ["Fintech", "Payments", "Technical Product", "Product Strategy"],
    isFeatured: true,
    summary: "Transfers experienced high failure rates and frustrating delays due to rigid cron-based status polling. I led the technical product overhaul to transition to an event-driven webhook architecture with intelligent fallback routing.",
    impactMetrics: [
      { label: "Success Rate", value: "85% → 96%" },
      { label: "Confirmation Time", value: "~50s → ~10s" },
      { label: "Support Tickets", value: "-42%" }
    ],
    problem: "Customers experienced high transfer drop-offs, delayed receipt confirmations (taking up to 60 seconds), and frequent failed transactions when bank gateways experienced transient blips. Cron-based polling was overwhelming downstream endpoints.",
    context: "The platform processed thousands of daily inter-bank money transfers. Over 15% of transactions ended in timeout or pending states, causing support overhead and eroding user trust in time-sensitive transfers.",
    usersAndStakeholders: [
      "Retail and Business Banking Users needing instant transfer confirmation",
      "Customer Support Engineers inundated with pending transfer tickets",
      "Finance & Reconciliation Teams matching settlement logs",
      "Backend Payment Engineers"
    ],
    businessObjective: "Achieve sub-10 second transaction confirmation times and lift transfer success rate above 95% without increasing processing costs.",
    productChallenge: "Balancing strict bank partner API limits with real-time user expectations. Switch from passive scheduled polling to event-driven architecture while accommodating legacy partner banks.",
    approach: [
      "Audited historical payment logs to classify failure causes (timeout vs insufficient funds vs gateway drop).",
      "Designed an Event-Driven specification for transaction confirmation and processing.",
      //"Engineered a dynamic smart fallback router that automatically re-routes failed transfers through secondary payment rails upon initial gateway timeout.",
      "Implemented exponential backoff polling strictly as a secondary fallback for non-webhook banks."
    ],
    keyDecisions: [
      {
        decision: "Adopt Event-Driven Architecture with Webhooks over aggressive polling.",
        rationale: "Webhooks notify our system within milliseconds of a bank status change, reducing network overhead and eliminating cron delay.",
        tradeOff: "Requires strict signature verification and idempotent payload processing to prevent duplicate credits."
      },
      {
        decision: "Implement multi-rail fallback routing within 1 minute window.",
        rationale: "If Primary service A yields no acknowledgment in 1 minute, route transaction through cronjob.",
        tradeOff: "Slightly higher processing time on secondary cronjob, but significantly increases completion rate and customer retention."
      }
    ],
    diagramType: "event-driven",
    solution: "A high-reliability transfer orchestration layer featuring event-driven processing, automated idempotent retries, dynamic processor failover, and a transparent user status progress indicator.",
    outcome: "Successfully elevated transfer completion rates from 85% to 96%. Reduced average transaction confirmation duration from 40-60 seconds down to ~10 seconds, drastically minimizing customer dissatisfaction and support volume.",
    metrics: [
      "Transfer Success Rate: 85% → 96%",
      "Average Latency: ~50s → ~10s",
      "Customer Support Disputes: Reduced by 42%",
     // "Gateway Throughput Capacity: Increased 3x without API throttling"
    ],
    lessonsLearned: [
      "In payments, velocity without idempotency is dangerous. Always design for idempotent callback handling.",
      "Customer trust isn't just about speed; clear status communication during pending windows reduces user panic.",
      "Technical debt in payment rails compounding into user-facing failures requires joint PM-Engineering ownership."
    ]
  },
  {
    id: "it-asset-management",
    title: "Enterprise IT Asset Management System",
    subtitle: "Structuring asset lifecycle tracking, automated inventory auditing, and ISO 20000-1 service management workflows.",
    company: "Enterprise IT / TM30",
    period: "Operations & Tech Initiative",
    role: "Product Manager",
    tags: ["Operations", "Product Strategy", "Technical Product"],
    isFeatured: true,
    summary: "Transformed fragmented hardware and software license tracking into a centralized, automated IT Asset Management system aligned with ISO 20000-1 service standards.",
    impactMetrics: [
      { label: "ISO Certification", value: "ISO 20000-1 Aligned" },
      { label: "Unaccounted Assets", value: "18% → <1%" },
      { label: "Audit Prep Time", value: "-75%" }
    ],
    problem: "Laptops, servers, cloud credentials, and software licenses were tracked in manual spreadsheets, creating security risks, ghost asset costs, and compliance audit failures.",
    context: "As the company expanded across multiple locations, IT teams lacked clear visibility into asset ownership, maintenance schedules, depreciation, and decommission cycles.",
    usersAndStakeholders: [
      "IT Support Technicians and System Administrators",
      "Finance Teams tracking asset depreciation and procurement",
      "Security & Compliance Auditors",
      "Employees onboarding and returning equipment"
    ],
    businessObjective: "Establish a single source of truth for all IT assets, reduce operational losses, and fulfill ISO 20000-1 IT Service Management System requirements.",
    productChallenge: "Creating an asset lifecycle workflow that enforces accountability without burdening IT staff with excessive data entry.",
    approach: [
      "Mapped asset lifecycle states: Procurement → Tagged → Assigned → In-Repair → Retired.",
      "Designed QR code scanning integration for rapid physical inventory audits via mobile camera.",
      "Built automated check-in/check-out approvals linked to HR employee status changes (onboarding/offboarding).",
      "Configured automated license expiration alerts and depreciation calculation engines."
    ],
    keyDecisions: [
      {
        decision: "Mandatory QR code physical scan verification during quarterly audits.",
        rationale: "Eliminated 'ghost assets' where equipment was claimed to be present but actually lost or damaged.",
        tradeOff: "Requires brief manual scanning effort per quarter, offset by complete audit confidence."
      }
    ],
    diagramType: "asset-lifecycle",
    solution: "A centralized IT Asset Management platform featuring barcode/QR tracking, automated HR sync, license compliance monitors, and ISO 20000-1 audit reporting.",
    outcome: "Reduced unaccounted assets from 18% to under 1%, cut internal audit preparation time by 75%, and successfully supported ISO 20000-1 certification.",
    metrics: [
      "Unaccounted Assets: Reduced from 18% to <1%",
      "Audit Readiness Time: Reduced from 2 weeks to 2 days",
      "License Over-allocation Savings: Cut unused SaaS seat expenditure by 22%",
      "Standardization: Achieved ISO 20000-1 audit compliance"
    ],
    lessonsLearned: [
      "Process workflows fail if they don't integrate directly into daily habits (e.g. HR onboarding triggers).",
      "Audit readiness should be a continuous background state, not a panic-driven quarterly scramble."
    ]
  },
  
  {
    id: "fraud-analyzer-aml",
    title: "API-First AML & Fraud Detection System",
    subtitle: "Building a compliant real-time transaction monitoring & risk scoring engine adhering to Central Bank (CBN) requirements.",
    company: "Enterprise Fintech / TM30",
    period: "2023 – Present",
    role: "Product Manager (Technical & Regulatory)",
    tags: ["Fintech", "Product Strategy", "Technical Product", "Operations"],
    isFeatured: false,
    summary: "To satisfy strict Central Bank regulatory standards and prevent illicit financial flows, I led the product strategy for an API-first Fraud Analyzer & AML risk engine with customizable rules and automated alert workflows.",
    impactMetrics: [
      { label: "Compliance Rate", value: "100% CBN Compliant" },
      { label: "False Positive Reduction", value: "35%" },
      { label: "Alert Resolution Speed", value: "2.5x Faster" }
    ],
    problem: "Financial institutions faced heavy regulatory penalties and fraud risks due to slow batch-processed AML checks and high false-positive alert rates that bogged down compliance teams.",
    context: "Central Bank regulations mandate real-time transaction monitoring, velocity limit enforcement, PEP (Politically Exposed Persons) checks, and immediate reporting of suspicious transactions above statutory thresholds.",
    usersAndStakeholders: [
      "Chief Compliance Officers (CCOs) and AML Analysts",
      "Risk Operations & Fraud Investigation Teams",
      "API Integration Partners & Core Banking Developers",
      "Internal Audit & Regulatory Inspectors"
    ],
    businessObjective: "Create an enterprise-grade, low-latency AML/Fraud engine API capable of evaluating incoming transactions in under 200 milliseconds without interrupting legitimate user transfers.",
    productChallenge: "Designing a flexible rule builder that compliance officers (non-technical users) can adjust without requiring code deployments, while maintaining microsecond evaluation speed during peak payment loads.",
    approach: [
      "Conducted discovery sessions with AML compliance officers to categorize top fraud patterns (structuring, sudden account velocity spikes, foreign IP logins).",
      "Defined API schema specifications for request payloads (`/v1/fraud/evaluate`) and webhook alert notifications.",
      "Designed a risk scoring framework (0–100 score) triggering 3 automated actions: Pass, Hold for Manual Review, or Decline.",
      "Built a unified Compliance Dashboard featuring audit trails, alert queues, and case management tools."
    ],
    keyDecisions: [
      {
        decision: "Rule Engine decoupled from Core Payment Loop via asynchronous scoring.",
        rationale: "Prevents fraud check delays from blocking standard transaction processing while allowing complex multi-variable analysis.",
        tradeOff: "Requires immediate hold mechanisms on suspicious accounts before payout dispatch."
      },
      {
        decision: "Configurable Risk Score Thresholds per Merchant Segment.",
        rationale: "E-commerce merchants have different velocity norms compared to micro-finance retail accounts.",
        tradeOff: "Increased configuration options required intuitive UI guardrails to prevent misconfiguration."
      }
    ],
    diagramType: "fraud-api",
    solution: "An API-first Fraud & AML system featuring real-time risk scoring, customizable rule builder, automated SAR (Suspicious Activity Report) draft generation, and seamless compliance case management.",
    outcome: "Achieved 100% compliance with CBN regulatory mandates, reduced false positive flags by 35% through weighted rule scoring, and accelerated manual alert review times by 2.5x.",
    metrics: [
      "Regulatory Audit Status: 100% Pass Rate",
      "Evaluation Latency: <180ms per transaction payload",
      "False Positive Reduction: 35%",
      "Fraud Detection Rate: Caught 98.4% of synthetic identity & velocity anomalies"
    ],
    lessonsLearned: [
      "Compliance products succeed when they empower compliance teams rather than create opaque black boxes.",
      "Clear audit logging is as critical as the scoring algorithm itself when regulators inspect decision trees.",
      "Simple rule combinations often outperform overly complex ML models in early-stage fintech environments."
    ]
  },
  {
    id: "ksave-digital-savings",
    title: "K-Save: Automated Goal-Based Digital Savings Product",
    subtitle: "Scaling a fintech savings product to ~₦2 Billion in deposits within its first year through automated recurring debits and goal locking.",
    company: "KongaPay",
    period: "Fintech Initiative",
    role: "Product Manager",
    tags: ["Fintech", "Product Strategy", "UX", "Payments"],
    isFeatured: false,
    summary: "Conceptualized and executed K-Save, a disciplined digital savings module integrated into the payment app, empowering users to set automated recurring savings plans with competitive yields.",
    impactMetrics: [
      { label: "1st Year Deposits", value: "₦2+ Billion" },
      { label: "Monthly Active Savers", value: "45,000+" },
      { label: "User Retention", value: "+28%" }
    ],
    problem: "App users kept liquid funds in non-interest accounts, missing opportunities to build long-term wealth, while the business sought to improve user retention and lower cost of funds.",
    context: "Digital consumers needed low-friction ways to save towards specific goals (rent, business capital, emergency funds) without complex paperwork or manual monthly transfer friction.",
    usersAndStakeholders: [
      "Young professionals and micro-entrepreneurs saving for milestones",
      "Treasury Management Team managing yield and liquidity pools",
      "Growth Marketing Team driving deposit acquisition",
      "Mobile App UX Designers"
    ],
    businessObjective: "Acquire high-intent depositors, increase 90-day retention rates, and build a sustainable ₦1B+ deposit balance within 12 months.",
    productChallenge: "Designing a debit consent and auto-save trigger that accounts for irregular income cycles without triggering failed card charge penalty fees.",
    approach: [
      "Ran user interviews identifying key savings barriers: lack of discipline, complicated withdrawal penalties, and tedious setup.",
      "Designed a 3-tap onboarding flow with customizable target rules (Daily, Weekly, Monthly auto-debit).",
      "Built 'Target Save' (locked goal) vs 'Flexi Save' (instant access) tier structures with clear compound interest calculators.",
      "Configured automated SMS/push smart notifications prior to auto-debit dates."
    ],
    keyDecisions: [
      {
        decision: "Introduce flexible emergency unlock options with partial interest forfeitures.",
        rationale: "Strict total locks caused anxiety; allowing partial unlocks with clear fee disclosures increased user confidence to deposit larger amounts.",
        tradeOff: "Slightly higher withdrawal liquidity volatility, offset by significantly higher initial deposit sizes."
      }
    ],
    diagramType: "savings-growth",
    solution: "An intuitive mobile savings experience featuring automated card/account recurring debits, visual goal trackers, compound yield visualizers, and flexible lock periods.",
    outcome: "K-Save exceeded business forecasts, achieving ₦2+ Billion in cumulative deposits in its first year while boosting overall app user retention by 28%.",
    metrics: [
      "Cumulative Deposits: ₦2 Billion+ in Year 1",
      "User Adoption: 45,000+ active automated plans",
      "Retention Impact: 90-day user retention increased by 28%",
      "Average Deposit per User: Increased by 3.4x over 6 months"
    ],
    lessonsLearned: [
      "Behavioral nudges (like goal visualizers) are as important as financial incentives (interest rates).",
      "Pre-debit notifications build trust and drastically reduce chargeback disputes.",
      "Simplicity in interest calculation disarm user skepticism about hidden financial fees."
    ]
  },
  {
    id: "kongapay-merchant-pos",
    title: "KongaPay Merchant Payments & POS Solution",
    subtitle: "Scaling digital merchant acceptance to ₦100 Million transaction volume in 4 months through frictionless onboarding and instant settlement.",
    company: "KongaPay",
    period: "Fintech Initiative",
    role: "Product Manager",
    tags: ["Fintech", "Payments", "Operations", "Technical Product"],
    isFeatured: true,
    summary: "Designed and launched merchant payment acceptance features and POS terminal synchronization for retail storefronts, removing onboarding bottlenecks and enabling instant settlement.",
    impactMetrics: [
      { label: "4-Month Volume", value: "₦100 Million" },
      { label: "Onboarding Time", value: "48h → 15 mins" },
      { label: "Merchant POS Adoption", value: "1,200+ Stores" }
    ],
    problem: "Retail merchants struggled with delayed payment settlements, complex POS hardware setup, and fragmented reporting across online checkout and physical stores.",
    context: "SMEs required reliable, low-cost card & transfer acceptance tools with immediate transaction visibility and same-day liquidity to restock inventory.",
    usersAndStakeholders: [
      "Retail store owners and cashiers",
      "Merchant Sales & Field Onboarding Operations",
      "Settlement & Finance Teams",
      "Hardware POS Vendor Engineers"
    ],
    businessObjective: "Capture retail payment volume by delivering a unified merchant app, fast POS terminal provisioning, and automated daily settlements.",
    productChallenge: "Synchronizing offline Android POS terminal state with cloud settlement servers in areas with unstable cellular connectivity.",
    approach: [
      "Mapped the end-to-end merchant journey from paper-heavy KYC to digital self-onboarding.",
      "Specified merchant portal features: real-time sales feed, transaction breakdown, staff cashier access controls, and QR code payments.",
      "Integrated terminal SDKs to support card dip, contactless NFC, and bank transfer on POS screen."
    ],
    keyDecisions: [
      {
        decision: "Implement 'Pay-via-Transfer on POS' with real-time audio/screen notification.",
        rationale: "Card failure rates at stores were high; instant transfer confirmation directly on the POS terminal solved cashier uncertainty.",
        tradeOff: "Required dedicated virtual account generation per POS transaction."
      }
    ],
    diagramType: "merchant-pos",
    solution: "A unified merchant ecosystem providing fast digital KYC, physical/Android POS terminal acceptance, dynamic virtual accounts for transfers, and automated settlement reports.",
    outcome: "Scaled merchant transaction volume to ₦100 Million within the first 4 months of rollout, onboarding over 1,200 retail merchants.",
    metrics: [
      "Transaction Volume: ₦100 Million in 4 Months",
      "Merchant Onboarding Speed: Reduced from 2 days to under 15 minutes",
      "Terminal Reliability: 99.1% uptime on payment callbacks",
      "Active Merchants: 1,200+ store deployments"
    ],
    lessonsLearned: [
      "In retail payment acceptance, speed at the checkout counter is the single most critical metric.",
      "Cashiers—not just business owners—are key product users; design UI specifically for high-stress cashier shifts."
    ]
  },
  
  {
    id: "bill-payment-reconciliation",
    title: "Digital Banking Bill Payment & Automated Reconciliation",
    subtitle: "Managing utility transaction lifecycles across success, pending, failed, and reversed states with real-time risk handling.",
    company: "Easy Bill / Digital Banking",
    period: "2023 – 2024",
    role: "Product Manager",
    tags: ["Fintech", "Payments", "UX", "Operations"],
    isFeatured: false,
    summary: "Architected transaction lifecycle rules and automated reconciliation for airtime, data, electricity, and cable TV bill aggregation APIs to handle pending vendor states cleanly.",
    impactMetrics: [
      { label: "Pending Resolution", value: "<15 mins" },
      { label: "Auto-Reversal Rate", value: "99.8%" },
      { label: "Support Escalations", value: "-35%" }
    ],
    problem: "Utility aggregator APIs frequently left transactions in 'Pending' states due to third-party provider timeouts. Customers were debited without receiving power tokens or airtime, triggering intense support friction.",
    context: "Bill payment platforms rely on multi-tier aggregator APIs (DISCOs, Telcos) where downtime on vendor servers can cause asynchronous fulfillment drops.",
    usersAndStakeholders: [
      "Consumers paying utility bills under tight deadlines",
      "Customer Care Support Team fielding failed transaction queries",
      "Finance & Settlement Operations performing vendor balance match",
      "Third-party Utility Aggregator Engineers"
    ],
    businessObjective: "Eliminate customer anxiety during bill payment delays through automated status polling, instant fallback refund logic, and clear status UX.",
    productChallenge: "Distinguishing between a temporarily delayed fulfillment and a permanently failed vendor response to avoid double token issuance or double debits.",
    approach: [
      "Mapped complete transaction state matrix: `INITIATED`, `DEBITED`, `VENDOR_SUBMITTED`, `SUCCESS`, `PENDING_RETRY`, `FAILED_REFUNDED`.",
      "Designed an automated status polling engine that queries vendor endpoints every 30 seconds for up to 5 minutes.",
      "Implemented automated auto-reversal logic: if vendor status remains unconfirmed after 5 minutes, refund user wallet immediately and log asynchronous reconciliation ticket."
    ],
    keyDecisions: [
      {
        decision: "Automated wallet refund after 5-minute unconfirmed vendor timeout.",
        rationale: "Holding customer funds hostage while waiting for third-party DISCO recovery destroys user trust; instant refunds with clear status updates build long-term loyalty.",
        tradeOff: "Requires handling rare late token delivery where vendor fulfills after refund."
      }
    ],
    diagramType: "bill-reconciliation",
    solution: "A robust bill payment transaction manager featuring state machine monitoring, 5-minute auto-reversals, clear electricity token display UX, and automated vendor balance reconciliation.",
    outcome: "Reduced pending bill disputes by 35%, achieved 99.8% automated reversal accuracy for failed utility requests, and drastically boosted customer satisfaction.",
    metrics: [
      "Auto-Reversal Accuracy: 99.8%",
      "Customer Support Ticket Reduction: 35%",
      "Average Utility Token Delivery: <12 seconds for successful API calls",
      "Reconciliation Efficiency: Daily vendor balance variance reduced to 0.01%"
    ],
    lessonsLearned: [
      "Always design for the unhappy path in utility aggregation; third-party APIs will fail when you least expect.",
      "Clear, transparent state messages ('Contacting DisCo... Token incoming') prevent panicking users from retrying multiple times."
    ]
  }
];

export const selectedProjects: SelectedProject[] = [
  /*
  {
    id: "paytent",
    title: "Paytent",
    category: "Fintech / Digital Payments",
    role: "Product Strategy & Technical PM",
    description: "Digital payment solution focused on flexible payout schedules and API integration for creators and small business vendors.",
    highlights: ["API payload specification", "Payout rule engine", "Vendor portal UX"]
  },
  */
  {
    id: "easy-bill",
    title: "Easy Bill Platform",
    category: "Utility Aggregation",
    role: "Product Manager",
    description: "Multi-channel bill payment platform supporting airtime, mobile data, electricity DISCOs, and TV subscriptions.",
    highlights: ["Aggregator API integration", "Auto-reconciled ledgers", "Sub-15s execution"]
  },
  {
    id: "easyget",
    title: "EasyGet",
    category: "E-Commerce & Digital Fulfillment",
    role: "Product Lead",
    description: "Simplified digital voucher and inventory fulfillment system for retail consumers.",
    highlights: ["Instant code generation", "Inventory lock mechanisms", "Mobile checkout"]
  },
 /* {
    id: "autogig",
    title: "Autogig",
    category: "Product & Operations",
    role: "Product Manager",
    description: "Service marketplace connecting automotive technicians with car owners requiring verified maintenance.",
    highlights: ["Service booking workflow", "Rating & review system", "Job status tracker"]
  }, */
  /*
  {
    id: "savora",
    title: "Savora",
    category: "Digital Ordering Experience",
    role: "Product & UX Lead",
    description: "Digital menu and contactless table ordering application designed for hospitality businesses.",
    highlights: ["QR code table mapping", "Kitchen ticket display", "Contactless bill pay"]
  },
  */
  {
    id: "alluring",
    title: "Alluring",
    category: "Lifestyle / E-Commerce",
    role: "Product & Web Developer",
    description: "Bespoke digital storefront with personalized product recommendation flows and seamless checkout.",
    highlights: ["Custom filtering UI", "Conversion optimization", "Responsive design"]
  }
];
