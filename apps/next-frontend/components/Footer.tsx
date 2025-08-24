export const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t-8 border-gray-800 shadow-xl py-8" style={{imageRendering: 'pixelated'}}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-green-400 border-4 border-green-600 flex items-center justify-center">
                <span className="text-green-900 font-black text-xl font-mono">B</span>
              </div>
              <h3 className="text-green-400 font-black font-mono text-xl">BLOGIFY</h3>
            </div>
            <p className="text-gray-400 font-mono text-sm leading-relaxed">
              Your legendary source for epic gaming adventures, coding quests, and pixel-perfect wisdom.
            </p>
            {/* <div className="flex space-x-2">
              <button className="bg-blue-600 hover:bg-blue-500 text-white p-2 border-4 border-blue-800 hover:border-blue-600 transition-all duration-100">
                📘
              </button>
              <button className="bg-sky-500 hover:bg-sky-400 text-white p-2 border-4 border-sky-700 hover:border-sky-600 transition-all duration-100">
                🐦
              </button>
              <button className="bg-purple-600 hover:bg-purple-500 text-white p-2 border-4 border-purple-800 hover:border-purple-600 transition-all duration-100">
                📺
              </button>
              <button className="bg-orange-600 hover:bg-orange-500 text-white p-2 border-4 border-orange-800 hover:border-orange-600 transition-all duration-100">
                📷
              </button>
            </div> */}
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-black font-mono text-lg border-b-2 border-gray-700 pb-2">
              🗺️ QUICK QUESTS
            </h3>
            <ul className="space-y-2">
              {['Home Base', 'All Adventures', 'About Guild', 'Join Party', 'Contact NPCs'].map((link) => (
                <li key={link}>
                  <button className="text-gray-400 hover:text-green-400 font-mono text-sm transition-colors duration-100 hover:bg-gray-800 px-2 py-1 border-2 border-transparent hover:border-gray-600">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="text-white font-black font-mono text-lg border-b-2 border-gray-700 pb-2">
              SKILL TREES
            </h3>
            <ul className="space-y-2">
              {['Gaming Lore', 'Code Magic', 'Pixel Arts', 'Tech Reviews', 'Developer Tales'].map((category) => (
                <li key={category}>
                  <button className="text-gray-400 hover:text-blue-400 font-mono text-sm transition-colors duration-100 hover:bg-gray-800 px-2 py-1 border-2 border-transparent hover:border-gray-600">
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-white font-black font-mono text-lg border-b-2 border-gray-700 pb-2">
              GUILD UPDATES
            </h3>
            <p className="text-gray-400 font-mono text-sm">
              Subscribe for legendary updates and exclusive quest rewards!
            </p>
            <div className="space-y-2">
              <input
                type="email"
                placeholder="YOUR@EMAIL.COM"
                className="w-full bg-gray-800 border-4 border-gray-700 focus:border-green-500 px-3 py-2 text-white font-mono text-sm focus:outline-none"
              />
              <button className="w-full bg-green-500 hover:bg-green-400 text-black px-4 py-2 border-4 border-green-700 hover:border-black transition-all duration-100 font-black font-mono text-sm">
                🚀 JOIN GUILD
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t-4 border-gray-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <p className="text-gray-500 font-mono text-sm">
                © 2025 BLOGIFY GUILD. ALL QUESTS RESERVED.
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="text-gray-500 hover:text-green-400 font-mono text-sm transition-colors duration-100">
                 Privacy Quest
              </button>
              <button className="text-gray-500 hover:text-green-400 font-mono text-sm transition-colors duration-100">
                Terms of Service
              </button>
              <button className="text-gray-500 hover:text-green-400 font-mono text-sm transition-colors duration-100">
                Cookie Policy
              </button>
            </div>
          </div>
          
          <div className="text-center mt-4">
            <p className="text-gray-600 font-mono text-xs">
              🎮 CRAFTED WITH ❤️ BY Suraj • POWERED BY NEXT.JS MAGIC ⚡
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
