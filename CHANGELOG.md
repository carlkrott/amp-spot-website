# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.6] - 2026-02-14

### Changed
- Upgraded React from 19.2.3 to 19.2.4 (patch update)
- Upgraded @types/node from 20.19.33 to 25.2.3 (minor update)
- Improved type safety with latest Node.js type definitions

### Fixed
- Maintained 100% test pass rate after dependency updates
- No breaking changes introduced

### Technical
- All 13 tests passing
- No lint errors or warnings
- TypeScript type-check passes
- Dependencies updated via pnpm

## [0.1.5] - 2026-02-14

### Added
- Download API endpoint for plugin distribution (`/api/plugins/[slug]/download`)
- Global error boundary (`src/app/error.tsx`) with custom error UI
- Custom 404 not found page (`src/app/not-found.tsx`) with helpful navigation
- macOS VST3 bundle downloads (tar.gz format) for all 4 plugins

### Changed
- Updated sitemap to include new plugin download routes
- Improved error handling throughout the application

### Fixed
- Critical issue: Missing download files in `public/downloads/` directory
- Download route now serves actual VST3 bundles instead of placeholders

### Technical
- Bundle sizes:
  - amp-spot-analyzer-macos.tar.gz: 3.2 MB
  - amp-spot-comp-macos.tar.gz: 3.9 MB
  - amp-spot-eq-macos.tar.gz: 4.3 MB
  - amp-spot-ms-macos.tar.gz: 3.4 MB
- Total download size: ~15 MB

## [0.1.4] - 2026-02-13

### Added
- Blog section with dynamic routes
- Pricing page with currency selector
- Contact page
- Login page (UI only)
- Roadmap page
- Privacy policy and terms of service pages
- Social links page

### Changed
- Updated Header component with blog and pricing links
- Enhanced Footer with additional links

## [0.1.3] - 2026-02-12

### Added
- Plugin detail pages with dynamic routing
- Plugin grid with search and filtering
- Individual plugin API routes
- Download tracking API

### Fixed
- TypeScript linting errors in dashboard API route

## [0.1.2] - 2026-02-11

### Added
- Dashboard page with user statistics
- Session management API
- Stripe integration (mock)

### Changed
- Updated Header with login button
- Improved routing structure

## [0.1.1] - 2026-02-10

### Added
- Plugins listing page
- Plugin search functionality
- Plugin category filtering

## [0.1.0] - 2026-02-09

### Initial Release
- Homepage with hero section
- About page
- Documentation landing page
- Basic API structure
- PostgreSQL database connection
- Redis caching layer
- Glassmorphism design system
- Responsive layout
