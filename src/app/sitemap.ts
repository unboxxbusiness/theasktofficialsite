import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://theaskt.org';

  const staticRoutes = [
    '',
    '/about',
    '/community',
    '/contact',
    '/digital-ai-school',
    '/privacy-policy',
    '/refund-policy',
    '/scholarships',
    '/schools',
    '/terms-of-use',
  ];

  return staticRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: route === '' ? 1 : 0.8,
    }));
}
