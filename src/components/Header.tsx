import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-3 mb-2 hover:opacity-90 transition-opacity">
          <span className="text-4xl">⚡</span>
          <h1 className="text-3xl sm:text-4xl font-bold">
            Fast Mock Data Generator
          </h1>
        </Link>
        <p className="text-blue-100 text-sm sm:text-base ml-0 sm:ml-14">
          Generate realistic test data instantly
        </p>

        {/* Ad Space */}
        <div className="mt-6 bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
          <p className="text-xs text-blue-200">Advertisement</p>
          <div className="h-20 flex items-center justify-center text-blue-200">
            [Google AdSense Ad Banner Area]
          </div>
        </div>
      </div>
    </header>
  );
}

