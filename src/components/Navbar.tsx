'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Menu, X, Hexagon, ChevronDown, ChevronRight,
  Send, ArrowDownLeft, ArrowDownUp, Wallet,
  Globe2, BarChart3, Zap,
  Shield, Lock,
  Code2, BookOpen, FileText,
} from 'lucide-react';
import './Navbar.css';

/* ─── Products mega-menu sections ─────────────────────────── */
const PRODUCT_SECTIONS = [
  {
    id: 'wallets',
    href: '/wallets',
    label: 'Embedded Wallets',
    desc: 'Generate white-labeled deposit addresses instantly for your users.',
    items: [
      { Icon: Send,         label: 'Send',    desc: 'Pay individuals and businesses globally.',   href: '/wallets#send' },
      { Icon: ArrowDownLeft,label: 'Receive', desc: 'Get paid in stablecoins instantly.',         href: '/wallets#receive' },
      { Icon: ArrowDownUp,  label: 'Convert', desc: 'On and offramp in one platform.',            href: '/wallets#convert' },
      { Icon: Wallet,       label: 'Store',   desc: 'Manage funds in stablecoin wallets.',        href: '/wallets#store' },
    ],
    feature: {
      tag: "WHAT'S NEW",
      title: 'Multi-chain wallet infrastructure now live',
    },
    updates: null,
  },
  {
    id: 'treasury',
    href: '/services',
    label: 'Treasury Management',
    desc: 'Plug in your own liquidity providers and DeFi yield strategies.',
    items: [
      { Icon: Globe2,    label: 'Cross-border Payments', desc: 'Orchestrate global transfers across 150+ rails.', href: '/services' },
      { Icon: BarChart3, label: 'Merchant Payments',     desc: 'Send and receive stablecoins, convert to fiat.', href: '/services' },
      { Icon: Zap,       label: 'Trading & Treasury',    desc: 'Multi-asset, multi-venue trading.',              href: '/services' },
    ],
    feature: {
      tag: "SEE WHAT'S NEW",
      title: 'Beneficiary management update',
    },
    updates: null,
  },
  {
    id: 'compliance',
    href: '/security',
    label: 'Security & Compliance',
    desc: 'Stay audit-ready and operate safely across 80+ jurisdictions.',
    items: [
      { Icon: Shield, label: 'Compliance', desc: 'Deploy AML resources more effectively.',  href: '/security' },
      { Icon: Lock,   label: 'Security',   desc: "We're ISO 27001:2022 certified.",         href: '/security' },
    ],
    feature: {
      tag: 'TRUST CENTER',
      title: 'Learn more about our controls and credentials.',
    },
    updates: null,
  },
  {
    id: 'changelog',
    href: '/developers',
    label: 'Changelog',
    desc: 'Latest platform updates and release notes.',
    items: [],
    feature: null,
    updates: [
      { tag: 'LATEST PRODUCT UPDATES', title: 'Beneficiary management update',                                href: '/developers' },
      { tag: 'LATEST PRODUCT UPDATES', title: 'Enhanced fiat payment traceability with tracking references', href: '/developers' },
    ],
  },
];

/* ─── Other nav items (plain links / simple dropdowns) ─────── */
const NAV_ITEMS = [
  { label: 'Security',    href: '/security' },
  { label: 'Developers',  href: '/developers' },
  { label: 'Contact',     href: '/contact' },
];

/* ═══════════════════════════════════════════════════════════════ */
export default function Navbar() {
  const pathname                          = usePathname();
  const [mobileOpen, setMobileOpen]       = useState(false);
  const [scrolled, setScrolled]           = useState(false);
  const [showProducts, setShowProducts]   = useState(false);
  const [activeSection, setActiveSection] = useState(PRODUCT_SECTIONS[0].id);
  const hideTimer                         = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const openProducts  = () => { if (hideTimer.current) clearTimeout(hideTimer.current); setShowProducts(true); };
  const closeProducts = () => { hideTimer.current = setTimeout(() => setShowProducts(false), 140); };

  const currentSection = PRODUCT_SECTIONS.find(s => s.id === activeSection)!;

  return (
    <nav className={`navbar ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="container nav-container">

        {/* Logo */}
        <Link href="/" className="logo">
          <Hexagon className="logo-icon" size={28} />
          <span className="logo-text">TEXNOVA</span>
        </Link>

        {/* Desktop links */}
        <div className="nav-links">

          {/* Products — mega menu trigger */}
          <div
            className="nav-item-wrap"
            onMouseEnter={openProducts}
            onMouseLeave={closeProducts}
          >
            <button className={`nav-link nav-link-btn ${showProducts ? 'nav-link-open' : ''}`}>
              Products
              <ChevronDown size={14} className={`nav-chevron ${showProducts ? 'nav-chevron-open' : ''}`} />
            </button>

            {/* ─── Mega Menu ─── */}
            <div
              className={`megamenu ${showProducts ? 'megamenu-open' : ''}`}
              onMouseEnter={openProducts}
              onMouseLeave={closeProducts}
            >
              <div className="megamenu-inner">

                {/* LEFT — section list */}
                <div className="mm-left">
                  {PRODUCT_SECTIONS.map(sec => (
                    <Link
                      key={sec.id}
                      href={sec.href}
                      className={`mm-section-btn ${activeSection === sec.id ? 'mm-section-active' : ''}`}
                      onMouseEnter={() => setActiveSection(sec.id)}
                      onClick={() => setShowProducts(false)}
                    >
                      <div className="mm-section-top">
                        <span className="mm-section-label">{sec.label}</span>
                        <ChevronRight size={14} className="mm-section-arrow" />
                      </div>
                      {activeSection === sec.id && sec.desc && (
                        <p className="mm-section-desc">{sec.desc}</p>
                      )}
                    </Link>
                  ))}
                </div>

                {/* DIVIDER */}
                <div className="mm-divider" />

                {/* MIDDLE — items or update cards */}
                <div className="mm-middle">
                  {currentSection.updates ? (
                    /* Changelog layout — two horizontal cards */
                    <div className="mm-update-grid">
                      {currentSection.updates.map((u, i) => (
                        <Link key={i} href={u.href} className="mm-update-card">
                          <span className="mm-update-tag">{u.tag} →</span>
                          <div className="mm-update-img" />
                          <p className="mm-update-title">{u.title}</p>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    currentSection.items.map((item) => (
                      <Link key={item.label} href={item.href} className="mm-item">
                        <span className="mm-item-icon">
                          <item.Icon size={20} />
                        </span>
                        <span className="mm-item-text">
                          <span className="mm-item-label">{item.label}</span>
                          <span className="mm-item-desc">{item.desc}</span>
                        </span>
                      </Link>
                    ))
                  )}
                </div>

                {/* RIGHT — feature card (only when not changelog) */}
                {currentSection.feature && (
                  <>
                    <div className="mm-divider" />
                    <div className="mm-right">
                      <span className="mm-feature-tag">{currentSection.feature.tag} →</span>
                      <div className="mm-feature-img" />
                      <p className="mm-feature-title">{currentSection.feature.title}</p>
                    </div>
                  </>
                )}

              </div>
            </div>
          </div>

          {/* Plain links */}
          {NAV_ITEMS.map(item => (
            <Link
              key={item.label}
              href={item.href}
              className={`nav-link ${pathname === item.href ? 'active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Desktop actions */}
        <div className="nav-actions">
          <Link href="/login"     className="nav-login">Sign In</Link>
          <Link href="/dashboard" className="btn btn-primary">Launch App</Link>
        </div>

        {/* Mobile toggle */}
        <button className="mobile-menu-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="mobile-menu">
          <Link href="/services"   className="nav-link" onClick={() => setMobileOpen(false)}>Products</Link>
          <Link href="/security"   className="nav-link" onClick={() => setMobileOpen(false)}>Security</Link>
          <Link href="/developers" className="nav-link" onClick={() => setMobileOpen(false)}>Developers</Link>
          <Link href="/contact"    className="nav-link" onClick={() => setMobileOpen(false)}>Contact</Link>
          <div className="mobile-actions mt-4">
            <Link href="/login"     className="btn btn-outline w-full mb-2" onClick={() => setMobileOpen(false)}>Sign In</Link>
            <Link href="/dashboard" className="btn btn-primary  w-full"     onClick={() => setMobileOpen(false)}>Launch App</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
