import React, { useState } from 'react';
import { AlertTriangle, CheckCircle, ArrowRight, Zap, RefreshCw, EyeOff, ShieldAlert, Cpu } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

interface DataProblemSectionProps {
  onOpenBooking: () => void;
}

export const DataProblemSection: React.FC<DataProblemSectionProps> = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState<'problem' | 'solution'>('solution');

  const problems = [
    {
      icon: EyeOff,
      title: 'Ad Spend Without Reliable Tracking',
      description: 'Pouring thousands into Google or Meta without knowing which specific keyword or ad creative generated a paying customer.',
    },
    {
      icon: ShieldAlert,
      title: 'Missing & Dropped Conversions',
      description: 'iOS Safari privacy changes and browser ad-blockers purge up to 35% of client-side tracking pixels, blinding ad algorithms.',
    },
    {
      icon: AlertTriangle,
      title: 'Blind Multi-Channel Attribution',
      description: 'Treating a $3,500 emergency HVAC job click identically to a non-converting tire-kicker who bounced in 4 seconds.',
    },
    {
      icon: RefreshCw,
      title: 'Weak Landing Pages & High Friction',
      description: 'Directing expensive mobile clicks to cluttered homepages with buried phone numbers and bloated 10-field contact forms.',
    },
    {
      icon: Zap,
      title: 'Slow Speed-to-Lead Follow-Up',
      description: 'Allowing web leads to sit in an unmonitored inbox for hours instead of firing immediate automated SMS dispatches within 60 seconds.',
    },
    {
      icon: Cpu,
      title: 'Creative Fatigue & Blind Bidding',
      description: 'Running the same stagnant stock imagery for 6 months until click-through rates plummet and cost-per-click doubles.',
    },
  ];

  const pillars = [
    {
      title: 'Traffic',
      desc: 'High-intent Google Search, localized call campaigns & laser-focused Meta paid social targeting real homeowners.',
      status: 'Qualified Inbound',
    },
    {
      title: 'Tracking',
      desc: 'Server-side GTM, Meta CAPI, Google Enhanced Conversions, and Dynamic Call Tracking with 100% signal capture.',
      status: 'First-Party Signals',
    },
    {
      title: 'Creative',
      desc: 'Direct-response visual hooks, problem-agitation video angles, and localized creative tailored to urgent homeowner needs.',
      status: 'High Thumb-Stop',
    },
    {
      title: 'Conversion',
      desc: 'Dedicated single-purpose landing pages with prominent tap-to-call bars, trust badges, and frictionless intake.',
      status: 'Maximum Intent',
    },
    {
      title: 'Automation',
      desc: 'Sub-60-second SMS routing to on-call dispatchers, missed-call text-back, and automated CRM pipeline synchronization.',
      status: 'Zero Leaks',
    },
  ];

  return (
    <section className="py-24 bg-zinc-950 border-t border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-3">
            The Fundamental Flaw in Modern Advertising
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5">
            Your marketing is only as good as the <br className="hidden sm:inline" />
            <span className="text-emerald-400">data behind it.</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
            Most businesses don't have an advertising problem—they have a measurement and infrastructure problem. When your tracking is broken, ad algorithms optimize for junk clicks instead of revenue.
          </p>

          {/* Interactive Toggle between Broken Setup vs Engineered Solution */}
          <div className="mt-8 inline-flex items-center p-1 rounded-xl bg-zinc-900/90 border border-zinc-800">
            <button
              onClick={() => {
                setActiveTab('problem');
                trackEvent({ event: 'system_step_view', cta_name: 'Toggle: Typical Leaky Funnel' });
              }}
              className={`px-5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'problem'
                  ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              The Typical Broken Setup
            </button>
            <button
              onClick={() => {
                setActiveTab('solution');
                trackEvent({ event: 'system_step_view', cta_name: 'Toggle: Sakib Hossen Engineered System' });
              }}
              className={`px-5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'solution'
                  ? 'bg-emerald-500 text-zinc-950 shadow-md font-bold'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              The Sakib Hossen Growth System
            </button>
          </div>
        </div>

        {/* Dynamic Display based on active toggle */}
        {activeTab === 'problem' ? (
          <div className="animate-in fade-in duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {problems.map((prob, i) => {
                const Icon = prob.icon;
                return (
                  <div
                    key={i}
                    className="p-6 rounded-2xl bg-zinc-900/40 border border-rose-950/40 hover:border-rose-800/60 transition-colors relative"
                  >
                    <div className="w-10 h-10 rounded-lg bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-zinc-100 mb-2">{prob.title}</h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">{prob.description}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 p-5 rounded-xl bg-rose-950/20 border border-rose-900/40 text-center max-w-2xl mx-auto">
              <span className="text-sm text-rose-300 font-medium">
                The Result: High ad spend, erratic lead volume, low conversion rates, and no clear way to verify ROI.
              </span>
            </div>
          </div>
        ) : (
          <div className="animate-in fade-in duration-300">
            {/* The Connected Solution: Traffic + Tracking + Creative + Conversion + Automation */}
            <div className="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm relative overflow-hidden">
              <div className="text-center max-w-2xl mx-auto mb-10">
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">
                  End-to-End Synergy
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  How We Connect the Entire Marketing Chain
                </h3>
                <p className="text-sm text-zinc-400 mt-2">
                  No isolated silos. Every layer feeds high-fidelity signals into the next step, creating a self-reinforcing compound loop.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
                {pillars.map((pillar, i) => (
                  <div
                    key={i}
                    className="flex flex-col p-5 rounded-xl bg-zinc-950/80 border border-zinc-800/80 relative group hover:border-emerald-500/40 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono text-emerald-400 font-semibold">
                        0{i + 1}
                      </span>
                      <span className="text-[11px] font-mono text-zinc-400 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">
                        {pillar.status}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-1.5">
                      {pillar.title}
                    </h4>

                    <p className="text-xs text-zinc-400 leading-relaxed flex-1">
                      {pillar.desc}
                    </p>

                    <div className="mt-4 pt-3 border-t border-zinc-900 flex items-center text-xs text-emerald-400/90 font-medium">
                      <CheckCircle className="w-3.5 h-3.5 mr-1 text-emerald-400" />
                      Frictionless Hand-off
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom actionable banner */}
              <div className="mt-10 p-6 rounded-xl bg-gradient-to-r from-emerald-950/40 via-zinc-900 to-zinc-950 border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="space-y-1 text-center sm:text-left">
                  <h4 className="text-base font-bold text-white">
                    Need a professional audit of your current tracking & ad setup?
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-400">
                    We review your GTM containers, GA4 signals, and Google Ads query reports with zero obligation.
                  </p>
                </div>
                <button
                  onClick={onOpenBooking}
                  className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-sm rounded-lg whitespace-nowrap flex items-center gap-2 cursor-pointer shadow-md transition-all active:scale-[0.98]"
                >
                  <span>Request Account Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
