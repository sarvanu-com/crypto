'use client';

import { useState, useEffect } from 'react';
import { Activity, Bell, LayoutDashboard, Search, Send, ArrowDownRight, Network, Database, Shield, Key, Plus, RefreshCw, ArrowUpRight, Copy, QrCode, HelpCircle, CheckCircle2, User, Settings, CreditCard, Users, LogOut } from 'lucide-react';
import './dashboard.css';

// Initial Dummy Data
const initialKeys = [
  { id: 1, type: 'live', name: 'Primary Routing Key', date: '4 months ago', secret: 'sk_live_28f2••••d7a1' },
  { id: 2, type: 'test', name: 'Development Env Key', date: '1 year ago', secret: 'sk_test_99x1••••a2b3' }
];

const initialTransactions = Array.from({length: 4}).map((_, i) => ({
  id: Math.random().toString(36).substr(2, 9),
  date: `Today, 10:${24+i} AM`,
  txid: `0x${(Math.random()*1e16).toString(16).substring(0,8)}`,
  network: i % 2 === 0 ? 'Base' : 'Ethereum',
  type: 'API Payout',
  status: 'Settled',
  amount: (Math.random() * 5000).toFixed(2),
  isNegative: true
}));

export default function DashboardClient() {
  const [activeTab, setActiveTab] = useState('overview');

  // Unified Application State
  const [apiKeys, setApiKeys] = useState(initialKeys);
  const [transactions, setTransactions] = useState(initialTransactions);
  const [toast, setToast] = useState<{message: string, visible: boolean}>({ message: '', visible: false });
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotifOpen, setIsNotifOpen] = useState(false);

  // ─── Interactive Handlers ───
  const triggerToast = (msg: string) => {
    setToast({ message: msg, visible: true });
    setTimeout(() => setToast({ message: '', visible: false }), 3000);
  };

  const handleGenerateKey = () => {
    const newKey = {
      id: Date.now(),
      type: 'live',
      name: 'New Routing Key',
      date: 'Just now',
      secret: `sk_live_${Math.random().toString(36).substr(2, 8)}••••`
    };
    setApiKeys([newKey, ...apiKeys]);
    triggerToast("Successfully generated new API Key.");
  };

  const handleRevokeKey = (id: number) => {
    setApiKeys(apiKeys.filter(k => k.id !== id));
    triggerToast("API Key revoked permanently.");
  };

  const handleSendFunds = (amount: string, dest: string) => {
    if(!amount || !dest) return;
    const newTx = {
      id: Date.now().toString(),
      date: 'Just now',
      txid: `0x${(Math.random()*1e16).toString(16).substring(0,8)}`,
      network: 'Ethereum',
      type: 'Manual Payout',
      status: 'Pending',
      amount: parseFloat(amount).toFixed(2),
      isNegative: true
    };
    // Simulate API delay
    setTimeout(() => {
      setTransactions([newTx, ...transactions]);
      setActiveTab('transactions');
      triggerToast(`Successfully sent ${amount} USDC to ${dest.substring(0,6)}...`);
    }, 800);
  };

  // ─── Dynamic Context Configuration ───
  const tabContexts = {
    overview: { title: 'Treasury Command', sub: 'Real-time settlement and liquidity monitoring', actions: true },
    transactions: { title: 'Transaction History', sub: 'Complete immutable ledger records', actions: false },
    send: { title: 'Send & Payouts', sub: 'Execute programmatic global transfers', actions: false },
    receive: { title: 'Receive Funds', sub: 'Deposit liquidity into corporate accounts', actions: false },
    yield: { title: 'Treasury Routing', sub: 'Manage automated stablecoin APY sweeps', actions: false },
    balances: { title: 'Asset Balances', sub: 'Current state of corporate wallets', actions: false },
    apikeys: { title: 'API Management', sub: 'Configure access control and webhooks', actions: true }
  };
  const currentContext = tabContexts[activeTab as keyof typeof tabContexts];

  return (
    <div className="dashboard-wrapper">
      
      {/* ═══════════ SIDEBAR ═══════════ */}
      <div className="dash-sidebar">
        <div className="nav-group">
          <div className="nav-group-title">Main</div>
          <button onClick={() => setActiveTab('overview')} className={`dash-nav-link ${activeTab === 'overview' ? 'active' : ''}`}><LayoutDashboard size={16} /> Overview</button>
          <button onClick={() => setActiveTab('transactions')} className={`dash-nav-link ${activeTab === 'transactions' ? 'active' : ''}`}><Activity size={16} /> Transactions</button>
          <button onClick={() => setActiveTab('send')} className={`dash-nav-link ${activeTab === 'send' ? 'active' : ''}`}><Send size={16} /> Send & Payouts</button>
          <button onClick={() => setActiveTab('receive')} className={`dash-nav-link ${activeTab === 'receive' ? 'active' : ''}`}><ArrowDownRight size={16} /> Receive</button>
        </div>
        <div className="nav-group">
          <div className="nav-group-title">Infrastructure</div>
          <button onClick={() => setActiveTab('yield')} className={`dash-nav-link ${activeTab === 'yield' ? 'active' : ''}`}><Network size={16} /> Yield Routing</button>
          <button onClick={() => setActiveTab('balances')} className={`dash-nav-link ${activeTab === 'balances' ? 'active' : ''}`}><Database size={16} /> Balances</button>
        </div>
        <div className="nav-group">
          <div className="nav-group-title">Developers</div>
          <button onClick={() => setActiveTab('apikeys')} className={`dash-nav-link ${activeTab === 'apikeys' ? 'active' : ''}`}><Key size={16} /> API Keys</button>
        </div>
      </div>

      {/* ═══════════ MAIN AREA ═══════════ */}
      <div className="dash-main">
        {/* STICKY COMMAND HEADER */}
        <div className="dash-header-top bg-white/90 backdrop-blur-md sticky top-[80px] z-30 border-b border-slate-200 shadow-sm relative">
          <div className="dash-breadcrumbs">
             <div className="workspace-dropdown">Texnova Corp <Shield size={14} color="#10b981" /></div>
             <span className="slash">/</span>
             <span className="current">{currentContext.title}</span>
          </div>
          <div className="dash-search-container">
            <div className="dash-search">
              <Search size={16} color="#64748b" />
              <input type="text" placeholder="Search TxID, Address, or Blocks..." />
              <div className="dash-search-kbd">⌘K</div>
            </div>
          </div>
          <div className="dash-utils relative">
            <button onClick={() => triggerToast("Support session initialized. Agent connecting...")} className="btn-icon-ghost"><HelpCircle size={20} /></button>
            
            {/* NOTIFICATIONS */}
            <div className="relative">
               <button onClick={() => { setIsNotifOpen(!isNotifOpen); setIsProfileOpen(false); }} className="btn-icon-ghost relative">
                 <Bell size={20} />
                 <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
               </button>
               {isNotifOpen && (
                 <div className="dash-popover">
                    <div className="popover-header">
                       <h3 className="font-bold text-[#0b132b] text-sm">Recent Alerts</h3>
                    </div>
                    <div className="notification-item">
                       <h4>Incoming Transfer Settled</h4>
                       <p>245,000.00 USDC deposited from 0x8F22...9A1B</p>
                    </div>
                    <div className="notification-item">
                       <h4>Weekly APY Sweep Executed</h4>
                       <p>1,000,000.00 USDC routed to Aave V3</p>
                    </div>
                    <div className="notification-item border-l-2 border-amber-500">
                       <h4>New Device Sign-in</h4>
                       <p>Mac OS / Chrome detected in San Francisco, CA</p>
                    </div>
                 </div>
               )}
            </div>

            {/* PROFILE */}
            <div className="relative">
               <div onClick={() => { setIsProfileOpen(!isProfileOpen); setIsNotifOpen(false); }} className="avatar cursor-pointer hover:bg-blue-700 transition-colors">
                  <User size={18} strokeWidth={2.5} />
               </div>
               {isProfileOpen && (
                 <div className="dash-popover">
                    <div className="popover-header">
                       <h3 className="font-bold text-[#0b132b] text-base">Admin User</h3>
                       <p className="text-xs font-medium text-slate-500">admin@texnova.corp</p>
                    </div>
                    <div className="p-2">
                       <div className="popover-item" onClick={() => triggerToast("Routing to Account Settings...")}><User size={16}/> Account Profile</div>
                       <div className="popover-item" onClick={() => triggerToast("Opening Billing Portal...")}><CreditCard size={16}/> Billing & Limits</div>
                       <div className="popover-item" onClick={() => triggerToast("Fetching Team Roster...")}><Users size={16}/> Team Management</div>
                       <div className="popover-item"><Settings size={16}/> Developer Preferences</div>
                       <div className="my-2 border-b border-slate-200"></div>
                       <div className="popover-item danger" onClick={() => triggerToast("Security token invalidated. Signing out...")}><LogOut size={16}/> Sign Out</div>
                    </div>
                 </div>
               )}
            </div>
            
            {/* Click-away overlay */}
            {(isProfileOpen || isNotifOpen) && (
              <div className="fixed inset-0 z-40" onClick={() => { setIsProfileOpen(false); setIsNotifOpen(false); }}></div>
            )}
          </div>
        </div>

        {/* CONTENT AREA (includes Context Bar natively) */}
        <div className="dash-content animate-in fade-in" style={{ animationDuration: '0.3s' }}>
          {/* STATIC CONTEXT BAR (No sticky overlaps) */}
          <div className="dash-context-bar mb-8">
             <div>
               <h1 className="context-title">{currentContext.title}</h1>
               <p className="context-subtitle">{currentContext.sub}</p>
             </div>
             
             {currentContext.actions && activeTab === 'overview' && (
               <div className="flex gap-3">
                 <button onClick={() => triggerToast("Ledger synchronized successfully.")} className="btn bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 font-bold px-4 py-2 flex items-center gap-2 shadow-sm">
                   <RefreshCw size={16} /> Sync Ledger
                 </button>
                 <button onClick={() => setActiveTab('send')} className="btn btn-primary px-4 py-2 font-bold flex items-center gap-2 shadow-sm">
                   <Plus size={16} /> Move Capital
                 </button>
               </div>
             )}

             {currentContext.actions && activeTab === 'apikeys' && (
               <div className="flex gap-3">
                  <button onClick={handleGenerateKey} className="btn btn-primary px-4 py-2 font-bold flex items-center gap-2 shadow-sm">+ Generate New Key</button>
               </div>
             )}
          </div>
          
           {activeTab === 'overview' && <OverviewTab />}
           {activeTab === 'transactions' && <TransactionsTab txs={transactions} />}
           {activeTab === 'send' && <SendTab onSend={handleSendFunds} />}
           {activeTab === 'receive' && <ReceiveTab onCopy={() => triggerToast("Deposit address copied to clipboard!")} />}
           {activeTab === 'yield' && <YieldTab />}
           {activeTab === 'balances' && <BalancesTab />}
           {activeTab === 'apikeys' && <ApiKeysTab keysList={apiKeys} onRevoke={handleRevokeKey} onReveal={() => triggerToast("Security clearance required to reveal.")} />}
        </div>
      </div>
      
      {/* GLOBAL TOAST */}
      {toast.visible && (
        <div className="dash-toast text-slate-800 font-bold">
           <CheckCircle2 color="#10B981" size={24} /> {toast.message}
        </div>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════
   SUB-COMPONENTS (TABS)
═══════════════════════════════════════════════ */

function OverviewTab() {
  return (
    <>
      <div className="stat-grid">
        <div className="dash-card">
          <div className="stat-label">Total Liquidity</div>
          <div className="stat-val">$12,450,000.00</div>
          <div className="stat-change positive"><ArrowUpRight size={14} /> +2.1% (7d)</div>
        </div>
        <div className="dash-card">
          <div className="stat-label">Active End-User Wallets</div>
          <div className="stat-val text-primary">48,291</div>
          <div className="stat-change positive"><ArrowUpRight size={14} /> +1,244</div>
        </div>
        <div className="dash-card bg-slate-50">
          <div className="stat-label">Est. Treasury Yield APY</div>
          <div className="stat-val text-violet-600">4.25%</div>
          <div className="text-xs font-bold text-slate-500 uppercase flex items-center gap-1"><CheckCircle2 size={12} color="#10b981"/> Aave V3 Routing Active</div>
        </div>
      </div>

      <div className="dash-card p-0 overflow-hidden">
        <div className="p-5 border-b border-slate-200 bg-slate-50/50">
          <h3 className="text-sm font-bold text-slate-600 uppercase tracking-widest">Live Transaction Pipeline</h3>
        </div>
        <table className="tx-table">
          <thead>
            <tr>
              <th>Type</th>
              <th>Description</th>
              <th>Network</th>
              <th>Status</th>
              <th className="text-right">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="tx-icon-cell"><div className="tx-type-icon icon-receive"><ArrowDownRight size={16} /></div></td>
              <td>
                <div className="font-bold text-[#0b132b] mb-1">B2B Invoice Settlement</div>
                <div className="text-xs text-slate-500 font-medium">0x8F22...9A1B</div>
              </td>
              <td><span className="net-badge net-base">Base</span></td>
              <td><span className="status-badge status-settled"><div className="status-dot"></div> Settled</span></td>
              <td className="text-right amt-positive">+ 245,000.00 USDC</td>
            </tr>
            <tr>
              <td className="tx-icon-cell"><div className="tx-type-icon icon-send"><Send size={14} /></div></td>
              <td>
                <div className="font-bold text-[#0b132b] mb-1">Treasury APY Sweep</div>
                <div className="text-xs text-slate-500 font-medium">Smart contract execution</div>
              </td>
              <td><span className="net-badge net-eth">Ethereum</span></td>
              <td><span className="status-badge status-settled"><div className="status-dot"></div> Settled</span></td>
              <td className="text-right amt-negative">- 1,000,000.00 USDC</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

function TransactionsTab({txs}: {txs:(any)[]}) {
  return (
    <div className="dash-card p-0 overflow-hidden">
      <table className="tx-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>TXID</th>
            <th>Network</th>
            <th>Type</th>
            <th>Status</th>
            <th className="text-right">Amount</th>
          </tr>
        </thead>
        <tbody>
          {txs.map((tx) => (
            <tr key={tx.id}>
              <td className="text-sm font-medium text-slate-500">{tx.date}</td>
              <td className="text-sm font-mono font-bold text-primary">{tx.txid}</td>
              <td><span className={`net-badge net-${tx.network.toLowerCase()}`}>{tx.network}</span></td>
              <td className="font-bold text-[#0b132b] text-sm">{tx.type}</td>
              <td><span className={tx.status === 'Pending' ? `status-badge status-pending` : `status-badge status-settled`}><div className={tx.status === 'Pending' ? `status-dot warning` : `status-dot`}></div> {tx.status}</span></td>
              <td className={`text-right ${tx.isNegative ? 'amt-negative' : 'amt-positive'}`}>{tx.isNegative ? '-' : '+'} {tx.amount} USDC</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function SendTab({onSend}: {onSend: (amt: string, dest: string) => void}) {
  const [dest, setDest] = useState('');
  const [amt, setAmt] = useState('');
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setTimeout(() => {
       onSend(amt, dest);
       setDest(''); setAmt(''); setIsSending(false);
    }, 2800); // Extended delay to let the animation play
  };

  return (
    <div className="dash-card max-w-2xl relative">
      {isSending && (
         <div className="absolute inset-0 bg-white/90 backdrop-blur-md z-10 flex flex-col items-center justify-center rounded-xl">
            <div className="routing-engine mb-8">
               <div className="routing-ring-outer"></div>
               <div className="routing-ring-inner"></div>
               <div className="routing-packet"></div>
            </div>
            <p className="font-bold text-primary text-sm tracking-widest uppercase animate-pulse">Routing to Blockchain...</p>
         </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-widest">Destination Wallet Address</label>
          <input required value={dest} onChange={e=>setDest(e.target.value)} type="text" placeholder="0x..." className="dash-form-input" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-widest">Amount</label>
              <input required value={amt} onChange={e=>setAmt(e.target.value)} type="number" step="0.01" placeholder="0.00" className="dash-form-input font-bold" />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-widest">Asset</label>
              <select className="dash-form-input cursor-pointer select-none appearance-none">
                <option>USDC (Circle)</option>
              </select>
            </div>
        </div>
        <button type="submit" className="btn btn-primary w-full py-3 font-bold justify-center">Execute Transfer</button>
      </form>
    </div>
  );
}

function ReceiveTab({onCopy}: {onCopy: ()=>void}) {
  return (
    <div className="dash-card flex flex-col lg:flex-row gap-12 lg:gap-16 items-center max-w-4xl p-10">
      <div className="target-pulse shrink-0">
         <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex justify-center shadow-inner relative z-20">
             <QrCode size={180} color="#0b132b" strokeWidth={1} />
         </div>
      </div>
      <div>
        <h3 className="text-xl font-bold text-[#0b132b] mb-3">Primary USDC Deposit Address</h3>
        <p className="text-sm text-slate-500 mb-8 font-medium leading-relaxed max-w-lg">Only send ERC-20 based USDC tokens to this address. Sending other networks or assets will result in permanent loss of funds. Automatic bridging is <strong className="text-primary">not enabled</strong> on this address.</p>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 bg-slate-50 p-3 rounded-lg border border-slate-200">
          <span className="font-mono text-sm text-[#0b132b] font-bold px-2 truncate w-full sm:w-auto">0x1B82A9C4E049C82A2E2A89F94a11</span>
          <button onClick={onCopy} className="bg-white p-2 rounded shadow-sm border border-slate-200 text-primary hover:bg-slate-100 hover:text-blue-700 transition-all font-bold text-xs flex items-center gap-2 shrink-0">
             <Copy size={16} /> COPY ADDRESS
          </button>
        </div>
      </div>
    </div>
  );
}

function YieldTab() {
  return (
    <div className="dash-card max-w-3xl">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h3 className="text-lg font-bold text-[#0b132b] mb-1">Automated APY Sweep</h3>
          <p className="text-sm text-slate-500 font-medium">Route idle stablecoins into audited Tier 1 lending pools overnight.</p>
        </div>
        <div className="bg-emerald-50 text-emerald-600 px-3 py-1.5 rounded-full font-bold text-xs tracking-wider border border-emerald-100">STATUS: ACTIVE</div>
      </div>
      <div className="p-6 border border-slate-200 rounded-xl bg-slate-50">
        <div className="grid grid-cols-2 gap-8">
            <div>
              <span className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-widest">Target Protocol</span>
              <div className="text-xl font-bold text-[#0b132b] flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full bg-violet-500"></div> Aave V3 (Ethereum)</div>
            </div>
            <div>
              <span className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-widest">Current Float Threshold</span>
              <div className="text-xl font-bold text-[#0b132b]">$250,000.00 USDC</div>
            </div>
        </div>
      </div>
    </div>
  );
}

function BalancesTab() {
  return (
    <div className="dash-card p-0 overflow-hidden">
      <table className="tx-table">
        <thead>
          <tr>
            <th>Asset</th>
            <th>Network</th>
            <th className="text-right">Total Balance</th>
            <th className="text-right">USD Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-sm font-bold text-[#0b132b]">USDC <span className="font-medium text-slate-500 ml-2">Circle USD</span></td>
            <td><span className="net-badge net-eth">Ethereum</span></td>
            <td className="text-right font-semibold text-sm">10,500,000.00</td>
            <td className="text-right font-bold text-[#0b132b] text-sm">$10,500,000.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function ApiKeysTab({keysList, onRevoke, onReveal}: {keysList: any[], onRevoke: (id:number)=>void, onReveal: ()=>void}) {
  return (
    <div className="dash-card max-w-3xl">
      <div className="mb-10">
          <h3 className="text-sm font-bold text-[#0b132b] mb-4 uppercase tracking-widest flex items-center gap-2">
            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div> Live Production Keys
          </h3>
          {keysList.filter(k => k.type === 'live').map(k => (
             <div key={k.id} className="bg-slate-50 border border-slate-200 rounded-xl p-5 flex flex-col xl:flex-row xl:justify-between xl:items-center mb-4 gap-4">
               <div>
                   <div className="text-base font-bold text-[#0b132b] mb-1">{k.name}</div>
                   <div className="text-xs font-medium text-slate-500">Created: {k.date}</div>
               </div>
               <div className="flex flex-wrap lg:flex-nowrap gap-3 xl:gap-4 items-center">
                   <div className="font-mono text-sm bg-white px-3 py-2 rounded-lg border border-slate-200 font-bold truncate max-w-[200px] sm:max-w-none">{k.secret}</div>
                   <button onClick={onReveal} className="btn btn-outline text-xs px-3 py-2 whitespace-nowrap">Reveal</button>
                   <button onClick={() => onRevoke(k.id)} className="text-xs text-red-500 font-bold bg-transparent border-none cursor-pointer hover:text-red-600 whitespace-nowrap">Revoke</button>
               </div>
             </div>
          ))}
          {keysList.filter(k => k.type === 'live').length === 0 && <p className="text-sm text-slate-500 text-center py-4">No live keys available.</p>}
      </div>
      <div>
          <h3 className="text-sm font-bold text-slate-500 mb-4 uppercase tracking-widest flex items-center gap-2">
            <div className="w-2 h-2 bg-amber-500 rounded-full"></div> Sandbox Test Keys
          </h3>
          {keysList.filter(k => k.type === 'test').map(k => (
             <div key={k.id} className="bg-slate-50 border border-slate-200 rounded-xl p-5 flex flex-col xl:flex-row xl:justify-between xl:items-center mb-4 gap-4">
               <div>
                   <div className="text-base font-bold text-[#0b132b] mb-1">{k.name}</div>
                   <div className="text-xs font-medium text-slate-500">Created: {k.date}</div>
               </div>
               <div className="flex flex-wrap lg:flex-nowrap gap-3 xl:gap-4 items-center">
                   <div className="font-mono text-sm bg-white px-3 py-2 rounded-lg border border-slate-200 font-bold truncate max-w-[200px] sm:max-w-none">{k.secret}</div>
                   <button onClick={onReveal} className="btn btn-outline text-xs px-3 py-2 whitespace-nowrap">Reveal</button>
                   <button onClick={() => onRevoke(k.id)} className="text-xs text-red-500 font-bold bg-transparent border-none cursor-pointer hover:text-red-600 whitespace-nowrap">Revoke</button>
               </div>
             </div>
          ))}
      </div>
    </div>
  );
}

// Inline Hexagon
function Hexagon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
    </svg>
  );
}
