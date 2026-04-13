import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowUpRight, CircleDot,
  Shield, Zap, Globe2, Wallet, BarChart3, Lock,
  Move, ArrowDownCircle, Expand, ChevronDown, PlayCircle,
  Send, Share2, Upload, QrCode,
  RefreshCcw, ArrowLeftRight, ArrowDownUp,
  Network, LayoutGrid, Landmark, ArrowRightLeft, Store
} from 'lucide-react';
import './wallets.css';

export const metadata: Metadata = {
  title: 'Embedded Wallets | Texnova',
  description: 'Power your global payments with stablecoins. Generate white-labeled deposit addresses instantly for your users.',
};

const CURRENCIES = [
  { symbol: '€', label: 'EUR', bg: '#1a56db', color: '#fff', isFlag: false },
  { symbol: '$', label: 'USDC', bg: '#2775ca', color: '#fff', isFlag: false },
  { symbol: '🇺🇸', label: 'USD', bg: '#e0e7ff', color: '#1a56db', isFlag: true },
  { symbol: '₿', label: 'BTC', bg: '#f7931a', color: '#fff', isFlag: false },
  { symbol: '🇬🇧', label: 'GBP', bg: '#e0e7ff', color: '#1a56db', isFlag: true },
];

const FEATURES = [
  { icon: <Shield size={22} />, title: 'MPC Security', desc: 'Military-grade multi-party computation. No single point of failure.' },
  { icon: <Wallet size={22} />, title: 'White-Label UI', desc: 'Your brand, our infrastructure. Users never see the crypto layer.' },
  { icon: <Zap size={22} />, title: 'Gas Abstraction', desc: 'Sponsor gas fees for users. They transact in stablecoins, not ETH.' },
  { icon: <Globe2 size={22} />, title: '150+ Networks', desc: 'One API, 150+ blockchains. Deploy on any chain in minutes.' },
  { icon: <BarChart3 size={22} />, title: 'Policy Engine', desc: 'Set velocity limits, multi-sig thresholds and approval rules.' },
  { icon: <Lock size={22} />, title: '0.1% Fee Only', desc: 'No setup cost. No monthly plan. Pay 0.1% only when you transact.' },
];

export default function Wallets() {
  return (
    <main className="ew-page">

      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="ew-hero">
        <div className="ew-hero-container">

          {/* Headline block */}
          <div className="ew-hero-text">
            <span className="ew-eyebrow">Embedded Wallets</span>
            <h1 className="ew-headline">
              Power your global<br />
              payments with<br />
              stablecoins.
            </h1>
            <p className="ew-sub">
              Launch using Texnova&apos;s licensing and custody, without handling crypto.
            </p>
            <Link href="/contact" className="ew-cta">
              <CircleDot size={15} />
              Speak to an expert
            </Link>
          </div>

          {/* Two cards — side by side */}
          <div className="ew-cards-row">

            {/* ── CARD 1: Wallets / Currencies ── */}
            <div className="ew-card ew-card-wallets">
              {/* Animated ring pulse behind header icon */}
              <div className="ew-wc-header">
                <div className="ew-wc-icon-wrap">
                  <Wallet size={22} className="ew-wc-icon" />
                  <span className="ew-ring" />
                </div>
                <span className="ew-card-title">Wallets</span>
              </div>

              <p className="ew-card-desc">
                Multi-currency support across 5+ global assets. Instant wallet generation via API.
              </p>

              <div className="ew-tokens">
                {CURRENCIES.map((c, i) => (
                  <div
                    key={c.label}
                    className="ew-token"
                    style={{ animationDelay: `${i * 0.12}s` }}
                  >
                    <div
                      className="ew-token-circle"
                      style={{ background: c.bg, color: c.color }}
                    >
                      {c.isFlag
                        ? <span className="ew-flag">{c.symbol}</span>
                        : <span className="ew-sym">{c.symbol}</span>
                      }
                    </div>
                    <span className="ew-token-lbl">{c.label}</span>
                  </div>
                ))}
              </div>

              <div className="ew-card-footer">
                <span className="ew-pill">Non-custodial</span>
                <span className="ew-pill">MPC Protected</span>
              </div>
            </div>

            {/* ── CARD 2: Payment method ── */}
            <div className="ew-card ew-card-payment">
              <div className="ew-pc-header">
                <div className="ew-total-row">
                  <span className="ew-total-text">Total</span>
                  <span className="ew-total-amt">€100</span>
                </div>
                <span className="ew-status-dot" />
              </div>

              <p className="ew-method-label">Payment method</p>

              {/* Selected — Crypto */}
              <div className="ew-option ew-option-active">
                <span className="ew-radio ew-radio-on" />
                <span className="ew-option-name">Cryptocurrency</span>
                <span className="ew-brand-badge">TEXNOVA</span>
              </div>

              {/* Animated pay button */}
              <button className="ew-pay-btn">
                <ArrowUpRight size={15} />
                Continue to payment
              </button>

              <div className="ew-sep" />

              {/* Credit cards */}
              <div className="ew-option">
                <span className="ew-radio" />
                <span className="ew-option-name">Credit / Debit cards</span>
                <div className="ew-logo-row">
                  <span className="ew-mc"><span className="ew-mc-l" /><span className="ew-mc-r" /></span>
                  <span className="ew-visa">VISA</span>
                </div>
              </div>

              {/* PayPal */}
              <div className="ew-option">
                <span className="ew-radio" />
                <span className="ew-option-name">Paypal</span>
                <span className="ew-paypal">
                  <span className="ew-pp-b">P</span>
                  <span className="ew-pp-l">P</span>
                  <span className="ew-pp-t">ayPal</span>
                </span>
              </div>

              {/* Fee note */}
              <p className="ew-fee-note">✓ Only 0.1% fee — no hidden charges</p>
            </div>

          </div>{/* /cards-row */}
        </div>
      </section>

      {/* ═══════════════════ SEND PAYMENTS (BVNK style) ═══════════════════ */}
      <section id="send" className="ew-send-section">
        <div className="ew-send-container">

          {/* Left Side */}
          <div className="ew-send-left">
            <h2 className="ew-send-title">Send payments.</h2>
            <p className="ew-send-subtitle">
              Pay partners, customers, employees and creators in their preferred currency.
            </p>

            <ul className="ew-send-list">
              <li>
                <div className="ew-send-list-icon">
                  <Move size={22} />
                </div>
                <div className="ew-send-list-text">
                  <h3>Flexible funding options</h3>
                  <p>Use your fiat balance to send stablecoins, or fund in stablecoins and pay out in fiat.</p>
                </div>
              </li>
              <li>
                <div className="ew-send-list-icon">
                  <ArrowDownCircle size={22} />
                </div>
                <div className="ew-send-list-text">
                  <h3>Lower costs</h3>
                  <p>Bypass intermediaries and cut <span className="ew-blue-link">FX fees</span> with direct stablecoin rails.</p>
                </div>
              </li>
              <li>
                <div className="ew-send-list-icon">
                  <Expand size={22} />
                </div>
                <div className="ew-send-list-text">
                  <h3>Mass payouts, simplified</h3>
                  <p>Send high-volume payments via CSV or integrate with our API for scale.</p>
                </div>
              </li>
            </ul>

            <button className="ew-demo-btn">
              <PlayCircle size={18} />
              See it in action — try the demo
            </button>
          </div>

          {/* Right Side - Form */}
          <div className="ew-send-right">
            <div className="ew-send-form-card">
              <div className="ew-fg">
                <label>Business name</label>
                <input type="text" placeholder="Acme Co." />
              </div>

              <div className="ew-fg">
                <label>Recipient country</label>
                <div className="ew-select-wrap">
                  <select defaultValue="Germany">
                    <option value="Germany">Germany</option>
                  </select>
                  <ChevronDown className="ew-select-icon" size={16} />
                </div>
              </div>

              <div className="ew-form-row">
                <div className="ew-fg">
                  <label>IBAN</label>
                  <input type="text" placeholder="DE89 3704 0044 0532 0130 00" />
                </div>
                <div className="ew-fg">
                  <label>BIC</label>
                  <input type="text" placeholder="DELBDE33" />
                </div>
              </div>

              <div className="ew-fg">
                <label>Amount</label>
                <div className="ew-amount-input">
                  <input type="text" placeholder="20,000.0" />
                  <div className="ew-currency-badge">EUR</div>
                </div>
              </div>

              <button className="ew-send-submit">
                <ArrowUpRight size={18} />
                Send payment
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════════ RECEIVE SECTION ═══════════════════ */}
      <section id="receive" className="ew-send-section">
        <div className="ew-send-container">

          {/* Left Side */}
          <div className="ew-send-left">
            <h2 className="ew-send-title">Receive payments.</h2>
            <p className="ew-send-subtitle">
              Expand your global reach with digital currencies in your checkout. Auto-convert to EUR, GBP, USD.
            </p>

            <ul className="ew-send-list">
              <li>
                <div className="ew-send-list-icon">
                  <Send size={22} />
                </div>
                <div className="ew-send-list-text">
                  <h3>Get started fast</h3>
                  <p>Use our hosted payment page — fully optimized for conversion and available in multiple languages.</p>
                </div>
              </li>
              <li>
                <div className="ew-send-list-icon">
                  <Share2 size={22} />
                </div>
                <div className="ew-send-list-text">
                  <h3>Connect with existing systems</h3>
                  <p>Integrates with systems like Payment IQ, Praxis Checkout, Bridgerpay, Premier cashier and Stratified.</p>
                </div>
              </li>
              <li>
                <div className="ew-send-list-icon">
                  <Upload size={22} />
                </div>
                <div className="ew-send-list-text">
                  <h3>Get paid through any channel</h3>
                  <p>Generate invoices and request payment via email, SMS, WhatsApp and other platforms.</p>
                </div>
              </li>
            </ul>

            <button className="ew-demo-btn">
              <PlayCircle size={18} />
              See it in action — try the demo
            </button>
          </div>

          {/* Right Side - Phone Mockup */}
          <div className="ew-send-right ew-receive-right">

            <div className="ew-phone-mockup-wrapper">
              {/* Background Card */}
              <div className="ew-bg-card">
                <div className="ew-bg-card-row">
                  <div className="ew-bg-card-label">Paid Successfully</div>
                  <div className="ew-bg-card-value">109 USDC</div>
                </div>
                <div className="ew-bg-card-row">
                  <div className="ew-bg-card-label">To this address</div>
                  <div className="ew-bg-card-value ew-trunc">0x03b31c88...96b1480f7a0</div>
                </div>

              </div>

              {/* Foreground Phone */}
              <div className="ew-phone-mockup">
                <div className="ew-phone-notch"></div>
                <div className="ew-phone-header">My Crypto Wallet</div>
                <div className="ew-phone-body">

                  <div className="ew-qr-box">
                    <div className="ew-qr-anim-container">
                      <div className="ew-qr-code">
                        <QrCode size={130} strokeWidth={1.5} color="#0b132b" />
                        <div className="ew-qr-corners"></div>
                        <div className="ew-scan-line"></div>
                      </div>
                      <div className="ew-qr-success">
                        <div className="ew-check-icon">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <span className="ew-success-text">Payment<br />Received</span>
                      </div>
                    </div>
                  </div>

                  <button className="ew-phone-pay-btn">
                    <span className="ew-btn-text-pay">Scan QR</span>
                    <span className="ew-btn-text-done">Done</span>
                  </button>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════ CONVERT SECTION ═══════════════════ */}
      <section id="convert" className="ew-send-section" style={{ background: 'linear-gradient(90deg, #ffffff 50%, #eff4fc 50%)' }}>
        <div className="ew-send-container">

          {/* Left Side */}
          <div className="ew-send-left">
            <h2 className="ew-send-title">Convert currencies.</h2>
            <p className="ew-send-subtitle" style={{ maxWidth: '480px' }}>
              24/7 access and full control. Avoid banking hour limitations and delays.
            </p>

            <ul className="ew-send-list">
              <li>
                <div className="ew-send-list-icon">
                  <RefreshCcw size={22} />
                </div>
                <div className="ew-send-list-text">
                  <h3>Flexible conversion options</h3>
                  <p>Exchange between fiat and crypto 24/7, whether it&apos;s USD to EUR, USDC to GBP, or any mix in between.</p>
                </div>
              </li>
              <li>
                <div className="ew-send-list-icon">
                  <ArrowLeftRight size={22} />
                </div>
                <div className="ew-send-list-text">
                  <h3>Trade your way</h3>
                  <p>Lock in OTC quotes through our portal, API or direct chat for large or time-sensitive conversions.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Right Side - Convert Widget */}
          <div className="ew-send-right ew-convert-right">
            <div className="ew-convert-card">
              <h3 className="ew-convert-card-title">Convert</h3>

              <div className="ew-convert-field ew-cf-from">
                <span className="ew-cf-label">From</span>
                <div className="ew-cf-select">
                  <div className="ew-cf-token ew-slider-mask">
                    <div className="ew-currency-slider">
                      <div className="ew-currency-slide">
                        <div className="ew-token-icon ew-icon-eur">€</div>
                        <span>Euros</span>
                      </div>
                      <div className="ew-currency-slide">
                        <div className="ew-token-icon ew-icon-gbp">£</div>
                        <span>British Pound</span>
                      </div>
                      <div className="ew-currency-slide">
                        <div className="ew-token-icon ew-icon-usd">$</div>
                        <span>US Dollar</span>
                      </div>
                      <div className="ew-currency-slide">
                        <div className="ew-token-icon ew-icon-eur">€</div>
                        <span>Euros</span>
                      </div>
                    </div>
                  </div>
                  <ChevronDown size={16} color="#64748b" />
                </div>
              </div>

              <div className="ew-convert-swap">
                <div className="ew-swap-btn">
                  <ArrowDownUp size={16} strokeWidth={2.5} />
                </div>
              </div>

              <div className="ew-convert-field ew-cf-to">
                <span className="ew-cf-label">To</span>
                <div className="ew-cf-select">
                  <div className="ew-cf-token ew-slider-mask">
                    <div className="ew-currency-slider">
                      <div className="ew-currency-slide">
                        <div className="ew-token-icon ew-icon-usdc">$</div>
                        <span>USD Coin</span>
                      </div>
                      <div className="ew-currency-slide">
                        <div className="ew-token-icon ew-icon-btc">₿</div>
                        <span>Bitcoin</span>
                      </div>
                      <div className="ew-currency-slide">
                        <div className="ew-token-icon ew-icon-eth">Ξ</div>
                        <span>Ethereum</span>
                      </div>
                      <div className="ew-currency-slide">
                        <div className="ew-token-icon ew-icon-usdc">$</div>
                        <span>USD Coin</span>
                      </div>
                    </div>
                  </div>
                  <ChevronDown size={16} color="#64748b" />
                </div>
              </div>

              <div className="ew-convert-amount">
                <div className="ew-ca-val-wrapper">
                  <div className="ew-ca-values-slider">
                    <span className="ew-ca-value">109.42</span>
                    <span className="ew-ca-value">0.0825</span>
                    <span className="ew-ca-value">0.7410</span>
                    <span className="ew-ca-value">109.42</span>
                  </div>
                </div>
                <div className="ew-ca-badge ew-slider-mask-badge">
                  <div className="ew-badge-slider">
                    <div className="ew-badge-slide"><div className="ew-token-icon ew-icon-usdc">$</div>USDC</div>
                    <div className="ew-badge-slide"><div className="ew-token-icon ew-icon-btc">₿</div>BTC</div>
                    <div className="ew-badge-slide"><div className="ew-token-icon ew-icon-eth">Ξ</div>ETH</div>
                    <div className="ew-badge-slide"><div className="ew-token-icon ew-icon-usdc">$</div>USDC</div>
                  </div>
                </div>
              </div>

              <button className="ew-convert-submit-btn">
                <Zap size={16} fill="currentColor" />
                Fast Convert
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════════ STORE SECTION ═══════════════════ */}
      <section id="store" className="ew-send-section" style={{ background: 'linear-gradient(90deg, #ffffff 50%, #eff4fc 50%)' }}>
        <div className="ew-send-container">

          {/* Left Side */}
          <div className="ew-send-left">
            <h2 className="ew-send-title">Store funds.</h2>
            <p className="ew-send-subtitle" style={{ maxWidth: '440px' }}>
              Let your customers store, spend and get paid in USD, GBP, EUR or stablecoins.
            </p>

            <ul className="ew-send-list" style={{ marginBottom: '40px' }}>
              <li>
                <div className="ew-send-list-icon">
                  <Network size={22} />
                </div>
                <div className="ew-send-list-text">
                  <h3>Embed wallets in your platform</h3>
                  <p>Set up wallets for USD, GBP, EUR and stablecoins.
                    <br /> Convert between them automatically or on demand, 24/7.</p>
                </div>
              </li>
              <li>
                <div className="ew-send-list-icon">
                  <LayoutGrid size={22} />
                </div>
                <div className="ew-send-list-text">
                  <h3>Named accounts for your customers</h3>
                  <p>Use named virtual accounts to simplify reconciliation and keep client funds clearly separated.</p>
                </div>
              </li>
              <li>
                <div className="ew-send-list-icon">
                  <ArrowRightLeft size={22} />
                </div>
                <div className="ew-send-list-text">
                  <h3>No need to hold crypto</h3>
                  <p>Auto-convert stablecoins to fiat on receipt, or fiat to stablecoins on payout.</p>
                </div>
              </li>
            </ul>

            <button className="btn btn-primary">
              <PlayCircle size={20} />
              See it in action — try the demo
            </button>
          </div>

          {/* Right Side - Store Widget */}
          <div className="ew-send-right ew-store-right">
            <div className="ew-store-wrapper">

              {/* === BUBBLE 1 (USD) === */}
              <div className="ew-store-deposit ew-bubble-1">
                <div className="ew-sd-icon">
                  <Landmark size={18} color="#fff" />
                </div>
                <div className="ew-sd-text">
                  <div className="ew-sd-label">Customer deposit</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div className="ew-sd-val">3500 USD</div>
                    <span style={{ fontSize: '0.65rem', color: '#10b981', fontWeight: 600, background: '#ecfdf5', padding: '2px 6px', borderRadius: '4px' }}>0.1% fee</span>
                  </div>
                </div>
              </div>
              <div className="ew-store-connector ew-conn-1">
                <div className="ew-connector-swap">
                  <ArrowRightLeft size={12} color="#0047ff" />
                </div>
              </div>

              {/* === BUBBLE 2 (USDC) === */}
              <div className="ew-store-payment ew-bubble-2" style={{ top: '198px' }}>
                <div className="ew-sp-icon">
                  <Store size={18} color="#fff" />
                </div>
                <div className="ew-sd-text">
                  <div className="ew-sd-label">Supplier payment</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div className="ew-sd-val">2400 USDC</div>
                    <span style={{ fontSize: '0.65rem', color: '#ef4444', fontWeight: 600, background: '#fef2f2', padding: '2px 6px', borderRadius: '4px' }}>0.1% fee</span>
                  </div>
                </div>
              </div>
              <div className="ew-store-connector-right ew-conn-2" style={{ top: '215px' }}>
                <div className="ew-connector-swap-right">
                  <ArrowRightLeft size={12} color="#0047ff" />
                </div>
              </div>

              {/* === BUBBLE 3 (EUR) === */}
              <div className="ew-store-deposit ew-bubble-3" style={{ top: '266px' }}>
                <div className="ew-sd-icon" style={{ background: '#0ea5e9' }}>
                  <Landmark size={18} color="#fff" />
                </div>
                <div className="ew-sd-text">
                  <div className="ew-sd-label">Customer deposit</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div className="ew-sd-val">1500 EUR</div>
                    <span style={{ fontSize: '0.65rem', color: '#10b981', fontWeight: 600, background: '#ecfdf5', padding: '2px 6px', borderRadius: '4px' }}>0.1% fee</span>
                  </div>
                </div>
              </div>
              <div className="ew-store-connector ew-conn-3" style={{ top: '283px' }}>
                <div className="ew-connector-swap">
                  <ArrowRightLeft size={12} color="#0047ff" />
                </div>
              </div>

              {/* === BUBBLE 4 (GBP) === */}
              <div className="ew-store-payment ew-bubble-4" style={{ top: '334px' }}>
                <div className="ew-sp-icon" style={{ background: '#f59e0b' }}>
                  <Store size={18} color="#fff" />
                </div>
                <div className="ew-sd-text">
                  <div className="ew-sd-label">Partner payout</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div className="ew-sd-val">1200 GBP</div>
                    <span style={{ fontSize: '0.65rem', color: '#ef4444', fontWeight: 600, background: '#fef2f2', padding: '2px 6px', borderRadius: '4px' }}>0.1% fee</span>
                  </div>
                </div>
              </div>
              <div className="ew-store-connector-right ew-conn-4" style={{ top: '351px' }}>
                <div className="ew-connector-swap-right">
                  <ArrowRightLeft size={12} color="#0047ff" />
                </div>
              </div>

              {/* Main Card */}
              <div className="ew-store-card">
                <h3 className="ew-store-brand">Your brand</h3>
                <div className="ew-store-accounts-header">Customer accounts</div>

                <div className="ew-store-accounts-list">

                  <div className="ew-sa-row ew-sa-usd">
                    <div className="ew-sa-icon">🇺🇸</div>
                    <div className="ew-sa-info">
                      <span className="ew-sa-name">USD</span>
                      <div className="ew-sa-bal-wrapper">
                        <div className="ew-sa-bal-anim ew-bal-1">
                          <span className="ew-sa-bal">$88,900.53</span>
                          <span className="ew-sa-bal">$92,397.03</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="ew-sa-row">
                    <div className="ew-sa-icon ew-icon-usdc">$</div>
                    <div className="ew-sa-info">
                      <span className="ew-sa-name">USDC</span>
                      <div className="ew-sa-bal-wrapper">
                        <div className="ew-sa-bal-anim ew-bal-2">
                          <span className="ew-sa-bal">$32,900.92</span>
                          <span className="ew-sa-bal">$30,498.52</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="ew-sa-row">
                    <div className="ew-sa-icon">🇪🇺</div>
                    <div className="ew-sa-info">
                      <span className="ew-sa-name">EUR</span>
                      <div className="ew-sa-bal-wrapper">
                        <div className="ew-sa-bal-anim ew-bal-3">
                          <span className="ew-sa-bal">€22,437.83</span>
                          <span className="ew-sa-bal">€23,936.33</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="ew-sa-row">
                    <div className="ew-sa-icon">🇬🇧</div>
                    <div className="ew-sa-info">
                      <span className="ew-sa-name">GBP</span>
                      <span className="ew-sa-bal">£30,500.92</span>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════════ FEATURES ═══════════════════ */}
      <section className="ew-features">
        <div className="ew-feat-container">
          <span className="ew-eyebrow">Why Texnova Wallets</span>
          <h2 className="ew-feat-title">Everything you need to go global</h2>
          <div className="ew-feat-grid">
            {FEATURES.map(f => (
              <div key={f.title} className="ew-feat-card">
                <span className="ew-feat-icon">{f.icon}</span>
                <h3 className="ew-feat-name">{f.title}</h3>
                <p className="ew-feat-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
