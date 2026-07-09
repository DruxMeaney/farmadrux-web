"use client";

import { useEffect, useRef } from "react";

interface Building {
  x: number;
  w: number;
  h: number;
  depth: number;
  windows: { wx: number; wy: number; lit: boolean; color: string }[];
  neonStripes: { y: number; color: string; glow: number }[];
  antennaHeight: number;
  roofStyle: number;
}

const NEON_PALETTE = [
  "#ff2d95", "#e040fb", "#d946ef", "#c026d3",
  "#a855f7", "#7c3aed", "#f472b6", "#fb7185",
  "#e879f9", "#c084fc",
];

const WINDOW_COLORS = [
  "rgba(255,45,149,0.9)", "rgba(224,64,251,0.8)", "rgba(167,139,250,0.7)",
  "rgba(192,38,211,0.8)", "rgba(248,113,113,0.5)", "rgba(124,58,237,0.6)",
  "rgba(80,60,120,0.4)", "rgba(30,20,50,0.2)",
];

function rand(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateBuildings(w: number, h: number): Building[] {
  const buildings: Building[] = [];

  for (let depth = 0; depth < 3; depth++) {
    const count = depth === 0 ? 14 : depth === 1 ? 10 : 7;
    const minH = depth === 0 ? h * 0.08 : depth === 1 ? h * 0.12 : h * 0.18;
    const maxH = depth === 0 ? h * 0.28 : depth === 1 ? h * 0.42 : h * 0.55;
    const minW = depth === 0 ? 18 : depth === 1 ? 28 : 36;
    const maxW = depth === 0 ? 45 : depth === 1 ? 65 : 90;

    for (let i = 0; i < count; i++) {
      const bw = rand(minW, maxW);
      const bh = rand(minH, maxH);
      const bx = rand(-bw * 0.3, w + bw * 0.3);

      const windows: Building["windows"] = [];
      const winSize = depth === 0 ? 2 : depth === 1 ? 3 : 4;
      const gap = winSize + (depth === 0 ? 3 : depth === 1 ? 4 : 5);
      const cols = Math.floor((bw - 6) / gap);
      const rows = Math.floor((bh - 10) / gap);

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const lit = Math.random() < (depth === 2 ? 0.4 : 0.3);
          windows.push({
            wx: 4 + c * gap,
            wy: 8 + r * gap,
            lit,
            color: lit ? pick(WINDOW_COLORS) : "rgba(10,5,20,0.15)",
          });
        }
      }

      const neonStripes: Building["neonStripes"] = [];
      if (depth >= 1 && Math.random() < 0.4) {
        const stripeCount = Math.floor(rand(1, 3));
        for (let s = 0; s < stripeCount; s++) {
          neonStripes.push({
            y: rand(bh * 0.1, bh * 0.9),
            color: pick(NEON_PALETTE),
            glow: rand(4, 10),
          });
        }
      }

      buildings.push({
        x: bx,
        w: bw,
        h: bh,
        depth,
        windows,
        neonStripes,
        antennaHeight: Math.random() < 0.25 ? rand(8, 30) : 0,
        roofStyle: Math.floor(rand(0, 3)),
      });
    }
  }

  buildings.sort((a, b) => a.depth - b.depth);
  return buildings;
}

function drawCity(ctx: CanvasRenderingContext2D, w: number, h: number, buildings: Building[]) {
  ctx.clearRect(0, 0, w, h);

  // Sky glow — subtle
  const skyGlow = ctx.createRadialGradient(w * 0.5, h, 0, w * 0.5, h * 0.5, w * 0.7);
  skyGlow.addColorStop(0, "rgba(192,38,211,0.08)");
  skyGlow.addColorStop(0.5, "rgba(124,58,237,0.03)");
  skyGlow.addColorStop(1, "transparent");
  ctx.fillStyle = skyGlow;
  ctx.fillRect(0, 0, w, h);

  for (const b of buildings) {
    const baseY = h;
    const topY = baseY - b.h;
    const alpha = b.depth === 0 ? 0.25 : b.depth === 1 ? 0.4 : 0.6;

    // Building body
    const bodyGrad = ctx.createLinearGradient(b.x, topY, b.x, baseY);
    bodyGrad.addColorStop(0, `rgba(25,12,45,${alpha * 0.8})`);
    bodyGrad.addColorStop(1, `rgba(10,5,22,${alpha * 0.9})`);

    ctx.fillStyle = bodyGrad;
    ctx.fillRect(b.x, topY, b.w, b.h);

    // Edge highlights
    ctx.strokeStyle = `rgba(124,58,237,${alpha * 0.25})`;
    ctx.lineWidth = 0.5;
    ctx.strokeRect(b.x, topY, b.w, b.h);

    // Roof
    if (b.roofStyle === 1 && b.depth >= 1) {
      ctx.fillStyle = `rgba(192,38,211,${alpha * 0.3})`;
      ctx.beginPath();
      ctx.moveTo(b.x, topY);
      ctx.lineTo(b.x + b.w / 2, topY - 6);
      ctx.lineTo(b.x + b.w, topY);
      ctx.fill();
    }

    // Antenna
    if (b.antennaHeight > 0) {
      const ax = b.x + b.w * rand(0.3, 0.7);
      ctx.strokeStyle = `rgba(167,139,250,${alpha * 0.4})`;
      ctx.lineWidth = 0.8;
      ctx.beginPath();
      ctx.moveTo(ax, topY);
      ctx.lineTo(ax, topY - b.antennaHeight);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(ax, topY - b.antennaHeight, 1.5, 0, Math.PI * 2);
      const blinkColor = Math.random() > 0.5 ? "rgba(255,45,149,0.8)" : "rgba(224,64,251,0.8)";
      ctx.fillStyle = blinkColor;
      ctx.shadowColor = blinkColor;
      ctx.shadowBlur = 5;
      ctx.fill();
      ctx.shadowBlur = 0;
    }

    // Neon stripes
    for (const stripe of b.neonStripes) {
      const sy = baseY - stripe.y;
      ctx.save();
      ctx.shadowColor = stripe.color;
      ctx.shadowBlur = stripe.glow;
      ctx.strokeStyle = stripe.color;
      ctx.lineWidth = 1;
      ctx.globalAlpha = 0.5;
      ctx.beginPath();
      ctx.moveTo(b.x, sy);
      ctx.lineTo(b.x + b.w, sy);
      ctx.stroke();
      ctx.restore();
    }

    // Windows
    for (const win of b.windows) {
      const winSize = b.depth === 0 ? 2 : b.depth === 1 ? 3 : 4;
      if (win.lit) {
        ctx.save();
        ctx.shadowColor = win.color;
        ctx.shadowBlur = b.depth === 2 ? 3 : 1.5;
        ctx.fillStyle = win.color;
        ctx.fillRect(b.x + win.wx, topY + win.wy, winSize, winSize);
        ctx.restore();
      } else {
        ctx.fillStyle = win.color;
        ctx.fillRect(b.x + win.wx, topY + win.wy, winSize, winSize);
      }
    }
  }

  // Ground reflection
  const reflGrad = ctx.createLinearGradient(0, h - 30, 0, h);
  reflGrad.addColorStop(0, "transparent");
  reflGrad.addColorStop(0.6, "rgba(192,38,211,0.06)");
  reflGrad.addColorStop(1, "rgba(255,45,149,0.04)");
  ctx.fillStyle = reflGrad;
  ctx.fillRect(0, h - 30, w, 30);

  // Fog layers
  for (let i = 0; i < 2; i++) {
    const fogY = h * (0.55 + i * 0.2);
    const fogGrad = ctx.createLinearGradient(0, fogY - 15, 0, fogY + 15);
    fogGrad.addColorStop(0, "transparent");
    fogGrad.addColorStop(0.5, `rgba(124,58,237,${0.02 + i * 0.01})`);
    fogGrad.addColorStop(1, "transparent");
    ctx.fillStyle = fogGrad;
    ctx.fillRect(0, fogY - 15, w, 30);
  }
}

export default function CyberpunkCity() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    function render() {
      const dpr = window.devicePixelRatio || 1;
      const w = canvas!.offsetWidth;
      const h = canvas!.offsetHeight;
      canvas!.width = w * dpr;
      canvas!.height = h * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      const buildings = generateBuildings(w, h);
      drawCity(ctx!, w, h, buildings);
    }

    render();

    const onResize = () => render();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-60"
      aria-hidden="true"
    />
  );
}
