type GtagFn = (command: "event", name: string, params?: Record<string, unknown>) => void;

/**
 * Sends a GA4 event if the Google tag is loaded. Safe to call anywhere on the
 * client: it silently does nothing when analytics is not configured or has
 * been blocked by the visitor's browser.
 */
export function trackEvent(name: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  const gtag = (window as unknown as { gtag?: GtagFn }).gtag;
  if (typeof gtag === "function") gtag("event", name, params);
}
