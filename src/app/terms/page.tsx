import type { Metadata } from 'next';
import './legal.css';

export const metadata: Metadata = {
  title: 'Terms of Service | Texnova',
  description: 'Legal terms and conditions for utilizing Texnova payment rails.',
};

export default function Terms() {
  return (
    <main style={{ background: '#fff' }}>
      <section className="legal-hero">
        <h1 className="hero-title" style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 800, color: '#0b132b', marginBottom: '16px' }}>
          Terms of Service
        </h1>
        <p style={{ color: '#475569', fontSize: '1.1rem' }}>Last Updated: October 14, 2026</p>
      </section>

      <section className="legal-content">
        <p>
          Welcome to Texnova. These Terms of Service ("Terms") govern your access to and use of our enterprise payment rails, API infrastructure, and dashboard interfaces. By integrating with our services, you agree to be bound by these institutional terms.
        </p>

        <h2>1. Services Provided</h2>
        <p>
          Texnova acts as a technology infrastructure provider. We facilitate the parsing, sweeping, and transmission of cryptographic assets utilizing stablecoin liquidity pools. We do not engage in speculative derivative trading or uncollateralized lending with User funds.
        </p>

        <h2>2. Compliance and KYC obligations</h2>
        <p>
          As an enterprise customer, you maintain full responsibility for the KYC (Know Your Customer) and AML (Anti-Money Laundering) verification of your end-users. You must integrate our compliance webhooks to actively screen addresses against standard OFAC and global enforcement list checkpoints.
        </p>
        <ul>
          <li>You shall not use Texnova to circumvent localized financial sanctions.</li>
          <li>We reserve the right to freeze routing infrastructure to flagged addresses dynamically.</li>
        </ul>

        <h2>3. Treasury Yield Disclaimers</h2>
        <p>
          If you opt-in to the Texnova Treasury Yield product, you understand that your digital assets are algorithmically deployed into decentralized lending platforms (e.g., Aave). While we employ extensive smart contract audits and insurance pools, all cryptographic protocols inherently carry operational risk.
        </p>

        <h2>4. Terminations</h2>
        <p>
          We terminate endpoints automatically in the event of egregious AML violations or systemic risk triggers. You may terminate your API usage at any point with 30-days standard offboarding notice to ensure liquid funds sweeping.
        </p>
      </section>
    </main>
  );
}
