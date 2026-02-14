import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/checkout/', '/success/', '/dashboard/'],
    },
    sitemap: 'https://amp-spot.com/sitemap.xml',
  };
}
