# PATTERNS.md — Approved Page Layouts

> **AI assembles pages from these patterns only**  
> Never invent new layouts. Use approved patterns, fill with content.

---

## Page Templates

### Default Template

**File**: `src/layouts/default.html`

Standard page layout for most pages.

```
┌────────────────────────────────────────────────┐
│                    Header                       │
├────────────────────────────────────────────────┤
│                                                 │
│                  Page Content                   │
│              (max-width: 1280px)                │
│                                                 │
├────────────────────────────────────────────────┤
│                    Footer                       │
└────────────────────────────────────────────────┘
```

**Structure**:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{Page Title} | TecShipCorp</title>
  <meta name="description" content="{Page description}">
  
  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;500;700&display=swap" rel="stylesheet">
  
  <!-- Styles -->
  <link rel="stylesheet" href="/src/css/main.css">
</head>
<body>
  <!-- HEADER (copy from components/organisms/header.html) -->
  <header class="header">...</header>
  
  <main id="main-content">
    <!-- PAGE CONTENT -->
  </main>
  
  <!-- FOOTER (copy from components/organisms/footer.html) -->
  <footer class="footer">...</footer>
  
  <!-- Optional JS -->
  <script src="/src/js/main.js" defer></script>
</body>
</html>
```

**Use for**: About, Services, Contact, generic pages

---

### Landing Template

**File**: `src/layouts/landing.html`

Full-width hero sections, marketing-focused.

```
┌────────────────────────────────────────────────┐
│                    Header                       │
├────────────────────────────────────────────────┤
│                                                 │
│              Hero Section (100vw)               │
│                                                 │
├────────────────────────────────────────────────┤
│                                                 │
│            Content Sections (100vw)             │
│         (content constrained inside)            │
│                                                 │
├────────────────────────────────────────────────┤
│                    Footer                       │
└────────────────────────────────────────────────┘
```

**Use for**: Homepage, landing pages

---

### Blog List Template

**File**: `src/layouts/blog-list.html`

Blog listing with optional sidebar.

```
┌────────────────────────────────────────────────┐
│                    Header                       │
├────────────────────────────────────────────────┤
│              Page Title Section                 │
├────────────────────────────────────────────────┤
│                                                 │
│   ┌─────────────────────┬──────────────────┐   │
│   │                     │                  │   │
│   │    Blog Grid        │    Sidebar       │   │
│   │    (main: 2/3)      │    (aside: 1/3)  │   │
│   │                     │                  │   │
│   └─────────────────────┴──────────────────┘   │
│                                                 │
├────────────────────────────────────────────────┤
│                    Footer                       │
└────────────────────────────────────────────────┘
```

**Sidebar contains**: Categories, recent posts, search

---

### Blog Post Template

**File**: `src/layouts/blog-post.html`

Single blog post with optimal reading width.

```
┌────────────────────────────────────────────────┐
│                    Header                       │
├────────────────────────────────────────────────┤
│                                                 │
│              Article Header                     │
│           (title, meta, image)                  │
│                                                 │
├────────────────────────────────────────────────┤
│                                                 │
│              Article Content                    │
│            (max-width: 720px)                   │
│              centered                           │
│                                                 │
├────────────────────────────────────────────────┤
│              Author Bio                         │
├────────────────────────────────────────────────┤
│              Related Posts                      │
├────────────────────────────────────────────────┤
│                    Footer                       │
└────────────────────────────────────────────────┘
```

---

## Section Patterns

### Hero Section

**File**: `src/components/sections/hero/`

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│                      [Optional Image]                   │
│                                                         │
│   ┌───────────────────────────────────────────────┐     │
│   │              Headline (H1)                    │     │
│   │              Subheadline (p)                  │     │
│   │                                               │     │
│   │   [Primary CTA]    [Secondary CTA]            │     │
│   └───────────────────────────────────────────────┘     │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Spacing**: 
- Padding: `--space-20` (80px) top/bottom on desktop
- Padding: `--space-12` (48px) on mobile

---

### Features Grid Section

**File**: `src/components/sections/features-grid/`

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│              Section Title (H2)                         │
│              Section Subtitle (p)                       │
│                                                         │
│   ┌─────────┐   ┌─────────┐   ┌─────────┐              │
│   │  Icon   │   │  Icon   │   │  Icon   │              │
│   │  Title  │   │  Title  │   │  Title  │              │
│   │  Desc   │   │  Desc   │   │  Desc   │              │
│   └─────────┘   └─────────┘   └─────────┘              │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Grid**: 
- Desktop: 3 columns
- Tablet: 2 columns
- Mobile: 1 column
- Gap: `--space-8`

---

### CTA Section

**File**: `src/components/sections/cta/`

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│   ┌───────────────────────────────────────────────┐     │
│   │              Headline (H2)                    │     │
│   │              Supporting text (p)              │     │
│   │                                               │     │
│   │              [Primary CTA Button]             │     │
│   └───────────────────────────────────────────────┘     │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Background**: `--bg-secondary` or brand color

---

### Contact Section

**File**: `src/components/sections/contact/`

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│              Section Title (H2)                         │
│                                                         │
│   ┌─────────────────────┬──────────────────────┐       │
│   │                     │                      │       │
│   │    Contact Form     │    Contact Info      │       │
│   │                     │    - Address         │       │
│   │                     │    - Phone           │       │
│   │                     │    - Email           │       │
│   │                     │    - Hours           │       │
│   │                     │                      │       │
│   └─────────────────────┴──────────────────────┘       │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Layout**:
- Desktop: 2 columns (60/40)
- Mobile: Stacked (form first)

---

### Testimonials Section

**File**: `src/components/sections/testimonials/`

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│              Section Title (H2)                         │
│                                                         │
│   ┌─────────────────────────────────────────────┐       │
│   │  "Quote text here..."                       │       │
│   │                                             │       │
│   │  [Photo]  Name                              │       │
│   │           Title, Company                    │       │
│   └─────────────────────────────────────────────┘       │
│                                                         │
│              [ • ] [ • ] [ • ]   (pagination)           │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## Container Widths

| Context | Max Width | CSS Class |
|---------|-----------|-----------|
| Full page content | 1280px | `.container` |
| Narrow content | 720px | `.container--narrow` |
| Wide sections | 1536px | `.container--wide` |

**Container CSS**:
```css
.container {
  width: 100%;
  max-width: var(--container-xl);
  margin-inline: auto;
  padding-inline: var(--space-4);
}

@media (min-width: 768px) {
  .container {
    padding-inline: var(--space-6);
  }
}

@media (min-width: 1024px) {
  .container {
    padding-inline: var(--space-8);
  }
}
```

---

## Section Spacing

Standard vertical rhythm between sections:

| Viewport | Spacing |
|----------|---------|
| Mobile | `--space-12` (48px) |
| Tablet | `--space-16` (64px) |
| Desktop | `--space-20` (80px) |

**CSS**:
```css
.section {
  padding-block: var(--space-12);
}

@media (min-width: 768px) {
  .section {
    padding-block: var(--space-16);
  }
}

@media (min-width: 1024px) {
  .section {
    padding-block: var(--space-20);
  }
}
```

---

## Page Assembly Rules

1. **Every page uses a template** — No custom layouts
2. **Templates include header and footer** — Never duplicate
3. **Sections use approved patterns** — No custom section layouts
4. **Content fills slots** — Templates define structure, pages define content
5. **Responsive is built-in** — Patterns handle breakpoints

---

## Approved Page Structures

### Homepage

```
Template: landing.html
Sections:
  1. Hero (hero)
  2. Features (features-grid)
  3. About intro (content-with-image)
  4. Services overview (features-grid)
  5. Testimonials (testimonials)
  6. CTA (cta)
```

### About Page

```
Template: default.html
Sections:
  1. Page header (page-header)
  2. Story (content-with-image)
  3. Team (team-grid) — optional
  4. Values (features-grid) — optional
  5. CTA (cta)
```

### Contact Page

```
Template: default.html
Sections:
  1. Page header (page-header)
  2. Contact (contact-section)
  3. Map — optional
```

### Services Page

```
Template: default.html
Sections:
  1. Page header (page-header)
  2. Services list (services-grid)
  3. CTA (cta)
```
