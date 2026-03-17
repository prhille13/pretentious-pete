import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-ink text-paper mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="rule-thin border-paper/20 mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="masthead text-2xl text-paper mb-2">Pretentious Pete</h3>
            <p className="text-paper/60 text-sm font-light leading-relaxed">
              Bars, restaurants, travel, and film — with strong opinions and no apologies.
              Based in Columbus, OH.
            </p>
          </div>
          <div>
            <p className="section-label text-paper/40 mb-3">Sections</p>
            <ul className="space-y-1.5">
              {[
                { label: 'Bars & Restaurants', href: '/bars' },
                { label: 'Travel', href: '/travel' },
                { label: 'Film', href: '/movies' },
                { label: 'About', href: '/about' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-paper/70 hover:text-paper text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="section-label text-paper/40 mb-3">Fine Print</p>
            <p className="text-paper/50 text-xs leading-relaxed">
              All opinions are my own and completely correct. No sponsored content. No press trips.
              No free meals that have changed my mind about anything.
            </p>
          </div>
        </div>
        <div className="rule-thin border-paper/20 mt-8 mb-4" />
        <p className="text-center text-paper/30 text-xs byline">
          © {new Date().getFullYear()} Pretentious Pete · pretentiouspete.com
        </p>
      </div>
    </footer>
  );
}
