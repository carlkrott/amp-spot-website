# Changelog

All notable changes to the Amp Spot website will be documented in this file.

## [Unreleased]

### Added - 2026-02-14 (Sprint 4)
- Version configuration
  - `lib/version.ts` - Single source of truth for application version
  - `VERSION` constant and `getVersion()` helper
  - Integrated into `PluginList.tsx` download handler
  - Version metadata added to `app/layout.tsx`
- Analytics integration (Plausible)
  - `app/components/PlausibleScript.tsx` - Plausible tracking script component
  - `lib/analytics.ts` - Analytics helper functions
  - Event tracking for downloads, page views, category filters
  - Integrated into `app/layout.tsx`, `PluginCard.tsx`, `PluginList.tsx`
- Testing infrastructure
  - Installed vitest v4.0.18 with coverage support
  - Installed @testing-library/react, @testing-library/jest-dom, @testing-library/user-event
  - Created `vitest.config.ts` - Test configuration
  - Created `__tests__/setup.ts` - Test setup with mocks
  - Added test scripts to package.json: test, test:ui, test:coverage
- Unit tests
  - `__tests__/validations.test.ts` - 60 tests covering all 13 validation schemas (100% coverage)
  - `__tests__/PluginCard.test.tsx` - 20 tests for PluginCard component
  - `__tests__/sample.test.ts` - Sample test for setup verification
  - Total: 82 tests passing

### Dependencies - 2026-02-14 (Sprint 4)
- Added `vitest` v4.0.18
- Added `@vitest/ui` v4.0.18
- Added `@vitest/coverage-v8` v4.0.18
- Added `@testing-library/react` v16.3.2
- Added `@testing-library/jest-dom` v6.9.1
- Added `@testing-library/user-event` v14.6.1
- Added `jsdom` v28.0.0

### Changed - 2026-02-14 (Sprint 4)
- `app/layout.tsx` - Added PlausibleScript component and version metadata
- `app/components/PluginCard.tsx` - Added download event tracking with analytics
- `app/components/PluginList.tsx` - Added category filter event tracking

### Added - 2026-02-14 (Sprint 3)
- Input validation completion (100% API coverage)
  - `/api/dashboard/route.ts` - GET and POST validation
  - `/api/stripe/route.ts` - GET, POST, PUT validation
  - `/api/plugins/[id]/download/route.ts` - POST validation
- Toast notifications
  - Installed `react-hot-toast` v2.6.0
  - Added `Toaster` component to `app/layout.tsx`
  - Replaced `alert()` calls with toast notifications in `PluginList.tsx`
  - Toast styled with Amp Spot brand colors (orange)

### Dependencies - 2026-02-14 (Sprint 3)
- Added `react-hot-toast` v2.6.0

### Added - 2026-02-14 (Sprint 2)
- Social sharing metadata
  - OpenGraph tags in `app/layout.tsx`
  - Twitter Card tags in `app/layout.tsx`
  - robots meta configuration
- Error handling
  - `app/components/ErrorBoundary.tsx` - React error boundary component
  - `app/components/ErrorBoundaryWrapper.tsx` - Client wrapper for error boundary
  - `app/template.tsx` - Root template with error boundary
- Input validation with zod
  - `lib/validations.ts` - Centralized validation schemas
  - Plugin API validation (GET/POST)
  - Blog API validation
  - Session API validation (GET/POST/DELETE)
  - Helper function for validation responses

### Added - 2026-02-14 (Sprint 1)
- SEO optimization
  - `app/robots.ts` - robots.txt for search engine crawling
  - `app/sitemap.ts` - dynamic sitemap for better SEO

### Dependencies - 2026-02-14
- Added `zod` v4.3.6 for input validation

### Changed - 2026-02-14
- Updated task list for cron session
- Session log created for tracking progress

### Known Issues - 2026-02-14
- PostgreSQL connection timeout to 100.64.0.4:24271 (infrastructure issue)
- blog_posts table cannot be verified/created due to DB connection
- Download files need to be added to `public/downloads/` directory
- Redis connection timeout to 100.64.0.4:6379 (infrastructure issue)

---

## [Unreleased - Previous]

### Added - 2026-02-13
- Blog integration with API routes and pages
  - `/api/blog` - Blog API endpoint for fetching posts
  - `/blog` - Blog listing page with category filtering
  - `/blog/[slug]` - Individual blog post page with markdown rendering
  - Support for categories, tags, authors, and publication dates

### Changed - 2026-02-13
- Plugin download functionality
  - Implemented real download logic in PluginList component
  - Added download tracking via API endpoint
  - Added loading state for download buttons
  - Platform detection for analytics
- PluginCard component
  - Added `downloading` prop for loading state
  - Improved download button UX with spinner

---

## [0.1.0] - 2026-02-13

### Added
- Next.js 16.1.6 with React 19.2.3
- Tailwind CSS 4.x with glassmorphism design
- PostgreSQL database integration
- Redis caching for performance
- Core pages: home, plugins, dashboard, pricing, docs, youtube
- API routes: plugins, dashboard, session, stripe
- Checkout flow UI (Stripe scaffold)
- Success page for post-purchase
- Subscription page
- Plugin marketplace with filtering
- Plugin card components with download buttons
- Header and footer components
- LED meter bar component

---

*Format: [VERSION] - DATE*
*Types: Added, Changed, Deprecated, Removed, Fixed, Security*
