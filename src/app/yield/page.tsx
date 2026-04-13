import type { Metadata } from 'next';
import { AreaChart, BadgePercent, Landmark, ShieldCheck, ArrowRight } from 'lucide-react';
import CTA from '@/components/CTA';
import './yield.css';

export const metadata: Metadata = {
  title: 'Treasury Yield | Texnova',
  description: 'Generate institutional-grade yield on your stablecoin treasury balances with automated sweeps.',
};

export default function Yield() {
  return (
    <main style={{ background: '#fff', paddingBottom: '120px' }}>
      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="yield-hero">
        <div className="container responsive-split">
          
          <div className="yield-hero-content">
             <div className="eyebrow" style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0047ff', marginBottom: '14px' }}>
              Treasury Management
            </div>
            <h1 className="hero-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, lineHeight: '1.06', letterSpacing: '-0.03em', color: '#0b132b', marginBottom: '24px' }}>
              Put your idle balances to work.
            </h1>
            <p className="hero-subtitle" style={{ fontSize: '1.1rem', color: '#475569', lineHeight: '1.7', maxWidth: '500px', marginBottom: '40px' }}>
              Generate institutional-grade yield on your USDC and EURC balances. Automatic sweeping ensures your funds are always earning while remaining instantly liquid.
            </p>
            <div className="flex gap-4">
              <a href="/contact" className="btn btn-primary">
                Contact Sales
              </a>
              <a href="/docs/yield" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <AreaChart size={18} /> View APY Data
              </a>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="yield-calc-card">
              <div className="yield-calc-row">
                <div>
                  <h4 style={{ color: '#0b132b', fontWeight: 700, marginBottom: '4px' }}>Target APY</h4>
                  <p style={{ color: '#64748b', fontSize: '0.9rem' }}>Real-time floating rate</p>
                </div>
                <div className="yield-val-big">4.25%</div>
              </div>
              
              <div className="yield-calc-row">
                 <div>
                  <h4 style={{ color: '#0b132b', fontWeight: 700, marginBottom: '4px' }}>Projected Earnings</h4>
                  <p style={{ color: '#64748b', fontSize: '0.9rem' }}>Based on $1M deposit (1yr)</p>
                </div>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0047ff' }}>+$42,500 <span style={{fontSize:'1rem', color:'#64748b'}}>USDC</span></div>
              </div>
              
              <button className="btn btn-primary w-full mt-4" style={{ width: '100%', padding: '16px' }}>Start Earning Today</button>
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════════ HOW IT WORKS ═══════════════════ */}
      <section className="container" style={{ paddingTop: '100px' }}>
         <div className="text-center" style={{ marginBottom: '60px' }}>
            <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: '#0b132b', marginBottom: '16px' }}>How it works</h2>
            <p style={{ color: '#475569', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
              Our treasury abstraction connects directly into heavily audited decentralized money markets to autonomously capture yield.
            </p>
         </div>

         <div className="responsive-split" style={{ gap: '60px', alignItems: 'flex-start' }}>
            <div className="yield-steps">
               <div className="yield-feature-card">
                 <div className="yf-step">1</div>
                 <div>
                   <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0b132b', marginBottom: '8px' }}>Opt-in your balances</h3>
                   <p style={{ color: '#475569', lineHeight: 1.6 }}>Activate Treasury Yield directly from your Texnova Dashboard. No additional accounts or third-party integrations required.</p>
                 </div>
               </div>
               
               <div className="yield-feature-card">
                 <div className="yf-step">2</div>
                 <div>
                   <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0b132b', marginBottom: '8px' }}>Automatic Sweeping</h3>
                   <p style={{ color: '#475569', lineHeight: 1.6 }}>At the end of each business day, idle stablecoins above your reserve operating threshold are automatically swept into yield-bearing smart contracts.</p>
                 </div>
               </div>
               
               <div className="yield-feature-card">
                 <div className="yf-step">3</div>
                 <div>
                   <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0b132b', marginBottom: '8px' }}>Instant Liquidity</h3>
                   <p style={{ color: '#475569', lineHeight: 1.6 }}>Need to make a payout? Yield funds are instantly un-staked and deployed for transactions the second an API request is initiated.</p>
                 </div>
               </div>
            </div>

            <div style={{ padding: '40px', background: '#f8fafc', borderRadius: '24px', border: '1px solid #e2e8f0' }}>
               <ShieldCheck size={48} color="#10B981" style={{ marginBottom: '24px' }} />
               <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0b132b', marginBottom: '16px' }}>Institutional Security</h3>
               <p style={{ color: '#475569', lineHeight: 1.6, marginBottom: '24px' }}>
                 We only integrate with Tier 1 lending protocols that have undergone rigorous multi-audit security pipelines. Your principal is algorithmically over-collateralized.
               </p>
               <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                 <li style={{ display: 'flex', gap: '12px', alignItems: 'center', color: '#0b132b', fontWeight: 600 }}>
                   <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981' }}></div> Aave v3 Integrated
                 </li>
                 <li style={{ display: 'flex', gap: '12px', alignItems: 'center', color: '#0b132b', fontWeight: 600 }}>
                   <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981' }}></div> Real-time Proof of Reserves
                 </li>
                 <li style={{ display: 'flex', gap: '12px', alignItems: 'center', color: '#0b132b', fontWeight: 600 }}>
                   <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981' }}></div> Slash-Protection Insurance Fund
                 </li>
               </ul>
            </div>
         </div>
      </section>

      <CTA />
    </main>
  );
}
