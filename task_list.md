# Website Development Task List
**Generated:** 2026-02-13 22:35 GMT
**Priority:** High → Low
**Total Tasks:** 20

---

## P0 - CRITICAL (Blockers for Build)

### 1. Fix Math.random() impure function errors (16 instances)
**Files:**
- `src/app/page.tsx` (3 instances - lines 49, 50, 200, 201)
- `src/app/blog/page.tsx` (2 instances - lines 25, 26)
- `src/app/pricing/page.tsx` (4 instances - lines 106, 107, 264, 265)
- `src/app/social/page.tsx` (4 instances - lines 129, 130, 329, 330)
- `src/app/youtube/page.tsx` (4 instances - lines 48, 49, 249, 250)

**Solution:** Move Math.random() to a useMemo hook with a seeded array, or use CSS animations instead

**Impact:** Blocks production build

---

### 2. Fix React Hook: updatePrices accessed before declaration
**File:** `src/app/pricing/page.tsx` (line 73)
**Error:** `updatePrices` is accessed before it is declared
**Solution:** Move `updatePrices` function before `useEffect`, or use useCallback
**Impact:** Runtime error in pricing page

---

### 3. Fix AnimatedMeterBridge Date.now() impure error
**File:** `src/components/AnimatedMeterBridge.tsx` (line 55)
**Error:** `Date.now()` is an impure function
**Solution:** Move Date.now() inside requestAnimationFrame callback (it's already there, just suppress warning)
**Impact:** Animation may not work correctly

---

## P1 - HIGH (Code Quality)

### 4. Fix unescaped entities (13 instances)
**Files:**
- `src/app/about/page.tsx` (6 instances - quotes in text)
- `src/app/blog/page.tsx` (1 instance - line 103)
- `src/app/contact/page.tsx` (1 instance - line 18)
- `src/app/page.tsx` (4 instances - lines 63, 91, 98)
- `src/app/pricing/page.tsx` (1 instance - line 120)
- `src/app/privacy/page.tsx` (6 instances - quotes)
- `src/app/social/page.tsx` (0 instances)
- `src/app/terms/page.tsx` (2 instances - line 91)
- `src/app/youtube/page.tsx` (2 instances - line 194)

**Solution:** Use `{`'`}` or HTML entities (`&apos;`, `&quot;`)
**Impact:** ESLint errors, possible XSS risk

---

### 5. Fix setState in effect warning
**File:** `src/components/CurrencySelector.tsx` (line 19)
**Warning:** Calling setState synchronously within an effect
**Solution:** Initialize state with derived value instead of setting in effect
**Impact:** Potential cascading renders, performance hit

---

### 6. Fix useEffect missing dependency
**File:** `src/components/AnimatedMeterBridge.tsx` (line 112)
**Warning:** Missing dependency: 'animate'
**Solution:** Either include animate in deps or use useCallback for animate
**Impact:** Potential stale closure bugs

---

## P2 - MEDIUM (Cleanup)

### 7. Remove unused import: Link
**File:** `src/app/youtube/page.tsx` (line 1)
**Issue:** 'Link' is defined but never used
**Solution:** Remove the import

---

### 8. Remove unused variable: delta
**File:** `src/components/AnimatedMeterBridge.tsx` (line 56)
**Issue:** 'delta' is assigned a value but never used
**Solution:** Remove the variable or implement its usage

---

### 9. Remove unused import: BlogPostPreview
**File:** `src/lib/blog.ts` (line 1)
**Issue:** 'BlogPostPreview' is defined but never used
**Solution:** Remove the import

---

## P3 - LOW (Enhancements)

### 10. Add missing .env file
**File:** Create `.env` from `.env.example`
**Status:** Only .env.example exists
**Solution:** Copy .env.example to .env with real values
**Impact:** Required for local development

---

### 11. Improve Next.js config
**File:** `next.config.ts`
**Current:** Empty config
**Suggestions:**
  - Image optimization settings
  - Compression enabled
  - SWC minification
  - Bundle analyzer (dev only)

---

### 12. Add more test coverage
**Current:** Only 1 test file (`plugins.test.ts`)
**Target:** Test components (Header, Footer, Hero, cards)
**Impact:** Improve code confidence

---

### 13. Add pre-commit hooks
**Tool:** husky + lint-staged
**Scripts:** Run lint, type-check, tests before commit
**Impact:** Prevent bad commits

---

### 14. Set up CI/CD pipeline
**Platform:** GitHub Actions or Vercel
**Stages:** lint, test, build, deploy
**Impact:** Automated quality checks

---

## P4 - FUTURE (Nice-to-have)

### 15. Add TypeScript strict mode
**File:** `tsconfig.json`
**Change:** `"strict": true`
**Impact:** Catch more bugs at compile time

---

### 16. Add bundle analyzer
**Package:** `@next/bundle-analyzer`
**Impact:** Identify bundle size issues

---

### 17. Add performance monitoring
**Tools:** Lighthouse CI, Web Vitals
**Impact:** Track performance over time

---

### 18. Add accessibility audit
**Tools:** axe-core, pa11y
**Impact:** Ensure WCAG compliance

---

### 19. Add visual regression testing
**Tools:** Percy, Chromatic
**Impact:** Catch UI regressions

---

### 20. Update README
**Current:** Generic Next.js README
**Target:** Custom Amp Spot README with:
  - Local setup instructions
  - Environment variables guide
  - Deployment guide
  - Contributing guidelines
**Impact:** Better developer experience

---

## Summary

| Priority | Tasks | Status |
|----------|-------|--------|
| P0 | 3 | 🔴 Blocker |
| P1 | 3 | 🟠 High |
| P2 | 3 | 🟡 Medium |
| P3 | 4 | 🟢 Low |
| P4 | 4 | 🔵 Future |

**Immediate Focus:** P0 + P1 (6 tasks)
**Estimated Time:** 2-3 hours for P0+P1

---

## Execution Order

1. Task 1 (Math.random errors) - Most critical, affects 5 pages
2. Task 2 (updatePrices) - Runtime error
3. Task 3 (Date.now) - Animation bug
4. Task 4 (unescaped entities) - Code quality
5. Task 5 (setState in effect) - Performance
6. Task 6 (useEffect dependency) - Potential bug

Then proceed to P2-P4 as time permits.
