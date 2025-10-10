import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://fastmockdata.com'; // 실제 도메인으로 변경

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

