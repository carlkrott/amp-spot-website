# Website Development - Task List (Sprint 3)

**Date:** 2026-02-14 07:56 GMT
**Generated from:** Phase 2 (Plan) - Cron Session
**Previous Sprints:** Sprint 1 (SEO), Sprint 2 (Validation & Error Boundaries)

---

## Priority Legend

- 🔴 **P0 - Critical** - Must do immediately, blocks functionality
- 🟡 **P1 - Important** - Should do soon, improves UX/security
- 🟢 **P2 - Enhancement** - Nice to have, can defer

---

## ✅ Completed Tasks (Previous Sprints)

### Sprint 1 ✅
- [x] T003: Add robots.ts (SEO) - 5 min
- [x] T004: Add sitemap.ts (SEO) - 10 min
- [x] Download API endpoint scaffolding

### Sprint 2 ✅
- [x] T005: OpenGraph and Twitter Card metadata - 20 min
- [x] T006: Error boundaries - 30 min
- [x] T009: Input validation with zod (partial) - 75% coverage (6/8 API routes)

---

## 🟡 P1 - Important Tasks (Sprint 3 Focus)

### T003-1: Complete API Route Validation (Dashboard)
**Status:** Pending
**Estimated Time:** 10 minutes
**Priority:** P1
**Description:** Add validation to `/api/dashboard/route.ts` for GET and POST requests.

**Validation Required:**
```typescript
// GET: Validate query params
const { searchParams } = new URL(request.url);
const userId = searchParams.get('user_id');

// Add validation for user_id if present
if (userId && (typeof userId !== 'string' || userId.length > 100)) {
  return NextResponse.json({ error: 'Invalid user_id' }, { status: 400 });
}

// POST: Validate body
const DashboardPostSchema = z.object({
  user_id: z.string().min(1).max(100),
  action: z.enum(['add_favorite', 'remove_favorite', 'increment_downloads']),
  plugin_id: z.string().max(100).optional(),
});
```

**Action Items:**
- [ ] Import zod and DashboardQuerySchema, validateRequest
- [ ] Add GET query validation
- [ ] Add POST body validation using validateRequest()
- [ ] Test with invalid inputs

**Impact:** Security, better error handling

---

### T003-2: Complete API Route Validation (Stripe)
**Status:** Pending
**Estimated Time:** 10 minutes
**Priority:** P1
**Description:** Add validation to `/api/stripe/route.ts` for POST and PUT requests.

**Validation Required:**
```typescript
// POST: Validate checkout session creation
const { plan_id, user_email, user_id, success_url, cancel_url } = body;
// Already has basic validation, but use zod for consistency

// PUT: Validate payment verification
const { session_id } = body;
// Already has basic validation, but use zod for consistency
```

**Action Items:**
- [ ] Import zod and StripeCheckoutSchema, validateRequest
- [ ] Replace manual validation with zod in POST
- [ ] Replace manual validation with zod in PUT
- [ ] Test with invalid inputs

**Impact:** Security, consistent error handling

---

### T003-3: Complete API Route Validation (Download)
**Status:** Pending
**Estimated Time:** 10 minutes
**Priority:** P1
**Description:** Add validation to `/api/plugins/[id]/download/route.ts` for POST requests.

**Validation Required:**
```typescript
// POST: Validate download logging
const { user_id, platform, version } = body;

// Already validated plugin_id in GET
// Add POST body validation using SessionCreateSchema
```

**Action Items:**
- [ ] Import zod and SessionCreateSchema (already exists)
- [ ] Add POST body validation using validateRequest()
- [ ] Test with invalid inputs

**Impact:** Security, better analytics data quality

---

### T012: Toast Notifications
**Status:** Pending
**Estimated Time:** 1 hour
**Priority:** P1
**Description:** Replace `alert()` calls with toast notifications for better UX.

**Action Items:**
- [ ] Install toast library (react-hot-toast or sonner)
- [ ] Create ToastContext and ToastProvider
- [ ] Add toast trigger function
- [ ] Replace all alert() calls with toast()
- [ ] Style to match Amp Spot brand

**Impact:** Better UX, modern interface

**Files to update:**
- `app/components/PluginCard.tsx` - Download success/error
- `app/components/PluginList.tsx` - Filter updates
- Any other components using alert()

---

## 🟢 P2 - Enhancement Tasks (Non-Database Dependent)

### T010: Rate Limiting
**Status:** Pending
**Estimated Time:** 1 hour
**Priority:** P2
**Description:** Add rate limiting to API routes for security.

**Note:** Requires Redis connectivity (currently broken). May need mock implementation for now.

**Action Items:**
- [ ] Install upstash/ratelimit or similar
- [ ] Create rate limiting middleware
- [ ] Apply to sensitive routes (POST endpoints)
- [ ] Configure limits (10 req/min, 100 req/hour)
- [ ] Test with rate limit exceeded scenarios

**Impact:** Security, abuse prevention

**Alternative:** Implement in-memory rate limiting if Redis remains unavailable.

---

### T011: Analytics Tracking
**Status:** Pending
**Estimated Time:** 1 hour
**Priority:** P2
**Description:** Add analytics for user behavior tracking.

**Action Items:**
- [ ] Choose analytics provider (Google Analytics, Plausible, Umami)
- [ ] Install SDK
- [ ] Add page view tracking in layout
- [ ] Add event tracking (downloads, clicks, signups)
- [ ] Configure privacy settings

**Impact:** Data-driven decisions

---

### T013: Unit Tests
**Status:** Pending
**Estimated Time:** 4-6 hours
**Priority:** P2
**Description:** Add comprehensive unit tests.

**Action Items:**
- [ ] Install testing dependencies (vitest, @testing-library/react)
- [ ] Configure test environment (vitest.config.ts exists)
- [ ] Write tests for components (PluginCard, PluginList, Header, Footer)
- [ ] Write tests for utility functions (validations.ts)
- [ ] Aim for 50% coverage (realistic target for now)

**Impact:** Code reliability

**Note:** Easier without database - focus on pure functions and components.

---

### T014: E2E Tests with Playwright
**Status:** Pending
**Estimated Time:** 4-6 hours
**Priority:** P2
**Description:** Add end-to-end tests for critical flows.

**Action Items:**
- [ ] Install Playwright
- [ ] Write E2E tests for:
  - Homepage loading
  - Navigation between pages
  - Plugin browsing and filtering
  - Download flow (if files available)
- [ ] Add screenshot testing
  [ ] Run tests in CI

**Impact:** Catch integration issues

---

### T015: Email Notifications
**Status:** Pending
**Estimated Time:** 2 hours
**Priority:** P2
**Description:** Add email notifications for key events.

**Action Items:**
- [ ] Choose email service (SendGrid, Resend, AWS SES)
- [ ] Create email templates
- [ ] Add email triggers (download confirmation, purchase receipt)
- [ ] Test email delivery

**Impact:** Better user communication

---

### T016: Download License System
**Status:** Pending
**Estimated Time:** 3-4 hours
**Priority:** P2
**Description:** Create license key generation and validation.

**Action Items:**
- [ ] Design license key format (e.g., `AMPSP-XXXX-XXXX-XXXX`)
- [ ] Create license generation API
- [ ] Create license validation API
- [ ] Add license checking to downloads
- [ ] Store licenses in database

**Impact:** Monetization, plugin protection

**Note:** Requires database connectivity.

---

## 🔴 P0 Critical Tasks (Infrastructure Blocked)

### T001: Verify/Create Blog Posts Table
**Status:** BLOCKED
**Priority:** P0
**Blocker:** PostgreSQL connection timeout (100.64.0.4:24271)
**Estimated Time:** 15 minutes (once connection restored)

**Description:** Blog API expects `blog_posts` table - verify it exists or create it.

**Action Items:**
- [ ] Investigate PostgreSQL connectivity issue on 7995x
- [ ] Check if Docker PostgreSQL container is running
- [ ] Verify firewall/network config
- [ ] Run `lib/setup-blog-table.ts` to create table
- [ ] Add seed data for testing

---

### T002: Add Download Files to Server
**Status:** BLOCKED
**Priority:** P0
**Blocker:** Requires infrastructure investigation
**Estimated Time:** 30 minutes (once infrastructure resolved)

**Description:** Download API returns URLs but files need to exist on server.

**Action Items:**
- [ ] Investigate VST build artifacts on 7995x
- [ ] Copy built VST files to `public/downloads/`
- [ ] Verify file URLs are correct
- [ ] Test actual download flow

---

### T007: Real Stripe Payment Processing
**Status:** Pending (depends on infrastructure)
**Priority:** P1
**Estimated Time:** 2-3 hours
**Description:** Replace mock Stripe with real implementation.

**Prerequisites:**
- [ ] Stripe API keys (test and production)
- [ ] Database connectivity for subscription storage

**Action Items:**
- [ ] Install `stripe` npm package
- [ ] Configure Stripe client
- [ ] Implement checkout session creation
- [ ] Implement webhook handler
- [ ] Test with test cards

---

### T008: User Authentication
**Status:** Pending (depends on infrastructure)
**Priority:** P1
**Estimated Time:** 3-4 hours
**Description:** Add NextAuth.js for user authentication.

**Prerequisites:**
- [ ] Database connectivity for user/session storage

**Action Items:**
- [ ] Install `next-auth` npm package
- [ ] Configure auth providers (Google, GitHub, credentials)
- [ ] Create database tables (users, accounts, sessions)
- [ ] Add login/signup pages
- [ ] Protect API routes

---

## 📋 Sprint 3 Plan (This Session)

### Immediate Tasks (30-45 min total)
1. **T003-1:** Dashboard API validation - 10 min
2. **T003-2:** Stripe API validation - 10 min
3. **T003-3:** Download API validation - 10 min

### Secondary Tasks (1 hour)
4. **T012:** Toast notifications - 1 hour

### Infrastructure Investigation (if time permits)
- Investigate PostgreSQL/Redis connectivity on 7995x
- Check Docker container status

---

## Summary

| Category | Tasks | Est. Time | Dependencies |
|----------|-------|-----------|--------------|
| ✅ Completed | 3 (Sprint 1) | 15 min | - |
| ✅ Completed | 3 (Sprint 2) | 2.5 hours | - |
| 🔴 P0 Critical | 2 | 45 min | PostgreSQL/Redis |
| 🟡 P1 Important (Sprint 3) | 4 | 1.5 hours | None |
| 🟡 P1 Important (Remaining) | 2 | 5-7 hours | Stripe, Database |
| 🟢 P2 Enhancement | 6 | 15-20 hours | Varies |

---

## Success Criteria (Sprint 3)

- [ ] API validation coverage: 100% (8/8 routes)
- [ ] Toast notifications implemented
- [ ] No alert() calls remaining
- [ ] All TypeScript errors resolved
- [ ] ESLint clean
- [ ] Build successful

---

## Future Sprint Plans

### Sprint 4 (Next Week)
- Resolve infrastructure (PostgreSQL/Redis)
- Complete T001 (Blog table)
- Complete T002 (Download files)
- Add T010 (Rate limiting) - with real Redis

### Sprint 5-6 (Weeks 3-4)
- T007: Real Stripe payment processing
- T008: User authentication
- T013: Unit tests (target 50% coverage)
- T014: E2E tests with Playwright

---

**Task List Updated:** 2026-02-14 07:56 GMT
**Ready for Phase 3:** ✅ Yes
**Sprint 3 Focus:** Complete validation coverage + toast notifications
