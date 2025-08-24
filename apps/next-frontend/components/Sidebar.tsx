interface Blog {
  title: string;
  content: string;
  summary: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  level?: 'BEGINNER' | 'EXPERT' | 'LEGENDARY';
}

interface SidebarProps {
  blogs?: Blog[];
}

export const Sidebar = ({ blogs = [] }: SidebarProps) => {
  const getCategoryCount = (categoryName: string) => {
    return blogs.filter(blog => blog.category === categoryName).length;
  };

  const categories = [
    { name: 'GAMING', displayName: 'GAMING', },
    { name: 'CODE_MAGIC', displayName: 'CODE MAGIC', },
    { name: 'PIXEL_ART', displayName: 'PIXEL ART', },
    { name: 'TECH_LORE', displayName: 'TECH LORE', }
  ].map(cat => ({
    ...cat,
    count: getCategoryCount(cat.name)
  }));

  return (
    <aside className="space-y-6" style={{ imageRendering: 'pixelated' }}>
      {/* Quest Categories */}
      <div className="bg-gray-800 border-4 border-gray-900 shadow-lg">
        <div className="bg-green-600 border-b-4 border-green-800 p-4">
          <h2 className="text-white font-black font-mono text-lg">🗂️ QUEST CATEGORIES</h2>
        </div>
        <div className="p-4 space-y-2">
          {categories.map((category) => (
            <button
              key={category.name}
              className="w-full flex justify-between items-center bg-gray-700 hover:bg-gray-600 text-white px-3 py-2 border-2 border-gray-600 hover:border-gray-400 transition-all duration-100 font-mono text-sm"
            >
              <span>{category.displayName}</span>
              <span className="bg-green-500 text-black px-2 py-1 border border-green-700 font-black text-xs">
                {category.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Player Stats */}
      {/* <div className="bg-blue-800 border-4 border-blue-900 shadow-lg">
        <div className="bg-blue-600 border-b-4 border-blue-800 p-4">
          <h2 className="text-white font-black font-mono text-lg">📊 PLAYER STATS</h2>
        </div>
        <div className="p-4 space-y-3">
          <div className="flex justify-between text-blue-100 font-mono text-sm">
            <span>🏆 LEVEL:</span>
            <span className="font-black">42</span>
          </div>
          <div className="flex justify-between text-blue-100 font-mono text-sm">
            <span>⚡ XP:</span>
            <span className="font-black">13,370</span>
          </div>
          <div className="flex justify-between text-blue-100 font-mono text-sm">
            <span>🎯 QUESTS:</span>
            <span className="font-black">156</span>
          </div>
          <div className="w-full bg-blue-900 border-2 border-blue-700 h-4">
            <div className="bg-yellow-500 border-2 border-yellow-700 h-full" style={{ width: '73%' }}></div>
          </div>
          <p className="text-blue-200 font-mono text-xs text-center">NEXT: LEGENDARY CODER</p>
        </div>
      </div> */}

      {/* Featured Quest */}
      {/* <div className="bg-purple-800 border-4 border-purple-900 shadow-lg">
        <div className="bg-purple-600 border-b-4 border-purple-800 p-4">
          <h2 className="text-white font-black font-mono text-lg">⭐ FEATURED QUEST</h2>
        </div>
        <div className="p-4">
          <h3 className="text-purple-100 font-black font-mono text-sm mb-2">
            🔥 MASTER THE REACT REALM
          </h3>
          <p className="text-purple-200 font-mono text-xs mb-3">
            Embark on an epic journey through the React kingdom and master the ancient hooks magic!
          </p>
          <button className="w-full bg-yellow-500 hover:bg-yellow-400 text-black px-4 py-2 border-4 border-yellow-700 hover:border-black transition-all duration-100 font-black font-mono text-sm">
            🚀 START NOW
          </button>
        </div>
      </div> */}

      {/* Latest Achievements */}
      {/* <div className="bg-yellow-800 border-4 border-yellow-900 shadow-lg">
        <div className="bg-yellow-600 border-b-4 border-yellow-800 p-4">
          <h2 className="text-black font-black font-mono text-lg">🏆 RECENT ACHIEVEMENTS</h2>
        </div>
        <div className="p-4 space-y-2">
          {[
            { achievement: 'Code Master', user: 'PixelHero' },
            { achievement: 'Bug Slayer', user: 'DevNinja' },
            { achievement: 'Pixel Artist', user: 'RetroGamer' }
          ].map((item, index) => (
            <div key={index} className="bg-yellow-700 border-2 border-yellow-900 p-2">
              <p className="text-yellow-100 font-mono text-xs">
                🎖️ <span className="font-black">{item.user}</span> earned <span className="font-black">{item.achievement}</span>!
              </p>
            </div>
          ))}
        </div>
      </div> */}
    </aside>
  );
};
