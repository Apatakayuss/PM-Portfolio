import { Article } from '../types';

export const articles: Article[] = [
  {
    id: "system-thinking-cron-event",
    title: "System Thinking in Product Design: From Cron Jobs to Event-Driven Architecture",
    subtitle: "Why technical architecture decisions directly govern user experience, transaction success rates, and customer anxiety.",
    category: "Product Management",
    date: "July 2026",
    readTime: "6 min read",
    isFeatured: true,
    excerpt: "When money transfers take 60 seconds to confirm, users panic. They refresh, double-tap, and open support tickets. How moving from batch polling to event-driven webhooks transformed our payment reliability and customer trust.",
    contentMarkdown: `
### The Unexpected Link Between Backend Architecture and User Anxiety

In digital financial products, speed is not merely a technical performance metric—it is the foundation of user trust. When a user sends money, every second spent watching a spinning loading indicator creates psychological friction. 

If the system takes 45 seconds to confirm whether a transfer succeeded, the user experiences acute anxiety: *Did my money disappear? Was I debited twice? Should I tap retry?*

For months, our transfer service operated on a classic **cron-based status polling model**. Every 30 seconds, a background worker polled partner bank endpoints to check if pending transfers had been credited. While computationally simple, this architectural pattern created two severe product issues:

1. **Artificial Latency:** A transfer that succeeded in 2 seconds at the destination bank might wait up to 28 seconds for the next cron cycle to update our UI.
2. **Throttling & Gateway Drop:** During peak evening hours, thousands of scheduled cron requests overwhelmed partner API rate limits, triggering HTTP 429 errors and cascading transaction drop-offs.

---

### Shift to Event-Driven Webhooks

To solve this, we refactored our system architecture from **Passive Polling** to **Event-Driven Webhook Notifications**.

Instead of asking the bank every 30 seconds, *"Is it done yet?"*, we established secure, idempotent webhook listeners that allowed partner banks to push transaction execution events to us instantly upon completion.

\`\`\`
OLD: Client Request -> Database -> Cron Job (Every 30s) -> Bank Poll -> Delayed UI Update
NEW: Client Request -> Database -> Bank Processing -> Instant Webhook -> Real-Time UI Broadcast (~2s)
\`\`\`

#### Key Product Improvements:
- **Confirmation Latency:** Dropped from an average of ~50 seconds down to **~10 seconds**.
- **Success Rate:** Jumped from **85% to 96%**, as we eliminated gateway timeouts caused by cron-driven endpoint flooding.
- **Support Overhead:** Customer queries regarding 'Pending Transfers' decreased by **42%**.

---

### Product Management Takeaway

Product Managers cannot afford to treat system architecture as an 'engineering-only' implementation detail. Every architectural trade-off—whether choosing polling vs webhooks, synchronous vs asynchronous processing, or monolithic vs microservice boundaries—directly dictates user journey velocity, error recovery states, and operational scalability.

*Great product thinking begins at the system level.*
    `
  },
  {
    id: "ai-future-pm-beyond-prompts",
    title: "AI & the Future of Product Management: Beyond Prompt Engineering",
    subtitle: "How generative models and agentic workflows are shifting PM responsibilities from document writing to system evaluation and problem framing.",
    category: "AI",
    date: "June 2026",
    readTime: "8 min read",
    isFeatured: true,
    excerpt: "I don't use AI to write generic marketing copy. I use AI to rethink how product discovery, requirement structuring, and decision analysis get executed. Here is how AI multiplies PM throughput.",
    contentMarkdown: `
### The Fallacy of the 'AI Copywriter'

Most discussions about AI in product management focus on superficial use cases: generating user persona fluff, writing marketing emails, or generating generic feature bullet points. 

This misses the point entirely.

The real power of AI for product managers lies in **cognitive acceleration**—using large language models as high-bandwidth reasoning partners to structure unstructured data, audit requirement edge cases, and automate operational workflows.

---

### 4 Core Layers of AI-Enabled Product Management

#### 1. Accelerated Discovery & Feedback Clustering
Instead of spending 8 hours reading through 200 raw support tickets or app reviews, an LLM pipeline can cluster qualitative feedback into discrete pain categories, rank them by frequency and sentiment severity, and output an initial opportunity matrix in minutes.

#### 2. Requirement Auditing & Edge-Case Identification
When drafting a PRD for a new payment checkout flow, I feed the draft PRD along with our API specification into a specialized evaluation prompt:
> *"Analyze this PRD against our payment gateway API docs. Identify 5 non-obvious failure modes, missing error handling states, and edge cases related to network timeouts or partial debits."*

The model frequently uncovers subtle edge cases—such as user session expiry during 3D-Secure OTP verification—that would have otherwise surfaced during QA or production.

#### 3. Agentic Workflow Automation
By linking AI models with tool APIs (via function calling and platforms like Make/Zapier), routine PM administrative work can be automated:
- Auto-summarizing architecture calls into action items tagged by owner.
- Auto-drafting release notes whenever Jira epics transition to 'Done'.
- Monitoring competitor changelogs and alerting Slack channels to strategic shifts.

#### 4. Rigorous Output Evaluation (Human-in-the-Loop)
Because LLMs can hallucinate, a PM's job shifts from *authoring raw text* to *evaluating model outputs*. Establishing ground-truth evaluation rubrics, verifying faithfulness, and maintaining human sign-off on sensitive system changes ensures AI speed never compromises system reliability.

---

### Conclusion

AI will not replace Product Managers. But Product Managers who leverage AI to automate administrative overhead and deepen their analytical discovery will inevitably outperform those stuck writing PRDs from scratch.
    `
  },
  {
    id: "jakobs-law-ux-fintech",
    title: "Jakob's Law and UX in Financial Applications",
    subtitle: "Why radical UI creativity in payment applications often causes user anxiety, friction, and failed transactions.",
    category: "UX",
    date: "May 2026",
    readTime: "5 min read",
    isFeatured: false,
    excerpt: "Jakob's Law states that users spend most of their time on other sites, meaning they prefer your app to work the same way as all the others. In fintech, breaking standard mental models is dangerous.",
    contentMarkdown: `
### The Cost of Unexpected Design in Payments

In social media or consumer gaming apps, novel UI patterns and experimental navigation can delight users. In financial products, however, novelty is often interpreted as ambiguity—and ambiguity triggers anxiety.

**Jakob's Law** states that users spend most of their time on other applications, so they expect your app to function in familiar ways. 

When a user is about to transfer ₦500,000 or pay a critical utility bill, their brain relies heavily on established mental models:
- A primary action button at the bottom of the screen.
- A clear transaction summary showing exact debit amounts and fee breakdowns *before* final authorization.
- Standard security cues (PIN entry, biometric prompt, success checkmarks).

---

### Real-World Fintech Case Study: The Hidden 'Pay' Button

In an early iteration of a merchant payment flow, a designer introduced a sleek, gesture-driven 'Swipe to Confirm Payment' control to replace the standard 'Tap to Pay' button. 

While visually impressive, testing revealed severe operational issues:
1. **User Hesitation:** 32% of users paused at the checkout screen, unsure how to execute the transfer.
2. **Accidental Double Swipes:** First-time users who swiped partially without completing the gesture became confused about whether the transaction had initiated, leading to repeated attempts and duplicate authorizations.

Replacing the swipe gesture with a high-contrast, explicit **"Confirm & Pay ₦X,XXX"** button with a 2-step PIN modal immediately restored completion rates and reduced checkout abandonments by **18%**.

---

### UX Principles for Financial Products

1. **Clarity Over Cleverness:** Never sacrifice clear visual hierarchy for minimalist aesthetic novelty.
2. **Explicit Friction at Point of No Return:** Adding a brief confirmation dialog prior to irreversible funds dispatch builds trust rather than annoyance.
3. **Instant Feedback States:** Always display immediate loading states ('Processing with Bank...') to prevent frantic double-taps during latency spikes.
    `
  },
  {
    id: "lessons-building-fintech-infrastructure",
    title: "Lessons from Building Fintech & Payment Infrastructure",
    subtitle: "Navigating regulatory mandates, API failure states, reconciliation ledgers, and partner bank dependencies.",
    category: "Fintech",
    date: "April 2026",
    readTime: "7 min read",
    isFeatured: false,
    excerpt: "Building fintech products in emerging markets requires preparing for unstable partner APIs, strict Central Bank regulatory shifts, and complex daily reconciliation ledgers.",
    contentMarkdown: `
### Building Software on Shifting Financial Rails

Building consumer or enterprise fintech software is fundamentally different from standard SaaS development. In standard SaaS, if an API call fails, you log an error and retry. In fintech, if an API call times out mid-flight, money may have left a customer's account without reaching the recipient.

Over years of building payment gateways, savings products (K-Save), merchant POS systems, and bill payment aggregators, here are 4 non-negotiable principles I've learned:

---

### 1. Idempotency is Non-Negotiable
Every payment endpoint must accept an idempotent request key. If a user's mobile connection drops during a transfer request and their app retries the call 3 seconds later, the backend *must* recognize the duplicate idempotency key and return the original transaction status rather than processing a second debit.

### 2. Design for the Asynchronous 'Unhappy Path'
In utility bill payments (electricity DISCOs, airtime aggregation), partner APIs frequently return 'Pending' or HTTP 500 while silently completing the purchase 3 minutes later. 
- Never assume a timeout equals a failure.
- Implement explicit transaction state machines: \`INITIATED\` → \`DEBITED\` → \`PENDING_VENDOR\` → \`SUCCESS\` / \`AUTO_REFUNDED\`.
- Establish automated 5-minute polling windows before triggering automated wallet reversals.

### 3. Compliance is a Product Feature, Not a Chore
Adhering to CBN AML guidelines, transaction velocity caps, and ISO 20000-1 service management standards isn't just about avoiding fines. Building transparent real-time fraud scoring and automated SAR reporting directly into the API architecture protects the platform from catastrophic systemic losses.

### 4. Reconciliation Ledgers Are the Single Source of Truth
Never rely solely on partner status callbacks. Daily automated ledger reconciliation matching bank settlement files against internal transaction logs is essential to identify fractional penny variances and keep finance operations sane.
    `
  },
  {
    id: "recovery-is-more-mental-than-physical",
    title: "Recovery Is More Mental Than Physical",
    subtitle: "Reflections on resilience, discipline, and navigating setback cycles in life and career.",
    category: "Personal Reflections",
    date: "March 2026",
    readTime: "4 min read",
    isFeatured: false,
    excerpt: "Whether recovering from a failed project launch, a career transition, or physical injury, the true bottleneck is rarely the physical effort required—it is the mental framework you adopt during the downtime.",
    contentMarkdown: `
### The Hidden Challenge of Recovery

When faced with setbacks—a missed product milestone, a failed system deployment, or a sudden career pivot—we often focus on the tangible, physical tasks required to rebuild. We schedule more hours, write more tickets, and attempt to force progress through sheer output.

However, experience teaches that true recovery is fundamentally psychological.

---

### 3 Mental Shifts for Resilient Execution

1. **Separating Ego from Outcomes:** A failed transaction model or delayed product feature does not define your competence as a product leader. Viewing failures as empirical data rather than personal defects allows you to diagnose root causes objectively.
2. **Patience with Non-Linear Progress:** Rebuilding momentum after a setback is rarely smooth. There will be days of rapid clarity followed by unexpected friction. Accepting this non-linear reality prevents premature frustration.
3. **Controlling the Controllables:** In complex environments (such as regulated fintech ecosystems), macro variables—regulatory shifts, partner downtime, market dynamics—are outside your direct control. Focusing relentlessly on your inputs (requirements clarity, team alignment, rigorous testing) is the only reliable anchor.

*Resilience isn't avoiding hitting the ground; it's maintaining clarity while standing back up.*
    `
  },
  {
    id: "unbroken-and-kindness",
    title: "Unbroken: On Quiet Persistence & Radical Kindness",
    subtitle: "Why soft skills and emotional composure are the ultimate force multipliers for technical product leaders.",
    category: "Career",
    date: "January 2026",
    readTime: "5 min read",
    isFeatured: false,
    excerpt: "In high-stress product environments with tight deadlines and system outages, empathy and radical kindness are not signs of weakness—they are essential tools for sustaining team performance.",
    contentMarkdown: `
### Technical Rigor Needs Human Kindness

In fast-paced technology environments, it is easy to default to pure transactional communication. When production incidents occur or release deadlines loom, stress can cause product managers to view engineering and operations teams purely through the lens of deliverables and SLAs.

This approach is short-sighted and toxic.

---

### Kindness as an Operational Strength

True leadership in product management is about creating an environment of psychological safety where team members can admit mistakes early, voice architectural concerns openly, and collaborate without fear of public blame.

- **Blameless Post-Mortems:** When a payment gateway integration fails in production, focus 100% of the energy on system vulnerabilities, missing test cases, and fallback specs—never on assigning personal blame to individual developers.
- **Active Empathy for Engineering Constraints:** Respecting technical debt, listening when engineers warn against unrealistic timelines, and protecting the team from chaotic scope changes builds immense trust.
- **Unbroken Focus Under Pressure:** When executive stakeholders or clients demand immediate answers during an outage, the product manager must serve as a shock absorber—calmly communicating facts, structuring incident steps, and allowing the technical team to solve the problem undisturbed.

Quiet persistence and radical kindness are the ultimate force multipliers for product success.
    `
  }
];
