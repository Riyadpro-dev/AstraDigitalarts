/**
 * Astra Digital Arts - Motion System Tokens & Kinetic Constants
 * Calibrated for cinematic grandeur, physical inertia, and WCAG accessibility.
 */

export interface EasingToken {
  name: string;
  css: string;
  bezier: [number, number, number, number];
  description: string;
  typicalUsage: string;
}

export const EASING_TOKENS: Record<string, EasingToken> = {
  cinematicOut: {
    name: 'Cinematic Deceleration',
    css: 'cubic-bezier(0.16, 1, 0.3, 1)',
    bezier: [0.16, 1, 0.3, 1],
    description: 'High initial impulse followed by an extended, glacial deceleration. Mimics heavy camera dollies on oil-damped tracks.',
    typicalUsage: 'Modal reveals, full-screen curtains, page transitions, specimen tilt.',
  },
  monolithSpring: {
    name: 'Monolith Inertia',
    css: 'cubic-bezier(0.25, 1, 0.5, 1)',
    bezier: [0.25, 1, 0.5, 1],
    description: 'Heavy physical mass with minimal rebound. Conveys density of basalt, titanium, and optical crystal.',
    typicalUsage: '3D card orientation, cursor follower halo, drawer slide-overs.',
  },
  fluidSCurve: {
    name: 'Choreographic S-Curve',
    css: 'cubic-bezier(0.77, 0, 0.175, 1)',
    bezier: [0.77, 0, 0.175, 1],
    description: 'Symmetrical, contemplative ease-in-out. Ideal for looping ambient movements and continuous optical shifts.',
    typicalUsage: 'Atmospheric light slit sweeps, particle drift oscillations, beacon pulses.',
  },
  tactileSnap: {
    name: 'Tactile Shutter Snap',
    css: 'cubic-bezier(0.4, 0, 0.2, 1)',
    bezier: [0.4, 0, 0.2, 1],
    description: 'Crisp mechanical response mimicking high-end Swiss horological chronographs.',
    typicalUsage: 'Button clicks, tab switching, audio mute toggles, swatch selections.',
  },
};

export const MOTION_TIMINGS = {
  micro: 140, // Button presses, icon scale, switch pips
  swift: 240, // Hover states, badge fades, quick popovers
  deliberate: 480, // Card expansions, tab switching, image grade reveals
  ceremonial: 850, // Section entries, modal backdrops, typography reveals
  monumental: 1600, // Preloader curtain, full-screen transitions
};

export const SPRING_CONFIGS = {
  heavyMonolith: {
    mass: 1.4,
    stiffness: 90,
    damping: 22,
  },
  cursorAperture: {
    mass: 0.6,
    stiffness: 160,
    damping: 18,
  },
  tactileRebound: {
    mass: 0.3,
    stiffness: 280,
    damping: 16,
  },
};
