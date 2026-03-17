import { getPostBySlug, getPostsBySection } from '@/lib/posts';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { PostCard } from '@/components/PostCard';

interface Props { params: { slug: string } }

export async function generateStaticParams() {
  return getPostsBySection('bars').map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return { title: post.title, description: post.deck };
}

// Placeholder article body content (replace with MDX or CMS later)
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
    <div className="flex items-center gap-2">
      <span className="flex gap-0.5">
        {[1,2,3,4,5].map((n) => (
          <span key={n} className={n <= rating ? 'star-filled' : 'star-empty'} style={{ fontSize: '0.9rem' }}>★</span>
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
  const related = getPostsBySection('bars').filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="mb-6">
        <Link href="/bars" className="section-label text-accent-red hover:opacity-70 transition-opacity">
          ← Bars &amp; Restaurants
        </Link>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Article */}
        <article className="lg:col-span-8">
          <div className="rule-thick mb-4" />
          <span className="section-label text-accent-red">Bars &amp; Restaurants</span>
          <h1 className="headline text-3xl sm:text-5xl mt-2 mb-4">{post.title}</h1>
          <p className="deck text-xl text-ink-muted mb-4">{post.deck}</p>

          <div className="flex items-center gap-4 mb-1">
            <span className="byline">By Pete</span>
            <span className="byline text-ink-faint">{post.date}</span>
            {post.location && <span className="byline text-ink-faint">{post.location}</span>}
          </div>
          {post.rating !== undefined && <div className="mb-6"><Stars rating={post.rating} /></div>}

          <div className="rule-thin mb-8" />

          <div className="body-copy space-y-5 text-ink-light">
            {body ?? (
              <p className="text-ink-muted italic">Full article coming soon.</p>
            )}
          </div>
        </article>

        {/* Sidebar */}
        <aside className="lg:col-span-4">
          <div className="rule-thin mb-6" />
          <p className="section-label text-ink-faint mb-4">More from Bars</p>
          <div className="space-y-4">
            {related.map((p) => (
              <PostCard key={p.slug} post={p} size="small" />
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
