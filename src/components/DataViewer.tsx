'use client';

import { useState } from 'react';
import toast from 'react-hot-toast';

interface DataViewerProps {
  data: string;
}

export default function DataViewer({ data }: DataViewerProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(data);
      setCopied(true);
      toast.success('Copied to clipboard! 📋');
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error('Failed to copy.');
    }
  };

  const handleDownload = () => {
    try {
      const blob = new Blob([data], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `mock-data-${Date.now()}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      toast.success('File downloaded! 💾');
    } catch (err) {
      toast.error('Failed to download.');
    }
  };

  const isEmpty = !data || data === '[]';

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 h-full flex flex-col">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
          📊 Generated Data
        </h2>
        {!isEmpty && (
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Ready to use! 🎉
          </span>
        )}
      </div>

      {/* JSON Viewer */}
      <div className="flex-1 relative overflow-hidden mb-3 min-h-0">
        <pre className="w-full h-full p-4 font-mono text-sm border border-gray-300 dark:border-gray-600 rounded-lg overflow-auto bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
          {isEmpty ? (
            <span className="text-gray-400 dark:text-gray-500">
              Define your schema and click &apos;Generate Data&apos; button.
            </span>
          ) : (
            data
          )}
        </pre>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <button
          onClick={handleCopy}
          disabled={isEmpty}
          className="flex-1 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-semibold py-3 px-4 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          <span className="text-xl">{copied ? '✅' : '📋'}</span>
          {copied ? 'Copied!' : 'Copy'}
        </button>
        
        <button
          onClick={handleDownload}
          disabled={isEmpty}
          className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          <span className="text-xl">💾</span>
          Download
        </button>
      </div>
    </div>
  );
}

