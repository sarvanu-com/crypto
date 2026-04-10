'use client';

import { useEffect, useRef } from 'react';

/* ── City locations (crypto / finance hubs) ── */
const CITIES = [
  { lat: 40.7,  lon: -74.0,  code: 'NYC',  label: 'New York'   },
  { lat: 51.5,  lon:  -0.1,  code: 'LON',  label: 'London'     },
  { lat: 25.2,  lon:  55.3,  code: 'DXB',  label: 'Dubai'      },
  { lat:  1.3,  lon: 103.8,  code: 'SIN',  label: 'Singapore'  },
  { lat: 35.7,  lon: 139.7,  code: 'TYO',  label: 'Tokyo'      },
  { lat: 19.1,  lon:  72.9,  code: 'BOM',  label: 'Mumbai'     },
  { lat:-23.5,  lon: -46.6,  code: 'GRU',  label: 'São Paulo'  },
  { lat:-33.9,  lon:  18.4,  code: 'CPT',  label: 'Cape Town'  },
];

/* ── Which cities to connect with arcs ── */
const ARCS = [
  [0, 1], // NYC → London
  [1, 2], // London → Dubai
  [2, 3], // Dubai → Singapore
  [3, 4], // Singapore → Tokyo
  [0, 6], // NYC → São Paulo
  [1, 5], // London → Mumbai
  [4, 2], // Tokyo → Dubai
];

const D2R = Math.PI / 180;

export default function GlobeCanvas({ size = 440 }: { size?: number }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;

    const R  = size * 0.44;          // globe radius (px)
    const cx = size / 2;
    const cy = size / 2;
    const TILT   = 22 * D2R;        // globe tilt (X-axis)
    const SPEED  = 0.0015;          // radians per frame (~20 s/rev)

    let rot   = 0.4;                 // initial rotation offset
    let rafId = 0;

    /* ── Project a (lat, lon) → {x, y, depth} ── */
    function project(lat: number, lon: number) {
      const φ = lat * D2R;
      const λ = lon * D2R + rot;

      /* Sphere cartesian */
      const sx =  Math.cos(φ) * Math.sin(λ);
      const sy =  Math.sin(φ);
      const sz =  Math.cos(φ) * Math.cos(λ);

      /* Tilt around X */
      const ty =  sy * Math.cos(TILT) - sz * Math.sin(TILT);
      const tz =  sy * Math.sin(TILT) + sz * Math.cos(TILT);

      return { x: cx + R * sx, y: cy - R * ty, depth: tz };
    }

    /* ── Slerp two unit vectors for great-circle arc ── */
    function slerp(
      lat1: number, lon1: number,
      lat2: number, lon2: number,
      t: number
    ) {
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

    let startTime = performance.now();

    function draw(ts: number) {
      ctx.clearRect(0, 0, size, size);

      /* Elapsed in seconds */
      const elapsed = (ts - startTime) / 1000;

      /* ── 0. Ambient sphere gradient (very subtle color) ── */
      const grad = ctx.createRadialGradient(cx - R*0.15, cy - R*0.2, R*0.1, cx, cy, R*1.05);
      grad.addColorStop(0, 'rgba(0, 240, 255, 0.18)'); // Cyan subtle glow
      grad.addColorStop(0.6, 'rgba(124, 58, 237, 0.06)'); // Purple fade
      grad.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();

      /* ── 1. Latitude grid (Vibrant Cyan) ── */
      for (let lat = -80; lat <= 80; lat += 20) {
        ctx.beginPath();
        let penUp = true;
        for (let lon = -179; lon <= 180; lon += 2) {
          const p = project(lat, lon);
          if (p.depth < 0) { penUp = true; continue; }
          const alpha = 0.15 + 0.35 * ((p.depth + 1) / 2); // much more visible
          if (penUp) {
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            penUp = false;
          } else {
            ctx.lineTo(p.x, p.y);
          }
          ctx.strokeStyle = `rgba(0, 210, 255, ${alpha.toFixed(2)})`;
        }
        ctx.lineWidth = lat === 0 ? 1.5 : 1.0;
        ctx.stroke();
      }

      /* ── 2. Longitude grid (Electric Purple) ── */
      for (let lon = -180; lon < 180; lon += 20) {
        ctx.beginPath();
        let penUp2 = true;
        for (let lat = -90; lat <= 90; lat += 2) {
          const p = project(lat, lon);
          if (p.depth < 0) { penUp2 = true; continue; }
          const alpha = 0.12 + 0.3 * ((p.depth + 1) / 2);
          if (penUp2) {
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            penUp2 = false;
          } else {
            ctx.lineTo(p.x, p.y);
          }
          ctx.strokeStyle = `rgba(124, 58, 237, ${alpha.toFixed(2)})`;
        }
        ctx.lineWidth = 0.8;
        ctx.stroke();
      }

      /* ── 3. Great-circle arcs + glowing comet packet ── */
      ARCS.forEach(([ai, bi], arcIdx) => {
        const A = CITIES[ai];
        const B = CITIES[bi];

        // Determine if this arc is at least partially visible
        const pA = project(A.lat, A.lon);
        const pB = project(B.lat, B.lon);
        const visible = pA.depth > -0.4 || pB.depth > -0.4;
        if (!visible) return;

        const STEPS = 80;

        /* Draw arc */
        ctx.beginPath();
        let arcPen = true;
        for (let s = 0; s <= STEPS; s++) {
          const t = s / STEPS;
          const mid = slerp(A.lat, A.lon, B.lat, B.lon, t);
          /* Lift higher for visual drama */
          const liftLat = mid.lat + 8 * Math.sin(t * Math.PI);
          const liftLon = mid.lon;
          const p = project(liftLat, liftLon);
          if (p.depth < 0) { arcPen = true; continue; }
          if (arcPen) { ctx.moveTo(p.x, p.y); arcPen = false; }
          else ctx.lineTo(p.x, p.y);
        }
        ctx.strokeStyle = 'rgba(124, 58, 237, 0.55)'; // Solid glowing purple tube
        ctx.lineWidth = 1.6;
        ctx.stroke();

        /* Moving data packet along this arc */
        const period = 3.2; // faster sending
        const phase  = (arcIdx * period / ARCS.length);
        const t2     = ((elapsed + phase) % period) / period;
        
        // Comet trail effect
        for(let trail = 0; trail < 10; trail++){
            const trailPhase = Math.max(0, t2 - trail * 0.012);
            const pmT     = slerp(A.lat, A.lon, B.lat, B.lon, trailPhase);
            const pmLatT  = pmT.lat + 8 * Math.sin(trailPhase * Math.PI);
            const pktT    = project(pmLatT, pmT.lon);

            if (pktT.depth > 0) {
                const trailAlpha = 1 - (trail / 10);
                
                ctx.beginPath();
                ctx.arc(pktT.x, pktT.y, trail === 0 ? 3 : 1.5, 0, Math.PI*2);
                ctx.fillStyle = `rgba(0, 240, 255, ${trailAlpha})`;
                ctx.fill();
            }
        }
        
        const pm     = slerp(A.lat, A.lon, B.lat, B.lon, t2);
        const pmLat  = pm.lat + 8 * Math.sin(t2 * Math.PI);
        const pkt    = project(pmLat, pm.lon);

        if (pkt.depth > 0) {
          /* Outer cyan glow */
          const grdArc = ctx.createRadialGradient(pkt.x, pkt.y, 0, pkt.x, pkt.y, 12);
          grdArc.addColorStop(0, 'rgba(0, 240, 255, 0.9)');
          grdArc.addColorStop(1, 'rgba(0, 240, 255, 0)');
          ctx.beginPath();
          ctx.arc(pkt.x, pkt.y, 12, 0, Math.PI*2);
          ctx.fillStyle = grdArc;
          ctx.fill();

          /* Bright white core */
          ctx.beginPath();
          ctx.arc(pkt.x, pkt.y, 1.8, 0, Math.PI*2);
          ctx.fillStyle = '#ffffff';
          ctx.fill();
        }
      });

      /* ── 4. Vibrant City nodes ── */
      CITIES.forEach((city, i) => {
        const p = project(city.lat, city.lon);
        if (p.depth < 0.05) return;

        const pulse = 0.5 + 0.5 * Math.sin(elapsed * 2.5 + i * 0.9);

        /* Outer Halo (Cyan) */
        ctx.beginPath();
        ctx.arc(p.x, p.y, 9 + pulse * 4, 0, Math.PI*2);
        ctx.fillStyle = `rgba(0, 240, 255, ${(0.1 + pulse * 0.1).toFixed(3)})`;
        ctx.fill();

        /* Inner Halo (Purple) */
        ctx.beginPath();
        ctx.arc(p.x, p.y, 5 + pulse * 2, 0, Math.PI*2);
        ctx.fillStyle = `rgba(124, 58, 237, ${(0.3 + pulse * 0.3).toFixed(3)})`;
        ctx.fill();

        /* Core (Deep Purple) */
        ctx.beginPath();
        ctx.arc(p.x, p.y, 3.5, 0, Math.PI*2);
        ctx.fillStyle = '#7C3AED';
        ctx.fill();

        /* Center White Spark */
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.5, 0, Math.PI*2);
        ctx.fillStyle = '#fff';
        ctx.fill();

        /* Bold City code label */
        if (p.depth > 0.3) {
          ctx.font = '800 10.5px Inter,system-ui,sans-serif';
          ctx.textAlign = 'center';
          ctx.fillStyle = `rgba(0, 71, 255, ${(0.7 + pulse * 0.3).toFixed(2)})`;
          ctx.fillText(city.code, p.x, p.y - 12);
        }
      });

      rot += SPEED;
      rafId = requestAnimationFrame(draw);
    }

    rafId = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(rafId);
  }, [size]);

  return (
    <canvas
      ref={ref}
      width={size}
      height={size}
      style={{ display: 'block', maxWidth: '100%' }}
      aria-label="Animated global payments network"
    />
  );
}
