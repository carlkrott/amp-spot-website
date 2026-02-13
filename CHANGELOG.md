# Changelog

All notable changes to the Amp Spot website will be documented in this file.

## [Unreleased]

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

### Fixed - 2026-02-13
- None

### Known Issues - 2026-02-13
- `blog_posts` database table needs to be created (PostgreSQL connection timeout during setup)
- Download files need to be added to `public/downloads/` directory
- User authentication not yet implemented (downloads tracked as anonymous)

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
