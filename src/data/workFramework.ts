import { WorkFrameworkItem } from '../types';

export const workFrameworks: WorkFrameworkItem[] = [
  {
    id: 'framework-emergency-home-services',
    industry: 'Home Services & Emergency Trades',
    title: 'Emergency Service Call & Lead Attribution Architecture',
    scope: 'Google Search Ads · CallRail DNI · GA4 · Google Enhanced Conversions · Looker Studio',
    problem: 'Local service contractor spending $8,000/month was unable to verify which keyword generated a $3,500 emergency replacement versus a zero-margin warranty query. Standard GA4 was missing 55% of mobile phone conversions, causing Google Smart Bidding to bid on junk clicks.',
    strategy: 'Deploy dynamic number insertion with minimum call qualification thresholds, implement Google Enhanced Conversions for web forms, and pass offline CRM sale values back into Google Ads via GCLID matching.',
    solution: 'Engineered a unified tracking pipeline where every call lasting > 90 seconds is passed as a qualified lead event. Closed invoices in the CRM are automatically mapped back to Google Ads Smart Bidding, training the algorithm to target high-margin homeowners.',
    measurementFramework: [
      'Call attribution granularity: Keyword-level and ad-group source tracking for 100% of calls',
      'Signal recovery: Server-side dataLayer capture restoring dropped iOS Safari conversions',
      'Negative keyword governance: Systematically eliminating DIY and job-seeker search queries',
      'Primary metric monitored: Cost Per Qualified Dispatch (CPQD) vs Blind Cost Per Click (CPC)',
    ],
    technologies: ['Google Ads', 'CallRail', 'GTM Web', 'GA4 Custom Events', 'Google Ads API'],
  },
  {
    id: 'framework-high-ticket-replacement',
    industry: 'HVAC & Roofing Systems',
    title: 'High-Ticket Replacement Funnel & Server-Side Meta CAPI Infrastructure',
    scope: 'Meta Ads · Cloudflare Server GTM · Meta CAPI · Multi-Step Lead Qualification',
    problem: 'Paid social campaigns were generating hundreds of cheap leads, but 80% were uncontactable, renters who could not authorize roof replacements, or users outside the target zip code territory.',
    strategy: 'Replace low-friction native lead forms with a custom 4-step qualification assessment on a high-speed landing page, integrated with first-party Cloudflare sGTM and Meta CAPI to send high-quality customer signals.',
    solution: 'Designed an interactive roof/HVAC diagnostic quiz that verifies homeowner status, roof age, and zip code before submission. Deployed server-side Meta CAPI with deduplication and SHA-256 customer parameter hashing, boosting Meta Event Quality Score to 9.1/10.',
    measurementFramework: [
      'Event Match Quality (EMQ): Elevated from 4.2 to 9.1/10 via server-side CIP parameters',
      'Lead qualification rate: Homeowner and zip-code validation enforced prior to CRM dispatch',
      'Lead response latency: Instant webhook triggering SMS alert to sales reps in under 45 seconds',
      'Attribution window: Multi-touch attribution model comparing first-click and last-click values',
    ],
    technologies: ['Meta Ads Manager', 'Cloudflare Workers', 'Server GTM', 'Meta CAPI', 'Make.com'],
  },
  {
    id: 'framework-local-dominance',
    industry: 'Garage Door & Locksmith Services',
    title: 'Local High-Density Blitz & Click-Fraud Mitigation Protocol',
    scope: 'Google Search Ads · Google Business Profile · ClickCease API · Dynamic Call Forwarding',
    problem: 'Metropolitan emergency service provider faced brutal local competition with high click-fraud rates exhausting daily ad budgets by midday, coupled with low visibility on Google Maps.',
    strategy: 'Isolate exact-match emergency intent terms within tight 5-mile micro-radiuses, install automated click-fraud blocking rules, and align Google Business Profile review automation with completed jobs.',
    solution: 'Created single-theme high-intent campaigns with automated negative IP exclusion for suspicious bot traffic. Configured automated review request triggers sent via SMS 15 minutes after technician invoice completion, driving consistent organic Google Map Pack rank increases.',
    measurementFramework: [
      'Fraud prevention: Automated invalid click exclusion saving ad spend for legitimate callers',
      'Dayparting precision: Budget allocated dynamically to match real technician availability',
      'Map Pack presence: Systematic review velocity increase elevating local 3-Pack rank',
      'Cost efficiency: Significant reduction in wasted budget on out-of-territory search queries',
    ],
    technologies: ['Google Ads', 'Google Business Profile', 'Twilio SMS', 'GTM Web', 'Looker Studio'],
  },
];
