import React, { useEffect, useRef } from 'react';
import { AtmosphereMode } from '../types';

interface CinematicCanvasProps {
  atmosphere: AtmosphereMode;
  reducedMotion?: boolean;
}

export const CinematicCanvas: React.FC<CinematicCanvasProps> = ({ atmosphere, reducedMotion = false }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle system (celestial dust / crystalline obsidian particles)
    interface Particle {
      x: number;
      y: number;
      z: number;
      size: number;
      alpha: number;
      speed: number;
    }

    const particleCount = 55;
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random() * 2 + 0.5,
        size: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.4 + 0.1,
        speed: (Math.random() * 0.15 + 0.05) * 0.6,
      });
    }

    // Cursor tracking with heavy inertia
    let targetMouseX = width * 0.5;
    let targetMouseY = height * 0.35;
    let currentMouseX = targetMouseX;
    let currentMouseY = targetMouseY;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    let time = 0;

    const render = () => {
      time += 0.01;

      // Heavy inertia smoothing for cursor light
      currentMouseX += (targetMouseX - currentMouseX) * 0.035;
      currentMouseY += (targetMouseY - currentMouseY) * 0.035;

      ctx.clearRect(0, 0, width, height);

      // 1. Atmosphere Radial Volumetric Beam
      let glowR = 197;
      let glowG = 160;
      let glowB = 89; // Default champagne gold
      let coreAlpha = 0.07;

      if (atmosphere === 'obsidian') {
        glowR = 180;
        glowG = 145;
        glowB = 85;
        coreAlpha = 0.06;
      } else if (atmosphere === 'titanium') {
        glowR = 210;
        glowG = 215;
        glowB = 230;
        coreAlpha = 0.05;
      } else if (atmosphere === 'amber-aurora') {
        glowR = 235;
        glowG = 125;
        glowB = 50;
        coreAlpha = 0.09;
      } else if (atmosphere === 'monochrome') {
        glowR = 240;
        glowG = 240;
        glowB = 240;
        coreAlpha = 0.04;
      }

      // Volumetric beam from top-center shifting towards cursor
      const beamGrad = ctx.createRadialGradient(
        currentMouseX,
        currentMouseY,
        20,
        currentMouseX,
        currentMouseY,
        Math.max(width, height) * 0.65
      );
      beamGrad.addColorStop(0, `rgba(${glowR}, ${glowG}, ${glowB}, ${coreAlpha * 1.5})`);
      beamGrad.addColorStop(0.35, `rgba(${glowR}, ${glowG}, ${glowB}, ${coreAlpha * 0.4})`);
      beamGrad.addColorStop(1, 'rgba(8, 8, 10, 0)');

      ctx.fillStyle = beamGrad;
      ctx.fillRect(0, 0, width, height);

      // 2. Slow grazing architectural light slit
      const slitY = height * 0.45 + Math.sin(time * 0.4) * 40;
      const slitGrad = ctx.createLinearGradient(0, slitY - 120, 0, slitY + 120);
      slitGrad.addColorStop(0, 'rgba(0, 0, 0, 0)');
      slitGrad.addColorStop(0.5, `rgba(${glowR}, ${glowG}, ${glowB}, 0.02)`);
      slitGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = slitGrad;
      ctx.fillRect(0, slitY - 120, width, 240);

      // 3. Render and drift stardust particles
      ctx.fillStyle = `rgba(${glowR}, ${glowG}, ${glowB}, 0.6)`;
      for (let i = 0; i < particleCount; i++) {
        const p = particles[i];
        p.y -= p.speed * p.z;
        p.x += Math.sin(time + i) * 0.15;

        if (p.y < 0) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * p.z, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${glowR}, ${glowG}, ${glowB}, ${p.alpha * 0.7})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [atmosphere]);

  return (
    <canvas
      id="cinematic-ambient-canvas"
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
    />
  );
};
