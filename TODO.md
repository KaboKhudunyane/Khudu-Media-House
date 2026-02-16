# Khudu Media House - Audit & Optimization TODO

## Audit Summary
Comprehensive project audit completed. Below is the prioritized list of fixes and improvements.

---

## Priority 1: CRITICAL FIXES

### 1.1 README.md Mismatch
- **Issue**: README describes "iPhone Reseller Website" but actual implementation is "Khudu Media House" portfolio
- **Fix**: Update README.md to accurately describe the media house portfolio website

### 1.2 Contact Form Not Functional
- **Issue**: ContactForm.jsx only logs to console, doesn't send data anywhere
- **Fix**: Add form submission endpoint integration (e.g., Formspree, EmailJS, or custom backend)

---

## Priority 2: HIGH PRIORITY FIXES

### 2.1 Unused Imports
- **Issue**: Multiple files have unused imports (React import in modern React, useState in Contact.jsx)
- **Files to fix**:
  - src/components/SEO.jsx (unused React import)
  - src/pages/Contact/Contact.jsx (unused useState import)
  - src/pages/LandingPage/LandingPage.jsx (unused React import)
  - src/components/Portfolio/Portfolio.jsx (unused useState - actually used, but need to verify)

### 2.2 Duplicate Images in Portfolio
- **Issue**: All 4 portfolio projects use the same image (SoftEscape.jpg)
- **Fix**: Use different images for each portfolio project

### 2.3 Duplicate Testimonials
- **Issue**: Testimonials.jsx has duplicate entries (Sibusiso M. and Lerato N. appear twice)
- **Fix**: Remove duplicate testimonials

---

## Priority 3: MEDIUM PRIORITY FIXES

### 3.1 Duplicate CSS in index.css
- **Issue**: font-family is declared twice in index.css
- **Fix**: Remove duplicate font-family declaration

### 3.2 index.html Redundant CSS Import
- **Issue**: index.html has `<link rel="stylesheet" href="/src/index.css" />` but main.jsx already imports it
- **Fix**: Remove redundant import from index.html

---

## Priority 4: OPTIMIZATIONS

### 4.1 Image Optimization
- Consider adding image optimization plugins
- Add proper OG:image for social sharing

### 4.2 PWA Enhancements
- Add more PWA icons
- Configure offline fallback page

### 4.3 Performance
- Already has good code splitting with lazy loading
- Consider adding more memoization where needed

---

## Implementation Status

- [ ] 1.1 Update README.md
- [ ] 1.2 Fix Contact Form
- [ ] 2.1 Fix unused imports
- [ ] 2.2 Fix duplicate portfolio images
- [ ] 2.3 Fix duplicate testimonials
- [ ] 3.1 Fix duplicate CSS in index.css
- [ ] 3.2 Remove redundant CSS import from index.html

---

## Notes
- Project structure is well-organized
- Good use of React best practices (lazy loading, ErrorBoundary)
- SEO is properly implemented with React Helmet
- Security is good (proper rel="noreferrer" on external links)
