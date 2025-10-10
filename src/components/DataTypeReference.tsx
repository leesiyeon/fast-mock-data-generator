'use client';

import { useState } from 'react';
import { DATA_TYPE_CATEGORIES, searchDataTypes, type DataTypeInfo } from '@/utils/dataTypes';

interface DataTypeReferenceProps {
  onAddType: (typeName: string) => void;
}

export default function DataTypeReference({ onAddType }: DataTypeReferenceProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set(DATA_TYPE_CATEGORIES.map(cat => cat.name))
  );
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleCategory = (categoryName: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(categoryName)) {
      newExpanded.delete(categoryName);
    } else {
      newExpanded.add(categoryName);
    }
    setExpandedCategories(newExpanded);
  };

  const filteredCategories = searchQuery 
    ? [{ 
        icon: '🔍', 
        name: 'Search Results', 
        types: searchDataTypes(searchQuery) 
      }]
    : DATA_TYPE_CATEGORIES;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
      {/* Header */}
      <div 
        className="flex items-center justify-between p-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white flex-shrink-0 cursor-pointer hover:from-purple-700 hover:to-purple-800 transition-all"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-2">
          <span className="text-lg">📚</span>
          <h3 className="font-bold text-sm">Quick Add</h3>
        </div>
        <span className="text-white">
          {isExpanded ? '−' : '+'}
        </span>
      </div>

      {isExpanded && (

      <div className="p-4 flex-1 overflow-hidden flex flex-col min-h-0">
          {/* Search */}
          <div className="mb-3 flex-shrink-0">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="🔍 Search types..."
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
            />
          </div>

          {/* Categories */}
          <div className="space-y-2 flex-1 overflow-y-auto">
            {filteredCategories.map((category) => (
              <div key={category.name} className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                {/* Category Header */}
                <button
                  onClick={() => toggleCategory(category.name)}
                  className="w-full flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{category.icon}</span>
                    <span className="font-semibold text-sm text-gray-800 dark:text-white">
                      {category.name}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      ({category.types.length})
                    </span>
                  </div>
                  <span className="text-gray-500 dark:text-gray-400">
                    {expandedCategories.has(category.name) ? '−' : '+'}
                  </span>
                </button>

                {/* Types List */}
                {expandedCategories.has(category.name) && (
                  <div className="p-2 space-y-1">
                    {category.types.map((type) => (
                      <DataTypeBadge
                        key={type.name}
                        type={type}
                        onAdd={onAddType}
                      />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Help Text */}
          <div className="mt-3 p-2 bg-purple-50 dark:bg-purple-900/20 rounded-lg flex-shrink-0">
            <p className="text-xs text-purple-800 dark:text-purple-300">
              💡 Click any type to add →
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

interface DataTypeBadgeProps {
  type: DataTypeInfo;
  onAdd: (typeName: string) => void;
}

function DataTypeBadge({ type, onAdd }: DataTypeBadgeProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div 
      className="relative group"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <button
        onClick={() => onAdd(type.name)}
        className="w-full flex items-center justify-between p-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded hover:border-purple-500 dark:hover:border-purple-500 hover:shadow-md transition-all text-left group"
      >
        <div className="flex-1 min-w-0">
          <code className="text-xs font-mono font-semibold text-purple-600 dark:text-purple-400">
            {type.name}
          </code>
          <p className="text-xs text-gray-600 dark:text-gray-400 truncate">
            {type.description}
          </p>
        </div>
        <span className="ml-2 text-gray-400 group-hover:text-purple-500 transition-colors">
          ➕
        </span>
      </button>

      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute left-0 right-0 top-full mt-1 z-10 p-2 bg-gray-900 text-white text-xs rounded shadow-lg">
          <div className="font-semibold mb-1">Example:</div>
          <code className="text-green-300">{type.example}</code>
        </div>
      )}
    </div>
  );
}

