import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import axios from 'axios';

export const Header = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    summary: '',
    content: '',
    author: '',
    category: 'TECH_LORE',
    level: 'BEGINNER',
    readTime: ''
  });

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isCreateModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isCreateModalOpen]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const resetForm = () => {
    setFormData({
      title: '',
      summary: '',
      content: '',
      author: '',
      category: 'TECH_LORE',
      level: 'BEGINNER',
      readTime: ''
    });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const response = await axios.post('http://localhost:3000/api/v1/blogs/create-blog', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      if (response.status === 201) {
        alert('⚔️ Quest Created Successfully!');
        resetForm();
        setIsCreateModalOpen(false);
        // Optionally refresh the page or update the blog list
        window.location.reload();
      }
    } catch (error) {
      console.error('Error creating blog:', error);
      alert('❌ Failed to create quest. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <header className="sticky top-0 z-50 bg-black border-b-8 border-green-400 shadow-2xl overflow-hidden" style={{ imageRendering: 'pixelated' }}>
      {/* Pixel Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="grid grid-cols-32 h-full w-full">
          {Array.from({ length: 128 }).map((_, i) => (
            <div key={i} className="border border-green-600 opacity-30"></div>
          ))}
        </div>
      </div>

      {/* Scanline Effect */}
      <div className="absolute inset-0">
        <div className="h-full bg-gradient-to-b from-transparent via-green-400 to-transparent opacity-10 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 py-4 relative z-10">
        <div className="flex items-center justify-between">
          {/* Pixelated Logo Section */}
          <div className="flex items-center space-x-4">
            {/* Enhanced Pixel Art Logo */}

            {/* Brand Text */}
            <div className="flex flex-col">
              <h1 className="text-green-300 font-black text-2xl md:text-3xl lg:text-4xl font-mono tracking-wider hover:text-green-100 transition-colors duration-200 cursor-pointer relative">
                <span className="bg-black border-2 border-green-400 px-3 py-1 inline-block shadow-xl hover:border-yellow-400 hover:shadow-2xl hover:scale-105 transform transition-all duration-200">
                  BLOGIFY
                </span>
                {/* Pixel corners for title */}
                <div className="absolute -top-1 -left-1 w-2 h-2 bg-cyan-400"></div>
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400"></div>
              </h1>
              <div className="flex items-center gap-2 mt-1">
                <div className="w-2 h-2 bg-green-400"></div>
                <h2 className="text-green-400 text-xs md:text-sm font-mono tracking-widest bg-gray-900 border border-green-600 px-2 py-1 shadow-lg">
                  BLOG ARCHIVES v2.0
                </h2>
                <div className="w-2 h-2 bg-green-400"></div>
              </div>
            </div>
          </div>

          {/* Desktop Pixel Navigation */}
          <nav className="hidden lg:flex items-center space-x-3">
            <div className="flex items-center bg-gray-900 border-2 border-green-500 p-2 shadow-xl">
              <div className="flex space-x-2">
                <button 
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    window.location.reload();
                  }}
                  className="group bg-red-600 hover:bg-red-500 text-white hover:text-black px-4 py-3 border-2 border-black hover:border-yellow-400 transition-all duration-150 font-black font-mono text-sm shadow-lg hover:shadow-xl transform hover:-translate-y-1 relative overflow-hidden"
                >
                  <span className="absolute inset-0 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
                  <span className="relative z-10">HOME</span>
                </button>
                <button 
                  onClick={() => setIsCreateModalOpen(true)}
                  className="group bg-blue-600 hover:bg-blue-500 text-white hover:text-black px-4 py-3 border-2 border-black hover:border-yellow-400 transition-all duration-150 font-black font-mono text-sm shadow-lg hover:shadow-xl transform hover:-translate-y-1 relative overflow-hidden"
                >
                  <span className="absolute inset-0 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
                  <span className="relative z-10">CREATE QUEST</span>
                </button>
                <button 
                  onClick={() => {
                    const blogSection = document.querySelector('#blog-section') || document.querySelector('main');
                    if (blogSection) {
                      blogSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    } else {
                      // If no specific section, scroll to a reasonable position
                      window.scrollTo({ top: window.innerHeight * 0.8, behavior: 'smooth' });
                    }
                  }}
                  className="group bg-purple-600 hover:bg-purple-500 text-white hover:text-black px-4 py-3 border-2 border-black hover:border-yellow-400 transition-all duration-150 font-black font-mono text-sm shadow-lg hover:shadow-xl transform hover:-translate-y-1 relative overflow-hidden"
                >
                  <span className="absolute inset-0 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
                  <span className="relative z-10">VIEW QUEST</span>
                </button>
              </div>

              {/* Pixel Search Bar */}
              {/* <div className="flex items-center ml-4 bg-black border-2 border-green-400 p-2">
                <div className="flex space-x-3">
                  <input
                    type="text"
                    className="bg-gray-800 border-2 border-green-600 px-3 py-2 font-mono text-sm text-green-300 placeholder-green-600 focus:bg-black focus:border-cyan-400 focus:text-cyan-300 focus:outline-none w-32 shadow-inner"
                    placeholder="SEARCH..."
                  />
                  <button className="bg-yellow-500 hover:bg-yellow-400 text-black hover:text-gray-900 px-3 py-2 border-2 border-black font-black font-mono text-sm shadow-lg hover:shadow-xl transition-all duration-100 transform hover:scale-105">
                    Go!
                  </button>
                </div>
              </div> */}
            </div>
          </nav>

          {/* Mobile Pixel Menu Button */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="bg-gray-800 hover:bg-gray-700 text-green-400 hover:text-green-300 px-4 py-4 border-2 border-green-500 hover:border-green-400 transition-all duration-150 relative group"
            >
              {/* Pixel hamburger menu */}
              <div className="space-y-1">
                <div className="w-6 h-1 bg-current group-hover:bg-yellow-400 transition-colors"></div>
                <div className="w-6 h-1 bg-current group-hover:bg-yellow-400 transition-colors"></div>
                <div className="w-6 h-1 bg-current group-hover:bg-yellow-400 transition-colors"></div>
              </div>
              {/* Corner pixels */}
              <div className="absolute -top-1 -left-1 w-2 h-2 bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
          </div>
        </div>

        {/* Mobile Pixel Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-4 pt-4 bg-gray-900 border-4 border-green-500 p-4 shadow-2xl">
            <div className="space-y-3">
              <button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  window.location.reload();
                }}
                className="w-full text-left bg-red-600 hover:bg-red-500 text-white hover:text-black px-4 py-3 border-2 border-black hover:border-yellow-400 transition-all duration-150 font-black font-mono text-sm transform hover:-translate-y-1 hover:scale-105"
              >
                HOME
              </button>
              <button 
                onClick={() => {
                  setIsCreateModalOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="w-full text-left bg-blue-600 hover:bg-blue-500 text-white hover:text-black px-4 py-3 border-2 border-black hover:border-yellow-400 transition-all duration-150 font-black font-mono text-sm transform hover:-translate-y-1 hover:scale-105"
              >
                CREATE QUEST
              </button>
              <button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  const blogSection = document.querySelector('#blog-section') || document.querySelector('main');
                  if (blogSection) {
                    blogSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  } else {
                    // If no specific section, scroll to a reasonable position
                    window.scrollTo({ top: window.innerHeight * 0.8, behavior: 'smooth' });
                  }
                }}
                className="w-full text-left bg-purple-600 hover:bg-purple-500 text-white hover:text-black px-4 py-3 border-2 border-black hover:border-yellow-400 transition-all duration-150 font-black font-mono text-sm transform hover:-translate-y-1 hover:scale-105"
              >
                VIEW QUEST
              </button>

              {/* Mobile Search */}
              {/* <div className="pt-3 border-t-2 border-green-600">
                <div className="flex bg-black border-2 border-green-400 p-2">
                  <input
                    type="text"
                    className="flex-1 bg-gray-800 border-2 border-green-600 px-3 py-2 font-mono text-sm text-green-300 placeholder-green-600 focus:bg-black focus:border-cyan-400 focus:text-cyan-300 focus:outline-none shadow-inner"
                    placeholder="SEARCH ARCHIVES..."
                  />
                  <button className="bg-yellow-500 hover:bg-yellow-400 text-black px-3 py-2 border-2 border-black font-black font-mono text-sm ml-2 transform hover:scale-105 transition-all duration-100">
                    GO!
                  </button>
                </div>
              </div> */}
            </div>
          </nav>
        )}
      </div>

      {/* Create Quest Modal */}
      {isCreateModalOpen && mounted && createPortal(
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 backdrop-blur-md " 
          style={{ imageRendering: 'pixelated' }}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setIsCreateModalOpen(false);
            }
          }}
          onKeyDown={(e) => {
            if (e.key === 'Escape') {
              setIsCreateModalOpen(false);
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
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="bg-blue-500 border-4 border-blue-700 text-white px-3 py-1 font-black font-mono text-sm">
                    🗡️ NEW QUEST
                  </span>
                  <h2 className="font-black font-mono text-xl sm:text-2xl text-white">
                    CREATE NEW ADVENTURE
                  </h2>
                </div>
                <button
                  onClick={() => setIsCreateModalOpen(false)}
                  className="bg-red-600 hover:bg-red-500 text-white px-3 py-2 border-4 border-black hover:border-yellow-400 transition-all duration-100 font-black font-mono text-sm sm:text-lg"
                >
                  ✖️
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-4 sm:p-6 overflow-y-auto max-h-[calc(95vh-140px)] sm:max-h-[calc(90vh-120px)] bg-gray-900 relative">
              <form onSubmit={onSubmit} className="space-y-6">
                {/* Loading Overlay */}
                {isLoading && (
                  <div className="absolute inset-0 backdrop:backdrop-blur-2xl flex items-center justify-center z-50 border-8 border-yellow-400">
                    <div className="bg-gray-900 border-4 border-green-400 p-8 text-center">
                      <div className="flex flex-col items-center gap-4">
                        <div className="w-12 h-12 border-4 border-green-400 border-t-yellow-400 rounded-full animate-spin"></div>
                        <h3 className="text-green-400 font-black font-mono text-lg">🚀 CREATING QUEST...</h3>
                        <p className="text-green-300 font-mono text-sm">Please wait while your adventure is forged!</p>
                      </div>
                    </div>
                  </div>
                )}
                {/* Title Field */}
                <div className="bg-black border-4 border-gray-600 p-4">
                  <label className="block text-green-400 font-black font-mono text-sm mb-3">
                    📝 QUEST TITLE *
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 border-4 border-green-600 px-4 py-3 font-mono text-sm text-green-300 placeholder-green-600 focus:bg-black focus:border-cyan-400 focus:text-cyan-300 focus:outline-none"
                    placeholder="Enter your epic quest title..."
                    required
                  />
                </div>

                {/* Author and Read Time Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-black border-4 border-gray-600 p-4">
                    <label className="block text-green-400 font-black font-mono text-sm mb-3">
                      ⚔️ AUTHOR NAME *
                    </label>
                    <input
                      type="text"
                      name="author"
                      value={formData.author}
                      onChange={handleInputChange}
                      className="w-full bg-gray-800 border-4 border-green-600 px-4 py-3 font-mono text-sm text-green-300 placeholder-green-600 focus:bg-black focus:border-cyan-400 focus:text-cyan-300 focus:outline-none"
                      placeholder="Quest Master Name"
                      required
                    />
                  </div>
                  <div className="bg-black border-4 border-gray-600 p-4">
                    <label className="block text-green-400 font-black font-mono text-sm mb-3">
                       READ TIME *
                    </label>
                    <input
                      type="text"
                      name="readTime"
                      value={formData.readTime}
                      onChange={handleInputChange}
                      className="w-full bg-gray-800 border-4 border-green-600 px-4 py-3 font-mono text-sm text-green-300 placeholder-green-600 focus:bg-black focus:border-cyan-400 focus:text-cyan-300 focus:outline-none"
                      placeholder="5 min read"
                      required
                    />
                  </div>
                </div>

                {/* Category and Level Dropdowns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-black border-4 border-gray-600 p-4">
                    <label className="block text-green-400 font-black font-mono text-sm mb-3">
                      CATEGORY *
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full bg-gray-800 border-4 border-green-600 px-4 py-3 font-mono text-sm text-green-300 focus:bg-black focus:border-cyan-400 focus:text-cyan-300 focus:outline-none"
                      required
                    >
                      <option value="TECH_LORE"> TECH LORE</option>
                      <option value="CODE_MAGIC"> CODE MAGIC</option>
                      <option value="PIXEL_ART"> PIXEL ART</option>
                      <option value="GAMING">GAMING</option>
                    </select>
                  </div>
                  <div className="bg-black border-4 border-gray-600 p-4">
                    <label className="block text-green-400 font-black font-mono text-sm mb-3">
                       DIFFICULTY LEVEL *
                    </label>
                    <select
                      name="level"
                      value={formData.level}
                      onChange={handleInputChange}
                      className="w-full bg-gray-800 border-4 border-green-600 px-4 py-3 font-mono text-sm text-green-300 focus:bg-black focus:border-cyan-400 focus:text-cyan-300 focus:outline-none"
                      required
                    >
                      <option value="BEGINNER">BEGINNER</option>
                      <option value="EXPERT"> EXPERT</option>
                      <option value="LEGENDARY"> LEGENDARY</option>
                    </select>
                  </div>
                </div>

                {/* Summary Field */}
                <div className="bg-black border-4 border-gray-600 p-4">
                  <label className="block text-green-400 font-black font-mono text-sm mb-3">
                    QUEST SUMMARY *
                  </label>
                  <textarea
                    name="summary"
                    value={formData.summary}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full bg-gray-800 border-4 border-green-600 px-4 py-3 font-mono text-sm text-green-300 placeholder-green-600 focus:bg-black focus:border-cyan-400 focus:text-cyan-300 focus:outline-none resize-none"
                    placeholder="Brief description of your quest..."
                    required
                  />
                </div>

                {/* Content Field */}
                <div className="bg-black border-4 border-gray-600 p-4">
                  <label className="block text-green-400 font-black font-mono text-sm mb-3">
                    FULL QUEST CONTENT *
                  </label>
                  <textarea
                    name="content"
                    value={formData.content}
                    onChange={handleInputChange}
                    rows={10}
                    className="w-full bg-gray-800 border-4 border-green-600 px-4 py-3 font-mono text-sm text-green-300 placeholder-green-600 focus:bg-black focus:border-cyan-400 focus:text-cyan-300 focus:outline-none resize-none"
                    placeholder="Write your full quest content here..."
                    required
                  />
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`${
                      isLoading 
                        ? 'bg-gray-600 cursor-not-allowed' 
                        : 'bg-green-600 hover:bg-green-500'
                    } text-white px-6 py-3 border-4 border-black ${
                      !isLoading && 'hover:border-yellow-400'
                    } transition-all duration-100 font-black font-mono text-sm w-full sm:w-auto flex items-center justify-center gap-2`}
                  >
                    {isLoading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-yellow-400 rounded-full animate-spin"></div>
                        ⚡ CREATING...
                      </>
                    ) : (
                      '⚔️ CREATE QUEST'
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={resetForm}
                    disabled={isLoading}
                    className={`${
                      isLoading 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-yellow-500 hover:bg-yellow-400'
                    } text-black px-6 py-3 border-4 border-yellow-700 ${
                      !isLoading && 'hover:border-black'
                    } transition-all duration-100 font-black font-mono text-sm w-full sm:w-auto`}
                  >
                    🔄 RESET FORM
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsCreateModalOpen(false)}
                    disabled={isLoading}
                    className={`${
                      isLoading 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-gray-600 hover:bg-gray-500'
                    } text-white px-6 py-3 border-4 border-black ${
                      !isLoading && 'hover:border-red-400'
                    } transition-all duration-100 font-black font-mono text-sm w-full sm:w-auto`}
                  >
                    ❌ CANCEL
                  </button>
                </div>
              </form>
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
    </header>
  )
}