import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn about how Fast Mock Data Generator collects, uses, and protects your information. Our privacy policy explains our data practices in detail.",
  robots: {
    index: true,
    follow: true,
  }
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Privacy Policy
        </h1>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 space-y-6 text-gray-700 dark:text-gray-300">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              1. Introduction
            </h2>
            <p>
              Welcome to Fast Mock Data Generator (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              2. Information We Collect
            </h2>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
              2.1 Information You Provide
            </h3>
            <p className="mb-4">
              We do not require you to create an account or provide personal information to use our mock data generator. 
              All data generation happens entirely in your browser.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
              2.2 Automatically Collected Information
            </h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Browser type and version</li>
              <li>Device information</li>
              <li>IP address</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website addresses</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              3. How We Use Your Information
            </h2>
            <p className="mb-2">We use the information we collect to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Provide, operate, and maintain our website</li>
              <li>Improve user experience</li>
              <li>Understand how users interact with our service</li>
              <li>Develop new features and functionality</li>
              <li>Monitor and analyze usage patterns</li>
              <li>Detect and prevent technical issues</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              4. Data Storage and Processing
            </h2>
            <p>
              <strong>Important:</strong> All mock data generation happens entirely in your browser using JavaScript. 
              We do not store, process, or transmit any of the schemas or data you create. Your data never leaves your device.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              5. Cookies and Tracking Technologies
            </h2>
            <p className="mb-2">We use cookies and similar tracking technologies to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Remember your preferences (dark mode, etc.)</li>
              <li>Analyze site traffic and usage patterns</li>
              <li>Serve relevant advertisements (Google AdSense)</li>
            </ul>
            <p className="mt-4">
              You can control cookies through your browser settings. However, disabling cookies may affect your experience on our site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              6. Third-Party Services
            </h2>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
              6.1 Google AdSense
            </h3>
            <p className="mb-4">
              We use Google AdSense to display advertisements. Google may use cookies to serve ads based on your prior visits 
              to our website or other websites. You can opt out of personalized advertising by visiting{' '}
              <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" 
                 className="text-blue-600 dark:text-blue-400 hover:underline">
                Google Ads Settings
              </a>.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
              6.2 Analytics
            </h3>
            <p>
              We may use analytics services to help us understand how users interact with our website. 
              These services may collect information about your use of our site and other websites.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              7. Your Privacy Rights
            </h2>
            <p className="mb-2">Depending on your location, you may have the following rights:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Object to processing of your information</li>
              <li>Request restriction of processing</li>
              <li>Data portability</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              8. Children&apos;s Privacy
            </h2>
            <p>
              Our service is not directed to children under 13. We do not knowingly collect personal information from children under 13. 
              If you believe we have collected information from a child under 13, please contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              9. Changes to This Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy 
              on this page and updating the &quot;Last Updated&quot; date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              10. Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at{' '}
              <a href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline">
                our contact page
              </a>.
            </p>
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

