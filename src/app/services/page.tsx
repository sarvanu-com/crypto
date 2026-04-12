import type { Metadata } from 'next';
import CTA from '@/components/CTA';
import PaymentGlobe from '@/components/PaymentGlobe';
import { 
  Link as LinkIcon, 
  SquareDashed, 
  Sliders, 
  Zap, 
  Wallet, 
  BarChart3, 
  Globe, 
  DollarSign, 
  CheckCircle2, 
  Database, 
  RefreshCw,
  ArrowRight,
  Lightbulb,
  ShieldCheck,
  Building2,
  LayoutDashboard,
  Coins,
  LineChart,
  ShoppingBag,
  CreditCard,
  Settings,
  ShieldHalf,
  ChevronRight,
  Network,
  Maximize2,
  Link2,
  ArrowRightLeft
} from 'lucide-react';
import './services.css';

export const metadata: Metadata = {
  title: 'What We Provide | Texnova Services',
  description: 'Explore Texnova\'s premium infrastructure: Cross-border Payments, Merchant Payments, and Trading & Treasury.',
};

export default function Services() {
  return (
    <main className="services-page">
      {/* Hero Section */}
      <section className="services-hero text-center container">
        <div className="mx-auto mb-6 flex justify-center">
          <div className="services-badge">Infrastructure for the future</div>
        </div>
        <h1 className="hero-title">What We Provide.</h1>
        <p className="hero-subtitle mx-auto">
          One unified API integration connects your enterprise platform directly to the entire decentralized financial backbone.
        </p>
      </section>

      {/* 1. Cross-border Payments Section (Image 2 style) */}
      <section id="cross-border" className="feature-section premium-feature">
        <div className="container feature-container">
          <div className="feature-content">
            <div className="feature-eyebrow">
              <span className="eyebrow-dot"></span>
              CROSS-BORDER PAYMENTS
            </div>
            <h2 className="feature-headline">
              Take full control over your payment stack.
            </h2>
            
            <ul className="premium-list">
              <li>
                <div className="list-node">
                  <LinkIcon size={20} className="node-icon" />
                  <div className="node-line"></div>
                </div>
                <div className="list-text">
                  <h3>Connect your chosen liquidity and trading partners.</h3>
                </div>
              </li>
              <li>
                <div className="list-node">
                  <SquareDashed size={20} className="node-icon" />
                  <div className="node-line"></div>
                </div>
                <div className="list-text">
                  <h3>Configure your own risk appetite and thresholds.</h3>
                </div>
              </li>
              <li>
                <div className="list-node">
                  <Sliders size={20} className="node-icon" />
                </div>
                <div className="list-text">
                  <h3>Operate under your own licensing and retain full control over custody.</h3>
                </div>
              </li>
            </ul>

            <div className="feature-actions">
              <button className="btn btn-primary">
                Learn more <ArrowRight size={16} style={{ marginLeft: '8px' }} />
              </button>
            </div>
          </div>

          <div className="feature-visual">
            <div className="globe-wrapper">
              <PaymentGlobe size={550} />
              <div className="globe-overlay-glow"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Merchant Payments Section (Updated style) */}
      <section id="merchant" className="feature-section merchant-overhaul">
        <div className="container feature-container reverse">
          <div className="feature-content">
            <div className="feature-eyebrow">
              <span className="eyebrow-dot" style={{ backgroundColor: 'var(--primary-blue)' }}></span>
              MERCHANT PAYMENTS
            </div>
            <h2 className="feature-headline">
              Accelerate your go-to market.
            </h2>
            
            <ul className="merchant-feature-list">
              <li>
                <div className="m-feat-icon">
                  <Lightbulb size={24} />
                </div>
                <div className="m-feat-text">
                  <h3>Out of the box</h3>
                  <p>Stablecoin pay-in and payout management, error handling, gas optimization and auto-conversions.</p>
                </div>
              </li>
              <li>
                <div className="m-feat-icon">
                  <ShieldCheck size={24} />
                </div>
                <div className="m-feat-text">
                  <h3>Compliance-ready</h3>
                  <p>AML, OFAC, and more. Compliance built in from day one.</p>
                </div>
              </li>
              <li>
                <div className="m-feat-icon">
                  <Building2 size={24} />
                </div>
                <div className="m-feat-text">
                  <h3>Enterprise-grade security</h3>
                  <p>Built to match the highest security standards in finance.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="feature-visual">
            {/* Animated Dashboard Mockup */}
            <div className="merchant-dashboard-wrapper">
              <div className="dashboard-mockup">
                <div className="dashboard-scanner"></div>
                <div className="dashboard-sidebar">
                  <div className="sidebar-logo">TEXNOVA</div>
                  <nav className="sidebar-nav">
                    <div className="nav-item"><LayoutDashboard size={14} /> Dashboard</div>
                    <div className="nav-item"><Coins size={14} /> Digital Assets <ChevronRight size={10} /></div>
                    <div className="nav-item"><LineChart size={14} /> Trading <ChevronRight size={10} /></div>
                    <div className="nav-item active"><ShoppingBag size={14} /> Merchant Payments <ChevronRight size={10} /></div>
                    <div className="nav-sub-item active">Accounts</div>
                    <div className="nav-sub-item">Fee Policies</div>
                    <div className="nav-sub-item">Linked policies</div>
                    <div className="nav-item"><CreditCard size={14} /> Integrations <ChevronRight size={10} /></div>
                    <div className="nav-item"><Settings size={14} /> Settings <ChevronRight size={10} /></div>
                    <div className="nav-item"><ShieldHalf size={14} /> Service <ChevronRight size={10} /></div>
                  </nav>
                </div>
                <div className="dashboard-main">
                  <div className="dashboard-header">
                    <h3>Merchant Accounts</h3>
                    <p>Add a merchant account to your tenant</p>
                  </div>
                  <div className="accounts-table">
                    <div className="table-header">
                      <span>ID</span>
                      <span>USD</span>
                      <span>FROM</span>
                    </div>
                    <div className="table-row pulse-row row-1">
                      <span className="account-id">d66f7783...8603c5ed</span>
                      <span className="account-val">56.08</span>
                      <span className="account-from">USD 58.083663</span>
                    </div>
                    <div className="table-row row-2">
                      <span className="account-id">be71aa13...6d82b08c</span>
                      <span className="account-val">52.40</span>
                      <span className="account-from">GBP 42.992793</span>
                    </div>
                    <div className="table-row pulse-row row-3">
                      <span className="account-id">c7453548...3cf64e8f</span>
                      <span className="account-val">59.11</span>
                      <span className="account-from">ETH 0.018242</span>
                    </div>
                    <div className="table-row row-4">
                      <span className="account-id">378f6aef...7c762228</span>
                      <span className="account-val">50.84</span>
                      <span className="account-from">EUR 49.566509</span>
                    </div>
                    <div className="table-row pulse-row row-5">
                      <span className="account-id">37329786...23155637</span>
                      <span className="account-val">60.94</span>
                      <span className="account-from">GBP 50.001699</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dashboard-accent-blob"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Trading & Treasury Section (Image 4 style) */}
      <section id="trading" className="feature-section trading-overhaul alt-bg">
        <div className="container feature-container">
          <div className="feature-content">
            <div className="feature-eyebrow">
              <span className="eyebrow-dot" style={{ backgroundColor: 'var(--primary-blue)' }}></span>
              TRADING & TREASURY
            </div>
            <h2 className="feature-headline">
              Orchestrate payments across fiat and crypto globally.
            </h2>
            
            <ul className="merchant-feature-list">
              <li>
                <div className="m-feat-icon">
                  <Network size={24} />
                </div>
                <div className="m-feat-text">
                  <h3>Route, convert, and settle payments</h3>
                  <p>Across fiat and crypto, globally.</p>
                </div>
              </li>
              <li>
                <div className="m-feat-icon">
                  <Maximize2 size={24} />
                </div>
                <div className="m-feat-text">
                  <h3>Access to liquidity</h3>
                  <p>And payment rails for fiat to stablecoin to fiat payouts to emerging markets.</p>
                </div>
              </li>
              <li>
                <div className="m-feat-icon">
                  <Link2 size={24} />
                </div>
                <div className="m-feat-text">
                  <h3>Plug in your providers</h3>
                  <p>And execute your multi-venue, multi-leg trade strategies for synthetic pairs.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="feature-visual">
            <div className="orchestration-dashboard-wrapper">
              <div className="orchestration-dashboard glass-panel">
                <div className="orch-conversion-header">
                  <div className="conv-card">
                    <div className="conv-flag">🇪🇺</div>
                    <div className="conv-info">
                      <span className="conv-amt">10,000 EUR</span>
                      <span className="conv-label">BVNK Eur Wallet</span>
                    </div>
                  </div>
                  <div className="conv-arrow">
                    <ArrowRightLeft size={16} />
                    <span className="conv-status-tag">In progress</span>
                  </div>
                  <div className="conv-card">
                    <div className="conv-flag">🇲🇽</div>
                    <div className="conv-info">
                      <span className="conv-amt text-primary">215,684.00 MXN</span>
                      <span className="conv-label">Saul Carter</span>
                    </div>
                  </div>
                </div>

                <div className="orch-progress-bar">
                  <div className="progress-fill">
                    <div className="progress-glow"></div>
                  </div>
                </div>

                <div className="orch-meta-grid">
                  <div className="meta-item">
                    <span className="meta-label">Reference</span>
                    <span className="meta-val">REF123415</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label">Total fees</span>
                    <span className="meta-val">~ 1.10 EUR</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label">Estimated time</span>
                    <span className="meta-val">~ 15 min</span>
                  </div>
                </div>

                <div className="orch-activity">
                  <div className="activity-title">Payment activity</div>
                  <div className="activity-list">
                    <div className="activity-row">
                      <div className="act-status green"><span className="dot"></span> Success</div>
                      <div className="act-details">
                         <div className="act-pair">
                            <span className="token">EUR</span>
                            <ArrowRight size={12} />
                            <span className="token">USDT</span>
                         </div>
                         <div className="act-meta">Fee .005 EUR | 10,000 EUR | 0:04</div>
                      </div>
                    </div>
                    <div className="activity-row">
                      <div className="act-status blue"><span className="dot"></span> Pending</div>
                      <div className="act-details">
                         <div className="act-pair">
                            <span className="token">USDT</span>
                            <ArrowRight size={12} />
                            <span className="token">USDT</span>
                         </div>
                         <div className="act-meta">Fee .005 EUR | 11,000 USDT | 0:12</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Model Section (Keep as requested, maybe polish) */}
      <section className="container mb-24 business-model-section relative">
        <div className="model-glow"></div>
        <div className="glass-panel relative z-10" style={{ padding: '80px 40px', background: '#ffffff', borderColor: 'rgba(0, 71, 255, 0.1)' }}>
          <div className="text-center mb-16">
            <h2 className="text-4xl text-primary mb-6 font-bold">Our Business Model</h2>
            <p className="text-secondary text-xl mx-auto" style={{ maxWidth: '800px' }}>
              Infrastructure should be radically transparent. We make money purely on execution volume, completely decoupled from asset custody.
            </p>
          </div>
          
          <div className="grid grid-cols-3 gap-8 model-grid">
            <div className="glass-panel text-center p-8 model-card" style={{ background: '#F8FAFC', padding: '40px' }}>
              <div className="model-icon mx-auto mb-6" style={{ background: 'rgba(0, 71, 255, 0.08)', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <DollarSign size={40} style={{ color: 'var(--primary-blue)' }} />
              </div>
              <h4 className="text-2xl text-primary mb-4">Flat 0.1% Processing</h4>
              <p className="text-secondary">
                Strictly flat processing fee on every transaction. Zero hidden spread margins or surprise thresholds.
              </p>
            </div>
            
            <div className="glass-panel text-center p-8 model-card" style={{ background: '#F8FAFC', padding: '40px' }}>
              <div className="model-icon mx-auto mb-6" style={{ background: 'rgba(0, 71, 255, 0.08)', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <BarChart3 size={40} style={{ color: 'var(--primary-blue)' }} />
              </div>
              <h4 className="text-2xl text-primary mb-4">Enterprise SaaS Tiers</h4>
              <p className="text-secondary">
                Dedicated hosting and scalable API subscriptions for major institutions starting at $3.5k/mo.
              </p>
            </div>
            
            <div className="glass-panel text-center p-8 model-card" style={{ background: '#F8FAFC', padding: '40px' }}>
              <div className="model-icon mx-auto mb-6" style={{ background: 'rgba(0, 71, 255, 0.08)', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Globe size={40} style={{ color: 'var(--primary-blue)' }} />
              </div>
              <h4 className="text-2xl text-primary mb-4">Zero Custody Fees</h4>
              <p className="text-secondary">
                Holding 1 million or 1 billion on our platform costs you identically: $0. We never charge custody taxes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
