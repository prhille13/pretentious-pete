'use client';
import Link from 'next/link';
import { useState } from 'react';

const sections = [
  { label: 'Bars & Restaurants', href: '/bars', short: 'Bars' },
  { label: 'Travel', href: '/travel', short: 'Travel' },
  { label: 'Film', href: '/movies', short: 'Film' },
  { label: 'About', href: '/about', short: 'About' },
];

function getTodayString() {
  return new Date().toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  });
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-paper-white border-b border-ink">
      {/* Top meta bar */}
      <div className="border-b border-ink/20">
        <div className="max-w-6xl mx-auto px-4 py-1.5 flex justify-between items-center">
          <span className="byline hidden sm:block">{getTodayString()}</span>
          <span className="byline text-ink-faint hidden sm:block">Est. 2025 · Columbus, OH</span>
          <span className="byline block sm:hidden text-ink-faint">Est. 2025 · Columbus, OH</span>
        </div>
      </div>

      {/* Masthead */}
      <div className="max-w-6xl mx-auto px-4 py-6 text-center">
        <div className="rule-thick mb-3" />
        <Link href="/" className="block group">
          <h1 className="masthead text-5xl sm:text-7xl md:text-8xl tracking-tight text-ink group-hover:opacity-80 transition-opacity">
            Pretentious Pete
          </h1>
        </Link>
        <p className="deck text-sm sm:text-base text-ink-muted mt-2 tracking-wide">
          Opinions on bars, travel &amp; film &mdash; delivered with conviction
        </p>
        <div className="rule-thick mt-3" />
      </div>

      {/* Navigation */}
      <nav className="max-w-6xl mx-auto px-4 pb-0">
        {/* Desktop nav */}
        <div className="hidden md:flex items-center justify-center gap-0 border-b border-ink">
          {sections.map((s, i) => (
            <span key={s.href} className="flex items-center">
              {i > 0 && <span className="text-ink/30 mx-3 text-xs">◆</span>}
              <Link
                href={s.href}
                className="section-label py-2 px-3 hover:text-accent-red transition-colors"
              >
                {s.label}
              </Link>
            </span>
          ))}
        </div>

        {/* Mobile nav toggle */}
        <div className="flex md:hidden items-center justify-between border-b border-ink pb-3">
          <span className="section-label text-ink-muted">Menu</span>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-1 text-ink"
            aria-label="Toggle navigation"
          >
            <div className="space-y-1">
              <span className={`block w-6 h-0.5 bg-ink transition-transform ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`block w-6 h-0.5 bg-ink transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-0.5 bg-ink transition-transform ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </div>
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden border-b border-ink pb-2">
            {sections.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="block section-label py-2.5 hover:text-accent-red transition-colors border-b border-ink/10 last:border-0"
                onClick={() => setMenuOpen(false)}
              >
                {s.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
