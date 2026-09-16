import React, { useState, useRef } from 'react';
import {
  Compass,
  Eye,
  Disc3,
  ArrowDown,
  ChevronRight,
  ShieldCheck,
  Sparkles,
  Layers,
  RotateCw,
  Sliders,
  Maximize2,
  Box,
} from 'lucide-react';
import { soundEngine } from '../utils/soundEngine';

interface HeroProps {
  onExplorePillars: () => void;
  onViewMasterworks: () => void;
  onOpenCommission: () => void;
  reducedMotion?: boolean;
}

type SpecimenMode = 'monolith' | 'gyroscope' | 'veil' | 'singularity';
type LightingAngle = 'key' | 'rim' | 'flare';

export const Hero: React.FC<HeroProps> = ({
  onExplorePillars,
  onViewMasterworks,
  onOpenCommission,
  reducedMotion = false,
}) => {
  const [monolithRotation, setMonolithRotation] = useState({ x: 0, y: 0 });
  const [cursorPos, setCursorPos] = useState({ x: 50, y: 50 });
  const [activeSpecimen, setActiveSpecimen] = useState<SpecimenMode>('monolith');
  const [lightingMode, setLightingMode] = useState<LightingAngle>('key');
  const [isAutoSpinning, setIsAutoSpinning] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isAutoSpinning || reducedMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMonolithRotation({ x: y * -16, y: x * 20 });
    setCursorPos({
      x: Math.round(((e.clientX - rect.left) / rect.width) * 100),
      y: Math.round(((e.clientY - rect.top) / rect.height) * 100),
    });
  };

  const handleMouseLeave = () => {
    if (!isAutoSpinning && !reducedMotion) {
      setMonolithRotation({ x: 0, y: 0 });
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (isAutoSpinning || reducedMotion || !cardRef.current) return;
    const touch = e.touches[0];
    const rect = cardRef.current.getBoundingClientRect();
    const x = (touch.clientX - rect.left) / rect.width - 0.5;
    const y = (touch.clientY - rect.top) / rect.height - 0.5;
    setMonolithRotation({ x: Math.max(-20, Math.min(20, y * -20)), y: Math.max(-25, Math.min(25, x * 25)) });
    setCursorPos({
      x: Math.round(Math.max(0, Math.min(100, ((touch.clientX - rect.left) / rect.width) * 100))),
      y: Math.round(Math.max(0, Math.min(100, ((touch.clientY - rect.top) / rect.height) * 100))),
    });
  };

  const handleTouchEnd = () => {
    if (!isAutoSpinning && !reducedMotion) {
      setMonolithRotation({ x: 0, y: 0 });
    }
  };

  const specimenData = {
    monolith: {
      name: 'THE OBSIDIAN MONOLITH',
      code: 'RELIC // SPEC-001',
      subtitle: 'Volumetric Optical Glass & Basalt Slab',
      ior: '1.54 IOR',
      roughness: '0.04',
      scale: '3.2m Monolith',
      renderEngine: 'ACEScc Raymarch',
    },
    gyroscope: {
      name: 'THE CHRONOS GYROSCOPE',
      code: 'HOROLOGY // SPEC-002',
      subtitle: 'Kinetic Titanium Tourbillon & Balance Spring',
      ior: '2.42 Diamond',
      roughness: '0.12',
      scale: '1:1 Mechanical Rig',
      renderEngine: '120 FPS Realtime Physics',
    },
    veil: {
      name: 'THE CELESTIAL VEIL',
      code: 'SCENOGRAPHY // SPEC-003',
      subtitle: 'Liquid Mercury Caustics & Spatial Mesh',
      ior: '1.33 Fluid',
      roughness: '0.01',
      scale: '14m Biennale Canopy',
      renderEngine: 'Anamorphic 2.39:1',
    },
    singularity: {
      name: 'SOLARIS SINGULARITY',
      code: 'COSMOS // SPEC-004',
      subtitle: 'Gravitational Accretion Prism & Radiant Corona',
      ior: '3.18 Gravitational',
      roughness: '0.02',
      scale: '8.4m Heliographic Ring',
      renderEngine: 'Photonic Raytrace',
    },
  };

  const currentSpecimen = specimenData[activeSpecimen];

  const handleSwitchSpecimen = (mode: SpecimenMode) => {
    soundEngine.playTactileChime();
    setActiveSpecimen(mode);
  };

  const toggleLightingMode = (mode: LightingAngle) => {
    soundEngine.playTactileChime();
    setLightingMode(mode);
  };

  return (
    <section
      id="hero-cinematic-section"
      className="relative min-h-screen flex flex-col justify-between pt-28 sm:pt-32 pb-16 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Top Editorial Eyebrow & Institutional Telemetry */}
      <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-[9px] tracking-[0.35em] text-[#888] border-b border-white/10 pb-4 select-none">
        <div className="flex items-center gap-3">
          <span className="inline-block w-1.5 h-1.5 bg-white rounded-full opacity-75 animate-pulse" />
          <span className="text-white font-medium">ASTRA DIGITAL ARTS</span>
          <span className="opacity-30 hidden sm:inline">//</span>
          <span className="opacity-60 hidden sm:inline">STUDIO DIRECTORIAL SALON MMXXVI</span>
        </div>

        <div className="hidden lg:flex items-center gap-6 opacity-60 text-[8px] tracking-[0.4em]">
          <span>GENÈVE</span>
          <span>•</span>
          <span>TOKYO</span>
          <span>•</span>
          <span>NEW YORK</span>
          <span>•</span>
          <span>MILAN</span>
        </div>

        <div className="text-right text-[#bbb]">
          <span>LAT 47.3769° N // LONG 8.5417° E</span>
        </div>
      </div>

      {/* Main Hero Spatial Canvas (Asymmetric 7/5 Layout) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center my-auto py-8 sm:py-12">
        {/* Left Column: Monumental Classical Typography & Value Proposition */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
          <div className="flex items-start">
            {/* Monumental Vertical Hairline Guide */}
            <div className="w-[1px] h-36 bg-gradient-to-b from-white/60 via-white/20 to-transparent mr-6 sm:mr-10 hidden sm:block flex-shrink-0" />

            <div className="flex flex-col space-y-4">
              {/* Category Eyebrow */}
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-mono tracking-[0.45em] uppercase text-[#aaa] flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-white opacity-60" />
                  Bespoke Digital Masterworks & Spatial Scenography
                </span>
              </div>

              {/* Main Monumental Headline */}
              <h1 className="text-4xl xs:text-5xl sm:text-7xl lg:text-[92px] leading-[0.92] font-serif tracking-tight text-white">
                Astra
                <br />
                <span className="sm:ml-8 md:ml-12 text-[#666] italic font-light">Digital Arts</span>
              </h1>

              {/* Sub-headline with Strict 65-Character Line Measure */}
              <div className="flex items-start gap-4 sm:gap-5 pt-3">
                <div className="h-[1px] w-10 sm:w-24 bg-white/20 mt-3 flex-shrink-0" />
                <p className="max-w-lg text-xs sm:text-base leading-relaxed text-[#999] font-light">
                  Directorial scenography and kinetic computational sculptures conceived for international biennales,
                  haute luxury maisons, and permanent private vaults.
                </p>
              </div>
            </div>
          </div>

          {/* Action CTAs: Requisition, Archive, and Production Blueprint */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 sm:ml-8 md:ml-12 pt-2">
            <button
              id="hero-initiate-requisition-btn"
              onClick={() => {
                soundEngine.playTactileChime();
                onOpenCommission();
              }}
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white text-black font-mono text-[10px] uppercase tracking-[0.3em] font-medium transition-all duration-300 flex items-center justify-center gap-2.5 shadow-xl hover:bg-white/90 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Sparkles className="w-3.5 h-3.5 text-black" />
              <span>Initiate Commission</span>
            </button>

            <button
              id="hero-view-archive-btn"
              onClick={() => {
                soundEngine.playTactileChime();
                onViewMasterworks();
              }}
              className="w-full sm:w-auto px-6 py-3.5 rounded-full border border-white/15 hover:border-white/40 bg-[#0c0c0e] hover:bg-white/5 text-white font-mono text-[10px] uppercase tracking-[0.3em] transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              <Eye className="w-3.5 h-3.5 text-[#888] group-hover:text-white transition-colors" />
              <span>Directorial Archive</span>
            </button>

            <button
              id="hero-explore-pillars-btn"
              onClick={() => {
                soundEngine.playTactileChime();
                onExplorePillars();
              }}
              className="w-full sm:w-auto px-5 py-3 rounded-full border border-white/10 hover:border-white/25 text-[#888] hover:text-white font-mono text-[9px] uppercase tracking-[0.25em] transition-all duration-300 flex items-center justify-center gap-1.5"
            >
              <span>Explore Pillars</span>
              <ChevronRight className="w-3 h-3 text-[#666]" />
            </button>
          </div>

          {/* Luxury Atelier Scarcity & Prestige Metrics */}
          <div className="grid grid-cols-1 xs:grid-cols-3 gap-4 sm:gap-6 pt-6 sm:ml-8 md:ml-12 border-t border-white/10 font-mono text-[9px]">
            <div className="p-3 xs:p-0 rounded-xl xs:rounded-none bg-[#0c0c0e]/50 xs:bg-transparent border border-white/5 xs:border-none">
              <span className="text-[#666] block tracking-widest uppercase text-[8px] mb-1">
                MIN. COMMISSION
              </span>
              <span className="text-white font-medium text-xs sm:text-sm tracking-wider">
                $20,000 USD
              </span>
              <span className="text-[#555] block text-[8px] mt-0.5">Bespoke Production</span>
            </div>

            <div className="p-3 xs:p-0 rounded-xl xs:rounded-none bg-[#0c0c0e]/50 xs:bg-transparent border border-white/5 xs:border-none">
              <span className="text-[#666] block tracking-widest uppercase text-[8px] mb-1">
                ANNUAL CADENCE
              </span>
              <span className="text-white font-medium text-xs sm:text-sm tracking-wider">
                4 Commissions
              </span>
              <span className="text-[#555] block text-[8px] mt-0.5">Directorial Scarcity</span>
            </div>

            <div className="p-3 xs:p-0 rounded-xl xs:rounded-none bg-[#0c0c0e]/50 xs:bg-transparent border border-white/5 xs:border-none">
              <span className="text-[#666] block tracking-widest uppercase text-[8px] mb-1">
                PROVENANCE
              </span>
              <span className="text-white font-medium text-xs sm:text-sm tracking-wider">
                100-Year Relic
              </span>
              <span className="text-[#555] block text-[8px] mt-0.5">Cold Storage Vault</span>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive 3D Monolith Relic Specimen */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center gap-6 w-full">
          <div
            ref={cardRef}
            id="interactive-hero-monolith-card"
            data-cursor="inspect"
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className={`relative w-full max-w-md min-h-[380px] sm:aspect-[4/5] rounded-2xl bg-[#0c0c0e] p-4 sm:p-6 border border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.9)] transition-transform duration-200 ease-out flex flex-col justify-between overflow-hidden group select-none ${
              isAutoSpinning ? 'animate-pulse' : ''
            }`}
            style={{
              transform: reducedMotion
                ? 'none'
                : `perspective(1200px) rotateX(${monolithRotation.x}deg) rotateY(${monolithRotation.y}deg)`,
            }}
          >
            {/* Dynamic Cursor Light Beam Reflection across glass surface */}
            <div
              className="absolute inset-0 pointer-events-none opacity-40 group-hover:opacity-75 transition-opacity duration-500"
              style={{
                background: `radial-gradient(circle 240px at ${cursorPos.x}% ${cursorPos.y}%, rgba(255,255,255,0.08), transparent 80%)`,
              }}
            />

            {/* Specimen Card Top Telemetry */}
            <div className="flex justify-between items-center z-10 font-mono text-[9px] tracking-[0.3em] text-[#888] border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <Disc3 className="w-3.5 h-3.5 text-white/80 animate-spin" style={{ animationDuration: '6s' }} />
                <span className="text-white font-medium tracking-widest">{currentSpecimen.code}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[8px] text-[#666] uppercase">{currentSpecimen.renderEngine}</span>
              </div>
            </div>

            {/* Interactive Lighting Mode Quick Controls */}
            <div className="flex items-center justify-center gap-2 z-10 font-mono text-[8px] tracking-[0.2em] py-1">
              <span className="text-[#555]">LIGHT RIG:</span>
              {(['key', 'rim', 'flare'] as LightingAngle[]).map((mode) => (
                <button
                  key={mode}
                  onClick={() => toggleLightingMode(mode)}
                  className={`px-2 py-0.5 rounded transition-all uppercase ${
                    lightingMode === mode
                      ? 'bg-white/15 text-white border border-white/30'
                      : 'text-[#666] hover:text-white border border-transparent'
                  }`}
                >
                  {mode}
                </button>
              ))}
            </div>

            {/* Center Monumental 3D Relic Sculpture */}
            <div className="relative my-auto flex flex-col items-center justify-center py-4">
              {/* Central Geometric Monolith Core */}
              <div
                className={`relative w-44 h-64 border rounded-xl overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.95)] flex items-center justify-center transition-all duration-700 ${
                  lightingMode === 'key'
                    ? 'border-white/25 bg-gradient-to-tr from-[#080808] via-[#111116] to-[#1f1f26]'
                    : lightingMode === 'rim'
                    ? 'border-white/40 bg-gradient-to-b from-[#050507] via-[#09090c] to-[#14141a]'
                    : 'border-white/30 bg-gradient-to-tl from-[#080808] via-[#181820] to-[#252530]'
                }`}
              >
                {/* Diagonal Specular Sheen across Monolith */}
                <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_35%,rgba(255,255,255,0.12)_48%,rgba(255,255,255,0.28)_50%,transparent_53%)] group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

                {/* Anamorphic Flare horizontal streak when in 'flare' lighting mode */}
                {lightingMode === 'flare' && (
                  <div className="absolute inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent top-1/2 -translate-y-1/2 animate-pulse" />
                )}

                {/* Concentric Sacred Inscriptions by Specimen */}
                {activeSpecimen === 'monolith' && (
                  <div className="relative flex items-center justify-center">
                    <div className="w-24 h-24 border border-white/20 rotate-45 flex items-center justify-center relative">
                      <div className="w-16 h-16 border border-white/40 -rotate-45 flex items-center justify-center bg-white/[0.02]">
                        <span className="font-serif italic text-3xl text-white font-normal">A.</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeSpecimen === 'gyroscope' && (
                  <div className="relative flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full border border-white/30 border-dashed animate-spin" style={{ animationDuration: '10s' }} />
                    <div className="absolute w-16 h-16 rounded-full border border-white/50 border-t-transparent animate-spin" style={{ animationDuration: '4s' }} />
                    <div className="absolute w-8 h-8 rounded-full border border-white/80 flex items-center justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-white" />
                    </div>
                  </div>
                )}

                {activeSpecimen === 'veil' && (
                  <div className="relative flex items-center justify-center w-full h-full p-4">
                    <div className="w-28 h-28 border border-white/20 rounded-full flex items-center justify-center">
                      <div className="w-20 h-20 border border-white/40 rounded-full animate-pulse" />
                      <div className="absolute font-serif italic text-2xl text-white">Ψ</div>
                    </div>
                  </div>
                )}

                {activeSpecimen === 'singularity' && (
                  <div className="relative flex items-center justify-center w-full h-full p-4">
                    <div className="w-24 h-24 rounded-full border border-amber-500/50 border-dashed animate-spin" style={{ animationDuration: '14s' }} />
                    <div className="absolute w-16 h-16 rounded-full border border-white/40 animate-ping opacity-40" style={{ animationDuration: '3s' }} />
                    <div className="absolute w-8 h-8 rounded-full bg-white/90 shadow-[0_0_24px_rgba(255,255,255,0.9)] flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-black" />
                    </div>
                  </div>
                )}

                {/* Inscribed Bottom Subsurface Parameters */}
                <div className="absolute bottom-3 left-3 right-3 flex justify-between font-mono text-[8px] text-[#777] border-t border-white/10 pt-1.5">
                  <span>{currentSpecimen.ior}</span>
                  <span className="text-white/80">ROUGH: {currentSpecimen.roughness}</span>
                </div>
              </div>

              {/* Specimen Title & Subtitle */}
              <div className="mt-4 text-center space-y-1">
                <h4 className="font-serif text-sm text-white tracking-wide">
                  {currentSpecimen.name}
                </h4>
                <p className="font-serif italic text-xs text-[#888] font-light">
                  “{currentSpecimen.subtitle}”
                </p>
              </div>
            </div>

            {/* Specimen Switcher Ribbon (Direct User Interactivity) */}
            <div className="z-10 pt-3 border-t border-white/10 grid grid-cols-4 gap-1 text-center font-mono text-[8px] tracking-[0.1em]">
              {(['monolith', 'gyroscope', 'veil', 'singularity'] as SpecimenMode[]).map((mode, i) => (
                <button
                  key={mode}
                  id={`hero-specimen-btn-${mode}`}
                  onClick={() => handleSwitchSpecimen(mode)}
                  className={`py-1 px-1 rounded transition-all uppercase truncate ${
                    activeSpecimen === mode
                      ? 'bg-white text-black font-medium'
                      : 'text-[#777] hover:text-white bg-white/5'
                  }`}
                >
                  0{i + 1} // {mode.slice(0, 4)}
                </button>
              ))}
            </div>

            {/* Card Footer Parameters */}
            <div className="z-10 pt-2 flex justify-between items-center font-mono text-[8px] text-[#666]">
              <span>SCALE: {currentSpecimen.scale}</span>
              <span className="text-[#888]">DRAG TO TILT VIEW</span>
            </div>
          </div>

          {/* Circular Architectural "ENTER" Exploration Portal */}
          <div
            id="hero-enter-portal-btn"
            data-cursor="enter"
            onClick={() => {
              soundEngine.playTactileChime();
              onExplorePillars();
            }}
            className="w-24 h-24 rounded-full border border-white/10 flex items-center justify-center p-1.5 group cursor-pointer hover:border-white/40 hover:scale-105 transition-all duration-300"
            title="Enter Directorial Pillars"
          >
            <div className="w-full h-full rounded-full border border-white/5 flex flex-col items-center justify-center text-[9px] tracking-[0.4em] font-mono font-medium bg-white/5 group-hover:bg-white/10 text-white transition-colors">
              <span>ENTER</span>
              <span className="text-[7px] text-[#777] tracking-widest mt-0.5">MMXXVI</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Telemetry Bar: Coordinates, Live Epoch, and Scroll Cue */}
      <div className="flex justify-between items-end border-t border-white/10 pt-4 font-mono text-[9px] tracking-[0.3em] text-[#888] select-none">
        <div className="flex items-center gap-8">
          <div className="flex flex-col">
            <span className="text-[8px] text-[#555] mb-0.5">COORDINATES</span>
            <span className="text-white text-[10px]">47.3769° N, 8.5417° E</span>
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="text-[8px] text-[#555] mb-0.5">LATEST CANONICAL RELEASE</span>
            <span className="text-[#ccc] text-[10px]">THE OBSIDIAN MONOLITH</span>
          </div>
          <div className="hidden md:flex flex-col">
            <span className="text-[8px] text-[#555] mb-0.5">DIRECTORIAL STATUS</span>
            <span className="text-emerald-400 text-[10px]">ACCEPTING Q4 COMMISSIONS</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex flex-col items-end">
            <span className="text-[8px] text-[#666] mb-0.5">SCROLL TO COMMENCE</span>
            <div className="w-[1px] h-6 bg-white/30" />
          </div>
          <a
            href="#manifesto"
            onClick={() => soundEngine.playTactileChime()}
            className="p-2 rounded-full border border-white/10 hover:border-white/30 bg-white/5 text-[#bbb] hover:text-white transition-all duration-300"
            aria-label="Scroll to Manifesto Section"
          >
            <ArrowDown className="w-3.5 h-3.5 animate-bounce opacity-80" />
          </a>
        </div>
      </div>
    </section>
  );
};
