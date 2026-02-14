# WEBSITE DEVELOPMENT - TASK LIST
**Date:** 2026-02-14 13:30 GMT
**Cron Job:** [7995x] Website Dev - 8-Phase Workflow
**Phase:** 2 - PLAN

---

## 📊 CURRENT STATE SUMMARY

**Status:** ✅ PRODUCTION READY
- Lint errors: 0
- TypeScript errors: 0
- Test passing: 13/13 (100%)
- Security vulnerabilities: 0
- Build status: SUCCESS (last build 2026-02-14 09:44 GMT)

**Git Status:**
- Branch: main
- Status: Clean (no uncommitted changes)
- Up to date with origin/main

---

## 🎯 TASK PRIORITIES

### 🔴 P2 - MEDIUM PRIORITY (Quality & Maintenance)

#### [P2-1] Migrate from @vercel/postgres
**Impact:** Package deprecated - needs migration
**Current:** @vercel/postgres 0.10.0
**Target:** Migrate to `postgres` or `pg` package
**Time:** ~1-2 hours
**Action Items:**
- [ ] Update package.json: Remove @vercel/postgres, add `postgres`
- [ ] Update database connection code in API routes
- [ ] Test API endpoints: /api/plugins/[slug], /api/plugins/[slug]/download
- [ ] Verify database queries work correctly
- [ ] Run tests to ensure no regressions
**Risk:** MEDIUM - Requires code changes and testing

---

#### [P2-2] Update React to 19.2.4
**Impact:** Patch update (bug fixes, security)
**Current:** React 19.2.3
**Target:** React 19.2.4
**Time:** ~15 minutes
**Action Items:**
- [ ] Run: `pnpm update react@latest react-dom@latest`
- [ ] Run type-check: `pnpm type-check`
- [ ] Run tests: `pnpm test:run`
- [ ] Run build: `pnpm build`
- [ ] Verify application works correctly
**Risk:** LOW - Patch update, minimal breaking changes

---

#### [P2-3] Update @types/node to 25
**Impact:** Dev dependency update
**Current:** @types/node 20.19.33
**Target:** @types/node 25.2.3
**Time:** ~5 minutes
**Action Items:**
- [ ] Run: `pnpm update @types/node@latest -D`
- [ ] Run type-check: `pnpm type-check`
- [ ] Verify no type errors
**Risk:** LOW - Dev dependency only, no runtime impact

---

#### [P2-4] Update ESLint to 10
**Impact:** Dev dependency update (major version)
**Current:** ESLint 9.39.2
**Target:** ESLint 10.0.0
**Time:** ~30 minutes
**Action Items:**
- [ ] Run: `pnpm update eslint@latest -D`
- [ ] Check for breaking changes in ESLint 10
- [ ] Update eslint.config.mjs if needed
- [ ] Run: `pnpm lint`
- [ ] Fix any new lint warnings/errors
- [ ] Run: `pnpm type-check`
**Risk:** MEDIUM - Major version may introduce breaking changes

---

### 🔵 P3 - LOW PRIORITY (Future Enhancements)

#### [P3-1] Add Test Coverage Metrics
**Impact:** Improve test coverage visibility
**Current:** 13 tests, coverage unknown
**Target:** >70% test coverage
**Time:** ~2-3 hours
**Action Items:**
- [ ] Configure Vitest coverage reporter
- [ ] Run: `pnpm test:coverage`
- [ ] Analyze coverage report
- [ ] Identify uncovered code paths
- [ ] Add tests for critical uncovered paths
**Risk:** LOW - Enhancement only

---

#### [P3-2] Add Integration Tests
**Impact:** Better API endpoint testing
**Current:** Unit tests only
**Target:** Add integration tests for API routes
**Time:** ~2-4 hours
**Action Items:**
- [ ] Set up test database environment
- [ ] Create integration tests for /api/plugins
- [ ] Create integration tests for /api/plugins/[slug]/download
- [ ] Test error handling and edge cases
**Risk:** LOW - Enhancement only

---

#### [P3-3] Add E2E Tests with Playwright
**Impact:** End-to-end user flow testing
**Current:** No E2E tests
**Target:** Add basic E2E test suite
**Time:** ~4-6 hours
**Action Items:**
- [ ] Install Playwright: `pnpm add -D @playwright/test`
- [ ] Configure Playwright config
- [ ] Create E2E test for main user flows:
  - [ ] Home page loads correctly
  - [ ] Navigate to plugins page
  - [ ] Download plugin
  - [ ] Navigate to blog
  - [ ] Contact form submission
- [ ] Configure Playwright CI integration
**Risk:** LOW - Enhancement only

---

#### [P3-4] Configure Lighthouse CI
**Impact:** Automated performance monitoring
**Current:** Manual Lighthouse runs
**Target:** Automated Lighthouse CI in build pipeline
**Time:** ~2-3 hours
**Action Items:**
- [ ] Install Lighthouse CI: `npm install -g @lhci/cli`
- [ ] Configure lhci.yml
- [ ] Set up GitHub Actions or Vercel integration
- [ ] Configure performance budgets:
  - Performance: >90
  - Accessibility: 100
  - Best Practices: >90
  - SEO: 100
- [ ] Run baseline Lighthouse audit
**Risk:** LOW - Enhancement only

---

#### [P3-5] Add Visual Regression Testing
**Impact:** Catch UI visual changes
**Current:** No visual regression tests
**Target:** Add visual regression test suite
**Time:** ~3-4 hours
**Action Items:**
- [ ] Set up Playwright/Percy or Chromatic
- [ ] Capture baseline screenshots for all pages
- [ ] Configure CI to run visual regression tests
- [ ] Set up approval workflow for changes
**Risk:** LOW - Enhancement only

---

#### [P3-6] Improve Bundle Size Optimization
**Impact:** Better performance, faster load times
**Current:** Bundle size ~15MB
**Target:** <10MB bundle size
**Time:** ~2-3 hours
**Action Items:**
- [ ] Analyze bundle size: `pnpm analyze` (if configured)
- [ ] Identify largest dependencies
- [ ] Tree-shake unused code
- [ ] Code splitting for large routes
- [ ] Optimize images in public/
- [ ] Lazy load non-critical components
**Risk:** LOW - Enhancement only

---

## 📋 SPRINT PLAN

### Current Sprint (Feb 14, 2026)

**Focus:** Maintenance & Updates
**Goal:** Keep dependencies current, prepare for future enhancements

**Tasks to Complete This Sprint:**
- [P2-1] Migrate from @vercel/postgres (MEDIUM priority)
- [P2-2] Update React to 19.2.4 (LOW risk)
- [P2-3] Update @types/node to 25 (LOW risk)
- [P2-4] Update ESLint to 10 (MEDIUM risk, may defer to next sprint)

**Estimated Time:** 2-3 hours

**Tasks to Defer to Next Sprint:**
- All P3 tasks (enhancements only)
- ESLint 10 update (if breaking changes found)

---

## 🚀 RATIONALE

### Why Focus on P2 Tasks Now?

1. **@vercel/postgres deprecated:** Migration needed to avoid future breakage
2. **React 19.2.4:** Patch updates typically include bug fixes and security patches
3. **@types/node update:** Keep type definitions current
4. **ESLint 10:** Major version update, but may defer if significant changes

### Why Defer P3 Tasks?

1. **Enhancements only:** No immediate impact on functionality or security
2. **Time budget:** Cron job has limited time (2-3 hours)
3. **Current state excellent:** All tests passing, no critical issues
4. **Incremental approach:** Add features gradually as time permits

---

## 🔄 CONTINGENCY PLAN

### If P2-1 (@vercel/postgres migration) Fails:

**Fallback Options:**
1. **Option A:** Postpone migration to next sprint (if time runs out)
2. **Option B:** Test migration on separate branch, merge if successful
3. **Option C:** Keep @vercel/postgres for now, monitor for deprecation notices

### If ESLint 10 Breaking Changes Are Found:

**Options:**
1. **Option A:** Defer ESLint update to next sprint
2. **Option B:** Fix breaking changes (adds time, may exceed budget)
3. **Option C:** Pin to ESLint 9 for now, update when time permits

---

## 📊 SUCCESS CRITERIA

**Phase 3 Success:**
- [ ] At least 3 P2 tasks completed
- [ ] All tests still passing (13/13)
- [ ] No lint errors introduced
- [ ] No TypeScript errors introduced
- [ ] Build completes successfully
- [ ] CHANGELOG.md updated with changes

**Phase 4 Success:**
- [ ] Production build completes without errors
- [ ] Bundle size within acceptable range (<20MB)
- [ ] All pages generate correctly
- [ ] No runtime errors in build artifacts

**Phase 5 Success:**
- [ ] All 13 tests still passing
- [ ] No new test failures introduced
- [ ] Test duration remains under 5 seconds

**Phase 6 Success:**
- [ ] No security vulnerabilities
- [ ] Lint passes with 0 errors/warnings
- [ ] TypeScript type-check passes
- [ ] Bundle size analysis complete

---

## 📝 EXECUTION ORDER

### Phase 3: EDIT

**Order of Tasks:**
1. [P2-3] Update @types/node (5 min, LOW risk)
2. [P2-2] Update React (15 min, LOW risk)
3. [P2-4] Update ESLint (30 min, MEDIUM risk, may skip)
4. [P2-1] Migrate @vercel/postgres (1-2 hours, MEDIUM risk)

**Why This Order?**
- Quick wins first (builds confidence)
- Low-risk tasks before medium-risk
- Most disruptive task last (@vercel/postgres migration)

---

## 🎯 DECISION POINT

**Before Starting Phase 3:**

**Question:** Should we attempt all P2 tasks this sprint, or focus on only the low-risk ones?

**Option A:** Attempt all P2 tasks (2-3 hours)
- Pros: Get maintenance done, keep dependencies current
- Cons: May exceed time budget, risk of breaking changes

**Option B:** Focus on low-risk P2 tasks only (P2-2, P2-3) (~20 min)
- Pros: Quick wins, minimal risk, under time budget
- Cons: Leave @vercel/postgres migration for next sprint

**Recommendation:** **Option B** - Focus on low-risk tasks (P2-2, P2-3) this sprint. Defer @vercel/postgres migration (P2-1) and ESLint 10 (P2-4) to next sprint to stay within time budget and minimize risk.

---

**Task List Created:** 2026-02-14 13:30 GMT
**Next Phase:** 3 - EDIT
**Decision:** Proceed with Option B (low-risk P2 tasks only)
