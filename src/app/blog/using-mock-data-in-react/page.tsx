import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Using Mock Data in React Applications: Complete Guide",
  description: "Learn how to effectively use mock data in React applications for development and testing. Includes practical examples, best practices, and integration strategies.",
  keywords: ["react", "mock data", "react testing", "frontend development", "component testing", "react hooks"],
  openGraph: {
    title: "Using Mock Data in React Applications: Complete Guide",
    description: "Master mock data usage in React with practical examples and best practices",
    type: "article",
    publishedTime: "2025-10-15T00:00:00.000Z",
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
              Tutorial
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">12 min read</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">October 15, 2025</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Using Mock Data in React Applications: Complete Guide
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Learn how to effectively use mock data in React for faster development, better testing, and more reliable applications.
          </p>
        </header>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Why Use Mock Data in React?</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When building React applications, waiting for backend APIs to be ready can slow down frontend development significantly.
              Mock data allows you to develop and test your components independently, iterate faster, and catch UI issues early in the development cycle.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Whether you&apos;re building a new feature, writing component tests, or creating a demo, mock data is an essential tool
              in the modern React developer&apos;s toolkit.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Method 1: Simple Static Mock Data</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The simplest approach is to create a separate file with static mock data. This works great for predictable, repeatable testing scenarios.
            </p>

            <div className="bg-gray-900 rounded-lg p-4 mb-4 overflow-x-auto">
              <pre className="text-sm text-gray-100"><code>{`// mockData/users.js
export const mockUsers = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    avatar: "https://i.pravatar.cc/150?img=1",
    role: "Developer"
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    avatar: "https://i.pravatar.cc/150?img=2",
    role: "Designer"
  }
];`}</code></pre>
            </div>

            <div className="bg-gray-900 rounded-lg p-4 mb-4 overflow-x-auto">
              <pre className="text-sm text-gray-100"><code>{`// components/UserList.jsx
import { mockUsers } from '../mockData/users';

function UserList() {
  const [users, setUsers] = useState(mockUsers);

  return (
    <div>
      {users.map(user => (
        <div key={user.id}>
          <img src={user.avatar} alt={user.name} />
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}`}</code></pre>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Method 2: Using Environment Variables</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              For production-ready code, use environment variables to switch between real and mock data sources. This allows you to
              easily toggle mock data on and off without changing your code.
            </p>

            <div className="bg-gray-900 rounded-lg p-4 mb-4 overflow-x-auto">
              <pre className="text-sm text-gray-100"><code>{`// services/userService.js
const USE_MOCK_DATA = process.env.REACT_APP_USE_MOCK_DATA === 'true';

export async function fetchUsers() {
  if (USE_MOCK_DATA) {
    // Return mock data
    return Promise.resolve(mockUsers);
  }

  // Make real API call
  const response = await fetch('/api/users');
  return response.json();
}`}</code></pre>
            </div>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Then in your <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">.env</code> file:
            </p>

            <div className="bg-gray-900 rounded-lg p-4 mb-4 overflow-x-auto">
              <pre className="text-sm text-gray-100"><code>{`REACT_APP_USE_MOCK_DATA=true`}</code></pre>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Method 3: Custom Hooks for Mock Data</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Create a custom hook that generates fresh mock data on demand. This approach is great for testing edge cases and
              different data scenarios.
            </p>

            <div className="bg-gray-900 rounded-lg p-4 mb-4 overflow-x-auto">
              <pre className="text-sm text-gray-100"><code>{`// hooks/useMockUsers.js
import { useState, useEffect } from 'react';

function generateMockUser(id) {
  return {
    id: String(id),
    name: \`User \${id}\`,
    email: \`user\${id}@example.com\`,
    avatar: \`https://i.pravatar.cc/150?img=\${id}\`,
    joinedDate: new Date().toISOString()
  };
}

export function useMockUsers(count = 10) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API delay
    setTimeout(() => {
      const mockUsers = Array.from({ length: count }, (_, i) =>
        generateMockUser(i + 1)
      );
      setUsers(mockUsers);
      setLoading(false);
    }, 500);
  }, [count]);

  return { users, loading };
}`}</code></pre>
            </div>

            <div className="bg-gray-900 rounded-lg p-4 mb-4 overflow-x-auto">
              <pre className="text-sm text-gray-100"><code>{`// components/UserList.jsx
import { useMockUsers } from '../hooks/useMockUsers';

function UserList() {
  const { users, loading } = useMockUsers(20);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}`}</code></pre>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Method 4: Integration with Mock Data Generator</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              For more realistic data, use a mock data generator tool to create comprehensive datasets, then import them into your React app.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 mb-4">
              <p className="text-gray-800 dark:text-gray-200 font-semibold mb-2">Pro Tip:</p>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Use our free mock data generator to create realistic test data with 60+ data types.
                Generate once, save as JSON, and import into your React project!
              </p>
            </div>

            <div className="bg-gray-900 rounded-lg p-4 mb-4 overflow-x-auto">
              <pre className="text-sm text-gray-100"><code>{`// 1. Generate data using our tool with this schema:
{
  "id": "uuid",
  "name": "name",
  "email": "email",
  "phone": "phone",
  "avatar": "avatar",
  "company": "company",
  "jobTitle": "jobTitle",
  "createdAt": "past"
}

// 2. Save as mockData/users.json

// 3. Import and use in your component:
import mockUsers from '../mockData/users.json';

function UserDashboard() {
  const [users] = useState(mockUsers);

  return (
    <div>
      <h1>Total Users: {users.length}</h1>
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}`}</code></pre>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Testing Components with Mock Data</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Mock data is essential for component testing. Here&apos;s how to use it with React Testing Library:
            </p>

            <div className="bg-gray-900 rounded-lg p-4 mb-4 overflow-x-auto">
              <pre className="text-sm text-gray-100"><code>{`// UserList.test.js
import { render, screen } from '@testing-library/react';
import UserList from './UserList';

const mockUsers = [
  {
    id: '1',
    name: 'Test User',
    email: 'test@example.com'
  }
];

test('renders user list', () => {
  render(<UserList users={mockUsers} />);

  expect(screen.getByText('Test User')).toBeInTheDocument();
  expect(screen.getByText('test@example.com')).toBeInTheDocument();
});

test('handles empty user list', () => {
  render(<UserList users={[]} />);

  expect(screen.getByText('No users found')).toBeInTheDocument();
});`}</code></pre>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Best Practices</h2>

            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">1. Keep Mock Data Separate</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Store mock data in a dedicated <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">mockData/</code> or
                  <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">__mocks__/</code> folder. This keeps your codebase organized
                  and makes it easy to find and update test data.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">2. Match Real Data Structure</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Ensure your mock data matches the exact structure of your API responses. This prevents issues when switching to real data.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">3. Use TypeScript Interfaces</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Define TypeScript interfaces for your data models. This ensures type safety for both mock and real data.
                </p>
              </div>

              <div className="border-l-4 border-orange-500 pl-4">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">4. Test Edge Cases</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Create mock data for edge cases like empty arrays, null values, very long strings, and special characters to ensure
                  your components handle all scenarios gracefully.
                </p>
              </div>

              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">5. Don&apos;t Commit Large Mock Files</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  For large datasets, generate mock data on-the-fly or use a small representative sample in version control.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Common Pitfalls to Avoid</h2>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <span className="text-red-500 font-bold mr-2 mt-1">✗</span>
                <span><strong>Hardcoding mock data in components:</strong> This makes testing harder and couples your component to specific data.</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 font-bold mr-2 mt-1">✗</span>
                <span><strong>Forgetting to remove mock data imports:</strong> Use environment variables or build-time flags to ensure mock data doesn&apos;t reach production.</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 font-bold mr-2 mt-1">✗</span>
                <span><strong>Using unrealistic data:</strong> Mock data that&apos;s too simple won&apos;t catch real-world issues like layout breaks with long names.</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 font-bold mr-2 mt-1">✗</span>
                <span><strong>Not updating mock data:</strong> When your API changes, update your mock data to match the new structure.</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-white mb-8">
            <h2 className="text-2xl font-bold mb-4">Need Realistic Mock Data?</h2>
            <p className="mb-6">
              Generate production-quality mock data instantly with our free tool. Perfect for React development and testing!
            </p>
            <Link
              href="/"
              className="inline-block bg-white text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Generate Mock Data Now →
            </Link>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Conclusion</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Mock data is an essential tool for React developers. Whether you&apos;re building new features, writing tests, or
              creating demos, having quality mock data accelerates development and improves code quality.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Choose the method that best fits your needs - from simple static data for quick tests to sophisticated generators
              for comprehensive testing scenarios. The key is to use mock data consistently and keep it in sync with your real data structures.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}
