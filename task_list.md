# Website Development - Task List

**Date:** 2026-02-13 22:56 GMT
**Generated from:** Phase 2 (Plan) Assessment

---

## Priority Legend

- 🔴 **P0 - Critical** - Must do immediately, blocks functionality
- 🟡 **P1 - Important** - Should do soon, improves UX/security
- 🟢 **P2 - Enhancement** - Nice to have, can defer

---

## 🔴 P0 - Critical Tasks

### T001: Commit Blog Integration
**Status:** Pending
**Estimated Time:** 10 minutes
**Description:** Blog API and pages are untracked and need to be committed.

**Files:**
- `app/api/blog/route.ts` - Blog API endpoint
- `app/blog/[slug]/page.tsx` - Blog post page
- `app/blog/page.tsx` - Blog listing page

**Action Items:**
- [ ] Review all three files for correctness
- [ ] Add to git staging
- [ ] Create commit with descriptive message
- [ ] Push to origin/master

**Impact:** Blog functionality at risk of data loss

---

### T002: Create Blog Posts Database Table
**Status:** Pending
**Estimated Time:** 15 minutes
**Description:** Blog API expects `blog_posts` table but it doesn't exist.

**Schema Required:**
```sql
CREATE TABLE blog_posts (
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

CREATE INDEX idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX idx_blog_posts_published ON blog_posts(published, published_at DESC);
CREATE INDEX idx_blog_posts_category ON blog_posts(category);
```

**Action Items:**
- [ ] Connect to PostgreSQL (amp_spot DB)
- [ ] Run schema creation script
- [ ] Verify table created successfully
- [ ] Create seed data for testing

**Impact:** Blog pages will error without this table

---

### T003: Implement Download Logic in PluginList
**Status:** Pending
**Estimated Time:** 20 minutes
**Description:** Download button calls placeholder function, needs real implementation.

**Current Code:**
```typescript
function handleDownload(plugin: PluginData) {
  // TODO: Implement download logic
  console.log('Download:', plugin.name);
}
```

**Required Implementation:**
```typescript
async function handleDownload(plugin: PluginData) {
  try {
    // Call download API
    const response = await fetch(`/api/plugins/${plugin.id}/download`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        user_id: 'anonymous', // TODO: Get from auth
        platform: 'unknown', // TODO: Detect browser
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to download');
    }

    const data = await response.json();
    
    // Trigger browser download
    window.location.href = data.plugin.download_url;
    
    // Show success message (TODO: Add toast notification)
    alert(`Downloading ${plugin.name} v${plugin.version}`);
  } catch (err) {
    console.error('Download error:', err);
    alert('Download failed. Please try again.');
  }
}
```

**Action Items:**
- [ ] Implement async download handler
- [ ] Add loading state to button
- [ ] Add error handling with user feedback
- [ ] Test with actual plugin download

**Impact:** Download buttons don't work

---

## 🟡 P1 - Important Tasks

### T004: Add Error Boundaries
**Status:** Pending
**Estimated Time:** 30 minutes
**Description:** Add React Error Boundaries to catch and handle component errors gracefully.

**Action Items:**
- [ ] Create `app/components/ErrorBoundary.tsx`
- [ ] Wrap main app layout in ErrorBoundary
- [ ] Add fallback UI with error message
- [ ] Add error logging (console or error tracking service)

**Impact:** Better UX, easier debugging

---

### T005: Add Loading States to All Async Operations
**Status:** Pending
**Estimated Time:** 20 minutes
**Description:** Ensure all async operations have visible loading indicators.

**Components to Check:**
- `app/plugins/page.tsx` - ✅ Has loading state
- `app/dashboard/page.tsx` - ❓ Verify
- `app/blog/page.tsx` - ❓ Verify
- `app/blog/[slug]/page.tsx` - ❓ Verify

**Action Items:**
- [ ] Audit all async components
- [ ] Add skeleton loaders or spinners where missing
- [ ] Test loading states

**Impact:** Better perceived performance

---

### T006: Implement Real Stripe Payment Processing
**Status:** Pending
**Estimated Time:** 2-3 hours
**Description:** Current Stripe integration is mock only. Needs real implementation.

**Prerequisites:**
- [ ] Stripe API keys (test and production)
- [ ] Stripe webhook endpoint setup

**Action Items:**
- [ ] Install `stripe` npm package
- [ ] Configure Stripe client with environment variables
- [ ] Implement real checkout session creation in `/api/stripe` (POST)
- [ ] Implement webhook handler for payment confirmation
- [ ] Update `/api/stripe` (PUT) to verify webhooks
- [ ] Test with Stripe test cards
- [ ] Add error handling for failed payments

**Impact:** Revenue functionality

---

### T007: Add User Authentication
**Status:** Pending
**Estimated Time:** 3-4 hours
**Description:** Add NextAuth.js for user authentication.

**Action Items:**
- [ ] Install `next-auth` npm package
- [ ] Configure auth providers (Google, GitHub, email/password)
- [ ] Create database tables for users and sessions
- [ ] Add login/signup pages
- [ ] Protect API routes with authentication
- [ ] Add user context to app
- [ ] Test authentication flow

**Impact:** Required for downloads, dashboard personalization

---

### T008: Create Download Directory and File Storage
**Status:** Pending
**Estimated Time:** 30 minutes
**Description:** Download API returns URLs but files don't exist on server.

**Action Items:**
- [ ] Create `public/downloads/` directory
- [ ] Copy built VST files from plugin projects
- [ ] Create download script to automate file copying
- [ ] Add file to git or use build script

**Impact:** Downloads will 404 without files

---

## 🟢 P2 - Enhancement Tasks

### T009: SEO Optimization
**Status:** Pending
**Estimated Time:** 1 hour
**Description:** Add meta tags, sitemap, and robots.txt for better search rankings.

**Action Items:**
- [ ] Add metadata to `layout.tsx` (global)
- [ ] Add metadata to each page
- [ ] Create `app/sitemap.ts` for dynamic sitemap
- [ ] Create `app/robots.ts` for robots.txt
- [ ] Add OpenGraph and Twitter cards
- [ ] Test with Google Rich Results Test

**Impact:** Better search engine visibility

---

### T010: Analytics Tracking
**Status:** Pending
**Estimated Time:** 1 hour
**Description:** Add analytics to track user behavior.

**Action Items:**
- [ ] Choose analytics provider (Plausible, Google Analytics, etc.)
- [ ] Install analytics SDK
- [ ] Add page view tracking
- [ ] Add event tracking (downloads, button clicks)
- [ ] Create analytics dashboard
- [ ] Test tracking

**Impact:** Data-driven decisions

---

### T011: Email Notifications
**Status:** Pending
**Estimated Time:** 2 hours
**Description:** Add email notifications for important events.

**Action Items:**
- [ ] Choose email service (Resend, SendGrid, etc.)
- [ ] Install email SDK
- [ ] Create email templates
- [ ] Add email triggers:
  - [ ] Download confirmation
  - [ ] Purchase receipt
  - [ ] Password reset
  - [ ] Newsletter signup
- [ ] Test email delivery

**Impact:** Better user communication

---

### T012: Download License System
**Status:** Pending
**Estimated Time:** 3-4 hours
**Description:** Create license key generation and validation system.

**Action Items:**
- [ ] Design license key format
- [ ] Create license generation API
- [ ] Create license validation API
- [ ] Add license checking to downloads
- [ ] Store licenses in database
- [ ] Add license management to dashboard
- [ ] Test license flow

**Impact:** Monetization, plugin protection

---

### T013: Unit Tests
**Status:** Pending
**Estimated Time:** 4-6 hours
**Description:** Add comprehensive unit tests for critical components and API routes.

**Action Items:**
- [ ] Install testing dependencies (Jest/Vitest, React Testing Library)
- [ ] Configure test environment
- [ ] Write tests for components:
  - [ ] Header
  - [ ] PluginCard
  - [ ] PluginList
- [ ] Write tests for API routes:
  - [ ] /api/plugins
  - [ ] /api/plugins/[id]/download
  - [ ] /api/blog
  - [ ] /api/dashboard
- [ ] Add CI/CD test pipeline
- [ ] Aim for 80%+ coverage

**Impact:** Code reliability, easier refactoring

---

### T014: E2E Tests with Playwright
**Status:** Pending
**Estimated Time:** 4-6 hours
**Description:** Add end-to-end tests for critical user flows.

**Action Items:**
- [ ] Install Playwright
- [ ] Configure Playwright
- [ ] Write E2E tests:
  - [ ] Homepage renders
  - [ ] Plugin browsing and filtering
  - [ ] Plugin page loads
  - [ ] Blog listing and reading
  - [ ] Pricing page
  - [ ] Checkout flow (mock)
- [ ] Add screenshot testing
- [ ] Add to CI/CD pipeline

**Impact:** Catch integration issues before deployment

---

### T015: Add Toast Notifications
**Status:** Pending
**Estimated Time:** 1 hour
**Description:** Replace `alert()` calls with toast notifications for better UX.

**Action Items:**
- [ ] Install toast library (react-hot-toast or similar)
- [ ] Create toast context/provider
- [ ] Add toast for:
  - [ ] Download success/failure
  - [ ] API errors
  - [ ] Form submissions
- [ ] Style toast to match brand

**Impact:** Better UX, no browser alerts

---

### T016: Improve Mobile Responsiveness
**Status:** Pending
**Estimated Time:** 2 hours
**Description:** Test and improve mobile experience across all pages.

**Action Items:**
- [ ] Audit all pages on mobile viewport
- [ ] Test on actual mobile devices (Chrome DevTools)
- [ ] Fix responsive issues:
  - [ ] Navigation menu
  - [ ] Plugin cards
  - [ ] Tables (if any)
  - [ ] Forms
- [ ] Add mobile-specific optimizations

**Impact:** Better mobile UX

---

## Summary

| Priority | Tasks | Est. Time |
|----------|-------|-----------|
| 🔴 P0 Critical | 3 | 45 min |
| 🟡 P1 Important | 5 | 6.5 hours |
| 🟢 P2 Enhancement | 8 | 17.5 hours |
| **Total** | **16** | **~24.5 hours** |

---

## Recommended Sprint Plan

**Sprint 1 (Immediate - Today):**
- T001: Commit blog integration (10 min)
- T002: Create blog_posts table (15 min)
- T003: Implement download logic (20 min)

**Sprint 2 (This Week):**
- T004: Error boundaries (30 min)
- T005: Loading states (20 min)
- T008: Download directory (30 min)

**Sprint 3 (Next Week):**
- T006: Real Stripe (2-3 hours)
- T007: Authentication (3-4 hours)

---

**Task List Generated:** 2026-02-13 22:56 GMT
**Ready for Phase 3:** ✅ Yes
