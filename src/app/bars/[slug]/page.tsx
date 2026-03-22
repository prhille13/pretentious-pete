import { getPostBySlug, getPostsBySection } from '@/lib/posts';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { ListCard } from '@/components/PostCard';

interface Props { params: { slug: string } }

export async function generateStaticParams() {
  return getPostsBySection('bars').map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return { title: post.title, description: post.deck };
}

const articleBodies: Record<string, React.ReactNode> = {
  'double-happiness-columbus': (
    <>
      <p className="drop-cap">
        There is a particular kind of bar that has become almost impossible to find in 2025:
        the kind where nothing is trying too hard. No concept, no thesis, no staff in matching
        aprons explaining the provenance of the ice. Double Happiness, on the south end of Short
        North, is that bar. It should be unremarkable. It is not.
      </p>
      <p>
        The room is small — maybe fifteen seats at the bar, a handful of tables that feel
        borrowed from somewhere else. The lighting is correct, which is to say low enough that
        you stop thinking about how you look. The music on my three visits ranged from Coltrane
        to Sade to something I couldn&apos;t place that made me feel pleasantly uneasy. None of
        it was loud enough to matter.
      </p>
      <div className="pullquote">
        The pour is generous without being a statement about it. That&apos;s harder to find than it should be.
      </div>
      <p>
        The beer list is short and thoughtful — half a dozen drafts, maybe eight bottles,
        nothing that demands you have an opinion about it. The cocktails are well-made and
        priced like it&apos;s still 2019, which either speaks to ownership philosophy or lease
        situation. Either way, I&apos;m not complaining.
      </p>
      <p>
        What Double Happiness gets right — and what bars keep failing to understand — is that
        the point is not the product. The product is fine. The product is good. But the reason
        you come back is the particular quality of ease the room generates. You walk in alone
        and you feel okay about that. You walk in with friends and you can hear them.
        The bartenders are good at their job, which means they are neither invisible nor
        aggressively present.
      </p>
      <p>
        Columbus has a lot of very good bars. It has fewer bars that feel like they belong to
        the neighborhood rather than to a demographic. Double Happiness manages the latter.
        That&apos;s the thing I keep coming back to explain.
      </p>
    </>
  ),
};

function Stars({ rating }: { rating: number }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <span style={{ display: 'inline-flex', gap: 3 }}>
        {[1,2,3,4,5].map((n) => (
          <span key={n} style={{ fontSize: 14, color: n <= rating ? 'var(--gold)' : 'var(--rule)' }}>★</span>
        ))}
      </span>
      <span className="byline">{rating}/5</span>
    </div>
  );
}

export default function BarsArticlePage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post || post.section !== 'bars') notFound();

  const body = articleBodies[post.slug];
  const related = getPostsBySection('bars').filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px' }}>
      <div style={{ paddingTop: 32 }}>
        <Link href="/bars" className="label hover-fade" style={{ color: 'var(--red)' }}>
          &larr; Bars &amp; Restaurants
        </Link>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 64, paddingTop: 32 }}>
        {/* Article */}
        <article>
          <div style={{ borderTop: '4px double var(--ink)', marginBottom: 20 }} />
          <span className="label" style={{ color: 'var(--red)', display: 'block', marginBottom: 12 }}>Bars &amp; Restaurants</span>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px,5vw,48px)', fontWeight: 700, lineHeight: 1.08, letterSpacing: '-0.02em', margin: '0 0 16px' }}>
            {post.title}
          </h1>
          <p style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontStyle: 'italic', color: 'var(--ink-muted)', lineHeight: 1.5, margin: '0 0 16px' }}>
            {post.deck}
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
            <span className="byline">By Pete</span>
            <span className="byline">&middot; {post.date}</span>
            {post.location && <span className="byline">&middot; {post.location}</span>}
          </div>
          {post.rating !== undefined && <div style={{ marginBottom: 24 }}><Stars rating={post.rating} /></div>}
          <div style={{ borderTop: '1px solid var(--rule)', marginBottom: 32 }} />
          <div className="body-copy" style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {body ?? (
              <p style={{ color: 'var(--ink-muted)', fontStyle: 'italic' }}>Full article coming soon.</p>
            )}
          </div>
        </article>

        {/* Sidebar */}
        <aside style={{ paddingTop: 8 }}>
          <div style={{ borderTop: '3px solid var(--ink)', marginBottom: 16 }} />
          <p className="label" style={{ color: 'var(--ink-faint)', marginBottom: 0 }}>More from Bars</p>
          {related.map((p) => (
            <ListCard key={p.slug} post={p} />
          ))}
        </aside>
      </div>
    </div>
  );
}
