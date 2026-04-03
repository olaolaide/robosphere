# RoboSphere

A multi-page, dark-themed robotics platform website built with **vanilla HTML, CSS, and JavaScript** — no frameworks, no build tools, no dependencies.

---

## Table of Contents

- [Overview](#overview)
- [Project Structure](#project-structure)
- [Pages](#pages)
- [Design System](#design-system)
- [Components](#components)
- [Images Required](#images-required)
- [Getting Started](#getting-started)
- [Browser Support](#browser-support)

---

## Overview

RoboSphere is a front-end website for a fictional robotics company. It showcases industrial automation, AI systems, and robotics engineering content across seven distinct pages. The site uses a consistent dark sci-fi aesthetic with glassmorphism cards, blue glow effects, animated UI elements, and a shared navigation and modal system.

**Tech stack:**
- HTML5 (semantic markup)
- CSS3 (custom properties, grid, flexbox, keyframe animations, backdrop-filter)
- Vanilla JavaScript (modal system, password toggle)
- Google Fonts — [Inter](https://fonts.google.com/specimen/Inter)
- Zero external CSS/JS dependencies

---

## Project Structure

```
robosphere/
├── index.html            # Home / landing page
├── applications.html     # Robotics applications showcase
├── benefits.html         # Benefits & model comparison table
├── learning.html         # Learning resources & tutorials
├── about.html            # About us, team, values
├── contact.html          # Contact form & Google Maps embed
├── login.html            # Sign-in page
└── styles/
  ├── style.css             # Global stylesheet (all page styles)
  ├── auth.css             # Login / Register sheet styles
│
└── images/
    ├── logo.svg          # Site logo (used in nav)
    ├── favicon.ico       # Website Favicon
    ├── check-mark.svg    # Check mark icon (used in custom list icon)
    ├── background.png    # Hero section background image
    ├── facebook.svg      # Social icon
    ├── x.svg             # Social icon
    ├── github.svg        # Social icon
    ├── industrial-automation.jpg    # Applications card — industrial automation
    ├── healthcare-assistance.jpg    # Applications card — healthcare
    ├── homepage-background.jpg    
    ├── space-exploration.jpg         # Applications card — space exploration
    ├── smart-city.jpg     # Applications card — smart cities
    ├── elena-vance.jpg         # Leadership — Dr. Elena Vance
    ├── marcus-thorne.jpg         # Leadership — Marcus Thorne
    ├── sarah-chen.jpg         # Leadership — Sarah Chen
    ├── david-miller.jpg         # Leadership — David Miller
    ├── opencv.jpg       # Learning page — update thumbnail
    ├── pid-controller.jpg       # Learning page — update thumbnail
    └── ros2.jpg       # Learning page — update thumbnail
```

---

## Pages

### `index.html` — Home
The main landing page. Includes:
- Full-screen hero section with background image, animated ping badge, gradient headline, and two CTA buttons
- Stats bar (10k+ engineers, 500+ projects, 50+ countries) with glassmorphism cards
- Three feature pillar cards (Applications, Benefits, Learning)
- CTA banner with layered glow effects
- Full-width footer with navigation columns, social icons, and modal-linked legal links

### `applications.html` — Applications
Showcases four robotics application areas:
- Page hero with decorative SVG circuit diagram
- 2×2 grid of application cards with grayscale-to-colour image hover, scan-line accent, rotating icon, and stat labels
- Global deployment stats bar (1.2M+ units, 45% efficiency, 120+ hubs) with a "View Full Metrics" button

### `benefits.html` — Benefits
Explains the value of robotics automation:
- Hero section with animated pill badge and white gradient text
- Four "Core Pillar" glassmorphism cards (Efficiency, Safety, Sustainability, Cost Reduction) each with a checklist rendered via CSS mask-image
- Robotics model comparison table with three badge variants (Standard, Advanced, Neural-Link V2) and a pulsing dot on the premium tier

### `learning.html` — Learning & Resources
A resource hub for engineers:
- Breadcrumb navigation
- Hero with gradient headline and a full-width search bar (focus-ring via `:focus-within`)
- 4-column resource category cards (Documentation, Video Tutorials, Open Source, Community) — icon flips from tinted to solid on hover
- Latest Updates feed with thumbnail images, colour-coded type tags (GUIDE / VIDEO / REPO), and a 2-line title clamp
- Sidebar with trending hashtag pills and a Certification Program card

### `about.html` — About Us
Company profile page:
- Animated badge + gradient title hero
- Two-column story section with a glow-backed image frame
- Three Core Values cards (Innovation, Intelligence, Trust) with hover icon colour flip
- Leadership team grid — 4 portrait cards with grayscale-to-colour photo hover and lift animation
- CTA section with dual buttons (Schedule Demo / Contact Sales)

### `contact.html` — Contact Us
Contact and location page:
- Cyber-grid fixed background with corner glow orbs
- Two-column layout: glass-panel contact form (with custom `<select>` and textarea) and info cards + map
- Live Google Maps embed (University of East London) replacing the stylised placeholder
- Social icon row (share, globe, RSS)

### `login.html` — Sign In
Authentication page (standalone, no shared nav):
- Tech grid background with radial gradient and two glow orbs
- Glassmorphism card with floating label inputs (CSS-only — `:focus` + `:not(:placeholder-shown)`)
- Working password visibility toggle (eye / eye-off icon swap via JS)
- Social login buttons with inline SVG Google G (brand colours) and GitHub mark
- Decorative footer icon row that transitions from greyscale to colour on hover

---

## Design System

All design tokens are defined as CSS custom properties in `:root` inside `style.css`:

```css
:root {
  --primary-color:    #0004ff;   /* electric blue — buttons, accents, glows */
  --accent-color:     #00f2ff;   /* cyan — secondary highlights             */
  --background-dark:  #0a0b1e;   /* main page background                    */
  --background-light: #f5f5f8;   /* unused light mode value                 */
  --card-dark:        rgba(25, 27, 58, 0.6);
  --primary-text:     #ffffff;
  --secondary-text:   #94a3b8;
  --muted-text:       #64748b;
  --footer-bg:        #050614;
}
```

### Typography
Single font family: **Inter** (weights 300–900) loaded from Google Fonts. Display sizes use `clamp()` for fluid scaling without breakpoints.

### Glassmorphism
Reusable glass utilities:
```css
.glass-nav   /* sticky navigation bar   */
.glass-card  /* content cards           */
```
Both use `backdrop-filter: blur()` with semi-transparent dark backgrounds and a subtle `rgba` border.

### Colour usage
| Token | Usage |
|---|---|
| `--primary-color` | Buttons, active nav, icons, borders on hover, glow shadows |
| `--accent-color` | Hero badge, stat labels, marker dot, cyan-tinted elements |
| `--secondary-text` | Body copy, descriptions, subtitles |
| `--muted-text` | Labels, timestamps, footer copy |

### Animations
All animations are CSS-only keyframes:
- `ping` — expanding ring on live indicator dots
- `bounce` — hero scroll indicator
- `map-ping` — pulsing location marker (contact page)
- `dot-pulse` — X-Pro model indicator (benefits table)
- `dot-pulse` (team cards) — subtle active state

---

## Components

### Navigation (`glass-nav`)
Fixed/sticky header present on every page. Collapses nav links at < 1024px. Logo consists of a coloured icon box and wordmark with accent-coloured suffix span.

**Include on every page:**
```html
<head>
  <link rel="stylesheet" href="modal.css" />
</head>
<body>
  <!-- page content -->
  <script src="modal.js"></script>
</body>
```

### Application Cards (`app-card`)
Used on `applications.html`. Features:
- Top scan-line accent
- Greyscale image that restores to colour on hover
- Rotating icon on hover
- Monospace stat label + animated arrow link

### Pillar Cards (`pillar-card`)
Used on `benefits.html`. Features:
- Glassmorphism background
- Blue glow border on hover
- CSS `mask-image` checklist bullet (no icon font required)

### Team Cards (`team-card`)
Used on `about.html`. Features:
- Square aspect-ratio photo with grayscale → colour hover
- `translateY(-0.5rem)` lift animation
- Social + email icon links

---

## Images Required

Place all images in an `/images/` folder at your project root. Images without a source will show a dark placeholder background (`#1a1a3a` or similar).

| File | Page | Recommended size |
|---|---|---|
| `logo.svg` | All pages (nav + footer) | 50×50px SVG |
| `background.png` | `index.html` hero | 1920×1080px min |
| `facebook.svg` | Footer socials | 24×24px SVG |
| `x.svg` | Footer socials | 24×24px SVG |
| `github.svg` | Footer socials | 24×24px SVG |
| `industrial.jpg` | Applications card | 800×500px |
| `healthcare.jpg` | Applications card | 800×500px |
| `space.jpg` | Applications card | 800×500px |
| `smartcity.jpg` | Applications card | 800×500px |
| `lab.jpg` | About — story section | 800×450px |
| `team1.jpg` | About — Dr. Elena Vance | 400×400px square |
| `team2.jpg` | About — Marcus Thorne | 400×400px square |
| `team3.jpg` | About — Sarah Chen | 400×400px square |
| `team4.jpg` | About — David Miller | 400×400px square |
| `update1.jpg` | Learning — update feed | 240×160px |
| `update2.jpg` | Learning — update feed | 240×160px |
| `update3.jpg` | Learning — update feed | 240×160px |

---

## Getting Started

No build step or package manager required. Serve the files from any static file server.

**Option 1 — VS Code Live Server**
1. Open the project folder in VS Code
2. Install the [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
3. Right-click `index.html` → **Open with Live Server**

**Option 2 — Python**
```bash
# Python 3
python -m http.server 8000
# then open http://localhost:8000
```

**Option 3 — Node.js**
```bash
npx serve .
# then open http://localhost:3000
```

**Option 4 — Direct file open**
Open `index.html` directly in a browser. Note: the Google Maps embed on `contact.html` requires a server origin (HTTP/HTTPS) to load correctly.

---

## Browser Support

| Browser | Support |
|---|---|
| Chrome 94+ | ✅ Full |
| Firefox 93+ | ✅ Full |
| Safari 15+ | ✅ Full (`-webkit-backdrop-filter` included) |
| Edge 94+ | ✅ Full |
| IE 11 | ❌ Not supported (`backdrop-filter`, CSS Grid, custom properties) |

`-webkit-backdrop-filter` is included alongside `backdrop-filter` on all glassmorphism elements for Safari compatibility.

---

## License

This project is for educational and portfolio purposes. All content, copy, and team names are fictional.
