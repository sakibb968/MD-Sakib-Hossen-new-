import React, { useState } from 'react';
import { faqData } from '../data/faq';
import { ChevronDown, HelpCircle, Search, ArrowRight } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

interface FaqSectionProps {
  onOpenBooking: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenBooking }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First FAQ open by default
  const [searchQuery, setSearchQuery] = useState('');

  const toggleAccordion = (index: number, question: string) => {
    const isOpening = openIndex !== index;
    setOpenIndex(isOpening ? index : null);
    if (isOpening) {
      trackEvent({
        event: 'faq_expand',
        faq_question: question,
      });
    }
  };

  const filteredFaqs = faqData.filter(
    (item) =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq" className="py-24 bg-zinc-950 relative border-t border-zinc-900 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-3">
            Common Questions & Honest Answers
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-zinc-400 mt-4 max-w-xl mx-auto">
            Everything you need to know about our services, tracking infrastructure, and how we work with local service businesses.
          </p>

          {/* Quick Search Filter */}
          <div className="mt-8 max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g. Meta CAPI, Google Ads, Phone Calls)..."
              className="w-full bg-zinc-900/90 border border-zinc-800 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-emerald-500/80 transition-colors"
            />
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 text-zinc-400 text-sm">
              No matching questions found for "{searchQuery}". Have a specific question? Feel free to message us below!
            </div>
          ) : (
            filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const contentId = `faq-content-${index}`;
              const buttonId = `faq-button-${index}`;

              return (
                <div
                  key={index}
                  className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'bg-zinc-900/70 border-emerald-500/40 shadow-lg shadow-black/20'
                      : 'bg-zinc-900/30 border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900/50'
                  }`}
                >
                  <button
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    onClick={() => toggleAccordion(index, faq.question)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        toggleAccordion(index, faq.question);
                      }
                    }}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-zinc-500 hidden sm:inline">
                        0{index + 1}
                      </span>
                      <span className="text-base sm:text-lg font-bold text-zinc-100">
                        {faq.question}
                      </span>
                    </div>

                    <div className={`p-1 rounded-md bg-zinc-950 border border-zinc-800 text-zinc-400 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 text-emerald-400 border-emerald-500/40' : ''}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div
                      id={contentId}
                      role="region"
                      aria-labelledby={buttonId}
                      className="px-5 pb-6 sm:px-6 sm:pb-6 text-sm text-zinc-300 leading-relaxed border-t border-zinc-800/60 pt-4 animate-in fade-in duration-150"
                    >
                      <div className="mb-2">
                        <span className="text-[10px] font-mono uppercase text-emerald-400">
                          {faq.category}
                        </span>
                      </div>
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Bottom CTA within FAQ */}
        <div className="mt-12 p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-white">Have a unique scenario or technical requirement?</h4>
            <p className="text-xs text-zinc-400">
              We regularly advise on complex multi-location tracking and custom CRM pipelines.
            </p>
          </div>
          <button
            onClick={onOpenBooking}
            className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-xs rounded-lg whitespace-nowrap cursor-pointer transition-all active:scale-[0.98] shadow-sm flex items-center gap-1.5"
          >
            <span>Ask on a Strategy Call</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
