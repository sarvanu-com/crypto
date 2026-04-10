import Link from 'next/link';
import { ArrowRight, Activity, Globe2, LayoutTemplate, CheckCircle2 } from 'lucide-react';
import CTA from '@/components/CTA';
import GlobeCanvas from '@/components/GlobeCanvas';
import './home.css';

export default function Home() {
  return (
    <main>

      {/* ═══════════════════════════════════════════════════
          PARTNER LOGO TICKER — top of page
      ═══════════════════════════════════════════════════ */}
      <div className="partner-ticker-strip" style={{ borderTop: 'none' }}>
        <div className="partner-ticker-inner">
          {/* First set */}
          {['Bitso','Rapyd','● Circle','deriv','Thunes.','d·local','LiquidX','Nuvei','Paymongo','Xendit','Airwallex','Paysend'].map((name,i) => (
            <span key={i} className="partner-name">{name}</span>
          ))}
          {/* Duplicate for infinite scroll */}
          {['Bitso','Rapyd','● Circle','deriv','Thunes.','d·local','LiquidX','Nuvei','Paymongo','Xendit','Airwallex','Paysend'].map((name,i) => (
            <span key={`d${i}`} className="partner-name">{name}</span>
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════════════ */}
      <section className="hero-section">
        <div className="hero-glow"></div>

        <div className="container">
          <div className="hero-grid animate-in">

            {/* ── Left: Text Content ── */}
            <div className="hero-content">

              {/* Main USP badge */}
              <div className="usp-badge">
                <span>World&apos;s Lowest Fee</span>
                <span className="usp-badge-rate">0.1%</span>
                <span className="usp-badge-sep">per transaction</span>
              </div>

              <h1 className="hero-title">
                Send Crypto <span className="hero-title-accent">Globally</span><br />
                at Just 0.1% Fee
              </h1>

              <p className="hero-subtitle">
                Texnova offers the <strong>world&apos;s smallest crypto transfer fee — only 0.1%</strong> per transaction. Send, receive, and swap digital assets across 150+ blockchains instantly. No hidden charges. No minimums.
              </p>

              <div className="goal-pills">
                <div className="goal-pill"><span className="goal-pill-icon">⚡</span>Instant Settlement</div>
                <div className="goal-pill"><span className="goal-pill-icon">💸</span>0.1% Only Fee</div>
                <div className="goal-pill"><span className="goal-pill-icon">🌐</span>150+ Chains</div>
              </div>

              <div className="hero-actions">
                <Link href="/dashboard" className="btn btn-primary" style={{padding:'14px 32px',fontSize:'1rem'}}>
                  Start Sending — 0.1% <ArrowRight size={18} />
                </Link>
                <Link href="/developers" className="btn btn-ghost" style={{padding:'14px 28px',fontSize:'1rem'}}>
                  How It Works <ArrowRight size={18} />
                </Link>
              </div>

              <p className="hero-trust-line">
                No sign-up fee · No monthly plan · Pay 0.1% only when you transact
              </p>
            </div>

            {/* ── Right: Animated 3D Wireframe Globe ── */}
            <div className="hero-globe-wrapper delay-200 animate-in">

              {/* Currency badge — floats top-right */}
              <div className="globe-currency-badge">
                <span className="globe-badge-flag">🇺🇸</span>
                <span className="globe-badge-label">USD</span>
              </div>

              {/* Canvas Globe */}
              <div className="globe-canvas-wrap">
                <GlobeCanvas size={440} />
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════
          FEE COMPARISON SECTION
      ═══════════════════════════════════════════════════ */}
      <section className="fee-section section">
        <div className="container">
          <div className="fee-section-header">
            <div className="section-eyebrow">Why Texnova Wins</div>
            <h2 className="fee-headline">
              Other platforms charge <span className="fee-strike">1%–3%</span>.<br/>
              We charge <span className="fee-accent-big">0.1%</span>.
            </h2>
            <p className="fee-subtext">
              That&apos;s up to <strong>300× cheaper</strong> than Coinbase, Binance, and traditional wire transfers.
              Every dollar you save stays in your wallet.
            </p>
          </div>

          <div className="fee-compare-grid">
            <div className="fee-compare-card competitor">
              <div className="fee-compare-label">Typical Platforms</div>
              <div className="fee-compare-rate">1% – 3%</div>
              <div className="fee-compare-example">On $10,000 transfer: <strong>$100–$300 lost</strong></div>
              <div className="fee-compare-items">
                <div className="fee-item bad">✗ High flat fees</div>
                <div className="fee-item bad">✗ Hidden conversion spreads</div>
                <div className="fee-item bad">✗ Minimum transfer amounts</div>
                <div className="fee-item bad">✗ 1–3 business days</div>
              </div>
            </div>

            <div className="fee-compare-card texnova">
              <div className="fee-compare-badge">TEXNOVA</div>
              <div className="fee-compare-label">Texnova</div>
              <div className="fee-compare-rate accent">0.1%</div>
              <div className="fee-compare-example">On $10,000 transfer: <strong>Only $10.00</strong></div>
              <div className="fee-compare-items">
                <div className="fee-item good">✓ 0.1% flat — always</div>
                <div className="fee-item good">✓ No hidden spreads</div>
                <div className="fee-item good">✓ No minimum amount</div>
                <div className="fee-item good">✓ Instant (seconds)</div>
              </div>
            </div>

            <div className="fee-compare-card wire">
              <div className="fee-compare-label">Bank Wire Transfer</div>
              <div className="fee-compare-rate">$25–$50 flat</div>
              <div className="fee-compare-example">On $10,000 transfer: <strong>$25–$50 + FX lost</strong></div>
              <div className="fee-compare-items">
                <div className="fee-item bad">✗ Fixed flat fees</div>
                <div className="fee-item bad">✗ FX markup 2%–4%</div>
                <div className="fee-item bad">✗ Bank hours only</div>
                <div className="fee-item bad">✗ 3–5 business days</div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════
          LIVE INFRASTRUCTURE BENTO
      ═══════════════════════════════════════════════════ */}
      <section className="section">
        <div className="container">
          <div className="section-eyebrow">Infrastructure</div>
          <h2 style={{ fontSize: '3rem', marginBottom: '16px' }}>Live Infrastructure.</h2>
          <p className="text-secondary text-lg max-w-2xl">
            Compose specialized financial apps using our modular building blocks — natively built for Web3 and optimized for the lowest-possible fees.
          </p>

          <div className="infra-grid">
            <div className="infra-item infra-large glass-panel">
              <LayoutTemplate size={32} style={{ color: 'var(--primary-blue)', marginBottom: '24px' }} />
              <h3 className="text-3xl text-primary mb-4">Embedded Wallets</h3>
              <p className="text-secondary text-lg mb-8">
                Generate white-labeled deposit addresses instantly for your users. We handle the entire custody stack — all at <strong>0.1% per transfer</strong>.
              </p>
              <div style={{ padding: '20px', background: '#0D1117', borderRadius: '12px', border: '1px solid rgba(0,71,255,0.15)' }}>
                <pre style={{ color: '#7dd3fc', fontSize: '0.85rem', overflowX: 'auto', margin: 0, lineHeight: 1.7 }}>
                  <code>{`POST /v2/transfer\n{\n  "amount": 10000,\n  "currency": "USDC",\n  "fee_rate": "0.001",   // 0.1%\n  "network": "base",\n  "to": "0x7F5...92A"\n}\n\n// fee: $10.00  |  recipient gets: $9,990.00`}</code>
                </pre>
              </div>
            </div>

            <div className="infra-item glass-panel">
              <h3 className="text-xl text-primary mb-3">Treasury Management</h3>
              <p className="text-secondary mb-6">
                Allocate idle capital into automated DeFi yield strategies — while keeping transfer costs at just 0.1%.
              </p>
              <div className="btn text-sm" style={{ background: 'rgba(0,71,255,0.07)', color: 'var(--primary-blue)', borderRadius:'8px', display:'inline-flex' }}>Explore Treasury</div>
            </div>

            <div className="infra-item glass-panel">
              <h3 className="text-xl text-primary mb-3">Global On-Ramps</h3>
              <p className="text-secondary">
                Convert EUR, USD, BRL, INR and GBP into stablecoins via highly optimized local payment rails — no inflated FX spreads.
              </p>
            </div>

            <div className="infra-item infra-wide glass-panel">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl text-primary mb-3">Enterprise Dashboard</h3>
                  <p className="text-secondary">
                    Real-time webhooks, volume analytics, multi-user teams, and granular fee reporting. Know exactly what 0.1% is saving you every day.
                  </p>
                </div>
                <Activity size={48} style={{ color: 'var(--text-muted)', flexShrink: 0 }} />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════
          METRICS SECTION
      ═══════════════════════════════════════════════════ */}
      <section className="section metrics-section">
        <div className="container">
          <p className="metrics-section-label">By the numbers — the lowest-fee crypto infrastructure</p>
          <div className="metrics-grid">
            <div className="metric-item">
              <div className="metric-number">0.1%</div>
              <div className="metric-label">World&apos;s Lowest Fee</div>
            </div>
            <div className="metric-item">
              <div className="metric-number">$12B+</div>
              <div className="metric-label">Volume Processed</div>
            </div>
            <div className="metric-item">
              <div className="metric-number">150+</div>
              <div className="metric-label">Blockchain Networks</div>
            </div>
            <div className="metric-item">
              <div className="metric-number">99.99%</div>
              <div className="metric-label">System Uptime</div>
            </div>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════
          DEVELOPER SECTION
      ═══════════════════════════════════════════════════ */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-2" style={{ alignItems: 'center', gap: '80px' }}>
            <div>
              <div className="section-eyebrow">Developer API</div>
              <h2 style={{ fontSize: '3rem', marginBottom: '16px' }}>
                Developer First. <br /><span className="text-gradient-blue">Always.</span>
              </h2>
              <p className="text-secondary text-lg mb-8">
                One API call. Cross-border settlement in seconds. Charged at 0.1% — automatically.
              </p>
              <div className="flex flex-col gap-6">
                <div className="flex gap-4">
                  <CheckCircle2 size={24} style={{ color: 'var(--primary-blue)', flexShrink: 0 }} />
                  <div>
                    <h4 className="text-primary text-lg font-bold mb-1">Auto 0.1% Fee Deduction</h4>
                    <p className="text-secondary">The SDK handles fee calculation. You just specify the amount.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 size={24} style={{ color: 'var(--primary-blue)', flexShrink: 0 }} />
                  <div>
                    <h4 className="text-primary text-lg font-bold mb-1">Idempotent Requests</h4>
                    <p className="text-secondary">Safely retry any network call without fearing duplicate charges.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 size={24} style={{ color: 'var(--primary-blue)', flexShrink: 0 }} />
                  <div>
                    <h4 className="text-primary text-lg font-bold mb-1">Instant Sandbox</h4>
                    <p className="text-secondary">Spin up a full mainnet-forked sandbox in one click — test 0.1% transfers immediately.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="dev-editor-window">
              <div className="dev-editor-header">
                <div className="dev-dot" style={{ background: '#FF5F56' }}></div>
                <div className="dev-dot" style={{ background: '#FFBD2E' }}></div>
                <div className="dev-dot" style={{ background: '#27C93F' }}></div>
                <span style={{color:'rgba(255,255,255,0.3)',fontSize:'0.8rem',marginLeft:'auto'}}>texnova-sdk.ts</span>
              </div>
              <pre style={{ padding: '28px', margin: 0, color: '#A6ACCD', fontSize: '0.9rem', overflowX: 'auto', lineHeight: '1.7' }}>
                <code>
                  <span style={{ color: '#89DDFF' }}>import</span>{' { Texnova }'} <span style={{ color: '#89DDFF' }}>from</span> <span style={{ color: '#C3E88D' }}>&apos;@texnova/sdk&apos;</span>;{'\n\n'}
                  <span style={{ color: '#89DDFF' }}>const</span> client = <span style={{ color: '#89DDFF' }}>new</span> <span style={{ color: '#FFCB6B' }}>Texnova</span>(process.env.<span style={{ color: '#F07178' }}>TEXNOVA_KEY</span>);{'\n\n'}
                  <span style={{ color: '#676E95', fontStyle: 'italic' }}>{'// 0.1% fee auto-calculated'}</span>{'\n'}
                  <span style={{ color: '#89DDFF' }}>const</span> tx = <span style={{ color: '#89DDFF' }}>await</span> client.transfer.<span style={{ color: '#82AAFF' }}>send</span>({'{\n'})
                  {'  '}amount: <span style={{ color: '#F78C6C' }}>10000</span>,{'\n'}
                  {'  '}currency: <span style={{ color: '#C3E88D' }}>&apos;USDC&apos;</span>,{'\n'}
                  {'  '}to: <span style={{ color: '#C3E88D' }}>&apos;0x8A2...9F1&apos;</span>,{'\n'}
                  {'  '}network: <span style={{ color: '#C3E88D' }}>&apos;arbitrum&apos;</span>,{'\n'}
                  {'}'});{'\n\n'}
                  <span style={{ color: '#676E95', fontStyle: 'italic' }}>{'// tx.fee     → $10.00  (0.1%)'}</span>{'\n'}
                  <span style={{ color: '#676E95', fontStyle: 'italic' }}>{'// tx.received → $9,990.00'}</span>{'\n'}
                  <span style={{ color: '#676E95', fontStyle: 'italic' }}>{'// tx.status   → "settled"'}</span>
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      <CTA />

      {/* ═══════════════════════════════════════════════════
          NETWORK MARQUEE
      ═══════════════════════════════════════════════════ */}
      <section className="section" style={{ padding: '60px 0', borderTop: '1px solid var(--border-glass)', background: 'var(--bg-surface-elevated)' }}>
        <div className="container text-center mb-8">
          <h4 className="text-sm uppercase tracking-widest text-secondary">
            <Globe2 size={16} className="inline mr-2" style={{ verticalAlign: 'text-bottom' }} /> Integrated Networks — All at 0.1%
          </h4>
        </div>
        <div className="marquee-container">
          <div className="marquee-content">
            {['Ethereum','Polygon','Solana','Avalanche','Arbitrum','Optimism','Base','Circle USDC','BNB Chain','Fantom','Aptos','Sui'].map((n, i) => (
              <span key={i} className="marquee-item">
                <span style={{ width:8,height:8,borderRadius:'50%',background:i%2===0?'var(--primary-blue)':'var(--glow-purple)',display:'inline-block' }}></span>
                {n}
              </span>
            ))}
            {['Ethereum','Polygon','Solana','Avalanche','Arbitrum','Optimism','Base','Circle USDC','BNB Chain','Fantom','Aptos','Sui'].map((n, i) => (
              <span key={`d${i}`} className="marquee-item">
                <span style={{ width:8,height:8,borderRadius:'50%',background:i%2===0?'var(--primary-blue)':'var(--glow-purple)',display:'inline-block' }}></span>
                {n}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div style={{ height: '80px' }}></div>
    </main>
  );
}
