import React, { useState } from 'react';
import { Layers, Database, Sparkles, MessageSquare, TrendingUp, Check, ArrowRight, ShieldCheck } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

interface PerformanceSystemSectionProps {
  onOpenBooking: () => void;
}

export const PerformanceSystemSection: React.FC<PerformanceSystemSectionProps> = ({ onOpenBooking }) => {
  const [activeStep, setActiveStep] = useState<number>(1); // Highlight TRACK by default

  const stages = [
    {
      id: 0,
      code: 'ATTRACT',
      title: 'High-Intent Customer Acquisition',
      channels: 'Google Ads / Meta Ads',
      icon: Layers,
      color: 'text-sky-400',
      bgColor: 'bg-sky-500/10',
      borderColor: 'border-sky-500/40',
      description: 'We position your offer directly in front of homeowners and local buyers at the precise moment they have emergency intent or need scheduled repairs.',
      keyMechanisms: [
        'Single-Theme Ad Group (STAG) search query segmentation',
        'Negative keyword lists eliminating DIY, salary, and job queries',
        'Radius targeting restricted to your highest-margin zip codes',
        'Direct-response creative hooks addressing urgent customer fears',
      ],
      outputSignal: 'High-intent visitor arrives on landing page with UTM & GCLID parameters intact.',
    },
    {
      id: 1,
      code: 'TRACK',
      title: 'Resilient Server & First-Party Signals',
      channels: 'GTM / GA4 / CAPI / Enhanced Conversions',
      icon: Database,
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10',
      borderColor: 'border-emerald-500/40',
      description: 'We establish bulletproof server-side tracking containers so no conversion signal is dropped due to iOS Safari cookie expiration or browser ad-blockers.',
      keyMechanisms: [
        'Server-side Google Tag Manager (sGTM) on first-party subdomain',
        'Meta CAPI with Event ID deduplication and CIP hashing',
        'Google Enhanced Conversions passing SHA-256 hashed customer data',
        'Dynamic Number Insertion (DNI) attributing phone calls to keywords',
      ],
      outputSignal: '100% verified conversion telemetry pushed to ad platforms with zero duplicate counts.',
    },
    {
      id: 2,
      code: 'CONVERT',
      title: 'Frictionless Conversion Architecture',
      channels: 'Landing Pages / CRO / Creative',
      icon: Sparkles,
      color: 'text-teal-400',
      bgColor: 'bg-teal-500/10',
      borderColor: 'border-teal-500/40',
      description: 'We eliminate cognitive friction on mobile screens. Visitors see prominent tap-to-call mechanics, transparent trust badges, and multi-step micro-commitment forms.',
      keyMechanisms: [
        'Thumb-zone mobile UI optimized for emergency one-hand browsing',
        'Sub-1.2 second mobile load times on edge server networks',
        'Clear guarantees, license verification, and verified insurance badges',
        'Interactive quote calculators pre-qualifying homeowner eligibility',
      ],
      outputSignal: 'Verified inbound phone call connected or multi-step quote request submitted.',
    },
    {
      id: 3,
      code: 'FOLLOW UP',
      title: 'Instant Automated Dispatch & Nurture',
      channels: 'CRM / Automation / Lead Management',
      icon: MessageSquare,
      color: 'text-amber-400',
      bgColor: 'bg-amber-500/10',
      borderColor: 'border-amber-500/40',
      description: 'Speed-to-lead is the single biggest predictor of booked revenue. We trigger instant automated SMS alerts to dispatchers and automated missed-call text-back.',
      keyMechanisms: [
        'Immediate SMS ping to on-call technician within 45 seconds of lead intake',
        'Automated missed-call text-back ("Sorry we missed you, how can we help?")',
        'Automated email/SMS confirmation with technician bio and appointment window',
        'CRM status sync (Housecall Pro, ServiceTitan, HubSpot, GoHighLevel)',
      ],
      outputSignal: 'Lead converted into active scheduled dispatch with recorded pipeline value.',
    },
    {
      id: 4,
      code: 'OPTIMIZE',
      title: 'Offline Revenue Algorithmic Feedback',
      channels: 'Reporting / Data / Continuous Improvement',
      icon: TrendingUp,
      color: 'text-indigo-400',
      bgColor: 'bg-indigo-500/10',
      borderColor: 'border-indigo-500/40',
      description: 'The growth loop closes when actual invoiced revenue is synced back to Google and Meta. Ad bidding algorithms learn to bid for profit, not just clicks.',
      keyMechanisms: [
        'Offline conversion imports matching closed sales to original GCLID',
        'Value-based bidding calibration (tROAS instead of blind Maximize Clicks)',
        'Weekly negative keyword expansion and search query pruning',
        'Unified Looker Studio dashboard tracking real cost per booked job',
      ],
      outputSignal: 'Self-improving bidding loop lowering customer acquisition costs over time.',
    },
  ];

  const handleSelectStage = (idx: number, code: string) => {
    setActiveStep(idx);
    trackEvent({
      event: 'system_step_view',
      step_number: String(idx + 1),
      cta_name: `Performance System Stage: ${code}`,
    });
  };

  const current = stages[activeStep];

  return (
    <section id="system" className="py-24 bg-zinc-950 relative border-t border-zinc-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-3">
            The Closed-Loop Methodology
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            The Performance System
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 mt-4 leading-relaxed">
            Advertising without tracking is gambling. Tracking without conversion optimization is wasted data. We unite all five phases into an unbroken, measurable revenue engine.
          </p>
        </div>

        {/* Visual Connected Flow Navigator */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-10">
          {stages.map((stage, idx) => {
            const Icon = stage.icon;
            const isSelected = activeStep === idx;
            return (
              <button
                key={stage.id}
                onClick={() => handleSelectStage(idx, stage.code)}
                className={`relative flex flex-col p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? `bg-zinc-900 ${stage.borderColor} shadow-xl ring-1 ring-emerald-500/40`
                    : 'bg-zinc-950/60 border-zinc-800/80 hover:bg-zinc-900/40 hover:border-zinc-700'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-mono font-bold ${stage.color}`}>
                    0{idx + 1}
                  </span>
                  <div className={`p-1.5 rounded-md ${stage.bgColor} ${stage.color}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div className="font-extrabold text-base text-zinc-100 tracking-wide">
                  {stage.code}
                </div>
                <div className="text-xs text-zinc-400 mt-1 line-clamp-1">
                  {stage.channels}
                </div>

                {/* Active indicator bar */}
                {isSelected && (
                  <div className="absolute bottom-0 left-3 right-3 h-0.5 bg-emerald-400 rounded-full" />
                )}
              </button>
            );
          })}
        </div>

        {/* Deep Dive on Selected Phase */}
        <div className="p-8 sm:p-10 rounded-2xl bg-zinc-900/60 border border-zinc-800 backdrop-blur-xl relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
            <div className="flex-1 space-y-4">
              <div className="flex items-center gap-3">
                <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded bg-zinc-950 border border-zinc-800 ${current.color}`}>
                  PHASE 0{current.id + 1} // {current.code}
                </span>
                <span className="text-xs text-zinc-400 font-mono">
                  Channels: {current.channels}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {current.title}
              </h3>

              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-2xl">
                {current.description}
              </p>

              {/* Output signal banner */}
              <div className="mt-5 p-4 rounded-xl bg-zinc-950/90 border border-zinc-800/80 flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-400 mt-1.5 shrink-0 animate-pulse" />
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold block">
                    TELEMETRY HAND-OFF TO NEXT STAGE
                  </span>
                  <p className="text-xs sm:text-sm text-zinc-300 mt-0.5">
                    {current.outputSignal}
                  </p>
                </div>
              </div>
            </div>

            {/* Mechanisms List */}
            <div className="w-full lg:w-96 p-6 rounded-xl bg-zinc-950 border border-zinc-800/90 flex flex-col justify-between">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-4 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Technical Execution Controls</span>
                </h4>

                <div className="space-y-3">
                  {current.keyMechanisms.map((mechanism, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-300">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{mechanism}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-900">
                <button
                  onClick={onOpenBooking}
                  className="w-full py-2.5 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-xs rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <span>Build This System for Your Business</span>
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
