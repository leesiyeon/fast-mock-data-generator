import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "JSON Schema Tutorial: From Basics to Advanced Techniques",
  description: "Master JSON Schema with practical examples. Learn how to create robust data structures, validate JSON, and document your APIs effectively.",
  keywords: ["JSON Schema", "JSON", "data validation", "API documentation", "schema design"],
  openGraph: {
    title: "JSON Schema Tutorial: From Basics to Advanced Techniques",
    description: "Master JSON Schema with practical examples and advanced techniques",
    type: "article",
    publishedTime: "2025-10-05T00:00:00.000Z",
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
            <span className="text-sm text-gray-500 dark:text-gray-400">October 5, 2025</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            JSON Schema Tutorial: From Basics to Advanced Techniques
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Master JSON Schema with practical examples and learn how to create robust data structures for your applications.
          </p>
        </header>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">What is JSON Schema?</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              JSON Schema is a vocabulary that allows you to annotate and validate JSON documents. It provides a contract for your JSON data, describing the structure, type constraints, and validation rules that your data must follow. Think of it as a blueprint for your JSON data.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              JSON Schema is used for validating API requests and responses, documenting APIs, generating mock data, and ensuring data consistency across systems. It's language-independent, making it perfect for microservices and distributed systems.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Basic Schema Structure</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Every JSON Schema is itself a JSON object. At its simplest, a schema can just define the type of data it expects. The most basic schema is an empty object, which validates any JSON value.
            </p>
            <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto">
              <pre className="text-gray-800 dark:text-gray-200">{`{
  "type": "string"
}`}</pre>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              This schema simply states that the data must be a string. JSON Schema supports several primitive types: string, number, integer, boolean, null, array, and object.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Defining Object Schemas</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Objects are the most common structure in JSON. Here's how to define a schema for an object with specific properties:
            </p>
            <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto">
              <pre className="text-gray-800 dark:text-gray-200">{`{
  "type": "object",
  "properties": {
    "name": {
      "type": "string"
    },
    "age": {
      "type": "integer",
      "minimum": 0
    },
    "email": {
      "type": "string",
      "format": "email"
    }
  },
  "required": ["name", "email"]
}`}</pre>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              This schema defines an object with three properties. The "required" array specifies which properties must be present. Age is optional, but name and email are required.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Working with Arrays</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Arrays can contain items of a single type or mixed types. You can also specify minimum and maximum item counts:
            </p>
            <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto">
              <pre className="text-gray-800 dark:text-gray-200">{`{
  "type": "array",
  "items": {
    "type": "string"
  },
  "minItems": 1,
  "maxItems": 10,
  "uniqueItems": true
}`}</pre>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              This schema requires an array of strings with at least 1 and at most 10 items, where all items must be unique.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">String Validation</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Strings support various validation options including length constraints, patterns, and formats:
            </p>
            <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto">
              <pre className="text-gray-800 dark:text-gray-200">{`{
  "type": "string",
  "minLength": 3,
  "maxLength": 50,
  "pattern": "^[A-Za-z]+$"
}`}</pre>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Common format values include: "email", "uri", "date-time", "ipv4", "ipv6", and "uuid". These provide built-in validation for common data types.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Number Validation</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Numbers and integers support range validation and divisibility checks:
            </p>
            <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto">
              <pre className="text-gray-800 dark:text-gray-200">{`{
  "type": "number",
  "minimum": 0,
  "maximum": 100,
  "multipleOf": 0.01
}`}</pre>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              This is perfect for validating percentages or prices. Use "exclusiveMinimum" and "exclusiveMaximum" when you need strict inequality.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Enum Values</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Use enum to restrict values to a specific set:
            </p>
            <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto">
              <pre className="text-gray-800 dark:text-gray-200">{`{
  "type": "string",
  "enum": ["pending", "active", "completed", "cancelled"]
}`}</pre>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Enums are perfect for status fields, categories, or any field with a limited set of valid values.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Nested Objects and References</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              For complex schemas, you can nest objects and use references to avoid repetition:
            </p>
            <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto">
              <pre className="text-gray-800 dark:text-gray-200">{`{
  "type": "object",
  "properties": {
    "user": {
      "$ref": "#/definitions/user"
    },
    "address": {
      "$ref": "#/definitions/address"
    }
  },
  "definitions": {
    "user": {
      "type": "object",
      "properties": {
        "name": { "type": "string" },
        "email": { "type": "string", "format": "email" }
      }
    },
    "address": {
      "type": "object",
      "properties": {
        "street": { "type": "string" },
        "city": { "type": "string" }
      }
    }
  }
}`}</pre>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              References make schemas more maintainable and reusable, especially in large API definitions.
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-white mb-8">
            <h2 className="text-2xl font-bold mb-4">Generate Data from Your JSON Schema</h2>
            <p className="mb-6">
              Our tool makes it easy to generate mock data that matches your JSON schema. Define your schema and get realistic data instantly.
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
  );
}

