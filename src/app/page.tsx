import { getFeaturedPosts, getPostsBySection, posts } from '@/lib/posts';
import { HeroCard, StoryCard, WideCard, ListCard } from '@/components/PostCard';
import Link from 'next/link';

function Divider({ label }: { label: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16, margin: '40px 0 0' }}>
      <div style={{ flex: 1, borderTop: '1px solid var(--ink)' }} />
      <span className="label" style={{ color: 'var(--ink-muted)', whiteSpace: 'nowrap' }}>{label}</span>
      <div style={{ flex: 1, borderTop: '1px solid var(--ink)' }} />
    </div>
  );
}

export default function HomePage() {
  const featured = getFeaturedPosts();
  const [lead] = featured;
  const secondary = featured.slice(1, 4);
  const latest = posts.slice(0, 6);
  const travelPosts = getPostsBySection('travel').slice(0, 1)[0];

  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px' }}>

      {/* Hero */}
      {lead && (
        <div style={{ borderBottom: '1px solid var(--rule)', marginBottom: 0 }}>
          <HeroCard post={lead} />
        </div>
      )}

      {/* Three-column strip */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', borderBottom: '1px solid var(--rule)' }}>
        {secondary.map((post, i) => (
          <div key={post.slug} style={{ padding: '28px 28px', borderRight: i < secondary.length - 1 ? '1px solid var(--rule)' : 'none' }}>
            <StoryCard post={post} />
          </div>
        ))}
      </div>

      {/* From the road divider + wide card */}
      {travelPosts && (
        <>
          <Divider label="From the road" />
          <div style={{ borderTop: '1px solid var(--rule)', borderBottom: '1px solid var(--rule)', marginTop: 16 }}>
            <WideCard post={travelPosts} />
          </div>
        </>
      )}

      {/* Latest index */}
      <div style={{ marginTop: 40 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 700, margin: 0 }}>Latest</h2>
          <Link href="/bars" className="label hover-fade" style={{ color: 'var(--red)' }}>All pieces &rarr;</Link>
        </div>
        <div style={{ borderTop: '3px solid var(--ink)', marginBottom: 0 }} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '0 40px' }}>
          {latest.map((post) => (
            <ListCard key={post.slug} post={post} />
          ))}
        </div>
      </div>

    </div>
  );
}
