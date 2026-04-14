import { Building2, ShieldCheck, HardDrive, Globe2, Zap, LayoutGrid, Users2 } from 'lucide-react';
import CTA from '@/components/CTA';
import './about.css';

export const metadata = {
  title: 'About Us | Texnova',
  description: 'Learn about Texnova, our mission, security standards, and the infrastructure that powers global crypto payments.',
};

export default function About() {
  return (
    <div className="about-page">
      {/* ─── Hero Section ─── */}
      <section className="about-hero text-center">
        <div className="container">
          <div className="about-hero-badge">Our Mission</div>
          <h1>Building the <span className="text-accent-gradient">financial layer</span> of the internet</h1>
          <p>
            We believe that moving value on the internet should be as fast, cheap, and secure as moving data. 
            Texnova provides the infrastructure to bridge traditional finance with the programmable economy.
          </p>
        </div>
      </section>

      {/* ─── Story / Why Section ─── */}
      <section className="about-story">
        <div className="container">
          <div className="story-grid">
            <div className="story-content">
              <div className="usp-badge" style={{ marginBottom: '16px' }}>
                <span className="usp-badge-fire">✨</span> The Texnova Story
              </div>
              <h2>Why we built Texnova</h2>
              <div className="story-text">
                <p>
                  For too long, integrating crypto payments meant dealing with fragmented liquidity, 
                  complex key management, and volatile exchange rates. Enterprise adoption was stalled 
                  by the very tools meant to enable it.
                </p>
                <p>
                  We founded Texnova to build an enterprise-level abstraction layer over these complexities. 
                  By handling the heavy lifting of blockchain interactions, we allow business leaders to 
                  focus entirely on their core product experience rather than the plumbing.
                </p>
              </div>
            </div>

            <div className="stats-grid">
              <div className="stat-card">
                <span className="stat-number">150+</span>
                <span className="stat-label">Countries Support</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">15+</span>
                <span className="stat-label">Blockchains</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">$2B+</span>
                <span className="stat-label">Volume Processed</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">99.99%</span>
                <span className="stat-label">Infra Uptime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Trust Pillars Section ─── */}
      <section className="about-trust">
        <div className="container">
          <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto 60px' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, letterSpacing: '-0.02em' }}>Uncompromising Trust</h2>
            <p className="text-secondary" style={{ fontSize: '1.1rem', marginTop: '16px' }}>
              Financial services require a foundation of absolute reliability. Our three pillars ensure 
              your business is always on solid ground.
            </p>
          </div>

          <div className="trust-pillars">
            <div className="pillar-card">
              <div className="pillar-icon-wrap">
                <HardDrive size={32} />
              </div>
              <h3>Infrastructure Reliability</h3>
              <p>
                Our active-active multi-region deployment ensures lightning fast response times and five-nines (99.999%) availability during peak network congestion.
              </p>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon-wrap">
                <ShieldCheck size={32} />
              </div>
              <h3>Security Standards</h3>
              <p>
                We employ HSMs (Hardware Security Modules), multi-party computation (MPC) for hot wallets, and physical airgaps for cold storage.
              </p>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon-wrap">
                <Building2 size={32} />
              </div>
              <h3>Compliance First</h3>
              <p>
                Our built-in AML/KYC modules proactively scan addresses against OFAC sanctions and global blacklists before routing any transaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Partners Section ─── */}
      <section className="about-partners">
        <div className="container">
          <div className="usp-badge" style={{ margin: '0 auto 20px' }}>
            <Globe2 size={14} style={{ marginRight: '6px' }} /> Global Backing
          </div>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '12px' }}>Backed by industry leaders</h2>
          <p className="text-secondary" style={{ marginBottom: '48px' }}>Empowered by the world's most innovative venture capital firms.</p>
          
          <div className="partners-grid">
             <div className="partner-item">Sequoia</div>
             <div className="partner-item">a16z crypto</div>
             <div className="partner-item">Paradigm</div>
             <div className="partner-item">Bessemer</div>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
