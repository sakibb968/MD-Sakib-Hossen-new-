import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Shield, ChevronRight } from 'lucide-react';
import { trackCtaClick, trackEvent } from '../utils/analytics';

interface NavbarProps {
  onOpenBooking: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id: string, label: string) => {
    trackEvent({
      event: 'nav_click',
      cta_name: label,
      cta_location: 'navbar',
    });
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  const handleBookingClick = (location: string) => {
    trackCtaClick('Book a Strategy Call', location);
    setMobileMenuOpen(false);
    onOpenBooking();
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-zinc-950/85 backdrop-blur-md border-b border-zinc-800/80 shadow-lg shadow-black/30 py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-lg p-1"
            >
              <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-700/80 flex items-center justify-center text-emerald-400 font-mono font-bold text-base shadow-inner group-hover:border-emerald-500/60 transition-colors">
                SH
              </div>
              <div className="flex flex-col">
                <span className="font-bold tracking-tight text-zinc-100 group-hover:text-white transition-colors text-base sm:text-lg flex items-center gap-1.5">
                  sakib hossen
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                </span>
                <span className="text-[11px] font-mono text-zinc-400 tracking-wider uppercase">
                  sakibh.work
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links (Clean unboxed typography, no pill badges) */}
            <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-zinc-300">
              <button
                onClick={() => handleLinkClick('services', 'Services')}
                className="hover:text-emerald-400 transition-colors cursor-pointer py-1"
              >
                Services
              </button>
              <button
                onClick={() => handleLinkClick('system', 'System')}
                className="hover:text-emerald-400 transition-colors cursor-pointer py-1"
              >
                System
              </button>
              <button
                onClick={() => handleLinkClick('process', 'Process')}
                className="hover:text-emerald-400 transition-colors cursor-pointer py-1"
              >
                Process
              </button>
              <button
                onClick={() => handleLinkClick('industries', 'Industries')}
                className="hover:text-emerald-400 transition-colors cursor-pointer py-1"
              >
                Industries
              </button>
              <button
                onClick={() => handleLinkClick('work', 'Work')}
                className="hover:text-emerald-400 transition-colors cursor-pointer py-1"
              >
                Work
              </button>
              <button
                onClick={() => handleLinkClick('about', 'About')}
                className="hover:text-emerald-400 transition-colors cursor-pointer py-1"
              >
                About
              </button>
              <button
                onClick={() => handleLinkClick('faq', 'FAQ')}
                className="hover:text-emerald-400 transition-colors cursor-pointer py-1"
              >
                FAQ
              </button>
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-4">
              <button
                onClick={() => handleLinkClick('contact', 'Contact')}
                className="text-sm font-medium text-zinc-300 hover:text-white transition-colors cursor-pointer px-2 py-1"
              >
                Contact
              </button>

              <button
                onClick={() => handleBookingClick('navbar_desktop')}
                className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold text-sm px-4 py-2 rounded-lg transition-all duration-200 shadow-md shadow-emerald-950/40 hover:shadow-emerald-500/20 active:scale-[0.98] cursor-pointer"
              >
                <span>Book a Strategy Call</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-3">
              <button
                onClick={() => handleBookingClick('navbar_mobile_quick')}
                className="text-xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-3 py-1.5 rounded-md font-medium"
              >
                Book Call
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-800 rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-500"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-zinc-950/95 backdrop-blur-xl flex flex-col p-6 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pb-6 border-b border-zinc-800">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-700 flex items-center justify-center text-emerald-400 font-mono font-bold text-sm">
                SH
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-white text-base">sakib hossen</span>
                <span className="text-[10px] font-mono text-zinc-400">sakibh.work</span>
              </div>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-zinc-400 hover:text-white rounded-lg bg-zinc-900 border border-zinc-800 cursor-pointer"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex flex-col py-6 space-y-4 text-base font-medium text-zinc-200">
            <button
              onClick={() => handleLinkClick('services', 'Services')}
              className="flex items-center justify-between text-left py-2 hover:text-emerald-400 border-b border-zinc-900"
            >
              <span>Services</span>
              <ChevronRight className="w-4 h-4 text-zinc-500" />
            </button>
            <button
              onClick={() => handleLinkClick('system', 'System')}
              className="flex items-center justify-between text-left py-2 hover:text-emerald-400 border-b border-zinc-900"
            >
              <span>Performance System</span>
              <ChevronRight className="w-4 h-4 text-zinc-500" />
            </button>
            <button
              onClick={() => handleLinkClick('process', 'Process')}
              className="flex items-center justify-between text-left py-2 hover:text-emerald-400 border-b border-zinc-900"
            >
              <span>5-Step Process</span>
              <ChevronRight className="w-4 h-4 text-zinc-500" />
            </button>
            <button
              onClick={() => handleLinkClick('industries', 'Industries')}
              className="flex items-center justify-between text-left py-2 hover:text-emerald-400 border-b border-zinc-900"
            >
              <span>Target Industries</span>
              <ChevronRight className="w-4 h-4 text-zinc-500" />
            </button>
            <button
              onClick={() => handleLinkClick('work', 'Work')}
              className="flex items-center justify-between text-left py-2 hover:text-emerald-400 border-b border-zinc-900"
            >
              <span>How We Work</span>
              <ChevronRight className="w-4 h-4 text-zinc-500" />
            </button>
            <button
              onClick={() => handleLinkClick('about', 'About')}
              className="flex items-center justify-between text-left py-2 hover:text-emerald-400 border-b border-zinc-900"
            >
              <span>About Sakib Hossen</span>
              <ChevronRight className="w-4 h-4 text-zinc-500" />
            </button>
            <button
              onClick={() => handleLinkClick('faq', 'FAQ')}
              className="flex items-center justify-between text-left py-2 hover:text-emerald-400 border-b border-zinc-900"
            >
              <span>Frequently Asked Questions</span>
              <ChevronRight className="w-4 h-4 text-zinc-500" />
            </button>
            <button
              onClick={() => handleLinkClick('contact', 'Contact')}
              className="flex items-center justify-between text-left py-2 hover:text-emerald-400"
            >
              <span>Contact & Intake</span>
              <ChevronRight className="w-4 h-4 text-zinc-500" />
            </button>
          </div>

          <div className="mt-auto pt-6 border-t border-zinc-800 space-y-3">
            <button
              onClick={() => handleBookingClick('navbar_mobile_drawer')}
              className="w-full py-3 px-4 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold rounded-lg flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-emerald-950/40"
            >
              <span>Book a Strategy Call</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <div className="flex items-center justify-center gap-2 text-xs text-zinc-500">
              <Shield className="w-3.5 h-3.5 text-emerald-400" />
              <span>Direct 1-on-1 strategy with Sakib Hossen</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
