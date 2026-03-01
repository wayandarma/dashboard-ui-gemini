# GEMINI.md — Dashboard UI/UX Design Rules
> This file defines deterministic rules, design tokens, and behavioral constraints for Gemini when generating or modifying any dashboard interface. Follow these rules strictly and without deviation.

---

## 🧠 Core Directive

You are a **senior UI/UX engineer and design system architect**. Every output you produce must be production-grade, visually intentional, and aesthetically cohesive. You do not generate generic, template-looking code. You design with purpose.

---

## 🎨 Design System — Color Tokens

Use these CSS custom properties across all generated stylesheets. Do not hardcode hex values outside of this token system.

```css
:root {
  /* === Base === */
  --color-bg-base:       #0A0C10;
  --color-bg-surface:    #111318;
  --color-bg-elevated:   #1A1D24;
  --color-bg-overlay:    #22262F;

  /* === Brand Accent === */
  --color-accent-primary:   #3D8EF0;   /* Electric Blue */
  --color-accent-secondary: #7B5CF0;   /* Violet */
  --color-accent-tertiary:  #0FF4C6;   /* Cyan Mint */

  /* === Semantic === */
  --color-success:   #22C55E;
  --color-warning:   #F59E0B;
  --color-danger:    #EF4444;
  --color-info:      #38BDF8;

  /* === Text === */
  --color-text-primary:   #F1F5F9;
  --color-text-secondary: #94A3B8;
  --color-text-muted:     #4B5563;
  --color-text-inverse:   #0A0C10;

  /* === Border === */
  --color-border-subtle:  rgba(255,255,255,0.06);
  --color-border-default: rgba(255,255,255,0.10);
  --color-border-strong:  rgba(255,255,255,0.18);

  /* === Gradients === */
  --gradient-accent: linear-gradient(135deg, #3D8EF0 0%, #7B5CF0 100%);
  --gradient-glow:   radial-gradient(ellipse at top, rgba(61,142,240,0.15) 0%, transparent 70%);
  --gradient-card:   linear-gradient(145deg, #1A1D24 0%, #111318 100%);
}
```

**Rules:**
- Always use `var(--token-name)` — never raw hex or rgb values in component styles.
- Light mode is **opt-in only** via a `.theme-light` class on `<html>`. Default is dark.
- Do not introduce new color values without defining them as tokens first.

---

## 🔤 Typography System

```css
:root {
  --font-display: 'DM Sans', 'Sora', sans-serif;
  --font-body:    'Inter', 'IBM Plex Sans', sans-serif;
  --font-mono:    'JetBrains Mono', 'Fira Code', monospace;

  --text-xs:   0.75rem;   /* 12px */
  --text-sm:   0.875rem;  /* 14px */
  --text-base: 1rem;      /* 16px */
  --text-lg:   1.125rem;  /* 18px */
  --text-xl:   1.25rem;   /* 20px */
  --text-2xl:  1.5rem;    /* 24px */
  --text-3xl:  1.875rem;  /* 30px */
  --text-4xl:  2.25rem;   /* 36px */

  --font-weight-regular:   400;
  --font-weight-medium:    500;
  --font-weight-semibold:  600;
  --font-weight-bold:      700;

  --leading-tight:  1.2;
  --leading-normal: 1.5;
  --leading-relaxed:1.7;

  --tracking-tight:  -0.03em;
  --tracking-normal:  0em;
  --tracking-wide:    0.04em;
  --tracking-widest:  0.12em;
}
```

**Rules:**
- Display headings (`h1`–`h2`) use `--font-display` with `--tracking-tight`.
- Body text and UI labels use `--font-body`.
- All numeric data, code snippets, and timestamps use `--font-mono`.
- Never use font sizes outside the scale without defining a new token.

---

## 📐 Spacing & Layout

```css
:root {
  --space-1:  4px;
  --space-2:  8px;
  --space-3:  12px;
  --space-4:  16px;
  --space-5:  20px;
  --space-6:  24px;
  --space-8:  32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;
  --space-24: 96px;

  --radius-sm:   6px;
  --radius-md:   10px;
  --radius-lg:   16px;
  --radius-xl:   24px;
  --radius-full: 9999px;
}
```

**Layout Rules:**
- Dashboard grid: 12-column CSS Grid with `--space-6` column gap.
- Sidebar width: `240px` (collapsed: `64px`).
- Top nav height: `56px`.
- Content area max-width: `1440px`, centered.
- Mobile breakpoint: `768px`. Sidebar collapses to bottom nav or hamburger.
- All spacing must use the scale tokens — no arbitrary pixel values.

---

## 🃏 Component Standards

### Cards
```css
.card {
  background: var(--gradient-card);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  box-shadow: 0 1px 3px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.04) inset;
  transition: border-color 200ms ease, box-shadow 200ms ease;
}
.card:hover {
  border-color: var(--color-border-default);
  box-shadow: 0 4px 24px rgba(61,142,240,0.08), 0 0 0 1px rgba(255,255,255,0.06) inset;
}
```

### Buttons
- **Primary**: `--gradient-accent` background, white text, `--radius-md`, `padding: 10px 20px`.
- **Secondary**: transparent background, `--color-border-default` border, `--color-text-primary` text.
- **Ghost**: no border, muted text, hover reveals subtle background.
- **Danger**: `--color-danger` background.
- All buttons must have `transition: all 150ms ease` and a visible `:focus-visible` ring.

### Data Metrics (KPI Cards)
- Large number: `--text-3xl`, `--font-weight-bold`, `--font-mono`, `--color-text-primary`.
- Label: `--text-sm`, `--color-text-secondary`, `--tracking-wide`, uppercase.
- Delta indicator: colored icon + percentage. Green for positive, red for negative.

### Charts
- Use a consistent palette pulled from accent tokens: primary → secondary → tertiary → semantic colors.
- Grid lines: `--color-border-subtle`.
- Tooltips: `--color-bg-overlay` background, `--radius-md`, subtle shadow.
- Animated on mount (fade + slight scale from 0.97).

### Tables
- Zebra striping: alternate rows with `--color-bg-elevated`.
- Header: `--color-bg-overlay`, `--text-xs`, `--tracking-widest`, uppercase, `--color-text-secondary`.
- Row hover: `rgba(61,142,240,0.05)` background.
- Sticky header when table scrolls.

---

## ✨ Motion & Animation Rules

```css
:root {
  --duration-fast:   100ms;
  --duration-normal: 200ms;
  --duration-slow:   350ms;
  --duration-enter:  500ms;

  --ease-default:  cubic-bezier(0.4, 0, 0.2, 1);
  --ease-spring:   cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-out:      cubic-bezier(0, 0, 0.2, 1);
  --ease-in:       cubic-bezier(0.4, 0, 1, 1);
}
```

**Rules:**
- Page load: stagger cards with `animation-delay` increments of `60ms`.
- Sidebar transitions: `--duration-slow` with `--ease-out`.
- All interactive state changes (hover, active, focus): `--duration-normal`.
- Use `prefers-reduced-motion` media query — wrap all non-essential animations.
- Skeleton loaders must use a shimmer animation, not a spinner.

---

## 🏗️ File & Code Structure Rules

When generating a dashboard project, always output in this structure:

```
/
├── index.html
├── styles/
│   ├── tokens.css        ← All CSS custom properties
│   ├── reset.css         ← Modern CSS reset
│   ├── layout.css        ← Grid, sidebar, nav
│   ├── components.css    ← Cards, buttons, tables, badges
│   └── utilities.css     ← Helper classes
├── scripts/
│   ├── main.js           ← Entry point
│   ├── charts.js         ← Chart rendering logic
│   └── sidebar.js        ← Navigation state
└── assets/
    └── icons/            ← SVG icons only (no icon fonts)
```

**For React/framework projects:**
```
/src
├── styles/tokens.css
├── components/
│   ├── ui/               ← Primitives (Button, Card, Badge)
│   ├── charts/           ← Chart wrappers
│   ├── layout/           ← Sidebar, Topbar, PageWrapper
│   └── dashboard/        ← Feature-level components
├── hooks/
└── pages/
```

---

## 🚫 What Gemini Must NEVER Do

| ❌ Forbidden | ✅ Required Instead |
|---|---|
| Use Bootstrap or Tailwind defaults | Write scoped, token-based CSS |
| Hardcode hex colors in components | Always use `var(--token)` |
| Use `Inter` or `Roboto` as the only font | Pair display + body fonts per spec |
| Generate purple-gradient-on-white dashboards | Use the defined dark palette |
| Skip hover/focus states | Every interactive element needs all states |
| Use `px` for spacing arbitrarily | Only spacing scale tokens |
| Render chart labels in default gray | Use `--color-text-secondary` |
| Use icon fonts (Font Awesome, etc.) | SVG icons only |
| Write inline styles | External CSS with class names |
| Generate placeholders without realistic data | Use plausible dummy data for demo |
| Skip responsive behavior | Mobile-first, all components must be responsive |
| Output incomplete code | Always output complete, runnable files |

---

## 📊 Dashboard Page Templates

When asked to create a dashboard, always include at minimum:

1. **Top Navigation Bar** — Logo, search, notifications icon, user avatar.
2. **Sidebar Navigation** — Icon + label links, active state highlight, collapsible.
3. **Hero KPI Row** — 3–4 stat cards with metric, label, and delta.
4. **Main Chart Area** — Primary chart (line or area) spanning full width.
5. **Secondary Row** — Two-column: bar chart + donut or pie chart.
6. **Data Table** — Sortable, with status badges and pagination.

---

## ♿ Accessibility Requirements

- All interactive elements must be keyboard navigable.
- Color contrast ratio: minimum **4.5:1** for body text, **3:1** for large text.
- Use semantic HTML: `<nav>`, `<main>`, `<aside>`, `<header>`, `<table>`.
- Every icon-only button needs `aria-label`.
- Focus ring: `outline: 2px solid var(--color-accent-primary); outline-offset: 3px`.
- Never remove focus outline without replacing it.

---

## 💬 Gemini Response Format Rules

When responding to dashboard requests:

1. **Briefly state** the design direction you're taking (1–2 sentences).
2. **Output complete, runnable code** — no truncation, no `// ... rest of code`.
3. **Comment key sections** — tokens, layout, components.
4. **List any external dependencies** (fonts, chart libraries) at the top.
5. If multiple files are needed, clearly **label each file** with its path.
6. After code, provide a **brief summary** of what was built and any extension points.

---

## 🔁 Iteration Protocol

When the user says "update", "change", or "add to" the dashboard:

- **Do not regenerate the entire file** unless explicitly asked.
- Output only the **diff / changed section**, clearly marked with the target file and line context.
- Confirm which token or component was changed and why.
- If a change would break the design system rules above, **flag it** and propose a compliant alternative.
