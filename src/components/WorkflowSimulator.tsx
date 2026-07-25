import React, { useState } from 'react';
import { automationProjects } from '../data/automations';
import { Play, CheckCircle, RefreshCw, Cpu, Zap, ArrowRight, ShieldCheck, Terminal } from 'lucide-react';

export const WorkflowSimulator: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState(automationProjects[0]);
  const [isSimulating, setIsSimulating] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(-1);
  const [logs, setLogs] = useState<string[]>([]);

  const runSimulation = () => {
    setIsSimulating(true);
    setCurrentStepIndex(0);
    setLogs([`[TRIGGER FIRED] ${selectedProject.trigger}`]);

    const steps = selectedProject.workflow;
    steps.forEach((step, idx) => {
      setTimeout(() => {
        setCurrentStepIndex(idx);
        setLogs(prev => [...prev, `[STEP ${idx + 1}: ${step.step.toUpperCase()}] ${step.label}: ${step.detail}`]);
        if (idx === steps.length - 1) {
          setIsSimulating(false);
          setLogs(prev => [...prev, `[COMPLETED] Successfully executed ${selectedProject.title}. Time saved: ${selectedProject.timeSaved}`]);
        }
      }, (idx + 1) * 900);
    });
  };

  return (
    <div className="bg-zinc-950 border border-zinc-800 rounded-sm p-6 text-zinc-100 shadow-sm space-y-6">
      
      {/* Selector & Run CTA */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 border-b border-zinc-800">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase tracking-widest">
            <Zap className="w-4 h-4 text-zinc-200" />
            Interactive Automation Simulator
          </div>
          <h3 className="text-base font-bold text-white mt-1">
            Test AI Workflow Execution Engine
          </h3>
        </div>

        <button
          onClick={runSimulation}
          disabled={isSimulating}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-zinc-100 hover:bg-white text-zinc-900 font-bold text-xs uppercase tracking-wider rounded-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
        >
          {isSimulating ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Play className="w-4 h-4 fill-zinc-900" />}
          {isSimulating ? 'Executing Pipeline...' : 'Run Simulation'}
        </button>
      </div>

      {/* Project Selector Chips */}
      <div className="flex flex-wrap gap-2">
        {automationProjects.map((proj) => (
          <button
            key={proj.id}
            onClick={() => {
              setSelectedProject(proj);
              setCurrentStepIndex(-1);
              setLogs([]);
            }}
            disabled={isSimulating}
            className={`px-3 py-1.5 rounded-sm text-xs font-mono transition-all ${
              selectedProject.id === proj.id
                ? 'bg-zinc-800 text-zinc-100 border border-zinc-600 font-bold'
                : 'bg-zinc-900 text-zinc-400 hover:bg-zinc-800 border border-zinc-800'
            }`}
          >
            {proj.title}
          </button>
        ))}
      </div>

      {/* Workflow Step Visualizer */}
      <div className="space-y-3">
        <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest flex items-center justify-between">
          <span>Pipeline Nodes</span>
          <span className="text-zinc-500">Status: {projStatusLabel(selectedProject.status)}</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-5 gap-2">
          {selectedProject.workflow.map((step, idx) => {
            const isActive = currentStepIndex === idx;
            const isDone = currentStepIndex > idx;
            return (
              <div
                key={idx}
                className={`p-3 rounded-sm border text-xs transition-all flex flex-col justify-between ${
                  isActive
                    ? 'bg-zinc-800 border-zinc-300 text-zinc-100 ring-1 ring-zinc-400'
                    : isDone
                    ? 'bg-zinc-900 border-zinc-700 text-zinc-300'
                    : 'bg-zinc-950 border-zinc-800/80 text-zinc-600'
                }`}
              >
                <div>
                  <div className="text-[10px] font-mono uppercase text-zinc-500 mb-1 flex items-center justify-between">
                    <span>0{idx + 1}. {step.step}</span>
                    {isDone && <CheckCircle className="w-3 h-3 text-zinc-300" />}
                  </div>
                  <div className="font-bold text-zinc-200 mb-1 leading-snug">{step.label}</div>
                </div>
                <div className="text-[10px] text-zinc-400 leading-tight mt-2">{step.detail}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Console Log Terminal */}
      <div className="bg-black p-4 rounded-sm border border-zinc-800 font-mono text-xs space-y-1.5 max-h-40 overflow-y-auto">
        <div className="flex items-center justify-between text-zinc-500 border-b border-zinc-800 pb-1 mb-2 text-[10px] uppercase tracking-wider">
          <span className="flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-zinc-300" />
            Console Stream
          </span>
          <span>Target: Gemini API / Event Dispatcher</span>
        </div>
        {logs.length === 0 ? (
          <div className="text-zinc-600 italic text-[11px]">Click 'Run Simulation' to observe live event dispatching...</div>
        ) : (
          logs.map((log, i) => (
            <div key={i} className="text-zinc-300 leading-relaxed text-[11px]">
              {log}
            </div>
          ))
        )}
      </div>

      {/* Summary Box */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-zinc-900/80 rounded-sm border border-zinc-800 text-xs">
        <div>
          <span className="text-zinc-500 font-mono text-[10px] uppercase tracking-wider block mb-1">Tools Integrated:</span>
          <div className="flex flex-wrap gap-1">
            {selectedProject.toolsUsed.map((t, i) => (
              <span key={i} className="px-2 py-0.5 rounded-sm bg-zinc-800 text-zinc-300 font-mono text-[10px]">
                {t}
              </span>
            ))}
          </div>
        </div>
        <div>
          <span className="text-zinc-500 font-mono text-[10px] uppercase tracking-wider block mb-1">Human-In-The-Loop Guardrail:</span>
          <span className="text-zinc-300">{selectedProject.humanInTheLoop}</span>
        </div>
        <div>
          <span className="text-zinc-500 font-mono text-[10px] uppercase tracking-wider block mb-1">Failure Handling Protocol:</span>
          <span className="text-zinc-300">{selectedProject.failureHandling}</span>
        </div>
      </div>

    </div>
  );
};

function projStatusLabel(status: string) {
  switch (status) {
    case 'Built': return 'Production Live';
    case 'Prototyped': return 'Functional Prototype';
    case 'Experimented with': return 'Lab Experiment';
    default: return 'Architectural Concept';
  }
}
