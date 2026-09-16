import React, { useState } from 'react';
import { Layers, Compass, Sparkles, Shield, Cpu, Flame, CheckCircle2 } from 'lucide-react';
import { soundEngine } from '../utils/soundEngine';

interface MethodologyStage {
  phase: string;
  codename: string;
  title: string;
  tagline: string;
  leadTime: string;
  deliverables: string[];
  technicalPillars: { label: string; value: string }[];
  curatorialProse: string;
}

const STAGES: MethodologyStage[] = [
  {
    phase: 'STAGE 01',
    codename: 'ONTOLOGICAL ARCHITECTURE',
    title: 'Philosophical Scenography & Spatial Cartography',
    tagline: 'Before a single vertex is cast, we interrogate the architectural void.',
    leadTime: 'Weeks 01–03',
    curatorialProse:
      'Every commission begins with an archaeological and philosophical inquiry into the patron’s legacy. We map spatial light vectors, acoustic resonances, and narrative anchors to establish an unshakeable curatorial foundation.',
    deliverables: [
      'Narrative & Metaphysical Canon',
      'Spatial Volumetric Layout Diagrams (LiDAR / CAD)',
      'Acoustic Reverb Analysis & Frequency Profile',
      'Patron Non-Disclosure & Directorial Charter',
    ],
    technicalPillars: [
      { label: 'SPATIAL PROJECTION', value: '1:1 Volumetric Architecture Mockup' },
      { label: 'HISTORICAL INQUIRY', value: 'Archive Provenance Synthesis' },
      { label: 'CADENCE', value: '48 BPM Contemplative Rhythm' },
    ],
  },
  {
    phase: 'STAGE 02',
    codename: 'PHYSICAL TRANSMUTATION',
    title: 'Optical Shader Engineering & Material Density',
    tagline: 'Treating computational algorithms as dense, tactile physical matter.',
    leadTime: 'Weeks 04–08',
    curatorialProse:
      'We craft bespoke HLSL/GLSL shaders calibrated to real-world optical measurements. Subsurface scattering mimics obsidian volcanic glass; anisotropic brushed highlights respond to micro-scratches; liquid mercury dynamics reflect polarized light.',
    deliverables: [
      'Custom Optical Shader Libraries (Unreal 5.4 / HLSL)',
      'Subsurface Scattering & IOR Density Profiles',
      'Micro-Facet Bump & Anisotropic Scratch Maps',
      'Realtime Lighting Rig Calibration (35mm Anamorphic)',
    ],
    technicalPillars: [
      { label: 'REFRACTIVE INDEX', value: '1.54 IOR Optical Glass' },
      { label: 'RAY-TRACING DENSITY', value: 'Multi-bounce Caustic Scattering' },
      { label: 'COLOR CALIBRATION', value: 'ACEScc Wide Gamut HDR' },
    ],
  },
  {
    phase: 'STAGE 03',
    codename: 'REALTIME CHOREOGRAPHY',
    title: 'Spatial Reactivity & Generative Autonomy',
    tagline: 'The sculpture lives: breathing in response to gravity, cosmic feeds, and human proximity.',
    leadTime: 'Weeks 09–14',
    curatorialProse:
      'The artifact is never static. We integrate live telemetry feeds—from visitor LiDAR sensors to European Space Agency astronomical satellite data—ensuring the kinetic sculpture evolves perpetually without artificial loop points.',
    deliverables: [
      'Interactive Spatial Sensor Integration (LiDAR / Optical Flow)',
      'Deterministic Generative Logic Engine (Zero Loops)',
      'Native Web Audio & Spatial Acoustic Rig Synthesis',
      'High-Frame-Rate Hardware Benchmark (120 FPS at 8K)',
    ],
    technicalPillars: [
      { label: 'INPUT TELEMETRY', value: 'LiDAR Biometrics / ESA Satellite Feeds' },
      { label: 'ENGINE ARCHITECTURE', value: 'Native C++ Realtime Simulation' },
      { label: 'ACOUSTIC RESONATOR', value: '55Hz Sub-Bass Harmonic Field' },
    ],
  },
  {
    phase: 'STAGE 04',
    codename: 'PERMANENT CONSECRATION',
    title: 'Digital Vault Authentication & Physical Installation',
    tagline: 'Crystallizing ephemeral code into an unalterable permanent relic.',
    leadTime: 'Weeks 15–18',
    curatorialProse:
      'Onsite deployment in international museums, architectural biennales, or private vaults. Every piece is accompanied by a cryptographic provenance codex and an archival master drive housed in custom milled aerospace titanium.',
    deliverables: [
      'Turnkey Onsite Spatial Hardware Calibration',
      'Archival Master Drive in Milled Titanium Housing',
      'Cryptographic Lineage Certificate of Authenticity',
      'Directorial Maintenance & Restoration Guarantee',
    ],
    technicalPillars: [
      { label: 'PHYSICAL HOUSING', value: 'Aerospace Grade 5 Milled Titanium' },
      { label: 'LONGEVITY ARCHIVE', value: 'Cold-Storage Offline Redundancy' },
      { label: 'GUARANTEE', value: '100-Year Archival Curatorial Preservation' },
    ],
  },
];

export const MethodologySection: React.FC = () => {
  const [activeStageIdx, setActiveStageIdx] = useState(0);
  const activeStage = STAGES[activeStageIdx];

  const handleSelectStage = (idx: number) => {
    soundEngine.playTactileChime();
    setActiveStageIdx(idx);
  };

  return (
    <section
      id="methodology"
      className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10"
    >
      {/* Eyebrow & Headline */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="font-mono text-[10px] tracking-[0.4em] text-[#999] uppercase flex items-center gap-2 mb-3">
            <span className="w-1 h-1 rounded-full bg-white opacity-60" />
            <span>DIRECTORIAL METHODOLOGY & TIMELINE</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-white tracking-tight">
            THE PRODUCTION RUNWAY
          </h2>
        </div>
        <p className="font-serif italic text-lg sm:text-xl text-[#999] max-w-md font-light">
          “From abstract metaphysical proposition to consecrated museum-grade relic.”
        </p>
      </div>

      {/* 4-Stage Horizontal Pipeline Selector */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {STAGES.map((stage, idx) => {
          const isSelected = activeStageIdx === idx;
          return (
            <button
              key={stage.phase}
              id={`methodology-stage-btn-${idx}`}
              data-cursor="inspect"
              onClick={() => handleSelectStage(idx)}
              className={`text-left p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between space-y-4 ${
                isSelected
                  ? 'bg-[#151518] border-white/40 shadow-xl ring-1 ring-white/20'
                  : 'bg-[#0c0c0e] border-white/10 hover:border-white/25 hover:bg-white/[0.02]'
              }`}
            >
              <div className="flex justify-between items-center font-mono text-[9px] tracking-widest">
                <span className={isSelected ? 'text-white font-medium' : 'text-[#777]'}>
                  {stage.phase}
                </span>
                <span className="text-[#666]">{stage.leadTime}</span>
              </div>

              <div>
                <h3 className="font-serif text-base text-white leading-snug">
                  {stage.codename}
                </h3>
                <p className="font-mono text-[9px] text-[#888] tracking-wider mt-1 truncate">
                  {stage.title}
                </p>
              </div>

              <div className="pt-2 border-t border-white/5 flex items-center justify-between font-mono text-[9px]">
                <span className={isSelected ? 'text-white' : 'text-[#666]'}>
                  {isSelected ? 'INSPECTING STAGE' : 'VIEW SPECIFICATION'}
                </span>
                <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-white shadow-[0_0_8px_white]' : 'bg-transparent'}`} />
              </div>
            </button>
          );
        })}
      </div>

      {/* Stage Detail Deep Dive Display Card */}
      <div className="rounded-2xl bg-[#0c0c0e] border border-white/10 p-4 sm:p-6 md:p-10 shadow-2xl space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-b border-white/10 pb-8">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 font-mono text-[9px] sm:text-[10px] text-[#999]">
              <span className="px-2.5 py-0.5 rounded border border-white/20 bg-white/5 text-white uppercase tracking-widest">
                {activeStage.phase}
              </span>
              <span className="opacity-40">//</span>
              <span className="text-white tracking-[0.2em]">{activeStage.codename}</span>
              <span className="opacity-40">//</span>
              <span className="text-[#777]">{activeStage.leadTime}</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-4xl text-white tracking-tight">
              {activeStage.title}
            </h3>

            <blockquote className="font-serif italic text-lg sm:text-xl text-white/90 border-l-2 border-white/30 pl-4 py-1 font-light">
              “{activeStage.tagline}”
            </blockquote>

            <p className="text-sm sm:text-base text-[#999] font-sans leading-relaxed font-light">
              {activeStage.curatorialProse}
            </p>
          </div>

          {/* Technical Benchmarks */}
          <div className="lg:col-span-4 bg-[#080808] rounded-xl p-5 border border-white/10 space-y-3">
            <div className="font-mono text-[9px] tracking-[0.3em] text-[#888] uppercase border-b border-white/10 pb-2 flex items-center justify-between">
              <span>STAGE BENCHMARKS</span>
              <Cpu className="w-3.5 h-3.5 text-white/60" />
            </div>
            {activeStage.technicalPillars.map((p, i) => (
              <div key={i} className="flex flex-col font-mono text-xs py-1 border-b border-white/5 last:border-none">
                <span className="text-[#777] text-[9px] tracking-wider uppercase">{p.label}</span>
                <span className="text-white font-medium mt-0.5">{p.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Deliverables Checklist */}
        <div className="space-y-4">
          <div className="font-mono text-[9px] tracking-[0.3em] text-[#888] uppercase">
            CANONICAL DELIVERABLES & CERTIFICATIONS
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {activeStage.deliverables.map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-lg bg-[#080808] border border-white/10 flex items-center gap-3 font-mono text-xs text-[#E0E0E0]"
              >
                <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0" />
                <span className="font-light">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
