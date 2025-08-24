import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

interface BlogCardProps {
  title: string;
  summary: string
  content: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  level?: 'BEGINNER' | 'EXPERT' | 'LEGENDARY';
}

export const BlogCard: React.FC<BlogCardProps> = ({ 
  title, 
  summary,
  content, 
  author, 
  date, 
  category, 
  readTime,
  level = 'BEGINNER'
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup function to reset scroll when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  const getLevelColor = (level: string) => {
    switch(level) {
      case 'LEGENDARY': return 'bg-yellow-500 border-yellow-700 text-black';
      case 'EXPERT': return 'bg-red-500 border-red-700 text-white';
      default: return 'bg-green-500 border-green-700 text-black';
    }
  };

  const getLevelIcon = (level: string) => {
    switch(level) {
      case 'LEGENDARY': return '👑';
      case 'EXPERT': return '🔥';
      default: return '⚡';
    }
  };

  return (
    <article className="bg-gray-100 border-4 border-gray-800 shadow-lg hover:shadow-xl transition-all duration-100 hover:-translate-y-1" style={{imageRendering: 'pixelated'}}>
      {/* Header with Level Badge */}
      <div className="bg-gray-800 p-4 border-b-4 border-gray-900">
        <div className="flex items-center justify-between mb-2">
          <span className={`px-3 py-1 border-4 font-black font-mono text-sm ${getLevelColor(level)}`}>
            {getLevelIcon(level)} {level}
          </span>
          <span className="text-gray-300 font-mono text-sm">📖 {readTime}</span>
        </div>
        <h3 className="text-white font-black font-mono text-lg sm:text-xl leading-tight hover:text-green-400 cursor-pointer transition-colors duration-100">
          {title}
        </h3>
      </div>

      {/* Content */}
      <div className="p-4">
        <p className="text-gray-700 font-mono text-sm sm:text-base leading-relaxed mb-4">
          {summary}
        </p>
        
        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="bg-blue-500 text-white px-2 py-1 border-2 border-blue-700 font-mono text-xs">
            #{category}
          </span>
          <span className="text-gray-600 font-mono text-xs">
            ⚔️ by {author}
          </span>
          <span className="text-gray-500 font-mono text-xs">
            📅 {date}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-green-500 hover:bg-green-400 text-black px-4 py-2 border-4 border-green-700 hover:border-black transition-all duration-100 font-black font-mono text-sm shadow-lg hover:shadow-xl"
          >
            📖 READ QUEST
          </button>
          <button className="bg-gray-500 hover:bg-gray-400 text-white hover:text-black px-3 py-2 border-4 border-gray-700 hover:border-black transition-all duration-100 font-black font-mono text-sm">
            💾 SAVE
          </button>
          <button className="bg-yellow-500 hover:bg-yellow-400 text-black px-3 py-2 border-4 border-yellow-700 hover:border-black transition-all duration-100 font-black font-mono text-sm">
            ⭐
          </button>
        </div>
      </div>

      {/* Modal Popup using Portal */}
      {isModalOpen && mounted && createPortal(
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 backdrop-blur-md backdrop:backdrop-blur-2xl" 
          style={{ imageRendering: 'pixelated' }}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setIsModalOpen(false);
            }
          }}
          onKeyDown={(e) => {
            if (e.key === 'Escape') {
              setIsModalOpen(false);
            }
          }}
          tabIndex={-1}
        >
          <div 
            className="bg-gray-800 border-8 border-green-400 shadow-2xl w-full max-w-4xl max-h-[95vh] sm:max-h-[90vh] overflow-hidden relative animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-black border-b-4 border-green-400 p-4 sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 sm:gap-4 mb-2 flex-wrap">
                    <span className={`px-2 sm:px-3 py-1 border-4 font-black font-mono text-xs sm:text-sm ${getLevelColor(level)}`}>
                      {getLevelIcon(level)} {level}
                    </span>
                    <span className="bg-blue-500 text-white px-2 py-1 border-2 border-blue-700 font-mono text-xs">
                      #{category}
                    </span>
                  </div>
                  <h2 className="font-black font-mono text-lg sm:text-xl lg:text-2xl text-white mb-2 break-words">
                    {title}
                  </h2>
                  <div className="flex items-center gap-2 sm:gap-4 text-green-300 text-xs sm:text-sm flex-wrap">
                    <span>⚔️ {author}</span>
                    <span>📅 {date}</span>
                    <span>📖 {readTime}</span>
                  </div>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="bg-red-600 hover:bg-red-500 text-white px-3 py-2 border-4 border-black hover:border-yellow-400 transition-all duration-100 font-black font-mono text-sm sm:text-lg flex-shrink-0"
                >
                  ✖️
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-4 sm:p-6 overflow-y-auto max-h-[calc(95vh-140px)] sm:max-h-[calc(90vh-120px)] bg-gray-900">
              {/* Summary Section */}
              <div className="bg-green-900 border-4 border-green-500 p-3 sm:p-4 mb-4 sm:mb-6">
                <h3 className="text-green-200 font-black font-mono text-base sm:text-lg mb-2 sm:mb-3">📋 QUEST SUMMARY</h3>
                <p className="text-green-100 font-mono text-sm sm:text-base leading-relaxed">
                  {summary}
                </p>
              </div>

              {/* Content Section */}
              <div className="bg-black border-4 border-gray-600 p-4 sm:p-6">
                <h3 className="text-cyan-400 font-black font-mono text-base sm:text-lg mb-3 sm:mb-4 border-b-2 border-cyan-600 pb-2">
                  📜 FULL CONTENT
                </h3>
                <div className="text-gray-200 font-mono text-sm sm:text-base leading-relaxed whitespace-pre-wrap break-words">
                  {content}
                </div>
              </div>

              {/* Modal Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 sm:mt-6">
                <button className="bg-gray-600 hover:bg-gray-500 text-white px-4 sm:px-6 py-2 sm:py-3 border-4 border-black hover:border-yellow-400 transition-all duration-100 font-black font-mono text-sm w-full sm:w-auto">
                  💾 SAVE QUEST
                </button>
                <button className="bg-yellow-500 hover:bg-yellow-400 text-black px-4 sm:px-6 py-2 sm:py-3 border-4 border-yellow-700 hover:border-black transition-all duration-100 font-black font-mono text-sm w-full sm:w-auto">
                  ⭐ FAVORITE
                </button>
                <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 sm:px-6 py-2 sm:py-3 border-4 border-black hover:border-cyan-400 transition-all duration-100 font-black font-mono text-sm w-full sm:w-auto">
                  🔗 SHARE
                </button>
              </div>
            </div>

            {/* Corner Decorations for Modal */}
            <div className="absolute -top-2 -left-2 w-4 h-4 bg-cyan-400"></div>
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-cyan-400"></div>
            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-yellow-400"></div>
            <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-yellow-400"></div>
          </div>
        </div>,
        document.body
      )}
    </article>
  );
};
