import type { Metadata } from 'next';
import CTA from '@/components/CTA';
import { Shield, Lock, FileCheck, Server } from 'lucide-react';
import './security.css';

export const metadata: Metadata = {
  title: 'Security & Compliance | Bank-grade Crypto Infrastructure',
  description: 'Texnova meets SOC2 and ISO 27001 standards. Learn about our MPC cryptography, cold storage security, and continuous third-party audits.',
};

export default function Security() {
  return (
    <main className="security-page">
      <section className="security-hero text-center container">
        <Shield size={64} style={{ color: 'var(--glow-purple)', margin: '0 auto 32px' }} />
        <h1 className="hero-title" style={{ fontSize: '4.5rem', marginBottom: '24px' }}>Bank-Grade Security.</h1>
        <p className="text-secondary mx-auto" style={{ fontSize: '1.25rem', maxWidth: '750px', marginBottom: '80px' }}>
          At Texnova, security is not a feature – it is the foundational layer. We employ defense-in-depth architecture covering infrastructure, application, and organizational security.
        </p>
      </section>

      <section className="container mb-24">
        <div className="grid grid-cols-2 gap-8 security-grid">
          <div className="glass-panel" style={{ padding: '40px' }}>
             <Lock size={40} style={{ color: 'var(--glow-cyan)', marginBottom: '24px' }} />
             <h3 className="text-2xl text-white mb-4">SOC2 Type II Target</h3>
             <p className="text-secondary text-lg">
                We independently verify our controls covering security, availability, and processing integrity. Routine audits ensure your data and assets are strictly protected.
             </p>
          </div>
          <div className="glass-panel" style={{ padding: '40px' }}>
             <FileCheck size={40} style={{ color: 'var(--glow-purple)', marginBottom: '24px' }} />
             <h3 className="text-2xl text-white mb-4">ISO 27001 Infrastructure</h3>
             <p className="text-secondary text-lg">
                Our host environments enforce the strictest international standards for Information Security Management Systems, ensuring robust operational protocols.
             </p>
          </div>
          <div className="glass-panel" style={{ padding: '40px' }}>
             <Server size={40} style={{ color: 'var(--glow-cyan)', marginBottom: '24px' }} />
             <h3 className="text-2xl text-white mb-4">HSM & Cold Storage</h3>
             <p className="text-secondary text-lg">
                The massive majority of funds are held in secure, geographically distributed offline cold storage, utilizing Hardware Security Modules to protect critical signing keys.
             </p>
          </div>
          <div className="glass-panel" style={{ padding: '40px' }}>
             <Shield size={40} style={{ color: 'var(--glow-purple)', marginBottom: '24px' }} />
             <h3 className="text-2xl text-white mb-4">Granular RBAC</h3>
             <p className="text-secondary text-lg">
                Enterprise dashboard features completely customizable Role-Based Access Controls. You define exactly who can view, initiate, and approve outbound capital flow.
             </p>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
