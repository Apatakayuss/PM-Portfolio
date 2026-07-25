import React from 'react';
import { personalInfo, careerExperiences, verifiedMetrics, skillGroups } from '../data/profile';
import { Download, Printer, Mail, Linkedin, Github, FileText, CheckCircle2, ShieldCheck, MapPin } from 'lucide-react';

export const ResumeView: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-12 pb-20 max-w-4xl mx-auto">
      
      {/* Top Action Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-zinc-200 dark:border-zinc-800">
        <div>
          <h2 className="text-xs uppercase tracking-[0.2em] text-zinc-400 font-bold mb-1">
            Recruiter & Hiring Manager Format
          </h2>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Curriculum Vitae / Resume
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handlePrint}
            className="px-4 py-2 bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 text-xs font-bold uppercase tracking-wider rounded-sm hover:opacity-90 transition-opacity inline-flex items-center gap-2 shadow-sm"
          >
            <Printer className="w-4 h-4" />
            Print / Save as PDF
          </button>
        </div>
      </div>

      {/* PRINTABLE RESUME CANVAS */}
      <div id="printable-resume" className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-sm p-8 sm:p-12 space-y-10 shadow-sm text-zinc-800 dark:text-zinc-200">
        
        {/* Contact Header */}
        <div className="border-b border-zinc-100 dark:border-zinc-800 pb-8 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight">
                {personalInfo.name}
              </h2>
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mt-1">
                {personalInfo.title}
              </p>
            </div>
            
            <div className="text-xs text-zinc-400 font-mono space-y-1 sm:text-right">
              <div className="flex items-center gap-1.5 sm:justify-end">
                <MapPin className="w-3.5 h-3.5" /> {personalInfo.location}
              </div>
              <div className="flex items-center gap-1.5 sm:justify-end">
                <Mail className="w-3.5 h-3.5" /> {personalInfo.email}
              </div>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed pt-2">
            Results-driven Technical Product Manager with hands-on experience building fintech payment orchestration, real-time AML fraud detection engines, digital savings platforms, and AI-enabled product workflows. Proven track record elevating payment success rates from 85% to 96% and scaling digital products to billions in transaction volume.
          </p>
        </div>

        {/* Selected Verified Achievements */}
        <div className="space-y-4">
          <h3 className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400 font-bold border-b border-zinc-100 dark:border-zinc-800 pb-2">
            Key Impact & Verified Outcomes
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            {verifiedMetrics.map((m) => (
              <div key={m.id} className="p-3 bg-zinc-50 dark:bg-zinc-800/50 rounded-sm border border-zinc-200 dark:border-zinc-700/80 flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-zinc-700 dark:text-zinc-300 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-zinc-900 dark:text-zinc-100 font-mono mr-1.5">{m.number}</span>
                  <span className="font-semibold text-zinc-800 dark:text-zinc-200">{m.shortDescription}: </span>
                  <span className="text-zinc-500 dark:text-zinc-400">{m.context}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Experience */}
        <div className="space-y-6">
          <h3 className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400 font-bold border-b border-zinc-100 dark:border-zinc-800 pb-2">
            Professional Experience
          </h3>

          <div className="space-y-8">
            {careerExperiences.map((exp) => (
              <div key={exp.id} className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm">
                  <div>
                    <span className="font-bold text-zinc-900 dark:text-zinc-100">{exp.title}</span>
                    <span className="text-zinc-500 font-medium ml-2">• {exp.company}</span>
                  </div>
                  <span className="text-xs font-mono text-zinc-400">{exp.period}</span>
                </div>

                <p className="text-xs text-zinc-500 dark:text-zinc-400 italic">
                  {exp.description}
                </p>

                <ul className="space-y-1.5 text-xs text-zinc-600 dark:text-zinc-300 pt-1">
                  {exp.achievements.map((ach, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-zinc-400 font-mono">•</span>
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Summary Matrix */}
        <div className="space-y-4">
          <h3 className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400 font-bold border-b border-zinc-100 dark:border-zinc-800 pb-2">
            Technical & Product Skill Summary
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            {skillGroups.map((sg, i) => (
              <div key={i} className="space-y-1">
                <span className="font-bold text-zinc-900 dark:text-zinc-100 block">{sg.category}:</span>
                <p className="text-zinc-500 dark:text-zinc-400">
                  {sg.skills.join(', ')}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="space-y-4">
          <h3 className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400 font-bold border-b border-zinc-100 dark:border-zinc-800 pb-2">
            Education
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            {personalInfo.education.map((edu, i) => (
              <div key={i}>
                <div className="font-bold text-zinc-900 dark:text-zinc-100">{edu.degree}</div>
                <div className="text-zinc-500">{edu.institution} — {edu.focus}</div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};
