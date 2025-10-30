import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Database Seeding: The Complete Developer's Guide",
  description: "Master database seeding for MongoDB, PostgreSQL, MySQL, and more. Learn best practices, automation strategies, and avoid common pitfalls.",
  keywords: ["database seeding", "test data", "mongodb", "postgresql", "mysql", "database testing", "data migration"],
  openGraph: {
    title: "Database Seeding: The Complete Developer's Guide",
    description: "Complete guide to database seeding with practical examples for all major databases",
    type: "article",
    publishedTime: "2025-10-16T00:00:00.000Z",
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
            <span className="text-sm font-semibold px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full">
              Guide
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">15 min read</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">October 16, 2025</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Database Seeding: The Complete Developer&apos;s Guide
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Learn everything about database seeding - from basic concepts to advanced automation strategies for production-ready applications.
          </p>
        </header>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">What is Database Seeding?</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Database seeding is the process of populating a database with initial data. This data can serve multiple purposes:
              development testing, automated testing, demo environments, or providing default application data. Proper seeding
              strategies ensure consistent, reproducible database states across different environments.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Unlike production data, seed data is typically generated or curated specifically for testing and development purposes,
              making it safe to share, version control, and regenerate as needed.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Why Database Seeding Matters</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">1. Consistent Development Environments</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Every developer on your team can work with the same baseline data, reducing &ldquo;works on my machine&rdquo; issues and
                  ensuring consistent behavior across development environments.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">2. Automated Testing</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Integration and end-to-end tests need predictable database states. Seeding ensures tests start with known data,
                  making them reliable and reproducible.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">3. Demo and Staging Environments</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Populate demo environments with realistic data that showcases your application&apos;s features without exposing
                  real user information.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">4. Onboarding New Developers</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  New team members can quickly get a working local environment with data that demonstrates all application features.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Seeding MongoDB</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              MongoDB makes seeding straightforward with its flexible document structure and built-in import tools.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Method 1: Using mongoimport</h3>
            <div className="bg-gray-900 rounded-lg p-4 mb-4 overflow-x-auto">
              <pre className="text-sm text-gray-100"><code>{`# Generate JSON data with our tool, save as users.json

# Import into MongoDB
mongoimport --db myapp --collection users --file users.json --jsonArray

# Or for a single document per line format
mongoimport --db myapp --collection users --file users.json`}</code></pre>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Method 2: Using Node.js Script</h3>
            <div className="bg-gray-900 rounded-lg p-4 mb-4 overflow-x-auto">
              <pre className="text-sm text-gray-100"><code>{`// seed.js
const { MongoClient } = require('mongodb');
const mockData = require('./mockData/users.json');

async function seedDatabase() {
  const client = new MongoClient('mongodb://localhost:27017');

  try {
    await client.connect();
    const db = client.db('myapp');

    // Clear existing data
    await db.collection('users').deleteMany({});

    // Insert seed data
    const result = await db.collection('users').insertMany(mockData);
    console.log(\`\${result.insertedCount} users inserted\`);

  } finally {
    await client.close();
  }
}

seedDatabase().catch(console.error);`}</code></pre>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Method 3: Using Mongoose</h3>
            <div className="bg-gray-900 rounded-lg p-4 mb-4 overflow-x-auto">
              <pre className="text-sm text-gray-100"><code>{`// seed.js
const mongoose = require('mongoose');
const User = require('./models/User');
const mockData = require('./mockData/users.json');

async function seedDatabase() {
  await mongoose.connect('mongodb://localhost:27017/myapp');

  // Clear existing data
  await User.deleteMany({});

  // Insert seed data
  await User.insertMany(mockData);

  console.log('Database seeded successfully');
  await mongoose.disconnect();
}

seedDatabase().catch(console.error);`}</code></pre>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Seeding PostgreSQL & MySQL</h2>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Method 1: SQL INSERT Statements</h3>
            <div className="bg-gray-900 rounded-lg p-4 mb-4 overflow-x-auto">
              <pre className="text-sm text-gray-100"><code>{`-- seed.sql
TRUNCATE TABLE users CASCADE;

INSERT INTO users (id, name, email, created_at) VALUES
  ('550e8400-e29b-41d4-a716-446655440000', 'John Doe', 'john@example.com', NOW()),
  ('6ba7b810-9dad-11d1-80b4-00c04fd430c8', 'Jane Smith', 'jane@example.com', NOW()),
  ('6ba7b811-9dad-11d1-80b4-00c04fd430c8', 'Bob Johnson', 'bob@example.com', NOW());

-- Run with:
-- psql -U username -d database -f seed.sql
-- mysql -u username -p database < seed.sql`}</code></pre>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Method 2: Using Node.js with Knex</h3>
            <div className="bg-gray-900 rounded-lg p-4 mb-4 overflow-x-auto">
              <pre className="text-sm text-gray-100"><code>{`// seeds/001_users.js
const mockUsers = require('../mockData/users.json');

exports.seed = async function(knex) {
  // Clear existing data
  await knex('users').del();

  // Insert seed data
  await knex('users').insert(mockUsers);
};

// Run with: npx knex seed:run`}</code></pre>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Method 3: Using Prisma</h3>
            <div className="bg-gray-900 rounded-lg p-4 mb-4 overflow-x-auto">
              <pre className="text-sm text-gray-100"><code>{`// prisma/seed.ts
import { PrismaClient } from '@prisma/client';
import mockUsers from './mockData/users.json';

const prisma = new PrismaClient();

async function main() {
  // Clear existing data
  await prisma.user.deleteMany({});

  // Insert seed data
  for (const user of mockUsers) {
    await prisma.user.create({
      data: user
    });
  }

  console.log('Database seeded');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());

// package.json
// "prisma": {
//   "seed": "ts-node prisma/seed.ts"
// }`}</code></pre>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Generating Seed Data</h2>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 mb-4">
              <p className="text-gray-800 dark:text-gray-200 font-semibold mb-2">Pro Tip: Use Our Mock Data Generator</p>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                Instead of manually creating seed data, use our free tool to generate realistic datasets in seconds:
              </p>
              <ol className="list-decimal list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1 ml-4">
                <li>Define your schema with the data types you need</li>
                <li>Generate hundreds or thousands of records</li>
                <li>Download as JSON</li>
                <li>Use directly with your database seeding scripts</li>
              </ol>
            </div>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Example schema for a complete user dataset:
            </p>

            <div className="bg-gray-900 rounded-lg p-4 mb-4 overflow-x-auto">
              <pre className="text-sm text-gray-100"><code>{`{
  "id": "uuid",
  "firstName": "firstName",
  "lastName": "lastName",
  "email": "email",
  "phone": "phone",
  "avatar": "avatar",
  "address": "address",
  "city": "city",
  "country": "country",
  "zipCode": "zipCode",
  "company": "company",
  "jobTitle": "jobTitle",
  "status": "status",
  "createdAt": "past",
  "lastLogin": "recent"
}`}</code></pre>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Best Practices</h2>

            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">1. Make Seeding Idempotent</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Running your seed script multiple times should produce the same result. Clear existing data before seeding,
                  or use upsert operations to avoid duplicates.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">2. Handle Foreign Key Relationships</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Seed related tables in the correct order. Parent records must exist before child records that reference them.
                  Use consistent IDs across related seed files.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">3. Use Environment Variables</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Never hardcode database credentials. Use environment variables or configuration files that are not committed
                  to version control.
                </p>
              </div>

              <div className="border-l-4 border-orange-500 pl-4">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">4. Separate Seeds by Purpose</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Create different seed files for different scenarios: minimal data for testing, comprehensive data for development,
                  demo data for presentations.
                </p>
              </div>

              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">5. Never Seed Production</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Add safeguards to prevent accidentally running seed scripts against production databases. Check environment
                  variables and require explicit confirmation.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Automating Seeding in CI/CD</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Integrate database seeding into your CI/CD pipeline for automated testing:
            </p>

            <div className="bg-gray-900 rounded-lg p-4 mb-4 overflow-x-auto">
              <pre className="text-sm text-gray-100"><code>{`# .github/workflows/test.yml
name: Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest

    services:
      postgres:
        image: postgres:15
        env:
          POSTGRES_PASSWORD: postgres
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5

    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3

      - name: Install dependencies
        run: npm install

      - name: Run migrations
        run: npm run migrate

      - name: Seed database
        run: npm run seed

      - name: Run tests
        run: npm test`}</code></pre>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-lg p-8 text-white mb-8">
            <h2 className="text-2xl font-bold mb-4">Generate Your Seed Data Now</h2>
            <p className="mb-6">
              Stop writing seed data manually! Use our free tool to generate production-quality test data in seconds.
            </p>
            <Link
              href="/"
              className="inline-block bg-white text-green-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Create Seed Data →
            </Link>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Conclusion</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Proper database seeding is essential for modern software development. It ensures consistent environments,
              enables automated testing, and accelerates team productivity.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Whether you&apos;re using MongoDB, PostgreSQL, MySQL, or any other database, the principles remain the same:
              generate realistic data, maintain relationships, make it reproducible, and integrate it into your development workflow.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}