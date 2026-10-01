import React, { useState } from 'react';
import { processData } from '../data/process';
import { CheckCircle2, ChevronRight, FileText, ArrowRight } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

interface ProcessSectionProps {
  onOpenBooking: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenBooking }) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const handleStepClick = (idx: number, title: string) => {
    setActiveStep(idx);
    trackEvent({
      event: 'system_step_view',
      step_number: String(idx + 1),
      cta_name: `Process Step: ${title}`,
    });
  };

  const current = processData[activeStep];

  return (
    <section id="process" className="py-24 bg-zinc-950 relative border-t border-zinc-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-3">
            Predictable Execution
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Our 5-Step Process <br />
            <span className="text-zinc-400 font-normal">From Signal Audit to Profitable Scale</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 mt-4 leading-relaxed">
            No chaotic sprints or unpredictable experimentation. We follow a battle-tested rollout protocol designed to eliminate wasted budget before scaling traffic.
          </p>
        </div>

        {/* Step Timeline Indicator */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-10">
          {processData.map((step, idx) => {
            const isSelected = activeStep === idx;
            return (
              <button
                key={step.number}
                onClick={() => handleStepClick(idx, step.title)}
                className={`relative flex flex-col p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-zinc-900 border-emerald-500/50 shadow-lg shadow-black/30 ring-1 ring-emerald-500/30'
                    : 'bg-zinc-950/60 border-zinc-800/80 hover:bg-zinc-900/40 hover:border-zinc-700'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-mono font-bold ${isSelected ? 'text-emerald-400' : 'text-zinc-400'}`}>
                    {step.number}
                  </span>
                  {isSelected && (
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  )}
                </div>

                <div className="font-bold text-base text-zinc-100 flex items-center justify-between">
                  <span>{step.title}</span>
                  {isSelected && <ChevronRight className="w-4 h-4 text-emerald-400" />}
                </div>

                <div className="text-[11px] text-zinc-400 mt-1 truncate">
                  {step.phase}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed Card */}
        <div className="p-8 sm:p-10 rounded-2xl bg-zinc-900/60 border border-zinc-800 backdrop-blur-xl relative">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
            <div className="flex-1 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2.5 py-1 rounded">
                  STEP {current.number}
                </span>
                <span className="text-xs text-zinc-400 font-mono">
                  Phase: {current.phase}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {current.number}. {current.title}
              </h3>

              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-2xl">
                {current.description}
              </p>

              {/* Tangible Deliverable Banner */}
              <div className="mt-6 p-4 rounded-xl bg-zinc-950 border border-zinc-800/90 flex items-start gap-3">
                <FileText className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold block">
                    STAGE DELIVERABLE
                  </span>
                  <p className="text-sm text-zinc-200 font-medium mt-0.5">
                    {current.deliverable}
                  </p>
                </div>
              </div>
            </div>

            {/* Activities Checklist */}
            <div className="w-full lg:w-96 p-6 rounded-xl bg-zinc-950 border border-zinc-800/90 space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">
                Specific Step Activities
              </h4>

              {current.activities.map((activity, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{activity}</span>
                </div>
              ))}

              <div className="pt-4 mt-4 border-t border-zinc-900">
                <button
                  onClick={onOpenBooking}
                  className="w-full py-2.5 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-xs rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <span>Initiate Discovery for Your Business</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
