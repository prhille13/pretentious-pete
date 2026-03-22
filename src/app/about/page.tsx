import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Who is Pretentious Pete?',
};

export default function AboutPage() {
  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px' }}>
      <div style={{ paddingTop: 36 }}>
        <div style={{ borderTop: '4px double var(--ink)', marginBottom: 20 }} />
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px,8vw,72px)', fontWeight: 900, letterSpacing: '-0.03em', margin: '0 0 6px' }}>
          About
        </h1>
        <div style={{ borderTop: '4px double var(--ink)', marginTop: 20, marginBottom: 48 }} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: 64 }}>
        <div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 32, fontWeight: 700, letterSpacing: '-0.02em', margin: '0 0 12px' }}>
            On Opinions and Why I Have So Many of Them
          </h2>
          <p style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontStyle: 'italic', color: 'var(--ink-muted)', lineHeight: 1.5, margin: '0 0 32px' }}>
            I&apos;ve spent years working in and around bars, restaurants, and film. This is what I do with all of that.
          </p>
          <div style={{ borderTop: '1px solid var(--rule)', marginBottom: 32 }} />
          <div className="body-copy" style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <p className="drop-cap">
              The name is a joke, mostly. I&apos;m Pete, and I have been told — more than once,
              by people who meant it affectionately — that I am pretentious about the things I care about.
              I prefer the word particular, but I understand the distinction is lost on most people.
            </p>
            <p>
              I&apos;ve worked in the hospitality industry for years: as a beer and wine buyer, as a general manager,
              in brewing, in bars. I&apos;ve spent a lot of time thinking about what makes a place good —
              not just technically good, but good in the way that makes you want to stay another hour,
              come back next week, bring someone you like.
            </p>
            <p>
              I write about bars and restaurants because I care about them deeply and find most coverage
              of them either too fawning or too clinical. I write about travel because going places and
              paying attention is one of the better uses of a life. I write about film because I watched
              too many movies too young and now I can&apos;t stop.
            </p>
            <div className="pullquote">
              The bar you go to because you want to, not because you have to — that&apos;s the one worth writing about.
            </div>
            <p>
              Nothing here is sponsored. No one has comped me a meal or a trip in exchange for coverage.
              The opinions are mine, they are sincerely held, and they are occasionally wrong.
              I update them when I have reason to.
            </p>
            <p>
              I&apos;m based in Columbus, Ohio, which I will argue is a better food and bar city than
              it gets credit for, and I travel when I can manage it.
            </p>
          </div>
        </div>

        <aside>
          <div style={{ borderTop: '3px solid var(--ink)', marginBottom: 20 }} />
          <p className="label" style={{ color: 'var(--ink-faint)', marginBottom: 20 }}>Quick facts</p>
          {[
            { term: 'Based', def: 'Columbus, OH' },
            { term: 'Day job', def: 'Wine & hospitality' },
            { term: 'Preferred stool', def: 'Corner, facing the door' },
            { term: 'Favorite film', def: 'Changes weekly, never honestly answered' },
            { term: 'Strong opinion on', def: 'Tap lists, seat assignments, opening credits' },
          ].map(({ term, def }) => (
            <div key={term} style={{ borderBottom: '1px solid var(--rule)', paddingBottom: 14, marginBottom: 14 }}>
              <dt className="label" style={{ color: 'var(--ink-faint)', display: 'block', marginBottom: 3 }}>{term}</dt>
              <dd style={{ fontSize: 14, margin: 0, fontWeight: 300 }}>{def}</dd>
            </div>
          ))}
        </aside>
      </div>
    </div>
  );
}
