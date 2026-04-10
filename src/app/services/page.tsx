import type { Metadata } from 'next';
import CTA from '@/components/CTA';
import { Layers, Zap, Wallet, BarChart3, Globe, DollarSign, CheckCircle2, Database, RefreshCw } from 'lucide-react';

export const metadata: Metadata = {
  title: 'What We Provide | Texnova Services',
  description: 'Explore Texnova\'s core technical pillars: Global Payment Rails, Embedded Wallets, and Programmable Treasury with our transparent 0.1% fee model.',
};
import './services.css';

export default function Services() {
  return (
    <main className="services-page">
      {/* Hero Section */}
      <section className="services-hero text-center container">
        <div className="mx-auto mb-6 flex justify-center">
          <div className="services-badge">Everything you need</div>
        </div>
        <h1 className="hero-title" style={{ fontSize: '4.5rem', marginBottom: '24px' }}>What We Provide.</h1>
        <p className="text-secondary mx-auto" style={{ fontSize: '1.25rem', maxWidth: '750px', marginBottom: '80px' }}>
          One unified API integration connects your enterprise platform directly to the entire decentralized financial backbone. We provide the infrastructure; you build the future.
        </p>
      </section>

      {/* Services Breakdown */}
      <section className="container mb-24 services-list">
        <h2 className="text-3xl text-center text-white mb-12 font-bold tracking-widest uppercase">Our Core Technical Pillars</h2>
        
        <div className="service-card glass-panel flex mb-8">
          <div className="service-icon-wrap" style={{ background: 'rgba(0, 240, 255, 0.05)' }}>
            <Zap size={48} style={{ color: 'var(--glow-cyan)' }} />
          </div>
          <div className="service-content">
            <h3 className="text-3xl text-white mb-4">Global Payment Rails</h3>
            <p className="text-secondary text-lg mb-6">
              Instantly route capital globally bypassing traditional correspondent banking networks. We provide cross-border settlement rails allowing you to liquidate stablecoins directly to fiat across 120+ local jurisdictions.
            </p>
            <ul className="text-secondary flex flex-col gap-3">
              <li className="flex items-center gap-3"><CheckCircle2 size={20} style={{ color: 'var(--glow-cyan)' }} /> Real-time T+0 settlement</li>
              <li className="flex items-center gap-3"><CheckCircle2 size={20} style={{ color: 'var(--glow-cyan)' }} /> Complete liquidity bridging</li>
              <li className="flex items-center gap-3"><CheckCircle2 size={20} style={{ color: 'var(--glow-cyan)' }} /> Redundant network routing</li>
            </ul>
          </div>
        </div>

        <div className="service-card glass-panel flex mb-8">
          <div className="service-icon-wrap" style={{ background: 'rgba(138, 43, 226, 0.05)' }}>
            <Wallet size={48} style={{ color: 'var(--glow-purple)' }} />
          </div>
          <div className="service-content">
            <h3 className="text-3xl text-white mb-4">Embedded Wallets & Finance</h3>
            <p className="text-secondary text-lg mb-6">
              We provide the programmatic generation of non-custodial and custodial wallets. Give your users a fully white-labeled Web3 experience protected by military-grade MPC architecture and gas abstraction tools.
            </p>
            <ul className="text-secondary flex flex-col gap-3">
              <li className="flex items-center gap-3"><CheckCircle2 size={20} style={{ color: 'var(--glow-purple)' }} /> User-friendly Gas Abstraction</li>
              <li className="flex items-center gap-3"><CheckCircle2 size={20} style={{ color: 'var(--glow-purple)' }} /> SDKs for 5+ languages</li>
              <li className="flex items-center gap-3"><CheckCircle2 size={20} style={{ color: 'var(--glow-purple)' }} /> Multi-Party Computation secure keys</li>
            </ul>
          </div>
        </div>

        <div className="service-card glass-panel flex mb-8">
          <div className="service-icon-wrap" style={{ background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.05), rgba(138, 43, 226, 0.05))' }}>
            <Layers size={48} className="text-white" />
          </div>
          <div className="service-content">
            <h3 className="text-3xl text-white mb-4">Programmable Treasury</h3>
            <p className="text-secondary text-lg mb-6">
              We provide automated yield generation on your idle reserve capital. Our engine securely routes corporate treasury assets into risk-assessed, institutional-grade decentralized protocols.
            </p>
            <ul className="text-secondary flex flex-col gap-3">
              <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-white" /> Automated algorithmic yield</li>
              <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-white" /> Real-time portfolio monitoring</li>
              <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-white" /> Strict risk-management safeguards</li>
            </ul>
          </div>
        </div>

        <div className="service-card glass-panel flex mb-8">
          <div className="service-icon-wrap" style={{ background: 'rgba(0, 240, 255, 0.05)' }}>
            <Database size={48} style={{ color: 'var(--glow-cyan)' }} />
          </div>
          <div className="service-content">
            <h3 className="text-3xl text-white mb-4">Asset Tokenization Engine</h3>
            <p className="text-secondary text-lg mb-6">
              Launch regulatory-compliant Real-World Asset (RWA) tokens seamlessly. Our infrastructure handles the smart contract deployment, lifecycle management, and cap-table syncing directly to public networks.
            </p>
            <ul className="text-secondary flex flex-col gap-3">
              <li className="flex items-center gap-3"><CheckCircle2 size={20} style={{ color: 'var(--glow-cyan)' }} /> RWA & Security Token lifecycle</li>
              <li className="flex items-center gap-3"><CheckCircle2 size={20} style={{ color: 'var(--glow-cyan)' }} /> Automated cap-table management</li>
              <li className="flex items-center gap-3"><CheckCircle2 size={20} style={{ color: 'var(--glow-cyan)' }} /> SEC/MiCA compliance rulesets</li>
            </ul>
          </div>
        </div>

        <div className="service-card glass-panel flex mb-8">
          <div className="service-icon-wrap" style={{ background: 'rgba(138, 43, 226, 0.05)' }}>
            <RefreshCw size={48} style={{ color: 'var(--glow-purple)' }} />
          </div>
          <div className="service-content">
            <h3 className="text-3xl text-white mb-4">Global Fiat Ramps</h3>
            <p className="text-secondary text-lg mb-6">
              Accept fiat deposits and handle payouts in 50+ local currencies. We abstract away the regulatory burden so you can convert physical capital directly into on-chain balances with maximum efficiency.
            </p>
            <ul className="text-secondary flex flex-col gap-3">
              <li className="flex items-center gap-3"><CheckCircle2 size={20} style={{ color: 'var(--glow-purple)' }} /> 50+ Local currencies supported</li>
              <li className="flex items-center gap-3"><CheckCircle2 size={20} style={{ color: 'var(--glow-purple)' }} /> API-driven deposit endpoints</li>
              <li className="flex items-center gap-3"><CheckCircle2 size={20} style={{ color: 'var(--glow-purple)' }} /> Best-execution FX routes</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Business Model Section */}
      <section className="container mb-24 business-model-section relative">
        <div className="model-glow"></div>
        <div className="glass-panel relative z-10" style={{ padding: '80px 40px', borderColor: 'var(--glow-purple)' }}>
          <div className="text-center mb-16">
            <h2 className="text-4xl text-white mb-6 font-bold" style={{ textShadow: '0 0 20px rgba(138,43,226,0.3)' }}>Our Business Model</h2>
            <p className="text-secondary text-xl mx-auto" style={{ maxWidth: '800px' }}>
              We believe infrastructure should be radically transparent. We make money purely on execution volume and enterprise software subscriptions, completely decoupled from asset custody.
            </p>
          </div>
          
          <div className="grid grid-cols-3 gap-8 model-grid">
            <div className="glass-panel text-center p-8 model-card" style={{ background: 'rgba(0,0,0,0.4)', padding: '40px' }}>
              <div className="model-icon mx-auto mb-6" style={{ background: 'rgba(0, 240, 255, 0.1)', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <DollarSign size={40} style={{ color: 'var(--glow-cyan)' }} />
              </div>
              <h4 className="text-2xl text-white mb-4">Flat 0.1% Processing</h4>
              <p className="text-secondary">
                We charge a strictly flat 0.1% base processing fee on every network transaction. Absolutely zero hidden spread margins, FX padding, or surprise volume thresholds.
              </p>
            </div>
            
            <div className="glass-panel text-center p-8 model-card" style={{ background: 'rgba(0,0,0,0.4)', padding: '40px' }}>
              <div className="model-icon mx-auto mb-6" style={{ background: 'rgba(138, 43, 226, 0.1)', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <BarChart3 size={40} style={{ color: 'var(--glow-purple)' }} />
              </div>
              <h4 className="text-2xl text-white mb-4">Enterprise SaaS Tiers</h4>
              <p className="text-secondary">
                For major institutions, we offer dedicated hosting environments and scalable API subscriptions starting at $3.5k/mo, which drastically drops the transactional limits.
              </p>
            </div>
            
            <div className="glass-panel text-center p-8 model-card" style={{ background: 'rgba(0,0,0,0.4)', padding: '40px' }}>
              <div className="model-icon mx-auto mb-6" style={{ background: 'rgba(0, 240, 255, 0.1)', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Globe size={40} style={{ color: 'var(--glow-cyan)' }} />
              </div>
              <h4 className="text-2xl text-white mb-4">Zero Custody Fees</h4>
              <p className="text-secondary">
                Holding 1 million or 1 billion on our platform costs you identically: $0. We never charge custody, deposit, or ongoing "assets under management" taxes on your capital.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
