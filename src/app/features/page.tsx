import { Server, Zap, Globe2, Network, BarChart3, Shield, Layers } from 'lucide-react';
import './features.css';

export const metadata = {
  title: 'Features | Texnova',
  description: 'Explore the complete payment infrastructure built for internet businesses.',
};

export default function Features() {
  return (
    <div className="features-page">
      <section className="section features-hero text-center animate-in">
        <div className="container">
          <h1 className="mb-4">A complete stack for <span className="text-accent-gradient">crypto payments</span></h1>
          <p className="text-secondary" style={{ maxWidth: '700px', margin: '0 auto' }}>
            We&apos;ve built a robust infrastructure so you don&apos;t have to. From checkout UI to smart contract execution, everything works seamlessly.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="feature-grid">
            <div className="glass-panel feature-card">
              <div className="feature-icon"><Server size={32} /></div>
              <h3>Accept Crypto Payments</h3>
              <p className="text-secondary">Provide your customers with a frictionless checkout experience. Support for over 100+ tokens and 15 blockchains natively.</p>
            </div>
            
            <div className="glass-panel feature-card">
              <div className="feature-icon"><Zap size={32} /></div>
              <h3>Instant Settlement</h3>
              <p className="text-secondary">Funds are settled to your wallet via smart contracts instantly. Say goodbye to rolling reserves and T+3 settlement days.</p>
            </div>

            <div className="glass-panel feature-card">
              <div className="feature-icon"><Globe2 size={32} /></div>
              <h3>Global Payouts</h3>
              <p className="text-secondary">Programmatically route funds to vendors, affiliates, or users anywhere in the world within seconds.</p>
            </div>

            <div className="glass-panel feature-card">
              <div className="feature-icon"><Network size={32} /></div>
              <h3>Multi-chain Routing</h3>
              <p className="text-secondary">Our smart engine automatically quotes users the best network paths to minimize gas fees for both sides.</p>
            </div>

            <div className="glass-panel feature-card">
              <div className="feature-icon"><BarChart3 size={32} /></div>
              <h3>Dashboard Analytics</h3>
              <p className="text-secondary">View detailed financial reporting, export CSVs for accounting, and track conversion metrics in real time.</p>
            </div>

            <div className="glass-panel feature-card">
              <div className="feature-icon"><Layers size={32} /></div>
              <h3>Integration Flexibility</h3>
              <p className="text-secondary">Use our pre-built Checkout UI, Hosted payment pages, or build entirely custom flows with our core API.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-secondary" style={{ borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
           <h2 className="text-center mb-12">Seamless Fiat Integration</h2>
           <div className="grid grid-cols-2" style={{ gap: '60px', alignItems: 'center' }}>
             <div>
                <img src="/images/dashboard.png" alt="Fiat Settlement Options" style={{ width: '100%', borderRadius: 'var(--radius-lg)', opacity: 0.8 }} className="glass-panel" />
             </div>
             <div>
                <h3 className="mb-4">Settle in USD, EUR, or GBP</h3>
                <p className="text-secondary mb-6">
                   Don&apos;t want to hold crypto? No problem. Texnova can automatically convert incoming crypto payments into fiat and settle directly to your corporate bank account.
                </p>
                <ul className="feature-list">
                   <li><Globe2 size={20} className="text-accent" /> <span>Next-day bank payouts in 40+ countries</span></li>
                   <li><Zap size={20} className="text-accent" /> <span>Zero exchange rate volatility risk</span></li>
                   <li><BarChart3 size={20} className="text-accent" /> <span>Unified accounting and reconciliation</span></li>
                </ul>
             </div>
           </div>
        </div>
      </section>

      <section className="section bg-secondary">
        <div className="container">
          <div className="feature-highlight">
            <div className="highlight-content">
              <h2 className="mb-4">Enterprise-grade Security</h2>
              <p className="text-secondary mb-4">
                Security is not an afterthought. Our infrastructure is built to protect your funds and your users&apos; data at every layer.
              </p>
              <ul className="highlight-list">
                <li><Shield className="text-accent" size={20} /> SOC 2 Type II Certified</li>
                <li><Shield className="text-accent" size={20} /> Smart Contracts Audited by top-tier firms</li>
                <li><Shield className="text-accent" size={20} /> Real-time AML transaction screening</li>
                <li><Shield className="text-accent" size={20} /> End-to-end payload encryption</li>
              </ul>
            </div>
            <div className="highlight-visual">
              <img src="/images/checkout.png" alt="Secure Checkout Widget" className="glass-panel mockup-ui-img" style={{ maxWidth: '100%', height: 'auto', borderRadius: 'var(--radius-lg)' }} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
