import React from 'react';
import { X, Shield } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-zinc-900 border border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[85vh] text-left"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-zinc-800/80 text-zinc-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2">
          <Shield className="w-4 h-4" />
          <span>sakibh.work Legal Policy</span>
        </div>

        {type === 'privacy' ? (
          <div className="space-y-4 text-xs sm:text-sm text-zinc-300 leading-relaxed">
            <h3 className="text-2xl font-bold text-white">Privacy Policy</h3>
            <p className="text-zinc-400">Effective Date: October 2026 · Domain: sakibh.work</p>
            <p>
              At <strong>Sakib Hossen</strong> (&quot;we&quot;, &quot;our&quot;, or &quot;the Agency&quot;), we respect your privacy and are committed to safeguarding personal information collected through our website and services.
            </p>
            <h4 className="text-base font-semibold text-white pt-2">1. Information We Collect</h4>
            <p>
              When you submit an inquiry or schedule a strategy consultation, we collect information such as your name, business name, work email address, website URL, monthly advertising budget range, and any notes provided.
            </p>
            <h4 className="text-base font-semibold text-white pt-2">2. How Information is Used</h4>
            <p>
              Your contact details are solely used to respond to your inquiry, perform preliminary account diagnostics, schedule consultations, and deliver relevant marketing proposals. We never sell, rent, or trade your personal data to third parties.
            </p>
            <h4 className="text-base font-semibold text-white pt-2">3. Measurement & First-Party Analytics</h4>
            <p>
              Our website uses technical performance measurement tools to evaluate user experience and conversion efficiency. We respect user privacy preferences, do not store sensitive payment details on client-side cookies, and comply with standard modern privacy regulations including GDPR and CCPA.
            </p>
            <h4 className="text-base font-semibold text-white pt-2">4. Client Confidentiality & Mutual NDAs</h4>
            <p>
              All advertising account metrics, lead volume figures, and financial data shared by active or prospective clients are treated with strict confidentiality under non-disclosure obligations.
            </p>
          </div>
        ) : (
          <div className="space-y-4 text-xs sm:text-sm text-zinc-300 leading-relaxed">
            <h3 className="text-2xl font-bold text-white">Terms of Service</h3>
            <p className="text-zinc-400">Effective Date: October 2026 · Domain: sakibh.work</p>
            <p>
              By accessing the website at <strong>sakibh.work</strong>, you agree to be bound by these Terms of Service, applicable laws, and regulations.
            </p>
            <h4 className="text-base font-semibold text-white pt-2">1. Scope of Engagement</h4>
            <p>
              Sakib Hossen provides professional performance marketing, conversion tracking, analytics, and creative advisory services. Specific service deliverables, retainers, and performance milestones are governed by individual master services agreements signed between parties.
            </p>
            <h4 className="text-base font-semibold text-white pt-2">2. Account Ownership</h4>
            <p>
              Clients retain 100% intellectual property and administrative master ownership of all third-party advertising accounts (Google Ads, Meta Business Manager, TikTok Ads), analytics properties (GA4, Google Tag Manager), and CRM instances configured during any engagement.
            </p>
            <h4 className="text-base font-semibold text-white pt-2">3. Accuracy of Strategy Consultations</h4>
            <p>
              Strategy audits provided via video consultation are based on the information and access provided by the prospective client. While our engineering methodologies are built on verified data models, external ad platform dynamics, local consumer demand, and client operational fulfillment naturally influence overall sales volume.
            </p>
          </div>
        )}

        <div className="pt-6 mt-6 border-t border-zinc-800 text-right">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-zinc-800 hover:bg-zinc-700 text-white font-medium text-xs rounded-xl cursor-pointer transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
