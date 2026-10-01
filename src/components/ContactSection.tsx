import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, AlertCircle, ArrowUpRight, MessageSquare, ShieldCheck, Mail, Globe, Briefcase } from 'lucide-react';
import { ContactFormData } from '../types';
import { trackEvent, trackCtaClick } from '../utils/analytics';

interface ContactSectionProps {
  onOpenBooking: () => void;
  preselectedService?: string;
}

const AVAILABLE_SERVICES = [
  'Google Ads Management',
  'Meta Ads Management',
  'Conversion Tracking & Analytics',
  'Server-Side GTM & Meta CAPI',
  'Google Enhanced Conversions',
  'Call & Lead Tracking (DNI)',
  'Landing Page CRO',
  'AI Creative & Video Ads',
  'CRM & Marketing Automation',
  'Google Business Profile (GBP)',
];

const BUDGET_TIERS = [
  'Under $2,500 / month',
  '$2,500 – $5,000 / month',
  '$5,000 – $15,000 / month',
  '$15,000+ / month',
];

export const ContactSection: React.FC<ContactSectionProps> = ({
  onOpenBooking,
  preselectedService,
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    businessName: '',
    email: '',
    website: '',
    services: preselectedService ? [preselectedService] : ['Google Ads Management'],
    monthlyBudget: '$2,500 – $5,000 / month',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Update if preselectedService changes
  useEffect(() => {
    if (preselectedService && !formData.services.includes(preselectedService)) {
      setFormData((prev) => ({
        ...prev,
        services: [...prev.services, preselectedService],
      }));
    }
  }, [preselectedService]);

  const toggleService = (srv: string) => {
    setFormData((prev) => {
      const exists = prev.services.includes(srv);
      if (exists) {
        if (prev.services.length === 1) return prev; // Keep at least one
        return { ...prev, services: prev.services.filter((s) => s !== srv) };
      }
      return { ...prev, services: [...prev.services, srv] };
    });
  };

  const validate = (): boolean => {
    const errs: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Full name is required';
    }
    if (!formData.businessName.trim()) {
      errs.businessName = 'Business or company name is required';
    }
    if (!formData.email.trim()) {
      errs.email = 'Valid work email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address';
    }
    if (formData.services.length === 0) {
      errs.services = 'Please select at least one service';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    // Track analytics event
    trackEvent({
      event: 'contact_form_submit',
      form_id: 'primary_contact_intake',
      budget_range: formData.monthlyBudget,
      service_name: formData.services.join(', '),
    });

    // Simulate network submission and save record locally
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Save submission in localStorage for persistence
      try {
        const saved = JSON.parse(localStorage.getItem('sh_contact_submissions') || '[]');
        saved.push({ ...formData, submittedAt: new Date().toISOString() });
        localStorage.setItem('sh_contact_submissions', JSON.stringify(saved));
      } catch (e) {
        // Safe fallback
      }
    }, 850);
  };

  return (
    <section id="contact" className="py-24 bg-zinc-950 relative border-t border-zinc-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 13. Final CTA Block */}
        <div className="mb-20 text-center max-w-3xl mx-auto p-10 rounded-3xl bg-gradient-to-b from-zinc-900/90 to-zinc-950 border border-zinc-800 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-1/2 translate-x-1/2 w-64 h-32 bg-emerald-500/10 blur-[80px] rounded-full pointer-events-none" />

          <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-3">
            Start With Measurable Foundations
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Ready to build a marketing system that actually measures what matters?
          </h2>
          <p className="text-base text-zinc-400 max-w-xl mx-auto mb-8 leading-relaxed">
            Stop guessing where your ad spend goes. Get a direct diagnosis of your tracking signals, campaign structure, and conversion rate.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => {
                trackCtaClick('Book a Strategy Call', 'final_cta_primary');
                onOpenBooking();
              }}
              className="w-full sm:w-auto px-7 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-base rounded-xl transition-all shadow-xl shadow-emerald-950/40 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
            >
              <span>Book a Strategy Call</span>
              <ArrowUpRight className="w-5 h-5" />
            </button>

            <a
              href="#contact-form"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-7 py-3.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white font-medium text-base rounded-xl border border-zinc-800 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Send Us a Message</span>
              <MessageSquare className="w-4 h-4 text-zinc-400" />
            </a>
          </div>
        </div>

        {/* 14. Contact Form Card */}
        <div id="contact-form" className="max-w-4xl mx-auto scroll-mt-24">
          <div className="p-8 sm:p-12 rounded-3xl bg-zinc-900/50 border border-zinc-800 backdrop-blur-xl shadow-2xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-8 mb-8 border-b border-zinc-800/80 gap-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
                  Direct Inquiries & Scoping
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                  Start Your Performance Assessment
                </h3>
                <p className="text-sm text-zinc-400 mt-1">
                  Tell us about your business, current marketing bottlenecks, and goals.
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs text-zinc-400 bg-zinc-950 px-3 py-2 rounded-lg border border-zinc-800">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>NDA & Privacy Respected</span>
              </div>
            </div>

            {isSubmitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold text-white">Inquiry Received</h4>
                <p className="text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-white">{formData.fullName}</strong>. We've recorded your project requirements for <strong className="text-white">{formData.businessName}</strong>. Sakib Hossen will personally review your domain and respond within 24 business hours.
                </p>

                <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={onOpenBooking}
                    className="w-full sm:w-auto px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-sm rounded-xl cursor-pointer transition-all flex items-center justify-center gap-2 shadow-md"
                  >
                    <span>Prefer an Immediate Call? Pick a Time Slot</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: '',
                        businessName: '',
                        email: '',
                        website: '',
                        services: ['Google Ads Management'],
                        monthlyBudget: '$2,500 – $5,000 / month',
                        message: '',
                      });
                    }}
                    className="text-xs text-zinc-400 hover:text-zinc-200 underline cursor-pointer py-2"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Business */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono text-zinc-300 uppercase tracking-wider mb-2">
                      Your Name <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className={`w-full bg-zinc-950 border rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none transition-colors ${
                        errors.fullName ? 'border-rose-500 ring-1 ring-rose-500' : 'border-zinc-800 focus:border-emerald-500'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-300 uppercase tracking-wider mb-2">
                      Business Name <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      placeholder="e.g. Apex Garage Door Pros"
                      className={`w-full bg-zinc-950 border rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none transition-colors ${
                        errors.businessName ? 'border-rose-500 ring-1 ring-rose-500' : 'border-zinc-800 focus:border-emerald-500'
                      }`}
                    />
                    {errors.businessName && (
                      <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.businessName}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Email & Website */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono text-zinc-300 uppercase tracking-wider mb-2">
                      Work Email <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@apexgaragedoors.com"
                      className={`w-full bg-zinc-950 border rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none transition-colors ${
                        errors.email ? 'border-rose-500 ring-1 ring-rose-500' : 'border-zinc-800 focus:border-emerald-500'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-300 uppercase tracking-wider mb-2">
                      Website URL
                    </label>
                    <input
                      type="text"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      placeholder="e.g. https://apexgaragedoors.com"
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Services Needed Multi-Select */}
                <div>
                  <label className="block text-xs font-mono text-zinc-300 uppercase tracking-wider mb-2">
                    Services Needed (Select all that apply) <span className="text-emerald-400">*</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                    {AVAILABLE_SERVICES.map((service) => {
                      const isSelected = formData.services.includes(service);
                      return (
                        <button
                          type="button"
                          key={service}
                          onClick={() => toggleService(service)}
                          className={`p-2.5 rounded-lg border text-xs text-left font-medium transition-all cursor-pointer flex items-center justify-between ${
                            isSelected
                              ? 'bg-emerald-500/10 border-emerald-500/50 text-emerald-300'
                              : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200'
                          }`}
                        >
                          <span className="truncate">{service}</span>
                          <span className={`w-3.5 h-3.5 rounded-sm border flex items-center justify-center shrink-0 ml-2 ${
                            isSelected ? 'bg-emerald-500 border-emerald-400 text-zinc-950 text-[10px]' : 'border-zinc-700'
                          }`}>
                            {isSelected && '✓'}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Monthly Advertising Budget Selector */}
                <div>
                  <label className="block text-xs font-mono text-zinc-300 uppercase tracking-wider mb-2">
                    Monthly Advertising Budget (Ad Spend)
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {BUDGET_TIERS.map((tier) => {
                      const isSelected = formData.monthlyBudget === tier;
                      return (
                        <button
                          type="button"
                          key={tier}
                          onClick={() => setFormData({ ...formData, monthlyBudget: tier })}
                          className={`p-3 rounded-lg border text-xs text-center font-medium transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-emerald-500 text-zinc-950 font-bold border-emerald-400 shadow-sm'
                              : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200'
                          }`}
                        >
                          {tier}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono text-zinc-300 uppercase tracking-wider mb-2">
                    Current Bottleneck or Campaign Details
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe your current setup, service area radius, or any tracking issues you are experiencing..."
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-zinc-500">
                    <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Inquiries answered directly by Sakib Hossen.</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-3.5 bg-emerald-500 hover:bg-emerald-400 disabled:bg-zinc-800 text-zinc-950 disabled:text-zinc-500 font-bold text-sm rounded-xl transition-all shadow-lg shadow-emerald-950/40 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-zinc-950 border-t-transparent rounded-full animate-spin" />
                        <span>Validating Submission...</span>
                      </span>
                    ) : (
                      <>
                        <span>Submit Project Assessment</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
