import React, { useEffect, useState, useRef } from 'react';

interface CinematicCursorProps {
  reducedMotion?: boolean;
}

export const CinematicCursor: React.FC<CinematicCursorProps> = ({ reducedMotion = false }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isFinePointer, setIsFinePointer] = useState(true);
  const [cursorState, setCursorState] = useState<{
    hovering: boolean;
    label?: string;
    isClicking: boolean;
  }>({ hovering: false, isClicking: false });

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  // Position state with damping
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Check if device supports fine pointer (mouse)
    const mediaQuery = window.matchMedia('(pointer: fine)');
    setIsFinePointer(mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsFinePointer(e.matches);
    };

    mediaQuery.addEventListener('change', handleMediaChange);

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      // Instant dot positioning
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }

      // Detect interactive elements under cursor
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactiveEl = target.closest('button, a, [data-cursor], input, textarea, select, [role="button"]');
        if (interactiveEl) {
          const customLabel = interactiveEl.getAttribute('data-cursor') || undefined;
          setCursorState((prev) => ({
            ...prev,
            hovering: true,
            label: customLabel,
          }));
        } else {
          setCursorState((prev) => ({
            ...prev,
            hovering: false,
            label: undefined,
          }));
        }
      }
    };

    const handleMouseDown = () => {
      setCursorState((prev) => ({ ...prev, isClicking: true }));
    };

    const handleMouseUp = () => {
      setCursorState((prev) => ({ ...prev, isClicking: false }));
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Spring interpolation frame loop for the outer aperture ring
    let animationFrameId: number;
    const updateRing = () => {
      if (!reducedMotion) {
        // Damped spring factor (0.18)
        ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.18;
        ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.18;

        if (ringRef.current) {
          ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
        }
      }
      animationFrameId = requestAnimationFrame(updateRing);
    };

    animationFrameId = requestAnimationFrame(updateRing);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible, reducedMotion]);

  if (!isFinePointer || reducedMotion) {
    return null;
  }

  return (
    <>
      {/* 1. Micro Precision Center Reticle Dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 w-1.5 h-1.5 -ml-[3px] -mt-[3px] rounded-full bg-white z-[9999] pointer-events-none transition-opacity duration-300 ${
          isVisible ? 'opacity-90' : 'opacity-0'
        }`}
      />

      {/* 2. Damped Outer Aperture Halo Ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 z-[9998] pointer-events-none flex items-center justify-center transition-all duration-200 ease-out select-none ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } ${
          cursorState.isClicking
            ? 'scale-75'
            : cursorState.hovering
            ? cursorState.label
              ? 'w-16 h-16 rounded-full border border-white/40 bg-white/10 backdrop-blur-[2px]'
              : 'w-10 h-10 rounded-full border border-white/50 bg-white/5 scale-110'
            : 'w-7 h-7 rounded-full border border-white/20 bg-transparent'
        }`}
      >
        {cursorState.label && (
          <span className="font-mono text-[7px] tracking-[0.2em] text-white uppercase font-medium">
            {cursorState.label}
          </span>
        )}
      </div>
    </>
  );
};
