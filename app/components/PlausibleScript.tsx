'use client';

import Script from 'next/script';

/**
 * Plausible Analytics Script Component
 * Privacy-friendly analytics tracking
 *
 * Usage: Add to app/layout.tsx in the body
 *
 * Environment Variables:
 * - NEXT_PUBLIC_PLAUSIBLE_DOMAIN: Your Plausible data domain (default: amp-spot.com)
 * - NEXT_PUBLIC_PLAUSIBLE_URL: Custom Plausible URL (optional, for self-hosted)
 */

export default function PlausibleScript() {
  const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN || 'amp-spot.com';
  const plausibleUrl = process.env.NEXT_PUBLIC_PLAUSIBLE_URL;

  return (
    <>
      <Script
        src={plausibleUrl ? `${plausibleUrl}/js/script.js` : 'https://plausible.io/js/script.js'}
        data-domain={domain}
        strategy="afterInteractive"
        defer
      />
      {/* Page view tracking is automatic with Plausible */}
    </>
  );
}
