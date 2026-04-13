import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://texnova.org';

  const routes = [
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
    '/terms'
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}
