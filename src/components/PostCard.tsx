import Link from 'next/link';

export interface Post {
  slug: string;
  title: string;
  deck: string;
  date: string;
  section: 'bars' | 'travel' | 'movies';
  featured?: boolean;
  rating?: number;
  location?: string;
}

const sectionColors: Record<Post['section'], string> = {
  bars: 'var(--red)',
  travel: 'var(--slate)',
  movies: 'var(--gold)',
};

const sectionLabels: Record<Post['section'], string> = {
  bars: 'Bars & Restaurants',
  travel: 'Travel',
  movies: 'Film',
};

function Stars({ rating }: { rating: number }) {
  return (
    <span style={{ display: 'inline-flex', gap: 2 }}>
      {[1,2,3,4,5].map((n) => (
        <span key={n} style={{ fontSize: 11, color: n <= rating ? 'var(--gold)' : 'var(--rule)' }}>★</span>
      ))}
    </span>
  );
}

function SectionTag({ section }: { section: Post['section'] }) {
  return (
    <span className="label" style={{ color: sectionColors[section], display: 'block', marginBottom: 10 }}>
      {sectionLabels[section]}
    </span>
  );
}

function ImgPlaceholder({ aspect = '3/2' }: { aspect?: string }) {
  return (
    <div className="img-placeholder" style={{ width: '100%', aspectRatio: aspect }}>
      Photo
    </div>
  );
}

// Hero — image left, text right
export function HeroCard({ post }: { post: Post }) {
  const href = `/${post.section}/${post.slug}`;
  return (
    <Link href={href} className="hover-fade" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', textDecoration: 'none', color: 'inherit' }}>
      <ImgPlaceholder aspect="4/3" />
      <div style={{ padding: '40px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center', borderLeft: '1px solid var(--rule)' }}>
        <SectionTag section={post.section} />
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 36, fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em', margin: '0 0 14px' }}>
          {post.title}
        </h2>
        <p style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontStyle: 'italic', color: 'var(--ink-muted)', lineHeight: 1.5, margin: '0 0 16px' }}>
          {post.deck}
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span className="byline">{post.date}</span>
          {post.location && <span className="byline">&middot; {post.location}</span>}
          {post.rating !== undefined && <Stars rating={post.rating} />}
        </div>
        <span className="label" style={{ color: 'var(--red)', marginTop: 20, borderBottom: '1px solid var(--red)', display: 'inline-block', paddingBottom: 1 }}>
          Read the piece &rarr;
        </span>
      </div>
    </Link>
  );
}

// Standard card — image top, text below
export function StoryCard({ post }: { post: Post }) {
  const href = `/${post.section}/${post.slug}`;
  return (
    <Link href={href} className="hover-fade" style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
      <ImgPlaceholder aspect="4/3" />
      <div style={{ padding: '16px 0 0' }}>
        <SectionTag section={post.section} />
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.01em', margin: '0 0 8px' }}>
          {post.title}
        </h3>
        <p style={{ fontSize: 13, color: 'var(--ink-muted)', lineHeight: 1.55, margin: '0 0 8px' }}>
          {post.deck}
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span className="byline">{post.date}</span>
          {post.location && <span className="byline">&middot; {post.location}</span>}
          {post.rating !== undefined && <Stars rating={post.rating} />}
        </div>
      </div>
    </Link>
  );
}

// Wide card — image left, text right (smaller than hero)
export function WideCard({ post }: { post: Post }) {
  const href = `/${post.section}/${post.slug}`;
  return (
    <Link href={href} className="hover-fade" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', textDecoration: 'none', color: 'inherit' }}>
      <ImgPlaceholder aspect="16/9" />
      <div style={{ padding: '28px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'center', borderLeft: '1px solid var(--rule)' }}>
        <SectionTag section={post.section} />
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 700, lineHeight: 1.15, letterSpacing: '-0.015em', margin: '0 0 10px' }}>
          {post.title}
        </h3>
        <p style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontStyle: 'italic', color: 'var(--ink-muted)', lineHeight: 1.5, margin: '0 0 12px' }}>
          {post.deck}
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span className="byline">{post.date}</span>
          {post.location && <span className="byline">&middot; {post.location}</span>}
        </div>
      </div>
    </Link>
  );
}

// List item — text only, no image
export function ListCard({ post }: { post: Post }) {
  const href = `/${post.section}/${post.slug}`;
  return (
    <Link href={href} className="hover-fade" style={{ display: 'block', textDecoration: 'none', color: 'inherit', padding: '14px 0', borderBottom: '1px solid var(--rule)' }}>
      <SectionTag section={post.section} />
      <h4 style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 700, lineHeight: 1.3, margin: '0 0 4px' }}>
        {post.title}
      </h4>
      <span className="byline">{post.date}{post.location ? ` · ${post.location}` : ''}</span>
    </Link>
  );
}

// Sidebar small card (for article pages)
export function PostCard({ post }: { post: Post }) {
  return <ListCard post={post} />;
}
