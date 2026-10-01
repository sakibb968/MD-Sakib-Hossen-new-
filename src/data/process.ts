import { ProcessStepItem } from '../types';

export const processData: ProcessStepItem[] = [
  {
    number: '01',
    title: 'Discover',
    phase: 'Strategic Alignment',
    description: 'We unpack your unit economics, profit margins, target service territories, and current bottlenecks to ensure marketing campaigns target high-value jobs, not low-margin tire-kickers.',
    activities: [
      'Analyze historical customer data to define the most profitable job categories',
      'Define geographic boundaries, high-density zip codes, and radius constraints',
      'Assess current lead handling capacity and dispatcher / sales team response speed',
      'Establish baseline Cost Per Qualified Lead (CPQL) and target Customer Acquisition Cost (CAC)',
    ],
    deliverable: 'Strategic Lead Acquisition Blueprint & Target Territory Matrix',
  },
  {
    number: '02',
    title: 'Audit',
    phase: 'Diagnostic & Signal Health',
    description: 'We conduct a surgical audit of your existing ad accounts, conversion pixels, landing pages, CRM pipelines, and Google Business Profile to isolate where ad budget is being wasted.',
    activities: [
      'Audit search query reports to identify wasted ad spend on negative or irrelevant searches',
      'Inspect GTM containers, GA4 custom events, and pixel firing health for missing or duplicate signals',
      'Audit mobile landing page speed, click-to-call mechanics, and form friction',
      'Evaluate local competitor positioning, ad copy angles, and local Map Pack prominence',
    ],
    deliverable: 'Comprehensive Signal & Funnel Audit Report with prioritized leak fixes',
  },
  {
    number: '03',
    title: 'Build',
    phase: 'Technical Implementation',
    description: 'We engineer the complete growth infrastructure: high-intent ad campaigns, server-side tracking containers (sGTM, Meta CAPI), clean DataLayers, and conversion-optimized landing pages.',
    activities: [
      'Structure Google Ads Single-Theme Ad Groups with curated negative keyword governance',
      'Deploy server-side GTM container with first-party subdomain and Meta CAPI deduplication',
      'Configure Google Enhanced Conversions with SHA-256 customer data hashing',
      'Design high-converting mobile-first landing pages with tap-to-call and multi-step intake',
      'Connect ad platforms directly into CRM/SMS webhooks for sub-60-second speed-to-lead',
    ],
    deliverable: 'Live Production Tracking & Campaign Infrastructure ready for deployment',
  },
  {
    number: '04',
    title: 'Launch',
    phase: 'Controlled Deployment',
    description: 'We launch campaigns under controlled budget pacing while performing live end-to-end signal verification to confirm that every call, form, and dollar is accurately captured.',
    activities: [
      'Conduct end-to-end test conversions to verify browser and server event deduplication',
      'Verify Dynamic Number Insertion (DNI) pool across organic, direct, and paid traffic sources',
      'Monitor search term match types and negate immediate irrelevant queries within the first 48 hours',
      'Confirm real-time webhook payload delivery into dispatchers or CRM systems',
    ],
    deliverable: 'Fully Operational Campaign with validated tracking signal integrity',
  },
  {
    number: '05',
    title: 'Optimize',
    phase: 'Continuous Value Compounding',
    description: 'Marketing is never "set and forget". We use clean first-party conversion data to continuously eliminate non-performing assets, optimize bid strategies, and scale winning angles.',
    activities: [
      'Feed offline conversion data (Jobs Won / Actual Invoiced Revenue) back into Google Smart Bidding',
      'Refine bid modifiers based on dayparting, device performance, and high-converting zip codes',
      'Conduct weekly creative testing iterations (visual hooks, direct-response copy, video)',
      'Deliver transparent monthly executive reviews focusing on net profit, not vanity impressions',
    ],
    deliverable: 'Monthly Performance Diagnostics & Continuous Profit Scaling Roadmap',
  },
];
