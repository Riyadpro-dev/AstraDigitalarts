import React, { useState, useEffect } from 'react';
import { Sparkles, Disc3 } from 'lucide-react';
import { soundEngine } from '../utils/soundEngine';

interface CinematicPreloaderProps {
  onComplete: () => void;
}

export const CinematicPreloader: React.FC<CinematicPreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [phaseText, setPhaseText] = useState('CALIBRATING VOLUMETRIC ENGINES');
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const phases = [
      { at: 15, text: 'SYNCHRONIZING COORDINATES // 47.3769° N, 8.5417° E' },
      { at: 42, text: 'COMPUTING 3D OPTICAL REFRACTIONS & IOR 1.54' },
      { at: 75, text: 'ENGAGING 55Hz ACOUSTIC HARMONIC FIELD' },
      { at: 92, text: 'OPENING SACRED MONOLITH VAULT' },
      { at: 100, text: 'DIRECTORIAL MATRIX READY // ZENITH ENGAGED' },
    ];

    const startTime = Date.now();
    const duration = 1600; // 1.6s cinematic reveal

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const rawProgress = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(rawProgress);

      const matchedPhase = [...phases].reverse().find((p) => rawProgress >= p.at);
      if (matchedPhase) {
        setPhaseText(matchedPhase.text);
      }

      if (rawProgress >= 100) {
        clearInterval(timer);
        setIsFading(true);
        setTimeout(() => {
          onComplete();
        }, 500);
      }
    }, 28);

    return () => clearInterval(timer);
  }, [onComplete]);

  const handleSkip = () => {
    soundEngine.playTactileChime();
    setIsFading(true);
    setTimeout(() => {
      onComplete();
    }, 300);
  };

  return (
    <div
      id="cinematic-curtain-preloader"
      className={`fixed inset-0 z-[100] bg-[#080808] flex flex-col justify-between p-8 sm:p-14 transition-opacity duration-700 select-none ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Top Telemetry Header */}
      <div className="flex justify-between items-center font-mono text-[9px] tracking-[0.35em] text-[#777]">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          <span className="text-white">ASTRA DIGITAL ARTS</span>
          <span className="opacity-40">// DIRECTORIAL REVEAL</span>
        </div>
        <div>
          <span className="opacity-50">CANONICAL CODEX MMXXVI</span>
        </div>
      </div>

      {/* Center Monumental Monolith Mark & Calibrator */}
      <div className="my-auto flex flex-col items-center justify-center text-center space-y-8">
        <div className="relative">
          {/* Concentric Calibration Circles */}
          <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border border-white/10 flex items-center justify-center relative">
            <div className="absolute inset-0 rounded-full border border-white/20 border-t-white animate-spin" style={{ animationDuration: '3s' }} />
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-white/10 flex items-center justify-center bg-white/[0.02]">
              <span className="font-serif italic text-2xl sm:text-3xl text-white font-normal">A.</span>
            </div>
          </div>
        </div>

        <div className="space-y-3 max-w-md">
          <h2 className="font-serif text-xl sm:text-2xl text-white tracking-widest uppercase">
            Astra Digital Arts
          </h2>
          <p className="font-mono text-[10px] tracking-[0.3em] text-[#888] uppercase min-h-[20px] transition-all">
            {phaseText}
          </p>
        </div>

        {/* Progress Bar & Telemetry */}
        <div className="w-full max-w-xs space-y-2">
          <div className="w-full h-[1px] bg-white/10 overflow-hidden relative">
            <div
              className="h-full bg-white transition-all duration-75 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between font-mono text-[9px] text-[#666] tracking-widest">
            <span>VOLUMETRIC SHADER</span>
            <span className="text-white font-medium">{progress}%</span>
          </div>
        </div>
      </div>

      {/* Bottom Dismiss / Instant Pass */}
      <div className="flex justify-between items-end font-mono text-[9px] tracking-[0.25em] text-[#666]">
        <div>
          <span>INITIALIZING CANONICAL ARCHIVE</span>
        </div>
        <button
          id="skip-preloader-btn"
          onClick={handleSkip}
          className="px-4 py-1.5 rounded-full border border-white/10 hover:border-white/30 text-[#888] hover:text-white uppercase transition-colors"
        >
          Instant Reveal →
        </button>
      </div>
    </div>
  );
};
