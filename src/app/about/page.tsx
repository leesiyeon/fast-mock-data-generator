import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "About Us - Our Mission",
  description: "Learn about Fast Mock Data Generator - our mission to provide free, fast, and reliable mock data generation tools for developers worldwide.",
  openGraph: {
    title: "About Us | Fast Mock Data Generator",
    description: "Our mission is to provide free mock data tools for developers worldwide",
  }
};

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          About Us
        </h1>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 space-y-8 text-gray-700 dark:text-gray-300">
          
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Our Mission
            </h2>
            <p className="text-lg leading-relaxed">
              Fast Mock Data Generator was created to help developers worldwide build and test applications faster. 
              We believe that every developer should have access to high-quality, realistic mock data without the hassle 
              of setting up complex systems or databases.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              What We Do
            </h2>
            <p className="mb-4 leading-relaxed">
              We provide a fast, free, and easy-to-use mock data generator that runs entirely in your browser. 
              No server-side processing, no data storage, no sign-up required. Just open the tool and start generating.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <h3 className="font-bold text-blue-900 dark:text-blue-300 mb-2">⚡ Lightning Fast</h3>
                <p className="text-sm">Client-side processing means instant results with no server delays.</p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <h3 className="font-bold text-green-900 dark:text-green-300 mb-2">🔒 100% Private</h3>
                <p className="text-sm">Your data never leaves your device. Everything happens locally.</p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                <h3 className="font-bold text-purple-900 dark:text-purple-300 mb-2">🎯 Developer-Focused</h3>
                <p className="text-sm">Built by developers, for developers. Simple and intuitive interface.</p>
              </div>
              <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                <h3 className="font-bold text-orange-900 dark:text-orange-300 mb-2">🌍 Free Forever</h3>
                <p className="text-sm">No subscriptions, no hidden fees. Completely free to use.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Why Mock Data Matters
            </h2>
            <p className="leading-relaxed">
              In modern software development, testing with realistic data is crucial. Whether you&apos;re building a new feature, 
              testing edge cases, or demonstrating a prototype, having quality mock data can save hours of work. 
              Our tool makes this process effortless, allowing you to focus on what matters most: building great software.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Features
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-2xl mr-3">📝</span>
                <div>
                  <strong className="text-gray-900 dark:text-white">Custom Schema Builder:</strong>
                  <p className="text-sm">Define your own data structure with JSON.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-3">🎲</span>
                <div>
                  <strong className="text-gray-900 dark:text-white">60+ Data Types:</strong>
                  <p className="text-sm">Names, emails, dates, addresses, and more.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-3">📦</span>
                <div>
                  <strong className="text-gray-900 dark:text-white">Bulk Generation:</strong>
                  <p className="text-sm">Generate up to 1,000 records at once.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-3">💾</span>
                <div>
                  <strong className="text-gray-900 dark:text-white">Easy Export:</strong>
                  <p className="text-sm">Copy to clipboard or download as JSON file.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-3">🌙</span>
                <div>
                  <strong className="text-gray-900 dark:text-white">Dark Mode:</strong>
                  <p className="text-sm">Work comfortably in any lighting condition.</p>
                </div>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Technology Stack
            </h2>
            <p className="mb-4 leading-relaxed">
              Built with modern web technologies to ensure the best performance and user experience:
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-full text-sm font-medium">Next.js 15</span>
              <span className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-full text-sm font-medium">React 19</span>
              <span className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-full text-sm font-medium">TypeScript</span>
              <span className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-full text-sm font-medium">Tailwind CSS</span>
              <span className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-full text-sm font-medium">Faker.js</span>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Our Commitment
            </h2>
            <p className="leading-relaxed">
              We are committed to providing a reliable, fast, and free service to the global developer community. 
              We continuously improve our tool based on user feedback and strive to add new features and data types regularly. 
              Your privacy and satisfaction are our top priorities.
            </p>
          </section>

          <section className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Get in Touch
            </h2>
            <p className="mb-4 leading-relaxed">
              We&apos;d love to hear from you! Whether you have questions, feedback, or suggestions for new features, 
              don&apos;t hesitate to reach out.
            </p>
            <a 
              href="/contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Contact Us
            </a>
          </section>
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

