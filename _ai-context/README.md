# AI Context Layer — TecShipCorp

This folder contains the AI's reference documentation. 

## How Cursor Uses These Files

| File | How to Use |
|------|------------|
| `.cursor/rules` | **Automatic** — Cursor injects this into every prompt |
| `@_ai-context/TOKENS.md` | Mention with @ when writing CSS |
| `@_ai-context/COMPONENTS.md` | Mention with @ when building UI |
| `@_ai-context/PATTERNS.md` | Mention with @ when laying out pages |
| `@_ai-context/DO-NOT.md` | Mention with @ to enforce constraints |

## Project Summary

| | |
|---|---|
| **Brand** | TecShipCorp |
| **Primary Color** | #153E68 (Navy Blue) |
| **Font** | Lato |
| **Tech** | Pure HTML + CSS + Vanilla JS |
| **Forms** | Formspree |
| **Hosting** | Cloudflare Pages |

---

## File Reading Order

```
1. SYSTEM.md      ← Read FIRST, every task
2. DO-NOT.md      ← Check before writing ANY code
3. TOKENS.md      ← Reference for all style values
4. COMPONENTS.md  ← Component API reference
5. PATTERNS.md    ← Page layout reference
```

---

## File Purposes

| File | Purpose | When AI Reads |
|------|---------|---------------|
| `SYSTEM.md` | Global rules, tech stack, constraints | Every task |
| `TOKENS.md` | CSS variable reference | Writing any CSS |
| `COMPONENTS.md` | Component HTML snippets | Building UI |
| `PATTERNS.md` | Page layouts, section patterns | Assembling pages |
| `DO-NOT.md` | Banned patterns | Before outputting code |

---

## Build Workflow

```
Phase 1: Foundation (You're here)
├── [✓] SYSTEM.md
├── [✓] TOKENS.md  
├── [✓] COMPONENTS.md
├── [✓] PATTERNS.md
├── [✓] DO-NOT.md
└── [ ] CSS files (tokens.css, base.css, main.css)

Phase 2: Atoms
├── [ ] button.css
├── [ ] input.css
├── [ ] label.css
├── [ ] icon.css
├── [ ] image.css
├── [ ] link.css
├── [ ] badge.css
└── [ ] divider.css

Phase 3: Molecules
├── [ ] form-field.css
├── [ ] nav-link.css
└── [ ] social-link.css

Phase 4: Organisms
├── [ ] header.css + header.html
├── [ ] footer.css + footer.html
└── [ ] contact-form.css

Phase 5: Sections
├── [ ] hero.css
├── [ ] features.css
├── [ ] cta.css
└── [ ] contact-section.css

Phase 6: Pages
├── [ ] index.html (homepage)
├── [ ] about.html
├── [ ] services.html
├── [ ] contact.html
└── [ ] 404.html
```

---

## How to Give AI Tasks in Cursor

### Good Task Format (using @ mentions)

```
Build the button atom.

Reference @_ai-context/TOKENS.md for colors and spacing.
Reference @_ai-context/COMPONENTS.md for the HTML structure.

Output:
- src/css/components/button.css
- components/atoms/button.html
```

### Even Better (Cursor auto-injects .cursor/rules)

```
Build the button atom. Output button.css and button.html.
```

(Cursor already knows your constraints from .cursor/rules)

### Bad Task Format

```
Build all the buttons and inputs and also the header
```

(Too many components in one task)

---

## Rules for AI

1. **One component per task** — Never bundle
2. **Read SYSTEM.md first** — Every single task
3. **Check DO-NOT.md** — Before outputting code
4. **Use TOKENS.md** — Never hardcode values
5. **Copy from COMPONENTS.md** — Never invent markup
6. **Follow PATTERNS.md** — For layouts only
7. **Compose up** — Atoms → Molecules → Organisms
8. **Never modify locked components** — Create variants instead

---

## Updating This Folder

- **SYSTEM.md**: Update when tech stack or global rules change
- **TOKENS.md**: Update when design tokens change
- **COMPONENTS.md**: Add component after it's built and reviewed
- **PATTERNS.md**: Add patterns as they're approved
- **DO-NOT.md**: Add new bans as issues are discovered
