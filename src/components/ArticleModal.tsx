import React, { useState, useEffect, useRef } from 'react';
import { Article } from '../types';
import { X, Clock, Calendar, Share2, Check, ExternalLink, BookOpen } from 'lucide-react';

interface ArticleModalProps {
  article: Article | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!contentRef.current) return;
      const { scrollTop, scrollHeight, clientHeight } = contentRef.current;
      const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
      setScrollProgress(progress || 0);
    };

    const currentRef = contentRef.current;
    if (currentRef) {
      currentRef.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (currentRef) {
        currentRef.removeEventListener('scroll', handleScroll);
      }
    };
  }, [article]);

  if (!article) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-zinc-950/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-sm shadow-sm overflow-hidden my-8 max-h-[90vh] flex flex-col">
        
        {/* Reading Progress Indicator */}
        <div className="w-full bg-zinc-100 dark:bg-zinc-800 h-1">
          <div
            className="bg-zinc-900 dark:bg-zinc-100 h-1 transition-all duration-150"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-zinc-100 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-950/50">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-sm text-[10px] font-mono font-bold uppercase tracking-wider bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200">
              {article.category}
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-zinc-400 font-mono">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-zinc-400 font-mono">
              <Calendar className="w-3.5 h-3.5" />
              {article.date}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="p-2 text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 rounded-sm border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              title="Copy Article Link"
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

        {/* Article Reader Body */}
        <div ref={contentRef} className="p-6 sm:p-10 overflow-y-auto space-y-6 flex-1 text-zinc-800 dark:text-zinc-200 leading-relaxed font-sans">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-3 tracking-tight">
              {article.title}
            </h1>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium italic border-l-2 border-zinc-300 dark:border-zinc-700 pl-4 py-1">
              {article.subtitle}
            </p>
          </div>

          <div className="prose dark:prose-invert max-w-none space-y-4 text-xs sm:text-sm leading-relaxed text-zinc-700 dark:text-zinc-300 whitespace-pre-line">
            {article.contentMarkdown}
          </div>

          {article.externalLink && (
            <div className="pt-6 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
              <span className="text-xs text-zinc-400 font-mono">Originally published on external platform</span>
              <a
                href={article.externalLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100 hover:underline"
              >
                Read on Medium / External
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-zinc-100 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-950/50 flex items-center justify-between">
          <span className="text-xs text-zinc-400 font-mono">Abdulazeez Apata • Writing & Thought Leadership</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 text-xs font-bold uppercase tracking-wider rounded-sm hover:opacity-90 transition-opacity"
          >
            Done Reading
          </button>
        </div>

      </div>
    </div>
  );
};
