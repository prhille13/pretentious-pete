import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Who is Pretentious Pete?',
};

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="rule-thick mb-3" />
      <h1 className="masthead text-5xl sm:text-7xl mb-2">About</h1>
      <div className="rule-thick mb-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Main column */}
        <div className="lg:col-span-8">
          <h2 className="headline text-3xl mb-4">On Opinions and Why I Have So Many of Them</h2>
          <p className="deck text-xl text-ink-muted mb-8">
            I&apos;ve spent years working in and around bars, restaurants, and film. 
            This is what I do with all of that.
          </p>

          <div className="body-copy space-y-5 text-ink-light">
            <p className="drop-cap">
              The name is a joke, mostly. I&apos;m Pete, and I have been told — more than once, 
              by people who meant it affectionately — that I am pretentious about the things I care about. 
              I prefer the word particular, but I understand the distinction is lost on most people.
            </p>
            <p>
              I&apos;ve worked in the hospitality industry for years: as a beer buyer, as a general manager, 
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
              The bar you go to because you want to, not because you have to — 
              that&apos;s the one worth writing about.
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

        {/* Sidebar */}
        <div className="lg:col-span-4">
          <div className="rule-thin mb-6" />
          <p className="section-label text-ink-faint mb-4">Quick facts</p>
          <dl className="space-y-4">
            {[
              { term: 'Based', def: 'Columbus, OH' },
              { term: 'Day job', def: 'Wine & hospitality' },
              { term: 'Preferred stool', def: 'Corner, facing the door' },
              { term: 'Favorite film', def: 'Changes weekly, never honestly answered' },
              { term: 'Strong opinion on', def: 'Tap lists, seat assignments, opening credits' },
            ].map(({ term, def }) => (
              <div key={term} className="border-b border-ink/10 pb-3">
                <dt className="byline">{term}</dt>
                <dd className="font-light text-sm mt-0.5">{def}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
