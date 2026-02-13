# Changelog

All notable changes to the Amp Spot website will be documented in this file.

## [Unreleased] - 2026-02-13

### Fixed
- **P0 - Math.random() impure function errors (16 instances)**
  - Created reusable `AudioBars` component with seeded random values
  - Replaced inline `Math.random()` calls in:
    - `src/app/page.tsx` (Hero and Newsletter sections)
    - `src/app/blog/page.tsx` (Hero section)
    - `src/app/pricing/page.tsx` (Hero and CTA sections)
    - `src/app/social/page.tsx` (Hero and CTA sections)
    - `src/app/youtube/page.tsx` (Hero and CTA sections)
  - Uses `useMemo` for stable values across renders

- **P0 - React Hook: updatePrices accessed before declaration**
  - Moved `updatePrices` function definition before `useEffect` in `src/app/pricing/page.tsx`
  - Resolves immutability error in currency selector

- **P0 - AnimatedMeterBridge Date.now() impure error**
  - Wrapped `animate` function in `useCallback` with empty deps
  - Wrapped `updateTargetLevels` function in `useCallback`
  - Added proper dependency arrays to `useEffect` hooks
  - Removed unused `delta` variable

- **P1 - CurrencySelector setState in effect warning**
  - Initialize state with derived value using lazy initializer
  - Avoids synchronous `setState()` call in `useEffect`
  - Improves performance by preventing cascading renders

- **P2 - Unused imports**
  - Removed unused `Link` import from `src/app/youtube/page.tsx`
  - Removed unused `BlogPostPreview` import from `src/lib/blog.ts`

### Added
- `src/components/AudioBars.tsx` - Reusable animated audio bars component
  - Seeded random number generator for stable values
  - Configurable bar count, height range, and opacity range
  - Uses `useMemo` for performance optimization

### Changed
- Updated `src/components/index.ts` to export `AudioBars`

### Technical Debt
- 28 remaining errors: unescaped entities in JSX (low priority)
  - `src/app/about/page.tsx` (6 instances)
  - `src/app/blog/page.tsx` (1 instance)
  - `src/app/contact/page.tsx` (1 instance)
  - `src/app/page.tsx` (4 instances)
  - `src/app/pricing/page.tsx` (2 instances)
  - `src/app/privacy/page.tsx` (6 instances)
  - `src/app/social/page.tsx` (0 instances)
  - `src/app/terms/page.tsx` (2 instances)
  - `src/app/youtube/page.tsx` (2 instances)
  - `src/components/CurrencySelector.tsx` (1 instance)

---

## [Previous] - 2026-02-12

### Added
- Initial website structure with Next.js 16
- Plugin pages and listing
- Blog system with markdown support
- Pricing page with currency selector
- Social media links page
- YouTube channel page
- About, Contact, Privacy, Terms pages
- Animated meter bridge component
- Currency conversion system
- SEO metadata and sitemap

### Infrastructure
- PostgreSQL database configuration
- Redis cache configuration
- NextAuth.js authentication
- Stripe checkout integration
- Email system with Resend
