# DO-NOT.md — Explicit Ban List

> **HIGHEST-ROI FILE — Most overlooked, most critical**  
> AI must check this file before outputting any code. Violations = immediate rejection.

---

## ❌ NEVER DO THESE

### Styling

| Ban | Why | Instead |
|-----|-----|---------|
| Inline styles | Unmaintainable, overrides cascade | Use component CSS classes |
| `!important` | Breaks cascade, debugging nightmare | Fix specificity properly |
| Hardcoded hex colors | Breaks consistency, dark mode | Use `var(--token)` |
| Hardcoded pixel values | Inconsistent spacing | Use `var(--space-n)` |
| New utility classes | Bloats CSS, inconsistent | Use component classes |
| `px` for font sizes | Accessibility issues | Use `rem` |

**Examples of BANNED code:**

```css
/* ❌ BANNED */
.card {
  color: #212529;                    /* hardcoded hex */
  padding: 24px;                     /* hardcoded px */
  margin-bottom: 15px !important;    /* !important + odd value */
}

/* ✓ CORRECT */
.card {
  color: var(--text-primary);
  padding: var(--space-6);
  margin-bottom: var(--space-4);
}
```

```html
<!-- ❌ BANNED -->
<div style="color: red; padding: 20px;">

<!-- ✓ CORRECT -->
<div class="alert alert--error">
```

---

### Components

| Ban | Why | Instead |
|-----|-----|---------|
| New components without approval | Scope creep, inconsistency | Request in spec first |
| Modifying existing component HTML | Breaks other usages | Create variant in spec |
| Cross-component CSS | Tight coupling, fragile | Component owns its styles |
| Layout logic in components | Mixing concerns | Layout in sections/templates |

**Examples of BANNED patterns:**

```css
/* ❌ BANNED - component reaching into another */
.header .btn {
  padding: var(--space-2);
}

/* ✓ CORRECT - header owns its button variant */
.header__cta {
  /* header-specific button styles */
}
```

---

### JavaScript

| Ban | Why | Instead |
|-----|-----|---------|
| JS without spec file | Uncontrolled additions | Create component.js in spec first |
| External dependencies | Bundle bloat | Vanilla JS only |
| Layout manipulation in JS | CSS should handle layout | Use CSS + classes |
| Inline event handlers | XSS risk, unmaintainable | `addEventListener` |

**Examples of BANNED code:**

```html
<!-- ❌ BANNED -->
<button onclick="handleClick()">

<!-- ✓ CORRECT -->
<button class="btn" data-action="submit">
```

```javascript
// ❌ BANNED
import { someLibrary } from 'npm-package';
element.style.display = 'flex';

// ✓ CORRECT
element.classList.add('is-visible');
```

---

### Accessibility

| Ban | Why | Instead |
|-----|-----|---------|
| Removing focus outlines | Keyboard users can't navigate | Style `:focus-visible` |
| Icon-only buttons without label | Screen readers can't read | Add `aria-label` |
| Color-only error indication | Color blind users | Add icon + text |
| `tabindex` > 0 | Breaks natural tab order | Use semantic HTML |
| Missing form labels | WCAG violation | Always pair label + input |

**Examples of BANNED code:**

```css
/* ❌ BANNED */
*:focus {
  outline: none;
}

/* ✓ CORRECT */
*:focus-visible {
  outline: 2px solid var(--border-focus);
  outline-offset: 2px;
}
```

```html
<!-- ❌ BANNED -->
<button>
  <svg><!-- icon --></svg>
</button>

<!-- ✓ CORRECT -->
<button aria-label="Close menu">
  <svg aria-hidden="true"><!-- icon --></svg>
</button>
```

---

### HTML/Markup

| Ban | Why | Instead |
|-----|-----|---------|
| `<div>` for buttons/links | Accessibility, semantics | Use `<button>` or `<a>` |
| Missing `alt` on images | WCAG violation | Always provide alt |
| Skipping heading levels | Screen reader confusion | H1 → H2 → H3 in order |
| Multiple H1s per page | SEO, accessibility | One H1 per page |
| `target="_blank"` without rel | Security risk | Add `rel="noopener noreferrer"` |

---

### File Structure

| Ban | Why | Instead |
|-----|-----|---------|
| Styles in HTML files | Separation of concerns | External CSS files |
| Multiple components per file | Hard to find, maintain | One component per file |
| Deep nesting (>3 levels) | Complexity | Flatten structure |
| Arbitrary file names | Inconsistency | Follow naming conventions |

---

### Process

| Ban | Why | Instead |
|-----|-----|---------|
| Multiple components in one task | Review burden, scope creep | One component per task |
| Skipping mobile styles | Mobile majority | Mobile-first always |
| Hardcoded content in components | Inflexibility | Use slots/props |
| Committing without review | Quality control | Review, then lock |

---

## Specificity Rules

Maximum specificity allowed:

```css
/* ✓ ALLOWED - one class */
.btn { }

/* ✓ ALLOWED - BEM element */
.btn__icon { }

/* ✓ ALLOWED - modifier */
.btn--primary { }

/* ✓ ALLOWED - state */
.btn.is-loading { }

/* ⚠️ CAUTION - two classes */
.header .btn { }

/* ❌ BANNED - three+ levels */
.header .nav .btn { }

/* ❌ BANNED - ID selectors */
#main-button { }

/* ❌ BANNED - element + class */
button.btn { }
```

---

## Spacing Rules

Only these values are allowed:

| Allowed | Value |
|---------|-------|
| `--space-0` | 0 |
| `--space-1` | 4px |
| `--space-2` | 8px |
| `--space-3` | 12px |
| `--space-4` | 16px |
| `--space-5` | 20px |
| `--space-6` | 24px |
| `--space-8` | 32px |
| `--space-10` | 40px |
| `--space-12` | 48px |
| `--space-16` | 64px |
| `--space-20` | 80px |
| `--space-24` | 96px |

**BANNED**: `15px`, `18px`, `25px`, `30px`, `50px`, or any value not in scale.

---

## Quick Checklist Before Submitting Code

Before AI outputs any code, verify:

- [ ] No inline styles
- [ ] No `!important`
- [ ] No hardcoded colors (all use `var(--...)`)
- [ ] No hardcoded spacing (all use `var(--space-...)`)
- [ ] No new components (unless explicitly approved)
- [ ] No JavaScript without spec file
- [ ] All interactive elements have focus states
- [ ] All images have alt text
- [ ] All buttons/links use semantic elements
- [ ] All external links have `rel="noopener noreferrer"`
- [ ] Mobile styles are base (no media query)
- [ ] Specificity is flat (one class max)

---

## Violation Response

If AI produces code violating this file:

1. **Immediate rejection** — Do not use the code
2. **Point to specific violation** — Reference this file
3. **Request correction** — AI rewrites without violation
4. **No exceptions** — These rules are absolute

---

## Why This Matters

| Rule | Business Impact |
|------|-----------------|
| Token-only colors | Rebrand takes hours, not weeks |
| No inline styles | Consistent updates across site |
| Semantic HTML | Legal compliance (ADA/WCAG) |
| Flat specificity | Maintainable by any developer |
| One component/task | Reliable reviews, fewer bugs |
