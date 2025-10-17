export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Fast Mock Data Generator",
    "description": "Free online mock data generator for developers. Generate realistic test data instantly in your browser with 60+ data types including names, emails, dates, and more.",
    "url": "https://fast-mock-data-generator.vercel.app",
    "applicationCategory": "DeveloperApplication",
    "operatingSystem": "Any",
    "browserRequirements": "Requires JavaScript. Requires HTML5.",
    "softwareVersion": "1.0",
    "datePublished": "2025-01-01",
    "dateModified": new Date().toISOString().split('T')[0],
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "featureList": [
      "Generate realistic mock data",
      "60+ data types supported",
      "Instant generation in browser",
      "No signup required",
      "Free forever",
      "JSON export",
      "Custom schemas",
      "API testing data",
      "Development tools",
      "Test data generation"
    ],
    "keywords": "mock data, fake data, test data generator, api testing, json generator, dummy data, faker, development tools, testing, data generation",
    "author": {
      "@type": "Organization",
      "name": "Fast Mock Data Generator",
      "url": "https://fast-mock-data-generator.vercel.app"
    },
    "provider": {
      "@type": "Organization",
      "name": "Fast Mock Data Generator",
      "url": "https://fast-mock-data-generator.vercel.app"
    },
    "potentialAction": {
      "@type": "UseAction",
      "target": "https://fast-mock-data-generator.vercel.app",
      "name": "Generate Mock Data"
    },
    "screenshot": "https://fast-mock-data-generator.vercel.app/og-image.png",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}




