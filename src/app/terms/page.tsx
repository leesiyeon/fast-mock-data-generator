import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Read our Terms of Service to understand the rules and regulations for using Fast Mock Data Generator. Important information about acceptable use and limitations.",
  robots: {
    index: true,
    follow: true,
  }
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Terms of Service
        </h1>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 space-y-6 text-gray-700 dark:text-gray-300">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              1. Agreement to Terms
            </h2>
            <p>
              By accessing or using Fast Mock Data Generator, you agree to be bound by these Terms of Service and all applicable 
              laws and regulations. If you do not agree with any part of these terms, you may not use our service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              2. Description of Service
            </h2>
            <p>
              Fast Mock Data Generator is a free online tool that generates mock/fake data for development and testing purposes. 
              All data generation happens locally in your browser using JavaScript. We do not store or process any of the data 
              or schemas you create.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              3. Use License
            </h2>
            <p className="mb-2">
              Permission is granted to use Fast Mock Data Generator for personal and commercial purposes, subject to the following restrictions:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>You may not modify or copy the website&apos;s materials</li>
              <li>You may not use the materials for any illegal purpose</li>
              <li>You may not attempt to reverse engineer any software contained on our website</li>
              <li>You may not remove any copyright or proprietary notations</li>
              <li>You may not transfer the materials to another person</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              4. Generated Data
            </h2>
            <p className="mb-2">
              <strong>Important Notice:</strong>
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>All data generated is <strong>fake and randomly generated</strong></li>
              <li>Any resemblance to real persons, companies, or entities is purely coincidental</li>
              <li>You are solely responsible for how you use the generated data</li>
              <li>We are not liable for any consequences resulting from the use of generated data</li>
              <li>Do not use generated data to impersonate real individuals or entities</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              5. Acceptable Use
            </h2>
            <p className="mb-2">You agree NOT to use our service to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Generate data for fraudulent purposes</li>
              <li>Create fake identities for illegal activities</li>
              <li>Spam or harass others</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on intellectual property rights</li>
              <li>Transmit malicious code or viruses</li>
              <li>Attempt to gain unauthorized access to our systems</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              6. Disclaimer of Warranties
            </h2>
            <p>
              Our service is provided &quot;as is&quot; and &quot;as available&quot; without any warranties of any kind, either express or implied. 
              We do not warrant that:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
              <li>The service will be uninterrupted or error-free</li>
              <li>The results obtained from using the service will be accurate or reliable</li>
              <li>The quality of any data generated will meet your expectations</li>
              <li>Any errors in the software will be corrected</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              7. Limitation of Liability
            </h2>
            <p>
              In no event shall Fast Mock Data Generator or its suppliers be liable for any damages (including, without limitation, 
              damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use our service, 
              even if we have been notified of the possibility of such damage.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              8. Third-Party Services
            </h2>
            <p>
              Our website may contain links to third-party websites or services (such as Google AdSense) that are not owned or controlled 
              by us. We have no control over and assume no responsibility for the content, privacy policies, or practices of any 
              third-party websites or services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              9. Intellectual Property
            </h2>
            <p>
              The service and its original content (excluding user-generated schemas and data), features, and functionality are and will 
              remain the exclusive property of Fast Mock Data Generator. The service is protected by copyright, trademark, and other laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              10. Modifications to Service
            </h2>
            <p>
              We reserve the right to modify or discontinue, temporarily or permanently, the service (or any part thereof) with or 
              without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuance 
              of the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              11. Changes to Terms
            </h2>
            <p>
              We reserve the right to modify these terms at any time. We will notify users of any changes by posting the new Terms of 
              Service on this page and updating the &quot;Last Updated&quot; date. Your continued use of the service after such modifications 
              constitutes your acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              12. Governing Law
            </h2>
            <p>
              These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which we operate, 
              without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              13. Contact Us
            </h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at{' '}
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

