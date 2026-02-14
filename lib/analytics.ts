/**
 * Analytics Integration - Plausible
 * Privacy-friendly analytics (no cookies, GDPR compliant)
 */

export interface AnalyticsEvent {
  name: string;
  props?: Record<string, string | number | boolean>;
}

/**
 * Track a custom event
 */
export function trackEvent(eventName: string, props?: Record<string, string | number | boolean>): void {
  if (typeof window === 'undefined') return;

  // Plausible global object is injected by the script
  const plausible = (window as Window & { plausible?: (event: string, options?: { props?: Record<string, string | number | boolean> }) => void }).plausible;

  if (plausible && typeof plausible === 'function') {
    plausible(eventName, { props });
  } else if (process.env.NODE_ENV === 'development') {
    console.log('[Analytics]', eventName, props);
  }
}

/**
 * Track plugin download
 */
export function trackDownload(pluginId: number, pluginName: string, platform: string, version: string): void {
  trackEvent('Plugin Download', {
    pluginId,
    pluginName,
    platform,
    version,
  });
}

/**
 * Track page navigation
 */
export function trackPageView(path: string): void {
  trackEvent('pageview', { path });
}

/**
 * Track pricing tier click
 */
export function trackPricingClick(tierName: string, price: string): void {
  trackEvent('Pricing Click', {
    tier: tierName,
    price,
  });
}

/**
 * Track category filter
 */
export function trackCategoryFilter(category: string): void {
  trackEvent('Category Filter', { category });
}
