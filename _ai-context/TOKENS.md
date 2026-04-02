# TOKENS.md — Design Token Reference

> **AI uses this file for all style values**  
> Never hardcode hex colors, pixel values, or font names. Always reference tokens.

---

## How to Use This File

When writing CSS, reference the token name:
```css
/* ✓ Correct */
.component {
  color: var(--text-primary);
  padding: var(--space-4);
  font-size: var(--text-base);
}

/* ✗ Wrong */
.component {
  color: #212529;
  padding: 16px;
  font-size: 16px;
}
```

---

## Color Tokens

### Primitives (DO NOT use directly in components)

These exist only to define semantic tokens. Reference semantic tokens instead.

| Token | Value | Visual |
|-------|-------|--------|
| `--color-white` | `#FFFFFF` | White |
| `--color-gray-50` | `#F8F9FA` | Near white |
| `--color-gray-100` | `#F1F3F5` | Very light gray |
| `--color-gray-200` | `#E9ECEF` | Light gray |
| `--color-gray-300` | `#DEE2E6` | Gray |
| `--color-gray-400` | `#CED4DA` | Medium gray |
| `--color-gray-500` | `#ADB5BD` | Gray |
| `--color-gray-600` | `#6C757D` | Dark gray |
| `--color-gray-700` | `#495057` | Darker gray |
| `--color-gray-800` | `#343A40` | Very dark gray |
| `--color-gray-900` | `#212529` | Near black |
| `--color-black` | `#000000` | Black |

#### Brand Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--color-brand-primary` | `#153E68` | Primary brand (navy blue) |
| `--color-brand-primary-light` | `#1E5490` | Lighter variant (hover backgrounds) |
| `--color-brand-primary-dark` | `#0E2A47` | Darker variant (hover states) |

#### Feedback Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--color-success` | `#22C55E` | Success states |
| `--color-success-light` | `#DCFCE7` | Success backgrounds |
| `--color-warning` | `#F59E0B` | Warning states |
| `--color-warning-light` | `#FEF3C7` | Warning backgrounds |
| `--color-error` | `#EF4444` | Error states |
| `--color-error-light` | `#FEE2E2` | Error backgrounds |
| `--color-info` | `#3B82F6` | Info states |
| `--color-info-light` | `#DBEAFE` | Info backgrounds |

---

### Semantic Tokens (USE THESE in components)

#### Text

| Token | Maps To | Usage |
|-------|---------|-------|
| `--text-primary` | `--color-gray-900` | Body text, headings |
| `--text-secondary` | `--color-gray-700` | Secondary content |
| `--text-muted` | `--color-gray-600` | Captions, hints |
| `--text-disabled` | `--color-gray-400` | Disabled text |
| `--text-inverse` | `--color-white` | Text on dark backgrounds |
| `--text-link` | `--color-brand-primary` | Link text |
| `--text-link-hover` | `--color-brand-primary-dark` | Link hover |

#### Backgrounds

| Token | Maps To | Usage |
|-------|---------|-------|
| `--bg-primary` | `--color-white` | Page background |
| `--bg-secondary` | `--color-gray-50` | Alternate sections |
| `--bg-tertiary` | `--color-gray-100` | Cards, inputs |
| `--bg-inverse` | `--color-gray-900` | Dark sections |

#### Borders

| Token | Maps To | Usage |
|-------|---------|-------|
| `--border-default` | `--color-gray-300` | Default borders |
| `--border-light` | `--color-gray-200` | Subtle borders |
| `--border-focus` | `--color-brand-primary` | Focus rings |
| `--border-error` | `--color-error` | Error borders |

#### Interactive

| Token | Maps To | Usage |
|-------|---------|-------|
| `--interactive-primary` | `--color-brand-primary` | Primary buttons |
| `--interactive-primary-hover` | `--color-brand-primary-dark` | Hover state |
| `--interactive-disabled` | `--color-gray-300` | Disabled state |

---

## Spacing Tokens

Base unit: 4px. All spacing uses these tokens.

| Token | Value | Px | Usage |
|-------|-------|-----|-------|
| `--space-0` | `0` | 0 | Reset |
| `--space-px` | `1px` | 1 | Hairline |
| `--space-0-5` | `0.125rem` | 2 | Micro |
| `--space-1` | `0.25rem` | 4 | Tight |
| `--space-2` | `0.5rem` | 8 | Compact |
| `--space-3` | `0.75rem` | 12 | Small |
| `--space-4` | `1rem` | 16 | Default |
| `--space-5` | `1.25rem` | 20 | Medium |
| `--space-6` | `1.5rem` | 24 | Comfortable |
| `--space-8` | `2rem` | 32 | Large |
| `--space-10` | `2.5rem` | 40 | XL |
| `--space-12` | `3rem` | 48 | 2XL |
| `--space-16` | `4rem` | 64 | 3XL |
| `--space-20` | `5rem` | 80 | Section |
| `--space-24` | `6rem` | 96 | Large section |

---

## Typography Tokens

### Font Families

| Token | Value |
|-------|-------|
| `--font-heading` | `'Lato', system-ui, sans-serif` |
| `--font-body` | `'Lato', system-ui, sans-serif` |
| `--font-mono` | `monospace` |

### Font Sizes

| Token | Value | Px |
|-------|-------|-----|
| `--text-xs` | `0.75rem` | 12 |
| `--text-sm` | `0.875rem` | 14 |
| `--text-base` | `1rem` | 16 |
| `--text-lg` | `1.125rem` | 18 |
| `--text-xl` | `1.25rem` | 20 |
| `--text-2xl` | `1.5rem` | 24 |
| `--text-3xl` | `1.875rem` | 30 |
| `--text-4xl` | `2.25rem` | 36 |
| `--text-5xl` | `3rem` | 48 |
| `--text-6xl` | `3.75rem` | 60 |

### Font Weights

| Token | Value |
|-------|-------|
| `--font-regular` | `400` |
| `--font-medium` | `500` |
| `--font-semibold` | `600` |
| `--font-bold` | `700` |

### Line Heights

| Token | Value |
|-------|-------|
| `--leading-none` | `1` |
| `--leading-tight` | `1.25` |
| `--leading-snug` | `1.375` |
| `--leading-normal` | `1.5` |
| `--leading-relaxed` | `1.625` |

---

## Layout Tokens

### Container Widths

| Token | Value |
|-------|-------|
| `--container-sm` | `640px` |
| `--container-md` | `768px` |
| `--container-lg` | `1024px` |
| `--container-xl` | `1280px` |

### Border Radius

| Token | Value |
|-------|-------|
| `--radius-sm` | `4px` |
| `--radius-md` | `8px` |
| `--radius-lg` | `12px` |
| `--radius-xl` | `16px` |
| `--radius-full` | `9999px` |

---

## Shadow Tokens

| Token | Value |
|-------|-------|
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)` |
| `--shadow-md` | `0 4px 6px rgba(0,0,0,0.1)` |
| `--shadow-lg` | `0 10px 15px rgba(0,0,0,0.1)` |
| `--shadow-focus` | `0 0 0 3px rgba(21, 62, 104, 0.3)` |

---

## Transition Tokens

| Token | Value |
|-------|-------|
| `--duration-fast` | `100ms` |
| `--duration-normal` | `200ms` |
| `--duration-slow` | `300ms` |
| `--ease-out` | `cubic-bezier(0, 0, 0.2, 1)` |
| `--ease-in-out` | `cubic-bezier(0.4, 0, 0.2, 1)` |

---

## Breakpoint Tokens

| Token | Value | Media Query |
|-------|-------|-------------|
| `--breakpoint-sm` | `640px` | `@media (min-width: 640px)` |
| `--breakpoint-md` | `768px` | `@media (min-width: 768px)` |
| `--breakpoint-lg` | `1024px` | `@media (min-width: 1024px)` |
| `--breakpoint-xl` | `1280px` | `@media (min-width: 1280px)` |

---

## Z-Index Scale

| Token | Value | Usage |
|-------|-------|-------|
| `--z-dropdown` | `100` | Dropdowns |
| `--z-sticky` | `200` | Sticky header |
| `--z-modal-backdrop` | `300` | Modal overlay |
| `--z-modal` | `400` | Modal content |
| `--z-tooltip` | `500` | Tooltips |
