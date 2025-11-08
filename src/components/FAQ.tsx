'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is mock data and why do I need it?",
    answer: "Mock data is artificially generated information that mimics real data. It's essential for testing applications without exposing sensitive user information, enabling faster development, and creating consistent test scenarios."
  },
  {
    question: "Is this tool completely free?",
    answer: "Yes! Our mock data generator is 100% free with no signup required. Generate as much test data as you need, directly in your browser."
  },
  {
    question: "How many data types are supported?",
    answer: "We support 60+ data types including names, emails, phone numbers, addresses, dates, UUIDs, credit cards, and more. All organized into 11 categories for easy access."
  },
  {
    question: "Does the data generation happen on a server?",
    answer: "No, all data generation happens entirely in your browser using faker.js. Your schemas and generated data never leave your computer, ensuring complete privacy."
  },
  {
    question: "Can I use this for commercial projects?",
    answer: "Absolutely! You can use the generated mock data in any project, commercial or personal, without any restrictions or attribution required."
  },
  {
    question: "How do I create a custom schema?",
    answer: "Simply define your data structure as JSON in the schema editor. Use field names as keys and data type names as values. For example: {\"name\": \"name\", \"email\": \"email\"}. Check the Data Type Reference panel for all available types."
  },
  {
    question: "Can I export the generated data?",
    answer: "Yes! You can copy the generated JSON to your clipboard or download it as a .json file. Perfect for seeding databases or testing APIs."
  },
  {
    question: "What's the maximum number of records I can generate?",
    answer: "You can generate up to 1000 records at once. For most testing scenarios, this is more than sufficient. The generation is instant thanks to client-side processing."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // FAQ Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-4 bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex justify-between items-center"
              >
                <span className="font-semibold text-gray-900 dark:text-white pr-8">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-gray-500 dark:text-gray-400 transition-transform flex-shrink-0 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-white dark:bg-gray-800">
                  <p className="text-gray-700 dark:text-gray-300">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}