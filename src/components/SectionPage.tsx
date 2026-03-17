import { PostCard, Post } from '@/components/PostCard';

interface SectionPageProps {
  title: string;
  tagline: string;
  posts: Post[];
  accentClass: string;
}

export default function SectionPage({ title, tagline, posts, accentClass }: SectionPageProps) {
  const [lead, ...rest] = posts;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Section masthead */}
      <div className="mb-8">
        <div className="rule-thick mb-3" />
        <div className="flex items-end justify-between">
          <div>
            <h1 className={`masthead text-5xl sm:text-7xl ${accentClass}`}>{title}</h1>
            <p className="deck text-base text-ink-muted mt-1">{tagline}</p>
          </div>
          <span className="byline text-ink-faint hidden sm:block self-start mt-2">
            {posts.length} {posts.length === 1 ? 'piece' : 'pieces'}
          </span>
        </div>
        <div className="rule-thick mt-3" />
      </div>

      {/* Lead post */}
      {lead && (
        <div className="mb-10 pb-10 border-b border-ink/15">
          <PostCard post={lead} size="large" />
        </div>
      )}

      {/* Grid of remaining posts */}
      {rest.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rest.map((post) => (
            <PostCard key={post.slug} post={post} size="normal" />
          ))}
        </div>
      )}

      {posts.length === 0 && (
        <div className="py-20 text-center">
          <p className="deck text-ink-muted">Nothing here yet. Check back soon.</p>
        </div>
      )}
    </div>
  );
}
