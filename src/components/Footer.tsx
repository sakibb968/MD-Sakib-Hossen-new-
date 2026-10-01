import React from 'react';
import { ArrowUp, ShieldCheck, Mail, Linkedin, Twitter, Github, Youtube } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenBooking: () => void;
  onOpenLegal: (type: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenBooking,
  onOpenLegal,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLink = (id: string, label: string) => {
    trackEvent({
      event: 'nav_click',
      cta_name: label,
      cta_location: 'footer',
    });
    onNavigate(id);
  };

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800/80 pt-16 pb-12 relative overflow-hidden text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-zinc-900">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-700 flex items-center justify-center text-emerald-400 font-mono font-bold text-base">
                SH
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-white tracking-tight">
                  sakib hossen
                </span>
                <span className="text-xs font-mono text-zinc-500">
                  sakibh.work
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-400 max-w-sm leading-relaxed">
              Performance Marketing · Advanced Tracking · Conversion Creative · Marketing Automation. Engineered specifically for high-intent local service businesses.
            </p>

            <div className="text-xs font-mono text-zinc-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse" />
              <span>Direct Inquiries: sakibh.work</span>
            </div>

            {/* Social Links (Clean placeholders ready for owner customization) */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-700 hover:text-white flex items-center justify-center transition-colors text-zinc-400"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X / Twitter Profile"
                className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-700 hover:text-white flex items-center justify-center transition-colors text-zinc-400"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-700 hover:text-white flex items-center justify-center transition-colors text-zinc-400"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              Navigation
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => handleLink('services', 'Services')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('system', 'Performance System')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  Performance System
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('process', '5-Step Process')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  Process
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('industries', 'Industries')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  Target Industries
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('work', 'How We Work')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  How We Work
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('about', 'About')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  About Sakib Hossen
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('faq', 'FAQ')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Specialized Solutions */}
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              Specialties
            </div>
            <ul className="space-y-2 text-xs">
              <li>Google Search & Call Ads</li>
              <li>Meta Conversions API (CAPI)</li>
              <li>Google Enhanced Conversions</li>
              <li>Server-Side GTM Deployment</li>
              <li>Dynamic Call Tracking (DNI)</li>
              <li>Emergency Home Services CRO</li>
              <li>CRM Speed-to-Lead Webhooks</li>
            </ul>
          </div>

          {/* Column 4: Client Regions & Policy */}
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              Client Territories
            </div>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li>United States (Coast to Coast)</li>
              <li>Canada (Major Metro Markets)</li>
              <li>United Kingdom</li>
              <li>Australia & New Zealand</li>
              <li>Western Europe</li>
            </ul>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="text-xs text-emerald-400 hover:text-emerald-300 font-semibold cursor-pointer underline"
              >
                Schedule Strategy Session &rarr;
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 gap-4">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>&copy; {new Date().getFullYear()} Sakib Hossen (sakibh.work). All rights reserved.</span>
            <span aria-hidden="true" className="text-zinc-700">·</span>
            <button
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-zinc-300 underline cursor-pointer"
            >
              Privacy Policy
            </button>
            <span aria-hidden="true" className="text-zinc-700">·</span>
            <button
              onClick={() => onOpenLegal('terms')}
              className="hover:text-zinc-300 underline cursor-pointer"
            >
              Terms of Service
            </button>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 p-2 rounded-lg bg-zinc-900 border border-zinc-800 hover:text-white hover:border-zinc-700 transition-colors cursor-pointer text-zinc-400"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
