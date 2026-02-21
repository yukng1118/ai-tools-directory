# AI Tools Directory — Design System

## Overview

Modern, clean design focused on tool discovery. Emphasis on trust, clarity, and ease of use.

---

## 1. Color Scheme

### Primary Colors
| Color | Hex | Usage |
|-------|-----|-------|
| **Blue-600** | `#2563eb` | Primary buttons, links, CTAs |
| **Blue-500** | `#3b82f6` | Hover states, accents |
| **Blue-50** | `#eff6ff` | Light backgrounds, hero sections |

### Secondary Colors
| Color | Hex | Usage |
|-------|-----|-------|
| **Purple-600** | `#9333ea` | Pricing "PAID" badges |
| **Purple-50** | `#faf5ff` | Newsletter section |
| **Green-100** | `#dcfce7` | "FREE" badges, success states |
| **Yellow-100** | `#fef9c3` | Featured badges |

### Neutral Colors
| Color | Hex | Usage |
|-------|-----|-------|
| **Gray-900** | `#111827` | Headlines, primary text |
| **Gray-600** | `#4b5563` | Body text, descriptions |
| **Gray-400** | `#9ca3af` | Muted text, icons |
| **Gray-100** | `#f3f4f6` | Borders, dividers |
| **White** | `#ffffff` | Card backgrounds, inputs |

### Dark Mode (Optional)
- Background: `#0f172a` (Slate-900)
- Card bg: `#1e293b` (Slate-800)
- Text: `#f8fafc` (Slate-50)

---

## 2. Typography

### Font Stack
- **Primary:** Inter, system-ui, sans-serif
- **Monospace:** JetBrains Mono (for code/technical)

### Scale
| Level | Size | Weight | Line | Usage |
|-------|------|--------|------|-------|
| H1 | 48px / 3rem | 700 | 1.1 | Page titles |
| H2 | 36px / 2.25rem | 700 | 1.2 | Section headers |
| H3 | 24px / 1.5rem | 600 | 1.3 | Card titles |
| Body | 16px / 1rem | 400 | 1.6 | Paragraphs |
| Small | 14px / 0.875rem | 400 | 1.5 | Meta, captions |
| XS | 12px / 0.75rem | 500 | 1.4 | Badges, tags |

---

## 3. Component Library

### Tool Card

```
┌─────────────────────────────┐
│ [Category Badge]            │  ← Small text, gray-500
│                             │
│ Tool Name                   │  ← H3, bold
│ ★ Featured  [PRICING]       │  ← Yellow badge + pricing pill
│                             │
│ Short tagline description   │  ← Gray-600, truncate 2 lines
│                             │
│ • Feature 1                 │
│ • Feature 2                 │  ← Small bullets
│ • Feature 3                 │
│                             │
│ [  View Details  ]          │  ← Blue button
└─────────────────────────────┘
```

**Specs:**
- Padding: 24px
- Border: 1px solid gray-200
- Border radius: 12px (rounded-xl)
- Shadow: sm (on hover: shadow-lg)
- Hover: scale-105 transition

### Pricing Badges
| Type | Style | Color |
|------|-------|-------|
| FREE | Green pill | bg-green-100 text-green-700 |
| FREEMIUM | Blue pill | bg-blue-100 text-blue-700 |
| PAID | Purple pill | bg-purple-100 text-purple-700 |
| ENTERPRISE | Gray pill | bg-gray-100 text-gray-700 |

### Category Cards (Homepage)
```
┌──────────────────┐
│ Icon             │  ← 48x48px icon area
│ Category Name    │  ← H3
│ Brief description│  ← Small, gray-600
└──────────────────┘
```

**Specs:**
- Grid: 2 cols mobile, 4 cols desktop
- Icon: Lucide icon, 24px

### Hero Section

```
┌─────────────────────────────┐
│                             │
│   Find AI Tools by          │
│   [Use Case] ← Blue accent  │
│                             │
│   Description text...       │
│                             │
│  [Browse Directory] [News]  │
│                             │
└─────────────────────────────┘
```

**Specs:**
- Background: Gradient blue-50 to white
- Padding: py-20 (5rem top/bottom)
- Text align: center
- Buttons: Flex row, gap-4

---

## 4. Layout Grid

### Container
- Max-width: 1152px (max-w-6xl)
- Padding: px-4 mobile, auto center

### Grid System
| Breakpoint | Grid | Gap |
|------------|------|-----|
| Mobile | 1 col | gap-4 |
| Tablet (768px) | 2 cols | gap-6 |
| Desktop (1024px) | 3-4 cols | gap-6 |

---

## 5. Spacing Scale

| Token | Size | Usage |
|-------|------|-------|
| space-1 | 4px | Tight margins |
| space-2 | 8px | List items |
| space-4 | 16px | Default padding |
| space-6 | 24px | Card padding |
| space-8 | 32px | Section gaps |
| space-12 | 48px | Major sections |

---

## 6. Buttons

### Primary Button
```
[  Browse Directory  ]
```
- Background: blue-600
- Text: white
- Padding: px-6 py-3 (24px/12px)
- Border radius: rounded-lg (8px)
- Hover: blue-700

### Secondary Button
```
[  Join Newsletter  ]
```
- Background: white
- Border: 1px solid blue-600
- Text: blue-600
- Hover: blue-50

### Link Button
```
View all →
```
- Text only
- Blue-600
- Arrow icon on right
- Hover: underline

---

## 7. Mobile Responsiveness

### Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

### Mobile Patterns
| Element | Mobile | Desktop |
|---------|--------|---------|
| Navbar | Hamburger menu | Full links |
| Hero | Stacked text | Side-by-side |
| Tool cards | 1 col | 3 cols |
| Compare page | Vertical stack | Side-by-side |
| Footer | Stacked | Grid row |

---

## 8. Compare Page Design

### Desktop Layout
```
┌─────────────────────────────────────────┐
│  Compare AI Tools                       │
├──────────────┬──────────────┬─────────┤
│  [Tool 1 ▼]  │  [Tool 2 ▼]    │         │
└──────────────┴──────────────┴─────────┘
┌─────────────────────────────────────────┐
│ Feature          │ Tool 1    │ Tool 2  │
├──────────────────┼───────────┼─────────┤
│ Pricing          │ FREEMIUM  │   PAID  │
│ Free Tier        │     ✓     │    ✗    │
│ Free Trial       │     ✓     │    ✓    │
│ Category         │  Video    │  Image  │
└──────────────────┴───────────┴─────────┘
```

### Mobile Layout
```
[Tool 1 ▼]
[Tool 2 ▼]

[Compare Button]

Winner: Tool 1 (2/4)
```

---

## 9. Newsletter Section

```
┌─────────────────────────────────────┐
│  📧 Weekly for Creative Makers      │
│                                     │
│  AI Tools for Creators Newsletter   │
│                                     │
│  Latest AI tools, problem-solving   │
│  guides, and creator workflows.     │
│                                     │
│ [email@example.com] [Subscribe]     │
│                                     │
│  Join 500+ creators. No spam.         │
└─────────────────────────────────────┘
```

- Background: Purple-50
- Input: Gray border, white bg
- Button: Purple-600

---

## 10. Imagery

### Tool Screenshots
- Aspect ratio: 16:9
- Style: Real tool interface
- Border: 1px gray-200
- Border radius: rounded-lg
- Shadow: sm

### Icons
- Library: Lucide React
- Size: 24px default
- Stroke width: 2
- Color: inherit from parent

---

## Implementation Notes

### Tailwind Classes
- Use `prose` for content (articles)
- Use `flex` and `grid` for layouts
- `container mx-auto px-4` for wrapper
- `max-w-6xl` for content

### Performance
- Lazy load images: `loading="lazy"`
- Use `next/image` for optimization
- Inter font from Google Fonts

---

_Last updated: 2026-02-21_