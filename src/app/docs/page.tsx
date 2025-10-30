import { Metadata } from 'next';
import Link from 'next/link';
import { DATA_TYPE_CATEGORIES } from '@/utils/dataTypes';

export const metadata: Metadata = {
  title: "Documentation - All Data Types & API Reference",
  description: "Complete documentation for our mock data generator. Browse 60+ data types with examples, learn schema syntax, and explore advanced features.",
  keywords: ["documentation", "data types", "api reference", "schema guide", "mock data types"],
  openGraph: {
    title: "Documentation | Fast Mock Data Generator",
    description: "Complete guide to all data types and features",
  }
};

export default function Documentation() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <header className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Documentation
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
            Complete reference for all data types, schema syntax, and advanced features. Everything you need to generate perfect mock data.
          </p>
        </header>

        {/* Quick Start */}
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Quick Start</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">1. Define Your Schema</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Create a JSON object where keys are your field names and values are data type names:
              </p>
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                <pre className="text-sm text-gray-100"><code>{`{
  "id": "uuid",
  "name": "name",
  "email": "email",
  "createdAt": "date"
}`}</code></pre>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">2. Choose Record Count</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Select how many records to generate (1-1000).
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">3. Generate & Export</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Click &quot;Generate Data&quot; and download or copy the JSON output.
              </p>
            </div>
          </div>
        </section>

        {/* Schema Syntax */}
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Schema Syntax</h2>

          <div className="space-y-4">
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">✓ Valid Schema</h4>
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-2">
                <pre className="text-sm text-gray-100"><code>{`{
  "userId": "uuid",
  "fullName": "name",
  "contactEmail": "email"
}`}</code></pre>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Field names can be anything. Data type names must match supported types (case-insensitive).
              </p>
            </div>

            <div className="border-l-4 border-red-500 pl-4">
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">✗ Invalid Schema</h4>
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-2">
                <pre className="text-sm text-gray-100"><code>{`{
  "name": "name"
  "email": "email"  // Missing comma
}`}</code></pre>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Must be valid JSON with proper syntax (commas, quotes, brackets).
              </p>
            </div>
          </div>
        </section>

        {/* All Data Types */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">All Data Types ({DATA_TYPE_CATEGORIES.reduce((sum, cat) => sum + cat.types.length, 0)}+ types)</h2>

          <div className="space-y-6">
            {DATA_TYPE_CATEGORIES.map((category, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">{category.icon}</span>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {category.name}
                  </h3>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-gray-200 dark:border-gray-700">
                        <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Type Name</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Description</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Example Output</th>
                      </tr>
                    </thead>
                    <tbody>
                      {category.types.map((type, typeIdx) => (
                        <tr
                          key={typeIdx}
                          className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50"
                        >
                          <td className="py-3 px-4">
                            <code className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-1 rounded font-mono text-sm">
                              {type.name}
                            </code>
                          </td>
                          <td className="py-3 px-4 text-gray-700 dark:text-gray-300 text-sm">
                            {type.description}
                          </td>
                          <td className="py-3 px-4 text-gray-600 dark:text-gray-400 text-sm font-mono">
                            {type.example}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Advanced Features */}
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Advanced Tips</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Type Names are Case-Insensitive</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                You can use <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">email</code>,
                <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">Email</code>, or
                <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">EMAIL</code> - they all work the same.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Field Names Can Be Anything</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Use descriptive field names that match your application: <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">user_email</code>,
                <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">customerName</code>,
                <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">created_at</code>, etc.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Reuse the Same Schema</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Save your schemas! Each time you generate, you get fresh random data while keeping the same structure.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Export Options</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Download as JSON file or copy to clipboard. The data is formatted with 2-space indentation for readability.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Link */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg shadow-xl p-8 text-center text-white mb-8">
          <h2 className="text-2xl font-bold mb-4">
            Have Questions?
          </h2>
          <p className="mb-6 text-purple-100">
            Check our FAQ for answers to common questions about using the mock data generator.
          </p>
          <Link
            href="/faq"
            className="inline-block bg-white text-purple-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
          >
            View FAQ
          </Link>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">
            Start Generating Mock Data
          </h2>
          <p className="mb-6 text-blue-100">
            Now that you know all the data types, try creating your own schema!
          </p>
          <Link
            href="/"
            className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Go to Generator
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
