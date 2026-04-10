import Link from 'next/link';
import { Check, X, HelpCircle } from 'lucide-react';
import './pricing.css';

export const metadata = {
  title: 'Pricing | Texnova',
  description: 'Simple, transparent pricing. 0.1% transaction fee. No setup fees, no hidden charges.',
};

export default function Pricing() {
  return (
    <div className="pricing-page">
      <section className="section pricing-hero text-center animate-in">
        <div className="container">
          <h1 className="mb-4">Simple, transparent pricing</h1>
          <p className="text-secondary" style={{ maxWidth: '600px', margin: '0 auto' }}>
            Scale your business without worrying about payment costs. We offer the most competitive rates in the industry.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="pricing-card-wrapper animate-in delay-100">
            <div className="glass-panel pricing-card main-card">
              <div className="pricing-header">
                <h2>0.1%</h2>
                <p>per successful transaction</p>
              </div>
              <ul className="pricing-features">
                <li><Check className="text-accent" size={20} /> No setup fees</li>
                <li><Check className="text-accent" size={20} /> No monthly charges</li>
                <li><Check className="text-accent" size={20} /> Instant settlement in stablecoins</li>
                <li><Check className="text-accent" size={20} /> Full API access & Webhooks</li>
                <li><Check className="text-accent" size={20} /> Unlimited multi-chain support</li>
              </ul>
              <div className="pricing-cta">
                <Link href="/signup" className="btn btn-primary" style={{ width: '100%' }}>Create Free Account</Link>
                <p className="note mt-4">* Network fees may apply depending on the blockchain used.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-secondary">
        <div className="container">
          <h2 className="text-center mb-12">How we compare</h2>
          <div className="comparison-table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th><span className="text-accent">Texnova</span></th>
                  <th>Stripe crypto</th>
                  <th>Standard gateways</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Transaction Fee</td>
                  <td><strong>0.1%</strong></td>
                  <td>1% + 30¢</td>
                  <td>Up to 3%</td>
                </tr>
                <tr>
                  <td>Settlement Time</td>
                  <td><strong>Instant</strong></td>
                  <td>2-3 days</td>
                  <td>2-5 days</td>
                </tr>
                <tr>
                  <td>Monthly Fees</td>
                  <td><strong>None</strong></td>
                  <td>None</td>
                  <td>Often $50+</td>
                </tr>
                <tr>
                  <td>Self-Custodial Option</td>
                  <td><Check className="text-accent" size={20} /></td>
                  <td><X color="#FF5F56" size={20} /></td>
                  <td><X color="#FF5F56" size={20} /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="text-center mb-12">Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h4><HelpCircle size={18} className="text-accent" /> Are there any hidden fees?</h4>
              <p className="text-secondary">No. We only charge a flat 0.1% on successful transactions. &quot;Network fees may apply depending on blockchain&quot; when moving funds to outside wallets.</p>
            </div>
            <div className="faq-item">
              <h4><HelpCircle size={18} className="text-accent" /> How long does integration take?</h4>
              <p className="text-secondary">Most developers can integrate our drop-in components in less than an hour. Full custom API integration takes about a day.</p>
            </div>
            <div className="faq-item">
              <h4><HelpCircle size={18} className="text-accent" /> Do you support fiat settlement?</h4>
              <p className="text-secondary">Yes, for verified corporate accounts in supported jurisdictions, we offer next-day fiat settlement directly to your bank account.</p>
            </div>
            <div className="faq-item">
              <h4><HelpCircle size={18} className="text-accent" /> Is there a minimum volume?</h4>
              <p className="text-secondary">There are no minimum volume requirements to use the platform. You pay strictly for what you use.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-secondary text-center" style={{ marginTop: '40px', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
           <h2 className="mb-4">Processing over $1M monthly?</h2>
           <p className="text-secondary mb-6" style={{ maxWidth: '600px', margin: '0 auto 24px' }}>
             Get in touch with our sales team to discuss custom tiered pricing, dedicated support, and bespoke integration engineering.
           </p>
           <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
             <a href="mailto:sales@texnova.com" className="btn btn-outline">Contact Sales</a>
             <div style={{ color: 'var(--text-secondary)' }}>
               Or call us directly: <a href="tel:+14243414743" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 500 }}>+1 424 341 4743</a>
             </div>
           </div>
        </div>
      </section>
    </div>
  );
}
