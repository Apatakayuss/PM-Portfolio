import React from 'react';
import { personalInfo, careerExperiences, skillGroups } from '../data/profile';
import { User, GraduationCap, Briefcase, Code2, Compass, Layers, ShieldCheck, CheckCircle2, ArrowUpRight } from 'lucide-react';

export const AboutView: React.FC = () => {
  return (
    <div className="space-y-16 pb-20">
      
      {/* Header Banner */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 text-xs font-mono border border-zinc-200 dark:border-zinc-700">
          <User className="w-3.5 h-3.5" />
          Professional Story & Product Mindset
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          About Abdulazeez Apata
        </h1>

        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
          Product Manager specializing in fintech infrastructure, API payments, real-time AML compliance, and AI-enabled workflow engineering.
        </p>
      </div>

      {/* PROFESSIONAL STORY SECTIONS */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Who I Am & How I Think */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-sm p-6 sm:p-8 space-y-4 shadow-sm">
          <h2 className="text-base font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
            <Compass className="w-4 h-4 text-zinc-700 dark:text-zinc-300" />
            Who I Am & How I Think
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
            {personalInfo.aboutStory.whoIAm}
          </p>
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
            {personalInfo.aboutStory.howIThink}
          </p>
        </div>

        {/* How I Became a PM & Background */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-sm p-6 sm:p-8 space-y-4 shadow-sm">
          <h2 className="text-base font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-zinc-700 dark:text-zinc-300" />
            How I Became a Product Manager
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
            {personalInfo.aboutStory.howIBecamePM}
          </p>
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
            {personalInfo.aboutStory.whyFintech}
          </p>
        </div>

      </section>

      {/* CAREER TIMELINE */}
      <section className="space-y-6">
        <div>
          <h2 className="text-xs uppercase tracking-[0.2em] text-zinc-400 font-bold mb-2">
            Chronological Experience
          </h2>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Career Timeline
          </h3>
        </div>

        <div className="relative border-l border-zinc-200 dark:border-zinc-800 ml-3 sm:ml-6 space-y-8 pl-6 sm:pl-8">
          {careerExperiences.map((exp) => (
            <div key={exp.id} className="relative group">
              {/* Timeline Bullet */}
              <div className="absolute -left-[29px] sm:-left-[37px] top-2 w-3 h-3 rounded-full bg-zinc-900 dark:bg-zinc-100 group-hover:scale-125 transition-transform" />

              <div className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-sm p-6 sm:p-8 space-y-4 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-100 dark:border-zinc-800 pb-3">
                  <div>
                    <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
                      {exp.title}
                    </h3>
                    <div className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 flex items-center gap-2 mt-0.5">
                      <span>{exp.company}</span>
                      {exp.location && <span>• {exp.location}</span>}
                    </div>
                  </div>

                  <span className="text-[11px] font-mono font-bold text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 px-2.5 py-1 rounded-sm self-start sm:self-auto">
                    {exp.period}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  {exp.description}
                </p>

                {/* Achievements Bullet List */}
                <div className="space-y-2 pt-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 font-bold block">
                    Key Achievements & Contributions:
                  </span>
                  <ul className="space-y-1.5 text-xs text-zinc-600 dark:text-zinc-300">
                    {exp.achievements.map((ach, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-zinc-400 shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-100 dark:border-zinc-800">
                  {exp.skillsUsed.map((sk, i) => (
                    <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded-sm bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                      {sk}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VISUAL SKILLS MATRIX (NO PERCENTAGES!) */}
      <section className="space-y-6 pt-8 border-t border-zinc-200 dark:border-zinc-800">
        <div>
          <h2 className="text-xs uppercase tracking-[0.2em] text-zinc-400 font-bold mb-2">
            Capability Categorization
          </h2>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Skills & Domain Expertise
          </h3>
          <p className="text-xs text-zinc-500 mt-1">
            Categorized by functional domain rather than subjective percentage meters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-sm p-6 space-y-4 shadow-sm flex flex-col justify-between"
            >
              <div>
                <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 mb-1">
                  {group.category}
                </h3>
                <p className="text-xs text-zinc-500 mb-4 leading-relaxed">
                  {group.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-sm text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200/60 dark:border-zinc-700/60"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EDUCATION SECTION */}
      <section className="space-y-6 pt-8 border-t border-zinc-200 dark:border-zinc-800">
        <div>
          <h2 className="text-xs uppercase tracking-[0.2em] text-zinc-400 font-bold mb-2">
            Academic Background
          </h2>
          <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Education
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {personalInfo.education.map((edu, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-sm p-6 space-y-2 shadow-sm"
            >
              <GraduationCap className="w-5 h-5 text-zinc-400 mb-2" />
              <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
                {edu.degree}
              </h3>
              <p className="text-xs font-semibold text-zinc-500">
                {edu.institution}
              </p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 pt-1">
                Focus: {edu.focus}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
