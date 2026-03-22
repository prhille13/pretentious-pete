import { Metadata } from 'next';
import SectionPage from '@/components/SectionPage';
import { getPostsBySection } from '@/lib/posts';

export const metadata: Metadata = {
  title: 'Film',
  description: 'Reviews and criticism, mostly of things I loved or hated.',
};

export default function MoviesPage() {
  return (
    <SectionPage
      title="Film"
      tagline="Reviews and criticism, mostly of things I loved or hated."
      posts={getPostsBySection('movies')}
      accentColor="var(--gold)"
    />
  );
}
