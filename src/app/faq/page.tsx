import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Frequently Asked Questions (FAQ)",
  description: "Find answers to common questions about our mock data generator. Learn about data types, usage limits, privacy, export options, and more.",
  openGraph: {
    title: "FAQ | Fast Mock Data Generator",
    description: "Answers to frequently asked questions about mock data generation",
  }
};

const faqs = [
  {
    category: "General",
    questions: [
      {
        q: "What is a mock data generator?",
        a: "A mock data generator is a tool that creates realistic fake data for testing and development purposes. It generates data that looks authentic but doesn't contain any real personal information, making it safe for testing applications, databases, and APIs."
      },
      {
        q: "Do I need to sign up or create an account?",
        a: "No! Our tool is completely free and doesn't require any registration. Simply visit the website and start generating data immediately."
      },
      {
        q: "Is this tool really free?",
        a: "Yes, 100% free with no hidden costs, subscriptions, or usage limits. We believe every developer should have access to quality testing tools."
      },
      {
        q: "How does the generator work?",
        a: "All data generation happens entirely in your browser using JavaScript and the Faker.js library. You define a JSON schema with the data types you need, and our tool generates realistic data matching that structure."
      }
    ]
  },
  {
    category: "Privacy & Security",
    questions: [
      {
        q: "Is my data safe? Do you store my schemas or generated data?",
        a: "Absolutely safe! All data generation happens locally in your browser. We never store, transmit, or access your schemas or generated data. Your information never leaves your device."
      },
      {
        q: "Can I use the generated data in production?",
        a: "The generated data is completely fake and safe to use for testing. However, we don't recommend using mock data in production environments - it's designed for development and testing only."
      },
      {
        q: "Does the tool collect any personal information?",
        a: "We only collect anonymous analytics data (like page views) to improve our service. We don't collect, store, or process any of the schemas or data you generate. See our Privacy Policy for details."
      }
    ]
  },
  {
    category: "Data Types & Schema",
    questions: [
      {
        q: "How many data types are supported?",
        a: "We support over 60 different data types including names, emails, phone numbers, addresses, dates, UUIDs, prices, product information, and much more. Check the data type reference panel for the complete list."
      },
      {
        q: "What is a schema and how do I write one?",
        a: "A schema is a JSON object that defines the structure of your data. Each key represents a field name, and the value is the data type. For example: {\"name\": \"name\", \"email\": \"email\", \"age\": \"number\"}"
      },
      {
        q: "Are data type names case-sensitive?",
        a: "No, data types are case-insensitive. You can use 'email', 'Email', or 'EMAIL' - they all work the same way."
      },
      {
        q: "Can I create nested objects or arrays?",
        a: "Currently, the tool generates flat JSON objects. Each record is a single-level object with your defined fields. For complex nested structures, you may need to generate separate datasets and combine them manually."
      },
      {
        q: "What happens if I misspell a data type?",
        a: "If the generator doesn't recognize a data type, it will generate a random word as a fallback. Make sure to check the data type reference panel for correct type names."
      }
    ]
  },
  {
    category: "Usage & Limits",
    questions: [
      {
        q: "How many records can I generate at once?",
        a: "You can generate up to 1,000 records in a single generation. This limit ensures good performance and prevents browser slowdowns."
      },
      {
        q: "Is there a daily limit on how much data I can generate?",
        a: "No, there are no daily limits. Generate as much data as you need, whenever you need it."
      },
      {
        q: "Will the tool work offline?",
        a: "The initial page load requires an internet connection, but once loaded, the data generation works offline since everything runs in your browser."
      },
      {
        q: "Does it work on mobile devices?",
        a: "Yes! Our tool is fully responsive and works on smartphones and tablets, though the experience is optimized for desktop use."
      }
    ]
  },
  {
    category: "Export & Integration",
    questions: [
      {
        q: "In what format is the data generated?",
        a: "All data is generated in JSON format, which is widely compatible with most programming languages, databases, and APIs."
      },
      {
        q: "How do I export the generated data?",
        a: "You can either copy the JSON to your clipboard with one click or download it as a .json file. Both options are available in the data viewer panel."
      },
      {
        q: "Can I use this data with my REST API?",
        a: "Absolutely! The JSON format is perfect for API testing. Copy the generated data and use it in tools like Postman, Insomnia, or directly in your API tests."
      },
      {
        q: "How do I import the data into a database?",
        a: "Most databases can import JSON data. For MongoDB, you can use mongoimport. For SQL databases, you may need to convert JSON to SQL INSERT statements or use database-specific import tools."
      }
    ]
  },
  {
    category: "Troubleshooting",
    questions: [
      {
        q: "Why am I getting a 'Invalid schema format' error?",
        a: "This error appears when your schema is not valid JSON. Check for missing commas, quotes, or brackets. Make sure your JSON is properly formatted with correct syntax."
      },
      {
        q: "The generated data looks random - how do I get more realistic data?",
        a: "Make sure you're using the correct data types. For example, use 'name' instead of 'text' for person names, 'email' for email addresses, etc. Check the data type reference for appropriate types."
      },
      {
        q: "Can I customize the data format (e.g., date format, phone number format)?",
        a: "Currently, each data type has a predefined format. We use standard formats that work in most scenarios. Custom formatting options may be added in future updates."
      },
      {
        q: "What browsers are supported?",
        a: "Our tool works on all modern browsers including Chrome, Firefox, Safari, and Edge. We recommend using the latest version for the best experience."
      }
    ]
  }
];

export default function FAQ() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Find answers to common questions about using our mock data generator.
            Can&apos;t find what you&apos;re looking for? <Link href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline">Contact us</Link>.
          </p>
        </header>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqs.map((category, categoryIndex) => (
            <section key={categoryIndex} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-3 border-b border-gray-200 dark:border-gray-700">
                {category.category}
              </h2>

              <div className="space-y-6">
                {category.questions.map((faq, faqIndex) => (
                  <div key={faqIndex} className="border-l-4 border-blue-500 pl-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Q: {faq.q}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      A: {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">
            Ready to Start Generating?
          </h2>
          <p className="mb-6 text-blue-100">
            Try our tool now and create realistic test data in seconds!
          </p>
          <Link
            href="/"
            className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Generate Mock Data
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