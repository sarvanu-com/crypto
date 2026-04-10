import type { Metadata } from 'next';
import { Activity, ArrowUpRight, ArrowDownRight, RefreshCw, Send, Plus, Key, Shield, Network, Database, Copy, Search, Bell, BarChart2, Zap, LayoutDashboard, Layers } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Enterprise Dashboard | Texnova Sandbox',
  robots: {
    index: false,
    follow: false,
  }
};
import './dashboard.css';

export default function Dashboard() {
  return (
    <div className="dashboard-wrapper">
      {/* Ambient Dashboard Background */}
      <div className="dash-ambient-1"></div>
      <div className="dash-ambient-2"></div>
      
      <div className="container" style={{ maxWidth: '1440px' }}>
        
        {/* Top App Header */}
        <div className="dash-top-bar glass-panel mb-8">
           <div className="flex items-center gap-4">
             <div className="dash-logo flex items-center justify-center">
               <Layers size={20} style={{ color: '#00F0FF' }} />
             </div>
             <div className="dash-workspace">
               <div className="text-white font-bold" style={{ fontSize: '0.95rem' }}>Texnova Global Enterprise</div>
               <div className="text-secondary" style={{ fontSize: '0.75rem', letterSpacing: '0.05em' }}>ID: TK_992XAF</div>
             </div>
             <span className="demo-badge ml-4"><Zap size={10} className="mr-1 inline-block" /> LIVE DEMO</span>
           </div>
           
           <div className="flex items-center gap-6">
              <div className="dash-search">
                 <Search size={16} className="text-secondary" />
                 <input type="text" placeholder="Search TxID, wallet, or address..." />
                 <div className="dash-shortcut">⌘K</div>
              </div>
              <button className="dash-icon-btn"><Bell size={18} /><span className="notification-dot"></span></button>
              <div className="dash-avatar">TG</div>
           </div>
        </div>

        {/* Inner App Layout */}
        <div className="dash-layout">
           {/* Sidebar Navigation */}
           <div className="dash-sidebar">
              <div className="nav-group mb-8">
                 <div className="nav-group-title">Main</div>
                 <a href="#" className="dash-nav-link active"><LayoutDashboard size={18} /> Overview</a>
                 <a href="#" className="dash-nav-link"><Activity size={18} /> Transactions</a>
                 <a href="#" className="dash-nav-link"><Send size={18} /> Send / Payouts</a>
                 <a href="#" className="dash-nav-link"><ArrowDownRight size={18} /> Receive Ramps</a>
              </div>
              
              <div className="nav-group mb-8">
                 <div className="nav-group-title">Infrastructure</div>
                 <a href="#" className="dash-nav-link"><Network size={18} /> Yield Routing</a>
                 <a href="#" className="dash-nav-link"><Database size={18} /> Asset Tokenization</a>
                 <a href="#" className="dash-nav-link"><Shield size={18} /> Compliance & Rules</a>
              </div>
              
              <div className="nav-group border-t border-white/5 pt-6">
                 <div className="nav-group-title">Developers</div>
                 <a href="#" className="dash-nav-link"><Key size={18} /> API Keys</a>
                 <a href="#" className="dash-nav-link"><Zap size={18} /> Webhooks</a>
              </div>
           </div>

           {/* Main View Area */}
           <div className="dash-main-area">
              
              <div className="flex justify-between items-end mb-8">
                <div>
                  <h1 className="text-4xl text-white font-bold mb-2">Treasury Command</h1>
                  <p className="text-secondary text-sm">Real-time settlement and liquidity monitoring</p>
                </div>
                <div className="flex gap-4">
                  <button className="btn btn-outline" style={{ padding: '10px 16px', fontSize: '0.9rem' }}><RefreshCw size={14} className="mr-2" /> Sync Ledger</button>
                  <button className="btn btn-primary" style={{ padding: '10px 16px', fontSize: '0.9rem', boxShadow: '0 0 20px rgba(255,255,255,0.2)' }}><Plus size={14} className="mr-2" /> Move Capital</button>
                </div>
              </div>

              {/* Advanced Metrics aligned with Business Model */}
              <div className="grid grid-cols-4 gap-6 mb-8 dashboard-stats">
                <div className="stat-card glass-panel premium-border">
                  <div className="text-secondary text-xs font-semibold uppercase tracking-wider mb-3">Total Liquidity</div>
                  <div className="text-3xl text-white font-bold mb-4">$12,450,000.<span className="text-glow-cyan">00</span></div>
                  
                  {/* CSS Sparkline Mockup */}
                  <div className="sparkline-wrapper mb-3">
                     <div className="sparkline-bar" style={{ height: '40%' }}></div>
                     <div className="sparkline-bar" style={{ height: '60%' }}></div>
                     <div className="sparkline-bar" style={{ height: '30%' }}></div>
                     <div className="sparkline-bar" style={{ height: '80%' }}></div>
                     <div className="sparkline-bar" style={{ height: '50%' }}></div>
                     <div className="sparkline-bar" style={{ height: '90%' }}></div>
                     <div className="sparkline-bar" style={{ height: '100%', background: 'var(--glow-cyan)' }}></div>
                  </div>
                  
                  <div className="flex items-center justify-between text-xs border-t border-white-5 pt-3">
                     <span className="text-green-400 flex items-center"><ArrowUpRight size={14} className="mr-1" /> +2.1%</span>
                     <span className="text-secondary">Last 7 Days</span>
                  </div>
                </div>
                
                <div className="stat-card glass-panel">
                  <div className="text-secondary text-xs font-semibold uppercase tracking-wider mb-2">Active Wallets</div>
                  <div className="text-3xl text-white font-bold mb-4">48,291</div>
                  <div className="flex-1"></div>
                  <div className="flex items-center justify-between text-xs border-t border-white-5 pt-3 mt-auto">
                     <span className="text-green-400 flex items-center"><ArrowUpRight size={14} className="mr-1" /> +1,244</span>
                     <span className="text-secondary">MPC-Core Infra</span>
                  </div>
                </div>

                <div className="stat-card glass-panel relative overflow-hidden">
                  <div className="absolute right-0 top-0 opacity-10"><BarChart2 size={120} /></div>
                  <div className="text-secondary text-xs font-semibold uppercase tracking-wider mb-2 relative z-10">Avg APY Yield</div>
                  <div className="text-4xl text-white font-bold mb-4 relative z-10">8.45<span className="text-glow-purple" style={{ fontSize: '1.5rem' }}>%</span></div>
                  <div className="flex-1"></div>
                  <div className="flex items-center justify-between text-xs border-t border-white-5 pt-3 mt-auto relative z-10">
                     <span className="text-glow-purple flex items-center font-bold"><Network size={12} className="mr-1" /> Aave V3 Routing</span>
                     <span className="text-secondary">Auto-compounding</span>
                  </div>
                </div>

                <div className="stat-card glass-panel" style={{ background: 'rgba(0,0,0,0.5)' }}>
                  <div className="text-secondary text-xs font-semibold uppercase tracking-wider mb-2">Enterprise Plan</div>
                  <div className="text-3xl text-white font-bold mb-4">0.1<span className="text-glow-cyan" style={{ fontSize: '1.5rem' }}>%</span></div>
                  <div className="flex-1"></div>
                  <div className="flex items-center justify-between text-xs border-t border-white-5 pt-3 mt-auto">
                     <span className="text-white flex items-center"><Shield size={12} className="mr-1 text-glow-cyan" /> Level: TIER 1</span>
                     <span className="text-glow-cyan font-bold">$0 AUM Fee</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-8">
                 {/* Live Ledger / Activity */}
                 <div className="col-span-2 flex flex-col gap-6">
                   
                   <div className="glass-panel p-0 overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
                      <div className="p-5 flex justify-between items-center bg-black-20 border-b border-white-5">
                        <h3 className="text-lg text-white font-bold tracking-wide">Live Transaction Pipeline</h3>
                        <button className="text-xs text-glow-cyan font-semibold uppercase tracking-wider hover:opacity-80 transition-opacity">Full Explorer <ArrowUpRight size={12} className="inline ml-1" /></button>
                      </div>
                      
                      <div className="tx-list">
                         <div className="tx-item hover-effect">
                            <div className="flex items-center gap-4">
                               <div className="tx-icon receive-glow"><Activity size={20} /></div>
                               <div>
                                 <div className="text-white font-semibold mb-1 text-sm">B2B Invoice Settlement</div>
                                 <div className="text-xs text-secondary flex items-center gap-2">
                                   <span className="badge-pill bg-cyan-dim text-cyan">Base</span>
                                   <span className="font-mono">0x8F22...9A1B</span>
                                 </div>
                               </div>
                            </div>
                            <div className="text-right">
                               <div className="text-white font-bold mb-1 w-full justify-end" style={{ fontSize: '0.95rem' }}>+ 245,000.00 USDC</div>
                               <div className="text-xs text-green-400 font-semibold uppercase tracking-wider" style={{ fontSize: '0.65rem' }}>Settled T+0</div>
                            </div>
                         </div>
                         
                         <div className="tx-item hover-effect">
                            <div className="flex items-center gap-4">
                               <div className="tx-icon send-glow"><Send size={20} /></div>
                               <div>
                                 <div className="text-white font-semibold mb-1 text-sm">Algorithmic Treasury Allocation</div>
                                 <div className="text-xs text-secondary flex items-center gap-2">
                                   <span className="badge-pill bg-purple-dim text-purple">Ethereum</span>
                                   <span>Smart Contract Call</span>
                                 </div>
                               </div>
                            </div>
                            <div className="text-right">
                               <div className="text-white font-bold mb-1 w-full justify-end" style={{ fontSize: '0.95rem' }}>- 1,000,000.00 USDC</div>
                               <div className="text-xs text-secondary">Fee: 1,000.00 USDC (0.1%)</div>
                            </div>
                         </div>

                         <div className="tx-item hover-effect">
                            <div className="flex items-center gap-4">
                               <div className="tx-icon custom-glow" style={{ background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.1), rgba(138, 43, 226, 0.1))', color: '#FFF' }}><Database size={20} /></div>
                               <div>
                                 <div className="text-white font-semibold mb-1 text-sm">RWA Token Minting</div>
                                 <div className="text-xs text-secondary flex items-center gap-2">
                                   <span className="badge-pill bg-cyan-dim text-cyan">Polygon</span>
                                   <span>Cap-table synced</span>
                                 </div>
                               </div>
                            </div>
                            <div className="text-right">
                               <div className="text-white font-bold mb-1 w-full justify-end" style={{ fontSize: '0.95rem' }}>+ 50,000 T-BOND</div>
                               <div className="text-xs text-glow-cyan font-semibold uppercase tracking-wider" style={{ fontSize: '0.65rem' }}>Compliance Verified</div>
                            </div>
                         </div>
                         
                         <div className="tx-item px-6 py-4 bg-black-40 text-center cursor-pointer hover:bg-white-5 transition-colors">
                           <span className="text-xs text-secondary tracking-widest uppercase">Load More Activity</span>
                         </div>
                      </div>
                   </div>

                 </div>
                 
                 {/* API & Controls */}
                 <div className="col-span-1 flex flex-col gap-6">
                 
                    <div className="glass-panel p-6 premium-border" style={{ background: 'rgba(5,7,12,0.8)' }}>
                       <div className="flex justify-between items-center mb-6">
                         <h3 className="text-lg text-white font-bold flex items-center gap-2"><Key size={18} className="text-glow-cyan" /> Developer API</h3>
                       </div>
                       
                       <div className="mb-6">
                         <div className="text-xs text-secondary uppercase tracking-wider mb-2 font-semibold">Live Secret Key</div>
                         <div className="flex items-center justify-between p-3 bg-black border border-white-10 rounded-lg group cursor-pointer hover:border-glow-cyan transition-colors">
                            <div className="text-sm font-mono text-white opacity-60 group-hover:opacity-100 transition-opacity" style={{ letterSpacing: '1px' }}>
                              sk_live_••••••••••••8f92
                            </div>
                            <Copy size={14} className="text-secondary group-hover:text-glow-cyan transition-colors" />
                         </div>
                       </div>

                       <div className="mb-6">
                         <div className="flex justify-between items-center mb-3">
                           <div className="text-xs text-secondary uppercase tracking-wider font-semibold">Webhooks</div>
                           <div className="badge-pill bg-green-dim text-green" style={{ fontSize: '0.65rem' }}>3 Active</div>
                         </div>
                         <div className="flex flex-col gap-3">
                           <div className="text-sm text-secondary flex items-center justify-between bg-white-5 p-2 rounded-md">
                             <div className="flex items-center gap-2"><div className="status-dot success"></div> payment.settled</div>
                             <span className="text-white font-mono text-xs">142/min</span>
                           </div>
                           <div className="text-sm text-secondary flex items-center justify-between bg-white-5 p-2 rounded-md">
                             <div className="flex items-center gap-2"><div className="status-dot success"></div> wallet.created</div>
                             <span className="text-white font-mono text-xs">12/min</span>
                           </div>
                         </div>
                       </div>

                    </div>
                    
                    <div className="glass-panel p-6 bg-transparent border-dashed">
                       <h4 className="text-white font-bold mb-4 flex items-center gap-2 text-sm"><Network size={16} className="text-secondary" /> Global Infrastructure</h4>
                       <div className="flex flex-col gap-4">
                         <div className="flex justify-between items-center">
                            <div className="text-secondary text-xs">Node Uptime</div>
                            <div className="w-1/2 h-1 bg-white-10 rounded-full overflow-hidden">
                              <div className="h-full bg-green-400 w-full"></div>
                            </div>
                            <div className="text-green-400 text-xs font-mono">100%</div>
                         </div>
                         <div className="flex justify-between items-center">
                            <div className="text-secondary text-xs">API Latency</div>
                            <div className="flex items-center gap-2">
                              <div className="flex items-end gap-1 h-3">
                                <div className="w-1 bg-glow-cyan h-2"></div>
                                <div className="w-1 bg-glow-cyan h-3"></div>
                                <div className="w-1 bg-glow-cyan h-1"></div>
                              </div>
                              <span className="text-glow-cyan font-mono text-xs">42ms</span>
                            </div>
                         </div>
                       </div>
                    </div>
                 </div>
              </div>
              
           </div>
        </div>
      </div>
    </div>
  );
}
