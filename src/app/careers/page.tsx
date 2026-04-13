import type { Metadata } from 'next';
import { ArrowRight, Globe2, HeartHandshake, Lightbulb, MapPin, Rocket, Shield, Users } from 'lucide-react';
import CTA from '@/components/CTA';
import './careers.css';

export const metadata: Metadata = {
  title: 'Careers | Join Texnova',
  description: 'Help us build the infrastructure standard for instantaneous, compliant, global value transfer.',
};

export default function Careers() {
  return (
    <main className="careers-page">
      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="careers-hero">
        <div className="container">
          <div className="careers-hero-content">
            <div className="eyebrow" style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0047ff', marginBottom: '14px' }}>
              Careers at Texnova
            </div>
            <h1 className="hero-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 800, lineHeight: '1.06', letterSpacing: '-0.03em', color: '#0b132b', marginBottom: '24px' }}>
              Build the future of global value transfer.
            </h1>
            <p className="hero-subtitle mx-auto" style={{ fontSize: '1.1rem', color: '#475569', lineHeight: '1.7', maxWidth: '650px', marginBottom: '40px' }}>
              We're a global team of cryptographers, engineers, and financial compliance experts unified by a single mission: to make moving value as easy and instantaneous as moving data.
            </p>
            <a href="#roles" className="btn btn-primary">
              View Open Roles
            </a>
          </div>

          <div className="careers-images">
            <div className="career-img-card large" style={{ background: 'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80) center/cover' }}></div>
            <div className="career-img-card" style={{ background: 'url(https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80) center/cover' }}></div>
            <div className="career-img-card" style={{ background: 'url(https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80) center/cover' }}></div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ VALUES ═══════════════════ */}
      <section className="values-section container">
        <div className="text-center">
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0b132b', marginBottom: '16px' }}>Our Core Values</h2>
          <p style={{ color: '#475569', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
            We are building compounding trust. These principles guide how we interact with our customers, our code, and each other.
          </p>
        </div>

        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon"><Shield size={24} strokeWidth={2.5} /></div>
            <h3>Security Over Speed</h3>
            <p>In finance, a single oversight is unrecoverable. We never compromise architectural integrity for a deadline.</p>
          </div>
          <div className="value-card">
            <div className="value-icon"><Lightbulb size={24} strokeWidth={2.5} /></div>
            <h3>Abstract the Complexity</h3>
            <p>Our customers shouldn't need to understand nonce management or mempool congestion. We handle the hard problems.</p>
          </div>
          <div className="value-card">
            <div className="value-icon"><Globe2 size={24} strokeWidth={2.5} /></div>
            <h3>Default Global</h3>
            <p>Value transfer shouldn't be restricted by borders. We build systems designed for a borderless internet economy.</p>
          </div>
          <div className="value-card">
            <div className="value-icon"><Rocket size={24} strokeWidth={2.5} /></div>
            <h3>Extreme Ownership</h3>
            <p>We empower our teams to own outcomes end-to-end. If you see a problem, you are empowered to fix it.</p>
          </div>
          <div className="value-card">
            <div className="value-icon"><Users size={24} strokeWidth={2.5} /></div>
            <h3>Radical Transparency</h3>
            <p>Defaulting to open internal communication builds trust and eliminates silos across global timezones.</p>
          </div>
          <div className="value-card">
            <div className="value-icon"><HeartHandshake size={24} strokeWidth={2.5} /></div>
            <h3>Customer Obsession</h3>
            <p>Everything we build starts with the developer experience. We are building the rails for their success.</p>
          </div>
        </div>
      </section>

      {/* ═══════════════════ OPEN ROLES ═══════════════════ */}
      <section id="roles" className="roles-section">
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0b132b', marginBottom: '40px', textAlign: 'center' }}>Open Roles</h2>
          
          <div className="department-group">
            <h3 className="department-title">Engineering</h3>
            
            <div className="role-card">
              <div className="role-info">
                <h4>Senior Backend Engineer (Go)</h4>
                <div className="role-meta">
                  <span className="role-tag">Engineering</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><MapPin size={14}/> Remote (EU/US)</span>
                  <span>Full-time</span>
                </div>
              </div>
              <div><ArrowRight className="role-arrow" size={20} /></div>
            </div>

            <div className="role-card">
              <div className="role-info">
                <h4>Smart Contract Security Auditor</h4>
                <div className="role-meta">
                  <span className="role-tag">Security</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><MapPin size={14}/> Remote (Global)</span>
                  <span>Full-time</span>
                </div>
              </div>
              <div><ArrowRight className="role-arrow" size={20} /></div>
            </div>
            
            <div className="role-card">
              <div className="role-info">
                <h4>Frontend Architect (React)</h4>
                <div className="role-meta">
                  <span className="role-tag">Engineering</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><MapPin size={14}/> London, UK / Remote</span>
                  <span>Full-time</span>
                </div>
              </div>
              <div><ArrowRight className="role-arrow" size={20} /></div>
            </div>
          </div>

          <div className="department-group">
            <h3 className="department-title">Compliance &amp; Legal</h3>
            
            <div className="role-card">
              <div className="role-info">
                <h4>Head of Global Compliance</h4>
                <div className="role-meta">
                  <span className="role-tag">Legal</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><MapPin size={14}/> New York, USA</span>
                  <span>Full-time</span>
                </div>
              </div>
              <div><ArrowRight className="role-arrow" size={20} /></div>
            </div>
            
            <div className="role-card">
              <div className="role-info">
                <h4>KYC/AML Operations Specialist</h4>
                <div className="role-meta">
                  <span className="role-tag">Operations</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><MapPin size={14}/> Singapore / Remote</span>
                  <span>Full-time</span>
                </div>
              </div>
              <div><ArrowRight className="role-arrow" size={20} /></div>
            </div>
          </div>

          <div className="department-group" style={{ marginBottom: 0 }}>
            <h3 className="department-title">Sales &amp; Marketing</h3>
            
            <div className="role-card">
              <div className="role-info">
                <h4>Enterprise Account Executive</h4>
                <div className="role-meta">
                  <span className="role-tag">Sales</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><MapPin size={14}/> Remote (US East)</span>
                  <span>Full-time</span>
                </div>
              </div>
              <div><ArrowRight className="role-arrow" size={20} /></div>
            </div>
          </div>

        </div>
      </section>

      <CTA />
    </main>
  );
}
