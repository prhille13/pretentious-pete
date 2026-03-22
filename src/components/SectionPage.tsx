import { Post, HeroCard, StoryCard, ListCard } from '@/components/PostCard';
import Link from 'next/link';

interface SectionPageProps {
  title: string;
  tagline: string;
  posts: Post[];
  accentColor: string;
}

export default function SectionPage({ title, tagline, posts, accentColor }: SectionPageProps) {
  const [lead, ...rest] = posts;

  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px' }}>
      {/* Section header */}
      <div style={{ padding: '36px 0 0' }}>
        <div style={{ borderTop: '4px double var(--ink)', marginBottom: 20 }} />
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 0 }}>
          <div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px,8vw,72px)', fontWeight: 900, letterSpacing: '-0.03em', margin: 0, color: accentColor }}>
              {title}
            </h1>
            <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 16, color: 'var(--ink-muted)', margin: '6px 0 0' }}>
              {tagline}
            </p>
          </div>
          <span className="byline" style={{ paddingBottom: 6 }}>{posts.length} {posts.length === 1 ? 'piece' : 'pieces'}</span>
        </div>
        <div style={{ borderTop: '4px double var(--ink)', marginTop: 20 }} />
      </div>

      {/* Lead */}
      {lead && (
        <div style={{ borderBottom: '1px solid var(--rule)' }}>
          <HeroCard post={lead} />
        </div>
      )}

      {/* Grid */}
      {rest.length > 0 && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '0', marginTop: 0 }}>
          {rest.map((post, i) => (
            <div key={post.slug} style={{ padding: '28px 28px', borderRight: (i + 1) % 3 !== 0 ? '1px solid var(--rule)' : 'none', borderBottom: '1px solid var(--rule)' }}>
              <StoryCard post={post} />
            </div>
          ))}
        </div>
      )}

      {posts.length === 0 && (
        <div style={{ padding: '80px 0', textAlign: 'center' }}>
          <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: 'var(--ink-muted)' }}>Nothing here yet. Check back soon.</p>
        </div>
      )}
    </div>
  );
}
