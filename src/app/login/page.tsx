import type { Metadata } from 'next';
import { Hexagon } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sign In | Texnova',
  robots: {
    index: false,
    follow: false,
  }
};
import Link from 'next/link';

export default function Login() {
  return (
    <div className="container" style={{ padding: '100px 0', minHeight: '75vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="glass-panel" style={{ padding: '48px 40px', maxWidth: '440px', width: '100%', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
          <Hexagon size={48} style={{ color: 'var(--glow-cyan)' }} />
        </div>
        <h1 className="text-2xl text-white font-bold mb-2">Welcome Back</h1>
        <p className="text-secondary mb-8">Sign in to your enterprise dashboard.</p>
        
        <form style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
           <input 
              type="email" 
              placeholder="Work Email" 
              style={{ width: '100%', padding: '16px', background: 'rgba(10,13,20,0.6)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: '#fff', fontSize: '1rem' }} 
           />
           <input 
              type="password" 
              placeholder="Password" 
              style={{ width: '100%', padding: '16px', background: 'rgba(10,13,20,0.6)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: '#fff', fontSize: '1rem' }} 
           />
           <Link href="/dashboard" className="btn btn-primary" style={{ marginTop: '8px', padding: '16px', justifyContent: 'center' }}>
              Sign In
           </Link>
        </form>
        
        <p className="text-sm text-secondary">
          Don't have an account? <Link href="/contact" style={{ color: 'var(--glow-cyan)', marginLeft: '4px' }}>Contact Sales</Link>
        </p>
      </div>
    </div>
  );
}
