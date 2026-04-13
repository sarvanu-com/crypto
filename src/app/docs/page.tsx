import type { Metadata } from 'next';
import { Search, Book, Code2, Terminal, Zap, Puzzle, LayoutTemplate, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import CTA from '@/components/CTA';
import './docs.css';

export const metadata: Metadata = {
  title: 'Documentation | Texnova',
  description: 'Explore our guides and examples to integrate Texnova.',
};

export default function Docs() {
  return (
    <main className="bg-white pb-32">
      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="docs-hero">
        <div className="container docs-hero-content animate-in">
          <div className="eyebrow mx-auto" style={{ justifyContent: 'center' }}>
            Developer Portal
          </div>
          <h1 className="text-5xl font-bold" style={{ lineHeight: '1.05', letterSpacing: '-0.03em', color: '#0b132b', marginBottom: '24px' }}>
            Texnova <span className="text-gradient-blue">Documentation</span>
          </h1>
          <p className="text-lg text-secondary mx-auto" style={{ lineHeight: '1.7', maxWidth: '600px' }}>
            Learn how to integrate our APIs, configure your webhooks, and launch your global banking infrastructure in minutes.
          </p>

          <div className="docs-search max-w-2xl mx-auto delay-200 animate-in">
            <input type="text" placeholder="Search API references, guides, endpoints..." />
            <Search className="docs-search-icon" size={20} />
            <div className="docs-search-kbd">⌘ K</div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ CONTENT ═══════════════════ */}
      <section className="docs-content-section container">
        <div className="docs-grid">
          
          <Link href="/docs/quickstart" className="docs-card glass-panel animate-in delay-300">
            <div className="docs-icon-wrap"><Zap size={24} /></div>
            <h3>Quickstart Guide <ArrowRight size={18} /></h3>
            <p>Get up and running with Texnova in under 5 minutes. Learn authentication and basic requests.</p>
          </Link>

          <Link href="/docs/api" className="docs-card glass-panel animate-in delay-300">
            <div className="docs-icon-wrap"><Code2 size={24} /></div>
            <h3>API Reference <ArrowRight size={18} /></h3>
            <p>Comprehensive overview of our REST and GraphQL schema, including request/response payloads.</p>
          </Link>

          <Link href="/docs/sdks" className="docs-card glass-panel animate-in delay-300">
            <div className="docs-icon-wrap"><Terminal size={24} /></div>
            <h3>SDKs & Libraries <ArrowRight size={18} /></h3>
            <p>Official client libraries for Node.js, Python, Go, and React to accelerate your build.</p>
          </Link>

          <Link href="/docs/webhooks" className="docs-card glass-panel animate-in delay-300">
            <div className="docs-icon-wrap"><Puzzle size={24} /></div>
            <h3>Webhooks & Events <ArrowRight size={18} /></h3>
            <p>Listen for real-time transaction updates, settlement finality, and compliance state changes.</p>
          </Link>

          <Link href="/docs/ui" className="docs-card glass-panel animate-in delay-300">
            <div className="docs-icon-wrap"><LayoutTemplate size={24} /></div>
            <h3>UI Components <ArrowRight size={18} /></h3>
            <p>Drop-in React components for checkout flows, identity verification (KYC), and wallet connection.</p>
          </Link>

          <Link href="/docs/guides" className="docs-card glass-panel animate-in delay-300">
            <div className="docs-icon-wrap"><Book size={24} /></div>
            <h3>Integration Guides <ArrowRight size={18} /></h3>
            <p>In-depth architectural guides for marketplace routing, payroll distribution, and treasury sweeping.</p>
          </Link>

        </div>
      </section>

      <CTA />
    </main>
  );
}
