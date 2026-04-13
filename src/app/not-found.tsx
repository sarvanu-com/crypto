import Link from 'next/link';
import { Compass, Home, Map } from 'lucide-react';
import './not-found.css';

export default function NotFound() {
  return (
    <main className="notfound-page">
      <div className="notfound-container">
        <div className="notfound-icon-wrap">
          <Compass size={40} strokeWidth={2} />
        </div>
        <h1 className="notfound-title">Page under construction</h1>
        <p className="notfound-desc">
          You've navigated to a route that is currently being built out by the enterprise team. Check back shortly to see our latest documentation, insights, and global payout integrations.
        </p>
        <div className="notfound-actions">
          <Link href="/" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Home size={18} /> Back to Homepage
          </Link>
          <Link href="/services" className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Map size={18} /> View Platform Services
          </Link>
        </div>
      </div>
    </main>
  );
}
