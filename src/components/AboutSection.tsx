import React from 'react';
import { ArrowUpRight, ShieldCheck, CheckCircle2, User, Globe, Code, LineChart } from 'lucide-react';
import { trackCtaClick } from '../utils/analytics';

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="about" className="py-24 bg-zinc-950 relative border-t border-zinc-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Profile & Positioning */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800 shadow-xl relative overflow-hidden">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-zinc-950 border border-zinc-700 flex items-center justify-center font-mono font-extrabold text-2xl text-emerald-400 shadow-inner">
                  SH
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Sakib Hossen</h3>
                  <p className="text-xs font-mono text-emerald-400">
                    Performance Marketing & Tracking Specialist
                  </p>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    Agency Principal · sakibh.work
                  </p>
                </div>
              </div>

              <div className="space-y-3.5 text-xs text-zinc-300 font-mono border-t border-zinc-800/80 pt-5">
                <div className="flex items-center justify-between">
                  <span className="text-zinc-500">Core Focus:</span>
                  <span className="text-zinc-200">Local Lead Generation & Direct Response</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-500">Geographic Scope:</span>
                  <span className="text-zinc-200">US, Canada, UK, Europe, Australia</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-500">Infrastructure:</span>
                  <span className="text-zinc-200">sGTM, Meta CAPI, GA4, Call DNI</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-500">Engagement Model:</span>
                  <span className="text-emerald-400">Direct Partner Access (Zero Bureaucracy)</span>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-zinc-800/80">
                <div className="flex items-center gap-2 text-xs text-zinc-400">
                  <Globe className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Available for selective local service client partnerships.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Agency Story & Human Credibility */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest">
              About The Agency
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Bridging the Divide Between <br />
              <span className="text-emerald-400">Marketing Strategy & Technical Engineering</span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
              <p>
                In the digital marketing world, businesses are typically forced to choose between two incomplete options: creative agencies that build flashy ads without understanding conversion tracking, or technical developers who write tracking code but don’t understand how to write direct-response copy that sells.
              </p>
              <p>
                <strong className="text-white">Sakib Hossen</strong> was founded to bridge that gap. We unite performance media buying, server-side data analytics, conversion rate optimization, and automated CRM pipelines into a cohesive discipline.
              </p>
              <p>
                Our philosophy is simple: we treat our clients' advertising spend with the same discipline as private equity capital. Before scaling budgets, we verify that tracking containers are airtight, negative search terms are rigorously managed, and telephone calls are attributed to the exact dollar.
              </p>
            </div>

            {/* Core Values / Commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
              <div className="flex items-start gap-2.5 text-xs text-zinc-300 p-3 rounded-lg bg-zinc-900/50 border border-zinc-800/80">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Direct communication with the technical specialist actually managing your campaigns.</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-zinc-300 p-3 rounded-lg bg-zinc-900/50 border border-zinc-800/80">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>100% account transparency: you retain master ownership of all platforms.</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-zinc-300 p-3 rounded-lg bg-zinc-900/50 border border-zinc-800/80">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>No fabricated numbers or vanity reports. Only verified cost per qualified lead.</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-zinc-300 p-3 rounded-lg bg-zinc-900/50 border border-zinc-800/80">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Rapid responsiveness with sub-24-hour turnaround on technical requests.</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={() => {
                  trackCtaClick('Book a Strategy Call', 'about_section');
                  onOpenBooking();
                }}
                className="w-full sm:w-auto px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-sm rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md active:scale-[0.98]"
              >
                <span>Book a Strategy Call With Sakib</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <span className="text-xs text-zinc-400 font-mono">
                Direct consultation · 25 minutes · No sales pressure
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
