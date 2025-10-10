export interface DataTypeInfo {
  name: string;
  description: string;
  example: string;
}

export interface DataTypeCategory {
  icon: string;
  name: string;
  types: DataTypeInfo[];
}

export const DATA_TYPE_CATEGORIES: DataTypeCategory[] = [
  {
    icon: '🧑',
    name: 'Personal Information',
    types: [
      { name: 'name', description: 'Full name', example: 'John Doe' },
      { name: 'firstName', description: 'First name only', example: 'John' },
      { name: 'lastName', description: 'Last name only', example: 'Doe' },
      { name: 'email', description: 'Email address', example: 'john.doe@example.com' },
      { name: 'phone', description: 'Phone number', example: '+1-555-123-4567' },
      { name: 'avatar', description: 'Avatar image URL', example: 'https://avatars.example.com/u/1' },
    ]
  },
  {
    icon: '📍',
    name: 'Location',
    types: [
      { name: 'address', description: 'Street address', example: '123 Main Street' },
      { name: 'city', description: 'City name', example: 'New York' },
      { name: 'country', description: 'Country name', example: 'United States' },
      { name: 'zipCode', description: 'Postal code', example: '10001' },
    ]
  },
  {
    icon: '🏢',
    name: 'Business',
    types: [
      { name: 'company', description: 'Company name', example: 'Tech Corp Inc.' },
      { name: 'jobTitle', description: 'Job position', example: 'Senior Developer' },
    ]
  },
  {
    icon: '🆔',
    name: 'Identifiers',
    types: [
      { name: 'uuid', description: 'UUID v4 format', example: '550e8400-e29b-41d4-a716-446655440000' },
      { name: 'id', description: 'UUID identifier', example: '7b3c2f1e-9d4a-4c8b-a5e6-1f2d3c4b5a6e' },
      { name: 'mongoId', description: 'MongoDB ObjectId', example: '507f1f77bcf86cd799439011' },
    ]
  },
  {
    icon: '🔢',
    name: 'Numbers',
    types: [
      { name: 'number', description: 'Random integer', example: '42' },
      { name: 'price', description: 'Price/amount', example: '19.99' },
      { name: 'rating', description: 'Rating score (1-5)', example: '4.5' },
      { name: 'smallNumber', description: 'Small integer (1-100)', example: '23' },
      { name: 'bigNumber', description: 'Large integer', example: '123456' },
      { name: 'float', description: 'Decimal number', example: '3.14159' },
    ]
  },
  {
    icon: '📅',
    name: 'Date & Time',
    types: [
      { name: 'date', description: 'Recent date (ISO)', example: '2025-01-15T10:30:00.000Z' },
      { name: 'dateTime', description: 'Date with time', example: '2025-10-10T14:25:30.000Z' },
      { name: 'past', description: 'Past date', example: '2020-05-20T08:15:00.000Z' },
      { name: 'future', description: 'Future date', example: '2026-12-31T23:59:59.000Z' },
    ]
  },
  {
    icon: '✅',
    name: 'Boolean',
    types: [
      { name: 'boolean', description: 'True or false', example: 'true' },
    ]
  },
  {
    icon: '💬',
    name: 'Text Content',
    types: [
      { name: 'title', description: 'Article/post title', example: 'Getting Started with React' },
      { name: 'sentence', description: 'Single sentence', example: 'The quick brown fox jumps.' },
      { name: 'paragraph', description: 'Text paragraph', example: 'Lorem ipsum dolor sit amet...' },
      { name: 'text', description: 'Long text content', example: 'Lorem ipsum dolor sit amet, consectetur...' },
      { name: 'word', description: 'Single word', example: 'hello' },
      { name: 'words', description: 'Multiple words', example: 'hello world example' },
    ]
  },
  {
    icon: '🛍️',
    name: 'E-commerce',
    types: [
      { name: 'productName', description: 'Product name', example: 'Wireless Bluetooth Headphones' },
      { name: 'productDescription', description: 'Product details', example: 'High-quality sound with noise cancellation' },
      { name: 'category', description: 'Product category', example: 'Electronics' },
      { name: 'color', description: 'Color name', example: 'Navy Blue' },
      { name: 'tags', description: 'Array of tags', example: '["electronics", "audio", "wireless"]' },
    ]
  },
  {
    icon: '🌐',
    name: 'Internet',
    types: [
      { name: 'url', description: 'Website URL', example: 'https://example.com' },
      { name: 'username', description: 'Username', example: 'john_doe_123' },
      { name: 'domain', description: 'Domain name', example: 'example.com' },
      { name: 'ip', description: 'IP address', example: '192.168.1.1' },
    ]
  },
  {
    icon: '📊',
    name: 'Status & State',
    types: [
      { name: 'status', description: 'Generic status', example: 'active' },
      { name: 'orderStatus', description: 'Order state', example: 'shipped' },
    ]
  },
];

// Flatten all types for search
export const getAllDataTypes = (): DataTypeInfo[] => {
  return DATA_TYPE_CATEGORIES.flatMap(category => category.types);
};

// Search types by name or description
export const searchDataTypes = (query: string): DataTypeInfo[] => {
  const lowerQuery = query.toLowerCase();
  return getAllDataTypes().filter(
    type => 
      type.name.toLowerCase().includes(lowerQuery) ||
      type.description.toLowerCase().includes(lowerQuery)
  );
};


