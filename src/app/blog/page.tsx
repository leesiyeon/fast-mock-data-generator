import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Blog - Developer Tips & Tutorials",
  description: "Read our latest articles about mock data generation, API testing, and modern development practices. Learn best practices and improve your development workflow.",
  openGraph: {
    title: "Blog | Fast Mock Data Generator",
    description: "Tips, tutorials, and insights about mock data generation and API testing",
  }
};

const blogPosts = [
  {
    slug: 'using-mock-data-in-react',
    title: 'Using Mock Data in React Applications: Complete Guide',
    excerpt: 'Learn how to effectively use mock data in React for faster development, better testing, and more reliable applications.',
    date: 'October 15, 2025',
    readTime: '12 min read',
    category: 'Tutorial'
  },
  {
    slug: 'database-seeding-guide',
    title: 'Database Seeding: The Complete Developer\'s Guide',
    excerpt: 'Master database seeding for MongoDB, PostgreSQL, MySQL, and more. Learn best practices and automation strategies.',
    date: 'October 16, 2025',
    readTime: '15 min read',
    category: 'Guide'
  },
  {
    slug: 'postman-mock-data-guide',
    title: 'Using Mock Data in Postman: Complete API Testing Guide',
    excerpt: 'Master Postman API testing with mock data. Learn how to create realistic test scenarios and automate workflows.',
    date: 'October 17, 2025',
    readTime: '10 min read',
    category: 'Tutorial'
  },
  {
    slug: 'jest-testing-with-mock-data',
    title: 'Jest Testing with Mock Data: Complete Guide',
    excerpt: 'Master Jest testing with mock data. Learn mocking strategies, best practices, and write reliable unit tests.',
    date: 'October 18, 2025',
    readTime: '11 min read',
    category: 'Tutorial'
  },
  {
    slug: 'complete-guide-to-mock-data',
    title: 'The Complete Guide to Mock Data in Software Development',
    excerpt: 'Learn everything about mock data, why it matters, and how to use it effectively in your development workflow.',
    date: 'October 8, 2025',
    readTime: '8 min read',
    category: 'Tutorial'
  },
  {
    slug: 'api-testing-best-practices',
    title: '10 API Testing Best Practices Every Developer Should Know',
    excerpt: 'Master the art of API testing with these proven strategies and techniques used by professional developers.',
    date: 'October 7, 2025',
    readTime: '10 min read',
    category: 'Best Practices'
  },
  {
    slug: 'understanding-data-types',
    title: 'Understanding Data Types: A Developer\'s Essential Guide',
    excerpt: 'Deep dive into different data types and how to choose the right ones for your mock data generation needs.',
    date: 'October 6, 2025',
    readTime: '7 min read',
    category: 'Guide'
  },
  {
    slug: 'json-schema-tutorial',
    title: 'JSON Schema Tutorial: From Basics to Advanced Techniques',
    excerpt: 'Master JSON Schema with practical examples and learn how to create robust data structures for your applications.',
    date: 'October 5, 2025',
    readTime: '12 min read',
    category: 'Tutorial'
  },
  {
    slug: 'testing-strategies-for-modern-apps',
    title: 'Testing Strategies for Modern Web Applications',
    excerpt: 'Explore effective testing strategies that will improve your application quality and reduce bugs in production.',
    date: 'October 4, 2025',
    readTime: '9 min read',
    category: 'Strategy'
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Blog
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Tips, tutorials, and insights about mock data generation, API testing, and modern development practices.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <Link 
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group"
            >
              <article className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all h-full flex flex-col">
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {post.readTime}
                    </span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-1">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {post.date}
                    </span>
                    <span className="text-blue-600 dark:text-blue-400 text-sm font-medium group-hover:translate-x-1 transition-transform">
                      Read more →
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">
            Ready to Generate Mock Data?
          </h2>
          <p className="mb-6 text-blue-100">
            Try our free tool and generate realistic test data in seconds!
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

