import React, { useState } from 'react';
import { CREATIVE_PILLARS, COLOR_SWATCHES, TYPOGRAPHY_SPECIMENS } from '../data/creativeDirection';
import { CreativePillar } from '../types';
import { soundEngine } from '../utils/soundEngine';
import { Sliders, Sparkles, Copy, Check, Eye, Layers, Compass, Wind, Volume2 } from 'lucide-react';

export const CreativeDirectionDossier: React.FC = () => {
  const [activePillarId, setActivePillarId] = useState<string>('narrative');
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  // Interactive Material Shader Sandbox state
  const [materialRoughness, setMaterialRoughness] = useState(0.12);
  const [materialMetallic, setMaterialMetallic] = useState(0.92);
  const [materialIOR, setMaterialIOR] = useState(1.54);

  // Interactive Motion Physics Sandbox state
  const [motionMass, setMotionMass] = useState(1.4);
  const [motionStiffness, setMotionStiffness] = useState(110);
  const [motionDamping, setMotionDamping] = useState(24);
  const [motionTrigger, setMotionTrigger] = useState(false);

  const activePillar = CREATIVE_PILLARS.find((p) => p.id === activePillarId) || CREATIVE_PILLARS[0];

  const handleCopyHex = (hex: string) => {
    soundEngine.playTactileChime();
    navigator.clipboard?.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 1800);
  };

  const handlePillarChange = (id: string) => {
    soundEngine.playTactileChime();
    setActivePillarId(id);
  };

  return (
    <section
      id="pillars"
      className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="font-mono text-[10px] tracking-[0.4em] text-[#999] uppercase flex items-center gap-2 mb-3">
            <span className="w-1 h-1 rounded-full bg-white opacity-60" />
            <span>DIRECTORIAL ARCHITECTURE & SPECIFICATIONS</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-white tracking-tight">
            THE CREATIVE PILLARS
          </h2>
        </div>
        <p className="font-serif italic text-lg sm:text-xl text-[#999] max-w-md font-light">
          “Every pixel carries mass, every shadow reveals geometry, every second commands attention.”
        </p>
      </div>

      {/* Pillar Selector Rail */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none border-b border-white/10">
        {CREATIVE_PILLARS.map((pillar) => {
          const isActive = pillar.id === activePillarId;
          return (
            <button
              key={pillar.id}
              id={`pillar-nav-btn-${pillar.id}`}
              onClick={() => handlePillarChange(pillar.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-[10px] font-mono tracking-[0.2em] uppercase transition-all duration-300 whitespace-nowrap ${
                isActive
                  ? 'bg-white/15 text-white font-medium border border-white/40 shadow-sm'
                  : 'bg-[#0c0c0e] text-[#888] hover:text-white hover:bg-white/5 border border-white/10'
              }`}
            >
              <span className={`text-[9px] ${isActive ? 'text-white' : 'opacity-50'}`}>
                {pillar.number}
              </span>
              <span>{pillar.title}</span>
            </button>
          );
        })}
      </div>

      {/* Deep-Dive Pillar Inspector Container */}
      <div className="rounded-2xl bg-[#0c0c0e] border border-white/10 p-4 sm:p-8 md:p-12 shadow-2xl space-y-12">
        {/* Top Directorial Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-b border-white/10 pb-8">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 font-mono text-[9px] sm:text-[10px] text-[#999]">
              <span className="px-2.5 py-0.5 rounded border border-white/20 bg-white/5 text-white uppercase tracking-widest">
                PILLAR {activePillar.number}
              </span>
              <span className="opacity-40">//</span>
              <span className="text-[#E0E0E0] uppercase tracking-[0.2em]">{activePillar.subtitle}</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-4xl text-white tracking-tight">
              {activePillar.title}
            </h3>

            <p className="font-serif italic text-lg sm:text-xl text-white/90 leading-relaxed font-light">
              “{activePillar.tagline}”
            </p>

            <p className="text-sm sm:text-base text-[#999] font-sans leading-relaxed max-w-2xl font-light">
              {activePillar.description}
            </p>
          </div>

          {/* Technical Specifications Grid */}
          <div className="lg:col-span-4 bg-[#080808] rounded-xl p-5 border border-white/10 space-y-3">
            <div className="font-mono text-[9px] tracking-[0.3em] text-[#888] uppercase border-b border-white/10 pb-2">
              SYSTEM PARAMETERS & METRICS
            </div>
            {activePillar.technicalSpecs.map((spec, i) => (
              <div key={i} className="flex flex-col font-mono text-xs py-1 border-b border-white/5 last:border-none">
                <span className="text-[#777] text-[9px]">{spec.label}</span>
                <span className="text-white font-medium tracking-tight mt-0.5">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Foundational Principles & Sensory Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Principles */}
          <div className="space-y-4">
            <h4 className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/80 flex items-center gap-2">
              <Compass className="w-3 h-3 text-white/60" />
              <span>Directorial Imperatives</span>
            </h4>
            <div className="space-y-3">
              {activePillar.principles.map((pr, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-3.5 rounded-lg bg-[#080808] border border-white/10 text-xs sm:text-sm text-[#ccc] font-light"
                >
                  <span className="font-mono text-[9px] text-white/50 pt-0.5">0{i + 1}</span>
                  <p className="leading-relaxed">{pr}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sensory Matrix */}
          <div className="space-y-4">
            <h4 className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/80 flex items-center gap-2">
              <Wind className="w-3 h-3 text-white/60" />
              <span>Sensory & Phenomenological Matrix</span>
            </h4>
            {activePillar.sensoryDetails ? (
              <div className="space-y-3">
                <div className="p-3.5 rounded-lg bg-[#080808] border border-white/10">
                  <span className="block font-mono text-[9px] text-[#777] uppercase tracking-wider">Visual Field</span>
                  <p className="text-xs sm:text-sm text-white mt-1 font-light">{activePillar.sensoryDetails.visual}</p>
                </div>
                <div className="p-3.5 rounded-lg bg-[#080808] border border-white/10">
                  <span className="block font-mono text-[9px] text-[#777] uppercase tracking-wider">Tactile Texture</span>
                  <p className="text-xs sm:text-sm text-white mt-1 font-light">{activePillar.sensoryDetails.tactile}</p>
                </div>
                <div className="p-3.5 rounded-lg bg-[#080808] border border-white/10">
                  <span className="block font-mono text-[9px] text-[#777] uppercase tracking-wider">Temporal Cadence</span>
                  <p className="text-xs sm:text-sm text-white mt-1 font-light">{activePillar.sensoryDetails.temporal}</p>
                </div>
              </div>
            ) : (
              <div className="p-5 rounded-lg bg-[#080808] border border-white/10 space-y-3 text-xs text-[#999] leading-relaxed font-light">
                <p>
                  Every element on Astra’s canvas is evaluated by its psychological resonance. We deliberately slow user interaction velocity to foster focused contemplation, transforming consumption into reverence.
                </p>
                <div className="flex items-center gap-2 text-white font-mono text-[10px]">
                  <Sparkles className="w-3 h-3 text-white/60" />
                  <span>Calibrated for museum collectors and luxury patrons</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Dynamic Interactive Sandboxes Depending on Selected Pillar */}
        {activePillar.id === 'typography' && (
          <div className="pt-8 border-t border-white/10 space-y-6">
            <div className="flex justify-between items-center">
              <h4 className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/80">
                LIVE TYPOGRAPHIC SPECIMENS & HIERARCHIES
              </h4>
              <span className="font-mono text-[9px] text-[#777]">RATIO: 1.333 PERFECT FOURTH</span>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {TYPOGRAPHY_SPECIMENS.map((spec, i) => (
                <div key={i} className="p-4 rounded-xl bg-[#080808] border border-white/10 space-y-2">
                  <div className="flex justify-between font-mono text-[9px] text-[#777]">
                    <span className="text-white/80 tracking-widest">{spec.role}</span>
                    <span>{spec.font} ({spec.weight})</span>
                  </div>
                  <div className={`text-xl sm:text-2xl text-white ${spec.role.includes('Serif') ? 'font-serif italic' : spec.role.includes('Monolith') ? 'font-serif font-medium' : spec.role.includes('Telemetry') ? 'font-mono text-sm' : 'font-sans'}`}>
                    {spec.sample}
                  </div>
                  <p className="text-[11px] text-[#888] pt-1 font-light">{spec.usage}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activePillar.id === 'color' && (
          <div id="chroma" className="pt-8 border-t border-white/10 space-y-6">
            <div className="flex justify-between items-center">
              <h4 className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/80">
                CHROMATIC SUBSTRATUM & SWATCH MATRIX
              </h4>
              <span className="font-mono text-[9px] text-[#777]">CLICK TO COPY HEX</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {COLOR_SWATCHES.map((swatch) => (
                <div
                  key={swatch.name}
                  onClick={() => handleCopyHex(swatch.hex)}
                  className="group cursor-pointer rounded-xl bg-[#080808] border border-white/10 p-4 hover:border-white/30 transition-all duration-300 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-8 h-8 rounded-lg shadow-inner border border-white/15"
                        style={{ backgroundColor: swatch.hex }}
                      />
                      <div>
                        <span className="font-mono text-xs text-white font-medium block">
                          {swatch.name}
                        </span>
                        <span className="font-mono text-[9px] text-[#777]">
                          {swatch.role}
                        </span>
                      </div>
                    </div>
                    <button className="text-[#777] group-hover:text-white transition-colors p-1">
                      {copiedHex === swatch.hex ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                  <p className="text-xs text-[#999] leading-relaxed font-light">{swatch.description}</p>
                  <div className="pt-2 border-t border-white/5 flex justify-between font-mono text-[9px] text-[#777]">
                    <span>HEX: {swatch.hex}</span>
                    <span>PANTONE: {swatch.pantone || 'N/A'}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activePillar.id === 'materials' && (
          <div className="pt-8 border-t border-white/10 space-y-6">
            <div className="flex justify-between items-center">
              <h4 className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/80">
                PHYSICAL SHADER & OPTICAL MATERIAL SIMULATOR
              </h4>
              <span className="font-mono text-[9px] text-[#777]">REALTIME PBR PARAMS</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#080808] p-4 sm:p-6 rounded-xl border border-white/10">
              {/* Virtual Material Sphere Preview */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center p-4 sm:p-6 bg-[#040405] rounded-xl border border-white/10">
                <div
                  className="w-40 h-40 rounded-full shadow-2xl relative transition-all duration-300"
                  style={{
                    background: `radial-gradient(circle at 35% 30%, #ffffff 0%, #a8a8b2 ${
                      (1 - materialRoughness) * 45
                    }%, #1a1a24 ${materialMetallic * 70}%, #050508 100%)`,
                    filter: `contrast(${1 + materialMetallic * 0.4})`,
                    boxShadow: `0 0 35px rgba(255, 255, 255, ${0.05 + (1 - materialRoughness) * 0.15})`,
                  }}
                >
                  <div className="absolute inset-0 rounded-full bg-white/10 opacity-40 blur-sm pointer-events-none" />
                </div>
                <div className="mt-4 text-center font-mono text-[10px] text-[#777]">
                  <span>VIRTUAL MATERIAL: SMOKED TITANIUM OBSIDIAN</span>
                </div>
              </div>

              {/* Sliders */}
              <div className="lg:col-span-7 space-y-5">
                <div className="space-y-2">
                  <div className="flex justify-between font-mono text-xs">
                    <span className="text-[#888]">SURFACE ROUGHNESS</span>
                    <span className="text-white">{materialRoughness.toFixed(2)}</span>
                  </div>
                  <input
                    type="range"
                    min="0.01"
                    max="0.8"
                    step="0.01"
                    value={materialRoughness}
                    onChange={(e) => setMaterialRoughness(parseFloat(e.target.value))}
                    className="w-full accent-white bg-white/10 rounded-lg h-1.5 cursor-pointer"
                  />
                  <span className="text-[10px] text-[#777] block font-light">
                    Controls microfacet specular glossiness and sharpness of grazing reflections.
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between font-mono text-xs">
                    <span className="text-[#888]">METALLIC / CONDUCTIVITY</span>
                    <span className="text-white">{materialMetallic.toFixed(2)}</span>
                  </div>
                  <input
                    type="range"
                    min="0.0"
                    max="1.0"
                    step="0.02"
                    value={materialMetallic}
                    onChange={(e) => setMaterialMetallic(parseFloat(e.target.value))}
                    className="w-full accent-white bg-white/10 rounded-lg h-1.5 cursor-pointer"
                  />
                  <span className="text-[10px] text-[#777] block font-light">
                    Shifts from dielectric basalt stone (0.0) to pure mirror titanium alloy (1.0).
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between font-mono text-xs">
                    <span className="text-[#888]">INDEX OF REFRACTION (IOR)</span>
                    <span className="text-white">{materialIOR.toFixed(2)}</span>
                  </div>
                  <input
                    type="range"
                    min="1.0"
                    max="2.4"
                    step="0.02"
                    value={materialIOR}
                    onChange={(e) => setMaterialIOR(parseFloat(e.target.value))}
                    className="w-full accent-white bg-white/10 rounded-lg h-1.5 cursor-pointer"
                  />
                  <span className="text-[10px] text-[#777] block font-light">
                    Snell's Law optical bending ratio: 1.54 represents pure natural volcanic glass.
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activePillar.id === 'motion' && (
          <div className="pt-8 border-t border-white/10 space-y-6">
            <div className="flex justify-between items-center">
              <h4 className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/80">
                DAMPED HARMONIC INERTIA SIMULATOR
              </h4>
              <span className="font-mono text-[9px] text-[#777]">MASS-BASED PHYSICS</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#080808] p-4 sm:p-6 rounded-xl border border-white/10">
              {/* Motion Sandbox Stage */}
              <div className="lg:col-span-6 flex flex-col items-center justify-center p-4 sm:p-8 bg-[#040405] rounded-xl border border-white/10 min-h-[220px]">
                <div
                  className={`w-28 h-28 border border-white/30 rounded-xl bg-gradient-to-br from-[#1b1b22] to-[#0c0c0f] flex items-center justify-center transition-all shadow-xl ${
                    motionTrigger ? 'scale-110 -rotate-3 border-white' : 'scale-100 rotate-0'
                  }`}
                  style={{
                    transitionDuration: `${motionMass * 0.45}s`,
                    transitionTimingFunction: `cubic-bezier(${0.2 + motionDamping * 0.01}, 0.0, ${
                      0.3 - motionStiffness * 0.001
                    }, 1.0)`,
                  }}
                >
                  <span className="font-mono text-[10px] tracking-wider text-white">
                    {motionTrigger ? 'HEAVY MASS' : 'REST STATE'}
                  </span>
                </div>

                <button
                  id="test-inertia-trigger-btn"
                  onClick={() => {
                    soundEngine.playTactileChime();
                    setMotionTrigger(!motionTrigger);
                  }}
                  className="mt-6 px-4 py-2 rounded-full border border-white/20 hover:border-white/50 hover:bg-white/10 font-mono text-[10px] tracking-[0.2em] uppercase text-white transition-all"
                >
                  TRIGGER KINETIC DISPLACEMENT
                </button>
              </div>

              {/* Physics Controls */}
              <div className="lg:col-span-6 space-y-4">
                <div className="space-y-1.5">
                  <div className="flex justify-between font-mono text-xs">
                    <span className="text-[#888]">PHYSICAL MASS (kg)</span>
                    <span className="text-white">{motionMass.toFixed(1)} kg</span>
                  </div>
                  <input
                    type="range"
                    min="0.5"
                    max="3.0"
                    step="0.1"
                    value={motionMass}
                    onChange={(e) => setMotionMass(parseFloat(e.target.value))}
                    className="w-full accent-white bg-white/10 rounded-lg h-1.5"
                  />
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between font-mono text-xs">
                    <span className="text-[#888]">SPRING STIFFNESS</span>
                    <span className="text-white">{motionStiffness}</span>
                  </div>
                  <input
                    type="range"
                    min="60"
                    max="220"
                    step="5"
                    value={motionStiffness}
                    onChange={(e) => setMotionStiffness(parseInt(e.target.value))}
                    className="w-full accent-white bg-white/10 rounded-lg h-1.5"
                  />
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between font-mono text-xs">
                    <span className="text-[#888]">DAMPING COEFFICIENT</span>
                    <span className="text-white">{motionDamping}</span>
                  </div>
                  <input
                    type="range"
                    min="12"
                    max="40"
                    step="1"
                    value={motionDamping}
                    onChange={(e) => setMotionDamping(parseInt(e.target.value))}
                    className="w-full accent-white bg-white/10 rounded-lg h-1.5"
                  />
                </div>

                <div className="p-3 bg-[#040405] rounded text-[10px] font-mono text-[#777] border border-white/5 font-light">
                  <span>VELOCITY PROFILE: Critical damping ensures ZERO bouncy overshoot. The artifact comes to rest like an architectural vault door.</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
