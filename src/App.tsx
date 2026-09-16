import React, { useState, useEffect } from 'react';
import { AtmosphereMode } from './types';
import { CinematicCanvas } from './components/CinematicCanvas';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ManifestoSection } from './components/ManifestoSection';
import { MethodologySection } from './components/MethodologySection';
import { CreativeDirectionDossier } from './components/CreativeDirectionDossier';
import { MasterworksGallery } from './components/MasterworksGallery';
import { DirectorialSpecs } from './components/DirectorialSpecs';
import { CommissionModal } from './components/CommissionModal';
import { Footer } from './components/Footer';
import { ExperienceArchitectureDrawer } from './components/ExperienceArchitectureDrawer';
import { ExperienceRail } from './components/ExperienceRail';
import { CinematicPreloader } from './components/CinematicPreloader';
import { CinematicCursor } from './components/CinematicCursor';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { soundEngine } from './utils/soundEngine';

export default function App() {
  const [atmosphere, setAtmosphere] = useState<AtmosphereMode>('obsidian');
  const [isCommissionOpen, setIsCommissionOpen] = useState<boolean>(false);
  const [isArchitectureOpen, setIsArchitectureOpen] = useState<boolean>(false);
  const [isPreloaderActive, setIsPreloaderActive] = useState<boolean>(true);
  const [reducedMotion, setReducedMotion] = useState<boolean>(false);

  // Initialize and listen to system prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setReducedMotion(true);
    }
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Global Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger shortcuts if user is typing in an input or textarea
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.tagName === 'SELECT') {
        return;
      }

      if (e.key === 'c' || e.key === 'C') {
        e.preventDefault();
        soundEngine.playTactileChime();
        setIsCommissionOpen((prev) => !prev);
      } else if (e.key === 'b' || e.key === 'B') {
        e.preventDefault();
        soundEngine.playTactileChime();
        setIsArchitectureOpen((prev) => !prev);
      } else if (e.key === 'm' || e.key === 'M') {
        e.preventDefault();
        soundEngine.playTactileChime();
        soundEngine.toggle();
      } else if (e.key === 'r' || e.key === 'R') {
        e.preventDefault();
        soundEngine.playTactileChime();
        setReducedMotion((prev) => !prev);
      } else if (e.key === 'Escape') {
        setIsCommissionOpen(false);
        setIsArchitectureOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleExplorePillars = () => {
    const el = document.getElementById('pillars');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleViewMasterworks = () => {
    const el = document.getElementById('masterworks');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#080808] text-[#E0E0E0] overflow-x-hidden selection:bg-white/20 selection:text-white font-sans">
      {/* Skip to Main Content for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:font-mono focus:text-xs focus:rounded-full focus:shadow-2xl"
      >
        Skip to main content
      </a>

      {/* Subtle Viewport Narrative Scroll Progress Bar */}
      <ScrollProgressBar reducedMotion={reducedMotion} />

      {/* Cinematic Dual-Stage Reticle Cursor */}
      <CinematicCursor reducedMotion={reducedMotion} />

      {/* Cinematic Calibration Curtain Preloader */}
      {isPreloaderActive && (
        <CinematicPreloader onComplete={() => setIsPreloaderActive(false)} />
      )}

      {/* Sophisticated Dark Ambient Colored Spheres */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-5%] w-[650px] h-[650px] bg-[#1A1A2E] rounded-full blur-[160px] opacity-30" />
        <div className="absolute bottom-[0%] right-[0%] w-[550px] h-[550px] bg-[#2E1A1A] rounded-full blur-[180px] opacity-20" />
        <div className="absolute inset-0 opacity-[0.03] sophisticated-grid-pattern" />
      </div>

      {/* Vertical Telemetry Rail (Left Side) */}
      <div className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 z-30 flex-col gap-6 items-center pointer-events-none select-none">
        <span className="text-[10px] [writing-mode:vertical-rl] rotate-180 tracking-[0.8em] opacity-30 font-mono text-[#E0E0E0]">
          VOLUME 01
        </span>
        <div className="w-[1px] h-16 bg-white/10" />
        <span className="text-[10px] font-mono opacity-50 text-[#E0E0E0]">2026</span>
      </div>

      {/* Story Experience Sequence Rail (Right Side) */}
      <ExperienceRail />

      {/* 35mm Photographic Film Grain Simulation */}
      <div className="fixed inset-0 pointer-events-none z-10 grain-overlay opacity-30" />

      {/* Cinematic Radial Vignette */}
      <div className="fixed inset-0 pointer-events-none z-10 vignette-radial" />

      {/* Realtime Procedural Canvas (Volumetric Light & Celestial Particles) */}
      <CinematicCanvas atmosphere={atmosphere} reducedMotion={reducedMotion} />

      {/* Main Studio Navigation Header */}
      <Header
        atmosphere={atmosphere}
        onAtmosphereChange={setAtmosphere}
        onOpenCommission={() => setIsCommissionOpen(true)}
        onOpenArchitecture={() => setIsArchitectureOpen(true)}
        reducedMotion={reducedMotion}
        onToggleReducedMotion={() => setReducedMotion((prev) => !prev)}
      />

      {/* Main Experience Stream */}
      <main id="main-content" className="relative z-20">
        <Hero
          onExplorePillars={handleExplorePillars}
          onViewMasterworks={handleViewMasterworks}
          onOpenCommission={() => setIsCommissionOpen(true)}
          reducedMotion={reducedMotion}
        />

        <ManifestoSection />

        <MethodologySection />

        <CreativeDirectionDossier />

        <MasterworksGallery onOpenCommission={() => setIsCommissionOpen(true)} />

        <DirectorialSpecs />
      </main>

      {/* Archival Studio Colophon Footer */}
      <div className="relative z-20">
        <Footer />
      </div>

      {/* Interactive Experience Architecture Blueprint Drawer */}
      <ExperienceArchitectureDrawer
        isOpen={isArchitectureOpen}
        onClose={() => setIsArchitectureOpen(false)}
        onOpenCommission={() => {
          setIsArchitectureOpen(false);
          setIsCommissionOpen(true);
        }}
        reducedMotion={reducedMotion}
        onToggleReducedMotion={() => setReducedMotion((prev) => !prev)}
      />

      {/* Private Commission Requisition Modal */}
      <CommissionModal
        isOpen={isCommissionOpen}
        onClose={() => setIsCommissionOpen(false)}
      />
    </div>
  );
}
