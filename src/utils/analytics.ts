/**
 * Centralized Analytics and Event Tracking Dispatcher
 *
 * Prepared for clean integration with Google Tag Manager (GTM) and GA4.
 * When a GTM Container ID or GA4 tag is deployed, all events automatically route
 * through window.dataLayer with zero code changes required.
 */

declare global {
  interface Window {
    dataLayer: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  }
}

export type AnalyticsEventType =
  | 'cta_click'
  | 'contact_form_submit'
  | 'strategy_call_click'
  | 'strategy_call_booked'
  | 'service_view'
  | 'industry_select'
  | 'system_step_view'
  | 'faq_expand'
  | 'nav_click';

export interface AnalyticsPayload {
  event: AnalyticsEventType;
  cta_name?: string;
  cta_location?: string;
  service_id?: string;
  service_name?: string;
  industry_id?: string;
  step_number?: string;
  form_id?: string;
  faq_question?: string;
  budget_range?: string;
  timestamp?: string;
  [key: string]: unknown;
}

/**
 * Tracks an analytics event to window.dataLayer
 */
export const trackEvent = (payload: AnalyticsPayload): void => {
  if (typeof window === 'undefined') return;

  const eventPayload = {
    ...payload,
    timestamp: new Date().toISOString(),
    page_path: window.location.pathname,
    page_location: window.location.href,
  };

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(eventPayload);

  // In development, log cleanly to assist tracking verification
  if (import.meta.env.DEV) {
    // Quiet debug log for testing tracking signals
    console.debug('[Analytics dataLayer Event]', eventPayload);
  }
};

/**
 * Convenience helper for CTA clicks
 */
export const trackCtaClick = (ctaName: string, location: string): void => {
  trackEvent({
    event: 'cta_click',
    cta_name: ctaName,
    cta_location: location,
  });
};

/**
 * Convenience helper for Strategy Call modals
 */
export const trackStrategyCallOpen = (triggerLocation: string): void => {
  trackEvent({
    event: 'strategy_call_click',
    cta_location: triggerLocation,
    cta_name: 'Book a Strategy Call',
  });
};
