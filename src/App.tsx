import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DataProblemSection } from './components/DataProblemSection';
import { ServicesSection } from './components/ServicesSection';
import { PerformanceSystemSection } from './components/PerformanceSystemSection';
import { WhyUsSection } from './components/WhyUsSection';
import { ProcessSection } from './components/ProcessSection';
import { IndustriesSection } from './components/IndustriesSection';
import { WorkFrameworkSection } from './components/WorkFrameworkSection';
import { TechStackSection } from './components/TechStackSection';
import { AboutSection } from './components/AboutSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { StrategyCallModal } from './components/StrategyCallModal';
import { LegalModal } from './components/LegalModal';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);
  const [preselectedService, setPreselectedService] = useState<string>('');

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceForBooking = (serviceName: string) => {
    setPreselectedService(serviceName);
    // Open booking modal
    setBookingModalOpen(true);
  };

  const handleSelectIndustryForContact = (industryName: string) => {
    setPreselectedService(`${industryName} Lead Generation`);
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans selection:bg-emerald-500/20 selection:text-emerald-300">
      {/* Sticky Premium Navbar */}
      <Navbar
        onOpenBooking={() => setBookingModalOpen(true)}
        onNavigate={handleNavigate}
      />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero
          onOpenBooking={() => setBookingModalOpen(true)}
          onExploreServices={() => handleNavigate('services')}
        />

        {/* 3. Problem / Value Section */}
        <DataProblemSection
          onOpenBooking={() => setBookingModalOpen(true)}
        />

        {/* 4. Core Services (13 services) */}
        <ServicesSection
          onOpenBooking={() => setBookingModalOpen(true)}
          onSelectServiceForBooking={handleSelectServiceForBooking}
        />

        {/* 5. Performance System Visual Flow */}
        <PerformanceSystemSection
          onOpenBooking={() => setBookingModalOpen(true)}
        />

        {/* 6. Why Sakib Hossen */}
        <WhyUsSection
          onOpenBooking={() => setBookingModalOpen(true)}
        />

        {/* 7. 5-Step Process */}
        <ProcessSection
          onOpenBooking={() => setBookingModalOpen(true)}
        />

        {/* 8. Target Industries */}
        <IndustriesSection
          onOpenBooking={() => setBookingModalOpen(true)}
          onSelectIndustryForContact={handleSelectIndustryForContact}
        />

        {/* 9. Case Study & Technical Architecture Framework */}
        <WorkFrameworkSection
          onOpenBooking={() => setBookingModalOpen(true)}
        />

        {/* 10. Technology Stack */}
        <TechStackSection />

        {/* 11. About Sakib Hossen */}
        <AboutSection
          onOpenBooking={() => setBookingModalOpen(true)}
        />

        {/* 12. FAQ Section */}
        <FaqSection
          onOpenBooking={() => setBookingModalOpen(true)}
        />

        {/* 13. Final CTA & 14. Contact Form */}
        <ContactSection
          onOpenBooking={() => setBookingModalOpen(true)}
          preselectedService={preselectedService}
        />
      </main>

      {/* 15. Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenBooking={() => setBookingModalOpen(true)}
        onOpenLegal={(type) => setLegalModalType(type)}
      />

      {/* Strategy Call Booking Modal */}
      <StrategyCallModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />

      {/* Legal Modal (Privacy & Terms) */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
