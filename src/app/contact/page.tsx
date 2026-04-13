import type { Metadata } from 'next';
import CTA from '@/components/CTA';
import { Mail, MapPin, Phone, Globe, ChevronDown } from 'lucide-react';
import './contact.css';

export const metadata: Metadata = {
  title: 'Contact Sales & Enterprise | Texnova',
  description: 'Get in touch with our enterprise team to integrate the ultimate global payment rail block by block.',
};

export default function Contact() {
  return (
    <main className="contact-page">
      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="contact-hero">
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="eyebrow mx-auto" style={{ justifyContent: 'center' }}>
            Contact Us
          </div>
          <h1 className="text-5xl font-bold" style={{ lineHeight: '1.05', letterSpacing: '-0.03em', color: '#0b132b', marginBottom: '20px' }}>
            Get in <span className="text-gradient-blue">Touch</span>.
          </h1>
          <p className="text-lg text-secondary mx-auto" style={{ lineHeight: '1.7', maxWidth: '600px' }}>
            Our enterprise team is ready to help you integrate the ultimate global payment rail. Connect with our dedicated specialists today.
          </p>

          {/* Animated Communications Relay Graphic */}
          <div className="contact-relay-wrapper animate-in delay-200">
            
            <div className="relay-core">
              <Globe size={40} color="#0047ff" />
              <div className="text-xs font-bold mt-2" style={{ color: '#0b132b', letterSpacing: '0.05em' }}>HQ</div>
              <div className="relay-pulse-ring"></div>
              <div className="relay-pulse-ring-2"></div>
            </div>

            <div className="relay-node node-sf">
              <MapPin size={14} color="#0047ff" /> SF
            </div>
            <div className="relay-node node-ldn">
              <MapPin size={14} color="#0047ff" /> LDN
            </div>
            <div className="relay-node node-tokyo">
              <MapPin size={14} color="#0047ff" /> TYO
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════ CONTACT GRID ═══════════════════ */}
      <section className="contact-content container">
        <div className="contact-grid">
          
          {/* Dark Glass Info Card */}
          <div className="contact-info-card animate-in delay-300">
            <h3 className="text-2xl font-bold mb-8 text-white">Direct Access</h3>
            
            <div className="info-item">
              <div className="icon-wrap">
                <Mail size={22} strokeWidth={2.5} />
              </div>
              <div>
                <h4>Sales &amp; Enterprise</h4>
                <p>enterprise@texnova.com</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="icon-wrap">
                <Phone size={22} strokeWidth={2.5} />
              </div>
              <div>
                <h4>Global Support (24/7)</h4>
                <p>+1 (800) 555-0199</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="icon-wrap">
                <MapPin size={22} strokeWidth={2.5} />
              </div>
              <div>
                <h4>Headquarters</h4>
                <p>100 Crypto Way, Suite 400<br/>San Francisco, CA 94105</p>
              </div>
            </div>
          </div>
          
          {/* Light Premium Form Card */}
          <div className="contact-form-card glass-panel animate-in delay-300">
            <h3 className="text-2xl font-bold mb-8 text-primary">Send us a message</h3>
            <form className="contact-form">
              
              <div className="input-row">
                <input type="text" placeholder="First Name" className="form-input" />
                <input type="text" placeholder="Last Name" className="form-input" />
              </div>
              
              <input type="email" placeholder="Work Email" className="form-input mb-5" />
              <input type="text" placeholder="Company" className="form-input mb-5" />
              
              <div className="select-wrapper mb-5">
                <select className="form-input" defaultValue="">
                  <option value="" disabled>Inquiry Type</option>
                  <option value="sales">Sales &amp; Volume Pricing</option>
                  <option value="support">Technical Integration Support</option>
                  <option value="partnership">Strategic Partnership</option>
                </select>
                <div className="select-icon">
                   <ChevronDown size={20} />
                </div>
              </div>

              <textarea placeholder="How can we help your team scale today?" rows={5} className="form-input mb-6" style={{ resize: 'vertical' }}></textarea>
              
              <button type="button" className="btn btn-primary w-full" style={{ padding: '16px', fontSize: '1.05rem', justifyContent: 'center' }}>
                Submit Request
              </button>
            </form>
          </div>

        </div>
      </section>

      <CTA />
    </main>
  );
}
