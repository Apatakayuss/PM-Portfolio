import React from 'react';

interface DiagramProps {
  type: 'event-driven' | 'fraud-api' | 'asset-lifecycle' | 'merchant-pos' | 'savings-growth' | 'bill-reconciliation' | 'automation-pipeline';
  className?: string;
}

export const ProductDiagram: React.FC<DiagramProps> = ({ type, className = '' }) => {
  if (type === 'event-driven') {
    return (
      <div className={`p-6 bg-slate-900 text-slate-100 rounded-xl border border-slate-800 font-mono text-sm ${className}`}>
        <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
          <span className="text-xs font-semibold tracking-wider uppercase text-emerald-400">Architecture Transformation</span>
          <span className="text-xs text-slate-400">Cron Polling vs Event-Driven Webhook</span>
        </div>
        
        <div className="space-y-6">
          {/* Legacy Cron Flow */}
          <div className="p-4 bg-slate-950/80 rounded-lg border border-red-500/20">
            <div className="text-xs text-red-400 font-bold mb-2 flex items-center justify-between">
              <span>BEFORE: Legacy Cron Polling (40-60s Latency)</span>
              <span className="text-red-400/80">85% Success Rate</span>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-slate-300">
              <div className="p-2.5 bg-slate-800 rounded border border-slate-700 w-full md:w-auto text-center">User Initiates Transfer</div>
              <span className="text-slate-500">→</span>
              <div className="p-2.5 bg-slate-800 rounded border border-slate-700 w-full md:w-auto text-center">DB Status = PENDING</div>
              <span className="text-slate-500">→</span>
              <div className="p-2.5 bg-red-950/60 text-red-300 rounded border border-red-800/50 w-full md:w-auto text-center">Cron Job (30s Interval)</div>
              <span className="text-slate-500">→</span>
              <div className="p-2.5 bg-slate-800 rounded border border-slate-700 w-full md:w-auto text-center">Poll Bank Endpoint</div>
            </div>
          </div>

          {/* New Event-Driven Flow */}
          <div className="p-4 bg-slate-950/80 rounded-lg border border-emerald-500/30">
            <div className="text-xs text-emerald-400 font-bold mb-2 flex items-center justify-between">
              <span>AFTER: Event-Driven Webhook + Retry Failover (~10s Latency)</span>
              <span className="text-emerald-400">96% Success Rate</span>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-slate-300">
              <div className="p-2.5 bg-emerald-950/40 text-emerald-200 rounded border border-emerald-800/40 w-full md:w-auto text-center">Transfer Request</div>
              <span className="text-emerald-500">→</span>
              <div className="p-2.5 bg-emerald-950/40 text-emerald-200 rounded border border-emerald-800/40 w-full md:w-auto text-center">HMAC Webhook Listener</div>
              <span className="text-emerald-500">→</span>
              <div className="p-2.5 bg-emerald-950/40 text-emerald-200 rounded border border-emerald-800/40 w-full md:w-auto text-center">Bank Status Push</div>
              <span className="text-emerald-500">→</span>
              <div className="p-2.5 bg-emerald-900/60 text-emerald-100 font-bold rounded border border-emerald-500/50 w-full md:w-auto text-center">Instant UI Broadcast</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'fraud-api') {
    return (
      <div className={`p-6 bg-slate-900 text-slate-100 rounded-xl border border-slate-800 font-mono text-sm ${className}`}>
        <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
          <span className="text-xs font-semibold tracking-wider uppercase text-sky-400">Real-Time Risk Scoring Engine</span>
          <span className="text-xs text-slate-400">Latency: &lt;180ms Payload Eval</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs">
          <div className="p-3 bg-slate-800 rounded border border-slate-700 flex flex-col justify-between">
            <div className="font-bold text-sky-300 mb-1">1. API Ingestion</div>
            <div className="text-slate-400 text-[11px]">Payload: Sender, Receiver, Amount, IP, Device ID, Velocity</div>
          </div>
          <div className="p-3 bg-slate-800 rounded border border-slate-700 flex flex-col justify-between">
            <div className="font-bold text-sky-300 mb-1">2. CBN Rule Checks</div>
            <div className="text-slate-400 text-[11px]">PEP lists, statutory thresholds, rapid velocity spikes</div>
          </div>
          <div className="p-3 bg-slate-800 rounded border border-slate-700 flex flex-col justify-between">
            <div className="font-bold text-sky-300 mb-1">3. Risk Scoring</div>
            <div className="text-slate-400 text-[11px]">Calculate Score (0-100) based on weighted parameters</div>
          </div>
          <div className="p-3 bg-slate-800 rounded border border-slate-700 flex flex-col justify-between">
            <div className="font-bold text-sky-300 mb-1">4. Automated Action</div>
            <div className="text-slate-400 text-[11px]">Pass (&lt;30), Hold Review (30-70), Decline (&gt;70)</div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'asset-lifecycle') {
    return (
      <div className={`p-6 bg-slate-900 text-slate-100 rounded-xl border border-slate-800 font-mono text-sm ${className}`}>
        <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
          <span className="text-xs font-semibold tracking-wider uppercase text-amber-400">ISO 20000-1 IT Asset Lifecycle</span>
          <span className="text-xs text-slate-400">Single Source of Truth</span>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
          <div className="p-2.5 bg-slate-800 rounded border border-slate-700">Procurement</div>
          <span className="text-slate-500">→</span>
          <div className="p-2.5 bg-amber-950/60 text-amber-200 rounded border border-amber-800/40">QR Tagged</div>
          <span className="text-slate-500">→</span>
          <div className="p-2.5 bg-slate-800 rounded border border-slate-700">HR Sync Assigned</div>
          <span className="text-slate-500">→</span>
          <div className="p-2.5 bg-slate-800 rounded border border-slate-700">Quarterly Audit Scan</div>
          <span className="text-slate-500">→</span>
          <div className="p-2.5 bg-slate-800 rounded border border-slate-700">Decommission</div>
        </div>
      </div>
    );
  }

  if (type === 'savings-growth') {
    return (
      <div className={`p-6 bg-slate-900 text-slate-100 rounded-xl border border-slate-800 font-mono text-sm ${className}`}>
        <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
          <span className="text-xs font-semibold tracking-wider uppercase text-emerald-400">K-Save Deposit Trajectory</span>
          <span className="text-xs text-emerald-400">₦2+ Billion Year 1 Goal</span>
        </div>
        <div className="h-32 flex items-end justify-between gap-2 pt-4 px-2 border-b border-slate-800">
          <div className="w-1/6 bg-emerald-900/40 border-t border-emerald-500/30 rounded-t h-[15%] text-[10px] text-center pt-1 text-slate-400">Q1: ₦180M</div>
          <div className="w-1/6 bg-emerald-900/60 border-t border-emerald-500/50 rounded-t h-[35%] text-[10px] text-center pt-1 text-slate-300">Q2: ₦550M</div>
          <div className="w-1/6 bg-emerald-800/70 border-t border-emerald-500/70 rounded-t h-[65%] text-[10px] text-center pt-1 text-slate-200">Q3: ₦1.2B</div>
          <div className="w-1/6 bg-emerald-600 border-t border-emerald-300 rounded-t h-[100%] text-[10px] text-center pt-1 text-white font-bold">Q4: ₦2.1B</div>
        </div>
      </div>
    );
  }

  if (type === 'bill-reconciliation') {
    return (
      <div className={`p-6 bg-slate-900 text-slate-100 rounded-xl border border-slate-800 font-mono text-sm ${className}`}>
        <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
          <span className="text-xs font-semibold tracking-wider uppercase text-violet-400">Bill Transaction State Machine</span>
          <span className="text-xs text-slate-400">5-Min Auto Reversal</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 text-[11px] text-center">
          <div className="p-2 bg-slate-800 rounded border border-slate-700">1. INITIATED</div>
          <div className="p-2 bg-slate-800 rounded border border-slate-700">2. DEBITED</div>
          <div className="p-2 bg-amber-950/60 text-amber-200 rounded border border-amber-800/40">3. VENDOR PENDING</div>
          <div className="p-2 bg-emerald-950/60 text-emerald-200 rounded border border-emerald-800/40">4A. SUCCESS TOKEN</div>
          <div className="p-2 bg-rose-950/60 text-rose-200 rounded border border-rose-800/40">4B. AUTO REFUND</div>
        </div>
      </div>
    );
  }

  return (
    <div className={`p-6 bg-slate-900 text-slate-100 rounded-xl border border-slate-800 font-mono text-sm ${className}`}>
      <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
        <span className="text-xs font-semibold tracking-wider uppercase text-teal-400">Automation Workflow Loop</span>
        <span className="text-xs text-slate-400">TRIGGER → AI → ACTION → OUTPUT</span>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-xs">
        <div className="p-2.5 bg-slate-800 rounded border border-slate-700 text-center w-full md:w-auto">Event Trigger</div>
        <span className="text-slate-500">→</span>
        <div className="p-2.5 bg-teal-950/60 text-teal-200 rounded border border-teal-800/40 text-center w-full md:w-auto">LLM Processing</div>
        <span className="text-slate-500">→</span>
        <div className="p-2.5 bg-slate-800 rounded border border-slate-700 text-center w-full md:w-auto">Rule Evaluation</div>
        <span className="text-slate-500">→</span>
        <div className="p-2.5 bg-slate-800 rounded border border-slate-700 text-center w-full md:w-auto">Action Execution</div>
      </div>
    </div>
  );
};
