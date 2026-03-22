'use client';
import Link from 'next/link';
import { useState } from 'react';

const sections = [
  { label: 'Bars & Restaurants', href: '/bars' },
  { label: 'Travel', href: '/travel' },
  { label: 'Film', href: '/movies' },
  { label: 'About', href: '/about' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header style={{ background: 'var(--paper)', borderBottom: '1px solid var(--ink)' }}>
      {/* Nav row */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 18, paddingBottom: 0 }}>
          {/* Desktop nav left */}
          <nav style={{ display: 'flex', gap: 28 }} className="hidden md:flex">
            {sections.slice(0, 3).map((s) => (
              <Link key={s.href} href={s.href} className="label hover-fade" style={{ color: 'var(--ink)' }}>
                {s.label}
              </Link>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
              {[0,1,2].map(i => (
                <span key={i} style={{ display: 'block', width: 22, height: 1.5, background: 'var(--ink)' }} />
              ))}
            </div>
          </button>

          {/* About right */}
          <Link href="/about" className="label hover-fade hidden md:block" style={{ color: 'var(--ink)' }}>
            About
          </Link>
        </div>

        {/* Masthead */}
        <div style={{ textAlign: 'center', padding: '20px 0 18px' }}>
          <Link href="/" className="hover-fade" style={{ display: 'inline-block' }}>
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(48px, 10vw, 88px)',
              fontWeight: 900,
              lineHeight: 1,
              letterSpacing: '-0.03em',
              margin: 0,
              color: 'var(--ink)',
            }}>
              Pretentious Pete
            </h1>
          </Link>
          <p className="label" style={{ color: 'var(--ink-faint)', marginTop: 8, letterSpacing: '0.16em' }}>
            Bars &middot; Travel &middot; Film &mdash; with conviction
          </p>
        </div>

        {/* Bottom rule double */}
        <div style={{ borderTop: '4px double var(--ink)' }} />
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ borderTop: '1px solid var(--rule)', background: 'var(--paper)' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', padding: '12px 32px' }}>
            {sections.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="label"
                onClick={() => setOpen(false)}
                style={{ display: 'block', padding: '10px 0', borderBottom: '1px solid var(--rule)', color: 'var(--ink)' }}
              >
                {s.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
