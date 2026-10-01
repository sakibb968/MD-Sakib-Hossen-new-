import { FaqItem } from '../types';

export const faqData: FaqItem[] = [
  {
    category: 'Services & Scope',
    question: 'What services do you offer?',
    answer: 'We provide a cohesive growth system across three core pillars: Performance Marketing (Google Search, Performance Max, Meta Ads), Advanced Tracking & Measurement (Google Tag Manager web/server, GA4, Meta CAPI, Google Enhanced Conversions, Dynamic Call Tracking), and Conversion Infrastructure (Landing Page CRO, AI-Powered Creative, CRM Automation, and Google Business Profile optimization).',
  },
  {
    category: 'Target Clients',
    question: 'Do you work with local service businesses?',
    answer: 'Yes, local lead generation and high-ticket service businesses are our primary focus. We specialize in industries where telephone calls and rapid dispatch matter most—including garage door repair, HVAC, roofing, plumbing, locksmiths, restoration, electrical, and general home service contractors across the United States, Canada, the UK, Europe, and Australia.',
  },
  {
    category: 'Advertising',
    question: 'Can you manage Google Ads?',
    answer: 'Yes. We manage high-intent search campaigns, local call-only ads, and Performance Max architectures. Our approach is strictly profit-focused: we implement rigorous negative keyword lists, tight geo-radius bidding, dynamic ad copy matching search intent, and offline conversion loops so Google algorithms optimize for actual paying customers rather than empty clicks.',
  },
  {
    category: 'Tracking & Analytics',
    question: 'Can you fix broken conversion tracking?',
    answer: 'Absolutely. Tracking audits and remediation are one of our core specialties. We diagnose and fix duplicate conversion counts, broken form listeners, unverified Google Ads tags, cross-domain booking engine tracking gaps, and missed iOS Safari conversions using clean Google Tag Manager architectures and modern Consent Mode v2 standards.',
  },
  {
    category: 'Tracking & Analytics',
    question: 'Do you set up Meta CAPI (Conversions API)?',
    answer: 'Yes. We deploy server-side Meta CAPI via server-side Google Tag Manager (sGTM) hosted on your first-party domain or Cloudflare Workers. We implement deduplicated event pairings (matching browser Event ID with server Event ID) and pass hashed Customer Information Parameters (CIP) to achieve an Event Quality Match Score of 8.5 to 10.0.',
  },
  {
    category: 'Attribution',
    question: 'Can you track phone calls and leads?',
    answer: 'Yes. For local service companies, phone calls represent the bulk of revenue. We deploy Dynamic Number Insertion (DNI) through platforms like CallRail or WhatConverts, linking every incoming phone call to the exact keyword, ad creative, and campaign that generated it. Calls over a qualified duration threshold are automatically pushed to Google Ads and GA4 as primary conversions.',
  },
  {
    category: 'Clients',
    question: 'Do you work with e-commerce businesses?',
    answer: 'While our primary methodology is built for local lead generation and appointment-based service companies, our server-side tracking, GTM, GA4, and Meta CAPI engineering is equally applicable to Shopify and WooCommerce e-commerce brands looking for bulletproof attribution and revenue tracking.',
  },
  {
    category: 'Process',
    question: 'How does the onboarding process work?',
    answer: 'Onboarding is structured and swift. After signing an agreement, we conduct a 45-minute discovery kickoff, request secure delegated partner access to your ad accounts and Tag Manager (you retain 100% ownership at all times), perform a diagnostic audit, and begin building campaign structures and tracking containers within 5 to 7 business days.',
  },
  {
    category: 'Next Steps',
    question: 'What happens after I book a call?',
    answer: 'When you schedule a strategy call, we review your website, ad footprint, and local market competition prior to our meeting. During the 25-minute video call, we review your current conversion bottlenecks, share our honest evaluation of whether we are a good mutual fit, and outline what a proper tracking and advertising roadmap would look like. No high-pressure sales tactics.',
  },
];
