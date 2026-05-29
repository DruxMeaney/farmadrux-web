"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseAlpha: number;
  alpha: number;
  color: [number, number, number];
  pulseSpeed: number;
  pulsePhase: number;
}

const COLORS: [number, number, number][] = [
  [232, 121, 249], // pink-fuchsia
  [192, 38, 211],  // magenta
  [124, 58, 237],  // purple-vivid
  [219, 39, 119],  // pink-intense
  [167, 139, 250], // lavender
  [249, 168, 212], // soft pink
];

const PARTICLE_COUNT = 100;
const BROWNIAN_FORCE = 0.15;
const DAMPING = 0.98;
const GLOW_RADIUS_MULTIPLIER = 4;

export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let particles: Particle[] = [];

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      canvas!.width = canvas!.offsetWidth * dpr;
      canvas!.height = canvas!.offsetHeight * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function initParticles() {
      particles = [];
      const w = canvas!.offsetWidth;
      const h = canvas!.offsetHeight;
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const color = COLORS[Math.floor(Math.random() * COLORS.length)];
        const baseAlpha = 0.4 + Math.random() * 0.6;
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: 1.2 + Math.random() * 2.5,
          baseAlpha,
          alpha: baseAlpha,
          color,
          pulseSpeed: 0.5 + Math.random() * 1.5,
          pulsePhase: Math.random() * Math.PI * 2,
        });
      }
    }

    function animate(time: number) {
      const w = canvas!.offsetWidth;
      const h = canvas!.offsetHeight;

      ctx!.clearRect(0, 0, w, h);

      for (const p of particles) {
        // Brownian motion
        p.vx += (Math.random() - 0.5) * BROWNIAN_FORCE;
        p.vy += (Math.random() - 0.5) * BROWNIAN_FORCE;
        p.vx *= DAMPING;
        p.vy *= DAMPING;
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around edges
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        if (p.y > h + 10) p.y = -10;

        // Pulse brightness
        const pulse = Math.sin(time * 0.001 * p.pulseSpeed + p.pulsePhase);
        p.alpha = p.baseAlpha * (0.6 + 0.4 * pulse);

        const [r, g, b] = p.color;

        // Outer glow
        const glowR = p.radius * GLOW_RADIUS_MULTIPLIER;
        const glow = ctx!.createRadialGradient(p.x, p.y, 0, p.x, p.y, glowR);
        glow.addColorStop(0, `rgba(${r},${g},${b},${p.alpha * 0.5})`);
        glow.addColorStop(0.4, `rgba(${r},${g},${b},${p.alpha * 0.15})`);
        glow.addColorStop(1, `rgba(${r},${g},${b},0)`);
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, glowR, 0, Math.PI * 2);
        ctx!.fillStyle = glow;
        ctx!.fill();

        // Bright core
        const core = ctx!.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
        core.addColorStop(0, `rgba(255,255,255,${p.alpha * 0.9})`);
        core.addColorStop(0.5, `rgba(${r},${g},${b},${p.alpha})`);
        core.addColorStop(1, `rgba(${r},${g},${b},0)`);
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx!.fillStyle = core;
        ctx!.fill();
      }

      animId = requestAnimationFrame(animate);
    }

    resize();
    initParticles();
    animId = requestAnimationFrame(animate);

    window.addEventListener("resize", () => {
      resize();
      initParticles();
    });

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
