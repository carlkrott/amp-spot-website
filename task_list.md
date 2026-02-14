# Website Development - Task List

**Date:** 2026-02-14 01:26 GMT
**Generated from:** Phase 2 (Plan) Assessment - Cron Session

---

## Priority Legend

- 🔴 **P0 - Critical** - Must do immediately, blocks functionality
- 🟡 **P1 - Important** - Should do soon, improves UX/security
- 🟢 **P2 - Enhancement** - Nice to have, can defer

---

## 🔴 P0 - Critical Tasks

### T001: Verify Blog Posts Database Table
**Status:** Pending
**Estimated Time:** 15 minutes
**Description:** Blog API expects `blog_posts` table - verify it exists.

**Schema Required:**
```sql
CREATE TABLE IF NOT EXISTS blog_posts (
  id SERIAL PRIMARY KEY,
  slug VARCHAR(255) UNIQUE NOT NULL,
  title VARCHAR(255) NOT NULL,
  excerpt TEXT,
  content TEXT NOT NULL,
  author VARCHAR(100) NOT NULL,
  category VARCHAR(50) DEFAULT 'tips',
  tags TEXT[] DEFAULT '{}',
  featured_image TEXT,
  published BOOLEAN DEFAULT false,
  published_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(published, published_at DESC);
CREATE INDEX IF NOT EXISTS idx_blog_posts_category ON blog_posts(category);
```

**Action Items:**
- [ ] Connect to PostgreSQL (amp_spot DB)
- [ ] Check if table exists: `\dt blog_posts`
- [ ] If missing, run schema creation
- [ ] Create seed data for testing
- [ ] Verify table accessible from API

**Impact:** Blog pages will error without this table

---

### T002: Add Download Files to Server
**Status:** Pending
**Estimated Time:** 30 minutes
**Description:** Download API returns URLs but files need to exist on server.

**Current State:**
- API endpoint: `/api/plugins/[id]/download`
- Returns: `download_url` pointing to `/downloads/`
- Files needed: VST bundles for each plugin

**Action Items:**
- [ ] Create `public/downloads/` directory
- [ ] Copy built VST files from plugin projects
- [ ] Verify file URLs are correct
- [ ] Test actual download flow

**Impact:** Downloads will 404 without files

---

### T003: Add robots.txt
**Status:** Pending
**Estimated Time:** 5 minutes
**Description:** Create robots.ts for SEO.

**Action Items:**
- [ ] Create `app/robots.ts`
- [ ] Add sitemap reference

**Impact:** Essential for SEO

---

### T004: Add sitemap.xml
**Status:** Pending
**Estimated Time:** 10 minutes
**Description:** Create dynamic sitemap for SEO.

**Action Items:**
- [ ] Create `app/sitemap.ts`
- [ ] Include all pages
- [ ] Include dynamic routes (plugins, blog posts)

**Impact:** Essential for SEO

---

## 🟡 P1 - Important Tasks

### T005: Add OpenGraph and Twitter Cards
**Status:** Pending
**Estimated Time:** 20 minutes
**Description:** Add social sharing metadata.

**Action Items:**
- [ ] Update `app/layout.tsx` metadata
- [ ] Add OpenGraph tags
- [ ] Add Twitter Card tags
- [ ] Test with social preview tools

**Impact:** Better social sharing

---

### T006: Add Error Boundaries
**Status:** Pending
**Estimated Time:** 30 minutes
**Description:** Add React Error Boundaries for better error handling.

**Action Items:**
- [ ] Create `app/components/ErrorBoundary.tsx`
- [ ] Wrap main app layout
- [ ] Add fallback UI

**Impact:** Better UX, easier debugging

---

### T007: Implement Real Stripe Payment Processing
**Status:** Pending
**Estimated Time:** 2-3 hours
**Description:** Replace mock Stripe with real implementation.

**Prerequisites:**
- [ ] Stripe API keys (test and production)
- [ ] Stripe webhook endpoint setup

**Action Items:**
- [ ] Install `stripe` npm package
- [ ] Configure Stripe client
- [ ] Implement checkout session creation
- [ ] Implement webhook handler
- [ ] Test with test cards

**Impact:** Revenue functionality

---

### T008: Add User Authentication
**Status:** Pending
**Estimated Time:** 3-4 hours
**Description:** Add NextAuth.js for user authentication.

**Action Items:**
- [ ] Install `next-auth` npm package
- [ ] Configure auth providers
- [ ] Create database tables
- [ ] Add login/signup pages
- [ ] Protect API routes

**Impact:** Required for downloads, dashboard personalization

---

### T009: Add Input Validation
**Status:** Pending
**Estimated Time:** 1 hour
**Description:** Add zod for API input validation.

**Action Items:**
- [ ] Install `zod` npm package
- [ ] Add validation to all API routes
- [ ] Add validation schemas
- [ ] Test validation

**Impact:** Security

---

## 🟢 P2 - Enhancement Tasks

### T010: Add Rate Limiting
**Status:** Pending
**Estimated Time:** 1 hour
**Description:** Add rate limiting to API routes.

**Action Items:**
- [ ] Install rate limiting middleware
- [ ] Apply to sensitive routes
- [ ] Configure limits

**Impact:** Security, abuse prevention

---

### T011: Analytics Tracking
**Status:** Pending
**Estimated Time:** 1 hour
**Description:** Add analytics for user behavior tracking.

**Action Items:**
- [ ] Choose analytics provider
- [ ] Install SDK
- [ ] Add page view tracking
- [ ] Add event tracking

**Impact:** Data-driven decisions

---

### T012: Toast Notifications
**Status:** Pending
**Estimated Time:** 1 hour
**Description:** Replace `alert()` with toast notifications.

**Action Items:**
- [ ] Install toast library
- [ ] Create toast context
- [ ] Replace alerts with toasts

**Impact:** Better UX

---

### T013: Unit Tests
**Status:** Pending
**Estimated Time:** 4-6 hours
**Description:** Add comprehensive unit tests.

**Action Items:**
- [ ] Install testing dependencies
- [ ] Configure test environment
- [ ] Write tests for components
- [ ] Write tests for API routes
- [ ] Aim for 80%+ coverage

**Impact:** Code reliability

---

### T014: E2E Tests with Playwright
**Status:** Pending
**Estimated Time:** 4-6 hours
**Description:** Add end-to-end tests for critical flows.

**Action Items:**
- [ ] Install Playwright
- [ ] Write E2E tests
- [ ] Add screenshot testing

**Impact:** Catch integration issues

---

### T015: Email Notifications
**Status:** Pending
**Estimated Time:** 2 hours
**Description:** Add email notifications for key events.

**Action Items:**
- [ ] Choose email service
- [ ] Create email templates
- [ ] Add email triggers

**Impact:** Better user communication

---

### T016: Download License System
**Status:** Pending
**Estimated Time:** 3-4 hours
**Description:** Create license key generation and validation.

**Action Items:**
- [ ] Design license key format
- [ ] Create license generation API
- [ ] Create license validation API
- [ ] Add license checking to downloads

**Impact:** Monetization, plugin protection

---

## Completed Tasks (From Previous Session)

### ✅ T003_old: Implement Download Logic in PluginList
**Status:** Complete
**Completed:** 2026-02-13
**Description:** Download functionality fully implemented with platform detection, API calls, and loading states.

**Features:**
- Async download handler with error handling
- Loading state per plugin
- Platform detection (macOS/Windows/Linux)
- Download tracking via API endpoint

---

## Summary

| Priority | Tasks | Est. Time |
|----------|-------|-----------|
| 🔴 P0 Critical | 4 | 1 hour |
| 🟡 P1 Important | 5 | 7.5 hours |
| 🟢 P2 Enhancement | 7 | 15.5 hours |
| **Total** | **16** | **~24 hours** |

---

## Recommended Sprint Plan

**Sprint 1 (Immediate - This Session):**
- T001: Verify blog_posts table (15 min)
- T002: Add download files (30 min)
- T003: Add robots.txt (5 min)
- T004: Add sitemap.xml (10 min)

**Sprint 2 (This Week):**
- T005: OpenGraph/Twitter cards (20 min)
- T006: Error boundaries (30 min)
- T009: Input validation (1 hour)

**Sprint 3 (Next Week):**
- T007: Real Stripe (2-3 hours)
- T008: Authentication (3-4 hours)

---

**Task List Updated:** 2026-02-14 01:26 GMT
**Ready for Phase 3:** ✅ Yes
