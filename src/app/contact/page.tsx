import type { Metadata } from 'next';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
  title: 'Contact Sales & Enterprise | Texnova',
  description: 'Get in touch with our enterprise team to integrate the ultimate global payment rail block by block.',
};
import { Mail, MapPin, Phone } from 'lucide-react';
import './contact.css';

export default function Contact() {
  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <h1 className="text-center" style={{ fontSize: '4rem', marginBottom: '24px' }}>Get in Touch</h1>
          <p className="text-secondary text-center mx-auto" style={{ fontSize: '1.25rem', maxWidth: '600px' }}>
            Our enterprise team is ready to help you integrate the ultimate global payment rail.
          </p>
        </div>
      </section>

      <section className="contact-content container">
        <div className="contact-grid">
          <div className="contact-info glass-panel" style={{ padding: '40px' }}>
            <h3 className="text-2xl text-white mb-8">Contact Information</h3>
            <div className="info-item">
              <Mail style={{ color: 'var(--glow-cyan)', flexShrink: 0 }} size={28} />
              <div>
                <h4 className="text-white font-bold mb-1">Sales & Enterprise</h4>
                <p className="text-secondary">enterprise@texnova.com</p>
              </div>
            </div>
            <div className="info-item">
              <Phone style={{ color: 'var(--glow-purple)', flexShrink: 0 }} size={28} />
              <div>
                <h4 className="text-white font-bold mb-1">Global Support</h4>
                <p className="text-secondary">+1 (800) 555-0199</p>
              </div>
            </div>
            <div className="info-item" style={{ marginBottom: 0 }}>
              <MapPin style={{ color: 'var(--glow-cyan)', flexShrink: 0 }} size={28} />
              <div>
                <h4 className="text-white font-bold mb-1">Headquarters</h4>
                <p className="text-secondary">100 Crypto Way, Suite 400<br/>San Francisco, CA 94105</p>
              </div>
            </div>
          </div>
          
          <div className="contact-form glass-panel" style={{ padding: '40px' }}>
            <h3 className="text-2xl text-white mb-8">Send us a message</h3>
            <form className="form-group">
              <div className="input-row">
                <input type="text" placeholder="First Name" className="form-input" />
                <input type="text" placeholder="Last Name" className="form-input" />
              </div>
              <input type="email" placeholder="Work Email" className="form-input mb-4" />
              <input type="text" placeholder="Company" className="form-input mb-4" />
              <textarea placeholder="How can we help your team?" rows={5} className="form-input mb-4"></textarea>
              <button type="button" className="btn btn-primary w-full" style={{ padding: '16px', fontSize: '1.05rem' }}>Submit Request</button>
            </form>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
