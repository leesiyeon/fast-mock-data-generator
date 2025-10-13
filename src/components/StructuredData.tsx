export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Fast Mock Data Generator",
    "description": "Free online mock data generator for developers. Generate realistic test data instantly in your browser.",
    "url": "https://fast-mock-data-generator.vercel.app",
    "applicationCategory": "DeveloperApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Generate realistic mock data",
      "60+ data types supported",
      "Instant generation in browser",
      "No signup required",
      "Free forever",
      "JSON export",
      "Custom schemas"
    ],
    "author": {
      "@type": "Organization",
      "name": "Fast Mock Data Generator"
    },
    "provider": {
      "@type": "Organization",
      "name": "Fast Mock Data Generator",
      "url": "https://fast-mock-data-generator.vercel.app"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}




