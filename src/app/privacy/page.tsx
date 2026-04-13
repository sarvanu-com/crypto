import type { Metadata } from 'next';
import '../terms/legal.css';

export const metadata: Metadata = {
  title: 'Privacy Policy | Texnova',
  description: 'How we manage, protect, and utilize integration data.',
};

export default function Privacy() {
  return (
    <main style={{ background: '#fff' }}>
      <section className="legal-hero">
        <h1 className="hero-title" style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 800, color: '#0b132b', marginBottom: '16px' }}>
          Privacy Policy
        </h1>
        <p style={{ color: '#475569', fontSize: '1.1rem' }}>Last Updated: October 14, 2026</p>
      </section>

      <section className="legal-content">
        <p>
          At Texnova, protecting the security and privacy of institutional data is our primary foundational imperative. This policy outlines exactly what telemetry we collect and how it is strictly utilized for routing optimization and compliance.
        </p>

        <h2>1. Data Collection</h2>
        <p>
          We collect technical telemetry necessary to facilitate blockchain interactions on your behalf:
        </p>
        <ul>
          <li><strong>Transaction Signatures:</strong> Source addresses, destination routing addresses, and cryptographic payloads.</li>
          <li><strong>Webhook Endpoints:</strong> IP addresses and health metrics of your designated listener servers.</li>
          <li><strong>Compliance Metadata:</strong> Abstracted identity hashes generated during your users' KYC flow for OFAC matching.</li>
        </ul>

        <h2>2. Cryptographic Obfuscation</h2>
        <p>
          We do not store plain-text Personally Identifiable Information (PII) on our main ledger. All user-level metadata is zero-knowledge hashed (zk-SNARKs) prior to long-term storage. Our engineering teams only have access to obfuscated transactional volumes to diagnose routing latency.
        </p>

        <h2>3. Third-Party Sharing</h2>
        <p>
          We absolutely explicitly do not sell any traffic data, behavioral intent logs, or wallet balances to third-party ad networks or quantitative trading desks. Information is strictly shared with:
        </p>
        <ul>
          <li>Tier-1 Regulatory enforcement agencies (via valid subpoenas spanning multi-jurisdictional frameworks).</li>
          <li>Our integrated banking partners (Circle, etc) exclusively to facilitate instantaneous fiat mints/burns.</li>
        </ul>

        <h2>4. Your Institutional Rights</h2>
        <p>
          Under GDPR and CCPA, you have the right to request a full cryptographic wipe of your orphaned sandbox testing accounts. Production settlement data must be retained for 5 years minimum due to FinCEN requirements.
        </p>
      </section>
    </main>
  );
}
