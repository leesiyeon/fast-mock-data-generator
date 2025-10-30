import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Use Cases & Examples - Mock Data Generator",
  description: "Explore practical use cases and real-world examples of mock data generation for React, Node.js, testing, APIs, and more.",
  keywords: ["mock data examples", "use cases", "testing examples", "api examples", "development scenarios"],
  openGraph: {
    title: "Use Cases & Examples | Fast Mock Data Generator",
    description: "Real-world examples and use cases for mock data generation",
  }
};

const useCases = [
  {
    title: "Frontend Development",
    icon: "💻",
    description: "Build UIs without waiting for backend APIs",
    examples: [
      {
        name: "React Component Development",
        schema: `{
  "id": "uuid",
  "name": "name",
  "email": "email",
  "avatar": "avatar",
  "status": "status"
}`,
        description: "Develop user profile components with realistic data while the backend is being built.",
        useCase: "Create a UserList component that displays 50 users with avatars, names, and status indicators."
      },
      {
        name: "Dashboard Development",
        schema: `{
  "id": "uuid",
  "title": "title",
  "value": "price",
  "change": "float",
  "date": "date"
}`,
        description: "Build analytics dashboards with realistic metrics and time-series data.",
        useCase: "Design a sales dashboard showing revenue trends without connecting to the analytics API."
      }
    ]
  },
  {
    title: "API Testing",
    icon: "🔌",
    description: "Test REST and GraphQL APIs thoroughly",
    examples: [
      {
        name: "POST Request Testing",
        schema: `{
  "email": "email",
  "password": "word",
  "firstName": "firstName",
  "lastName": "lastName",
  "phone": "phone"
}`,
        description: "Generate hundreds of unique user registration payloads for API testing.",
        useCase: "Test user registration endpoint with various valid inputs to ensure it handles high volumes."
      },
      {
        name: "Bulk Operations",
        schema: `{
  "productId": "uuid",
  "quantity": "smallNumber",
  "price": "price",
  "discount": "float"
}`,
        description: "Test batch processing endpoints with large datasets.",
        useCase: "Verify bulk order processing API can handle 1000 concurrent order items."
      }
    ]
  },
  {
    title: "Database Seeding",
    icon: "🗄️",
    description: "Populate databases with realistic test data",
    examples: [
      {
        name: "E-commerce Database",
        schema: `{
  "productId": "uuid",
  "name": "productName",
  "description": "productDescription",
  "price": "price",
  "category": "category",
  "inStock": "boolean",
  "rating": "rating",
  "tags": "tags"
}`,
        description: "Seed product catalog with diverse, realistic items.",
        useCase: "Populate a new e-commerce database with 500 products across various categories."
      },
      {
        name: "Social Media Platform",
        schema: `{
  "userId": "uuid",
  "username": "username",
  "bio": "sentence",
  "followers": "number",
  "posts": "number",
  "joinDate": "past"
}`,
        description: "Create realistic user profiles for social platform testing.",
        useCase: "Generate 1000 diverse user profiles for load testing a social feed algorithm."
      }
    ]
  },
  {
    title: "Automated Testing",
    icon: "🧪",
    description: "Create consistent test fixtures",
    examples: [
      {
        name: "Jest Unit Tests",
        schema: `{
  "id": "id",
  "title": "title",
  "completed": "boolean",
  "userId": "uuid",
  "createdAt": "past"
}`,
        description: "Generate predictable test data for unit tests.",
        useCase: "Create fixture data for testing todo list filtering and sorting functions."
      },
      {
        name: "E2E Testing with Cypress",
        schema: `{
  "email": "email",
  "password": "word",
  "name": "name",
  "role": "status"
}`,
        description: "Generate test accounts for end-to-end testing flows.",
        useCase: "Create 20 test user accounts for Cypress tests covering different user roles and permissions."
      }
    ]
  },
  {
    title: "Demos & Presentations",
    icon: "🎭",
    description: "Showcase features with realistic data",
    examples: [
      {
        name: "SaaS Dashboard Demo",
        schema: `{
  "companyName": "company",
  "revenue": "price",
  "employees": "number",
  "growth": "float",
  "status": "orderStatus"
}`,
        description: "Create impressive demo data for sales presentations.",
        useCase: "Generate 50 realistic company profiles to demonstrate analytics features to potential customers."
      },
      {
        name: "Mobile App Prototype",
        schema: `{
  "name": "name",
  "message": "sentence",
  "timestamp": "dateTime",
  "avatar": "avatar",
  "unread": "boolean"
}`,
        description: "Populate messaging app prototype with realistic conversations.",
        useCase: "Create 30 message threads with realistic sender names and timestamps for app store screenshots."
      }
    ]
  },
  {
    title: "Load & Performance Testing",
    icon: "📊",
    description: "Generate large datasets for stress testing",
    examples: [
      {
        name: "Search Performance",
        schema: `{
  "id": "uuid",
  "title": "title",
  "description": "paragraph",
  "keywords": "tags",
  "author": "name"
}`,
        description: "Test search functionality with large document collections.",
        useCase: "Generate 10,000 documents to test search index performance and query optimization."
      },
      {
        name: "API Load Testing",
        schema: `{
  "userId": "uuid",
  "action": "word",
  "timestamp": "dateTime",
  "metadata": "sentence"
}`,
        description: "Create event logs for load testing.",
        useCase: "Generate 100,000 event records to simulate high-traffic API scenarios."
      }
    ]
  }
];

export default function UseCases() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Use Cases & Examples
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-6">
            Discover how developers use our mock data generator for frontend development, API testing, database seeding, and more.
            Real-world examples with ready-to-use schemas.
          </p>
          <Link
            href="/"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Try It Now →
          </Link>
        </header>

        <div className="space-y-12">
          {useCases.map((category, idx) => (
            <section key={idx} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">{category.icon}</span>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{category.title}</h2>
                  <p className="text-gray-600 dark:text-gray-400">{category.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {category.examples.map((example, exIdx) => (
                  <div key={exIdx} className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {example.name}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                      {example.description}
                    </p>

                    <div className="bg-gray-900 rounded-lg p-4 mb-4 overflow-x-auto">
                      <pre className="text-xs text-gray-100"><code>{example.schema}</code></pre>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-3">
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        <strong className="text-blue-600 dark:text-blue-400">Use Case:</strong> {example.useCase}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">
            Ready to Try These Examples?
          </h2>
          <p className="mb-6 text-blue-100">
            Copy any schema above and paste it into our generator to create your mock data instantly!
          </p>
          <Link
            href="/"
            className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Start Generating
          </Link>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
