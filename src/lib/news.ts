// src/lib/news.ts

export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  publishedAt: string;
  updatedAt: string;
  author: string;
  imageUrl?: string;
  tags: string[];
}

// Simulated database
const newsArticles: NewsArticle[] = [
  {
    id: '1',
    slug: 'texnova-launches-enterprise-gateway',
    title: 'Texnova Launches Enterprise Crypto Payment Gateway',
    description: 'We are thrilled to announce the official launch of our global crypto payment infrastructure with ultra-low 0.1% fees.',
    content: 'Long form content regarding the launch of Texnova...', // Mock content
    publishedAt: '2024-05-15T10:00:00Z',
    updatedAt: '2024-05-15T10:00:00Z',
    author: 'Texnova Team',
    imageUrl: 'https://texnova.org/og-image.png',
    tags: ['Announcement', 'Enterprise', 'Gateway'],
  },
  {
    id: '2',
    slug: 'rwa-tokenization-future',
    title: 'The Future of Real World Asset (RWA) Tokenization',
    description: 'Exploring how standardizing RWA tokenization builds institutional trust.',
    content: 'Long form content regarding RWA tokenization...', // Mock content
    publishedAt: '2024-06-02T14:30:00Z',
    updatedAt: '2024-06-10T09:15:00Z',
    author: 'Research Team',
    imageUrl: 'https://texnova.org/og-image.png',
    tags: ['Research', 'RWA', 'Tokenization'],
  }
];

export async function getAllNews(): Promise<NewsArticle[]> {
  // Simulate network delay
  return new Promise((resolve) => {
    setTimeout(() => resolve(newsArticles), 100);
  });
}

export async function getNewsBySlug(slug: string): Promise<NewsArticle | null> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const article = newsArticles.find((a) => a.slug === slug);
      resolve(article || null);
    }, 100);
  });
}
