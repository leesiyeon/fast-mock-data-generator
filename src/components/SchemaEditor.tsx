'use client';

import { useState } from 'react';

interface SchemaEditorProps {
  schema: string;
  onChange: (schema: string) => void;
  onLoadTemplate: (template: string) => void;
  onAddField?: (fieldName: string, fieldType: string) => void;
}

const TEMPLATES = {
  'User Profile': `{
  "id": "uuid",
  "name": "name",
  "email": "email",
  "avatar": "avatar",
  "phone": "phone",
  "address": "address",
  "createdAt": "date"
}`,
  'Product Catalog': `{
  "productId": "uuid",
  "productName": "productName",
  "description": "productDescription",
  "price": "price",
  "category": "category",
  "inStock": "boolean",
  "rating": "rating"
}`,
  'Blog Posts': `{
  "postId": "uuid",
  "title": "title",
  "content": "paragraph",
  "author": "name",
  "tags": "tags",
  "publishedAt": "date",
  "views": "number"
}`,
  'E-commerce Order': `{
  "orderId": "uuid",
  "customerName": "name",
  "email": "email",
  "orderDate": "date",
  "totalAmount": "price",
  "status": "orderStatus",
  "items": "number"
}`
};

export default function SchemaEditor({ schema, onChange, onLoadTemplate, onAddField }: SchemaEditorProps) {
  const [selectedTemplate, setSelectedTemplate] = useState<string>('');

  const handleTemplateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const templateName = e.target.value;
    setSelectedTemplate(templateName);
    if (templateName) {
      onLoadTemplate(TEMPLATES[templateName as keyof typeof TEMPLATES]);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 h-full flex flex-col">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
          📝 Build Your Schema
        </h2>
      </div>

      {/* Template Selection */}
      <div className="mb-3 flex-shrink-0">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Quick Start Templates
        </label>
        <select
          value={selectedTemplate}
          onChange={handleTemplateChange}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
        >
          <option value="">-- Select Template --</option>
          {Object.keys(TEMPLATES).map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>
      </div>

      {/* Code Editor */}
      <div className="flex-1 relative">
        <textarea
          value={schema}
          onChange={(e) => onChange(e.target.value)}
          className="w-full h-full p-4 font-mono text-sm border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
          placeholder="Enter your JSON schema..."
          spellCheck={false}
        />
      </div>

      {/* Supported Types Hint */}
      <div className="mt-3 p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex-shrink-0">
        <p className="text-xs text-blue-800 dark:text-blue-300">
          💡 <strong>Tip:</strong> Click types in the left panel or use templates above to build your schema
        </p>
      </div>
    </div>
  );
}

