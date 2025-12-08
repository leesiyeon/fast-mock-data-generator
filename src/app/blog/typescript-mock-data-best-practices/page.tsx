import Link from 'next/link';
import { Metadata } from 'next';
import ArticleStructuredData from '@/components/ArticleStructuredData';

export const metadata: Metadata = {
  title: "TypeScript + Mock Data Best Practices - Type-Safe Testing Guide",
  description: "Learn how to combine TypeScript with mock data generation for type-safe testing. Best practices, patterns, and practical examples for developers.",
  keywords: ["typescript", "mock data", "type safety", "faker.js", "testing", "type definitions"],
  openGraph: {
    title: "TypeScript + Mock Data Best Practices",
    description: "Master type-safe mock data generation with TypeScript",
    type: "article",
    publishedTime: "2025-11-12T00:00:00.000Z",
  }
};

export default function BlogPost() {
  return (
    <>
      <ArticleStructuredData
        title="TypeScript + Mock Data Best Practices - Type-Safe Testing Guide"
        description="Learn how to combine TypeScript with mock data generation for type-safe testing. Best practices, patterns, and practical examples for developers."
        publishedTime="2025-11-12T00:00:00.000Z"
        modifiedTime="2025-11-12T00:00:00.000Z"
        url="https://fast-mock-data-generator.vercel.app/blog/typescript-mock-data-best-practices"
        keywords={["typescript", "mock data", "type safety", "faker.js", "testing", "type definitions"]}
      />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <article className="max-w-4xl mx-auto px-4 py-12">
        <header className="mb-8">
          <Link href="/blog" className="text-blue-600 dark:text-blue-400 hover:underline mb-4 inline-block">
            ← Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-sm font-semibold px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full">
              Best Practices
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">13 min read</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">November 12, 2025</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            TypeScript + Mock Data Best Practices
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Learn how to combine TypeScript with mock data generation for type-safe testing, better developer experience, and more maintainable test code.
          </p>
        </header>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Why TypeScript Matters for Mock Data</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              TypeScript provides compile-time type checking that catches errors before runtime. When combined with mock data generation, TypeScript ensures your test data matches your actual data structures, preventing subtle bugs that could slip through untyped mock data. Type-safe mock data generation means your tests break at compile time when interfaces change, not at runtime or worse, silently passing with incorrect data.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              This approach significantly improves developer experience by providing autocomplete, inline documentation, and immediate feedback when mock data doesn&apos;t match expected types. It also makes refactoring safer and test maintenance easier as your application evolves.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Defining Type-Safe Mock Data Generators</h2>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Basic Type-Safe Factory Functions</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Create factory functions that return properly typed mock data:
            </p>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-4 overflow-x-auto">
              <code>{`import { faker } from '@faker-js/faker';

// Define your types
interface User {
  id: string;
  name: string;
  email: string;
  age: number;
  createdAt: Date;
  role: 'admin' | 'user' | 'guest';
}

// Type-safe factory function
function createMockUser(overrides?: Partial<User>): User {
  return {
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    age: faker.number.int({ min: 18, max: 80 }),
    createdAt: faker.date.past(),
    role: faker.helpers.arrayElement(['admin', 'user', 'guest']),
    ...overrides, // Allow partial overrides
  };
}

// Usage
const user = createMockUser(); // Fully typed as User
const admin = createMockUser({ role: 'admin' }); // Override specific fields`}</code>
            </pre>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Generic Factory Builder</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Create a reusable generic factory builder for maximum type safety:
            </p>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-4 overflow-x-auto">
              <code>{`type Factory<T> = (overrides?: Partial<T>) => T;

function defineFactory<T>(generator: () => T): Factory<T> {
  return (overrides?: Partial<T>) => ({
    ...generator(),
    ...overrides,
  });
}

// Usage
const userFactory = defineFactory<User>(() => ({
  id: faker.string.uuid(),
  name: faker.person.fullName(),
  email: faker.internet.email(),
  age: faker.number.int({ min: 18, max: 80 }),
  createdAt: faker.date.past(),
  role: faker.helpers.arrayElement(['admin', 'user', 'guest'] as const),
}));

const user = userFactory();
const testUser = userFactory({ email: 'test@example.com' });`}</code>
            </pre>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Working with Complex Types</h2>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Nested Objects and Relationships</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-4 overflow-x-auto">
              <code>{`interface Address {
  street: string;
  city: string;
  country: string;
  zipCode: string;
}

interface UserProfile {
  user: User;
  address: Address;
  preferences: {
    newsletter: boolean;
    notifications: boolean;
  };
}

const addressFactory = defineFactory<Address>(() => ({
  street: faker.location.streetAddress(),
  city: faker.location.city(),
  country: faker.location.country(),
  zipCode: faker.location.zipCode(),
}));

const userProfileFactory = defineFactory<UserProfile>(() => ({
  user: userFactory(),
  address: addressFactory(),
  preferences: {
    newsletter: faker.datatype.boolean(),
    notifications: faker.datatype.boolean(),
  },
}));

// Type-safe nested mock data
const profile = userProfileFactory({
  user: { role: 'admin' },
  address: { country: 'USA' }
});`}</code>
            </pre>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Arrays and Collections</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-4 overflow-x-auto">
              <code>{`function createMockArray<T>(
  factory: Factory<T>,
  count: number,
  overrides?: Partial<T>
): T[] {
  return Array.from({ length: count }, () => factory(overrides));
}

// Generate multiple users
const users = createMockArray(userFactory, 10);
const admins = createMockArray(userFactory, 5, { role: 'admin' });

// Type-safe - TypeScript knows users is User[]
users.forEach(user => {
  console.log(user.email); // ✓ Type-safe
  // console.log(user.invalidField); // ✗ TypeScript error
});`}</code>
            </pre>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Advanced Patterns</h2>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Builder Pattern for Complex Objects</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-4 overflow-x-auto">
              <code>{`class UserBuilder {
  private user: User;

  constructor() {
    this.user = userFactory();
  }

  withRole(role: User['role']): this {
    this.user.role = role;
    return this;
  }

  withEmail(email: string): this {
    this.user.email = email;
    return this;
  }

  withAge(age: number): this {
    this.user.age = age;
    return this;
  }

  build(): User {
    return { ...this.user };
  }
}

// Fluent, type-safe API
const admin = new UserBuilder()
  .withRole('admin')
  .withEmail('admin@example.com')
  .build();

const youngUser = new UserBuilder()
  .withAge(21)
  .build();`}</code>
            </pre>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Conditional Type Generation</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-4 overflow-x-auto">
              <code>{`type UserRole = 'admin' | 'user' | 'guest';

interface BaseUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

interface AdminUser extends BaseUser {
  role: 'admin';
  permissions: string[];
  department: string;
}

interface RegularUser extends BaseUser {
  role: 'user';
  subscription: 'free' | 'pro';
}

interface GuestUser extends BaseUser {
  role: 'guest';
  expiresAt: Date;
}

type User = AdminUser | RegularUser | GuestUser;

function createMockUserByRole<R extends UserRole>(
  role: R
): Extract<User, { role: R }> {
  const base = {
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    role,
  };

  switch (role) {
    case 'admin':
      return {
        ...base,
        role: 'admin',
        permissions: faker.helpers.arrayElements(['read', 'write', 'delete']),
        department: faker.commerce.department(),
      } as Extract<User, { role: R }>;
    case 'user':
      return {
        ...base,
        role: 'user',
        subscription: faker.helpers.arrayElement(['free', 'pro']),
      } as Extract<User, { role: R }>;
    case 'guest':
      return {
        ...base,
        role: 'guest',
        expiresAt: faker.date.future(),
      } as Extract<User, { role: R }>;
    default:
      throw new Error(\`Unknown role: \${role}\`);
  }
}

// Type-safe role-specific users
const admin = createMockUserByRole('admin');
console.log(admin.permissions); // ✓ TypeScript knows this is AdminUser

const user = createMockUserByRole('user');
console.log(user.subscription); // ✓ TypeScript knows this is RegularUser`}</code>
            </pre>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Integration with Testing Frameworks</h2>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Jest with TypeScript</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-4 overflow-x-auto">
              <code>{`// users.test.ts
import { userFactory } from './factories';
import { UserService } from './UserService';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    service = new UserService();
  });

  it('should validate user email', () => {
    const user = userFactory({ email: 'invalid-email' });

    // TypeScript ensures user has correct shape
    expect(() => service.validateUser(user)).toThrow();
  });

  it('should accept valid admin user', () => {
    const admin = userFactory({
      role: 'admin',
      email: 'admin@example.com'
    });

    expect(service.validateUser(admin)).toBe(true);
  });
});`}</code>
            </pre>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Vitest with Type Assertions</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-4 overflow-x-auto">
              <code>{`import { describe, it, expect, assertType } from 'vitest';

describe('Type-safe mock factories', () => {
  it('generates correctly typed users', () => {
    const user = userFactory();

    // Runtime assertion
    expect(user).toHaveProperty('id');
    expect(user).toHaveProperty('email');

    // Compile-time type assertion
    assertType<User>(user);
  });
});`}</code>
            </pre>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Best Practices</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Centralize Factory Definitions</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Keep all factory functions in a dedicated factories directory or file. This makes them easy to find, maintain, and reuse across tests.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Use Strict TypeScript Settings</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Enable strict mode in tsconfig.json to catch more type errors. Set strictNullChecks, noImplicitAny, and strictFunctionTypes to true.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Avoid Type Assertions</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Minimize use of &quot;as&quot; type assertions. If you need them frequently, your factory design might need improvement. Let TypeScript infer types when possible.
                </p>
              </div>

              <div className="border-l-4 border-orange-500 pl-4">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Share Types Between App and Tests</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Import types from your application code rather than duplicating them in tests. This ensures test data stays synchronized with production types.
                </p>
              </div>

              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Document Factory Behaviors</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Add JSDoc comments to factory functions explaining their behavior, especially for complex generators or those with important defaults.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Common Pitfalls</h2>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <span className="text-red-500 font-bold mr-2">✗</span>
                <span><strong>Loose typing with any:</strong> Avoid using &quot;any&quot; type in factories. It defeats the purpose of TypeScript and can hide bugs.</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 font-bold mr-2">✗</span>
                <span><strong>Not updating factories when types change:</strong> When you modify interface definitions, update corresponding factories immediately.</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 font-bold mr-2">✗</span>
                <span><strong>Over-complicated factories:</strong> Keep factories simple and focused. Complex logic should live in your application code, not test utilities.</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 font-bold mr-2">✗</span>
                <span><strong>Ignoring type errors in tests:</strong> Test code should have the same type safety standards as production code.</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-white mb-8">
            <h2 className="text-2xl font-bold mb-4">Generate Type-Safe Mock Data</h2>
            <p className="mb-6">
              Our tool generates JSON mock data that you can easily integrate with your TypeScript types and factory functions.
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