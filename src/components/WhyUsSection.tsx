import React from 'react';
import { Database, Target, Cpu, TrendingUp, ShieldCheck, Zap, ArrowUpRight } from 'lucide-react';
import { trackCtaClick } from '../utils/analytics';

interface WhyUsSectionProps {
  onOpenBooking: () => void;
}

export const WhyUsSection: React.FC<WhyUsSectionProps> = ({ onOpenBooking }) => {
  const differentiators = [
    {
      icon: Database,
      title: 'Tracking-First Foundation',
      description: 'We never spend an ad dollar until client & server-side tracking, call attribution, and offline conversion loops are proven and verified.',
    },
    {
      icon: Target,
      title: 'Conversion-Focused Strategy',
      description: 'Traffic without conversions is an expense. We optimize landing page friction, click-to-call mechanics, and user journey flow to maximize booked jobs.',
    },
    {
      icon: Zap,
      title: 'Creative + Performance Synergy',
      description: 'We do not separate media buying from ad creative. Direct-response angles, video hooks, and ad copy are built from real customer objections and search intent.',
    },
    {
      icon: Cpu,
      title: 'Data-Driven Decisions',
      description: 'No guesswork, personal hunches, or arbitrary opinions. Every bid adjustment, negative keyword, and budget reallocation is rooted in clean first-party telemetry.',
    },
    {
      icon: TrendingUp,
      title: 'Built for Measurable Growth',
      description: 'We measure success in booked jobs, qualified dispatches, and actual revenue—not vanity impressions, click volume, or empty form fills.',
    },
    {
      icon: ShieldCheck,
      title: 'Modern Technology Stack',
      description: 'We engineer using server-side GTM, Meta CAPI, Google Enhanced Conversions, and first-party edge cookies designed to withstand modern browser privacy changes.',
    },
  ];

  return (
    <section className="py-24 bg-zinc-950 relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-3">
            Agency Philosophy & Standards
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Why Partner With <br />
            <span className="text-emerald-400">Sakib Hossen?</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 mt-4 leading-relaxed">
            Most agencies operate as outsourced order-takers who burn retainers on broad keywords. We operate as technical growth partners who treat your marketing budget with the rigor of capital allocation.
          </p>
        </div>

        {/* Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((diff, index) => {
            const Icon = diff.icon;
            return (
              <div
                key={index}
                className="p-7 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-emerald-500/40 transition-all duration-300 relative group"
              >
                <div className="w-12 h-12 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-emerald-400 mb-5 group-hover:scale-105 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>

                <div className="text-xs font-mono text-zinc-400 mb-1">
                  PRINCIPLE 0{index + 1}
                </div>

                <h3 className="text-lg font-bold text-white mb-2.5">
                  {diff.title}
                </h3>

                <p className="text-sm text-zinc-400 leading-relaxed">
                  {diff.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Direct comparison callout */}
        <div className="mt-14 p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold">
              Transparent Agency Relationship
            </span>
            <h4 className="text-xl font-bold text-white">
              You own 100% of your ad accounts, tracking containers, and data.
            </h4>
            <p className="text-sm text-zinc-400 max-w-2xl">
              We never hold accounts hostage. Everything we build stays directly in your Google Ads, Meta Business Manager, and Google Tag Manager properties from Day 1.
            </p>
          </div>

          <button
            onClick={() => {
              trackCtaClick('Book a Strategy Call', 'why_us_banner');
              onOpenBooking();
            }}
            className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-sm rounded-lg flex items-center gap-2 whitespace-nowrap cursor-pointer shadow-md transition-all active:scale-[0.98]"
          >
            <span>Book a Strategy Call</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
