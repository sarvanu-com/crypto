import type { Metadata } from 'next';
import { Activity, Database, Globe2, Link2, ShieldCheck, Zap } from 'lucide-react';
import CTA from '@/components/CTA';
import './network.css';

export const metadata: Metadata = {
  title: 'Network Status | Texnova',
  description: 'Real-time uptime and performance metrics for the Texnova global payment infrastructure.',
};

export default function Network() {
  return (
    <main style={{ background: '#fff', paddingBottom: '120px' }}>
      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="network-hero">
        <div className="container">
          
          <div className="status-badge">
            <div className="status-dot"></div> All Systems Operational
          </div>

          <h1 className="hero-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 800, lineHeight: '1.06', letterSpacing: '-0.03em', color: '#0b132b', marginBottom: '24px' }}>
            Texnova Network Status
          </h1>
          <p className="hero-subtitle mx-auto" style={{ fontSize: '1.1rem', color: '#475569', lineHeight: '1.7', maxWidth: '600px' }}>
            Real-time uptime and performance metrics for our global API routing array, payout engines, and cross-border settlement rails.
          </p>

          <div className="network-metrics">
            <div className="metric-item">
              <span className="metric-val">99.999%</span>
              <span className="metric-label">API Uptime (90d)</span>
            </div>
            <div className="metric-item">
              <span className="metric-val">42ms</span>
              <span className="metric-label">Avg Latency</span>
            </div>
            <div className="metric-item">
              <span className="metric-val">&lt; 1s</span>
              <span className="metric-label">Settlement Finality</span>
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════════ SERVICES GRID ═══════════════════ */}
      <section className="network-services-section container">
        <div className="services-list">
          
          <div className="service-row">
            <div className="service-info">
               <div className="service-icon"><Zap size={24} /></div>
               <div>
                  <h3 className="service-name">Global Routing API</h3>
                  <p className="service-desc">REST API endpoints handling transaction intents.</p>
               </div>
            </div>
            <div className="service-status">
              <div className="ss-dot"></div> Operational
            </div>
          </div>

          <div className="service-row">
            <div className="service-info">
               <div className="service-icon"><Database size={24} /></div>
               <div>
                  <h3 className="service-name">Settlement Ledgers</h3>
                  <p className="service-desc">Internal accounting, reconciliation, and balance sweeps.</p>
               </div>
            </div>
            <div className="service-status">
              <div className="ss-dot"></div> Operational
            </div>
          </div>

          <div className="service-row">
            <div className="service-info">
               <div className="service-icon"><Link2 size={24} /></div>
               <div>
                  <h3 className="service-name">Blockchain Node Array</h3>
                  <p className="service-desc">Ethereum, Polygon, and Solana active-active RPCs.</p>
               </div>
            </div>
            <div className="service-status">
              <div className="ss-dot"></div> Operational
            </div>
          </div>

          <div className="service-row">
            <div className="service-info">
               <div className="service-icon"><ShieldCheck size={24} /></div>
               <div>
                  <h3 className="service-name">Compliance Engines</h3>
                  <p className="service-desc">Real-time OFAC screening and chainalysis API links.</p>
               </div>
            </div>
            <div className="service-status">
              <div className="ss-dot"></div> Operational
            </div>
          </div>
          
          <div className="service-row">
            <div className="service-info">
               <div className="service-icon"><Activity size={24} /></div>
               <div>
                  <h3 className="service-name">Guaranteed Webhooks</h3>
                  <p className="service-desc">Asynchronous event delivery and exponential retries.</p>
               </div>
            </div>
            <div className="service-status">
              <div className="ss-dot"></div> Operational
            </div>
          </div>

        </div>
      </section>

      <CTA />
    </main>
  );
}
