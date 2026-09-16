import React, { useState, useEffect } from 'react';
import { soundEngine } from '../utils/soundEngine';

interface SectionMarker {
  id: string;
  number: string;
  name: string;
}

const SECTIONS: SectionMarker[] = [
  { id: 'hero-cinematic-section', number: '01', name: 'ZENITH' },
  { id: 'manifesto', number: '02', name: 'MANIFESTO' },
  { id: 'methodology', number: '03', name: 'METHODOLOGY' },
  { id: 'pillars', number: '04', name: 'PILLARS' },
  { id: 'masterworks', number: '05', name: 'ARCHIVE' },
  { id: 'specs', number: '06', name: 'SPECIFICATIONS' },
];

export const ExperienceRail: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero-cinematic-section');
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = height > 0 ? Math.min(100, Math.round((winScroll / height) * 100)) : 0;
      setScrollPercentage(scrolled);

      // Determine active section
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTIONS[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.4) {
            setActiveSection(SECTIONS[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleJump = (id: string) => {
    soundEngine.playTactileChime();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside
      id="experience-sequence-rail"
      aria-label="Story Experience Sequence Rail"
      className="hidden xl:flex fixed right-8 top-1/2 -translate-y-1/2 z-40 flex-col items-end gap-5 select-none"
    >
      {/* Scroll Metric Badge */}
      <div className="font-mono text-[9px] tracking-[0.3em] text-[#888] flex items-center gap-2 mb-2 pr-1">
        <span className="opacity-50">CADENCE</span>
        <span className="text-white font-medium">{scrollPercentage}%</span>
      </div>

      {/* Progress Track line */}
      <div className="relative flex flex-col gap-4 items-end">
        {SECTIONS.map((sec) => {
          const isActive = activeSection === sec.id;
          return (
            <button
              key={sec.id}
              id={`rail-node-${sec.id}`}
              onClick={() => handleJump(sec.id)}
              className="group flex items-center gap-3 py-1 cursor-pointer focus:outline-none"
              title={`Jump to Section ${sec.number}: ${sec.name}`}
            >
              {/* Tooltip on hover or active */}
              <span
                className={`font-mono text-[9px] tracking-[0.25em] uppercase transition-all duration-300 whitespace-nowrap ${
                  isActive
                    ? 'text-white opacity-100 translate-x-0'
                    : 'text-[#666] opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0'
                }`}
              >
                {sec.number} // {sec.name}
              </span>

              {/* Node Indicator Pip */}
              <div
                className={`w-2 h-2 rounded-full transition-all duration-300 border flex items-center justify-center ${
                  isActive
                    ? 'border-white bg-white scale-125'
                    : 'border-white/20 bg-transparent group-hover:border-white/50 group-hover:bg-white/20'
                }`}
              />
            </button>
          );
        })}
      </div>
    </aside>
  );
};
