import type { Metadata } from 'next';
import CTA from '@/components/CTA';
import { Globe, ArrowUpRight, CircleDot, ShieldCheck, CheckCircle2, Building2, Sun, ShieldAlert, BadgeCheck, Lock, Sliders, ChevronRight } from 'lucide-react';
import './security.css';

export const metadata: Metadata = {
  title: 'Security & Compliance | Bank-grade Crypto Infrastructure',
  description: 'Globally licensed. Compliance-first.',
};

export default function Security() {
  return (
    <main className="security-page">
      <section className="security-hero">
        <div className="container responsive-split">
          <div className="security-hero-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', maxWidth: '600px' }}>
            <div className="eyebrow" style={{ fontSize: '0.72rem', letterSpacing: '0.1em', marginBottom: '14px' }}>Security & Compliance</div>
            <h1 className="hero-title" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', fontWeight: 800, lineHeight: '1.06', letterSpacing: '-0.03em', color: '#0b132b', marginBottom: '18px', textAlign: 'left', margin: '0' }}>
              Globally licensed.<br />Compliance-first.
            </h1>
            <p className="hero-subtitle" style={{ fontSize: '0.975rem', color: '#475569', lineHeight: '1.7', marginBottom: '28px', maxWidth: '420px', textAlign: 'left' }}>
              Deploy secure, bank-grade infrastructure that adheres to international regulatory frameworks out of the box.
            </p>
            <a href="/contact" className="btn" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#0047ff', color: '#fff', fontSize: '0.875rem', fontWeight: 600, padding: '12px 22px', borderRadius: '999px', boxShadow: '0 4px 14px rgba(0, 71, 255, 0.30)' }}>
              <CircleDot size={15} />
              Read our policies
            </a>
          </div>

          <div className="security-hero-visual" style={{ width: '100%', position: 'relative' }}>
            <div className="sec-graphic-wrapper">
               <div className="sec-shield-ring"></div>
               <div className="sec-shield-ring-outer"></div>

               <div className="sec-core">
                  <ShieldCheck size={48} className="sec-core-icon" strokeWidth={1.5} />
                  <span className="sec-core-text">Secure Hub</span>
               </div>

               <div className="sec-float-node sec-node-1">
                  <CheckCircle2 size={18} className="node-icon" /> KYC/AML
               </div>
               <div className="sec-float-node sec-node-2">
                  <Globe size={18} className="node-icon" /> Regulated
               </div>
               <div className="sec-float-node sec-node-3">
                  <Building2 size={18} className="node-icon" /> SOC2 Audited
               </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mb-32 mt-12">
        <h2 className="section-title-center">
          We adhere to the most stringent regulatory requirements, which dictate our global standard.
        </h2>
        <div className="grid grid-cols-3 gap-6 security-grid">
          
          <div className="compliance-card-dark">
             <div className="icon-wrapper">
               <Sun size={32} strokeWidth={1.5} />
             </div>
             <h3>Unified control framework</h3>
             <p>
                We apply global policies, quality standards and SLAs, based on the most stringent regulatory requirements.
             </p>
          </div>

          <div className="compliance-card-dark">
             <div className="icon-wrapper">
               <ShieldAlert size={32} strokeWidth={1.5} />
             </div>
             <h3>Robust risk governance</h3>
             <p>
                We manage risk with a detailed governance and oversight framework, backed by Three Lines of Defence.
             </p>
          </div>

          <div className="compliance-card-dark">
             <div className="icon-wrapper">
               <BadgeCheck size={32} strokeWidth={1.5} />
             </div>
             <h3>100% of e-money is safeguarded</h3>
             <p>
                Customer e-money funds are segregated and protected from insolvency in line with regulatory requirements.
             </p>
          </div>

          <div className="compliance-card-dark">
             <div className="icon-wrapper">
               <Lock size={32} strokeWidth={1.5} />
             </div>
             <h3>Digital asset management</h3>
             <p>
                Multi-factor authentication and encryption enhance security. Responsible treasury practices are embedded in our processes.
             </p>
          </div>

          <div className="compliance-card-dark">
             <div className="icon-wrapper">
               <ShieldCheck size={32} strokeWidth={1.5} />
             </div>
             <h3>Enterprise grade security</h3>
             <p>
                Texnova is ISO 27001:2022 certified by The British Assessment Bureau and DORA compliant, ensuring operational resilience.
             </p>
          </div>

          <div className="compliance-card-dark">
             <div className="icon-wrapper">
               <Sliders size={32} strokeWidth={1.5} />
             </div>
             <h3>Travel Rule compliant</h3>
             <p>
                Our platform is compliant with global FATF standards, and makes it intuitive to add and manage Travel Rule information.
             </p>
          </div>

        </div>
      </section>

      <section id="compliance" className="trust-center-section container mb-32">
        <div className="trust-center-header">
           <h2 className="tc-title">Compliance</h2>
           <h2 className="tc-title">Controls <span className="tc-updated">Updated 4 minutes ago</span></h2>
        </div>
        
        <div className="trust-center-grid">
           {/* Left Sidebar */}
           <div className="tc-sidebar">
              <div className="tc-list">
                 <div className="tc-item active">
                    <div className="tc-icon-placeholder tc-blue">SOC2</div>
                    <span className="tc-item-name">SOC 2</span>
                 </div>
                 <div className="tc-item">
                    <div className="tc-icon-placeholder tc-purple">ISO</div>
                    <span className="tc-item-name">ISO 27001:2022</span>
                 </div>
                 <div className="tc-item">
                    <div className="tc-icon-placeholder tc-blue-dark">GDPR</div>
                    <span className="tc-item-name">GDPR</span>
                 </div>
                 <div className="tc-item">
                    <div className="tc-icon-placeholder tc-purple">DORA</div>
                    <span className="tc-item-name">Digital Operational Resilience Act</span>
                 </div>
                 <div className="tc-item">
                    <div className="tc-icon-placeholder tc-dark">USDP</div>
                    <span className="tc-item-name">US Data Privacy</span>
                 </div>
                 <div className="tc-item">
                    <div className="tc-icon-placeholder tc-green">A</div>
                    <span className="tc-item-name">Security Scorecard</span>
                 </div>
                 <div className="tc-item">
                    <div className="tc-icon-placeholder tc-dark">CIS</div>
                    <span className="tc-item-name">CIS Critical Security Controls v8.1</span>
                 </div>
              </div>
           </div>

           {/* Right Content */}
           <div className="tc-content">
              <div className="tc-cards">
                 {/* Card 1 */}
                 <div className="tc-card">
                    <div className="tc-card-header">
                       <h3>Infrastructure security</h3>
                       <ChevronRight size={20} className="tc-chevron" />
                    </div>
                    <ul className="tc-checks">
                       <li><CheckCircle2 size={16} className="tc-check" /> Information security for use of cloud services</li>
                       <li><CheckCircle2 size={16} className="tc-check" /> Information transfer</li>
                       <li><CheckCircle2 size={16} className="tc-check" /> Authentication information</li>
                    </ul>
                    <a href="#" className="tc-link">View 9 more Infrastructure security controls</a>
                 </div>

                 {/* Card 2 */}
                 <div className="tc-card">
                    <div className="tc-card-header">
                       <h3>Organisational security</h3>
                       <ChevronRight size={20} className="tc-chevron" />
                    </div>
                    <ul className="tc-checks">
                       <li><CheckCircle2 size={16} className="tc-check" /> Determining the scope of the information sec...</li>
                       <li><CheckCircle2 size={16} className="tc-check" /> Return of assets</li>
                       <li><CheckCircle2 size={16} className="tc-check" /> Intellectual property rights</li>
                    </ul>
                    <a href="#" className="tc-link">View 20 more Organisational security controls</a>
                 </div>

                 {/* Card 3 */}
                 <div className="tc-card">
                    <div className="tc-card-header">
                       <h3>Product security</h3>
                       <ChevronRight size={20} className="tc-chevron" />
                    </div>
                    <ul className="tc-checks">
                       <li><CheckCircle2 size={16} className="tc-check" /> Secure development life cycle</li>
                       <li><CheckCircle2 size={16} className="tc-check" /> Secure coding</li>
                       <li><CheckCircle2 size={16} className="tc-check" /> Security testing in development and acceptan...</li>
                    </ul>
                    <a href="#" className="tc-link">View 2 more Product security controls</a>
                 </div>

                 {/* Card 4 */}
                 <div className="tc-card">
                    <div className="tc-card-header">
                       <h3>Internal security procedures</h3>
                       <ChevronRight size={20} className="tc-chevron" />
                    </div>
                    <ul className="tc-checks">
                       <li><CheckCircle2 size={16} className="tc-check" /> ICT readiness for business continuity</li>
                       <li><CheckCircle2 size={16} className="tc-check" /> Information backup</li>
                       <li><CheckCircle2 size={16} className="tc-check" /> Planning of Changes</li>
                    </ul>
                    <a href="#" className="tc-link">View 39 more Internal security procedures controls</a>
                 </div>

              </div>
           </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
