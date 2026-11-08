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

# Design System — Luis Pérez · Inox One

## Core Visual Direction
White canvas (`#ffffff`) paired with rich dark-purple pattern containers (`assets/img/container-bg-pattern.jpg`) using frosted Glassmorphism, specular borders, and high-contrast typography.

## Colors
- **Website Background (`#ffffff`):** Clean white canvas.
- **Titles on White Background (`#6130f2`):** Electric purple (Morado).
- **Body Text on White Background (`#000000`):** Pure black.
- **Titles on Dark / Glassmorphic Containers (`#c0df16`):** Vibrant Lime.
- **Body Text on Dark / Glassmorphic Containers (`#ffffff`):** Pure white.

## Glassmorphism & Container Effects
- **Container Background:** `linear-gradient(...)` translucent overlay combined with `url('../assets/img/container-bg-pattern.jpg') center / cover no-repeat`.
- **Frosted Blur:** `backdrop-filter: blur(20px) saturate(160%)`.
- **Specular Borders:** `border: 1px solid rgba(255, 255, 255, 0.3)` with `box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.42)`.

## Typography
- **Headlines (`H1`, `H2`, `H3`, `H4` & Titles):** `Neulis` ExtraBold (`font-weight: 800`).
- **Body Text:** `Poppins` Regular (`font-weight: 400`).
- **Labels:** `Neulis` ExtraBold (`font-weight: 800`).