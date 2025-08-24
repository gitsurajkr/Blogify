interface FilterBarProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  selectedLevel: string;
  onLevelChange: (level: string) => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  selectedCategory,
  onCategoryChange,
  selectedLevel,
  onLevelChange
}) => {
  const categories = ['ALL', 'GAMING', 'CODE_MAGIC', 'PIXEL_ART', 'TECH_LORE', 'REVIEWS'];
  const levels = ['ALL', 'BEGINNER', 'EXPERT', 'LEGENDARY'];

  return (
    <div className="bg-gray-800 border-4 border-gray-900 shadow-lg p-4 mb-8" style={{imageRendering: 'pixelated'}}>
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Category Filter */}
        <div className="flex-1">
          <label className="block text-white font-black font-mono text-sm mb-2">
            🗂️ QUEST TYPE:
          </label>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => onCategoryChange(category)}
                className={`px-3 py-2 border-4 transition-all duration-100 font-black font-mono text-xs ${
                  selectedCategory === category
                    ? 'bg-green-500 border-green-700 text-black'
                    : 'bg-gray-600 border-gray-700 text-white hover:bg-gray-500'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Level Filter */}
        <div className="flex-1">
          <label className="block text-white font-black font-mono text-sm mb-2">
            ⚡ DIFFICULTY:
          </label>
          <div className="flex flex-wrap gap-2">
            {levels.map((level) => {
              const getLevelColor = (lvl: string, isSelected: boolean) => {
                if (isSelected) {
                  switch(lvl) {
                    case 'LEGENDARY': return 'bg-yellow-500 border-yellow-700 text-black';
                    case 'EXPERT': return 'bg-red-500 border-red-700 text-white';
                    case 'BEGINNER': return 'bg-green-500 border-green-700 text-black';
                    default: return 'bg-blue-500 border-blue-700 text-white';
                  }
                }
                return 'bg-gray-600 border-gray-700 text-white hover:bg-gray-500';
              };

              const getLevelIcon = (lvl: string) => {
                switch(lvl) {
                  case 'LEGENDARY': return '👑';
                  case 'EXPERT': return '🔥';
                  case 'BEGINNER': return '⚡';
                  default: return '🎯';
                }
              };

              return (
                <button
                  key={level}
                  onClick={() => onLevelChange(level)}
                  className={`px-3 py-2 border-4 transition-all duration-100 font-black font-mono text-xs ${
                    getLevelColor(level, selectedLevel === level)
                  }`}
                >
                  {getLevelIcon(level)} {level}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="mt-4 pt-4 border-t-2 border-gray-700">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="SEARCH FOR EPIC ADVENTURES..."
            className="flex-1 bg-gray-700 border-4 border-gray-600 focus:border-green-500 px-4 py-3 text-white font-mono text-sm focus:outline-none placeholder-gray-400"
          />
          <button className="bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-3 border-4 border-yellow-700 hover:border-black transition-all duration-100 font-black font-mono text-sm">
            🔍 SEARCH
          </button>
        </div>
      </div>
    </div>
  );
};
