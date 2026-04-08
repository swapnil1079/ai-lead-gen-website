# Design Brief

## Direction

NexusAI — Cyberpunk-futuristic AI lead generation platform with neon-on-dark aesthetic.

## Tone

Bold electric maximalism with intentional restraint: neon accents reserved for actionable elements, dark space backgrounds provide breathing room, heavy animations create momentum without distraction.

## Differentiation

Glassmorphism cards with neon glow effects, animated particle background, scroll-triggered entrance animations orchestrated across sections.

## Color Palette

| Token          | OKLCH                | Role                                   |
| -------------- | -------------------- | -------------------------------------- |
| background     | 0.08 0.01 280        | Deep space base                        |
| foreground     | 0.93 0.02 280        | High contrast text                     |
| card           | 0.14 0.015 280       | Glassmorphism card surface             |
| primary        | 0.72 0.24 189        | Electric blue neon accent / CTAs       |
| secondary      | 0.68 0.25 290        | Purple neon accent / highlights        |
| muted          | 0.22 0.015 280       | Subtle secondary text                  |
| accent         | 0.72 0.24 189        | Interactive highlights                 |
| destructive    | 0.65 0.19 22         | Error states                           |
| border         | 0.25 0.015 280       | Subtle dividers                        |
| input          | 0.25 0.015 280       | Form surfaces                          |
| ring           | 0.72 0.24 189        | Focus states / neon glow               |

## Typography

- Display: Space Grotesk — bold tech headers, hero text
- Body: DM Sans — UI labels, readable paragraphs
- Mono: JetBrains Mono — code/data displays
- Scale: hero `text-6xl md:text-7xl font-bold`, h2 `text-3xl md:text-5xl font-bold tracking-tight`, label `text-xs font-semibold tracking-widest uppercase`, body `text-base`

## Elevation & Depth

Glassmorphism + neon glow create layering: translucent cards (80% opacity, 16px blur) with electric blue/purple glow shadows, no dropshadow reliance, elevated glass for modals/popovers.

## Structural Zones

| Zone    | Background                | Border                          | Notes                          |
| ------- | ------------------------- | ------------------------------- | ------------------------------ |
| Header  | glassmorphism 0.14/0.8 bg | 0.25 0.015 280 top border       | Sticky, shrinks on scroll      |
| Content | 0.08 0.01 280 base        | alternates 0.14 0.015 280      | Alternating dark/dark-lighter  |
| Cards   | glassmorphism 0.14/0.8 bg | primary/secondary glow + border | Hover lift + glow intensity    |
| Footer  | 0.14 0.015 280            | gradient neon top border        | Highest visual weight zone     |

## Spacing & Rhythm

8px base unit with 2:1 cadence: 8, 16, 24, 32, 48px gaps between sections; micro-spacing 4px for inline elements; dense card grids on larger screens, single column mobile.

## Component Patterns

- Buttons: primary (neon glow on bg-primary), secondary (border neon, no fill), size-consistent with tracking-wide text
- Cards: rounded-lg, glassmorphism, hover `scale-105 shadow-neon-primary`, entrance fade-in-up on scroll
- Badges: small rounded-full, background secondary/muted, uppercase text-xs font-semibold
- Forms: input glassmorphism, focus ring primary with glow, smooth transition

## Motion

- Entrance: fade-in-up 0.6s on scroll (stagger 100ms per item), hero text typewriter effect
- Hover: cards scale-105 + glow intensity rise, buttons glow-pulse, nav links underline-slide
- Decorative: particle float 3s ease-out, rotating network orbs, carousel auto-rotate 5s smooth transition
- Choreography: all animations respect prefers-reduced-motion

## Constraints

- No pure white text; use 0.93 0.02 280 for contrast on dark
- Neon glow effects only on interactive elements and hero sections; avoid overuse
- Animations always have easing (no linear motion except rotate-slow)
- Mobile first: cards stack single column until lg breakpoint
- Glassmorphism cards maintain readability: 16px blur + 80% bg opacity

## Signature Detail

Animated neon-bordered glassmorphism cards with pulsing glow on hover — combines transparency, motion, and electric color to create unforgettable sci-fi aesthetic anchored in readable, spacious layout.
