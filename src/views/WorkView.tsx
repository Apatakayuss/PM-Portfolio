import React, { useState } from 'react';
import { CategoryFilter, CaseStudy } from '../types';
import { caseStudies, selectedProjects } from '../data/caseStudies';
import { Search, Filter, ArrowRight, ShieldCheck, Layers, Building, Calendar, Sparkles } from 'lucide-react';

interface WorkViewProps {
  onSelectCaseStudy: (cs: CaseStudy) => void;
}

export const WorkView: React.FC<WorkViewProps> = ({ onSelectCaseStudy }) => {
  const [selectedFilter, setSelectedFilter] = useState<CategoryFilter>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filterOptions: CategoryFilter[] = [
    'All',
    'Fintech',
    'Payments',
    'AI',
    'Automation',
    'Product Strategy',
    'Technical Product',
    'UX',
    'Operations'
  ];

  const filteredCaseStudies = caseStudies.filter((cs) => {
    const matchesFilter = selectedFilter === 'All' || cs.tags.includes(selectedFilter);
    const matchesQuery = 
      cs.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cs.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cs.company.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesQuery;
  });

  return (
    <div className="space-y-16 pb-20">
      
      {/* Header & Positioning */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 text-xs font-mono border border-zinc-200 dark:border-zinc-700">
          <Layers className="w-3.5 h-3.5" />
          Product Problems & Evidence of Impact
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          Work & Case Studies
        </h1>
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
          I organize my work around product problems, architectural decisions, and verified outcomes rather than generic job descriptions.
        </p>
      </div>

      {/* Filter & Search Bar */}
      <div className="space-y-4 bg-zinc-50 dark:bg-zinc-900/60 p-4 sm:p-6 rounded-sm border border-zinc-100 dark:border-zinc-800 shadow-sm">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Search Input */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search case studies & tags..."
              className="w-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-sm pl-9 pr-4 py-2 text-xs text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-900"
            />
          </div>

          <div className="text-xs font-mono text-zinc-400">
            Showing {filteredCaseStudies.length} of {caseStudies.length} Case Studies
          </div>
        </div>

        {/* Category Filter Chips */}
        <div className="flex flex-wrap items-center gap-2 pt-2">
          {filterOptions.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-3 py-1 rounded-sm text-xs font-medium uppercase tracking-wider transition-all ${
                selectedFilter === filter
                  ? 'bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 font-bold shadow-sm'
                  : 'bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-700 border border-zinc-200/80 dark:border-zinc-700'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="space-y-6">
        <div className="text-xs uppercase tracking-[0.2em] text-zinc-400 font-bold">
          Primary Case Studies
        </div>

        {filteredCaseStudies.length === 0 ? (
          <div className="text-center py-16 bg-white dark:bg-zinc-900 rounded-sm border border-zinc-100 dark:border-zinc-800 text-xs text-zinc-500">
            No case studies found matching "{searchQuery}" with filter "{selectedFilter}".
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredCaseStudies.map((cs) => (
              <div
                key={cs.id}
                onClick={() => onSelectCaseStudy(cs)}
                className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-sm p-6 sm:p-8 transition-all duration-200 hover:border-zinc-400 dark:hover:border-zinc-700 shadow-sm cursor-pointer flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  
                  {/* Company & Role Badges */}
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-zinc-400 uppercase tracking-wider">
                    <span className="flex items-center gap-1.5 font-bold text-zinc-800 dark:text-zinc-200">
                      <Building className="w-3.5 h-3.5" />
                      {cs.company}
                    </span>
                    <span>{cs.role}</span>
                  </div>

                  <h2 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-zinc-50 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
                    {cs.title}
                  </h2>

                  <p className="text-xs text-zinc-500 italic border-l-2 border-zinc-200 dark:border-zinc-800 pl-3 py-0.5">
                    {cs.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed line-clamp-3">
                    {cs.summary}
                  </p>

                  {/* Impact Highlights */}
                  <div className="grid grid-cols-3 gap-2 pt-2">
                    {cs.impactMetrics.slice(0, 3).map((m, idx) => (
                      <div key={idx} className="p-2.5 bg-zinc-50 dark:bg-zinc-800/60 rounded-sm border border-zinc-200/80 dark:border-zinc-800">
                        <div className="text-sm font-bold font-mono text-zinc-900 dark:text-zinc-100">
                          {m.value}
                        </div>
                        <div className="text-[10px] text-zinc-400 line-clamp-1">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                </div>

                <div className="pt-6 mt-6 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between text-xs">
                  <div className="flex flex-wrap gap-1">
                    {cs.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded-sm bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                        #{tag}
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
        )}
      </div>

      {/* Selected Projects (Smaller Scope Showcase) */}
      <section className="space-y-6 pt-8 border-t border-zinc-200 dark:border-zinc-800">
        <div>
          <h2 className="text-xs uppercase tracking-[0.2em] text-zinc-400 font-bold mb-2">
            Additional Initiatives
          </h2>
          <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Selected Projects
          </h3>
          <p className="text-xs text-zinc-500 mt-1">
            Summary cards for complementary products, utility platforms, and digital tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {selectedProjects.map((proj) => (
            <div
              key={proj.id}
              className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-sm p-6 space-y-3 flex flex-col justify-between shadow-sm"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-zinc-400 font-mono uppercase tracking-wider">
                  <span>{proj.category}</span>
                  <span className="text-[10px]">{proj.role}</span>
                </div>

                <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
                  {proj.title}
                </h3>

                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  {proj.description}
                </p>
              </div>

              <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800 space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 font-bold block">
                  Deliverables:
                </span>
                <div className="flex flex-wrap gap-1">
                  {proj.highlights.map((h, i) => (
                    <span key={i} className="text-[10px] px-2 py-0.5 rounded-sm bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                      • {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Confidentiality Notice */}
        <div className="p-4 bg-zinc-50 dark:bg-zinc-900/60 rounded-sm border border-zinc-200 dark:border-zinc-800 text-xs text-zinc-500 dark:text-zinc-400 space-y-1">
          <span className="font-bold text-zinc-800 dark:text-zinc-200 block text-[11px] font-mono uppercase tracking-wider">[CONFIDENTIALITY NOTE]</span>
          <p className="leading-relaxed">
            Specific proprietary architecture schemas, customer PII datasets, and unreleased strategic roadmaps have been sanitized to honor non-disclosure agreements while preserving authentic product thinking and problem methodologies.
          </p>
        </div>
      </section>

    </div>
  );
};
