# WEBSITE DEVELOPMENT - PHASE 2: TASK LIST
**Date:** 2026-02-13 23:30 GMT
**Priority Order:** P0 (Critical) → P1 (High) → P2 (Medium) → P3 (Low)

---

## 🔴 P0 - CRITICAL (Must Fix Before Build)

### [P0-1] Fix ESLint Errors
**File:** `src/app/about/page.tsx`
**Issues:**
- Line 32: Unescaped apostrophe
- Line 44: Unescaped quotes
- Line 58, 75, 87: Unescaped apostrophes

**Action:**
1. Replace unescaped quotes with `&quot;` or `&ldquo;`/`&rdquo;`
2. Replace unescaped apostrophes with `&apos;` or `&rsquo;` or `&#39;`

---

### [P0-2] Fix React Purity Warning
**File:** `src/app/blog/page.tsx`
**Issues:**
- Lines 25-26: `Math.random()` called during render (impure function)
- Causes unstable results when component re-renders

**Action:**
1. Move `Math.random()` to useMemo or outside render
2. Or use CSS animations instead of inline random styles

---

## 🟡 P1 - HIGH (Important for Quality)

### [P1-1] Add type-check Script
**File:** `package.json`
**Issue:** Missing `type-check` script for TypeScript validation

**Action:**
Add script to package.json:
```json
"type-check": "tsc --noEmit"
```

---

### [P1-2] Verify Meta Tags on Plugin Pages
**Files:** `src/app/plugins/[slug]/page.tsx`
**Action:**
1. Ensure dynamic metadata generation matches SEO specs
2. Verify OpenGraph images are present
3. Check description length (~160 chars)

---

### [P1-3] Add sitemap.xml Generation
**Action:**
1. Create `src/app/sitemap.ts` file
2. Generate sitemap with all pages and plugin URLs
3. Include lastModified dates

---

### [P1-4] Add robots.txt
**Action:**
1. Create `public/robots.txt` file
2. Allow all crawlers
3. Add sitemap reference

---

## 🟢 P2 - MEDIUM (Nice to Have)

### [P2-1] Add Test Coverage
**Action:**
1. Check current test coverage with `pnpm test:coverage`
2. Add tests for critical components (Header, PluginCard)
3. Target: >70% coverage

---

### [P2-2] Verify Environment Variables
**Action:**
1. Check all `.env.local` values are set
2. Add validation for required env vars
3. Document expected environment variables in README

---

### [P2-3] Check Bundle Size
**Action:**
1. Run `pnpm build` and measure bundle size
2. Ensure <500KB initial JS bundle
3. Identify any large dependencies to optimize

---

### [P2-4] Optimize Images
**Action:**
1. Check public/images for unoptimized assets
2. Use Next.js Image component for all images
3. Ensure WebP/AVIF formats used

---

## 🔵 P3 - LOW (Future Enhancements)

### [P3-1] Add Accessibility Improvements
**Action:**
1. Run axe-core linter
2. Fix any a11y issues
3. Add ARIA labels where needed

---

### [P3-2] Add Performance Monitoring
**Action:**
1. Set up Lighthouse CI
2. Add performance budget tracking
3. Monitor Core Web Vitals

---

### [P3-3] Add Error Boundaries
**Action:**
1. Create error boundary component
2. Wrap main layout sections
3. Add fallback UI

---

## 📋 Task Summary

| Priority | Count | Estimated Time |
|----------|-------|----------------|
| P0 (Critical) | 2 | 15 min |
| P1 (High) | 4 | 45 min |
| P2 (Medium) | 4 | 60 min |
| P3 (Low) | 3 | 90 min |
| **Total** | **13** | **~3.5 hours** |

---

**Current Sprint Focus:** P0 tasks only (critical fixes before build)

**Next Phase:** PHASE 3: EDIT (Execute P0 tasks)
