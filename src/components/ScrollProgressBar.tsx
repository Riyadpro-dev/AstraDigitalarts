import React, { useEffect, useState } from 'react';

interface ScrollProgressBarProps {
  reducedMotion?: boolean;
}

export const ScrollProgressBar: React.FC<ScrollProgressBarProps> = ({ reducedMotion = false }) => {
  const [progress, setProgress] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let scrollTimeout: number | undefined;
    let ticking = false;

    const updateScrollProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight <= 0) {
        setProgress(0);
      } else {
        const currentScroll = window.scrollY;
        const rawProgress = (currentScroll / scrollHeight) * 100;
        const clampedProgress = Math.min(100, Math.max(0, rawProgress));
        setProgress(clampedProgress);
      }
      ticking = false;
    };

    const handleScroll = () => {
      setIsScrolling(true);
      window.clearTimeout(scrollTimeout);
      scrollTimeout = window.setTimeout(() => {
        setIsScrolling(false);
      }, 1200);

      if (!ticking) {
        window.requestAnimationFrame(updateScrollProgress);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updateScrollProgress, { passive: true });
    updateScrollProgress();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateScrollProgress);
      window.clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <div
      id="viewport-scroll-progress-track"
      role="progressbar"
      aria-label="Narrative Journey Depth"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      className="fixed top-0 left-0 right-0 z-[60] h-[2px] bg-white/[0.04] pointer-events-none select-none overflow-visible backdrop-blur-[1px]"
    >
      {/* Active Progress Bar with GPU ScaleX Transform */}
      <div
        id="viewport-scroll-progress-bar"
        className={`h-full w-full origin-left bg-gradient-to-r from-[#C5A059]/40 via-white/80 to-white relative ${
          reducedMotion ? '' : 'transition-transform duration-75 ease-out'
        }`}
        style={{
          transform: `scaleX(${progress / 100})`,
        }}
      >
        {/* Subtle luminous leading tip */}
        {progress > 0 && (
          <div
            className="absolute top-1/2 right-0 -translate-y-1/2 w-3 h-[4px] bg-white rounded-full blur-[1px] shadow-[0_0_8px_rgba(255,255,255,0.8),0_0_14px_rgba(197,160,89,0.5)] opacity-90"
            style={{ transform: 'translateX(50%) translateY(-50%)' }}
          />
        )}
      </div>

      {/* Subtle Micro-Telemetry Depth Indicator (Visible during active scrolling) */}
      <div
        id="scroll-depth-telemetry"
        className={`absolute top-[6px] right-4 font-mono text-[8px] tracking-[0.25em] text-[#C5A059] bg-[#0c0c0e]/85 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/10 transition-opacity duration-500 pointer-events-none flex items-center gap-1.5 ${
          progress > 1 && (isScrolling || progress >= 99) ? 'opacity-90' : 'opacity-0'
        }`}
      >
        <span className="w-1 h-1 rounded-full bg-white/70 animate-pulse" />
        <span className="text-[#888]">DEPTH</span>
        <span className="text-white font-medium">{Math.round(progress)}%</span>
      </div>
    </div>
  );
};
