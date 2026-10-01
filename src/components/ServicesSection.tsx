import React, { useState } from 'react';
import { 
  Search, 
  Share2, 
  Activity, 
  Code, 
  BarChart3, 
  Server, 
  ShieldCheck, 
  PhoneCall, 
  TrendingUp, 
  Sparkles, 
  MessageSquare, 
  Cpu, 
  MapPin, 
  ArrowUpRight,
  Filter
} from 'lucide-react';
import { servicesData } from '../data/services';
import { ServiceItem } from '../types';
import { ServiceDetailModal } from './ServiceDetailModal';
import { trackEvent } from '../utils/analytics';

const iconMap: Record<string, React.ElementType> = {
  Search,
  Share2,
  Activity,
  Code,
  BarChart3,
  Server,
  ShieldCheck,
  PhoneCall,
  TrendingUp,
  Sparkles,
  MessageSquare,
  Cpu,
  MapPin,
};

interface ServicesSectionProps {
  onOpenBooking: () => void;
  onSelectServiceForBooking: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenBooking,
  onSelectServiceForBooking,
}) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'advertising' | 'tracking' | 'creative' | 'automation'>('all');

  const filteredServices = servicesData.filter((service) => {
    if (activeFilter === 'all') return true;
    return service.category === activeFilter;
  });

  const handleOpenDetail = (service: ServiceItem) => {
    trackEvent({
      event: 'service_view',
      service_id: service.id,
      service_name: service.name,
      cta_location: 'services_grid',
    });
    setSelectedService(service);
  };

  const handleFilterChange = (filter: typeof activeFilter) => {
    setActiveFilter(filter);
    trackEvent({
      event: 'system_step_view',
      cta_name: `Filter Services: ${filter}`,
    });
  };

  return (
    <section id="services" className="py-24 bg-zinc-950 relative border-t border-zinc-900 scroll-mt-20">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-emerald-600/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-3">
              Core Capabilities & Engineering
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              High-Precision Services <br />
              <span className="text-zinc-400 font-normal">Engineered for Direct Response</span>
            </h2>
            <p className="text-base text-zinc-400 mt-4 leading-relaxed">
              We bridge the gap between media buying, first-party server-side tracking, and conversion rate optimization to build durable lead generation systems.
            </p>
          </div>

          {/* Interactive Category Filter - Allowed as functional buttons with click handlers */}
          <div className="flex items-center gap-1.5 p-1.5 bg-zinc-900/90 border border-zinc-800 rounded-xl overflow-x-auto max-w-full">
            <button
              onClick={() => handleFilterChange('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-emerald-500 text-zinc-950 shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              All Services ({servicesData.length})
            </button>
            <button
              onClick={() => handleFilterChange('tracking')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activeFilter === 'tracking'
                  ? 'bg-emerald-500 text-zinc-950 shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Tracking & Signals (5)
            </button>
            <button
              onClick={() => handleFilterChange('advertising')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activeFilter === 'advertising'
                  ? 'bg-emerald-500 text-zinc-950 shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Advertising & Paid (3)
            </button>
            <button
              onClick={() => handleFilterChange('creative')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activeFilter === 'creative'
                  ? 'bg-emerald-500 text-zinc-950 shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              CRO & Creative (3)
            </button>
            <button
              onClick={() => handleFilterChange('automation')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activeFilter === 'automation'
                  ? 'bg-emerald-500 text-zinc-950 shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Automation & CRM (1)
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredServices.map((service) => {
            const Icon = iconMap[service.iconName] || Search;
            return (
              <div
                key={service.id}
                onClick={() => handleOpenDetail(service)}
                className="group relative flex flex-col p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-emerald-500/50 hover:bg-zinc-900/80 transition-all duration-300 cursor-pointer shadow-lg shadow-black/20 hover:shadow-emerald-950/20"
              >
                {/* Header: Icon & Category unboxed text */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-zinc-950 border border-zinc-800 group-hover:border-emerald-500/40 flex items-center justify-center text-emerald-400 transition-colors shadow-inner">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                    {service.category}
                  </span>
                </div>

                {/* Service Name */}
                <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors mb-2.5 flex items-center justify-between">
                  <span>{service.name}</span>
                  <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all opacity-0 group-hover:opacity-100" />
                </h3>

                {/* Short description */}
                <p className="text-sm text-zinc-400 leading-relaxed flex-1 mb-5">
                  {service.shortDescription}
                </p>

                {/* Key Deliverables count & Interactive Learn More */}
                <div className="pt-4 border-t border-zinc-800/60 flex items-center justify-between text-xs">
                  <span className="text-zinc-400 font-mono">
                    {service.deliverables.length} Deliverables
                  </span>
                  <span className="font-semibold text-emerald-400 group-hover:text-emerald-300 flex items-center gap-1">
                    Learn more &rarr;
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom banner for custom enterprise requests */}
        <div className="mt-14 p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-base font-bold text-white">
              Need a full-stack growth retainer or an urgent tracking migration?
            </h4>
            <p className="text-sm text-zinc-400 mt-1">
              We frequently handle emergency tracking rebuilds, Consent Mode v2 migrations, and dedicated multi-channel management.
            </p>
          </div>
          <button
            onClick={onOpenBooking}
            className="px-6 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-sm rounded-lg whitespace-nowrap cursor-pointer transition-all active:scale-[0.98] shadow-md"
          >
            Schedule Consultation
          </button>
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <ServiceDetailModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
          onSelectServiceForBooking={(name) => {
            setSelectedService(null);
            onSelectServiceForBooking(name);
          }}
        />
      )}
    </section>
  );
};
