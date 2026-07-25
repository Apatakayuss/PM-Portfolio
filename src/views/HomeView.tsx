import * as React from 'react';
import { NavSection, CaseStudy, Article } from '../types';
import { personalInfo, verifiedMetrics } from '../data/profile';
import { caseStudies } from '../data/caseStudies';
import { articles } from '../data/articles';
import { MetricCard } from '../components/MetricCard';
import { ProductDiagram } from '../components/Diagrams';
import heroPortrait from '../assets/Abdulazee.png';
import { ArrowRight, ChevronRight, Layers, Cpu, BookOpen, ShieldCheck, Zap, LineChart, Code2, Sparkles, Building, CheckCircle2 } from 'lucide-react';

interface HomeViewProps {
  onNavigate: (section: NavSection) => void;
  onSelectCaseStudy: (cs: CaseStudy) => void;
  onSelectArticle: (art: Article) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onSelectCaseStudy,
  onSelectArticle,
}) => {
  const whatIWorkOnCards = [
    {
      title: "1. Product Strategy",
      icon: LineChart,
      description: "Turning business problems, customer needs, market dynamics, and constraints into clear product direction and priorities."
    },
    {
      title: "2. Fintech & Payments",
      icon: Layers,
      description: "Building and improving products within financial services, payments, transaction processing, digital banking, and fintech ecosystems."
    },
    {
      title: "3. Technical Product Management",
      icon: Code2,
      description: "Working across APIs, integrations, transaction flows, system dependencies, data, and engineering constraints to define products that can actually be built."
    },
    {
      title: "4. AI for Product Management",
      icon: Cpu,
      description: "Using AI to accelerate product discovery, research, documentation, analysis, decision-making, and product execution."
    },
    {
      title: "5. Automation",
      icon: Zap,
      description: "Identifying repetitive workflows and using AI and automation to reduce manual effort, improve consistency, and increase operational efficiency."
    },
    {
      title: "6. Product Writing",
      icon: BookOpen,
      description: "Writing about product management, UX, technology, AI, systems thinking, career growth, and lessons learned from building products."
    }
  ];

  const featuredCaseStudies = caseStudies.filter(cs => cs.isFeatured).slice(0, 3);
  const featuredArticles = articles.filter(a => a.isFeatured).slice(0, 2);

  return (
    <div className="space-y-24 pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="pt-8 sm:pt-14">
        <div className="max-w-6xl grid gap-10 lg:grid-cols-[1.15fr_0.85fr] items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-zinc-100 dark:bg-zinc-800/80 text-zinc-800 dark:text-zinc-200 text-xs font-mono border border-zinc-200 dark:border-zinc-700/80">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Lagos, Nigeria • Open to Product Leadership Opportunities
            </div>

            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 leading-[1.05]">
                {personalInfo.name}
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-zinc-700 dark:text-zinc-300 leading-snug">
                {personalInfo.headline}
              </p>
            </div>

            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl">
              {personalInfo.heroBio}
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onNavigate('work')}
                className="px-6 py-3 bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 text-sm font-medium rounded-sm hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors shadow-sm flex items-center gap-2 group"
              >
                View My Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('writing')}
                className="px-6 py-3 border border-zinc-200 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 text-sm font-medium rounded-sm hover:border-zinc-900 dark:hover:border-zinc-300 transition-colors flex items-center gap-2"
              >
                Read Writing
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="text-xs font-medium text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors uppercase tracking-wider px-2"
              >
                Contact
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl border border-zinc-200/80 bg-white/70 p-3 shadow-sm backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/60">
              <img
                src={heroPortrait}
                alt="Portrait of Abdulazeez Apata"
                className="h-full w-full rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHAT I WORK ON */}
      <section className="space-y-6">
        <div>
          <h2 className="text-xs uppercase tracking-[0.2em] text-zinc-400 font-bold mb-2">
            Functional Scope & Practice Areas
          </h2>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            What I Work On
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {whatIWorkOnCards.map((card, i) => {
            const IconComp = card.icon;
            return (
              <div
                key={i}
                className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-sm p-6 space-y-3 transition-all hover:border-zinc-400 dark:hover:border-zinc-700 shadow-sm flex flex-col justify-between group"
              >
                <div>
                  <div className="w-9 h-9 rounded-sm bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-800 dark:text-zinc-200 mb-4 group-hover:bg-zinc-900 group-hover:text-white dark:group-hover:bg-zinc-100 dark:group-hover:text-zinc-900 transition-colors">
                    <IconComp className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mt-2">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. SELECTED IMPACT */}
      <section className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-xs uppercase tracking-[0.2em] text-zinc-400 font-bold mb-2">
              Evidence & Metrics
            </h2>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Selected Impact
            </h3>
          </div>
          <p className="text-xs text-zinc-500 max-w-sm">
            Measurable, verified outcomes from production payment routing, compliance engines, and product expansion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {verifiedMetrics.map((metric) => (
            <div key={metric.id}>
              <MetricCard metric={metric} />
            </div>
          ))}
        </div>
      </section>

      {/* 4. FEATURED CASE STUDIES */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xs uppercase tracking-[0.2em] text-zinc-400 font-bold mb-2">
              Deep Dives & Practice
            </h2>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Featured Case Studies
            </h3>
          </div>
          <button
            onClick={() => onNavigate('work')}
            className="inline-flex items-center gap-1 text-xs font-semibold text-zinc-800 dark:text-zinc-200 hover:underline uppercase tracking-wider"
          >
            View All ({caseStudies.length}) Work
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {featuredCaseStudies.map((cs) => (
            <div
              key={cs.id}
              onClick={() => onSelectCaseStudy(cs)}
              className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-sm p-6 transition-all duration-200 hover:border-zinc-400 dark:hover:border-zinc-700 shadow-sm cursor-pointer flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-zinc-400 font-mono uppercase tracking-wider">
                  <span>{cs.company}</span>
                  <span>{cs.role}</span>
                </div>

                <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
                  {cs.title}
                </h3>

                <p className="text-xs text-zinc-500 dark:text-zinc-400 line-clamp-3 leading-relaxed">
                  {cs.summary}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between text-xs">
                <div className="flex flex-wrap gap-1">
                  {cs.tags.slice(0, 2).map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded-sm bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-[10px] font-mono">
                      #{t}
                    </span>
                  ))}
                </div>
                <div className="w-8 h-8 border border-zinc-200 dark:border-zinc-700 rounded-sm flex items-center justify-center text-zinc-400 group-hover:bg-zinc-900 group-hover:text-white dark:group-hover:bg-zinc-100 dark:group-hover:text-zinc-900 dark:group-hover:border-zinc-100 transition-colors">
                  →
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. AI & AUTOMATION SPOTLIGHT */}
      <section className="bg-zinc-900 text-zinc-50 rounded-sm p-8 sm:p-12 border border-zinc-800 space-y-6 shadow-sm">
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-zinc-800 border border-zinc-700 text-zinc-300 text-xs font-mono uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            AI & Automation Lab
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
            "I don't just use AI to generate content. I use AI to rethink how product work gets done."
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            From automated discovery synthesis to requirements drafting, hallucination auditing, and zero-touch meeting action-item routing—explore the AI & Automation Lab.
          </p>
        </div>

        <div className="pt-2 flex flex-wrap gap-4">
          <button
            onClick={() => onNavigate('ai-automation')}
            className="px-6 py-3 bg-zinc-100 hover:bg-white text-zinc-900 font-bold text-xs uppercase tracking-wider rounded-sm transition-all shadow-sm inline-flex items-center gap-2"
          >
            Explore AI & Automation Lab
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 6. FEATURED WRITING */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xs uppercase tracking-[0.2em] text-zinc-400 font-bold mb-2">
              Thought Leadership & Reflection
            </h2>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Writing is How I Think in Public
            </h3>
          </div>
          <button
            onClick={() => onNavigate('writing')}
            className="inline-flex items-center gap-1 text-xs font-semibold text-zinc-800 dark:text-zinc-200 hover:underline uppercase tracking-wider"
          >
            Read All ({articles.length}) Articles
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {featuredArticles.map((art) => (
            <div
              key={art.id}
              onClick={() => onSelectArticle(art)}
              className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-sm p-6 transition-all hover:border-zinc-400 dark:hover:border-zinc-700 shadow-sm cursor-pointer flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-zinc-400 font-mono">
                  <span className="px-2 py-0.5 rounded-sm bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-semibold uppercase tracking-wider text-[10px]">
                    {art.category}
                  </span>
                  <span>{art.readTime}</span>
                </div>

                <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
                  {art.title}
                </h3>

                <p className="text-xs text-zinc-500 dark:text-zinc-400 line-clamp-3 leading-relaxed">
                  {art.excerpt}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between text-xs">
                <span className="text-zinc-400 font-mono">{art.date}</span>
                <div className="w-8 h-8 border border-zinc-200 dark:border-zinc-700 rounded-sm flex items-center justify-center text-zinc-400 group-hover:bg-zinc-900 group-hover:text-white dark:group-hover:bg-zinc-100 dark:group-hover:text-zinc-900 dark:group-hover:border-zinc-100 transition-colors">
                  →
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. CAREER TIMELINE PREVIEW */}
      {/* <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xs uppercase tracking-[0.2em] text-zinc-400 font-bold mb-2">
              Experience & Career
            </h2>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Career Trajectory
            </h3>
          </div>
          <button
            onClick={() => onNavigate('about')}
            className="inline-flex items-center gap-1 text-xs font-semibold text-zinc-800 dark:text-zinc-200 hover:underline uppercase tracking-wider"
          >
            Full Story & About
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-3">
          {careerExperiences.map((exp) => (
            <div
              key={exp.id}
              className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-sm p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm"
            >
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-zinc-900 dark:text-zinc-100 text-base">
                    {exp.title}
                  </span>
                  <span className="text-[11px] font-medium px-2 py-0.5 rounded-sm bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-mono">
                    {exp.company}
                  </span>
                </div>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 max-w-xl leading-relaxed">
                  {exp.description}
                </p>
              </div>

              <div className="text-xs font-mono text-zinc-400 shrink-0">
                {exp.period}
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* 8. CONTACT CTA */}
      <section className="bg-zinc-50 dark:bg-zinc-900/60 rounded-sm p-8 sm:p-12 border border-zinc-200 dark:border-zinc-800 text-center space-y-6">
        <div className="max-w-xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Let's build something useful.
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
            Whether you are looking for a Product Manager for complex payment systems, AI-enabled product lines, or technical product strategy—I'd love to connect.
          </p>
        </div>

        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => onNavigate('contact')}
            className="px-6 py-3 bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 font-bold text-xs uppercase tracking-wider rounded-sm hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors shadow-sm"
          >
            Get In Touch
          </button>
          <a
            href={`mailto:${personalInfo.email}`}
            className="px-6 py-3 bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 font-bold text-xs uppercase tracking-wider rounded-sm border border-zinc-200 dark:border-zinc-700 hover:border-zinc-900 transition-colors"
          >
            Direct Email
          </a>
        </div>
      </section>

    </div>
  );
};
