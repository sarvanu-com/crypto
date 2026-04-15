import { MetadataRoute } from 'next';
import { getAllNews } from '@/lib/news';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://texnova.org';

  // Static core routes
  const staticRoutes = [
    '',
    '/services',
    '/wallets',
    '/security',
    '/developers',
    '/contact',
    '/about',
    '/careers',
    '/yield',
    '/network',
    '/docs',
    '/blog',
    '/privacy',
    '/terms',
    '/news' // Add the new listing page
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Fetch dynamic routes from News module
  const newsArticles = await getAllNews();
  const dynamicNewsRoutes = newsArticles.map((article) => ({
    url: `${baseUrl}/news/${article.slug}`,
    // Ideally use article.updatedAt if available, otherwise fallback
    lastModified: new Date(article.updatedAt || article.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...dynamicNewsRoutes];
}
