import React, { useState } from 'react';
import { X, Layers, Compass, Sliders, Sparkles, Activity, Clock, ShieldCheck, ArrowRight, Eye, Monitor, Cpu } from 'lucide-react';
import { soundEngine } from '../utils/soundEngine';

interface ExperienceArchitectureDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCommission: () => void;
  reducedMotion?: boolean;
  onToggleReducedMotion?: () => void;
}

export const ExperienceArchitectureDrawer: React.FC<ExperienceArchitectureDrawerProps> = ({
  isOpen,
  onClose,
  onOpenCommission,
  reducedMotion = false,
  onToggleReducedMotion,
}) => {
  const [activeTab, setActiveTab] = useState<'timeline' | 'sections' | 'motion' | 'conversion' | 'benchmarks'>('timeline');
  const [testImpulse, setTestImpulse] = useState(false);
  const [springMass, setSpringMass] = useState(1.4);
  const [springStiffness, setSpringStiffness] = useState(110);
  const [springDamping, setSpringDamping] = useState(24);

  const handleTriggerImpulse = () => {
    soundEngine.playTactileChime();
    setTestImpulse(true);
    setTimeout(() => {
      setTestImpulse(false);
    }, 900);
  };

  if (!isOpen) return null;

  const timelineSteps = [
    {
      time: '0.0s — 1.6s',
      title: 'Phase 00: Spatial Calibration & Preloader Curtain',
      goal: 'Psychological decoupling from standard web noise. Calibrates telemetry coordinates and primes 55Hz audio harmonic.',
      interaction: 'Ambient progress meter; optional instant skip; tactile sound trigger.',
      physics: 'Glacial linear interpolation with cubic-bezier ease-out reveal.',
      conversionRole: 'Establishes high-luxury gravity and scarcity immediately.',
    },
    {
      time: '1.6s — 8.0s',
      title: 'Phase 01: The Zenith Entry (Hero Sanctuary)',
      goal: 'Monumental focal anchor. The visitor encounters the 3D interactive Obsidian Monolith with real-time cursor tilt.',
      interaction: '3D perspective card tilt, atmospheric lighting selector, 55Hz ambient toggle, Explore CTA.',
      physics: 'Damped inertia (mass 1.4, stiffness 110, damping 24), optical glass specular gleam.',
      conversionRole: 'Validates status: museum-level prestige, $20K–$120K commission tier clearly established.',
    },
    {
      time: '8.0s — 20.0s',
      title: 'Phase 02: Philosophical Foundation (Manifesto)',
      goal: 'Intellectual and artistic credibility. Direct declaration against "Algorithmic Banality" and "AI Slop".',
      interaction: 'Subtle scroll-linked watermark parallax, reading cadence pacing.',
      physics: 'High-contrast typography reveal, strict anti-slop axiom enforcement.',
      conversionRole: 'Patron alignment: filters out low-budget commodity seekers, galvanizes art collectors.',
    },
    {
      time: '20.0s — 40.0s',
      title: 'Phase 03: Directorial Production Runway (Methodology)',
      goal: 'De-mystifies how complex spatial computation translates into consecrated physical museum artifacts.',
      interaction: 'Interactive 4-stage pipeline tabs (Scenography → Shaders → Realtime → Vault Authentication).',
      physics: 'Active tab ring transitions, checklist hover glow, technical specification metrics.',
      conversionRole: 'Eliminates delivery risk. Shows rigorous engineering and archival-grade execution.',
    },
    {
      time: '40.0s — 75.0s',
      title: 'Phase 04: The 8 Creative Pillars & Live Shaders',
      goal: 'Interactive mastery demonstration. Visitors manipulate real-time material roughness, metallic reflection, IOR, and spring physics.',
      interaction: 'Pillar switching, live shader sliders, spring bounce trigger, hex color clipboard copy.',
      physics: 'Procedural canvas response, live slider state updating visual cards in real time.',
      conversionRole: 'Deep interactive dwell time; shifts patron from passive observer to co-curator.',
    },
    {
      time: '75.0s — 110.0s',
      title: 'Phase 05: Masterworks Gallery (Proof of Canon)',
      goal: 'Validation through institutional provenance: Audemars Piguet, Venice Biennale, Fondation Cartier.',
      interaction: 'Monochrome-to-color hover reveal, full modal curatorial dossier inspection.',
      physics: 'Aspect ratio 2.39:1 letterboxing, modal backdrop blur (95% deep black).',
      conversionRole: 'Social & institutional proof. Demonstrates completed monumental museum works.',
    },
    {
      time: '110.0s — 140.0s',
      title: 'Phase 06: Canonical Specifications & Codex Export',
      goal: 'Engineering rigor. The complete 10-domain Directorial Spec Sheet with instant Markdown export.',
      interaction: 'Live table inspection, single-click `.md` codex download for board/curator review.',
      physics: 'Subtle table row hover states, checkmark confirmation feedback.',
      conversionRole: 'Facilitates executive committee sign-off: patrons can download and share the codex internally.',
    },
    {
      time: 'Final Action',
      title: 'Phase 07: Directorial Requisition (Commission Modal)',
      goal: 'Frictionless, confidential engagement. Captures patron name, maison, sector, budget tier, and brief.',
      interaction: 'Structured form, NDA shield reassurance, archival dispatch code generation.',
      physics: 'Modal entry with spring dampening, auto-focus, success state receipt.',
      conversionRole: 'Primary conversion goal: generates high-intent qualified commission leads.',
    },
  ];

  const sectionArchitecture = [
    {
      section: '01. ZENITH / HERO',
      message: 'Astra is the premier atelier for brutalist, cinematic digital permanence.',
      layout: 'Split 7/5 desktop grid: classical display roman headline on left, 3D interactive monolith artifact on right.',
      interaction: '3D perspective rotation on cursor move; atmosphere theme switcher; Web Audio drone trigger.',
      conversionGoal: 'Establish luxury prestige & inspire exploratory scroll.',
    },
    {
      section: '02. MANIFESTO',
      message: 'We reject generic algorithmic mediocrity; digital arts must carry physical mass, inertia, and reverent silence.',
      layout: 'Asymmetrical 5/7 editorial split with background watermark and 3 structural axiom cards.',
      interaction: 'Subtle scroll reading speed, hover states on axiom blocks.',
      conversionGoal: 'Cultivate philosophical resonance with high-net-worth patrons.',
    },
    {
      section: '03. METHODOLOGY',
      message: 'Our 4-stage pipeline guarantees museum-grade fidelity and 100-year digital longevity.',
      layout: 'Horizontal stage selector cards followed by a deep-dive benchmark and deliverables matrix.',
      interaction: 'Clickable stage phases, instantaneous benchmark swapping, deliverable checklists.',
      conversionGoal: 'De-risk the $20K–$120K investment by demonstrating military-grade production rigor.',
    },
    {
      section: '04. PILLARS & DOSSIER',
      message: 'Every visual dimension—narrative, materials, lighting, motion, acoustics—is codified by mathematical laws.',
      layout: 'Horizontal pillar rail, split dossier view, live interactive shader sandbox, and color swatch matrix.',
      interaction: 'Slider controls for roughness/metallic/IOR, spring physics test button, color copy feedback.',
      conversionGoal: 'Establish technical superiority and build immense interactive dwell time.',
    },
    {
      section: '05. MASTERWORKS ARCHIVE',
      message: 'Previous works inhabit premier biennales and luxury foundations worldwide.',
      layout: '3-column responsive museum grid with 2.39:1 aspect ratio cards and curatorial inspection modal.',
      interaction: 'Hover grayscale-to-color transition, modal click with material shader breakdown.',
      conversionGoal: 'Prove track record and institutional credibility.',
    },
    {
      section: '06. CANONICAL SPECIFICATIONS',
      message: 'Astra operates with complete transparency and engineering precision.',
      layout: 'Structured 10-row matrix table with domain directives, parameters, and downloadable codex.',
      interaction: 'Directorial Codex `.md` file download trigger.',
      conversionGoal: 'Provide downloadable artifacts for institutional procurement boards.',
    },
    {
      section: '07. PRIVATE REQUISITION',
      message: 'Enter the directorial commission queue under strict non-disclosure.',
      layout: 'Clean dual-column modal dialog with budget tier selector, sector dropdown, and brief textarea.',
      interaction: 'Instant dispatch generation, archival confirmation receipt code, local persistence.',
      conversionGoal: 'Convert interested visitors into direct commission discussions.',
    },
  ];

  return (
    <div
      id="experience-architecture-backdrop"
      className="fixed inset-0 z-50 bg-[#080808]/95 backdrop-blur-2xl flex items-center justify-center p-3 sm:p-6 md:p-8 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl bg-[#0c0c0e] border border-white/10 rounded-2xl p-4 sm:p-8 md:p-10 shadow-2xl space-y-6 sm:space-y-8 my-auto max-h-[94vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="flex justify-between items-start border-b border-white/10 pb-4 sm:pb-5">
          <div>
            <div className="font-mono text-[8px] sm:text-[9px] text-[#999] uppercase tracking-[0.35em] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span>EXPERIENCE ARCHITECTURE BLUEPRINT // MMXXVI</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl text-white mt-1">
              UX/UI INTERACTION MAP
            </h2>
            <p className="font-serif italic text-xs sm:text-sm text-[#999] mt-1 font-light">
              End-to-end choreography from second 0.0s preloader curtain to the final directorial commission.
            </p>
          </div>

          <button
            id="close-architecture-drawer"
            onClick={onClose}
            className="p-2.5 min-w-[40px] min-h-[40px] flex items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#999] hover:text-white hover:bg-white/10 transition-all"
            aria-label="Close architecture map"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-2 border-b border-white/10 pb-4 overflow-x-auto scrollbar-none font-mono text-[10px] tracking-[0.2em] uppercase">
          {[
            { id: 'timeline', label: '01 Journey Timeline' },
            { id: 'sections', label: '02 Section Architecture' },
            { id: 'motion', label: '03 Motion System & Physics' },
            { id: 'conversion', label: '04 Conversion Funnel' },
            { id: 'benchmarks', label: '05 System Benchmarks' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                soundEngine.playTactileChime();
                setActiveTab(tab.id as typeof activeTab);
              }}
              className={`px-4 py-2 rounded-full transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-white text-black font-medium'
                  : 'bg-[#080808] text-[#888] hover:text-white border border-white/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab 1: Chronological Journey Timeline */}
        {activeTab === 'timeline' && (
          <div className="space-y-6">
            <p className="font-serif italic text-sm text-[#bbb] font-light">
              “Every second is calculated: pacing from initial sensory decompression to high-intent conversion.”
            </p>
            <div className="space-y-4">
              {timelineSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-[#080808] border border-white/10 hover:border-white/20 transition-colors space-y-3"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-2">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[9px] px-2 py-0.5 rounded bg-white/10 text-white tracking-wider">
                        {step.time}
                      </span>
                      <h4 className="font-serif text-base text-white">{step.title}</h4>
                    </div>
                    <span className="font-mono text-[9px] text-[#777] uppercase tracking-wider">
                      CONVERSION STAGE 0{idx + 1}
                    </span>
                  </div>

                  <p className="text-xs text-[#999] font-sans leading-relaxed font-light">
                    <strong className="text-white font-normal">Psychological Objective:</strong> {step.goal}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 font-mono text-[10px] text-[#777]">
                    <div>
                      <span className="text-[#555] block text-[8px] uppercase tracking-wider">INTERACTION</span>
                      <span className="text-[#ccc]">{step.interaction}</span>
                    </div>
                    <div>
                      <span className="text-[#555] block text-[8px] uppercase tracking-wider">PHYSICS & MOTION</span>
                      <span className="text-[#ccc]">{step.physics}</span>
                    </div>
                    <div>
                      <span className="text-[#555] block text-[8px] uppercase tracking-wider">CONVERSION OUTCOME</span>
                      <span className="text-white font-medium">{step.conversionRole}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Section Architecture Matrix */}
        {activeTab === 'sections' && (
          <div className="space-y-6">
            <div className="divide-y divide-white/10 rounded-xl bg-[#080808] border border-white/10 overflow-hidden">
              {sectionArchitecture.map((sec, idx) => (
                <div key={idx} className="p-5 space-y-3 hover:bg-white/[0.01] transition-colors">
                  <div className="flex justify-between items-center font-mono text-[10px]">
                    <span className="text-white font-medium tracking-widest">{sec.section}</span>
                    <span className="text-[#777] uppercase tracking-wider">SPECIFICATION SPEC-0{idx + 1}</span>
                  </div>
                  <h4 className="font-serif italic text-base text-white font-light">
                    “{sec.message}”
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-light text-[#999] pt-2">
                    <div>
                      <span className="font-mono text-[9px] text-[#555] uppercase block tracking-wider">LAYOUT & COMPOSITION</span>
                      <span>{sec.layout}</span>
                    </div>
                    <div>
                      <span className="font-mono text-[9px] text-[#555] uppercase block tracking-wider">INTERACTIVE TACTILITY</span>
                      <span>{sec.interaction}</span>
                    </div>
                    <div>
                      <span className="font-mono text-[9px] text-[#555] uppercase block tracking-wider">CONVERSION TARGET</span>
                      <span className="text-white font-normal">{sec.conversionGoal}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Cinematic Motion Architecture & Physics Sandbox */}
        {activeTab === 'motion' && (
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <h3 className="font-serif text-xl text-white">Cinematic Motion Architecture & Kinetics</h3>
                <p className="font-serif italic text-sm text-[#999] font-light">
                  “Physics calibrated for monumental mass, optical glass refraction, and Swiss horological snap.”
                </p>
              </div>

              {/* Reduced Motion Accessibility Status */}
              {onToggleReducedMotion && (
                <button
                  onClick={() => {
                    soundEngine.playTactileChime();
                    onToggleReducedMotion();
                  }}
                  className={`px-4 py-2 rounded-full font-mono text-[9px] tracking-[0.2em] border transition-all flex items-center gap-2 ${
                    reducedMotion
                      ? 'bg-amber-500/10 border-amber-500/40 text-amber-300'
                      : 'bg-white/5 border-white/15 text-[#bbb] hover:text-white'
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-current" />
                  <span>{reducedMotion ? 'REDUCED MOTION: ACTIVE (WCAG AA)' : 'FULL MOTION: ACTIVE'}</span>
                </button>
              )}
            </div>

            {/* Interactive Kinetic Impulse Sandbox */}
            <div className="p-6 rounded-xl bg-[#080808] border border-white/10 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-3">
                <div>
                  <span className="font-mono text-[9px] text-[#777] uppercase tracking-wider block">PHYSICS ENGINE PROBE</span>
                  <h4 className="font-serif text-lg text-white">Interactive Spring Impulse Rig</h4>
                </div>
                <button
                  onClick={handleTriggerImpulse}
                  className="px-4 py-1.5 rounded-full bg-white text-black font-mono text-[9px] uppercase tracking-[0.25em] font-medium hover:bg-white/80 transition-all flex items-center gap-1.5 self-start sm:self-auto"
                >
                  <Sparkles className="w-3 h-3 text-black" />
                  <span>Trigger Impulse</span>
                </button>
              </div>

              {/* Physical Demonstration Stage */}
              <div className="relative h-32 w-full rounded-lg bg-[#050507] border border-white/5 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-x-8 h-[1px] bg-white/10" />

                {/* Animated Physical Monolith Orb */}
                <div
                  className={`w-14 h-14 rounded-xl border border-white/40 bg-gradient-to-tr from-[#111] to-[#2a2a35] shadow-[0_10px_30px_rgba(0,0,0,0.8)] flex items-center justify-center transition-all ${
                    testImpulse
                      ? 'translate-x-32 scale-110 rotate-12 border-white'
                      : 'translate-x-0 scale-100 rotate-0'
                  }`}
                  style={{
                    transitionDuration: reducedMotion ? '0.01s' : '850ms',
                    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  <span className="font-serif italic text-white text-sm">A.</span>
                </div>

                <div className="absolute bottom-2 left-4 font-mono text-[8px] text-[#666]">
                  STATUS: {testImpulse ? 'IMPULSE DISCHARGE (14.2 N)' : 'EQUILIBRIUM REST'}
                </div>
                <div className="absolute bottom-2 right-4 font-mono text-[8px] text-[#666]">
                  DAMPING FACTOR: {springDamping} // MASS: {springMass}kg
                </div>
              </div>

              {/* Physics Sliders */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono text-[9px] pt-2">
                <div className="space-y-1.5">
                  <div className="flex justify-between text-[#888]">
                    <span>INERTIAL MASS</span>
                    <span className="text-white">{springMass} kg</span>
                  </div>
                  <input
                    type="range"
                    min="0.5"
                    max="3.0"
                    step="0.1"
                    value={springMass}
                    onChange={(e) => setSpringMass(parseFloat(e.target.value))}
                    className="w-full accent-white bg-white/10 rounded h-1 cursor-pointer"
                  />
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between text-[#888]">
                    <span>SPRING STIFFNESS</span>
                    <span className="text-white">{springStiffness} N/m</span>
                  </div>
                  <input
                    type="range"
                    min="40"
                    max="240"
                    step="10"
                    value={springStiffness}
                    onChange={(e) => setSpringStiffness(parseInt(e.target.value))}
                    className="w-full accent-white bg-white/10 rounded h-1 cursor-pointer"
                  />
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between text-[#888]">
                    <span>DAMPING COEFFICIENT</span>
                    <span className="text-white">{springDamping} Ns/m</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="50"
                    step="2"
                    value={springDamping}
                    onChange={(e) => setSpringDamping(parseInt(e.target.value))}
                    className="w-full accent-white bg-white/10 rounded h-1 cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* The 4 Canonical Motion Curves Specification */}
            <div className="space-y-4">
              <span className="font-mono text-[9px] text-[#777] uppercase tracking-wider block">CANONICAL EASING SYSTEM</span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: '01 // Cinematic Deceleration',
                    cubic: 'cubic-bezier(0.16, 1, 0.3, 1)',
                    duration: '850ms — 1600ms',
                    path: 'M 0,50 C 8,0 15,0 50,0',
                    desc: 'High initial release velocity followed by prolonged, glacial deceleration. Mimics heavy camera dollies on fluid-head tripods.',
                    usage: 'Modals, preloader curtains, 3D card tilts, hero typography entries.',
                  },
                  {
                    title: '02 // Monolith Inertia',
                    cubic: 'cubic-bezier(0.25, 1, 0.5, 1)',
                    duration: '450ms — 700ms',
                    path: 'M 0,50 C 12,0 25,0 50,0',
                    desc: 'Physical mass damping with zero overshoot. Conveys density of basalt slabs and architectural glass.',
                    usage: 'Cursor aperture lag, drawer reveals, interactive specimen orientation.',
                  },
                  {
                    title: '03 // Choreographic S-Curve',
                    cubic: 'cubic-bezier(0.77, 0, 0.175, 1)',
                    duration: '2400ms — 6000ms',
                    path: 'M 0,50 C 38,50 12,0 50,0',
                    desc: 'Harmonic sine progression. Designed for atmospheric background sweeps and particle field tides.',
                    usage: 'Volumetric light beams, film grain oscillations, beacon breathing.',
                  },
                  {
                    title: '04 // Tactile Shutter Snap',
                    cubic: 'cubic-bezier(0.4, 0, 0.2, 1)',
                    duration: '140ms — 240ms',
                    path: 'M 0,50 C 20,0 10,0 50,0',
                    desc: 'Instant mechanical feedback mimicking Swiss chronograph pushers.',
                    usage: 'Tactile sound toggles, button clicks, coordinate pill switching.',
                  },
                ].map((curve, idx) => (
                  <div key={idx} className="p-5 rounded-xl bg-[#080808] border border-white/10 space-y-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-serif text-base text-white">{curve.title}</h4>
                        <code className="font-mono text-[9px] text-[#888] block mt-0.5">{curve.cubic}</code>
                      </div>
                      <span className="font-mono text-[9px] px-2 py-0.5 rounded bg-white/5 border border-white/10 text-white tracking-widest">
                        {curve.duration}
                      </span>
                    </div>

                    <p className="text-xs text-[#999] font-light leading-relaxed">{curve.desc}</p>

                    <div className="pt-2 border-t border-white/5 flex items-center justify-between font-mono text-[9px]">
                      <span className="text-[#666]">DEPLOYMENT:</span>
                      <span className="text-[#bbb]">{curve.usage}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Scroll Choreography & Accessibility Matrix */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-5 rounded-xl bg-[#080808] border border-white/10 space-y-2">
                <span className="font-mono text-[9px] text-[#777] uppercase tracking-wider block">SMOOTH SCROLL CHOREOGRAPHY</span>
                <h4 className="font-serif text-base text-white">Pinned Sequence Rails</h4>
                <p className="text-xs text-[#999] font-light leading-relaxed">
                  Right-hand telemetry rail anchors the user’s vertical progress (0–100%) with active section pips and silky anchor jumping.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#080808] border border-white/10 space-y-2">
                <span className="font-mono text-[9px] text-[#777] uppercase tracking-wider block">CURSOR KINEMATICS</span>
                <h4 className="font-serif text-base text-white">Dual-Stage Reticle Halo</h4>
                <p className="text-xs text-[#999] font-light leading-relaxed">
                  Inner micro-dot responds at 1:1 hardware speed, while outer aperture ring lags with 0.18 spring factor, expanding to show contextual cues (`VIEW`, `DRAG`).
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#080808] border border-white/10 space-y-2">
                <span className="font-mono text-[9px] text-[#777] uppercase tracking-wider block">ACCESSIBILITY & WCAG AA</span>
                <h4 className="font-serif text-base text-white">Prefers-Reduced-Motion</h4>
                <p className="text-xs text-[#999] font-light leading-relaxed">
                  Automatically honors OS settings and in-app toggle [R], collapsing all 3D tilts and long durations into instant, clean opacity fades.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Conversion Funnel Psychology */}
        {activeTab === 'conversion' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-5 rounded-xl bg-[#080808] border border-white/10 space-y-3">
                <span className="font-mono text-[9px] tracking-widest text-[#777] block uppercase">TIER 1 // COGNITIVE ANCHOR</span>
                <h4 className="font-serif text-lg text-white">Prestige & Scarcity</h4>
                <p className="text-xs text-[#999] font-light leading-relaxed">
                  Clear $20,000–$120,000 commission scope, Zurich/Geneva/Tokyo coordinates, and zero discount sales triggers establish unmistakable elite market positioning.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#080808] border border-white/10 space-y-3">
                <span className="font-mono text-[9px] tracking-widest text-[#777] block uppercase">TIER 2 // RISK DISSOLUTION</span>
                <h4 className="font-serif text-lg text-white">Methodology Proof</h4>
                <p className="text-xs text-[#999] font-light leading-relaxed">
                  The 4-stage Production Runway and 10-domain Directorial Matrix answer institutional procurement questions before they are asked.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#080808] border border-white/10 space-y-3">
                <span className="font-mono text-[9px] tracking-widest text-[#777] block uppercase">TIER 3 // EMBODIED COGNITION</span>
                <h4 className="font-serif text-lg text-white">Tactile Engagement</h4>
                <p className="text-xs text-[#999] font-light leading-relaxed">
                  Live shader adjustment and 55Hz acoustic resonance make visitors feel the precision of the studio directly under their fingertips.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#080808] border border-white/10 space-y-3">
                <span className="font-mono text-[9px] tracking-widest text-[#777] block uppercase">TIER 4 // DISCREET CAPTURE</span>
                <h4 className="font-serif text-lg text-white">Confidential Requisition</h4>
                <p className="text-xs text-[#999] font-light leading-relaxed">
                  Confidential intake modal with automatic archival receipt code (`ASTRA-REQ-...`) delivers high-trust closure.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-[#080808] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1">
                <h4 className="font-serif text-lg text-white">Ready to initiate a directorial dialogue?</h4>
                <p className="text-xs text-[#888] font-light">
                  Directorial requisitions are protected under strict studio non-disclosure.
                </p>
              </div>
              <button
                onClick={() => {
                  onClose();
                  onOpenCommission();
                }}
                className="px-6 py-2.5 rounded-full bg-white text-black font-mono text-[10px] uppercase tracking-[0.25em] font-medium hover:bg-white/80 transition-all flex items-center gap-2 whitespace-nowrap"
              >
                <span>Launch Requisition</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* Tab 4: System Benchmarks */}
        {activeTab === 'benchmarks' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-5 rounded-xl bg-[#080808] border border-white/10 space-y-2">
                <span className="font-mono text-[9px] text-[#777] uppercase tracking-wider block">PERFORMANCE BUDGET</span>
                <div className="font-serif text-2xl text-white">60–120 FPS</div>
                <p className="text-xs text-[#999] font-light">
                  Hardware-accelerated WebGL procedural particles and canvas rendering with zero heavy external 3D asset downloads.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#080808] border border-white/10 space-y-2">
                <span className="font-mono text-[9px] text-[#777] uppercase tracking-wider block">ACOUSTIC PROFILE</span>
                <div className="font-serif text-2xl text-white">55Hz Sub-Bass</div>
                <p className="text-xs text-[#999] font-light">
                  Procedural native Web Audio API synthesis. Zero network streaming, user-consented, crystal feedback chimes.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#080808] border border-white/10 space-y-2">
                <span className="font-mono text-[9px] text-[#777] uppercase tracking-wider block">ACCESSIBILITY (WCAG)</span>
                <div className="font-serif text-2xl text-white">AAA Contrast</div>
                <p className="text-xs text-[#999] font-light">
                  #E0E0E0 and #FFFFFF against #080808 background yields an 18:1 contrast ratio, surpassing the 7:1 AAA standard.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-[#080808] border border-white/10 space-y-3 font-mono text-xs">
              <div className="text-[10px] text-white uppercase tracking-widest border-b border-white/10 pb-2">
                KEYBOARD COMMAND PALETTE
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-[#999]">
                <div>
                  <kbd className="px-2 py-1 rounded bg-white/10 text-white text-[10px] mr-2">C</kbd>
                  <span>Commission</span>
                </div>
                <div>
                  <kbd className="px-2 py-1 rounded bg-white/10 text-white text-[10px] mr-2">B</kbd>
                  <span>UX Blueprint</span>
                </div>
                <div>
                  <kbd className="px-2 py-1 rounded bg-white/10 text-white text-[10px] mr-2">M</kbd>
                  <span>Mute / Sound</span>
                </div>
                <div>
                  <kbd className="px-2 py-1 rounded bg-white/10 text-white text-[10px] mr-2">ESC</kbd>
                  <span>Close Window</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Modal Bottom Footer */}
        <div className="flex justify-between items-center pt-4 border-t border-white/10 font-mono text-[9px] text-[#777]">
          <span>DIRECTORIAL CODEX ED. 02.4 // ARCHITECTURAL SYSTEM</span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white uppercase tracking-widest transition-all"
          >
            Close Blueprint
          </button>
        </div>
      </div>
    </div>
  );
};
