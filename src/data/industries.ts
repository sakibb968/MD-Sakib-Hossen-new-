import { IndustryItem } from '../types';

export const industriesData: IndustryItem[] = [
  {
    id: 'garage-door',
    name: 'Garage Door Repair & Install',
    headline: 'Emergency broken spring & replacement lead capture with sub-30-minute dispatch routing.',
    avgJobValue: '$350 - $4,200',
    commonBottleneck: 'Spending $150+ per click on broad "garage door" terms while missing 40% of emergency phone calls that bounce after 3 rings.',
    leakPoints: [
      'Bidding on national brands (e.g. Chamberlain, LiftMaster) without intent modifiers',
      'No after-hours call routing or automated instant SMS response',
      'Inability to attribute whether a $2,800 full replacement originated from Search or Google Maps',
    ],
    customSolution: 'Hyper-local radius Google Search campaigns targeting exact-match broken springs and urgent repair, backed by dynamic call recording and immediate SMS dispatch.',
    trackingBlueprint: [
      'CallRail DNI with whisper messaging ("Garage Door Search Ad")',
      'Google Enhanced Conversions for quotation requests',
      'Job status pushback into Google Ads when replacement is sold',
    ],
  },
  {
    id: 'hvac',
    name: 'HVAC & Climate Systems',
    headline: 'High-ticket AC replacement and seasonal maintenance booking engines.',
    avgJobValue: '$450 (Repair) - $14,000 (System Replacement)',
    commonBottleneck: 'Seasonality chaos—overwhelmed in July, starving in April—and treating $89 tune-up clicks the same as $10,000 unit replacements.',
    leakPoints: [
      'Optimizing ads for cheap tune-ups instead of high-margin whole-home replacements',
      'Losing high-value homeowners to competitors due to slow quote delivery',
      'No retargeting sequence educating homeowners on energy rebates and 0% financing',
    ],
    customSolution: 'Dual-funnel strategy: high-intent emergency repair search ads paired with high-converting replacement landing pages featuring real monthly financing calculators.',
    trackingBlueprint: [
      'Tiered conversion values in GA4: $100 for basic repair call vs $1,500 value for system quote',
      'Meta CAPI server-side retargeting for financing page visitors',
      'CRM integration with ServiceTitan / Housecall Pro for closed-won value optimization',
    ],
  },
  {
    id: 'roofing',
    name: 'Roofing & Storm Restoration',
    headline: 'Commercial & residential roof replacement pipelines powered by storm tracking & insurance claim funnels.',
    avgJobValue: '$8,000 - $35,000+',
    commonBottleneck: 'High cost-per-click ($80 - $220/click) wasted on renters or unserviceable commercial roofs with no address validation on landing pages.',
    leakPoints: [
      'Generic landing pages without home-ownership or roof age pre-qualification questions',
      'Missing hail/wind storm geographic triggers for immediate local blitzes',
      'No video proof of drone inspections or company certification badges',
    ],
    customSolution: 'Geo-targeted search and Facebook storm-damage ads driving to a 3-step interactive roof condition assessment quiz that pre-qualifies homeowner status and insurance status.',
    trackingBlueprint: [
      'Multi-step form tracking with step drop-off analytics in GA4',
      'Address verification API integration filtering out rental apartments',
      'Offline conversion upload of signed insurance contingency agreements',
    ],
  },
  {
    id: 'plumbing',
    name: 'Plumbing & Drain Services',
    headline: 'Emergency water leak, sewer line, and water heater replacement campaigns.',
    avgJobValue: '$320 (Clear drain) - $8,500 (Repipe / Sewer line)',
    commonBottleneck: 'Competitors outbidding for emergency keywords while your budget exhausts by 10 AM on low-intent inquiries.',
    leakPoints: [
      'Ad scheduling not synced with actual dispatcher availability',
      'Mobile landing pages with non-clickable phone numbers or delayed loading',
      'Failing to separate routine drain clearing from high-ticket tankless water heater installs',
    ],
    customSolution: 'Dayparted Google Ads campaigns with aggressive bid multipliers during peak emergency plumbing hours, click-to-call mobile ads, and dedicated sewer/re-pipe landing pages.',
    trackingBlueprint: [
      'Google Call Extension call forwarding with minimum 60s conversation threshold',
      'GTM click-to-call event listeners with phone number parameter capture',
      'Negative keyword list filtering DIY tutorials, jobs, and competitor customer support',
    ],
  },
  {
    id: 'locksmith',
    name: 'Emergency & Automotive Locksmith',
    headline: 'High-velocity local lockout and commercial re-keying lead generation with strict compliance.',
    avgJobValue: '$180 - $950',
    commonBottleneck: 'Google Ads Advanced Verification obstacles and high click-fraud rates from rogue competitors in metropolitan areas.',
    leakPoints: [
      'Getting suspended by Google Ads due to improper local locksmith verification documentation',
      'Paying for fraudulent bot clicks without click-fraud protection rules',
      'Losing mobile prospects if the mobile site takes longer than 2 seconds to load',
    ],
    customSolution: 'Clean, verified Google Ads compliant search structure with automated click-fraud IP exclusion, lightning-fast mobile AMP-style pages, and instant dispatch direct-dialing.',
    trackingBlueprint: [
      'Instant tap-to-call tracking with dynamic GCLID pass-through',
      'Automated IP exclusion rules for repeat abusive clickers',
      'GBP Local Services Ads (LSA) Google Screened badge setup and dispute handling',
    ],
  },
  {
    id: 'home-services',
    name: 'General Home Services & Trades',
    headline: 'Predictable, profitable customer acquisition for electrical, painting, restoration, and remodeling.',
    avgJobValue: '$1,200 - $18,000',
    commonBottleneck: 'Relying solely on unpredictable word-of-mouth or paying bloated fees to shared-lead platforms where 5 contractors fight for 1 customer.',
    leakPoints: [
      'Buying non-exclusive shared leads from aggregator platforms (Angi, Thumbtack, HomeAdvisor)',
      'No proprietary customer database or automated seasonal follow-up',
      'Zero server-side tracking, leaving ad platforms blind to real revenue',
    ],
    customSolution: 'Build an exclusive, direct-to-consumer digital acquisition machine where 100% of leads belong exclusively to your brand, tracked directly into your CRM.',
    trackingBlueprint: [
      'Full-funnel GTM web & server-side container deployment',
      'Exclusive lead form qualification with instant automated SMS notifications',
      'Looker Studio executive dashboard comparing Ad Spend vs Real Closed Revenue',
    ],
  },
];
