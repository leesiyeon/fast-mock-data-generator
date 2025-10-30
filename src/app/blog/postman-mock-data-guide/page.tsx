import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Using Mock Data in Postman : Complete API Testing Guide",
  description: "Master Postman API testing with mock data. Learn how to create realistic test scenarios, automate workflows, and test edge cases effectively.",
  keywords: ["postman", "api testing", "mock data", "rest api", "api development", "testing automation"],
  openGraph: {
    title: "Using Mock Data in Postman : Complete API Testing Guide",
    description: "Learn how to use mock data effectively in Postman for better API testing",
    type: "article",
    publishedTime: "2025-10-17T00:00:00.000Z",
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
            <span className="text-sm font-semibold px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full">
              Tutorial
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">10 min read</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">October 17, 2025</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Using Mock Data in Postman: Complete API Testing Guide
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Learn how to leverage mock data in Postman to create comprehensive API tests, automate workflows, and catch bugs before they reach production.
          </p>
        </header>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Why Use Mock Data in Postman?</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Postman is a powerful tool for API development and testing, but its true potential is unlocked when combined with realistic mock data.
              Whether you&apos;re testing POST requests, validating response structures, or creating automated test collections,
              mock data enables you to test comprehensively without depending on real user data or database state.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Method 1: Using Environment Variables</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Store mock data in Postman environment variables for reuse across requests:
            </p>

            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg mb-4">
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">Step 1: Create Environment Variables</h4>
              <pre className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
                1. Click Environments in Postman<br/>
                2. Create New Environment<br/>
                3. Add variables like:<br/>
                   - testUserId: &quot;550e8400-e29b-41d4-a716-446655440000&quot;<br/>
                   - testEmail: &quot;john.doe@example.com&quot;<br/>
                   - testPhone: &quot;+1-555-123-4567&quot;
              </pre>
            </div>

            <div className="bg-gray-900 rounded-lg p-4 mb-4 overflow-x-auto">
              <pre className="text-sm text-gray-100"><code>{`// POST /api/users
// Request Body
{
  "email": "{{testEmail}}",
  "name": "{{testName}}",
  "phone": "{{testPhone}}"
}

// Tests tab
pm.test("User created successfully", function () {
    pm.response.to.have.status(201);
    const jsonData = pm.response.json();
    pm.expect(jsonData.email).to.eql(pm.environment.get("testEmail"));
});`}</code></pre>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Method 2: Using Pre-request Scripts</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Generate dynamic mock data using Postman&apos;s built-in libraries or external data:
            </p>

            <div className="bg-gray-900 rounded-lg p-4 mb-4 overflow-x-auto">
              <pre className="text-sm text-gray-100"><code>{`// Pre-request Script
// Generate random user data
pm.environment.set("randomEmail", \`user\${Math.random().toString(36).substring(7)}@example.com\`);
pm.environment.set("randomName", \`User \${Math.floor(Math.random() * 1000)}\`);
pm.environment.set("randomPhone", \`+1-555-\${Math.floor(Math.random() * 900) + 100}-\${Math.floor(Math.random() * 9000) + 1000}\`);

// Use Postman's dynamic variables
pm.environment.set("timestamp", new Date().toISOString());
pm.environment.set("uuid", pm.variables.replaceIn('{{$guid}}'));`}</code></pre>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4">
              <p className="text-gray-800 dark:text-gray-200 font-semibold mb-2">Postman Dynamic Variables</p>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Postman provides built-in dynamic variables: <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">$guid</code>,
                <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">$timestamp</code>,
                <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">$randomInt</code>,
                <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">$randomEmail</code>, and more!
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Method 3: Importing External Mock Data</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              For comprehensive testing, generate mock data externally and import it into Postman:
            </p>

            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg mb-4">
              <h4 className="font-bold text-gray-900 dark:text-white mb-3">Step-by-Step Process:</h4>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>Generate mock data using our tool (e.g., 100 user records)</li>
                <li>Save as <code className="bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded">mockUsers.json</code></li>
                <li>In Postman, create a collection variable or global variable</li>
                <li>Paste the JSON array as the variable value</li>
                <li>Reference in your requests using <code className="bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded">JSON.parse()</code></li>
              </ol>
            </div>

            <div className="bg-gray-900 rounded-lg p-4 mb-4 overflow-x-auto">
              <pre className="text-sm text-gray-100"><code>{`// Pre-request Script
const mockUsers = JSON.parse(pm.collectionVariables.get("mockUsersData"));
const randomUser = mockUsers[Math.floor(Math.random() * mockUsers.length)];

pm.environment.set("testUser", JSON.stringify(randomUser));

// Request Body
{
  "email": "{{testUser.email}}",
  "name": "{{testUser.name}}",
  "phone": "{{testUser.phone}}"
}`}</code></pre>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Testing Multiple Scenarios with Mock Data</h2>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">1. Bulk Operations Testing</h3>
            <div className="bg-gray-900 rounded-lg p-4 mb-4 overflow-x-auto">
              <pre className="text-sm text-gray-100"><code>{`// Pre-request Script - Generate array of users
const users = [];
for (let i = 0; i < 10; i++) {
  users.push({
    email: \`user\${i}@example.com\`,
    name: \`Test User \${i}\`,
    role: i % 2 === 0 ? 'admin' : 'user'
  });
}
pm.environment.set("bulkUsers", JSON.stringify(users));

// Request Body for POST /api/users/bulk
{{bulkUsers}}`}</code></pre>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">2. Edge Case Testing</h3>
            <div className="bg-gray-900 rounded-lg p-4 mb-4 overflow-x-auto">
              <pre className="text-sm text-gray-100"><code>{`// Pre-request Script - Test with edge cases
const edgeCases = {
  veryLongName: "A".repeat(255),
  specialChars: "Test@User#123!",
  emptyString: "",
  unicodeChars: "用户测试",
  sqlInjection: "'; DROP TABLE users--"
};

pm.environment.set("edgeCase", JSON.stringify(edgeCases));

// Tests - Verify API handles edge cases
pm.test("Handles long names", function() {
    const response = pm.response.json();
    pm.expect(response.error).to.not.be.undefined;
});`}</code></pre>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Collection Runner with Mock Data</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Use Postman&apos;s Collection Runner to execute tests with different mock datasets:
            </p>

            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg mb-4">
              <h4 className="font-bold text-gray-900 dark:text-white mb-3">Setup Data-Driven Testing:</h4>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>Generate mock data as CSV or JSON</li>
                <li>Open Collection Runner</li>
                <li>Select your collection</li>
                <li>Upload data file</li>
                <li>Tests run once for each data row</li>
              </ol>
            </div>

            <div className="bg-gray-900 rounded-lg p-4 mb-4 overflow-x-auto">
              <pre className="text-sm text-gray-100"><code>{`// Example CSV structure: users.csv
email,name,expectedStatus
john@test.com,John Doe,201
invalid-email,Test User,400
existing@test.com,Duplicate,409

// Request uses CSV columns
// POST /api/users
{
  "email": "{{email}}",
  "name": "{{name}}"
}

// Test validates expected response
pm.test("Status matches expected", function() {
    pm.response.to.have.status(parseInt(pm.iterationData.get("expectedStatus")));
});`}</code></pre>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Best Practices</h2>

            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">1. Organize Mock Data by Collection</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Keep mock data relevant to each API collection. Use collection variables for collection-specific data
                  and global variables for data shared across collections.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">2. Version Control Your Collections</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Export and commit Postman collections to version control. This ensures team members use the same tests
                  and mock data configurations.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">3. Clean Up After Tests</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  If your tests create data, add cleanup requests to delete test records. Use test teardown scripts
                  to reset the environment.
                </p>
              </div>

              <div className="border-l-4 border-orange-500 pl-4">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">4. Use Realistic Data</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Test with realistic data that matches production patterns. This helps catch validation issues,
                  UI bugs, and edge cases that simple test data might miss.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg p-8 text-white mb-8">
            <h2 className="text-2xl font-bold mb-4">Generate API Test Data Instantly</h2>
            <p className="mb-6">
              Create comprehensive mock datasets for your Postman tests in seconds. No coding required!
            </p>
            <Link
              href="/"
              className="inline-block bg-white text-purple-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Generate Mock Data →
            </Link>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Conclusion</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Mock data transforms Postman from a simple API client into a comprehensive testing platform. By leveraging
              environment variables, pre-request scripts, and external data sources, you can create robust test suites
              that catch bugs early and ensure API reliability.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Start small with environment variables, then graduate to data-driven testing with Collection Runner as
              your testing needs grow. Your APIs will thank you!
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}