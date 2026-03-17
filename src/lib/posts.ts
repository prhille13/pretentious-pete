import { Post } from '@/components/PostCard';

export const posts: Post[] = [
  // BARS & RESTAURANTS
  {
    slug: 'double-happiness-columbus',
    section: 'bars',
    title: 'Double Happiness Is the Bar Columbus Didn\'t Know It Needed',
    deck: 'A deep dive into why this little spot on High Street keeps pulling me back despite myself.',
    date: 'March 2025',
    location: 'Columbus, OH',
    rating: 5,
    featured: true,
  },
  {
    slug: 'craft-beer-bar-fatigue',
    section: 'bars',
    title: 'I Am Exhausted by the Craft Beer Bar',
    deck: 'Forty taps, zero personality. A meditation on why more is never more.',
    date: 'February 2025',
    location: 'Columbus, OH',
    rating: 2,
  },
  {
    slug: 'best-neighborhood-bar',
    section: 'bars',
    title: 'What Makes a Perfect Neighborhood Bar',
    deck: 'It has nothing to do with the beer list.',
    date: 'January 2025',
    location: 'Columbus, OH',
  },

  // TRAVEL
  {
    slug: 'new-orleans-french-quarter',
    section: 'travel',
    title: 'New Orleans Refuses to Be Understood',
    deck: 'Three days in the French Quarter and I came home more confused and more enchanted than when I arrived.',
    date: 'March 2025',
    location: 'New Orleans, LA',
    featured: true,
  },
  {
    slug: 'chicago-long-weekend',
    section: 'travel',
    title: 'The Chicago Long Weekend Itinerary for People Who Eat',
    deck: 'Skip the tourist nonsense. Here is where to actually spend your time.',
    date: 'January 2025',
    location: 'Chicago, IL',
  },
  {
    slug: 'road-trip-appalachian',
    section: 'travel',
    title: 'Driving the Appalachian Foothills in Autumn',
    deck: 'A solo road trip, no itinerary, and the best two days I\'ve had in years.',
    date: 'October 2024',
    location: 'Eastern Ohio / WV',
  },

  // FILM
  {
    slug: 'anora-review',
    section: 'movies',
    title: 'Anora Is a Film That Trusts You',
    deck: 'Sean Baker\'s Palme d\'Or winner doesn\'t explain itself. Bless it for that.',
    date: 'March 2025',
    rating: 5,
    featured: true,
  },
  {
    slug: 'best-of-2024',
    section: 'movies',
    title: 'The Ten Films of 2024 That Mattered to Me',
    deck: 'Not the best list. Not the most important list. Mine.',
    date: 'January 2025',
  },
  {
    slug: 'film-twitter-is-exhausting',
    section: 'movies',
    title: 'On the Tedium of Online Film Discourse',
    deck: 'Everyone\'s a contrarian. No one is having fun. This is not a coincidence.',
    date: 'December 2024',
  },
];

export function getPostsBySection(section: Post['section']) {
  return posts.filter((p) => p.section === section);
}

export function getFeaturedPosts() {
  return posts.filter((p) => p.featured);
}

export function getPostBySlug(slug: string) {
  return posts.find((p) => p.slug === slug);
}
