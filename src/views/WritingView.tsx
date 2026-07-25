import React, { useState } from 'react';
import { Article } from '../types';
import { articles } from '../data/articles';
import { Search, BookOpen, Clock, Calendar, ArrowRight, Sparkles, ExternalLink } from 'lucide-react';

interface WritingViewProps {
  onSelectArticle: (art: Article) => void;
}

export const WritingView: React.FC<WritingViewProps> = ({ onSelectArticle }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'Product Management',
    'Fintech',
    'AI',
    'UX',
    'Technology',
    'Career',
    'Personal Reflections'
  ];

  const filteredArticles = articles.filter((art) => {
    const matchesCategory = selectedCategory === 'All' || art.category === selectedCategory;
    const matchesQuery =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.subtitle.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  const featuredArticle = articles.find(a => a.isFeatured);

  return (
    <div className="space-y-16 pb-20">
      
      {/* Header Banner */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 text-xs font-mono border border-zinc-200 dark:border-zinc-700">
          <BookOpen className="w-3.5 h-3.5" />
          Product Thinking & Public Reflection
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          Writing is how I think in public.
        </h1>

        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
          I write about product strategy, fintech system architecture, user experience, AI workflows, and personal resilience to clarify my own mental models and share practical lessons.
        </p>
      </div>

      {/* Featured Article Banner */}
      {featuredArticle && (
        <div
          onClick={() => onSelectArticle(featuredArticle)}
          className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-sm p-8 sm:p-10 transition-all duration-200 hover:border-zinc-400 dark:hover:border-zinc-700 shadow-sm cursor-pointer group space-y-4"
        >
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-zinc-400 uppercase tracking-wider">
            <span className="px-2.5 py-1 rounded-sm bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-bold">
              ★ Featured Article
            </span>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {featuredArticle.readTime}</span>
              <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {featuredArticle.date}</span>
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors leading-snug">
            {featuredArticle.title}
          </h2>

          <p className="text-sm font-medium text-zinc-600 dark:text-zinc-300 italic border-l-2 border-zinc-300 dark:border-zinc-700 pl-4 py-1">
            {featuredArticle.subtitle}
          </p>

          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed line-clamp-3">
            {featuredArticle.excerpt}
          </p>

          <div className="pt-4 flex items-center justify-between text-xs">
            <span className="text-zinc-400 font-mono">Category: {featuredArticle.category}</span>
            <div className="w-8 h-8 border border-zinc-200 dark:border-zinc-700 rounded-sm flex items-center justify-center text-zinc-400 group-hover:bg-zinc-900 group-hover:text-white dark:group-hover:bg-zinc-100 dark:group-hover:text-zinc-900 transition-colors">
              →
            </div>
          </div>
        </div>
      )}

      {/* Filter & Search Controls */}
      <div className="space-y-4 bg-zinc-50 dark:bg-zinc-900/60 p-4 sm:p-6 rounded-sm border border-zinc-100 dark:border-zinc-800 shadow-sm">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search writing & topics..."
              className="w-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-sm pl-9 pr-4 py-2 text-xs text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-900"
            />
          </div>

          <div className="text-xs font-mono text-zinc-400">
            Showing {filteredArticles.length} of {articles.length} Articles
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 rounded-sm text-xs font-medium uppercase tracking-wider transition-all ${
                selectedCategory === cat
                  ? 'bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 font-bold shadow-sm'
                  : 'bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-700 border border-zinc-200/80 dark:border-zinc-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredArticles.map((art) => (
          <div
            key={art.id}
            onClick={() => onSelectArticle(art)}
            className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-sm p-6 sm:p-8 transition-all duration-200 hover:border-zinc-400 dark:hover:border-zinc-700 shadow-sm cursor-pointer flex flex-col justify-between group"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-zinc-400 font-mono">
                <span className="px-2.5 py-1 rounded-sm bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-semibold uppercase tracking-wider text-[10px]">
                  {art.category}
                </span>
                <div className="flex items-center gap-2">
                  <span>{art.readTime}</span>
                </div>
              </div>

              <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
                {art.title}
              </h2>

              <p className="text-xs text-zinc-500 italic border-l-2 border-zinc-200 dark:border-zinc-800 pl-3 py-0.5">
                {art.subtitle}
              </p>

              <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed line-clamp-3">
                {art.excerpt}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between text-xs">
              <span className="text-zinc-400 font-mono">{art.date}</span>
              <div className="w-8 h-8 border border-zinc-200 dark:border-zinc-700 rounded-sm flex items-center justify-center text-zinc-400 group-hover:bg-zinc-900 group-hover:text-white dark:group-hover:bg-zinc-100 dark:group-hover:text-zinc-900 transition-colors">
                →
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
