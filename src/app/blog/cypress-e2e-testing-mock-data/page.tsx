import Link from 'next/link';
import { Metadata } from 'next';
import ArticleStructuredData from '@/components/ArticleStructuredData';

export const metadata: Metadata = {
  title: "Cypress E2E Testing with Mock Data: Complete Guide",
  description: "Learn how to use mock data in Cypress end-to-end tests for faster, more reliable testing. Complete guide with practical examples and best practices.",
  keywords: ["cypress", "e2e testing", "mock data", "end-to-end testing", "test automation", "faker.js"],
  openGraph: {
    title: "Cypress E2E Testing with Mock Data: Complete Guide",
    description: "Master Cypress E2E testing with mock data for faster and more reliable tests",
    type: "article",
    publishedTime: "2025-11-10T00:00:00.000Z",
  }
};

export default function BlogPost() {
  return (
    <>
      <ArticleStructuredData
        title="Cypress E2E Testing with Mock Data: Complete Guide"
        description="Learn how to use mock data in Cypress end-to-end tests for faster, more reliable testing. Complete guide with practical examples and best practices."
        publishedTime="2025-11-10T00:00:00.000Z"
        modifiedTime="2025-11-10T00:00:00.000Z"
        url="https://fast-mock-data-generator.vercel.app/blog/cypress-e2e-testing-mock-data"
        keywords={["cypress", "e2e testing", "mock data", "end-to-end testing", "test automation", "faker.js"]}
      />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <header className="mb-8">
          <Link href="/blog" className="text-blue-600 dark:text-blue-400 hover:underline mb-4 inline-block">
            ← Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-sm font-semibold px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full">
              Tutorial
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">14 min read</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">November 10, 2025</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Cypress E2E Testing with Mock Data: Complete Guide
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Learn how to use mock data in Cypress end-to-end tests for faster, more reliable testing with practical examples and best practices.
          </p>
        </header>

        {/* Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Why Use Mock Data in Cypress Tests?</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Cypress is a powerful end-to-end testing framework that allows you to test your application as a real user would. While testing with real data seems ideal, mock data offers significant advantages for E2E testing. Mock data provides consistent test environments, eliminates dependencies on external services, and allows you to test edge cases that are difficult to reproduce with real data.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Using mock data in Cypress tests means your tests run faster, are more predictable, and can be executed in isolation without affecting production databases or requiring complex test data setup. This approach is especially valuable in continuous integration environments where test speed and reliability are critical.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Setting Up Mock Data in Cypress</h2>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Installing Dependencies</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              First, install @faker-js/faker as a dev dependency in your project:
            </p>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-4 overflow-x-auto">
              <code>npm install --save-dev @faker-js/faker</code>
            </pre>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Creating Mock Data Fixtures</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Cypress fixtures are an excellent way to store mock data. Create a fixture file in cypress/fixtures/:
            </p>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-4 overflow-x-auto">
              <code>{`// cypress/fixtures/users.json
{
  "users": [
    {
      "id": "550e8400-e29b-41d4-a716-446655440000",
      "name": "John Doe",
      "email": "john.doe@example.com",
      "role": "admin"
    },
    {
      "id": "6fa459ea-ee8a-3ca4-894e-db77e160355e",
      "name": "Jane Smith",
      "email": "jane.smith@example.com",
      "role": "user"
    }
  ]
}`}</code>
            </pre>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Intercepting API Calls</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              One of Cypress most powerful features is the ability to intercept network requests and respond with mock data. This allows you to test your frontend without depending on a real backend.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Basic Intercept Example</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-4 overflow-x-auto">
              <code>{`describe('User Dashboard', () => {
  beforeEach(() => {
    // Load fixture data
    cy.fixture('users.json').then((data) => {
      // Intercept API call and respond with mock data
      cy.intercept('GET', '/api/users', {
        statusCode: 200,
        body: data
      }).as('getUsers');
    });

    cy.visit('/dashboard');
  });

  it('should display user list', () => {
    cy.wait('@getUsers');
    cy.get('[data-testid="user-list"]').should('be.visible');
    cy.contains('John Doe').should('exist');
    cy.contains('Jane Smith').should('exist');
  });
});`}</code>
            </pre>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Dynamic Mock Data Generation</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              For more flexible testing, generate mock data dynamically using faker.js:
            </p>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-4 overflow-x-auto">
              <code>{`import { faker } from '@faker-js/faker';

describe('User Management', () => {
  it('should handle large user lists', () => {
    // Generate 100 mock users
    const mockUsers = Array.from({ length: 100 }, () => ({
      id: faker.string.uuid(),
      name: faker.person.fullName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      createdAt: faker.date.past().toISOString()
    }));

    cy.intercept('GET', '/api/users', {
      statusCode: 200,
      body: { users: mockUsers }
    }).as('getUsers');

    cy.visit('/users');
    cy.wait('@getUsers');

    // Verify pagination works with large dataset
    cy.get('[data-testid="user-item"]').should('have.length', 10);
    cy.get('[data-testid="pagination"]').should('be.visible');
  });
});`}</code>
            </pre>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Testing Edge Cases</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Mock data makes it easy to test edge cases that would be difficult to reproduce with real data:
            </p>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Empty States</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-4 overflow-x-auto">
              <code>{`it('should show empty state when no users exist', () => {
  cy.intercept('GET', '/api/users', {
    statusCode: 200,
    body: { users: [] }
  }).as('getUsers');

  cy.visit('/users');
  cy.wait('@getUsers');

  cy.get('[data-testid="empty-state"]').should('be.visible');
  cy.contains('No users found').should('exist');
});`}</code>
            </pre>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Error Handling</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-4 overflow-x-auto">
              <code>{`it('should handle API errors gracefully', () => {
  cy.intercept('GET', '/api/users', {
    statusCode: 500,
    body: { error: 'Internal server error' }
  }).as('getUsersError');

  cy.visit('/users');
  cy.wait('@getUsersError');

  cy.get('[data-testid="error-message"]').should('be.visible');
  cy.contains('Failed to load users').should('exist');
});`}</code>
            </pre>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Long Content Handling</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-4 overflow-x-auto">
              <code>{`it('should handle very long names correctly', () => {
  const userWithLongName = {
    id: faker.string.uuid(),
    name: 'A'.repeat(100), // 100 character name
    email: faker.internet.email()
  };

  cy.intercept('GET', '/api/users/123', {
    statusCode: 200,
    body: userWithLongName
  }).as('getUser');

  cy.visit('/users/123');
  cy.wait('@getUser');

  // Verify text truncation or overflow handling
  cy.get('[data-testid="user-name"]').should('have.css', 'text-overflow', 'ellipsis');
});`}</code>
            </pre>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Best Practices</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Use Fixtures for Static Data</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Store commonly used mock data in fixtures for consistency across tests. This makes tests easier to maintain and ensures predictable test data.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Generate Dynamic Data for Volume Testing</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Use faker.js to generate large datasets for testing pagination, infinite scroll, and performance with realistic data volumes.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Test Both Success and Failure Paths</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Mock different API responses to test error handling, loading states, and edge cases that are hard to reproduce with real data.
                </p>
              </div>

              <div className="border-l-4 border-orange-500 pl-4">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Keep Mock Data Realistic</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Ensure your mock data closely resembles production data in structure and format to catch real-world issues during testing.
                </p>
              </div>

              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Organize Mock Data by Feature</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Create separate fixture files or helper functions for different features to keep your test code organized and maintainable.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Advanced Patterns</h2>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Custom Commands for Mock Data</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Create reusable Cypress commands for common mocking scenarios:
            </p>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-4 overflow-x-auto">
              <code>{`// cypress/support/commands.js
import { faker } from '@faker-js/faker';

Cypress.Commands.add('mockUsers', (count = 10) => {
  const users = Array.from({ length: count }, () => ({
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar()
  }));

  cy.intercept('GET', '/api/users', {
    statusCode: 200,
    body: { users }
  }).as('getUsers');
});

// Usage in tests
it('should display users', () => {
  cy.mockUsers(20);
  cy.visit('/users');
  cy.wait('@getUsers');
});`}</code>
            </pre>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-white mb-8">
            <h2 className="text-2xl font-bold mb-4">Generate Mock Data for Your Tests</h2>
            <p className="mb-6">
              Our free tool generates realistic mock data that you can use directly in your Cypress tests. Define your schema and get JSON data instantly.
            </p>
            <Link
              href="/"
              className="inline-block bg-white text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Try It Now →
            </Link>
          </div>
        </div>
      </article>
    </div>
    </>
  );
}