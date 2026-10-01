import React from 'react';
import { techStackData } from '../data/techStack';
import { Layers, ShieldCheck } from 'lucide-react';

export const TechStackSection: React.FC = () => {
  return (
    <section className="py-24 bg-zinc-950 relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-3">
            Ecosystem Integrations & Infrastructure
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            The Modern Performance & <br />
            <span className="text-emerald-400">Measurement Stack</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 mt-4 leading-relaxed">
            We operate across the industry's leading advertising, tracking, infrastructure, and automation platforms to guarantee resilient data pipelines.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {techStackData.map((item, index) => (
            <div
              key={index}
              className="p-5 rounded-xl bg-zinc-900/40 border border-zinc-800/80 hover:border-emerald-500/40 hover:bg-zinc-900/70 transition-all duration-200 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400">
                    {item.category}
                  </span>
                  <span className="text-[10px] font-mono text-zinc-400 bg-zinc-950 px-2 py-0.5 rounded border border-zinc-800">
                    {item.role}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors mb-2">
                  {item.name}
                </h3>

                <p className="text-xs text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-zinc-800/60 flex items-center gap-1.5 text-[11px] text-zinc-400 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80" />
                <span>Production Verified</span>
              </div>
            </div>
          ))}
        </div>

        {/* Transparent Compliance Note */}
        <div className="mt-12 text-center text-xs text-zinc-400 flex items-center justify-center gap-2 max-w-xl mx-auto">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>
            Independent technical implementations configured via official API protocols. No unverified partner endorsements claimed.
          </span>
        </div>
      </div>
    </section>
  );
};
