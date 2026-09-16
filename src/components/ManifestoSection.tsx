import React, { useState } from 'react';
import { CREATIVE_CONCEPT } from '../data/creativeDirection';
import { Shield, Sparkles, Sliders, Layers, Compass, CheckCircle2, ChevronRight } from 'lucide-react';
import { soundEngine } from '../utils/soundEngine';

interface AxiomDetail {
  id: string;
  code: string;
  title: string;
  formula: string;
  summary: string;
  doctrine: string[];
  studioApplication: string;
}

const AXIOMS: AxiomDetail[] = [
  {
    id: 'geometry',
    code: 'AXIOM 01',
    title: 'Sacred Geometry & Ratio',
    formula: 'Φ = (1 + √5) / 2 ≈ 1.6180339887...',
    summary:
      'Proportions guided by the Golden Ratio and CinemaScope 2.39:1 anamorphic balance, commanding natural optical stillness.',
    doctrine: [
      'Visual focal weights conform strictly to logarithmic Fibonacci spiral coordinates.',
      'CinemaScope 2.39:1 horizon planes evoke cinematic gravity and architectural breadth.',
      'Every negative space void carries equal structural tension to solid geometries.',
    ],
    studioApplication:
      'Used across all spatial installations to dictate spectator eye movement, focal depth planes, and gallery viewport dimensions.',
  },
  {
    id: 'physics',
    code: 'AXIOM 02',
    title: 'Physically Plausible Light',
    formula: 'fr(ωi, ωo) = (D · F · G) / [4 · (n · ωi) · (n · ωo)]',
    summary:
      'Every reflection, shadow cast, and surface roughness honors real-world bidirectional optical physics. Computational art that feels cold and tactile.',
    doctrine: [
      'Cook-Torrance microfacet BRDF with real-world complex refractive index (IOR 1.54).',
      'Volumetric Rayleigh and Mie atmospheric scattering calibrated for 35mm film emulsions.',
      'Zero fake omnidirectional drop-shadows; light always emanates from an authentic cosmic or physical vector.',
    ],
    studioApplication:
      'Custom HLSL / GLSL real-time ray-marching shaders driving the Obsidian Monolith and all spatial holographic projections.',
  },
  {
    id: 'inertia',
    code: 'AXIOM 03',
    title: 'Weighted Harmonic Inertia',
    formula: 'm(d²x/dt²) + c(dx/dt) + kx = F(t)  [m=1.4, c=24, k=110]',
    summary:
      'Interfaces and 3D masses react with substantial physical density and hydraulic resistance. Movement signifies permanent monumental transition.',
    doctrine: [
      'High mass (m=1.4) paired with critical damping eliminates all playful rubber-banding.',
      'Cubic-bezier(0.16, 1, 0.3, 1) high-impulse launch with prolonged, glacial settling.',
      'Auditory sub-bass feedback (55Hz) synchronized directly to kinetic displacement velocity.',
    ],
    studioApplication:
      'Governs all modal reveals, cursor follower springs, preloader curtain shutters, and gallery transitions.',
  },
];

export const ManifestoSection: React.FC = () => {
  const [activeAxiomId, setActiveAxiomId] = useState<string>('geometry');

  const activeAxiom = AXIOMS.find((a) => a.id === activeAxiomId) || AXIOMS[0];

  const handleSelectAxiom = (id: string) => {
    soundEngine.playTactileChime();
    setActiveAxiomId(id);
  };

  return (
    <section
      id="manifesto"
      className="py-28 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10 relative"
    >
      {/* Background Section Watermark */}
      <div className="absolute right-6 top-16 select-none pointer-events-none opacity-[0.02] font-serif italic text-9xl md:text-[200px] text-right leading-none text-white">
        Astra.
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Directorial Lead */}
        <div className="lg:col-span-5 space-y-6">
          <div className="font-mono text-[10px] tracking-[0.4em] text-[#999] uppercase flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-white opacity-80 animate-pulse" />
            <span>DIRECTORIAL CREATIVE MANIFESTO</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            AGAINST THE
            <br />
            <span className="italic text-[#888]">Algorithmic</span>
            <br />
            BANALITY
          </h2>

          <div className="p-6 rounded-2xl bg-[#0c0c0e] border border-white/15 space-y-3 shadow-xl">
            <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.25em] text-white">
              <Shield className="w-3.5 h-3.5 text-white/70" />
              <span>THE ANTI-SLOP DOCTRINE</span>
            </div>
            <p className="text-xs text-[#999] leading-relaxed font-light">
              We formally ban purple-cyan SaaS gradients, cookie-cutter cards inside cards, fake AI buzzword overlays, and hyperactivity. Luxury is rooted in confidence: knowing when to let silence speak.
            </p>
          </div>
        </div>

        {/* Right Column: Narrative Prose & Interactive Axioms */}
        <div className="lg:col-span-7 space-y-10">
          <p className="font-serif text-2xl sm:text-3xl text-white font-light leading-relaxed">
            {CREATIVE_CONCEPT.manifestoLead}
          </p>

          <p className="text-[#999] font-sans text-base sm:text-lg leading-relaxed font-light">
            {CREATIVE_CONCEPT.narrativeCore}
          </p>

          {/* Three Structural Axiom Selector Tabs */}
          <div className="pt-6 border-t border-white/10 space-y-6">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] tracking-[0.3em] text-[#888] uppercase">
                DIRECTORIAL MATHEMATICAL AXIOMS
              </span>
              <span className="font-mono text-[9px] text-[#555] tracking-widest">
                CLICK TO INSPECT FORMULAE
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {AXIOMS.map((axiom) => {
                const isActive = axiom.id === activeAxiomId;
                return (
                  <button
                    key={axiom.id}
                    id={`axiom-tab-${axiom.id}`}
                    onClick={() => handleSelectAxiom(axiom.id)}
                    className={`p-4 rounded-xl border text-left transition-all duration-300 font-mono flex flex-col justify-between gap-3 ${
                      isActive
                        ? 'bg-[#151518] border-white/40 shadow-lg'
                        : 'bg-[#0c0c0e] border-white/10 hover:border-white/25 text-[#777]'
                    }`}
                  >
                    <div className="flex justify-between items-center w-full">
                      <span className={`text-[9px] tracking-[0.3em] ${isActive ? 'text-white' : 'text-[#666]'}`}>
                        {axiom.code}
                      </span>
                      <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-white' : 'bg-transparent'}`} />
                    </div>
                    <div className={`font-serif text-base tracking-wide ${isActive ? 'text-white' : 'text-[#888]'}`}>
                      {axiom.title}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Axiom Deep-Dive Card */}
            <div className="p-4 sm:p-6 rounded-2xl bg-[#0c0c0e] border border-white/15 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4">
                <div className="font-mono text-xs text-white tracking-wider flex items-center gap-2">
                  <Compass className="w-3.5 h-3.5 text-[#aaa]" />
                  <span>{activeAxiom.title}</span>
                </div>
                <div className="font-mono text-[9px] sm:text-[10px] text-[#C5A059] bg-[#C5A059]/10 border border-[#C5A059]/20 px-3 py-1 rounded-full w-fit max-w-full overflow-x-auto">
                  {activeAxiom.formula}
                </div>
              </div>

              <p className="text-sm text-[#bbb] font-light leading-relaxed">
                {activeAxiom.summary}
              </p>

              <div className="space-y-2 pt-2">
                <span className="font-mono text-[9px] tracking-[0.25em] text-[#777] uppercase block">
                  CANONICAL RULES:
                </span>
                <ul className="space-y-1.5">
                  {activeAxiom.doctrine.map((rule, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-[#999] font-light">
                      <CheckCircle2 className="w-3.5 h-3.5 text-white/50 shrink-0 mt-0.5" />
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 border-t border-white/5 font-mono text-[10px] text-[#666] flex items-center gap-2">
                <span className="text-[#888]">APPLICATION:</span>
                <span>{activeAxiom.studioApplication}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
