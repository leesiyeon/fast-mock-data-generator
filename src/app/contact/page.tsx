import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Fast Mock Data Generator. Send us your questions, feedback, feature requests, or report bugs. We're here to help!",
  openGraph: {
    title: "Contact Us | Fast Mock Data Generator",
    description: "Get in touch with us for questions, feedback, or support",
  }
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Contact Us
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Email Contact */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              📧 Send us an Email
            </h2>
            
            <div className="space-y-6">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Have questions, feedback, or suggestions? We&apos;d love to hear from you!
              </p>

              <div className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Contact Email:
                </p>
                <a 
                  href="mailto:demoat2si@gmail.com"
                  className="text-2xl font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors break-all"
                >
                  demoat2si@gmail.com
                </a>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  💡 What to include in your email:
                </h3>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>A clear subject line (Bug Report, Feature Request, etc.)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Detailed description of your inquiry</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Screenshots if reporting a bug</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Your browser and device information (if technical)</span>
                  </li>
                </ul>
              </div>

              <a
                href="mailto:demoat2si@gmail.com"
                className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg transition-colors text-center"
              >
                📬 Open Email Client
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Get in Touch
              </h2>
              
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p className="leading-relaxed">
                  We&apos;re here to help! Whether you have a question about features, pricing, need support, 
                  or anything else, our team is ready to answer all your questions.
                </p>
                
                <div className="pt-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Response Time</h3>
                  <p className="text-sm">
                    We typically respond within 24-48 hours during business days.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Frequently Asked
              </h3>
              
              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Is the service really free?
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Yes! Fast Mock Data Generator is 100% free to use. No hidden fees, no subscriptions.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Is my data stored on your servers?
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    No. All data generation happens in your browser. We never see or store your schemas or generated data.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Can I use this for commercial projects?
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Absolutely! Use the generated data in any personal or commercial project.
                  </p>
                </div>

                <div className="pt-2">
                  <a href="/terms" className="text-blue-600 dark:text-blue-400 hover:underline text-sm">
                    View all Terms & Conditions →
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-lg p-8 text-white">
              <h3 className="text-xl font-bold mb-3">
                💡 Feature Request?
              </h3>
              <p className="text-blue-100 mb-4">
                Have an idea for a new data type or feature? We&apos;d love to hear it! 
                Use the contact form to share your suggestions.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a 
            href="/" 
            className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}

