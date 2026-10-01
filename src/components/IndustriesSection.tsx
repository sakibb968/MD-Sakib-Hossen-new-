import React, { useState } from 'react';
import { industriesData } from '../data/industries';
import { IndustryItem } from '../types';
import { Wrench, AlertCircle, CheckCircle2, ArrowRight, ShieldCheck, DollarSign } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

interface IndustriesSectionProps {
  onOpenBooking: () => void;
  onSelectIndustryForContact: (industryName: string) => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({
  onOpenBooking,
  onSelectIndustryForContact,
}) => {
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryItem>(industriesData[0]);

  const handleSelectIndustry = (industry: IndustryItem) => {
    setSelectedIndustry(industry);
    trackEvent({
      event: 'industry_select',
      industry_id: industry.id,
      cta_name: `Industry Tab: ${industry.name}`,
    });
  };

  return (
    <section id="industries" className="py-24 bg-zinc-950 relative border-t border-zinc-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-3">
            Local Lead-Generation Specialization
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Built for Local Services <br />
            <span className="text-zinc-400 font-normal">Where Inbound Phone Calls Mean Revenue</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 mt-4 leading-relaxed">
            We don't do generic marketing for everyone. We specialize in high-intent emergency and replacement trades across the US, Canada, UK, Europe, and Australia where speed-to-lead and localized search make or break the business.
          </p>
        </div>

        {/* Industry Switcher Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {industriesData.map((ind) => {
            const isSelected = selectedIndustry.id === ind.id;
            return (
              <button
                key={ind.id}
                onClick={() => handleSelectIndustry(ind)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 ${
                  isSelected
                    ? 'bg-emerald-500 text-zinc-950 shadow-md font-bold'
                    : 'bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
                }`}
              >
                <Wrench className="w-3.5 h-3.5" />
                <span>{ind.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Industry Card */}
        <div className="p-8 sm:p-10 rounded-2xl bg-zinc-900/60 border border-zinc-800 backdrop-blur-xl relative">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-8 mb-8 pb-8 border-b border-zinc-800/80">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
                  INDUSTRY BLUEPRINT
                </span>
                <span className="text-zinc-600">·</span>
                <span className="text-xs text-zinc-400 font-mono">
                  Target Market: US / CA / UK / AU / EU
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {selectedIndustry.name}
              </h3>
              <p className="text-base text-zinc-300 leading-relaxed">
                {selectedIndustry.headline}
              </p>
            </div>

            {/* Average Job Ticket Value metric */}
            <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 shrink-0 min-w-[200px]">
              <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 uppercase mb-1">
                <DollarSign className="w-4 h-4 text-emerald-400" />
                <span>Typical Job Value</span>
              </div>
              <div className="text-xl font-bold font-mono text-emerald-400">
                {selectedIndustry.avgJobValue}
              </div>
            </div>
          </div>

          {/* 3-Column Breakdown: The Bottleneck, The Leaks, The Custom Solution */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* The Bottleneck */}
            <div className="p-6 rounded-xl bg-zinc-950/70 border border-rose-950/30">
              <div className="flex items-center gap-2 text-xs font-mono text-rose-400 uppercase tracking-wider mb-3">
                <AlertCircle className="w-4 h-4 text-rose-400" />
                <span>Primary Bottleneck</span>
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed">
                {selectedIndustry.commonBottleneck}
              </p>

              <div className="mt-5 pt-4 border-t border-zinc-900 space-y-2">
                <span className="text-[11px] font-mono text-zinc-500 uppercase block">
                  Typical Wasted Ad Spend Leaks:
                </span>
                {selectedIndustry.leakPoints.map((leak, idx) => (
                  <div key={idx} className="text-xs text-zinc-400 flex items-start gap-2">
                    <span className="text-rose-500 font-mono">✕</span>
                    <span>{leak}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Custom Solution */}
            <div className="p-6 rounded-xl bg-zinc-950/70 border border-emerald-950/40">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider mb-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Our Engineered Solution</span>
              </div>
              <p className="text-sm text-zinc-200 leading-relaxed">
                {selectedIndustry.customSolution}
              </p>

              <div className="mt-6 pt-4 border-t border-zinc-900">
                <span className="text-[11px] font-mono text-emerald-400 uppercase block mb-1">
                  Strategic Focus:
                </span>
                <p className="text-xs text-zinc-400">
                  Direct emergency phone dialing during active business hours, automated SMS dispatch for missed calls, and tight radius control.
                </p>
              </div>
            </div>

            {/* Tracking Blueprint */}
            <div className="p-6 rounded-xl bg-zinc-950/70 border border-teal-950/40 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-teal-400 uppercase tracking-wider mb-3">
                  <ShieldCheck className="w-4 h-4 text-teal-400" />
                  <span>Tracking Blueprint Deployed</span>
                </div>
                <div className="space-y-2.5">
                  {selectedIndustry.trackingBlueprint.map((tp, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                      <span className="text-teal-400 font-mono">0{idx + 1}.</span>
                      <span>{tp}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-900">
                <button
                  onClick={() => {
                    onSelectIndustryForContact(selectedIndustry.name);
                    onOpenBooking();
                  }}
                  className="w-full py-2.5 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-xs rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <span>Discuss {selectedIndustry.name} Strategy</span>
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
