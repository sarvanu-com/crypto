import { 
  ArrowRight, Globe2, HeartHandshake, Lightbulb, 
  MapPin, Rocket, Shield, Users, Briefcase, 
  Sparkles, Zap, Clock, ShieldCheck
} from 'lucide-react';
import CTA from '@/components/CTA';
import './careers.css';

export const metadata = {
  title: 'Careers | Join Texnova',
  description: 'Help us build the infrastructure standard for instantaneous, compliant, global value transfer.',
};

export default function Careers() {
  return (
    <main className="careers-page">
      {/* ─── Hero Section ─── */}
      <section className="careers-hero">
        <div className="container">
          <div className="usp-badge" style={{ margin: '0 auto 28px' }}>
            <Sparkles size={14} style={{ marginRight: '6px' }} /> Join the Revolution
          </div>
          <h1>Help us build the <span className="text-accent-gradient">infrastructure standard</span> for global value</h1>
          <p>
            We're a team of cryptographers and engineers unified by a single goal: 
            making moving value as easy and instantaneous as moving data.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <a href="#roles" className="btn btn-primary">
              View Openings
            </a>
            <a href="/about" className="btn btn-secondary">
              Learn Our Story
            </a>
          </div>

          {/* Premium 3D Gallery */}
          <div className="careers-images">
            <div className="career-img-wrapper career-img-hero">
              <img src="/careers-hero.png" alt="Texnova - Global Value Transfer Infrastructure" />
            </div>
            <div className="career-img-wrapper career-img-side">
              <img src="/careers-infra.png" alt="Secure Blockchain Infrastructure" />
            </div>
            <div className="career-img-wrapper career-img-side">
              <img src="/careers-global.png" alt="Global Connectivity Network" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Culture & Values ─── */}
      <section className="values-section">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="text-center" style={{ maxWidth: '850px', margin: '0 auto' }}>
            <div className="usp-badge" style={{ margin: '0 auto 20px' }}>
              <Users size={14} style={{ marginRight: '6px' }} /> Our DNA
            </div>
            <h2 style={{ fontSize: '3rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.03em' }}>Our Core Culture</h2>
            <p style={{ fontSize: '1.2rem', color: '#475569', marginTop: '20px', lineHeight: '1.7' }}>
              We are building compounding trust. These principles guide how we interact with our customers, 
              our codebase, and our global team every single day.
            </p>
          </div>

          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon-wrap">
                <ShieldCheck size={28} />
              </div>
              <h3>Security Over Speed</h3>
              <p>In finance, a single oversight is unrecoverable. We never compromise architectural integrity for a deadline.</p>
            </div>
            <div className="value-card">
              <div className="value-icon-wrap">
                <Zap size={28} />
              </div>
              <h3>Abstract complexity</h3>
              <p>Our customers shouldn't need to understand nonce management or mempool congestion. We handle the hard problems.</p>
            </div>
            <div className="value-card">
              <div className="value-icon-wrap">
                <Globe2 size={28} />
              </div>
              <h3>Default Global</h3>
              <p>Value transfer shouldn't be restricted by borders. We build systems designed for a borderless internet economy.</p>
            </div>
            <div className="value-card">
              <div className="value-icon-wrap">
                <Rocket size={28} />
              </div>
              <h3>Extreme Ownership</h3>
              <p>We empower our teams to own outcomes end-to-end. If you see a problem, you are empowered to fix it.</p>
            </div>
            <div className="value-card">
              <div className="value-icon-wrap">
                <Users size={28} />
              </div>
              <h3>Radical Transparency</h3>
              <p>Defaulting to open internal communication builds trust and eliminates silos across global timezones.</p>
            </div>
            <div className="value-card">
              <div className="value-icon-wrap">
                <HeartHandshake size={28} />
              </div>
              <h3>Customer Obsession</h3>
              <p>Everything we build starts with the developer experience. We are building the rails for their success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Open Roles Portal ─── */}
      <section id="roles" className="roles-section">
        <div className="container" style={{ maxWidth: '1050px' }}>
          <div className="text-center" style={{ marginBottom: '80px' }}>
            <div className="usp-badge" style={{ margin: '0 auto 16px' }}>
              <Briefcase size={14} style={{ marginRight: '6px' }} /> Growth Opportunities
            </div>
            <h2 style={{ fontSize: '3.2rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.03em' }}>Open Positions</h2>
            <p style={{ fontSize: '1.15rem', color: '#64748B', marginTop: '14px' }}>
              Join us in building the infrastructure for the next generation of finance.
            </p>
          </div>
          
          <div className="department-group">
            <div className="department-header">
              <h3 className="department-title">Engineering</h3>
              <div className="department-line" />
            </div>
            
            <RoleItem 
              title="Senior Backend Engineer (Go)" 
              dept="Engineering" 
              location="Remote (EU/US)" 
              type="Full-time" 
            />
            <RoleItem 
              title="Smart Contract Security Auditor" 
              dept="Security" 
              location="Remote (Global)" 
              type="Full-time" 
            />
            <RoleItem 
              title="Frontend Architect (React / Next.js)" 
              dept="Engineering" 
              location="London, UK / Remote" 
              type="Full-time" 
            />
          </div>

          <div className="department-group">
            <div className="department-header">
              <h3 className="department-title">Compliance & Legal</h3>
              <div className="department-line" />
            </div>
            
            <RoleItem 
              title="Head of Global Compliance" 
              dept="Legal" 
              location="New York, USA" 
              type="Full-time" 
            />
            <RoleItem 
              title="KYC/AML Operations Specialist" 
              dept="Operations" 
              location="Singapore / Remote" 
              type="Full-time" 
            />
          </div>

          <div className="department-group" style={{ marginBottom: 0 }}>
            <div className="department-header">
              <h3 className="department-title">Growth & Operations</h3>
              <div className="department-line" />
            </div>
            
            <RoleItem 
              title="Enterprise Account Executive" 
              dept="Sales" 
              location="Remote (US East)" 
              type="Full-time" 
            />
          </div>

        </div>
      </section>

      <CTA />
    </main>
  );
}

function RoleItem({ title, dept, location, type }: { title: string, dept: string, location: string, type: string }) {
  return (
    <a href="#" className="role-card">
      <div className="role-info">
        <h4 className="role-title">{title}</h4>
        <div className="role-meta">
          <span className="role-tag">{dept}</span>
          <div className="role-meta-item">
            <MapPin size={16} />
            {location}
          </div>
          <div className="role-meta-item">
            <Clock size={16} />
            {type}
          </div>
        </div>
      </div>
      <div className="role-arrow-wrap">
        <ArrowRight size={22} />
      </div>
    </a>
  );
}
