import React, { useState } from 'react';
import { CaseStudy } from '../types';
import { X, ChevronDown, Check, Building, Calendar, UserCheck, ShieldCheck, Share2, Lightbulb, ArrowRight, Layers } from 'lucide-react';
import { ProductDiagram } from './Diagrams';

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ caseStudy, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'discovery' | 'decisions' | 'solution' | 'outcome'>('overview');
  const [expandedTech, setExpandedTech] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!caseStudy) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-zinc-950/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-sm shadow-sm overflow-hidden my-8 max-h-[90vh] flex flex-col">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between p-6 border-b border-zinc-100 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-950/50">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-sm text-xs font-mono font-bold uppercase tracking-wider bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200">
                <Building className="w-3 h-3" />
                {caseStudy.company}
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-sm text-xs font-mono font-bold uppercase tracking-wider bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200">
                <UserCheck className="w-3 h-3" />
                {caseStudy.role}
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-sm text-xs font-mono text-zinc-500 dark:text-zinc-400">
                <Calendar className="w-3 h-3" />
                {caseStudy.period}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              {caseStudy.title}
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyLink}
              className="p-2 text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 rounded-sm border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              title="Copy Case Study Link"
            >
              {copied ? <Check className="w-4 h-4 text-zinc-900 dark:text-zinc-100" /> : <Share2 className="w-4 h-4" />}
            </button>
            <button
              onClick={onClose}
              className="p-2 text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 rounded-sm border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-6 overflow-x-auto">
          {[
            { id: 'overview', label: '1. Overview & Impact' },
            { id: 'discovery', label: '2. Problem & Discovery' },
            { id: 'decisions', label: '3. Product Decisions' },
            { id: 'solution', label: '4. Solution & Diagram' },
            { id: 'outcome', label: '5. Outcome & Lessons' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`py-3 px-4 text-xs font-mono uppercase tracking-wider whitespace-nowrap border-b-2 transition-colors ${
                activeTab === tab.id
                  ? 'border-zinc-900 dark:border-zinc-50 text-zinc-900 dark:text-zinc-50 font-bold'
                  : 'border-transparent text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Body Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
          
          {/* Subtitle / Tagline */}
          <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200 bg-zinc-50 dark:bg-zinc-800/50 p-4 rounded-sm border border-zinc-200 dark:border-zinc-700/80">
            {caseStudy.subtitle}
          </p>

          {/* Impact Metrics Highlights Banner */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {caseStudy.impactMetrics.map((m, idx) => (
              <div key={idx} className="p-4 bg-zinc-50 dark:bg-zinc-800/70 rounded-sm border border-zinc-200 dark:border-zinc-700/60">
                <div className="text-2xl font-bold font-mono text-zinc-900 dark:text-zinc-100">
                  {m.value}
                </div>
                <div className="text-xs text-zinc-500 dark:text-zinc-400 font-medium mt-1">
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div>
                <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-zinc-400 mb-2">Executive Summary</h3>
                <p className="text-zinc-800 dark:text-zinc-200 leading-relaxed text-sm">
                  {caseStudy.summary}
                </p>
              </div>

              <div>
                <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-zinc-400 mb-2">Users & Key Stakeholders</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {caseStudy.usersAndStakeholders.map((st, i) => (
                    <li key={i} className="flex items-start gap-2 p-2.5 rounded-sm bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200 dark:border-zinc-800 text-xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 mt-1.5 shrink-0" />
                      <span>{st}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-zinc-400 mb-2">Business Objective</h3>
                <div className="p-4 bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 rounded-sm text-xs leading-relaxed">
                  {caseStudy.businessObjective}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: PROBLEM & DISCOVERY */}
          {activeTab === 'discovery' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div>
                <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-zinc-400 mb-2">The Core Problem</h3>
                <p className="text-zinc-800 dark:text-zinc-200 font-medium">
                  {caseStudy.problem}
                </p>
              </div>

              <div>
                <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-zinc-400 mb-2">Operational Context</h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-xs sm:text-sm">
                  {caseStudy.context}
                </p>
              </div>

              <div>
                <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-zinc-400 mb-2">Product Challenge</h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-xs sm:text-sm">
                  {caseStudy.productChallenge}
                </p>
              </div>

              <div>
                <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-zinc-400 mb-2">Product Discovery Approach</h3>
                <div className="space-y-2">
                  {caseStudy.approach.map((ap, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 bg-zinc-50 dark:bg-zinc-800/40 rounded-sm border border-zinc-200 dark:border-zinc-800 text-xs">
                      <span className="font-mono font-bold text-zinc-400">0{i+1}.</span>
                      <p className="text-zinc-700 dark:text-zinc-300">{ap}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: DECISIONS & TRADE-OFFS */}
          {activeTab === 'decisions' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div>
                <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-zinc-400 mb-3">Key Strategic & Technical Decisions</h3>
                <div className="space-y-4">
                  {caseStudy.keyDecisions.map((kd, i) => (
                    <div key={i} className="p-4 bg-zinc-50 dark:bg-zinc-800/40 rounded-sm border border-zinc-200 dark:border-zinc-800 space-y-2">
                      <div className="font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                        <Lightbulb className="w-4 h-4 text-zinc-700 dark:text-zinc-300 shrink-0" />
                        <span>{kd.decision}</span>
                      </div>
                      <div className="text-xs text-zinc-600 dark:text-zinc-300">
                        <span className="font-bold text-zinc-800 dark:text-zinc-200">Rationale: </span>
                        {kd.rationale}
                      </div>
                      <div className="text-xs text-zinc-500 dark:text-zinc-400 italic pt-2 border-t border-zinc-200 dark:border-zinc-700/60">
                        <span className="font-bold not-italic text-zinc-700 dark:text-zinc-300">Trade-Off Accepted: </span>
                        {kd.tradeOff}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: SOLUTION & DIAGRAM */}
          {activeTab === 'solution' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div>
                <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-zinc-400 mb-2">The Solution Overview</h3>
                <p className="text-zinc-800 dark:text-zinc-200">
                  {caseStudy.solution}
                </p>
              </div>

              {caseStudy.diagramType && (
                <div>
                  <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-zinc-400 mb-2">System & Process Architecture Flow</h3>
                  <ProductDiagram type={caseStudy.diagramType} />
                </div>
              )}

              {/* Expandable Technical Specification Details */}
              <div className="border border-zinc-200 dark:border-zinc-800 rounded-sm overflow-hidden">
                <button
                  onClick={() => setExpandedTech(!expandedTech)}
                  className="w-full flex items-center justify-between p-4 bg-zinc-50 dark:bg-zinc-800/60 text-xs font-bold text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-zinc-500" />
                    Deep Technical Specs & API Architecture Requirements
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${expandedTech ? 'rotate-180' : ''}`} />
                </button>
                {expandedTech && (
                  <div className="p-4 bg-zinc-950 text-zinc-200 font-mono text-xs space-y-3 leading-relaxed border-t border-zinc-800">
                    <div>
                      <span className="text-zinc-200 font-bold">// Security & Idempotency Rules:</span>
                      <p className="text-zinc-400 text-[11px] mt-1">
                        Requests carry X-Idempotency-Key header verified against Redis cache prior to database write. Webhook callbacks require HMAC-SHA256 signature matching secret key.
                      </p>
                    </div>
                    <div>
                      <span className="text-zinc-200 font-bold">// Error Recovery & Retry Matrix:</span>
                      <p className="text-zinc-400 text-[11px] mt-1">
                        Transient gateway 5xx errors trigger exponential backoff retries (1s, 3s, 10s) before executing secondary route fallback.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 5: OUTCOME & LESSONS */}
          {activeTab === 'outcome' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div>
                <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-zinc-400 mb-2">Quantifiable Business Outcome</h3>
                <p className="text-zinc-800 dark:text-zinc-200 text-sm font-medium">
                  {caseStudy.outcome}
                </p>
              </div>

              <div>
                <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-zinc-400 mb-2">Verified Metrics Achieved</h3>
                <ul className="space-y-2">
                  {caseStudy.metrics.map((m, i) => (
                    <li key={i} className="flex items-center gap-2 p-3 bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 rounded-sm text-zinc-900 dark:text-zinc-100 text-xs font-semibold">
                      <ShieldCheck className="w-4 h-4 text-zinc-700 dark:text-zinc-300 shrink-0" />
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-zinc-400 mb-2">Lessons Learned</h3>
                <div className="space-y-2">
                  {caseStudy.lessonsLearned.map((ll, i) => (
                    <div key={i} className="p-3 bg-zinc-50 dark:bg-zinc-800/40 rounded-sm border border-zinc-200 dark:border-zinc-800 text-xs text-zinc-700 dark:text-zinc-300">
                      💡 {ll}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-zinc-100 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-950/50 flex items-center justify-between">
          <div className="flex flex-wrap gap-1.5">
            {caseStudy.tags.map((tag) => (
              <span key={tag} className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-sm bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                #{tag}
              </span>
            ))}
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 text-xs font-bold uppercase tracking-wider rounded-sm hover:opacity-90 transition-opacity"
          >
            Close Case Study
          </button>
        </div>

      </div>
    </div>
  );
};
