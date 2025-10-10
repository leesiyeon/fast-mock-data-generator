'use client';

import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import toast from 'react-hot-toast';
import Header from '@/components/Header';
import SchemaEditor from '@/components/SchemaEditor';
import GenerationSettings from '@/components/GenerationSettings';
import DataViewer from '@/components/DataViewer';
import DataTypeReference from '@/components/DataTypeReference';
import StructuredData from '@/components/StructuredData';
import { generateMockData } from '@/utils/dataGenerator';

const DEFAULT_SCHEMA = `{
  "id": "uuid",
  "name": "name",
  "email": "email",
  "phone": "phone",
  "createdAt": "date"
}`;

export default function Home() {
  const [schema, setSchema] = useState(DEFAULT_SCHEMA);
  const [count, setCount] = useState(10);
  const [generatedData, setGeneratedData] = useState('[]');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    
    // UI 피드백을 위한 짧은 딜레이 (실제로는 매우 빠름)
    setTimeout(() => {
      try {
        const data = generateMockData(schema, count);
        setGeneratedData(data);
        toast.success(`${count} items generated successfully! 🎉`, {
          duration: 3000,
        });
      } catch (error) {
        toast.error(error instanceof Error ? error.message : 'An error occurred while generating data.', {
          duration: 4000,
        });
      } finally {
        setIsGenerating(false);
      }
    }, 300);
  };

  const handleLoadTemplate = (template: string) => {
    setSchema(template);
    toast.success('Template loaded successfully!');
  };

  const handleAddField = (typeName: string) => {
    try {
      // Parse current schema
      const currentSchema = JSON.parse(schema);
      
      // Generate a unique field name
      let fieldName = typeName;
      let counter = 1;
      while (currentSchema[fieldName]) {
        fieldName = `${typeName}${counter}`;
        counter++;
      }
      
      // Add new field
      currentSchema[fieldName] = typeName;
      
      // Update schema with pretty print
      setSchema(JSON.stringify(currentSchema, null, 2));
      toast.success(`Added "${fieldName}" field!`, { duration: 2000 });
    } catch (error) {
      toast.error('Invalid schema format. Please check your JSON.', { duration: 3000 });
    }
  };

  return (
    <>
      <StructuredData />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Toaster 
        position="top-center"
        toastOptions={{
          className: '',
          duration: 3000,
          style: {
            background: '#363636',
            color: '#fff',
          },
          success: {
            duration: 3000,
          },
        }}
      />
      
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-6">
        {/* Step 1: Build Your Schema */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
          {/* 메인: 스키마 에디터 (70%) */}
          <div className="lg:col-span-2 h-[500px]">
            <SchemaEditor 
              schema={schema}
              onChange={setSchema}
              onLoadTemplate={handleLoadTemplate}
            />
          </div>

          {/* 사이드: 빠른 추가 패널 (30%) */}
          <div className="h-[500px]">
            <DataTypeReference onAddType={handleAddField} />
          </div>
        </div>

        {/* Step 2: Generate Data - 크고 눈에 띄는 액션 바 */}
        <div className="mb-4">
          <GenerationSettings
            count={count}
            onCountChange={setCount}
            onGenerate={handleGenerate}
            isGenerating={isGenerating}
          />
        </div>

        {/* Step 3: View Results */}
        <div className="w-full h-[400px]">
          <DataViewer data={generatedData} />
        </div>

        {/* Bottom Ad Space */}
        <div className="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Advertisement</p>
          <div className="h-24 flex items-center justify-center text-gray-400 dark:text-gray-500 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded">
            [Google AdSense Ad Banner Area]
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-12 py-8 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
            {/* About Column */}
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-3">Fast Mock Data Generator</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Free mock data generator for developers worldwide. Generate realistic test data instantly in your browser.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-3">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/blog" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-3">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-6 border-t border-gray-200 dark:border-gray-700 text-center text-sm text-gray-600 dark:text-gray-400">
            <p>© 2025 Fast Mock Data Generator. Made with ⚡ by Developers for Developers.</p>
          </div>
        </div>
      </footer>
      </div>
    </>
  );
}
