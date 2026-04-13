import type { Metadata } from 'next';
import { Terminal, Box, Lock, Database, ArrowRight, Zap, Globe, LayoutTemplate } from 'lucide-react';
import CTA from '@/components/CTA';
import './developers.css';

export const metadata: Metadata = {
  title: 'Developer API & SDKs | Texnova',
  description: 'Integrate global crypto payments with just a few lines of code. Read our comprehensive API documentation and explore SDKs.',
};

export default function Developers() {
  return (
    <main className="dev-page">
      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="dev-hero">
        <div className="container responsive-split">
          
          <div className="dev-hero-text animate-in">
            <div className="eyebrow">
              Developers API
            </div>
            <h1 className="text-5xl font-bold" style={{ lineHeight: '1.05', letterSpacing: '-0.03em', color: '#0b132b', marginBottom: '24px' }}>
              Built for <span className="text-gradient-blue">Engineers</span>.
            </h1>
            <p className="text-lg text-secondary" style={{ lineHeight: '1.7', marginBottom: '32px' }}>
              A powerful, strictly typed API that works out of the box. Drop-in UI components or full custom control. Settle global payments natively at <strong>0.1% transaction fee</strong>.
            </p>
            <div className="flex gap-4">
              <a href="/docs" className="btn btn-primary text-base">
                Read API Reference <ArrowRight size={18} />
              </a>
              <a href="/dashboard/keys" className="btn btn-ghost text-base">
                <Lock size={18} /> Get API Keys
              </a>
            </div>
            <p className="text-sm text-secondary" style={{ marginTop: '24px' }}>
              <span style={{ color: '#10B981', fontWeight: 800 }}>●</span> API Systems Fully Operational
            </p>
          </div>

          <div className="api-pipeline-wrapper delay-200 animate-in">
            
            {/* 1. Origin Node */}
            <div className="api-pl-node api-node-client">
              <Terminal size={14} color="#89DDFF" />
              <span><span className="api-node-label">POST</span> /v2/transfer</span>
            </div>

            {/* 2. Input Line & Particles */}
            <div className="api-line input">
              <div className="api-packet"></div>
              <div className="api-packet" style={{ animationDelay: '1.2s' }}></div>
            </div>

            {/* 3. Core Engine Node */}
            <div className="api-node-core">
              <div className="api-core-ring"></div>
              <div className="api-core-ring-inner"></div>
              <div className="api-core-text">TEXNOVA</div>
              <div className="api-core-sub">0.1% Engine</div>
            </div>

            {/* 4. Output Lines & Particles */}
            <div className="api-line out-1">
              <div className="api-packet out"></div>
            </div>
            <div className="api-line out-2">
              <div className="api-packet out"></div>
            </div>
            <div className="api-line out-3">
              <div className="api-packet out"></div>
            </div>

            {/* 5. Destination Nodes */}
            <div className="api-pl-node api-node-dest dest-1">
              <div className="dest-status"></div>
              <span className="dest-val">Circle USDC</span>
            </div>
            <div className="api-pl-node api-node-dest dest-2">
              <div className="dest-status"></div>
              <span className="dest-val">Base</span>
            </div>
            <div className="api-pl-node api-node-dest dest-3">
              <div className="dest-status"></div>
              <span className="dest-val">Polygon</span>
            </div>

          </div>

        </div>
      </section>

      {/* ═══════════════════ METRICS BAR ═══════════════════ */}
      <div className="container">
        <div className="dev-metrics-bar animate-in delay-300">
          <div className="dev-metric">
            <span className="dev-metric-val">&lt;50ms</span>
            <span className="dev-metric-label">API Latency</span>
          </div>
          <div className="dev-metric" style={{ borderLeft: '1px solid var(--border-glass)', borderRight: '1px solid var(--border-glass)' }}>
            <span className="dev-metric-val">99.999%</span>
            <span className="dev-metric-label">Uptime SLA</span>
          </div>
          <div className="dev-metric">
            <span className="dev-metric-val">0.1%</span>
            <span className="dev-metric-label">Flat Fee Guaranteed</span>
          </div>
        </div>
      </div>

      {/* ═══════════════════ BENTO FEATURES ═══════════════════ */}
      <section className="dev-steps-section container">
        <div className="text-center mb-12">
          <div className="eyebrow" style={{ justifyContent: 'center' }}>Enterprise Grade</div>
          <h2 className="text-4xl font-bold" style={{ color: '#0b132b' }}>Everything you need to scale</h2>
        </div>
        
        <div className="dev-steps-grid">
          <div className="dev-step-card glass-panel">
            <div className="dev-step-number"><Zap size={24} /></div>
            <h3>Idempotency Built-In</h3>
            <p>Safely retry requests across unreliable networks. If a network blip occurs mid-transaction, you will never be charged twice for an order intent.</p>
          </div>
          
          <div className="dev-step-card glass-panel">
            <div className="dev-step-number"><Globe size={24} /></div>
            <h3>150+ Blockchain Rails</h3>
            <p>Write integration code once and deploy across EVM and Non-EVM chains. Texnova silently handles cross-chain liquidity and gas constraints.</p>
          </div>
          
          <div className="dev-step-card glass-panel">
            <div className="dev-step-number"><LayoutTemplate size={24} /></div>
            <h3>Mock Sandbox Mode</h3>
            <p>Spin up a virtualized mainnet fork. Simulate success, failure, and edge-case states completely risk-free before deploying production APIs.</p>
          </div>
        </div>
      </section>

      {/* ═══════════════════ SDK & LIBRARIES ═══════════════════ */}
      <section className="sdk-section">
        <div className="container">
          <div className="text-center mb-8">
             <h2 className="text-4xl font-bold" style={{ color: '#0b132b', marginBottom: '16px' }}>SDKs &amp; Libraries</h2>
             <p className="text-lg text-secondary max-w-2xl mx-auto">Official client libraries strongly typed and actively maintained by the core Texnova engineering team.</p>
          </div>
          
          <div className="sdk-grid">
            <div className="sdk-card glass-panel">
              <div className="sdk-card-icon"><Box size={32} /></div>
              <h4>Node.js</h4>
              <div className="sdk-command">npm install @texnova/node</div>
            </div>
            <div className="sdk-card glass-panel">
              <div className="sdk-card-icon"><Terminal size={32} /></div>
              <h4>Python</h4>
              <div className="sdk-command">pip install texnova</div>
            </div>
            <div className="sdk-card glass-panel">
              <div className="sdk-card-icon"><Box size={32} /></div>
              <h4>Go</h4>
              <div className="sdk-command">go get texnova/go</div>
            </div>
            <div className="sdk-card glass-panel">
              <div className="sdk-card-icon"><Terminal size={32} /></div>
              <h4>React</h4>
              <div className="sdk-command">npm install @texnova/react</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ FEATURE BLOCKS ═══════════════════ */}
      <section className="dev-feature-section container">
        
        {/* GraphQL */}
        <div className="responsive-split mb-24">
          <div className="dev-feature-content">
            <h2>GraphQL API <span className="beta-tag">Beta</span></h2>
            <p>
              We are currently rolling out our GraphQL API to early access partners. Query exactly the data you need across transactions, customers, and settlement batches in a single round trip to eliminate over-fetching.
            </p>
            <div>
               <a href="/contact" className="btn btn-outline text-base">Request Early Access</a>
            </div>
          </div>
          <div className="feature-art-box">
             <Database size={100} color="#0047ff" strokeWidth={1} style={{ opacity: 0.8 }} />
          </div>
        </div>

        {/* Webhooks */}
        <div className="responsive-split">
          <div className="feature-art-box" style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.05), transparent)' }}>
             <div className="webhook-log-window">
               <div style={{ color: '#C3E88D', marginBottom: '12px' }}>POST /webhooks/texnova HTTP/1.1</div>
               <div>{'{'}</div>
               <div style={{ paddingLeft: '16px' }}>
                 <span style={{ color: '#89DDFF' }}>"id"</span>: <span style={{ color: '#C3E88D' }}>"evt_909xZ"</span>,<br/>
                 <span style={{ color: '#89DDFF' }}>"type"</span>: <span style={{ color: '#C3E88D' }}>"payment_intent.settled"</span>,<br/>
                 <span style={{ color: '#89DDFF' }}>"data"</span>: {'{'}...{'}'}
               </div>
               <div>{'}'}</div>
               <div style={{ color: '#FFCB6B', marginTop: '12px' }}>HTTP/1.1 200 OK</div>
             </div>
          </div>
          <div className="dev-feature-content">
            <h2>Guaranteed Webhooks</h2>
            <p>
              Never miss a payment state change. Our webhook system ensures 99.999% delivery rate with automatic retries, exponential backoff, and localized endpoint signature verification via HMAC.
            </p>
            <div>
               <a href="/docs/webhooks" className="btn btn-primary text-base" style={{ background: '#10B981', borderColor: '#10B981', boxShadow: '0 4px 14px rgba(16,185,129,0.3)' }}>
                 Explore Event Types <ArrowRight size={18} />
               </a>
            </div>
          </div>
        </div>

      </section>

      <CTA />

    </main>
  );
}
