export const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center py-12">
      <div className="text-center">
        <div className="bg-green-600 border-4 border-green-800 p-8 animate-pulse">
          <div className="text-green-100 font-black font-mono text-2xl mb-4">
             LOADING QUEST DATA 
          </div>
          <div className="flex justify-center space-x-1 mb-4">
            <div className="w-4 h-4 bg-green-400 border-2 border-green-800 animate-bounce delay-0"></div>
            <div className="w-4 h-4 bg-green-400 border-2 border-green-800 animate-bounce delay-100"></div>
            <div className="w-4 h-4 bg-green-400 border-2 border-green-800 animate-bounce delay-200"></div>
          </div>
          <div className="text-green-300 font-mono text-sm">
            🎮 PREPARING YOUR ADVENTURE...
          </div>
        </div>
      </div>
    </div>
  );
};

export const EmptyState = () => {
  return (
    <div className="text-center py-12">
      <div className="bg-gray-800 border-4 border-gray-900 p-8 max-w-md mx-auto">
        <div className="text-6xl mb-4">🔍</div>
        <h3 className="text-white font-black font-mono text-xl mb-2">
          NO QUESTS FOUND!
        </h3>
        <p className="text-gray-400 font-mono text-sm mb-6">
          Your search didn't uncover any epic adventures. Try different quest parameters!
        </p>
        <button className="bg-green-500 hover:bg-green-400 text-black px-6 py-3 border-4 border-green-700 hover:border-black transition-all duration-100 font-black font-mono text-sm">
          🔄 RESET FILTERS
        </button>
      </div>
    </div>
  );
};
