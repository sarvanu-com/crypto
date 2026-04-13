import type { Metadata } from 'next';
import Link from 'next/link';
import CTA from '@/components/CTA';
import './blog.css';

export const metadata: Metadata = {
  title: 'Blog & Engineering | Texnova',
  description: 'Insights into global compliance, platform engineering, and institutional crypto infrastructure.',
};

export default function Blog() {
  return (
    <main style={{ background: '#fff', paddingBottom: '120px' }}>
      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="blog-hero">
        <div className="container">
          <div className="eyebrow" style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0047ff', marginBottom: '14px' }}>
            Company Updates
          </div>
          <h1 className="hero-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, lineHeight: '1.06', letterSpacing: '-0.03em', color: '#0b132b', marginBottom: '24px' }}>
            Engineering &amp; Insights
          </h1>
          <p className="hero-subtitle mx-auto" style={{ fontSize: '1.1rem', color: '#475569', lineHeight: '1.7', maxWidth: '600px' }}>
            Deep dives into our systems architecture, regulatory compliance updates, and thoughts on the future of global value transfer.
          </p>
        </div>
      </section>

      {/* ═══════════════════ CONTENT ═══════════════════ */}
      <section className="blog-content-section container">
        <div className="blog-grid">
          
          <Link href="#" className="blog-card">
            <div className="blog-img" style={{ background: 'url(https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80) center/cover' }}></div>
            <div className="blog-body">
              <span className="blog-tag">Engineering</span>
              <h3 className="blog-title">Migrating our Settlement Engine to Rust</h3>
              <p className="blog-excerpt">
                A technical overview of how we achieved sub-millisecond finality parsing across EVM chains by rewriting our core validation loop.
              </p>
              <div className="blog-meta">
                <span>Oct 14, 2026</span>
                <span>8 min read</span>
              </div>
            </div>
          </Link>

          <Link href="#" className="blog-card">
            <div className="blog-img" style={{ background: 'url(https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80) center/cover' }}></div>
            <div className="blog-body">
              <span className="blog-tag">Compliance</span>
              <h3 className="blog-title">Understanding MiCA and institutional readiness</h3>
              <p className="blog-excerpt">
                How European regulatory frameworks are shaping the deployment of enterprise stablecoins, and how Texnova guarantees compliance block-by-block.
              </p>
              <div className="blog-meta">
                <span>Oct 02, 2026</span>
                <span>5 min read</span>
              </div>
            </div>
          </Link>

          <Link href="#" className="blog-card">
            <div className="blog-img" style={{ background: 'url(https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&q=80) center/cover' }}></div>
            <div className="blog-body">
              <span className="blog-tag">Product</span>
              <h3 className="blog-title">Introducing Treasury Yield API</h3>
              <p className="blog-excerpt">
                Put your idle stablecoin reserves to work. Automatically sweep balances into audited Defi protocols completely programmatically.
              </p>
              <div className="blog-meta">
                <span>Sep 28, 2026</span>
                <span>3 min read</span>
              </div>
            </div>
          </Link>

        </div>
      </section>

      <CTA />
    </main>
  );
}
