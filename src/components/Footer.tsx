'use client';

import Link from 'next/link';
import { Hexagon, ArrowUpRight } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-dark">
      <div className="watermark-bg">TEXNOVA</div>
      <div className="container relative z-10">
        <div className="footer-main-grid">
          <div className="footer-brand-col">
            <Link href="/" className="logo mb-6 inline-flex items-center gap-2">
              <Hexagon size={30} style={{ color: 'var(--primary-blue)' }} />
              <span style={{ fontSize: '1.15rem', fontWeight: 900, letterSpacing: '0.08em', color: '#FFFFFF' }}>TEXNOVA</span>
            </Link>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1rem', maxWidth: '22rem', lineHeight: 1.7 }}>
              The infrastructure standard for instantaneous, compliant, global value transfer.
            </p>
          </div>
          
          <div className="footer-links-col">
            <h4 className="footer-category">Platform</h4>
            <ul>
              <li><Link href="/services">What We Provide</Link></li>
              <li><Link href="/wallets">Embedded Wallets</Link></li>
              <li><Link href="/yield">Treasury Yield</Link></li>
              <li><Link href="/network">Network Status</Link></li>
            </ul>
          </div>

          <div className="footer-links-col">
            <h4 className="footer-category">Developers</h4>
            <ul>
              <li><Link href="/docs">Documentation <ArrowUpRight size={14} className="inline ml-1" /></Link></li>
              <li><Link href="/api">API Reference</Link></li>
              <li><Link href="/sdks">SDKs & Tools</Link></li>
              <li><Link href="/github">GitHub</Link></li>
            </ul>
          </div>
          
          <div className="footer-links-col">
            <h4 className="footer-category">Company</h4>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/contact">Contact Sales</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-legal-bar flex justify-between items-center" style={{ color: 'rgba(255,255,255,0.4)' }}>
          <div className="flex items-center gap-6">
             <span style={{ fontSize: '0.875rem' }}>&copy; {new Date().getFullYear()} Texnova Global.</span>
             <div className="flex items-center gap-4 text-sm">
               <Link href="/privacy" style={{ color: 'rgba(255,255,255,0.4)', transition: 'color 0.2s' }} onMouseEnter={e => (e.currentTarget.style.color='#fff')} onMouseLeave={e => (e.currentTarget.style.color='rgba(255,255,255,0.4)')}>Privacy</Link>
               <Link href="/terms" style={{ color: 'rgba(255,255,255,0.4)', transition: 'color 0.2s' }} onMouseEnter={e => (e.currentTarget.style.color='#fff')} onMouseLeave={e => (e.currentTarget.style.color='rgba(255,255,255,0.4)')}>Terms</Link>
               <Link href="/security" style={{ color: 'rgba(255,255,255,0.4)', transition: 'color 0.2s' }} onMouseEnter={e => (e.currentTarget.style.color='#fff')} onMouseLeave={e => (e.currentTarget.style.color='rgba(255,255,255,0.4)')}>Security</Link>
             </div>
          </div>
          <div className="flex items-center gap-4">
             <div style={{ padding: '4px 12px', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '9999px', fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', background: 'rgba(255,255,255,0.04)' }}>System: All operations normal</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
