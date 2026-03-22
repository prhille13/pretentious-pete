import { Metadata } from 'next';
import SectionPage from '@/components/SectionPage';
import { getPostsBySection } from '@/lib/posts';

export const metadata: Metadata = {
  title: 'Bars & Restaurants',
  description: 'Reviews, opinions, and dispatches from the bar stool.',
};

export default function BarsPage() {
  return (
    <SectionPage
      title="Bars & Restaurants"
      tagline="Reviews, opinions, and dispatches from the bar stool."
      posts={getPostsBySection('bars')}
      accentColor="var(--red)"
    />
  );
}
