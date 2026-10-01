import React, { useState } from 'react';
import { ArrowUpRight, ArrowDown, CheckCircle2, ChevronRight, Layers, Database, BarChart2, Cpu, Sparkles } from 'lucide-react';
import { trackCtaClick, trackEvent } from '../utils/analytics';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreServices }) => {
  const [activeStage, setActiveStage] = useState<number>(1); // Default to Tracking stage (highlighting our core differentiator)

  const stages = [
    {
      id: 0,
      name: 'Ads',
      subtitle: 'Traffic Generation',
      icon: Layers,
      color: 'text-sky-400',
      borderColor: 'border-sky-500/40',
      bgGlow: 'from-sky-500/10 to-transparent',
      detail: 'High-intent search & social campaigns targeting emergency and planned local buyers.',
      technicalTags: ['Google Ads Search', 'Meta Paid Social', 'GBP Local Ads'],
    },
    {
      id: 1,
      name: 'Tracking',
      subtitle: 'First-Party Signals',
      icon: Database,
      color: 'text-emerald-400',
      borderColor: 'border-emerald-500/40',
      bgGlow: 'from-emerald-500/10 to-transparent',
      detail: 'Server-side GTM, Meta CAPI, and DNI call attribution linking every lead to keyword source.',
      technicalTags: ['Server GTM', 'Meta CAPI', 'Call DNI', 'Enhanced Conversions'],
    },
    {
      id: 2,
      name: 'Data',
      subtitle: 'Clean Attribution',
      icon: BarChart2,
      color: 'text-teal-400',
      borderColor: 'border-teal-500/40',
      bgGlow: 'from-teal-500/10 to-transparent',
      detail: 'GA4 custom exploration and Looker Studio dashboards displaying actual cost per qualified lead.',
      technicalTags: ['GA4 DataLayer', 'Looker Studio', 'BigQuery Pipeline'],
    },
    {
      id: 3,
      name: 'Optimization',
      subtitle: 'Algorithmic Calibration',
      icon: Cpu,
      color: 'text-amber-400',
      borderColor: 'border-amber-500/40',
      bgGlow: 'from-amber-500/10 to-transparent',
      detail: 'Closed offline CRM sales fed back to ad algorithms to bid aggressively for high-margin jobs.',
      technicalTags: ['Smart Bidding Feedback', 'Offline Conversion Import', 'CRO'],
    },
    {
      id: 4,
      name: 'Growth',
      subtitle: 'Scalable Revenue',
      icon: Sparkles,
      color: 'text-emerald-300',
      borderColor: 'border-emerald-400/40',
      bgGlow: 'from-emerald-400/10 to-transparent',
      detail: 'Predictable qualified customer acquisition that scales with your business capacity.',
      technicalTags: ['High-Ticket Jobs', 'Lower CPQL', 'Scalable Unit Economics'],
    },
  ];

  const handleStageClick = (idx: number, name: string) => {
    setActiveStage(idx);
    trackEvent({
      event: 'system_step_view',
      step_number: String(idx + 1),
      cta_name: `Hero Pipeline Node: ${name}`,
    });
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-emerald-600/15 via-teal-500/10 to-sky-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-emerald-500/5 blur-[90px] rounded-full pointer-events-none -z-10" />

      {/* Subtle Grid texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Unboxed Metadata Discipline - Zero Pill Rules strictly followed */}
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono text-zinc-400 mb-6 tracking-wide">
            <span className="text-emerald-400 font-semibold">Performance Marketing</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span className="text-zinc-300">Advanced Tracking</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span className="text-zinc-400">Conversion-Focused Creative</span>
          </div>

          {/* Large Editorial Hero Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] mb-6">
            Turn Traffic Into <br />
            <span className="bg-gradient-to-r from-zinc-100 via-emerald-200 to-teal-300 bg-clip-text text-transparent">
              Measurable Growth.
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-lg sm:text-xl text-zinc-300 font-normal leading-relaxed max-w-2xl mx-auto mb-10">
            We build performance-driven advertising, tracking, creative, and digital systems that help businesses generate more qualified leads and revenue.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <button
              onClick={() => {
                trackCtaClick('Book a Strategy Call', 'hero_primary');
                onOpenBooking();
              }}
              className="w-full sm:w-auto px-7 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-base rounded-xl transition-all duration-200 shadow-xl shadow-emerald-950/50 hover:shadow-emerald-500/25 flex items-center justify-center gap-2 cursor-pointer group active:scale-[0.98]"
            >
              <span>Book a Strategy Call</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            <button
              onClick={() => {
                trackCtaClick('Explore Our Services', 'hero_secondary');
                onExploreServices();
              }}
              className="w-full sm:w-auto px-7 py-3.5 bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 hover:text-white font-medium text-base rounded-xl border border-zinc-800 hover:border-zinc-700 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Explore Our Services</span>
              <ArrowDown className="w-4 h-4 text-zinc-400" />
            </button>
          </div>

          {/* Target Clients Scope - Unboxed typography */}
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-zinc-400">
            <span className="text-zinc-500">Target Focus:</span>
            <span>Local Service Businesses</span>
            <span aria-hidden="true" className="text-zinc-700">·</span>
            <span>US & Canada</span>
            <span aria-hidden="true" className="text-zinc-700">·</span>
            <span>UK & Europe</span>
            <span aria-hidden="true" className="text-zinc-700">·</span>
            <span>Australia</span>
          </div>
        </div>

        {/* Sophisticated Pipeline Architecture Visual: Ads → Tracking → Data → Optimization → Growth */}
        <div className="mt-16 sm:mt-20 max-w-5xl mx-auto">
          <div className="bg-zinc-900/70 border border-zinc-800/90 rounded-2xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden">
            {/* Header info */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-zinc-800/80 gap-3">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
                  Performance Growth Loop Architecture
                </span>
                <p className="text-sm text-zinc-400 mt-0.5">
                  Click any stage in the pipeline to inspect how signal fidelity unlocks profitable scale.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Live Signal Flow</span>
              </div>
            </div>

            {/* Pipeline Stage Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 relative z-10">
              {stages.map((stage, idx) => {
                const IconComponent = stage.icon;
                const isSelected = activeStage === idx;
                return (
                  <button
                    key={stage.id}
                    onClick={() => handleStageClick(idx, stage.name)}
                    className={`relative p-3.5 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? `bg-zinc-800/90 ${stage.borderColor} shadow-lg shadow-black/40 ring-1 ring-emerald-500/30`
                        : 'bg-zinc-950/60 border-zinc-800/60 hover:border-zinc-700 hover:bg-zinc-900/40 text-zinc-400'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className={`p-1.5 rounded-md bg-zinc-900/90 border border-zinc-800 ${isSelected ? stage.color : 'text-zinc-400'}`}>
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-mono text-zinc-400">0{idx + 1}</span>
                    </div>
                    <div className="font-semibold text-sm text-zinc-100 flex items-center gap-1">
                      {stage.name}
                      {isSelected && <ChevronRight className="w-3.5 h-3.5 text-emerald-400 shrink-0" />}
                    </div>
                    <div className="text-[11px] text-zinc-400 truncate mt-0.5">
                      {stage.subtitle}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Stage Inspection Card */}
            <div className="mt-6 p-5 rounded-xl bg-zinc-950/80 border border-zinc-800/80 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1.5 max-w-xl">
                <div className="flex items-center gap-2">
                  <span className={`text-xs font-mono font-semibold ${stages[activeStage].color}`}>
                    STAGE 0{activeStage + 1} — {stages[activeStage].name.toUpperCase()}
                  </span>
                  <span className="text-zinc-600">·</span>
                  <span className="text-xs text-zinc-400">{stages[activeStage].subtitle}</span>
                </div>
                <p className="text-sm text-zinc-200 leading-relaxed">
                  {stages[activeStage].detail}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2 pt-2 md:pt-0 border-t md:border-t-0 border-zinc-800/60">
                {stages[activeStage].technicalTags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono text-zinc-300 bg-zinc-900 border border-zinc-700/60 px-2.5 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Data flow footer note */}
            <div className="mt-5 pt-4 border-t border-zinc-800/60 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 gap-2">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                Zero guesswork: Every ad dollar connects directly to an active technician dispatch.
              </span>
              <button
                onClick={() => onExploreServices()}
                className="text-emerald-400 hover:text-emerald-300 font-medium inline-flex items-center gap-1 cursor-pointer"
              >
                Inspect Technical Implementations
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
