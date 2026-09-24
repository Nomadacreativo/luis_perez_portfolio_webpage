---
name: Neon Tokyo — Retro-Futurism
colors:
  surface: '#121414'
  surface-dim: '#121414'
  surface-bright: '#37393a'
  surface-container-lowest: '#0c0f0f'
  surface-container-low: '#1a1c1c'
  surface-container: '#1e2020'
  surface-container-high: '#282a2b'
  surface-container-highest: '#333535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#cac3d9'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#2f3131'
  outline: '#938ea2'
  outline-variant: '#484456'
  surface-tint: '#cbbeff'
  primary: '#cbbeff'
  on-primary: '#320099'
  primary-container: '#6130f2'
  on-primary-container: '#dbd1ff'
  inverse-primary: '#6231f3'
  secondary: '#e6ff84'
  on-secondary: '#2a3400'
  secondary-container: '#c1e602'
  on-secondary-container: '#536400'
  tertiary: '#c8c6c5'
  on-tertiary: '#303030'
  tertiary-container: '#5e5d5d'
  on-tertiary-container: '#d9d6d6'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e6deff'
  primary-fixed-dim: '#cbbeff'
  on-primary-fixed: '#1d0061'
  on-primary-fixed-variant: '#4900d5'
  secondary-fixed: '#ccf21e'
  secondary-fixed-dim: '#b2d400'
  on-secondary-fixed: '#181e00'
  on-secondary-fixed-variant: '#3f4c00'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1b1b1b'
  on-tertiary-fixed-variant: '#474746'
  background: '#121414'
  on-background: '#e2e2e2'
  surface-variant: '#333535'
typography:
  headline-lg:
    fontFamily: neulis-extrabold
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  margin: 1.5rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
---

# Neon Tokyo — Retro-Futurism

## North Star: "Electric Nightscape"
Cyberpunk-inspired. Moody dark backgrounds with vibrant neon accents that glow. Futuristic, Glassmorphism, immersive, and high-energy.

## Colors
- **Primary (`#6130f2`):** Electric indigo — CTAs, focus states, active elements.
- **Secondary (`#d9ff30`):** Lime neon — links, secondary actions, data highlights.
- **Tertiary (`#1d1d1d`):** Dark contrast surface — badges, warnings, emphasis.
- **Background (`#0a0a12`):** Near-black with electric indigo undertone.
- Never use bright neon colors for large surface areas. They are accents only.

## Glassmorphism and Glow Effects (Core Pattern)
- **Neon glow:** `text-shadow: 0 0 8px currentColor` on accent text.
- **Button glow:** `box-shadow: 0 0 16px rgba(97, 48, 242, 0.4)` on hover.
- **Border glow:** `border: 1px solid rgba(97, 48, 242, 0.5)` with `box-shadow: inset 0 0 12px rgba(97, 48, 242, 0.1)`.
- Keep glows diffused (12-20px blur). Never harsh or tight.

## Typography
- **Headlines:** Neulis — geometric and futuristic with soft terminations. Use bold weight.
- **Body:** Lexend — optimized for readability against dark backgrounds.
- **Labels:** Neulis — geometric and futuristic with soft terminations for technical UI elements.

## Elevation
- No traditional shadows. Use inner/outer glows with neon tint.
- Surface hierarchy via opacity: darkest base → lighter containers.
- Subtle scan-line or grid textures as background detail (CSS gradients).

## Components
- **Buttons:** Dark background, neon border, text glow on hover. No solid neon fill.
- **Cards:** `surface_container` with thin frosted glass and neon border at 30% opacity.
- **Inputs:** Dark fill, bottom neon border, glow on focus.

## Rules
- Maximum 2 neon accent colors per view. Use neutral text primarily.
- Neon on dark only — never on light backgrounds.
- Glows animate on interaction, not at rest.