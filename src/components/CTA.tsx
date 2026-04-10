import Link from 'next/link';
import './CTA.css';

export default function CTA() {
  return (
    <section className="section bottom-cta">
      <div className="cta-glow"></div>
      <div className="container relative" style={{ zIndex: 10 }}>
        <h2 className="cta-title">
          Ready to redefine <br/>value transfer?
        </h2>
        <p className="text-secondary text-xl max-w-2xl mx-auto mb-12 cta-desc">
          Join the world's most innovative fintechs and exchanges building on Texnova.
        </p>
        <div className="cta-buttons">
           <Link href="/dashboard" className="btn btn-primary" style={{ padding: '18px 40px', fontSize: '1.1rem' }}>
              Start Building Now
           </Link>
           <Link href="/contact" className="btn btn-outline" style={{ padding: '18px 40px', fontSize: '1.1rem' }}>
              Contact Sales
           </Link>
        </div>
      </div>
    </section>
  );
}
