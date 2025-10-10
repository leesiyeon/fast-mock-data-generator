import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Understanding Data Types: A Developer's Essential Guide",
  description: "Deep dive into different data types and how to choose the right ones for your mock data generation needs. Complete guide to strings, numbers, dates, and more.",
  keywords: ["data types", "programming", "string", "number", "date", "boolean", "arrays"],
  openGraph: {
    title: "Understanding Data Types: A Developer's Essential Guide",
    description: "Learn about different data types and their applications",
    type: "article",
    publishedTime: "2025-10-06T00:00:00.000Z",
  }
};

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <article className="max-w-4xl mx-auto px-4 py-12">
        <header className="mb-8">
          <Link href="/blog" className="text-blue-600 dark:text-blue-400 hover:underline mb-4 inline-block">
            ← Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-sm font-semibold px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full">
              Guide
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">7 min read</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">October 6, 2025</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Understanding Data Types: A Developer&apos;s Essential Guide
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Deep dive into different data types and how to choose the right ones for your mock data generation needs.
          </p>
        </header>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Data types are the foundation of programming, defining what kind of information a variable can hold and what operations can be performed on it. Understanding data types is crucial for generating realistic mock data, designing database schemas, and building robust applications.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">String Data Types</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Strings represent textual data and are among the most commonly used types. They can hold anything from single characters to lengthy paragraphs. When generating mock string data, consider length constraints, character sets, and special characters your application needs to handle.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Common string variations include names, email addresses, URLs, descriptions, and identification codes. Each has specific patterns: emails follow RFC standards, URLs need proper encoding, and names should reflect diverse cultural backgrounds.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Numeric Data Types</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Numbers come in many forms: integers for counting, floating-point numbers for measurements, and decimals for currency. Choose the right numeric type based on precision requirements and range. Financial calculations demand decimal types to avoid floating-point errors, while counters work fine with integers.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When generating mock numeric data, include edge cases: zero, negative numbers, very large values, and boundary conditions. Test how your application handles overflow, underflow, and division by zero scenarios.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Date and Time Types</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Temporal data is complex due to time zones, daylight saving time, and varying calendar systems. Modern applications should store dates in UTC and convert to local time for display. Mock date data should cover past, present, and future dates, plus edge cases like leap years and time zone boundaries.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Common date formats include ISO 8601 (recommended for APIs), Unix timestamps, and localized formats. Consistency in date handling prevents bugs that only surface during specific times of year or in certain regions.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Boolean Types</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Booleans represent true/false states and are fundamental to conditional logic. While simple in concept, boolean fields should be named carefully to make their meaning clear: &quot;isActive&quot; is better than &quot;status,&quot; and &quot;hasPermission&quot; is clearer than &quot;access.&quot;
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When generating mock boolean data, ensure both true and false values are represented in test cases. Some bugs only appear when specific boolean combinations occur, so test various scenarios thoroughly.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Array and Collection Types</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Arrays and collections hold multiple values of the same or mixed types. They&apos;re essential for representing lists, sets, and groups of related items. Mock array data should include empty arrays, single-item arrays, and arrays with multiple items to test different scenarios.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Consider testing with large arrays to ensure your application handles pagination and performance correctly. Also test whether your code properly handles null or undefined array elements if your data model allows them.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Object and Nested Types</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Complex objects with nested properties represent real-world entities like users, orders, or products. When designing schemas for mock data, think about relationships: a user has addresses, an order contains items, and products belong to categories.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Nested data structures should maintain referential integrity in tests. If an order references a user ID, that user should exist in your test data. This realism helps catch bugs related to foreign key constraints and data consistency.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Enum and Status Types</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Enums restrict values to a predefined set, perfect for status fields, categories, or any field with limited valid options. Use enums to prevent invalid states and make your code more maintainable. When generating mock data, test all possible enum values and verify invalid values are rejected.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Common examples include order status (pending, processing, shipped, delivered), user roles (admin, user, guest), and priority levels (low, medium, high). Enums make these intent explicit and prevent typos.
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-white mb-8">
            <h2 className="text-2xl font-bold mb-4">Generate Any Data Type You Need</h2>
            <p className="mb-6">
              Our tool supports 60+ data types covering strings, numbers, dates, booleans, and more. Generate realistic mock data for any scenario.
            </p>
            <Link 
              href="/"
              className="inline-block bg-white text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Try It Free →
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}

