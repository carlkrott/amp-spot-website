# Website Development - Task List (Sprint 4)

**Date:** 2026-02-14 11:26 GMT
**Generated from:** Phase 2 (Plan) - Cron Session
**Previous Sprints:** Sprint 1 (SEO), Sprint 2 (Validation & Error Boundaries), Sprint 3 (Complete Validation + Toast)

---

## Priority Legend

- 🔴 **P0 - Critical** - Must do immediately, blocks functionality
- 🟡 **P1 - Important** - Should do soon, improves UX/security
- 🟢 **P2 - Enhancement** - Nice to have, can defer

---

## ✅ Completed Tasks (Previous Sprints)

### Sprint 1 ✅ (SEO)
- [x] T003: Add robots.ts (SEO) - 5 min
- [x] T004: Add sitemap.ts (SEO) - 10 min
- [x] Download API endpoint scaffolding

### Sprint 2 ✅ (Validation & Error Boundaries)
- [x] T005: OpenGraph and Twitter Card metadata - 20 min
- [x] T006: Error boundaries - 30 min
- [x] T009: Input validation with zod (75% coverage - 6/8 routes)

### Sprint 3 ✅ (Complete Validation + Toast)
- [x] T003-1: Dashboard API validation (GET/POST)
- [x] T003-2: Stripe API validation (GET/POST/PUT)
- [x] T003-3: Download API validation (POST)
- [x] T012: Toast notifications (replace alert)

---

## 🟡 P1 - Important Tasks (Sprint 4 Focus)

### T017: Version Configuration
**Status:** Pending
**Estimated Time:** 5 minutes
**Priority:** P1
**Description:** Create version configuration to replace hardcoded "1.0.0" in PluginList.

**Action Items:**
- [ ] Create `lib/version.ts` with VERSION constant
- [ ] Update `PluginList.tsx` to import and use version
- [ ] Remove TODO comment

**Impact:** Better maintainability, single source of truth for version

---

### T018: Analytics Integration (Plausible)
**Status:** Pending
**Estimated Time:** 45 minutes
**Priority:** P1
**Description:** Add privacy-friendly analytics tracking with Plausible.

**Action Items:**
- [ ] Create Plausible account (or use existing)
- [ ] Get Plausible data domain
- [ ] Add Plausible script to `app/layout.tsx`
- [ ] Add custom event tracking:
  - Download events (plugin_id, platform)
  - Page navigation
  - Button clicks (pricing tiers, plugins)
- [ ] Test tracking in dev mode

**Files to update:**
- `app/layout.tsx` - Add Plausible Script component
- `app/components/PluginCard.tsx` - Add download event
- `app/components/PluginList.tsx` - Add download event
- `lib/analytics.ts` - Create analytics helper functions

**Impact:** User behavior tracking, data-driven decisions

**Note:** Plausible is privacy-focused, no cookies, GDPR compliant.

---

## 🟢 P2 - Enhancement Tasks (Sprint 4 Focus)

### T013-1: Unit Testing Setup
**Status:** Pending
**Estimated Time:** 20 minutes
**Priority:** P2
**Description:** Install and configure testing dependencies.

**Action Items:**
- [ ] Install vitest: `pnpm add -D vitest @vitest/ui`
- [ ] Install testing library: `pnpm add -D @testing-library/react @testing-library/jest-dom @testing-library/user-event`
- [ ] Create `vitest.config.ts`
- [ ] Add test scripts to package.json:
  ```json
  "test": "vitest",
  "test:ui": "vitest --ui",
  "test:coverage": "vitest --coverage"
  ```
- [ ] Install coverage tool: `pnpm add -D @vitest/coverage-v8`
- [ ] Create `__tests__/` directory structure
- [ ] Write a sample test to verify setup

**Impact:** Foundation for test-driven development

**Dependencies to add:**
- `vitest` - Fast unit test framework
- `@vitest/ui` - Visual test runner UI
- `@vitest/coverage-v8` - Code coverage
- `@testing-library/react` - React component testing
- `@testing-library/jest-dom` - Jest DOM matchers
- `@testing-library/user-event` - User interaction simulation

---

### T013-2: Unit Tests for Validation Schemas
**Status:** Pending
**Estimated Time:** 30 minutes
**Priority:** P2
**Description:** Write unit tests for validation schemas in `lib/validations.ts`.

**Action Items:**
- [ ] Create `lib/validations.test.ts`
- [ ] Test PluginQuerySchema (valid + invalid inputs)
- [ ] Test PluginCreateSchema (valid + invalid inputs)
- [ ] Test DashboardPostSchema
- [ ] Test DashboardQuerySchema
- [ ] Test StripeCheckoutSchema
- [ ] Test StripeVerifySchema
- [ ] Test DownloadLogSchema
- [ ] Test BlogQuerySchema
- [ ] Test SessionCreateSchema
- [ ] Test SessionDeleteSchema
- [ ] Test validateRequest helper function

**Expected Coverage:** ~100% of validation logic

**Impact:** Confidence in input validation, catch regression bugs

---

### T013-3: Unit Tests for Components
**Status:** Pending
**Estimated Time:** 45 minutes
**Priority:** P2
**Description:** Write unit tests for React components.

**Action Items:**
- [ ] Create test file: `app/components/PluginCard.test.tsx`
  - Test rendering with plugin data
  - Test download button click
  - Test "downloading" state
  - Test price display
  - Test platform badge
- [ ] Create test file: `app/components/PluginList.test.tsx`
  - Test rendering with plugins
  - Test filter functionality
  - Test search functionality
  - Test empty state
  - Test toast notification on download

**Expected Coverage:** ~60-70% of component code

**Impact:** Catch UI bugs, ensure components render correctly

---

### T013-4: Unit Tests for API Routes
**Status:** Pending
**Estimated Time:** 30 minutes
**Priority:** P2
**Description:** Write unit tests for API routes (non-database dependent).

**Action Items:**
- [ ] Create test file: `app/api/plugins/route.test.ts`
  - Test GET request returns plugins
  - Test POST request validates input
  - Test error handling
- [ ] Create test file: `app/api/stripe/route.test.ts`
  - Test GET request
  - Test POST checkout creation (validation only)
  - Test PUT verification (validation only)
- [ ] Mock database responses for routes that need DB

**Note:** Database-dependent routes will need mock responses.

**Expected Coverage:** ~50% of API logic

**Impact:** API reliability, catch request handling bugs

---

### T010: Rate Limiting (In-Memory Fallback)
**Status:** Pending
**Estimated Time:** 45 minutes
**Priority:** P2
**Description:** Add rate limiting to API routes using in-memory storage (Redis unavailable).

**Action Items:**
- [ ] Create `lib/rate-limit.ts` with in-memory store
- [ ] Implement rate limit middleware:
  - Token bucket algorithm
  - Per-IP tracking
  - Configurable limits (10 req/min, 100 req/hour)
- [ ] Apply to sensitive routes:
  - `/api/plugins` (POST)
  - `/api/stripe` (POST)
  - `/api/dashboard` (POST)
- [ ] Add rate limit headers to responses:
  - X-RateLimit-Limit
  - X-RateLimit-Remaining
  - X-RateLimit-Reset
- [ ] Test rate limit behavior

**Files to create:**
- `lib/rate-limit.ts` - Rate limiting middleware
- `middleware.ts` - Next.js middleware for global rate limiting

**Alternative:** Use `upstash/ratelimit` with in-memory adapter.

**Impact:** Security, abuse prevention (even without Redis)

---

### T019: SEO - Structured Data (JSON-LD)
**Status:** Pending
**Estimated Time:** 30 minutes
**Priority:** P2
**Description:** Add structured data for better search engine understanding.

**Action Items:**
- [ ] Create `lib/structured-data.ts` with JSON-LD generators:
  - Organization schema
  - Product schema (for plugins)
  - WebSite schema
- [ ] Add JSON-LD to layout.tsx:
  - Organization data (Amp Spot brand)
  - WebSite data
- [ ] Add JSON-LD to plugin pages:
  - Product schema (SoftwareApplication)
  - Offers (pricing)
- [ ] Validate JSON-LD with Google Rich Results Test

**Files to create:**
- `lib/structured-data.ts` - JSON-LD component generators

**Files to update:**
- `app/layout.tsx` - Add organization/website schema
- `app/plugins/page.tsx` - Add Product schema
- `app/plugins/[id]/page.tsx` - Add Product schema for individual plugin

**Impact:** Better SEO, rich snippets in search results

---

## 🔴 P0 Critical Tasks (Infrastructure Blocked - Unchanged)

### T001: Verify/Create Blog Posts Table
**Status:** BLOCKED
**Priority:** P0
**Blocker:** PostgreSQL connection timeout (100.64.0.4:24271)
**Estimated Time:** 15 minutes (once connection restored)

### T002: Add Download Files to Server
**Status:** BLOCKED
**Priority:** P0
**Blocker:** Requires infrastructure investigation
**Estimated Time:** 30 minutes (once infrastructure resolved)

---

## 🟡 P1 Important Tasks (Remaining - Unchanged)

### T007: Real Stripe Payment Processing
**Status:** Pending (needs Stripe keys)
**Estimated Time:** 2-3 hours
**Priority:** P1

### T008: User Authentication (NextAuth.js)
**Status:** Pending (needs DB)
**Estimated Time:** 3-4 hours
**Priority:** P1

---

## 🟢 P2 Enhancement Tasks (Remaining - Unchanged)

### T014: E2E Tests with Playwright
**Status:** Pending
**Estimated Time:** 4-6 hours
**Priority:** P2

### T015: Email Notifications
**Status:** Pending
**Status:** Pending
**Estimated Time:** 2 hours
**Priority:** P2

### T016: Download License System
**Status:** Pending (needs DB)
**Estimated Time:** 3-4 hours
**Priority:** P2

---

## 📋 Sprint 4 Plan (This Session)

### Quick Wins (5-10 min)
1. **T017:** Version Configuration - 5 min

### Priority 1 (45 min)
2. **T018:** Analytics Integration (Plausible) - 45 min

### Priority 2 - Testing Foundation (2.5 hours)
3. **T013-1:** Unit Testing Setup - 20 min
4. **T013-2:** Unit Tests for Validations - 30 min
5. **T013-3:** Unit Tests for Components - 45 min
6. **T013-4:** Unit Tests for API Routes - 30 min

### Priority 3 - Enhancements (if time)
7. **T010:** Rate Limiting - 45 min
8. **T019:** SEO Structured Data - 30 min

### Total Estimated Time: ~3.5-4 hours

---

## Summary

| Category | Tasks | Est. Time | Dependencies |
|----------|-------|-----------|--------------|
| ✅ Completed (Sprint 1-3) | 9 | 4 hours | - |
| 🔴 P0 Critical | 2 | 45 min | PostgreSQL/Redis |
| 🟡 P1 Important (Sprint 4) | 2 | 50 min | None |
| 🟡 P1 Important (Remaining) | 2 | 5-7 hours | Stripe, Database |
| 🟢 P2 Enhancement (Sprint 4) | 6 | 3-4 hours | None |
| 🟢 P2 Enhancement (Remaining) | 3 | 9-11 hours | Varies |

---

## Success Criteria (Sprint 4)

- [ ] Version configuration implemented (remove TODO)
- [ ] Analytics tracking integrated (Plausible)
- [ ] Testing infrastructure set up (vitest, testing-library)
- [ ] Validation schemas: 100% test coverage
- [ ] Components: 60-70% test coverage
- [ ] API routes: 50% test coverage
- [ ] Overall test coverage: 30-40%
- [ ] All tests passing
- [ ] Build successful
- [ ] No TypeScript errors
- [ ] ESLint clean

---

## Future Sprint Plans

### Sprint 5 (Next Week)
- Resolve infrastructure (PostgreSQL/Redis)
- Complete T001 (Blog table)
- Complete T002 (Download files)
- Add T014 (E2E tests with Playwright)

### Sprint 6-7 (Weeks 3-4)
- T010: Real rate limiting with Redis
- T007: Real Stripe payment processing
- T008: User authentication
- T015: Email notifications

### Sprint 8-9 (Month 2)
- T016: Download License System
- CI/CD pipeline setup
- Performance monitoring
- Advanced SEO optimizations

---

**Task List Updated:** 2026-02-14 11:26 GMT
**Ready for Phase 3:** ✅ Yes
**Sprint 4 Focus:** Testing foundation + Analytics + Version config
