import React from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Cpu, Database, Wrench } from 'lucide-react';
import { ServiceItem } from '../types';
import { trackCtaClick } from '../utils/analytics';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onSelectServiceForBooking: (serviceName: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onSelectServiceForBooking,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-zinc-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-zinc-900 border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh] text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-zinc-800/80 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 pr-8">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400 mb-2">
            <span>Pillar: {service.category}</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span>Production Specification</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {service.name}
          </h3>
          <p className="text-sm sm:text-base text-zinc-300 mt-3 leading-relaxed">
            {service.fullDescription}
          </p>
        </div>

        {/* Tracking Signal Mechanism */}
        <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800 mb-6">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-semibold mb-1">
            <Database className="w-4 h-4 text-emerald-400" />
            <span>MEASUREMENT & ATTRIBUTION SIGNAL</span>
          </div>
          <p className="text-xs sm:text-sm text-zinc-300 font-mono">
            {service.trackingSignal}
          </p>
        </div>

        {/* Deliverables List */}
        <div className="mb-6">
          <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3 flex items-center gap-1.5">
            <Wrench className="w-3.5 h-3.5 text-emerald-400" />
            <span>Scope of Technical Deliverables</span>
          </h4>
          <div className="grid grid-cols-1 gap-2.5">
            {service.deliverables.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 p-2.5 rounded-lg bg-zinc-950/40 border border-zinc-800/60 text-xs sm:text-sm text-zinc-200"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-8">
          <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2 flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-teal-400" />
            <span>Technologies & Integration Standards</span>
          </h4>
          <div className="flex flex-wrap gap-2">
            {service.techStack.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono text-zinc-300 bg-zinc-950 border border-zinc-800 px-3 py-1 rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action footer */}
        <div className="pt-5 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-zinc-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Custom scoped to your specific service area & budget.</span>
          </div>

          <button
            onClick={() => {
              trackCtaClick(`Book with ${service.name}`, 'service_detail_modal');
              onSelectServiceForBooking(service.name);
            }}
            className="w-full sm:w-auto px-6 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-sm rounded-lg flex items-center justify-center gap-2 cursor-pointer shadow-md transition-all active:scale-[0.98]"
          >
            <span>Consult on This Service</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
