import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://fast-mock-data-generator.vercel.app';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'], // 크롤링 차단할 경로
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}




