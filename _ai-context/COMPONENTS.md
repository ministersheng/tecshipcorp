# COMPONENTS.md — Component API Reference

> **AI uses this as the component library**  
> Never invent new markup. Use existing components. Copy HTML exactly, replace slot content.

---

## How to Use This File

1. Find the component you need
2. Copy the HTML snippet exactly
3. Replace slot content (marked with `{...}`)
4. Apply modifiers as needed
5. Never modify the base HTML structure

---

## Atoms

### Button

**File**: `src/components/atoms/button/`

#### HTML

```html
<button class="btn btn--{variant} btn--{size}" type="button">
  {Button Text}
</button>
```

#### With Icon

```html
<button class="btn btn--{variant} btn--{size}" type="button">
  <svg class="btn__icon" aria-hidden="true"><!-- icon --></svg>
  <span>{Button Text}</span>
</button>
```

#### Variants

| Class | Usage |
|-------|-------|
| `btn--primary` | Main CTA |
| `btn--secondary` | Secondary actions |
| `btn--ghost` | Tertiary/text link style |

#### Sizes

| Class | Height |
|-------|--------|
| `btn--sm` | 32px |
| `btn--md` | 40px (default) |
| `btn--lg` | 48px |

#### States

| Class | Usage |
|-------|-------|
| `is-loading` | Shows loading state |
| `is-disabled` | Disabled appearance |

#### When to Use

- ✓ Form submissions
- ✓ Primary/secondary actions
- ✓ CTAs
- ✗ Navigation (use Link)
- ✗ Toggles (use specific toggle component)

---

### Input

**File**: `src/components/atoms/input/`

#### HTML

```html
<input 
  type="{type}"
  id="{id}"
  name="{name}"
  class="input input--{size}"
  placeholder="{placeholder}"
/>
```

#### Textarea

```html
<textarea 
  id="{id}"
  name="{name}"
  class="input input--textarea"
  rows="4"
  placeholder="{placeholder}"
></textarea>
```

#### Sizes

| Class | Height |
|-------|--------|
| `input--sm` | 36px |
| `input--md` | 44px (default) |
| `input--lg` | 52px |

#### States

| Class | Usage |
|-------|-------|
| `is-error` | Error state |
| `is-disabled` | Disabled state |

#### When to Use

- ✓ Inside form-field molecule
- ✗ Standalone (always wrap in form-field)

---

### Label

**File**: `src/components/atoms/label/`

#### HTML

```html
<label for="{inputId}" class="label">
  {Label Text}
</label>
```

#### With Required

```html
<label for="{inputId}" class="label">
  {Label Text}
  <span class="label__required" aria-hidden="true">*</span>
  <span class="sr-only">(required)</span>
</label>
```

---

### Icon

**File**: `src/components/atoms/icon/`

#### HTML

```html
<svg class="icon icon--{size}" aria-hidden="true" viewBox="0 0 24 24">
  <!-- SVG path -->
</svg>
```

#### Sizes

| Class | Dimensions |
|-------|------------|
| `icon--sm` | 16px |
| `icon--md` | 20px |
| `icon--lg` | 24px |
| `icon--xl` | 32px |

---

### Link

**File**: `src/components/atoms/link/`

#### HTML

```html
<a href="{url}" class="link link--{variant}">
  {Link Text}
</a>
```

#### External Link

```html
<a href="{url}" class="link" target="_blank" rel="noopener noreferrer">
  {Link Text}
  <span class="sr-only">(opens in new tab)</span>
</a>
```

#### Variants

| Class | Usage |
|-------|-------|
| `link--inline` | Within body text |
| `link--standalone` | Outside body text |
| `link--muted` | Subtle links (footer) |
| `link--nav` | Navigation |

---

### Badge

**File**: `src/components/atoms/badge/`

#### HTML

```html
<span class="badge badge--{variant}">
  {Badge Text}
</span>
```

#### Variants

| Class | Usage |
|-------|-------|
| `badge--default` | Neutral |
| `badge--primary` | Primary/featured |
| `badge--success` | Success state |
| `badge--warning` | Warning state |
| `badge--error` | Error state |

---

### Divider

**File**: `src/components/atoms/divider/`

#### HTML

```html
<hr class="divider" />
```

#### With Text

```html
<div class="divider divider--with-text" role="separator">
  <span class="divider__line"></span>
  <span class="divider__text">{Text}</span>
  <span class="divider__line"></span>
</div>
```

---

## Molecules

### Form Field

**File**: `src/components/molecules/form-field/`

**Composes**: `label` + `input`

#### HTML

```html
<div class="form-field">
  <label for="{id}" class="label">
    {Label}
    <!-- if required -->
    <span class="label__required" aria-hidden="true">*</span>
  </label>
  <input 
    type="{type}"
    id="{id}"
    name="{name}"
    class="input"
    placeholder="{placeholder}"
  />
  <p class="form-field__helper">{Helper text}</p>
</div>
```

#### With Error

```html
<div class="form-field is-error">
  <label for="{id}" class="label">{Label}</label>
  <input 
    type="{type}"
    id="{id}"
    name="{name}"
    class="input is-error"
    aria-invalid="true"
    aria-describedby="{id}-error"
  />
  <p id="{id}-error" class="form-field__error" role="alert">
    {Error message}
  </p>
</div>
```

---

### Nav Link

**File**: `src/components/molecules/nav-link/`

**Composes**: `link` + `icon`

#### HTML

```html
<a href="{url}" class="nav-link">
  {Label}
</a>
```

#### Current Page

```html
<a href="{url}" class="nav-link is-current" aria-current="page">
  {Label}
</a>
```

#### With Dropdown

```html
<button class="nav-link" aria-expanded="false" aria-haspopup="true">
  {Label}
  <svg class="nav-link__chevron icon icon--sm" aria-hidden="true"><!-- chevron --></svg>
</button>
```

---

### Social Link

**File**: `src/components/molecules/social-link/`

**Composes**: `link` + `icon`

#### HTML

```html
<a 
  href="{url}" 
  class="social-link social-link--{platform}"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Follow us on {Platform} (opens in new tab)"
>
  <svg class="icon icon--md" aria-hidden="true"><!-- platform icon --></svg>
</a>
```

---

## Organisms

### Header

**File**: `src/components/organisms/header/`

**Composes**: `nav-link`, `button`, `icon`

#### HTML

```html
<header class="header">
  <div class="header__container">
    <a href="/" class="header__logo">
      <!-- Logo SVG or img -->
    </a>
    
    <nav class="header__nav" aria-label="Main navigation">
      <ul class="header__nav-list">
        <li><a href="/" class="nav-link is-current" aria-current="page">Home</a></li>
        <li><a href="/about" class="nav-link">About</a></li>
        <li><a href="/services" class="nav-link">Services</a></li>
        <li><a href="/contact" class="nav-link">Contact</a></li>
      </ul>
    </nav>
    
    <a href="/contact" class="btn btn--primary btn--sm header__cta">
      Get Started
    </a>
    
    <button class="header__menu-toggle" aria-expanded="false" aria-label="Toggle menu">
      <svg class="icon icon--lg" aria-hidden="true"><!-- menu icon --></svg>
    </button>
  </div>
</header>
```

---

### Footer

**File**: `src/components/organisms/footer/`

**Composes**: `link`, `social-link`, `divider`

#### HTML

```html
<footer class="footer">
  <div class="footer__container">
    <div class="footer__grid">
      
      <div class="footer__brand">
        <!-- Logo -->
        <p class="footer__description">{Company description}</p>
      </div>
      
      <nav class="footer__nav" aria-label="Footer navigation">
        <h3 class="footer__nav-title">{Column Title}</h3>
        <ul class="footer__nav-list">
          <li><a href="{url}" class="link link--muted">{Link}</a></li>
          <!-- more links -->
        </ul>
      </nav>
      
      <!-- more nav columns -->
      
    </div>
    
    <hr class="divider" />
    
    <div class="footer__bottom">
      <p class="footer__copyright">© 2026 {Company}. All rights reserved.</p>
      <div class="footer__social">
        <!-- social-link components -->
      </div>
    </div>
  </div>
</footer>
```

---

### Contact Form

**File**: `src/components/organisms/contact-form/`

**Composes**: `form-field`, `button`

#### HTML

```html
<form class="contact-form" action="{endpoint}" method="POST">
  <div class="contact-form__fields">
    <!-- form-field molecules -->
  </div>
  
  <button type="submit" class="btn btn--primary btn--lg contact-form__submit">
    {Submit Text}
  </button>
</form>
```

---

## Component Index

Quick reference for which component to use:

| Need | Use |
|------|-----|
| Clickable action | `button` |
| Navigation | `nav-link` |
| External link | `link` with external pattern |
| Form input | `form-field` (not raw `input`) |
| Status indicator | `badge` |
| Separation | `divider` |
| Social media | `social-link` |
| Page header | `header` organism |
| Page footer | `footer` organism |
