import Link from 'next/link';

export interface Post {
  slug: string;
  title: string;
  deck: string;
  date: string;
  section: 'bars' | 'travel' | 'movies';
  featured?: boolean;
  rating?: number; // 1-5
  location?: string;
}

const sectionColors: Record<Post['section'], string> = {
  bars: 'text-accent-red',
  travel: 'text-accent-slate',
  movies: 'text-accent-gold',
};

const sectionLabels: Record<Post['section'], string> = {
  bars: 'Bars & Restaurants',
  travel: 'Travel',
  movies: 'Film',
};

function Stars({ rating }: { rating: number }) {
  return (
    <span className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((n) => (
        <span key={n} className={n <= rating ? 'star-filled' : 'star-empty'} style={{ fontSize: '0.65rem' }}>
          ★
        </span>
      ))}
    </span>
  );
}

export function PostCard({ post, size = 'normal' }: { post: Post; size?: 'normal' | 'large' | 'small' }) {
  const href = `/${post.section}/${post.slug}`;

  if (size === 'large') {
    return (
      <Link href={href} className="block card-hover group">
        <div className="rule-thick mb-4" />
        <span className={`section-label ${sectionColors[post.section]}`}>{sectionLabels[post.section]}</span>
        <h2 className="headline text-4xl sm:text-5xl mt-2 mb-3 group-hover:opacity-70 transition-opacity">
          {post.title}
        </h2>
        <p className="deck text-xl text-ink-muted mb-3">{post.deck}</p>
        <div className="flex items-center gap-3">
          <span className="byline">{post.date}</span>
          {post.location && <span className="byline text-ink-faint">· {post.location}</span>}
          {post.rating !== undefined && <Stars rating={post.rating} />}
        </div>
      </Link>
    );
  }

  if (size === 'small') {
    return (
      <Link href={href} className="block card-hover group py-3 border-b border-ink/10 last:border-0">
        <span className={`section-label ${sectionColors[post.section]} text-xs`}>{sectionLabels[post.section]}</span>
        <h4 className="headline text-base mt-0.5 group-hover:opacity-70 transition-opacity leading-snug">
          {post.title}
        </h4>
        <span className="byline">{post.date}</span>
      </Link>
    );
  }

  return (
    <Link href={href} className="block card-hover group">
      <div className="rule-thin mb-3" />
      <span className={`section-label ${sectionColors[post.section]}`}>{sectionLabels[post.section]}</span>
      <h3 className="headline text-2xl mt-1.5 mb-2 group-hover:opacity-70 transition-opacity">
        {post.title}
      </h3>
      <p className="deck text-sm text-ink-muted mb-2">{post.deck}</p>
      <div className="flex items-center gap-3">
        <span className="byline">{post.date}</span>
        {post.location && <span className="byline text-ink-faint">· {post.location}</span>}
        {post.rating !== undefined && <Stars rating={post.rating} />}
      </div>
    </Link>
  );
}
