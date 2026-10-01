import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, Globe, CheckCircle2, ArrowRight, Shield, Download } from 'lucide-react';
import { BookingFormData } from '../types';
import { trackEvent } from '../utils/analytics';

interface StrategyCallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AVAILABLE_TIMES = [
  '09:00 AM',
  '10:30 AM',
  '01:00 PM',
  '02:30 PM',
  '04:00 PM',
  '05:30 PM',
];

const TIMEZONES = [
  'Eastern Time (US & Canada) UTC-5',
  'Central Time (US & Canada) UTC-6',
  'Mountain Time (US & Canada) UTC-7',
  'Pacific Time (US & Canada) UTC-8',
  'London / GMT (UK) UTC+0',
  'Central European Time (CET) UTC+1',
  'Sydney / AEDT (Australia) UTC+11',
  'Other / Worldwide',
];

export const StrategyCallModal: React.FC<StrategyCallModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<1 | 2 | 3>(1); // 1: Pick Date & Time, 2: Intake info, 3: Confirmation
  const [bookingData, setBookingData] = useState<BookingFormData>({
    fullName: '',
    email: '',
    businessName: '',
    website: '',
    timezone: 'Eastern Time (US & Canada) UTC-5',
    date: '',
    timeSlot: '10:30 AM',
    monthlyBudget: '$2,500 – $5,000 / mo',
    primaryGoal: 'Fix broken tracking & scale lead generation',
    notes: '',
  });

  const [dateOptions, setDateOptions] = useState<Array<{ display: string; value: string }>>([]);

  // Generate the next 10 business days dynamically
  useEffect(() => {
    const dates: Array<{ display: string; value: string }> = [];
    const now = new Date();
    let count = 0;
    let daysAhead = 1;

    while (count < 8 && daysAhead < 20) {
      const d = new Date(now);
      d.setDate(now.getDate() + daysAhead);
      const dayOfWeek = d.getDay();
      // Skip weekends
      if (dayOfWeek !== 0 && dayOfWeek !== 6) {
        const value = d.toISOString().split('T')[0];
        const display = d.toLocaleDateString('en-US', {
          weekday: 'short',
          month: 'short',
          day: 'numeric',
        });
        dates.push({ display, value });
        count++;
      }
      daysAhead++;
    }

    setDateOptions(dates);
    if (dates.length > 0 && !bookingData.date) {
      setBookingData((prev) => ({ ...prev, date: dates[0].value }));
    }
  }, []);

  if (!isOpen) return null;

  const handleStep1Next = () => {
    if (!bookingData.date || !bookingData.timeSlot) return;
    setStep(2);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingData.fullName || !bookingData.email || !bookingData.businessName) return;

    // Track analytics event
    trackEvent({
      event: 'strategy_call_booked',
      cta_location: 'strategy_call_modal',
      budget_range: bookingData.monthlyBudget,
      scheduled_date: bookingData.date,
      scheduled_time: bookingData.timeSlot,
      timezone: bookingData.timezone,
    });

    // Save locally
    try {
      const existing = JSON.parse(localStorage.getItem('sh_strategy_calls') || '[]');
      existing.push({ ...bookingData, bookedAt: new Date().toISOString() });
      localStorage.setItem('sh_strategy_calls', JSON.stringify(existing));
    } catch (e) {
      // Ignore
    }

    setStep(3);
  };

  const downloadIcsFile = () => {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Sakib Hossen//Performance Marketing Strategy Call//EN',
      'BEGIN:VEVENT',
      `SUMMARY:Strategy Call: Sakib Hossen + ${bookingData.businessName || 'Business'}`,
      'DESCRIPTION:25-minute performance marketing & conversion tracking roadmap review with Sakib Hossen.',
      `LOCATION:Google Meet (Link will be sent to ${bookingData.email})`,
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'Strategy-Call-Sakib-Hossen.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-xl bg-zinc-900 border border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[92vh] text-left"
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

        {/* Step 1: Select Schedule */}
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400 mb-1">
                <span>Step 1 of 2</span>
                <span aria-hidden="true" className="text-zinc-600">·</span>
                <span>Select Consultation Time</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                Book a Strategy Call With Sakib
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                25 minutes · 1-on-1 direct video consultation · Account & tracking diagnosis
              </p>
            </div>

            {/* Timezone picker */}
            <div>
              <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-emerald-400" />
                <span>Your Timezone</span>
              </label>
              <select
                value={bookingData.timezone}
                onChange={(e) => setBookingData({ ...bookingData, timezone: e.target.value })}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-zinc-200 focus:outline-none focus:border-emerald-500 cursor-pointer"
              >
                {TIMEZONES.map((tz) => (
                  <option key={tz} value={tz}>
                    {tz}
                  </option>
                ))}
              </select>
            </div>

            {/* Date selection grid */}
            <div>
              <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                <span>Select Available Date</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {dateOptions.map((opt) => {
                  const isSelected = bookingData.date === opt.value;
                  return (
                    <button
                      type="button"
                      key={opt.value}
                      onClick={() => setBookingData({ ...bookingData, date: opt.value })}
                      className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-emerald-500 text-zinc-950 font-bold border-emerald-400 shadow-sm'
                          : 'bg-zinc-950 border-zinc-800 text-zinc-300 hover:border-zinc-700'
                      }`}
                    >
                      <div className="text-xs">{opt.display}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Time slot picker */}
            <div>
              <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-emerald-400" />
                <span>Select Time Slot</span>
              </label>
              <div className="grid grid-cols-3 gap-2">
                {AVAILABLE_TIMES.map((time) => {
                  const isSelected = bookingData.timeSlot === time;
                  return (
                    <button
                      type="button"
                      key={time}
                      onClick={() => setBookingData({ ...bookingData, timeSlot: time })}
                      className={`p-2.5 rounded-xl border text-center text-xs font-medium transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-emerald-500 text-zinc-950 font-bold border-emerald-400 shadow-sm'
                          : 'bg-zinc-950 border-zinc-800 text-zinc-300 hover:border-zinc-700'
                      }`}
                    >
                      {time}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Next Button */}
            <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
              <span className="text-xs text-zinc-500 flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-emerald-400" />
                <span>Zero sales pressure</span>
              </span>
              <button
                type="button"
                onClick={handleStep1Next}
                className="px-6 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-sm rounded-xl flex items-center gap-2 cursor-pointer shadow-md"
              >
                <span>Continue</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Intake Information */}
        {step === 2 && (
          <form onSubmit={handleBookingSubmit} className="space-y-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400 mb-1">
                <span>Step 2 of 2</span>
                <span aria-hidden="true" className="text-zinc-600">·</span>
                <span>Context & Contact Details</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                Confirm Call Details
              </h3>
              <p className="text-xs text-zinc-400 mt-1">
                Scheduled for <strong className="text-emerald-300">{bookingData.date}</strong> at <strong className="text-emerald-300">{bookingData.timeSlot}</strong> ({bookingData.timezone})
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-zinc-300 uppercase tracking-wider mb-1.5">
                  Your Full Name *
                </label>
                <input
                  required
                  type="text"
                  value={bookingData.fullName}
                  onChange={(e) => setBookingData({ ...bookingData, fullName: e.target.value })}
                  placeholder="e.g. David Miller"
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-300 uppercase tracking-wider mb-1.5">
                  Work Email *
                </label>
                <input
                  required
                  type="email"
                  value={bookingData.email}
                  onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                  placeholder="e.g. david@millerhvac.com"
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-emerald-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-zinc-300 uppercase tracking-wider mb-1.5">
                  Company / Trade Name *
                </label>
                <input
                  required
                  type="text"
                  value={bookingData.businessName}
                  onChange={(e) => setBookingData({ ...bookingData, businessName: e.target.value })}
                  placeholder="e.g. Miller HVAC & Air"
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-300 uppercase tracking-wider mb-1.5">
                  Website URL
                </label>
                <input
                  type="text"
                  value={bookingData.website}
                  onChange={(e) => setBookingData({ ...bookingData, website: e.target.value })}
                  placeholder="https://millerhvac.com"
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-emerald-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-zinc-300 uppercase tracking-wider mb-1.5">
                Monthly Advertising Spend (Estimated)
              </label>
              <select
                value={bookingData.monthlyBudget}
                onChange={(e) => setBookingData({ ...bookingData, monthlyBudget: e.target.value })}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-zinc-200 focus:outline-none focus:border-emerald-500"
              >
                <option value="Under $2,500 / mo">Under $2,500 / month</option>
                <option value="$2,500 – $5,000 / mo">$2,500 – $5,000 / month</option>
                <option value="$5,000 – $15,000 / mo">$5,000 – $15,000 / month</option>
                <option value="$15,000+ / mo">$15,000+ / month</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono text-zinc-300 uppercase tracking-wider mb-1.5">
                Main Bottleneck to Address
              </label>
              <input
                type="text"
                value={bookingData.primaryGoal}
                onChange={(e) => setBookingData({ ...bookingData, primaryGoal: e.target.value })}
                placeholder="e.g. Can't track which keywords drive high-ticket replacements"
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-emerald-500"
              />
            </div>

            <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-xs text-zinc-400 hover:text-white cursor-pointer py-2"
              >
                &larr; Back to calendar
              </button>

              <button
                type="submit"
                className="px-6 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-sm rounded-xl flex items-center gap-2 cursor-pointer shadow-md"
              >
                <span>Confirm Strategy Call</span>
                <CheckCircle2 className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}

        {/* Step 3: Success Confirmation */}
        {step === 3 && (
          <div className="py-6 text-center space-y-4 animate-in fade-in duration-300">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-bold text-white">Call Confirmed!</h3>

            <p className="text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
              We look forward to meeting with you, <strong className="text-white">{bookingData.fullName}</strong>. A calendar invite and Google Meet link have been prepared for <strong className="text-white">{bookingData.email}</strong>.
            </p>

            <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 text-left max-w-sm mx-auto text-xs space-y-1.5 font-mono text-zinc-300">
              <div className="flex justify-between">
                <span className="text-zinc-500">Date:</span>
                <span className="text-white font-semibold">{bookingData.date}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Time:</span>
                <span className="text-emerald-400 font-semibold">{bookingData.timeSlot}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Timezone:</span>
                <span className="text-zinc-400 truncate max-w-[200px]">{bookingData.timezone}</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={downloadIcsFile}
                className="w-full sm:w-auto px-5 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold rounded-xl flex items-center justify-center gap-2 cursor-pointer transition-colors"
              >
                <Download className="w-4 h-4 text-emerald-400" />
                <span>Add to Calendar (.ics)</span>
              </button>

              <button
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-xs rounded-xl cursor-pointer transition-colors shadow-md"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
