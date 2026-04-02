# SYSTEM.md — AI Constitution

> **This file is mirrored in `.cursor/rules` which Cursor reads automatically.**  
> Use `@_ai-context/SYSTEM.md` to inject this file into any prompt.
> 
> This file defines what the site IS, how it's built, and the rules AI must follow.

---

## Project Overview

| Property | Value |
|----------|-------|
| Project Name | TecShipCorp |
| Type | Static marketing/business site |
| Migrating From | WordPress (Forminator forms) |
| Hosting | Cloudflare Pages |
| Domain | Managed by Cloudflare |

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Static Site Generator | None (Pure HTML) |
| Styling | Vanilla CSS with CSS Custom Properties |
| JavaScript | Vanilla JS, zero dependencies |
| Forms | Formspree |
| Build | None (static files, deploy directly) |

---

## Design System Foundation

### Typography

| Role | Font Family | Fallback |
|------|-------------|----------|
| Headings | Lato | system-ui, sans-serif |
| Body | Lato | system-ui, sans-serif |
| Monospace | monospace | monospace |

**Google Fonts Import:**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;500;700&display=swap" rel="stylesheet">
```

### Base Units

| Unit | Value | Usage |
|------|-------|-------|
| Spacing | 4px | All spacing uses multiples of 4 |
| Font Size Base | 16px | 1rem = 16px |
| Line Height | 1.5 | Default for body text |

### Breakpoints

| Name | Value | Target |
|------|-------|--------|
| `sm` | 640px | Large phones |
| `md` | 768px | Tablets |
| `lg` | 1024px | Laptops |
| `xl` | 1280px | Desktops |
| `2xl` | 1536px | Large screens |

**Approach**: Mobile-first. Write mobile styles as default, add `@media (min-width)` for larger screens.

### Colors

See `TOKENS.md` for full color system.

| Role | Token | Hex |
|------|-------|-----|
| Brand Primary | `--color-brand-primary` | #153E68 |
| Primary Text | `--text-primary` | #212529 |
| Secondary Text | `--text-secondary` | #495057 |
| Muted Text | `--text-muted` | #6C757D |
| Borders | `--border-default` | #DEE2E6 |
| Surfaces | `--bg-secondary` | #F8F9FA |
| Background | `--bg-primary` | #FFFFFF |

---

## Naming Conventions

### CSS Classes

| Convention | Example |
|------------|---------|
| Component | `.card`, `.button`, `.header` |
| Element (BEM) | `.card__title`, `.card__body` |
| Modifier (BEM) | `.card--featured`, `.button--primary` |
| State | `.is-active`, `.is-open`, `.is-loading` |

### Files

| Type | Pattern | Example |
|------|---------|---------|
| Component HTML | `{component}.html` | `button.html` |
| Component CSS | `{component}.css` | `button.css` |
| Component Spec | `{component}.md` | `button.md` |
| Component JS | `{component}.js` | `button.js` (optional) |

### CSS Custom Properties

| Type | Pattern | Example |
|------|---------|---------|
| Color primitive | `--color-{name}-{shade}` | `--color-gray-500` |
| Color semantic | `--{purpose}` | `--text-primary`, `--bg-secondary` |
| Spacing | `--space-{n}` | `--space-4` |
| Typography | `--text-{size}`, `--font-{weight}` | `--text-lg`, `--font-bold` |

---

## File Structure

```
project/
├── _ai-context/              # AI reads this first
│   ├── SYSTEM.md             # ← You are here
│   ├── TOKENS.md
│   ├── COMPONENTS.md
│   ├── PATTERNS.md
│   └── DO-NOT.md
│
├── src/
│   ├── css/
│   │   ├── tokens.css        # All CSS custom properties
│   │   ├── base.css          # Reset, global styles
│   │   ├── components/       # Component CSS files
│   │   │   ├── button.css
│   │   │   ├── input.css
│   │   │   ├── header.css
│   │   │   └── ...
│   │   └── main.css          # Imports all CSS
│   │
│   ├── js/                   # Optional vanilla JS
│   │   └── main.js
│   │
│   └── images/               # Site images
│
├── components/               # HTML snippets (reference only)
│   ├── atoms/
│   ├── molecules/
│   └── organisms/
│
├── index.html                # Homepage
├── about.html                # About page
├── services.html             # Services page
├── contact.html              # Contact page
└── 404.html                  # Error page
```

**Deployment**: Upload directly to Cloudflare Pages (no build step needed)

---

## Constraint Summary (One-Liners)

1. **Never hardcode colors** — Always use CSS custom properties from `TOKENS.md`
2. **Never invent components** — Use existing components from `COMPONENTS.md`
3. **Never add inline styles** — All styles go in component CSS files
4. **Never skip accessibility** — Every interactive element needs focus states and ARIA
5. **Never add JS without spec** — JS only for behavior, must have component.js file first
6. **Mobile-first always** — Base styles are mobile, breakpoints add complexity
7. **Compose, don't recreate** — Molecules use atoms, organisms use molecules
8. **One component per task** — Build, review, lock, then move up

---

## Build Order

This is the mandatory sequence for building the site:

```
1. SYSTEM.md (this file) ✓
2. tokens.css + base.css (foundation)
3. Atoms (button, input, label, icon, image, link, badge, divider)
4. Molecules (form-field, nav-link, social-link)
5. Organisms (header, footer, contact-form, cards)
6. Page shell (HTML boilerplate with header/footer)
7. Individual pages (homepage, about, services, contact)
```

**Pure HTML approach**: No templating engine. Copy header/footer HTML into each page.
For maintainability, keep component CSS separate and import via main.css.

---

## AI Task Protocol

When given a task, AI must:

1. **Read** `SYSTEM.md` (this file)
2. **Check** `COMPONENTS.md` for existing components to use
3. **Reference** `TOKENS.md` for all style values
4. **Follow** `PATTERNS.md` for page layouts
5. **Avoid** everything in `DO-NOT.md`
6. **Output** only the specific deliverable requested
7. **Never** bundle multiple components in one response

---

## Questions Before Building

> **Fill these in as you define requirements**

1. What is the site's primary goal? `_______________`
2. Who is the target audience? `_______________`
3. What are the 3-5 most important pages? `_______________`
4. What forms are needed and what do they submit? `_______________`
5. What content is being migrated from WordPress? `_______________`
6. Are there brand guidelines or existing design assets? `_______________`
