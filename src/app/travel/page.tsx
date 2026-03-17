import { Metadata } from 'next';
import SectionPage from '@/components/SectionPage';
import { getPostsBySection } from '@/lib/posts';

export const metadata: Metadata = {
  title: 'Travel',
  description: 'Places I\'ve been. Thoughts I\'ve had.',
};

export default function TravelPage() {
  const posts = getPostsBySection('travel');
  return (
    <SectionPage
      title="Travel"
      tagline="Places I've been. Thoughts I've had."
      posts={posts}
      accentClass="text-accent-slate"
    />
  );
}
