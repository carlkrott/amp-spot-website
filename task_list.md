# WEBSITE DEVELOPMENT - PHASE 2: TASK LIST
**Date:** 2026-02-14 00:58 GMT
**Priority Order:** P0 (Critical) → P1 (High) → P2 (Medium) → P3 (Low)

---

## 🔴 P0 - CRITICAL (Must Fix Before Production Build)

### [P0-1] Fix Unescaped Entities (6 errors)
**Files Affected:**
- `src/app/blog/page.tsx` (line 93)
- `src/app/contact/page.tsx` (line 18)
- `src/app/page.tsx` (lines 52, 80, 87 x 2)

**Issues:**
- Unescaped apostrophes in JSX text

**Action:**
1. Replace unescaped apostrophes with `&apos;` or `&rsquo;`
2. Run `pnpm lint:fix` where possible

---

## 🟡 P1 - HIGH (Quality Improvements)

### [P1-1] Remove Unused ESLint Directives (2 warnings)
**Files Affected:**
- `coverage/block-navigation.js`
- `src/components/AnimatedMeterBridge.tsx`

**Action:**
1. Remove unused `eslint-disable` comments
2. Verify warnings no longer apply

---

## 🟢 P2 - MEDIUM (Verification)

### [P2-1] Verify SEO Files
**Files to Check:**
- `src/app/sitemap.ts` (should exist)
- `public/robots.txt` (should exist)

**Action:**
1. Verify sitemap.ts generates correct URLs
2. Verify robots.txt references sitemap
3. Test sitemap endpoint: `curl http://localhost:3000/sitemap.xml`

---

### [P2-2] Verify Meta Tags on All Pages
**Action:**
1. Check dynamic metadata generation matches SEO specs
2. Verify OpenGraph images exist
3. Check description length (~160 chars)

---

## 🔵 P3 - LOW (Future Enhancements)

### [P3-1] Add OG Images
**Action:**
1. Create 5 PNG images (1200x630px)
2. Save to `/public/images/og/`
   - home.png
   - eq.png
   - compressor.png
   - analyzer.png
   - ms-processor.png

---

### [P3-2] Add Test Coverage
**Action:**
1. Check current test coverage with `pnpm test:coverage`
2. Add tests for critical components
3. Target: >70% coverage

---

### [P3-3] Check Bundle Size
**Action:**
1. Run `pnpm build` and measure bundle size
2. Ensure <500KB initial JS bundle
3. Identify any large dependencies to optimize

---

## 📋 Task Summary

| Priority | Count | Estimated Time |
|----------|-------|----------------|
| P0 (Critical) | 1 | 10 min |
| P1 (High) | 1 | 5 min |
| P2 (Medium) | 2 | 15 min |
| P3 (Low) | 3 | 90 min |
| **Total** | **7** | **~2 hours** |

---

**Current Sprint Focus:** P0 tasks only (critical fixes before build)

**Next Phase:** PHASE 3: EDIT (Execute P0 tasks)
