import { Building2, ShieldCheck, HardDrive, Handshake } from 'lucide-react';
import CTA from '@/components/CTA';
import './about.css';

export const metadata = {
  title: 'About Us | Texnova',
  description: 'Learn about Texnova, our mission, security standards, and the infrastructure that powers global crypto payments.',
};

export default function About() {
  return (
    <div className="about-page">
      <section className="section about-hero text-center animate-in">
        <div className="container">
          <h1 className="mb-4">Building the <span className="text-accent-gradient">financial layer</span> of the internet</h1>
          <p className="text-secondary" style={{ maxWidth: '750px', margin: '0 auto' }}>
            We believe that moving value on the internet should be as fast, cheap, and secure as moving data. Our software and APIs seamlessly bridge the worlds of crypto and fiat.
          </p>
        </div>
      </section>

      <section className="section bg-secondary">
        <div className="container">
          <div className="grid grid-cols-2" style={{ gap: '60px', alignItems: 'center' }}>
            <div>
              <h2 className="mb-4">Why Texnova exists</h2>
              <p className="text-secondary mb-4" style={{ fontSize: '1.1rem' }}>
                For too long, integrating crypto payments meant dealing with fragmented liquidity, complex key management, and volatile exchange rates.
              </p>
              <p className="text-secondary mb-4" style={{ fontSize: '1.1rem' }}>
                We founded Texnova to build an enterprise-level abstraction layer over these complexities. We handle the heavy lifting of blockchain interactions, so you can focus entirely on your core product experience.
              </p>
            </div>
            <div className="stats-grid">
              <div className="glass-panel text-center stat">
                <div className="stat-number text-accent">150+</div>
                <div className="stat-label">Countries Supported</div>
              </div>
              <div className="glass-panel text-center stat">
                <div className="stat-number text-accent">15</div>
                <div className="stat-label">Blockchains</div>
              </div>
              <div className="glass-panel text-center stat">
                <div className="stat-number text-accent">$2B+</div>
                <div className="stat-label">Volume Processed</div>
              </div>
              <div className="glass-panel text-center stat">
                <div className="stat-number text-accent">99.99%</div>
                <div className="stat-label">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="text-center mb-12">Uncompromising Trust</h2>
          <div className="trust-pillars">
            <div className="glass-panel pillar-card text-center">
              <HardDrive size={36} className="text-accent mx-auto block mb-4" />
              <h3>Infrastructure Reliability</h3>
              <p className="text-secondary mt-2">
                Our active-active multi-region deployment ensures lightning fast response times and five-nines (99.999%) availability during peak network congestion.
              </p>
            </div>

            <div className="glass-panel pillar-card text-center">
              <ShieldCheck size={36} className="text-accent mx-auto block mb-4" />
              <h3>Security Standards</h3>
              <p className="text-secondary mt-2">
                We employ HSMs (Hardware Security Modules), multi-party computation (MPC) for hot wallets, and physical airgaps for cold storage.
              </p>
            </div>

            <div className="glass-panel pillar-card text-center">
              <Building2 size={36} className="text-accent mx-auto block mb-4" />
              <h3>Compliance First</h3>
              <p className="text-secondary mt-2">
                Our built-in AML/KYC modules proactively scan addresses against OFAC sanctions and global blacklists before routing any transaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-secondary text-center">
        <div className="container">
          <h2 className="mb-12">Backed by industry leaders</h2>
          <div className="grid grid-cols-4" style={{ gap: '40px', alignItems: 'center', opacity: 0.6 }}>
             <h3>Sequoia</h3>
             <h3>a16z crypto</h3>
             <h3>Paradigm</h3>
             <h3>Bessemer Venture</h3>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
