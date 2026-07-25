import * as React from 'react';
import { MetricItem } from '../types';
import { CheckCircle2, Info, ArrowUpRight, ShieldCheck } from 'lucide-react';

interface MetricCardProps {
  metric: MetricItem;
  onExplore?: (category: string) => void;
  children?: React.ReactNode;
}

export const MetricCard: React.FC<MetricCardProps> = ({ metric }) => {
  const [showDetail, setShowDetail] = React.useState(false);

  return (
    <div className="relative group bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-sm p-6 transition-all duration-200 hover:border-zinc-400 dark:hover:border-zinc-700 shadow-sm flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-sm text-[10px] font-mono font-bold uppercase tracking-wider bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700/80">
            <ShieldCheck className="w-3.5 h-3.5" />
            Verified Outcome
          </span>
          <button
            onClick={() => setShowDetail(!showDetail)}
            className="text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 p-1 transition-colors"
            title="View Context & Contribution"
          >
            <Info className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-3xl lg:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 font-mono">
            {metric.number}
          </span>
          {metric.unit && (
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
              {metric.unit}
            </span>
          )}
        </div>

        <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 mb-2">
          {metric.shortDescription}
        </h3>

        <p className="text-xs text-zinc-500 dark:text-zinc-400 line-clamp-2 mb-4 leading-relaxed">
          {metric.context}
        </p>
      </div>

      <div>
        <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between text-xs text-zinc-400">
          <span className="font-mono uppercase tracking-widest text-[10px] font-bold">
            PM Impact
          </span>
          <button
            onClick={() => setShowDetail(!showDetail)}
            className="inline-flex items-center gap-1 font-mono text-[11px] text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors"
          >
            {showDetail ? 'Hide Context' : 'My Contribution'}
            <ArrowUpRight className={`w-3.5 h-3.5 transition-transform ${showDetail ? 'rotate-90' : ''}`} />
          </button>
        </div>

        {showDetail && (
          <div className="mt-3 p-3 bg-zinc-50 dark:bg-zinc-800/60 rounded-sm border border-zinc-200 dark:border-zinc-700/60 text-xs leading-relaxed text-zinc-600 dark:text-zinc-300 space-y-2 animate-in fade-in duration-150">
            <div>
              <span className="font-bold text-zinc-900 dark:text-zinc-100 block mb-0.5">Direct Contribution:</span>
              {metric.contribution}
            </div>
            <div className="text-[10px] font-mono text-zinc-400 italic pt-1 border-t border-zinc-200 dark:border-zinc-700/40">
              Verified from production deployment logs.
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
