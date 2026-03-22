import { Metadata } from 'next';
import SectionPage from '@/components/SectionPage';
import { getPostsBySection } from '@/lib/posts';

export const metadata: Metadata = {
  title: 'Travel',
  description: "Places I've been. Thoughts I've had.",
};

export default function TravelPage() {
  return (
    <SectionPage
      title="Travel"
      tagline="Places I've been. Thoughts I've had."
      posts={getPostsBySection('travel')}
      accentColor="var(--slate)"
    />
  );
}
