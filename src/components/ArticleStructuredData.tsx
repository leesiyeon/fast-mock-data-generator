interface ArticleStructuredDataProps {
  title: string;
  description: string;
  publishedTime: string;
  modifiedTime?: string;
  url: string;
  imageUrl?: string;
  authorName?: string;
  keywords?: string[];
}

export default function ArticleStructuredData({
  title,
  description,
  publishedTime,
  modifiedTime,
  url,
  imageUrl = "https://fast-mock-data-generator.vercel.app/og-image.png",
  authorName = "Fast Mock Data Generator",
  keywords = []
}: ArticleStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": imageUrl,
    "datePublished": publishedTime,
    "dateModified": modifiedTime || publishedTime,
    "author": {
      "@type": "Organization",
      "name": authorName,
      "url": "https://fast-mock-data-generator.vercel.app"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Fast Mock Data Generator",
      "url": "https://fast-mock-data-generator.vercel.app",
      "logo": {
        "@type": "ImageObject",
        "url": "https://fast-mock-data-generator.vercel.app/favicon.svg"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    },
    "keywords": keywords.join(", ")
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}