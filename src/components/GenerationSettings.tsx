'use client';

interface GenerationSettingsProps {
  count: number;
  onCountChange: (count: number) => void;
  onGenerate: () => void;
  isGenerating: boolean;
}

export default function GenerationSettings({
  count,
  onCountChange,
  onGenerate,
  isGenerating
}: GenerationSettingsProps) {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-xl p-6">
      <div className="flex flex-col lg:flex-row items-center gap-4">
        {/* 왼쪽: 제목 */}
        <div className="flex-shrink-0">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            🎲 Generate Mock Data
          </h2>
        </div>

        {/* 중앙: 개수 입력 */}
        <div className="flex-1 flex items-center gap-3 bg-white/10 rounded-lg px-4 py-3">
          <label className="text-white font-medium whitespace-nowrap">
            Items:
          </label>
          <input
            type="number"
            min="1"
            max="1000"
            value={count}
            onChange={(e) => onCountChange(Math.min(1000, Math.max(1, parseInt(e.target.value) || 1)))}
            className="w-24 px-3 py-2 border-0 rounded-md focus:ring-2 focus:ring-white bg-white text-gray-900 font-semibold text-center"
          />
          <input
            type="range"
            min="1"
            max="1000"
            value={count}
            onChange={(e) => onCountChange(parseInt(e.target.value))}
            className="flex-1"
          />
          <span className="text-white font-medium whitespace-nowrap text-sm">
            / 1,000
          </span>
        </div>

        {/* 오른쪽: Generate 버튼 */}
        <button
          onClick={onGenerate}
          disabled={isGenerating}
          className="flex-shrink-0 bg-white hover:bg-gray-100 text-blue-700 font-bold py-4 px-8 rounded-lg transition-all transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2 shadow-lg min-w-[200px]"
          >
          {isGenerating ? (
            <>
              <svg className="animate-spin h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Generating...
            </>
          ) : (
            <>
              <span className="text-2xl">🎲</span>
              <span>GENERATE</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}

