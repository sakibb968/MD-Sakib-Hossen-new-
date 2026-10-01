import React from 'react';
import { workFrameworks } from '../data/workFramework';
import { Shield, CheckCircle, Database, ArrowUpRight, Lock, Code2 } from 'lucide-react';
import { trackCtaClick } from '../utils/analytics';

interface WorkFrameworkSectionProps {
  onOpenBooking: () => void;
}

export const WorkFrameworkSection: React.FC<WorkFrameworkSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="work" className="py-24 bg-zinc-950 relative border-t border-zinc-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-3xl">
            <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-3">
              Technical Architecture & Case Frameworks
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              How We Work & <br />
              <span className="text-zinc-400 font-normal">What We Systematically Improve</span>
            </h2>
            <p className="text-base sm:text-lg text-zinc-400 mt-4 leading-relaxed">
              We do not publish fabricated client logos or manufactured $X million case studies. Instead, we show you the exact technical blueprints, problems, strategies, and measurement models we engineer.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 text-xs text-zinc-400 max-w-sm flex items-start gap-3">
            <Shield className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-zinc-200 block mb-0.5">Integrity & Confidentiality Policy</span>
              Client names and internal financial figures are protected under mutual NDA. We measure success on verifiable client account dashboards.
            </div>
          </div>
        </div>

        {/* Framework Cards */}
        <div className="space-y-8">
          {workFrameworks.map((fw, index) => (
            <div
              key={fw.id}
              className="p-8 sm:p-10 rounded-2xl bg-zinc-900/40 border border-zinc-800/90 hover:border-emerald-500/40 transition-all duration-300 relative overflow-hidden"
            >
              {/* Header metadata */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-zinc-800/80 gap-3">
                <div>
                  <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-1">
                    FRAMEWORK 0{index + 1} // {fw.industry}
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {fw.title}
                  </h3>
                  <div className="text-xs font-mono text-zinc-400 mt-1">
                    Scope: {fw.scope}
                  </div>
                </div>

                {/* Tech chips */}
                <div className="flex flex-wrap gap-1.5 self-start sm:self-center">
                  {fw.technologies.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono text-zinc-300 bg-zinc-950 border border-zinc-800 px-2 py-0.5 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* 3 Steps: Problem -> Strategy -> Solution */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {/* Problem */}
                <div className="p-5 rounded-xl bg-zinc-950/60 border border-zinc-800/70">
                  <div className="text-xs font-mono uppercase tracking-wider text-rose-400 font-bold mb-2 flex items-center gap-1.5">
                    <span>The Challenge / Leak</span>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {fw.problem}
                  </p>
                </div>

                {/* Strategy */}
                <div className="p-5 rounded-xl bg-zinc-950/60 border border-zinc-800/70">
                  <div className="text-xs font-mono uppercase tracking-wider text-sky-400 font-bold mb-2 flex items-center gap-1.5">
                    <span>The Technical Strategy</span>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {fw.strategy}
                  </p>
                </div>

                {/* Solution */}
                <div className="p-5 rounded-xl bg-zinc-950/60 border border-zinc-800/70">
                  <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold mb-2 flex items-center gap-1.5">
                    <span>Engineered Implementation</span>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {fw.solution}
                  </p>
                </div>
              </div>

              {/* Measurement Framework & Verified Results Placeholder */}
              <div className="p-5 rounded-xl bg-zinc-950 border border-zinc-800/90 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="space-y-2 flex-1">
                  <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold block">
                    VERIFIED MEASUREMENT BENCHMARKS & KPIS
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {fw.measurementFramework.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Clearly marked placeholder slot for replacing with specific client numbers once authorized */}
                <div className="p-4 rounded-lg bg-zinc-900/80 border border-dashed border-zinc-700/80 shrink-0 max-w-sm">
                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase mb-1">
                    <Code2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Case Study Slot</span>
                  </div>
                  <p className="text-[11px] text-zinc-400">
                    Template architecture ready for verified live metrics (CPQL, ROAS, qualified call volume) upon signed client disclosure.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div className="mt-14 text-center">
          <p className="text-sm text-zinc-400 mb-4">
            Want to see how this technical framework applies to your exact service area?
          </p>
          <button
            onClick={() => {
              trackCtaClick('Request Custom Framework Breakdown', 'work_section_cta');
              onOpenBooking();
            }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-sm rounded-xl transition-all shadow-md active:scale-[0.98] cursor-pointer"
          >
            <span>Request a Custom Framework Breakdown</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
