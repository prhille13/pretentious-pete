import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ background: 'var(--ink)', color: 'var(--paper)', marginTop: 64 }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '48px 32px 32px' }}>
        <div style={{ borderTop: '1px solid rgba(250,249,246,0.15)', marginBottom: 40 }} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 40 }}>
          <div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 900, letterSpacing: '-0.02em', margin: '0 0 10px' }}>
              Pretentious Pete
            </h3>
            <p style={{ fontSize: 13, color: 'rgba(250,249,246,0.5)', lineHeight: 1.65, fontWeight: 300 }}>
              Bars, restaurants, travel, and film — with strong opinions and no apologies. Based in Columbus, OH.
            </p>
          </div>
          <div>
            <p className="label" style={{ color: 'rgba(250,249,246,0.3)', marginBottom: 14 }}>Sections</p>
            {[
              { label: 'Bars & Restaurants', href: '/bars' },
              { label: 'Travel', href: '/travel' },
              { label: 'Film', href: '/movies' },
              { label: 'About', href: '/about' },
            ].map((l) => (
              <div key={l.href} style={{ marginBottom: 8 }}>
                <Link href={l.href} className="hover-fade" style={{ fontSize: 13, color: 'rgba(250,249,246,0.65)', textDecoration: 'none' }}>
                  {l.label}
                </Link>
              </div>
            ))}
          </div>
          <div>
            <p className="label" style={{ color: 'rgba(250,249,246,0.3)', marginBottom: 14 }}>Fine print</p>
            <p style={{ fontSize: 12, color: 'rgba(250,249,246,0.4)', lineHeight: 1.7, fontWeight: 300 }}>
              All opinions are my own and completely correct. No sponsored content. No press trips. No free meals that have changed my mind about anything.
            </p>
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(250,249,246,0.1)', marginTop: 40, paddingTop: 20, textAlign: 'center' }}>
          <p className="label" style={{ color: 'rgba(250,249,246,0.25)' }}>
            &copy; {new Date().getFullYear()} Pretentious Pete &middot; pretentiouspete.com
          </p>
        </div>
      </div>
    </footer>
  );
}
