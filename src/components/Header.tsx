import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Sparkles, SlidersHorizontal, ArrowUpRight, Menu, X, Compass, Shield } from 'lucide-react';
import { soundEngine } from '../utils/soundEngine';
import { AtmosphereMode } from '../types';

interface HeaderProps {
  atmosphere: AtmosphereMode;
  onAtmosphereChange: (mode: AtmosphereMode) => void;
  onOpenCommission: () => void;
  onOpenArchitecture: () => void;
  reducedMotion?: boolean;
  onToggleReducedMotion?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  atmosphere,
  onAtmosphereChange,
  onOpenCommission,
  onOpenArchitecture,
  reducedMotion = false,
  onToggleReducedMotion,
}) => {
  const [isPlayingSound, setIsPlayingSound] = useState(false);
  const [timeString, setTimeString] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const unsub = soundEngine.subscribe((playing) => {
      setIsPlayingSound(playing);
    });

    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Europe/Zurich',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setTimeString(now.toLocaleTimeString('en-GB', options) + ' CET');
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);

    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      unsub();
      clearInterval(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSoundToggle = () => {
    soundEngine.playTactileChime();
    soundEngine.toggle();
  };

  const navLinks = [
    { label: '01 Manifesto', href: '#manifesto', desc: 'Axioms against Algorithmic Slop' },
    { label: '02 Methodology', href: '#methodology', desc: '4-Stage Curatorial Production Runway' },
    { label: '03 Art Direction', href: '#pillars', desc: '8 Foundational Directorial Pillars' },
    { label: '04 Masterworks', href: '#masterworks', desc: 'Curated Commissions & Spatial Canon' },
    { label: '05 Directorial Specs', href: '#specs', desc: 'System Codex & Export Matrix' },
  ];

  const handleNavClick = () => {
    soundEngine.playTactileChime();
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="main-studio-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled || mobileMenuOpen
          ? 'bg-[#080808]/95 backdrop-blur-md border-b border-white/10 py-3.5'
          : 'bg-transparent py-5 sm:py-7'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between">
        {/* Brand Identity - Sophisticated Dark Serif Italic logotype */}
        <a
          href="#"
          id="brand-logo-link"
          className="group flex flex-col focus:outline-none"
          onClick={() => soundEngine.playTactileChime()}
        >
          <span className="text-[9px] sm:text-[10px] tracking-[0.4em] font-medium opacity-50 mb-0.5 text-[#E0E0E0] uppercase font-mono">
            EST. 2018
          </span>
          <div className="text-xl sm:text-3xl font-serif italic tracking-tight text-white group-hover:text-white/80 transition-colors">
            Astra.
          </div>
        </a>

        {/* Global Studio Nav (Desktop) */}
        <nav
          id="desktop-primary-nav"
          className="hidden lg:flex items-center space-x-8 text-[10px] font-mono tracking-[0.45em] text-[#999] uppercase"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-white transition-colors py-1 relative group"
            >
              <span>{link.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white/40 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Actions & Utilities */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Coordinates & Location (Desktop) */}
          <div className="hidden xl:flex flex-col text-right font-mono text-[9px] tracking-[0.25em] text-[#999] pr-3 border-r border-white/10">
            <span className="opacity-50">ZÜRICH • 47.3769° N, 8.5417° E</span>
            <span className="text-white text-[10px] mt-0.5">{timeString}</span>
          </div>

          {/* Atmosphere Lighting Palette Switcher */}
          <div className="flex items-center bg-[#0d0d10] border border-white/10 rounded-full p-1">
            {(['obsidian', 'titanium', 'amber-aurora'] as AtmosphereMode[]).map((mode) => (
              <button
                key={mode}
                id={`atmosphere-toggle-${mode}`}
                onClick={() => {
                  soundEngine.playTactileChime();
                  onAtmosphereChange(mode);
                }}
                title={`Atmosphere: ${mode}`}
                className={`w-5 h-5 rounded-full transition-all duration-300 flex items-center justify-center ${
                  atmosphere === mode
                    ? 'scale-110 shadow-sm ring-1 ring-white/40 bg-white/10'
                    : 'opacity-40 hover:opacity-80'
                }`}
              >
                <span
                  className={`w-2.5 h-2.5 rounded-full ${
                    mode === 'obsidian'
                      ? 'bg-neutral-800 border border-white/30'
                      : mode === 'titanium'
                      ? 'bg-[#d8d8e2]'
                      : 'bg-[#e58235]'
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Spatial Web Audio Drone Switch */}
          <button
            id="soundscape-toggle-button"
            onClick={handleSoundToggle}
            className={`flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 rounded-full text-[9px] sm:text-[10px] font-mono tracking-[0.2em] border transition-all duration-300 ${
              isPlayingSound
                ? 'bg-white/10 border-white/30 text-white'
                : 'bg-[#0d0d10] border-white/10 text-[#999] hover:text-white hover:bg-white/5'
            }`}
            title="Toggle 55Hz Cinematic Ambient Resonator"
          >
            {isPlayingSound ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-white" />
                <span className="flex gap-0.5 items-end h-2.5">
                  <span className="w-0.5 bg-white h-full animate-[pulse_1.2s_infinite]" />
                  <span className="w-0.5 bg-white h-1.5 animate-[pulse_0.8s_infinite]" />
                  <span className="w-0.5 bg-white h-2 animate-[pulse_1.5s_infinite]" />
                </span>
                <span className="hidden sm:inline text-[9px] tracking-widest text-white">55Hz ON</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-[#999]" />
                <span className="hidden sm:inline text-[9px] tracking-widest">AUDIO</span>
              </>
            )}
          </button>

          {/* Reduced Motion Accessibility Toggle */}
          {onToggleReducedMotion && (
            <button
              id="motion-mode-toggle-button"
              onClick={() => {
                soundEngine.playTactileChime();
                onToggleReducedMotion();
              }}
              className={`hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[9px] font-mono tracking-[0.2em] border transition-all duration-300 ${
                reducedMotion
                  ? 'bg-amber-500/10 border-amber-500/40 text-amber-300'
                  : 'bg-[#0d0d10] border-white/10 text-[#888] hover:text-white hover:bg-white/5'
              }`}
              title="Toggle Reduced Motion Mode [Key: R]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current opacity-80" />
              <span>{reducedMotion ? 'REDUCED' : 'PHYSICS'}</span>
            </button>
          )}

          {/* Experience Architecture Blueprint Trigger */}
          <button
            id="open-architecture-button"
            onClick={() => {
              soundEngine.playTactileChime();
              onOpenArchitecture();
            }}
            className="hidden md:flex items-center gap-1.5 border border-white/10 hover:border-white/30 bg-[#0c0c0e] hover:bg-white/5 text-[#bbb] hover:text-white font-mono text-[9px] uppercase tracking-[0.25em] px-3.5 py-2 rounded-full transition-all duration-300"
            title="Inspect Interactive UX/UI Architecture Blueprint [Key: B]"
          >
            <SlidersHorizontal className="w-3 h-3 text-[#888]" />
            <span>Blueprint</span>
          </button>

          {/* Commission / Requisition CTA */}
          <button
            id="open-commission-button"
            onClick={() => {
              soundEngine.playTactileChime();
              onOpenCommission();
            }}
            className="hidden xs:flex items-center gap-1.5 sm:gap-2 border border-white/15 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.3em] sm:tracking-[0.35em] font-medium px-3 sm:px-4 py-1.5 sm:py-2 rounded-full transition-all duration-300 group"
          >
            <span>Commission</span>
            <ArrowUpRight className="w-3 h-3 text-[#999] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
          </button>

          {/* Mobile Menu Hamburger Toggle Button */}
          <button
            id="mobile-nav-toggle-btn"
            onClick={() => {
              soundEngine.playTactileChime();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="lg:hidden p-2 rounded-full border border-white/15 bg-white/5 text-white hover:bg-white/10 transition-colors focus:outline-none"
            aria-label={mobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden fixed inset-x-0 top-[57px] bg-[#080808]/98 backdrop-blur-2xl border-b border-white/15 p-6 shadow-2xl transition-all duration-300 max-h-[85vh] overflow-y-auto space-y-6"
        >
          {/* Telemetry info */}
          <div className="flex justify-between items-center pb-4 border-b border-white/10 font-mono text-[9px] tracking-[0.25em] text-[#888]">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>ZÜRICH • 47.3769° N, 8.5417° E</span>
            </span>
            <span className="text-white font-medium">{timeString}</span>
          </div>

          {/* Nav List */}
          <nav className="space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={handleNavClick}
                className="flex flex-col p-3 rounded-xl bg-[#0c0c0e] border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all group"
              >
                <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.3em] uppercase text-white font-medium">
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#666] group-hover:text-white transition-colors" />
                </div>
                <span className="font-serif italic text-xs text-[#888] mt-1 font-light">
                  {link.desc}
                </span>
              </a>
            ))}
          </nav>

          {/* Mobile Utilities Strip */}
          <div className="pt-4 border-t border-white/10 space-y-3">
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  soundEngine.playTactileChime();
                  onOpenArchitecture();
                  setMobileMenuOpen(false);
                }}
                className="flex items-center justify-center gap-2 p-2.5 rounded-lg bg-[#0c0c0e] border border-white/10 text-white font-mono text-[9px] uppercase tracking-widest hover:border-white/30 transition-all"
              >
                <SlidersHorizontal className="w-3 h-3 text-[#999]" />
                <span>Blueprint</span>
              </button>

              {onToggleReducedMotion && (
                <button
                  onClick={() => {
                    soundEngine.playTactileChime();
                    onToggleReducedMotion();
                  }}
                  className={`flex items-center justify-center gap-2 p-2.5 rounded-lg border font-mono text-[9px] uppercase tracking-widest transition-all ${
                    reducedMotion
                      ? 'bg-amber-500/10 border-amber-500/40 text-amber-300'
                      : 'bg-[#0c0c0e] border-white/10 text-[#888]'
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-current" />
                  <span>{reducedMotion ? 'Reduced' : 'Full Motion'}</span>
                </button>
              )}
            </div>

            <button
              onClick={() => {
                soundEngine.playTactileChime();
                onOpenCommission();
                setMobileMenuOpen(false);
              }}
              className="w-full py-3 rounded-xl bg-white text-black font-mono text-[10px] uppercase tracking-[0.3em] font-medium hover:bg-white/90 transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <span>Initiate Directorial Commission</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-black" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
