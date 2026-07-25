import React from 'react';
import { aiFrameworkCategories, automationProjects } from '../data/automations';
import { WorkflowSimulator } from '../components/WorkflowSimulator';
import { Cpu, Zap, ShieldCheck, CheckCircle2, Clock, Terminal, ArrowRight, Layers } from 'lucide-react';

export const AiAutomationView: React.FC = () => {
  return (
    <div className="space-y-16 pb-20">
      
      {/* Hero Banner & Differentiator Positioning */}
      <div className="space-y-6 max-w-4xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 text-xs font-mono border border-zinc-200 dark:border-zinc-700">
          <Cpu className="w-3.5 h-3.5" />
          AI & Automation Lab
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 leading-tight">
          "I don't just use AI to generate content. I use AI to rethink how product work gets done."
        </h1>

        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
          Artificial Intelligence is not a replacement for clear problem framing, but when combined with structured workflows, API tool-calling, and human evaluation guardrails, it multiplies a Product Manager's capacity by an order of magnitude.
        </p>
      </div>

      {/* Interactive Workflow Simulator Component */}
      <section>
        <WorkflowSimulator />
      </section>

      {/* 5 AI FRAMEWORK CATEGORIES */}
      <section className="space-y-6">
        <div>
          <h2 className="text-xs uppercase tracking-[0.2em] text-zinc-400 font-bold mb-2">
            Product Lifecycle Integration
          </h2>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            How I Apply AI Across the Product Lifecycle
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {aiFrameworkCategories.map((cat) => (
            <div
              key={cat.id}
              className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-sm p-6 sm:p-8 space-y-4 shadow-sm flex flex-col justify-between"
            >
              <div className="space-y-3">
                <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
                  {cat.title}
                </h3>

                <p className="text-xs font-semibold text-zinc-800 dark:text-zinc-200 italic">
                  "{cat.tagline}"
                </p>

                <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  {cat.description}
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800 space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 font-bold block">
                  Practical Implementations:
                </span>
                <ul className="space-y-1.5">
                  {cat.examples.map((ex, idx) => (
                    <li key={idx} className="text-xs text-zinc-600 dark:text-zinc-300 flex items-start gap-2">
                      <span className="text-zinc-400 font-mono mt-0.5">•</span>
                      <span>{ex}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AUTOMATION LAB PORTFOLIO */}
      <section className="space-y-6 pt-8 border-t border-zinc-200 dark:border-zinc-800">
        <div>
          <h2 className="text-xs uppercase tracking-[0.2em] text-zinc-400 font-bold mb-2">
            Practical Engineering & Scripts
          </h2>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Automation Lab Showcase
          </h3>
          <p className="text-xs sm:text-sm text-zinc-500 mt-1">
            Real-world workflow automations designed to eliminate manual cognitive friction and administrative overhead.
          </p>
        </div>

        <div className="space-y-6">
          {automationProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-sm p-6 sm:p-8 space-y-6 shadow-sm"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-zinc-100 dark:border-zinc-800">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`px-2 py-0.5 rounded-sm text-[10px] font-mono font-bold uppercase tracking-wider ${statusBadgeStyle(project.status)}`}>
                      {project.status}
                    </span>
                    <span className="text-xs font-mono text-zinc-400">
                      Category: {project.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                    {project.title}
                  </h3>
                </div>

                <div className="text-xs font-mono text-zinc-900 dark:text-zinc-100 bg-zinc-100 dark:bg-zinc-800 px-3 py-1.5 rounded-sm border border-zinc-200 dark:border-zinc-700 font-semibold self-start sm:self-auto">
                  ⚡ Saved: {project.timeSaved}
                </div>
              </div>

              {/* Description & Manual vs Automated */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-4 bg-zinc-50 dark:bg-zinc-800/40 rounded-sm border border-zinc-200 dark:border-zinc-700/60 space-y-1">
                  <span className="font-bold text-zinc-800 dark:text-zinc-200 uppercase tracking-wider text-[10px] font-mono block">
                    Legacy Manual Process
                  </span>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {project.manualProcess}
                  </p>
                </div>

                <div className="p-4 bg-zinc-100 dark:bg-zinc-800/80 rounded-sm border border-zinc-300 dark:border-zinc-700 space-y-1">
                  <span className="font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider text-[10px] font-mono block">
                    Automated AI Solution
                  </span>
                  <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Trigger & AI Task details */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="p-3 bg-zinc-50 dark:bg-zinc-800/40 rounded-sm border border-zinc-100 dark:border-zinc-800">
                  <span className="font-bold text-zinc-900 dark:text-zinc-100 block mb-1">⚡ Trigger Event:</span>
                  <span className="text-zinc-500 dark:text-zinc-400">{project.trigger}</span>
                </div>
                <div className="p-3 bg-zinc-50 dark:bg-zinc-800/40 rounded-sm border border-zinc-100 dark:border-zinc-800">
                  <span className="font-bold text-zinc-900 dark:text-zinc-100 block mb-1">🤖 AI Processing Task:</span>
                  <span className="text-zinc-500 dark:text-zinc-400">{project.aiTask}</span>
                </div>
                <div className="p-3 bg-zinc-50 dark:bg-zinc-800/40 rounded-sm border border-zinc-100 dark:border-zinc-800">
                  <span className="font-bold text-zinc-900 dark:text-zinc-100 block mb-1">🎯 Direct Action & Output:</span>
                  <span className="text-zinc-500 dark:text-zinc-400">{project.actionTaken}</span>
                </div>
              </div>

              {/* Workflow visualizer */}
              <div className="p-4 bg-zinc-900 text-zinc-100 rounded-sm border border-zinc-800 font-mono text-xs space-y-2">
                <div className="text-[10px] uppercase text-zinc-400 tracking-wider font-bold">
                  Pipeline Execution Flow
                </div>
                <div className="flex flex-col md:flex-row items-center justify-between gap-2">
                  {project.workflow.map((st, i) => (
                    <React.Fragment key={i}>
                      <div className="p-2 bg-zinc-800 rounded-sm border border-zinc-700 text-[11px] text-center w-full md:w-auto">
                        <span className="text-zinc-200 font-bold block">{st.step.toUpperCase()}</span>
                        <span className="text-zinc-400">{st.label}</span>
                      </div>
                      {i < project.workflow.length - 1 && (
                        <span className="text-zinc-600 hidden md:inline">→</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Tools & Guardrails Footer */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs pt-2 border-t border-zinc-100 dark:border-zinc-800">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="text-zinc-400 font-mono text-[11px]">Stack:</span>
                  {project.toolsUsed.map((tool, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded-sm bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-mono text-[10px]">
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="text-zinc-500 text-[11px] font-mono">
                  Guardrail: {project.humanInTheLoop}
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

function statusBadgeStyle(status: string) {
  switch (status) {
    case 'Built':
      return 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30';
    case 'Prototyped':
      return 'bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/30';
    case 'Experimented with':
      return 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30';
    default:
      return 'bg-zinc-500/10 text-zinc-600 dark:text-zinc-400 border border-zinc-500/30';
  }
}
