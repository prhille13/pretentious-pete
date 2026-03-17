import { getFeaturedPosts, getPostsBySection, posts } from '@/lib/posts';
import { PostCard } from '@/components/PostCard';
import Link from 'next/link';

export default function HomePage() {
  const featured = getFeaturedPosts();
  const [lead] = featured;
  const secondary = featured.slice(1, 3);
  const recent = posts.slice(0, 6);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">

      {/* Front page date line */}
      <div className="flex items-center gap-2 mb-6">
        <div className="flex-1 rule-thin" />
        <span className="section-label text-ink-faint px-4">Today&apos;s Edition</span>
        <div className="flex-1 rule-thin" />
      </div>

      {/* Lead story + sidebar grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-8 mb-10">

        {/* Lead story — spans 8 cols */}
        <div className="lg:col-span-8 lg:border-r border-ink/20 lg:pr-8 mb-8 lg:mb-0">
          {lead && <PostCard post={lead} size="large" />}

          {/* Teaser excerpt */}
          <div className="mt-6 pt-4 border-t border-ink/10">
            <p className="body-copy text-ink-muted text-sm leading-relaxed line-clamp-4">
              There is a particular kind of bar that exists at the intersection of dive and carefully considered — 
              where the stools are mismatched but the pour is right, where nobody is performing their appreciation 
              of craft beer, where you can hear your friends talk. Double Happiness is that bar. It should be 
              unremarkable. It is not.
            </p>
            <Link href={`/${lead?.section}/${lead?.slug}`} className="section-label text-accent-red mt-3 inline-block hover:opacity-70 transition-opacity">
              Continue reading →
            </Link>
          </div>
        </div>

        {/* Right rail — 4 cols */}
        <div className="lg:col-span-4">
          <div className="rule-thin mb-4" />
          <p className="section-label text-ink-faint mb-4">Also in this edition</p>
          <div className="space-y-6">
            {secondary.map((post) => (
              <div key={post.slug}>
                <PostCard post={post} size="normal" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Three-column section index */}
      <div className="rule-thick mb-8" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">

        {/* Bars */}
        <div>
          <div className="flex items-center justify-between mb-1">
            <h2 className="masthead text-2xl">Bars</h2>
            <Link href="/bars" className="section-label text-accent-red hover:opacity-70">All →</Link>
          </div>
          <div className="rule-thin mb-4" />
          {getPostsBySection('bars').slice(0, 3).map((p) => (
            <PostCard key={p.slug} post={p} size="small" />
          ))}
        </div>

        {/* Travel */}
        <div className="md:border-l md:border-r border-ink/15 md:px-8">
          <div className="flex items-center justify-between mb-1">
            <h2 className="masthead text-2xl">Travel</h2>
            <Link href="/travel" className="section-label text-accent-slate hover:opacity-70">All →</Link>
          </div>
          <div className="rule-thin mb-4" />
          {getPostsBySection('travel').slice(0, 3).map((p) => (
            <PostCard key={p.slug} post={p} size="small" />
          ))}
        </div>

        {/* Film */}
        <div>
          <div className="flex items-center justify-between mb-1">
            <h2 className="masthead text-2xl">Film</h2>
            <Link href="/movies" className="section-label text-accent-gold hover:opacity-70">All →</Link>
          </div>
          <div className="rule-thin mb-4" />
          {getPostsBySection('movies').slice(0, 3).map((p) => (
            <PostCard key={p.slug} post={p} size="small" />
          ))}
        </div>
      </div>

      {/* About teaser */}
      <div className="rule-thick mb-6" />
      <div className="bg-paper-warm border border-ink/10 p-6 sm:p-8 mb-4">
        <div className="max-w-2xl">
          <span className="section-label text-ink-faint">About this publication</span>
          <h3 className="headline text-2xl mt-2 mb-3">On Opinions and Why I Have So Many of Them</h3>
          <p className="body-copy text-sm text-ink-muted">
            I&apos;ve spent years working in and around bars, restaurants, and film — as a buyer, 
            a general manager, a regular, and an occasional nuisance. This site is where those years 
            become opinions. Take them or leave them.
          </p>
          <Link href="/about" className="section-label text-accent-red mt-4 inline-block hover:opacity-70 transition-opacity">
            Read more about Pete →
          </Link>
        </div>
      </div>

    </div>
  );
}
