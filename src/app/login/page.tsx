'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Hexagon, Mail, Lock, Eye, EyeOff,
  ArrowRight, Shield, Globe2, KeyRound, Fingerprint,
} from 'lucide-react';
import './login.css';

export default function Login() {
  const router = useRouter();
  const [showPw, setShowPw] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/dashboard');
  };

  return (
    <div className="login-portal">

      {/* Top accent bar */}
      <div className="login-accent-bar" />

      {/* Large subtle watermark hexagon */}
      <Hexagon className="login-watermark-hex" strokeWidth={0.5} />

      {/* Soft ambient glow */}
      <div className="login-ambient" />

      {/* ─── Content ─── */}
      <div className="login-main">

        {/* Logo — same as Navbar */}
        <Link href="/" className="logo" style={{ marginBottom: '48px' }}>
          <Hexagon className="logo-icon" size={28} />
          <span className="logo-text">TEXNOVA</span>
        </Link>

        {/* Card */}
        <div className="login-card">

          <div className="login-header">
            <h1 className="login-title">Sign in to your account</h1>
            <p className="login-subtitle">
              Access your enterprise dashboard, wallets, and treasury.
            </p>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>

            {/* Email */}
            <div className="login-field">
              <label className="login-label" htmlFor="login-email">Email</label>
              <div className="login-input-wrap">
                <input
                  id="login-email"
                  className="login-input"
                  type="email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  required
                />
                <Mail size={17} className="login-input-icon" />
              </div>
            </div>

            {/* Password */}
            <div className="login-field">
              <label className="login-label" htmlFor="login-password">Password</label>
              <div className="login-input-wrap">
                <input
                  id="login-password"
                  className="login-input"
                  type={showPw ? 'text' : 'password'}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  required
                />
                <Lock size={17} className="login-input-icon" />
                <button
                  type="button"
                  className="login-pw-toggle"
                  onClick={() => setShowPw(!showPw)}
                  aria-label={showPw ? 'Hide password' : 'Show password'}
                >
                  {showPw ? <EyeOff size={17} /> : <Eye size={17} />}
                </button>
              </div>
            </div>

            {/* Options */}
            <div className="login-options">
              <label className="login-remember">
                <input type="checkbox" />
                Remember me
              </label>
              <Link href="/contact" className="login-forgot">
                Forgot password?
              </Link>
            </div>

            {/* Submit */}
            <button type="submit" className="login-submit">
              Sign In
              <ArrowRight size={17} />
            </button>

            {/* Divider */}
            <div className="login-divider">
              <div className="login-divider-line" />
              <span className="login-divider-text">or</span>
              <div className="login-divider-line" />
            </div>

            {/* SSO */}
            <button type="button" className="login-sso">
              <Fingerprint size={17} />
              Continue with SSO
            </button>
          </form>
        </div>

        {/* Footer */}
        <div className="login-footer">
          <p className="login-footer-text">
            Don&apos;t have an account?
            <Link href="/contact">Contact Sales</Link>
          </p>
        </div>
      </div>

      {/* Trust strip */}
      <div className="login-trust-strip">
        <div className="login-trust-badge">
          <Shield size={12} />
          ISO 27001
        </div>
        <div className="login-trust-badge">
          <Lock size={12} />
          SOC 2 Type II
        </div>
        <div className="login-trust-badge">
          <Globe2 size={12} />
          80+ Jurisdictions
        </div>
        <div className="login-trust-badge">
          <KeyRound size={12} />
          256-bit Encrypted
        </div>
      </div>
    </div>
  );
}
