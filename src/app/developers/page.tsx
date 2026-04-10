import type { Metadata } from 'next';
import { Terminal, Box, Webhook } from 'lucide-react';
import './developers.css';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
  title: 'Developer API & SDKs | Texnova',
  description: 'Integrate global crypto payments with just a few lines of code. Read our comprehensive API documentation and explore SDKs.',
};

export default function Developers() {
  return (
    <div className="developers-page">
      <section className="section dev-hero text-center animate-in">
        <div className="container">
          <Terminal size={48} className="text-accent mb-4 mx-auto block" />
          <h1 className="mb-4">Built for <span className="text-accent-gradient">Developers</span></h1>
          <p className="text-secondary mb-8" style={{ maxWidth: '600px', margin: '0 auto 32px' }}>
            A powerful, flexible, and strictly typed API that works out of the box. Drop-in UI components or full custom control — your choice.
          </p>
          <div className="dev-actions">
            <a href="#" className="btn btn-primary">Read API Reference</a>
            <a href="#" className="btn btn-secondary">Get API Keys</a>
          </div>
        </div>
      </section>

      <section className="section bg-secondary">
        <div className="container">
          <div className="grid grid-cols-2" style={{ gap: '60px', alignItems: 'center' }}>
            <div className="dev-content">
              <h2>Integrate in 3 steps</h2>
              <div className="dev-steps mt-8">
                <div className="dev-step">
                  <div className="step-number">1</div>
                  <div>
                    <h4>Install SDK</h4>
                    <p className="text-secondary">Available for Node.js, Python, Go, and React.</p>
                  </div>
                </div>
                <div className="dev-step">
                  <div className="step-number">2</div>
                  <div>
                    <h4>Create Payment Intent</h4>
                    <p className="text-secondary">Generate an address or a fully hosted checkout link.</p>
                  </div>
                </div>
                <div className="dev-step">
                  <div className="step-number">3</div>
                  <div>
                    <h4>Listen for Webhooks</h4>
                    <p className="text-secondary">Receive guaranteed delivery webhooks upon transaction confirmation.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="dev-codeblock glass-panel">
              <div className="code-header">
                <div className="file-name">index.ts</div>
                <div className="lang">typescript</div>
              </div>
              <pre>
                <code>
{`import { Texnova } from '@texnova/node';

const texnova = new Texnova('sk_live_...43F5');

// Create a new crypto checkout session
const checkout = await texnova.checkouts.create({
  amount: 1500, // $150.00
  currency: 'USD',
  settlement_currency: 'USDC',
  metadata: {
    order_id: 'ord_839f2a',
  },
  success_url: 'https://example.com/success',
});

console.log(checkout.url);`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="text-center mb-12">SDKs & Libraries</h2>
          <div className="sdk-grid">
            <div className="glass-panel text-center sdk-card">
              <Box size={32} className="text-accent mb-4 mx-auto block" />
              <h4>Node.js</h4>
              <p className="text-secondary mt-2">npm install @texnova/node</p>
            </div>
            <div className="glass-panel text-center sdk-card">
              <Box size={32} className="text-accent mb-4 mx-auto block" />
              <h4>Python</h4>
              <p className="text-secondary mt-2">pip install texnova</p>
            </div>
            <div className="glass-panel text-center sdk-card">
              <Box size={32} className="text-accent mb-4 mx-auto block" />
              <h4>Go</h4>
              <p className="text-secondary mt-2">go get github.com/texnova/go</p>
            </div>
            <div className="glass-panel text-center sdk-card">
              <Box size={32} className="text-accent mb-4 mx-auto block" />
              <h4>React</h4>
              <p className="text-secondary mt-2">npm install @texnova/react</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section text-center">
        <div className="container">
           <h2 className="mb-4">GraphQL API <span className="text-accent" style={{ fontSize: '0.4em', verticalAlign: 'top', background: 'rgba(0,240,255,0.1)', padding: '4px 8px', borderRadius: '4px', textTransform: 'uppercase', letterSpacing: '1px' }}>Beta</span></h2>
           <p className="text-secondary mb-8" style={{ maxWidth: '600px', margin: '0 auto' }}>
              We are currently rolling out our GraphQL API to early access partners. Query exactly the data you need across transactions, customers, and settlement batches in a single round trip.
           </p>
           <a href="#" className="btn btn-outline">Request Early Access</a>
        </div>
      </section>
      

      <section className="section bg-secondary">
         <div className="container text-center">
            <Webhook size={40} className="text-accent mx-auto block mb-4" />
            <h2 className="mb-4">Guaranteed Webhook Delivery</h2>
            <p className="text-secondary mb-8" style={{ maxWidth: '600px', margin: '0 auto' }}>
              Never miss a payment. Our webhook system ensures 99.999% delivery rate with automatic retries with exponential backoff and localized endpoint signing.
            </p>
            <a href="#" className="btn btn-outline">Explore Webhook Docs</a>
         </div>
      </section>
    </div>
  );
}
