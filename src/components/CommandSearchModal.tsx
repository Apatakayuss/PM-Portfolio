import * as React from 'react';
import { caseStudies } from '../data/caseStudies';
import { articles } from '../data/articles';
import { automationProjects } from '../data/automations';
import { Search, X, FolderGit2, BookOpen, Cpu, ArrowRight } from 'lucide-react';
import { CaseStudy, Article, AutomationProject } from '../types';

interface CommandSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCaseStudy: (cs: CaseStudy) => void;
  onSelectArticle: (art: Article) => void;
  onSelectAutomation: (auto: AutomationProject) => void;
}

export const CommandSearchModal: React.FC<CommandSearchModalProps> = ({
  isOpen,
  onClose,
  onSelectCaseStudy,
  onSelectArticle,
  onSelectAutomation
}) => {
  const [query, setQuery] = React.useState('');

  if (!isOpen) return null;

  const filteredCaseStudies = caseStudies.filter(
    cs => cs.title.toLowerCase().includes(query.toLowerCase()) ||
          cs.tags.some(t => t.toLowerCase().includes(query.toLowerCase())) ||
          cs.summary.toLowerCase().includes(query.toLowerCase())
  );

  const filteredArticles = articles.filter(
    art => art.title.toLowerCase().includes(query.toLowerCase()) ||
           art.category.toLowerCase().includes(query.toLowerCase()) ||
           art.excerpt.toLowerCase().includes(query.toLowerCase())
  );

  const filteredAutomations = automationProjects.filter(
    auto => auto.title.toLowerCase().includes(query.toLowerCase()) ||
            auto.category.toLowerCase().includes(query.toLowerCase()) ||
            auto.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-zinc-950/70 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3 border-b border-zinc-200 dark:border-zinc-800">
          <Search className="w-5 h-5 text-zinc-400 mr-3 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
            placeholder="Search case studies, writing, automation labs, or skills..."
            className="w-full bg-transparent text-sm text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none font-sans"
            autoFocus
          />
          {query && (
            <button onClick={() => setQuery('')} className="p-1 text-zinc-400 hover:text-zinc-600">
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="ml-2 px-2 py-1 text-xs font-mono text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 border border-zinc-200 dark:border-zinc-800 rounded"
          >
            ESC
          </button>
        </div>

        {/* Search Results */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-6">
          
          {/* Case Studies */}
          {filteredCaseStudies.length > 0 && (
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-2 flex items-center gap-1.5">
                <FolderGit2 className="w-3.5 h-3.5 text-sky-500" />
                Case Studies ({filteredCaseStudies.length})
              </div>
              <div className="space-y-1.5">
                {filteredCaseStudies.map((cs) => (
                  <div
                    key={cs.id}
                    onClick={() => { onSelectCaseStudy(cs); onClose(); }}
                    className="p-3 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800/80 cursor-pointer transition-colors flex items-center justify-between group"
                  >
                    <div>
                      <div className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-sky-600 dark:group-hover:text-sky-400">
                        {cs.title}
                      </div>
                      <div className="text-[11px] text-zinc-500 line-clamp-1">{cs.subtitle}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Automations */}
          {filteredAutomations.length > 0 && (
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-2 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-teal-500" />
                Automation Lab ({filteredAutomations.length})
              </div>
              <div className="space-y-1.5">
                {filteredAutomations.map((auto) => (
                  <div
                    key={auto.id}
                    onClick={() => { onSelectAutomation(auto); onClose(); }}
                    className="p-3 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800/80 cursor-pointer transition-colors flex items-center justify-between group"
                  >
                    <div>
                      <div className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-teal-600 dark:group-hover:text-teal-400 flex items-center gap-2">
                        <span>{auto.title}</span>
                        <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-teal-500/10 text-teal-600 dark:text-teal-400">
                          {auto.status}
                        </span>
                      </div>
                      <div className="text-[11px] text-zinc-500 line-clamp-1">{auto.description}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Articles */}
          {filteredArticles.length > 0 && (
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-2 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-emerald-500" />
                Writing & Articles ({filteredArticles.length})
              </div>
              <div className="space-y-1.5">
                {filteredArticles.map((art) => (
                  <div
                    key={art.id}
                    onClick={() => { onSelectArticle(art); onClose(); }}
                    className="p-3 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800/80 cursor-pointer transition-colors flex items-center justify-between group"
                  >
                    <div>
                      <div className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                        {art.title}
                      </div>
                      <div className="text-[11px] text-zinc-500 line-clamp-1">{art.excerpt}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {filteredCaseStudies.length === 0 && filteredArticles.length === 0 && filteredAutomations.length === 0 && (
            <div className="text-center py-8 text-xs text-zinc-500">
              No matching case studies, articles, or automation labs found for "{query}".
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
