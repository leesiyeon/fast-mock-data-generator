import Link from 'next/link';
import { Metadata } from 'next';
import ArticleStructuredData from '@/components/ArticleStructuredData';

export const metadata: Metadata = {
  title: "GraphQL API Testing with Fake Data - Complete Guide",
  description: "Master GraphQL API testing with mock data. Learn mocking strategies, resolver testing, and integration testing with practical examples.",
  keywords: ["graphql", "api testing", "mock data", "apollo", "resolvers", "graphql testing"],
  openGraph: {
    title: "GraphQL API Testing with Fake Data",
    description: "Complete guide to testing GraphQL APIs with mock data",
    type: "article",
    publishedTime: "2025-11-13T00:00:00.000Z",
  }
};

export default function BlogPost() {
  return (
    <>
      <ArticleStructuredData
        title="GraphQL API Testing with Fake Data - Complete Guide"
        description="Master GraphQL API testing with mock data. Learn mocking strategies, resolver testing, and integration testing with practical examples."
        publishedTime="2025-11-13T00:00:00.000Z"
        modifiedTime="2025-11-13T00:00:00.000Z"
        url="https://fast-mock-data-generator.vercel.app/blog/graphql-api-testing-fake-data"
        keywords={["graphql", "api testing", "mock data", "apollo", "resolvers", "graphql testing"]}
      />
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
            <span className="text-sm text-gray-500 dark:text-gray-400">15 min read</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">November 13, 2025</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            GraphQL API Testing with Fake Data
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Learn how to effectively test GraphQL APIs using mock data for faster, more reliable testing of queries, mutations, and resolvers.
          </p>
        </header>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Why Mock Data for GraphQL Testing?</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              GraphQL APIs present unique testing challenges compared to REST APIs. With GraphQL, clients can request exactly the data they need, which means the same endpoint can return vastly different responses. Testing every possible query combination with real data would be impractical and slow. Mock data allows you to test your GraphQL resolvers, type definitions, and client queries independently and efficiently.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Using mock data in GraphQL testing enables you to verify schema correctness, test authorization logic, simulate error conditions, and ensure your resolvers handle edge cases properly—all without requiring a real database or external services.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Testing GraphQL Resolvers</h2>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Basic Resolver Testing</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Test resolvers in isolation using mock data sources:
            </p>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-4 overflow-x-auto">
              <code>{`import { faker } from '@faker-js/faker';

// Mock data source
const mockUsers = Array.from({ length: 10 }, () => ({
  id: faker.string.uuid(),
  name: faker.person.fullName(),
  email: faker.internet.email(),
  createdAt: faker.date.past().toISOString(),
}));

// Resolver
const resolvers = {
  Query: {
    users: () => mockUsers,
    user: (_, { id }) => mockUsers.find(u => u.id === id),
  },
};

// Test
describe('User resolvers', () => {
  it('should return all users', () => {
    const result = resolvers.Query.users();
    expect(result).toHaveLength(10);
    expect(result[0]).toHaveProperty('email');
  });

  it('should return specific user by id', () => {
    const userId = mockUsers[0].id;
    const result = resolvers.Query.user(null, { id: userId });
    expect(result?.id).toBe(userId);
  });
});`}</code>
            </pre>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Testing with Apollo Server</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-4 overflow-x-auto">
              <code>{`import { ApolloServer } from '@apollo/server';
import { faker } from '@faker-js/faker';

const typeDefs = \`#graphql
  type User {
    id: ID!
    name: String!
    email: String!
    posts: [Post!]!
  }

  type Post {
    id: ID!
    title: String!
    content: String!
    author: User!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User
  }
\`;

// Mock data
const mockUsers = Array.from({ length: 5 }, () => ({
  id: faker.string.uuid(),
  name: faker.person.fullName(),
  email: faker.internet.email(),
}));

const mockPosts = Array.from({ length: 20 }, () => ({
  id: faker.string.uuid(),
  title: faker.lorem.sentence(),
  content: faker.lorem.paragraphs(),
  authorId: faker.helpers.arrayElement(mockUsers).id,
}));

const resolvers = {
  Query: {
    users: () => mockUsers,
    user: (_, { id }) => mockUsers.find(u => u.id === id),
  },
  User: {
    posts: (user) => mockPosts.filter(p => p.authorId === user.id),
  },
  Post: {
    author: (post) => mockUsers.find(u => u.id === post.authorId),
  },
};

describe('GraphQL API', () => {
  let server;

  beforeAll(async () => {
    server = new ApolloServer({ typeDefs, resolvers });
  });

  it('should return users with their posts', async () => {
    const response = await server.executeOperation({
      query: \`
        query GetUsers {
          users {
            id
            name
            email
            posts {
              id
              title
            }
          }
        }
      \`,
    });

    expect(response.body.singleResult.errors).toBeUndefined();
    expect(response.body.singleResult.data?.users).toHaveLength(5);
  });
});`}</code>
            </pre>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Client-Side GraphQL Testing</h2>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Mocking with Apollo Client</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Use MockedProvider to test React components that use GraphQL queries:
            </p>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-4 overflow-x-auto">
              <code>{`import { MockedProvider } from '@apollo/client/testing';
import { render, screen, waitFor } from '@testing-library/react';
import { faker } from '@faker-js/faker';
import { UserList, GET_USERS } from './UserList';

describe('UserList component', () => {
  it('should display users from query', async () => {
    const mockUsers = Array.from({ length: 3 }, () => ({
      id: faker.string.uuid(),
      name: faker.person.fullName(),
      email: faker.internet.email(),
    }));

    const mocks = [
      {
        request: {
          query: GET_USERS,
        },
        result: {
          data: {
            users: mockUsers,
          },
        },
      },
    ];

    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <UserList />
      </MockedProvider>
    );

    await waitFor(() => {
      expect(screen.getByText(mockUsers[0].name)).toBeInTheDocument();
    });
  });

  it('should handle loading state', () => {
    const mocks = [
      {
        request: { query: GET_USERS },
        result: { data: { users: [] } },
        delay: 100, // Simulate network delay
      },
    ];

    render(
      <MockedProvider mocks={mocks}>
        <UserList />
      </MockedProvider>
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('should handle error state', async () => {
    const mocks = [
      {
        request: { query: GET_USERS },
        error: new Error('Failed to fetch users'),
      },
    ];

    render(
      <MockedProvider mocks={mocks}>
        <UserList />
      </MockedProvider>
    );

    await waitFor(() => {
      expect(screen.getByText(/error/i)).toBeInTheDocument();
    });
  });
});`}</code>
            </pre>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Testing Mutations</h2>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-4 overflow-x-auto">
              <code>{`import { faker } from '@faker-js/faker';
import { CREATE_USER } from './mutations';

describe('User mutations', () => {
  it('should create a new user', async () => {
    const newUser = {
      name: faker.person.fullName(),
      email: faker.internet.email(),
    };

    const mocks = [
      {
        request: {
          query: CREATE_USER,
          variables: { input: newUser },
        },
        result: {
          data: {
            createUser: {
              id: faker.string.uuid(),
              ...newUser,
              createdAt: new Date().toISOString(),
            },
          },
        },
      },
    ];

    const { result } = renderHook(
      () => useMutation(CREATE_USER),
      {
        wrapper: ({ children }) => (
          <MockedProvider mocks={mocks}>
            {children}
          </MockedProvider>
        ),
      }
    );

    await act(async () => {
      const [createUser] = result.current;
      await createUser({ variables: { input: newUser } });
    });

    await waitFor(() => {
      expect(result.current[1].data?.createUser.email).toBe(newUser.email);
    });
  });
});`}</code>
            </pre>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Advanced Testing Patterns</h2>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Testing with Variables</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-4 overflow-x-auto">
              <code>{`it('should filter users by role', async () => {
  const adminUsers = Array.from({ length: 3 }, () => ({
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    role: 'ADMIN',
  }));

  const mocks = [
    {
      request: {
        query: GET_USERS,
        variables: { role: 'ADMIN' },
      },
      result: {
        data: { users: adminUsers },
      },
    },
  ];

  // Test implementation
});`}</code>
            </pre>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Testing Pagination</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-4 overflow-x-auto">
              <code>{`it('should handle pagination correctly', async () => {
  const allUsers = Array.from({ length: 50 }, () => ({
    id: faker.string.uuid(),
    name: faker.person.fullName(),
  }));

  const firstPageMock = {
    request: {
      query: GET_USERS,
      variables: { first: 10, after: null },
    },
    result: {
      data: {
        users: {
          edges: allUsers.slice(0, 10).map(user => ({ node: user })),
          pageInfo: {
            hasNextPage: true,
            endCursor: 'cursor-10',
          },
        },
      },
    },
  };

  const secondPageMock = {
    request: {
      query: GET_USERS,
      variables: { first: 10, after: 'cursor-10' },
    },
    result: {
      data: {
        users: {
          edges: allUsers.slice(10, 20).map(user => ({ node: user })),
          pageInfo: {
            hasNextPage: true,
            endCursor: 'cursor-20',
          },
        },
      },
    },
  };

  const mocks = [firstPageMock, secondPageMock];

  // Test pagination behavior
});`}</code>
            </pre>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Best Practices</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Use Realistic Mock Data</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Generate mock data that closely matches production data structure and relationships. This helps catch schema mismatches and type errors.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Test Error Scenarios</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Mock error responses, network failures, and partial data scenarios to ensure your application handles all GraphQL error types gracefully.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Leverage GraphQL Code Generation</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Use tools like GraphQL Code Generator to create TypeScript types from your schema, ensuring type-safe mock data that matches your API.
                </p>
              </div>

              <div className="border-l-4 border-orange-500 pl-4">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Test Field Resolvers</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Don&apos;t just test top-level queries. Test nested field resolvers to ensure complex data relationships work correctly.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-white mb-8">
            <h2 className="text-2xl font-bold mb-4">Generate GraphQL Mock Data</h2>
            <p className="mb-6">
              Create realistic mock data that matches your GraphQL schema. Perfect for testing queries, mutations, and subscriptions.
            </p>
            <Link
              href="/"
              className="inline-block bg-white text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Start Generating →
            </Link>
          </div>
        </div>
      </article>
    </div>
    </>
  );
}