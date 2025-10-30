import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Jest Testing with Mock Data: Complete Guide",
  description: "Master Jest testing with mock data. Learn mocking strategies, best practices, and how to write reliable unit and integration tests.",
  keywords: ["jest", "testing", "mock data", "unit testing", "javascript testing", "test automation"],
  openGraph: {
    title: "Jest Testing with Mock Data: Complete Guide",
    description: "Complete guide to using mock data in Jest for better JavaScript testing",
    type: "article",
    publishedTime: "2025-10-18T00:00:00.000Z",
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
            <span className="text-sm font-semibold px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full">
              Tutorial
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">11 min read</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Jest Testing with Mock Data: Complete Guide
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Learn how to write reliable, maintainable Jest tests using mock data. Master mocking strategies for functions, modules, and APIs.
          </p>
        </header>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Why Mock Data in Jest?</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Jest is JavaScript&apos;s most popular testing framework, and mock data is essential for writing effective tests.
              Mock data allows you to test components in isolation, control test scenarios, and avoid dependencies on external systems
              like databases or APIs. This makes tests faster, more reliable, and easier to maintain.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Method 1: Simple Mock Data Constants</h2>

            <div className="bg-gray-900 rounded-lg p-4 mb-4 overflow-x-auto">
              <pre className="text-sm text-gray-100"><code>{`// __mocks__/mockData.js
export const mockUser = {
  id: '123',
  name: 'John Doe',
  email: 'john@example.com',
  role: 'admin'
};

export const mockUsers = [
  mockUser,
  { id: '456', name: 'Jane Smith', email: 'jane@example.com', role: 'user' },
  { id: '789', name: 'Bob Johnson', email: 'bob@example.com', role: 'user' }
];

// userService.test.js
import { mockUser, mockUsers } from './__mocks__/mockData';

describe('UserService', () => {
  test('finds user by id', () => {
    const result = findUserById('123', mockUsers);
    expect(result).toEqual(mockUser);
  });
});`}</code></pre>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Method 2: Mocking API Calls</h2>

            <div className="bg-gray-900 rounded-lg p-4 mb-4 overflow-x-auto">
              <pre className="text-sm text-gray-100"><code>{`// api/users.js
export async function fetchUsers() {
  const response = await fetch('/api/users');
  return response.json();
}

// api/__mocks__/users.js
export const fetchUsers = jest.fn(() =>
  Promise.resolve([
    { id: '1', name: 'John Doe', email: 'john@test.com' },
    { id: '2', name: 'Jane Smith', email: 'jane@test.com' }
  ])
);

// UserList.test.js
jest.mock('./api/users');
import { fetchUsers } from './api/users';
import { renderUserList } from './UserList';

test('renders user list from API', async () => {
  const users = await fetchUsers();
  const result = renderUserList(users);

  expect(fetchUsers).toHaveBeenCalledTimes(1);
  expect(result).toContain('John Doe');
  expect(result).toContain('Jane Smith');
});`}</code></pre>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Method 3: Jest Mock Functions</h2>

            <div className="bg-gray-900 rounded-lg p-4 mb-4 overflow-x-auto">
              <pre className="text-sm text-gray-100"><code>{`// Testing callbacks with mock data
test('calls callback with user data', () => {
  const mockCallback = jest.fn();
  const mockUser = { id: '1', name: 'Test User' };

  processUser(mockUser, mockCallback);

  expect(mockCallback).toHaveBeenCalledWith(mockUser);
  expect(mockCallback).toHaveBeenCalledTimes(1);
});

// Mock return values
test('returns transformed user data', () => {
  const getUserById = jest.fn();
  getUserById.mockReturnValue({ id: '1', name: 'John' });

  const user = getUserById('1');
  expect(user.name).toBe('John');
});

// Mock different responses
test('handles multiple scenarios', () => {
  const api = jest.fn();

  api
    .mockReturnValueOnce({ success: true, data: mockUser1 })
    .mockReturnValueOnce({ success: false, error: 'Not found' });

  expect(api()).toEqual({ success: true, data: mockUser1 });
  expect(api()).toEqual({ success: false, error: 'Not found' });
});`}</code></pre>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Method 4: Factory Functions for Mock Data</h2>

            <div className="bg-gray-900 rounded-lg p-4 mb-4 overflow-x-auto">
              <pre className="text-sm text-gray-100"><code>{`// __mocks__/factories.js
export function createMockUser(overrides = {}) {
  return {
    id: '123',
    name: 'Test User',
    email: 'test@example.com',
    createdAt: new Date('2024-01-01'),
    role: 'user',
    ...overrides
  };
}

export function createMockUsers(count = 3) {
  return Array.from({ length: count }, (_, i) =>
    createMockUser({
      id: String(i + 1),
      name: \`User \${i + 1}\`,
      email: \`user\${i + 1}@example.com\`
    })
  );
}

// Using in tests
test('handles admin users differently', () => {
  const adminUser = createMockUser({ role: 'admin' });
  const result = processUser(adminUser);
  expect(result.permissions).toContain('delete');
});

test('processes multiple users', () => {
  const users = createMockUsers(10);
  const result = processUserBatch(users);
  expect(result.length).toBe(10);
});`}</code></pre>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Testing with External Mock Data</h2>

            <div className="bg-gray-900 rounded-lg p-4 mb-4 overflow-x-auto">
              <pre className="text-sm text-gray-100"><code>{`// Generate large dataset with our tool, save as mockUsers.json

// userService.test.js
import mockUsers from './__mocks__/mockUsers.json';

describe('UserService with large dataset', () => {
  test('filters users by role', () => {
    const admins = filterUsersByRole(mockUsers, 'admin');
    expect(admins.length).toBeGreaterThan(0);
    admins.forEach(user => {
      expect(user.role).toBe('admin');
    });
  });

  test('paginates users correctly', () => {
    const page1 = paginateUsers(mockUsers, 1, 10);
    const page2 = paginateUsers(mockUsers, 2, 10);

    expect(page1.length).toBe(10);
    expect(page2.length).toBe(10);
    expect(page1[0].id).not.toBe(page2[0].id);
  });
});`}</code></pre>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Best Practices</h2>

            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">1. Keep Mock Data Close to Tests</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Store mock data in <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">__mocks__</code> directories
                  next to your test files for easy access and maintenance.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">2. Use Factory Functions</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Create factory functions for flexibility. Override specific properties while using defaults for the rest.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">3. Test Edge Cases</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Create mock data for null values, empty arrays, extreme values, and error states to ensure robust error handling.
                </p>
              </div>

              <div className="border-l-4 border-orange-500 pl-4">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">4. Reset Mocks Between Tests</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Use <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">jest.clearAllMocks()</code> in
                  <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">beforeEach()</code> to ensure test isolation.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-lg p-8 text-white mb-8">
            <h2 className="text-2xl font-bold mb-4">Generate Test Data for Jest</h2>
            <p className="mb-6">
              Create comprehensive mock datasets for your Jest tests instantly. Perfect for unit and integration testing!
            </p>
            <Link
              href="/"
              className="inline-block bg-white text-indigo-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Generate Mock Data →
            </Link>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Conclusion</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Mock data is essential for effective Jest testing. Whether using simple constants, factory functions, or external datasets,
              the key is to create realistic, maintainable test data that covers both happy paths and edge cases. This approach leads
              to more reliable tests and better code quality.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}
