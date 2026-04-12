'use client';

import { useEffect, useRef } from 'react';

/* ── Currency nodes (placed around the globe) ── */
const CURRENCIES = [
  { lat: 40.7,  lon: -74.0, code: 'USD', symbol: '$',  color: '#ffffff', bg: '#2563eb', offset: 14 }, // NYC area
  { lat: 51.5,  lon: -10.0,  code: 'GBP', symbol: '£',  color: '#ffffff', bg: '#f59e0b', offset: 14 }, // London area (nudged west)
  { lat: 38.8,  lon:  20.3,  code: 'EUR', symbol: '€',  color: '#ffffff', bg: '#3b82f6', offset: 14 }, // Paris area (nudged significantly SE)
  { lat: 35.6,  lon: 139.7, code: 'BTC', symbol: '₿',  color: '#ffffff', bg: '#f97316', offset: 14 }, // Tokyo area
  { lat:  1.3,  lon: 103.8, code: 'USDC',symbol: '$',  color: '#ffffff', bg: '#2563eb', offset: 14 }, // Singapore area
];

/* ── Orbital arcs (connecting currencies) ── */
const ARCS = [
  [0, 1], // USD → GBP
  [1, 2], // GBP → EUR
  [2, 3], // EUR → BTC
  [3, 4], // BTC → USDC
  [4, 0], // USDC → USD
];

const D2R = Math.PI / 180;

export default function PaymentGlobe({ size = 500 }: { size?: number }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;

    const R  = size * 0.38;          // globe radius
    const cx = size / 2;
    const cy = size / 2;
    const TILT   = 22 * D2R; 
    const SPEED  = 0.0015;          

    let rot   = 0.5;                
    let rafId = 0;

    function project(lat: number, lon: number) {
      const φ = lat * D2R;
      const λ = lon * D2R + rot;
      const sx =  Math.cos(φ) * Math.sin(λ);
      const sy =  Math.sin(φ);
      const sz =  Math.cos(φ) * Math.cos(λ);
      const ty =  sy * Math.cos(TILT) - sz * Math.sin(TILT);
      const tz =  sy * Math.sin(TILT) + sz * Math.cos(TILT);
      return { x: cx + R * sx, y: cy - R * ty, depth: tz };
    }

    function slerp(lat1: number, lon1: number, lat2: number, lon2: number, t: number) {
      const φ1 = lat1 * D2R, λ1 = lon1 * D2R;
      const φ2 = lat2 * D2R, λ2 = lon2 * D2R;
      const ax = Math.cos(φ1)*Math.cos(λ1), ay = Math.sin(φ1), az = Math.cos(φ1)*Math.sin(λ1);
      const bx = Math.cos(φ2)*Math.cos(λ2), by = Math.sin(φ2), bz = Math.cos(φ2)*Math.sin(λ2);
      let dot = ax*bx + ay*by + az*bz;
      dot = Math.max(-1, Math.min(1, dot));
      const angle = Math.acos(dot);
      if (Math.abs(angle) < 1e-6) return { lat: lat1, lon: lon1 };
      const sa = Math.sin(angle);
      const w1 = Math.sin((1-t)*angle) / sa;
      const w2 = Math.sin(t*angle) / sa;
      const rx = w1*ax + w2*bx;
      const ry = w1*ay + w2*by;
      const rz = w1*az + w2*bz;
      return {
        lat: Math.atan2(ry, Math.sqrt(rx*rx + rz*rz)) / D2R,
        lon: Math.atan2(rz, rx) / D2R,
      };
    }

    function draw(ts: number) {
      ctx.clearRect(0, 0, size, size);
      const elapsed = ts / 1000;

      /* ── 1. Atmosphere Glow (Outer) ── */
      const outGlow = ctx.createRadialGradient(cx, cy, R * 0.8, cx, cy, R * 1.2);
      outGlow.addColorStop(0, 'rgba(37, 99, 235, 0.15)');
      outGlow.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = outGlow;
      ctx.fillRect(0,0,size,size);

      /* ── 2. Globe Shadow / Core ── */
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      const coreGrad = ctx.createRadialGradient(cx - R*0.3, cy - R*0.3, R*0.1, cx, cy, R);
      coreGrad.addColorStop(0, 'rgba(10, 25, 70, 0.8)');
      coreGrad.addColorStop(1, 'rgba(0, 10, 30, 0.95)');
      ctx.fillStyle = coreGrad;
      ctx.fill();

      /* ── 3. Dot Matrix Surface ── */
      for (let lat = -85; lat <= 85; lat += 4.5) {
        // Vary step for longitude to maintain density at poles
        const step = 4.5 / Math.cos(lat * D2R);
        for (let lon = -180; lon < 180; lon += step) {
          const p = project(lat, lon);
          if (p.depth < 0) {
             // Back surface dots
             ctx.fillStyle = `rgba(59, 130, 246, ${0.1 * (1 + p.depth)})`;
             ctx.beginPath();
             ctx.arc(p.x, p.y, 0.6, 0, Math.PI * 2);
             ctx.fill();
          } else {
             // Front surface dots
             const alpha = 0.2 + 0.5 * p.depth;
             ctx.fillStyle = `rgba(96, 165, 250, ${alpha})`;
             ctx.beginPath();
             ctx.arc(p.x, p.y, 1.2 * (0.8 + 0.4 * p.depth), 0, Math.PI * 2);
             ctx.fill();
          }
        }
      }

      /* ── 4. Arcs ── */
      ARCS.forEach(([ai, bi], idx) => {
        const A = CURRENCIES[ai];
        const B = CURRENCIES[bi];
        ctx.beginPath();
        let arcPen = true;
        for (let s = 0; s <= 60; s++) {
          const t = s / 60;
          const mid = slerp(A.lat, A.lon, B.lat, B.lon, t);
          const p = project(mid.lat, mid.lon);
          const alpha = p.depth < 0 ? 0.08 : 0.45;
          ctx.strokeStyle = `rgba(59, 130, 246, ${alpha})`;
          ctx.lineWidth = p.depth < 0 ? 1 : 1.5;
          if (arcPen) { ctx.moveTo(p.x, p.y); arcPen = false; }
          else { ctx.lineTo(p.x, p.y); }
        }
        ctx.stroke();

        /* Animated signal pulse */
        const tPulse = (elapsed * 0.45 + idx * 0.25) % 1;
        const pos = slerp(A.lat, A.lon, B.lat, B.lon, tPulse);
        const pp = project(pos.lat, pos.lon);
        if (pp.depth > 0) {
           ctx.beginPath();
           ctx.arc(pp.x, pp.y, 3, 0, Math.PI*2);
           ctx.fillStyle = '#60a5fa';
           ctx.shadowBlur = 12;
           ctx.shadowColor = '#3b82f6';
           ctx.fill();
           ctx.shadowBlur = 0;
        }
      });

      /* ── 5. Currency Badges ── */
      CURRENCIES.forEach((c) => {
        const p = project(c.lat, c.lon);
        if (p.depth < -0.2) return;

        const baseSize = 36;
        const scale = 0.7 + 0.3 * (p.depth + 1);
        const s = baseSize * scale;
        
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.globalAlpha = Math.max(0.3, (p.depth + 0.6));

        /* Floating motion */
        const floatY = Math.sin(elapsed * 2 + c.lat) * 4;
        ctx.translate(0, floatY);

        /* Badge glow shadow */
        ctx.shadowBlur = 15;
        ctx.shadowColor = 'rgba(0, 71, 255, 0.4)';

        /* Circle bg */
        ctx.beginPath();
        ctx.arc(0, 0, s/2, 0, Math.PI*2);
        ctx.fillStyle = c.bg;
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#ffffff';
        ctx.stroke();
        ctx.shadowBlur = 0;

        /* Symbol */
        ctx.font = `bold ${Math.round(s*0.5)}px Inter, system-ui, sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = '#fff';
        ctx.fillText(c.symbol, 0, 0);

        /* Label (Code) with backdrop */
        ctx.font = `bold ${Math.round(s*0.35)}px Inter, sans-serif`;
        ctx.fillStyle = '#ffffff';
        // Use custom offset to prevent overlapping
        const labelY = c.offset > 0 ? (s/2 + c.offset) : (c.offset - s/2);
        ctx.fillText(c.code, 0, labelY);

        ctx.restore();
      });

      rot += SPEED;
      rafId = requestAnimationFrame(draw);
    }

    rafId = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(rafId);
  }, [size]);

  return (
    <div className="payment-globe-container">
      <canvas
        ref={ref}
        width={size}
        height={size}
        className="payment-globe-canvas"
        aria-label="Stylish global financial network globe"
      />
      <div className="globe-bottom-glow"></div>
    </div>
  );
}
