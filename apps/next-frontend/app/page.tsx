'use client';

import React from 'react';
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { BlogCard } from "@/components/BlogCard";
import { Sidebar } from "@/components/Sidebar";
import { Footer } from "@/components/Footer";
import { FilterBar } from "@/components/FilterBar";
import { LoadingSpinner } from "@/components/UIComponents";
import { useState, useEffect } from "react";
import axios from "axios";


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

// API Base URL (you can move this to environment variables)
const API_BASE_URL = 'https://blogify-l8cl.onrender.com';

// API Functions
const fetchBlogs = async (): Promise<Blog[]> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/v1/blogs/get-blogs`, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    // Adjust based on your API response structure
    if (response.status === 200 && response.data.blogs) {
      return response.data.blogs;
    }
    return [];
  } catch (error) {
    console.error('Error fetching blogs:', error);
    throw new Error('Failed to fetch blogs');
  }
};

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [selectedLevel, setSelectedLevel] = useState('ALL');
  const [isLoading, setIsLoading] = useState(true);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [error, setError] = useState<string | null>(null);
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage] = useState(6); // Number of blogs per page

  // Fetch blogs on component mount
  useEffect(() => {
    const loadBlogs = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        const data = await fetchBlogs(); 
        setBlogs(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        console.error('Failed to load blogs:', err);
      } finally {
        setIsLoading(false);
      }
    };

    loadBlogs();
  }, []);

  const filteredBlogs = blogs.filter((blog: Blog) => {
    const categoryMatch = selectedCategory === 'ALL' || blog.category === selectedCategory;
    const levelMatch = selectedLevel === 'ALL' || blog.level === selectedLevel;
    return categoryMatch && levelMatch;
  });

  // Pagination calculations
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
  const startIndex = (currentPage - 1) * blogsPerPage;
  const endIndex = startIndex + blogsPerPage;
  const currentBlogs = filteredBlogs.slice(startIndex, endIndex);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, selectedLevel]);

  // Pagination handlers
  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1);
    }
  };

  // Generate page numbers for display
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      // Show all pages if total is less than max visible
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Show pages with ellipsis logic
      if (currentPage <= 3) {
        // Show first few pages
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        // Show last few pages
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        // Show middle pages
        pages.push(1);
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  return (
    <div className="min-h-screen bg-gray-200" style={{ imageRendering: 'pixelated' }}>
     
      <Header />
      <Hero />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-3">
            {/* Filter Bar */}
            <FilterBar
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              selectedLevel={selectedLevel}
              onLevelChange={setSelectedLevel}
            />

            {/* Content Header */}
            <div id="blog-section" className="bg-gray-800 border-4 border-gray-900 p-4 mb-6">
              <h2 className="text-white font-black font-mono text-xl sm:text-2xl mb-2">
                🎮 LATEST ADVENTURES
              </h2>
              <p className="text-gray-400 font-mono text-sm">
                Discover epic quests, legendary tutorials, and pixel-perfect wisdom from our guild of digital adventurers!
              </p>
              <div className="flex items-center gap-4 mt-3 text-gray-500 font-mono text-xs">
                <span>📊 Showing {currentBlogs.length} of {filteredBlogs.length} quests</span>
                <span>🎯 Category: {selectedCategory}</span>
                <span>⚡ Level: {selectedLevel}</span>
                {totalPages > 1 && (
                  <span>📄 Page {currentPage} of {totalPages}</span>
                )}
              </div>
            </div>

            {/* Blog Grid */}
            {error ? (
              <div className="bg-red-900 border-4 border-red-500 p-6 text-center">
                <p className="text-red-200 font-mono text-lg mb-4">🚨 ERROR LOADING BLOGS 🚨</p>
                <p className="text-red-300 font-mono text-sm mb-4">{error}</p>
                <button 
                  onClick={() => window.location.reload()} 
                  className="bg-red-600 hover:bg-red-500 text-white px-4 py-2 border-2 border-black font-mono text-sm"
                >
                  🔄 RETRY
                </button>
              </div>
            ) : isLoading ? (
              <LoadingSpinner />
            ) : filteredBlogs.length === 0 ? (
              <div className="bg-gray-800 border-4 border-gray-600 p-6 text-center">
                <p className="text-gray-300 font-mono text-lg">📭 NO BLOGS FOUND</p>
                <p className="text-gray-400 font-mono text-sm mt-2">Try adjusting your filters</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {currentBlogs.map((blog: Blog, index: number) => (
                  <BlogCard key={startIndex + index} {...blog} />
                ))}
              </div>
            )}

            {/* Dynamic Pagination */}
            {totalPages > 1 && (
              <div className="mt-8 flex justify-center">
                <div className="bg-gray-800 border-4 border-gray-900 p-4">
                  <div className="flex items-center space-x-2 flex-wrap justify-center gap-2">
                    {/* Previous Button */}
                    <button 
                      onClick={goToPreviousPage}
                      disabled={currentPage === 1}
                      className={`px-4 py-2 border-4 transition-all duration-100 font-black font-mono text-sm ${
                        currentPage === 1
                          ? 'bg-gray-700 text-gray-500 border-gray-800 cursor-not-allowed'
                          : 'bg-gray-600 hover:bg-gray-500 text-white border-gray-700 hover:border-gray-500'
                      }`}
                    >
                      ◀️ PREV
                    </button>

                    {/* Page Numbers */}
                    {getPageNumbers().map((pageNum, index) => (
                      <React.Fragment key={index}>
                        {pageNum === '...' ? (
                          <span className="px-2 py-2 text-gray-500 font-mono text-sm">...</span>
                        ) : (
                          <button
                            onClick={() => goToPage(pageNum as number)}
                            className={`px-4 py-2 border-4 transition-all duration-100 font-black font-mono text-sm ${
                              currentPage === pageNum
                                ? 'bg-green-500 text-black border-green-700'
                                : 'bg-gray-600 hover:bg-gray-500 text-white border-gray-700 hover:border-gray-500'
                            }`}
                          >
                            {pageNum}
                          </button>
                        )}
                      </React.Fragment>
                    ))}

                    {/* Next Button */}
                    <button 
                      onClick={goToNextPage}
                      disabled={currentPage === totalPages}
                      className={`px-4 py-2 border-4 transition-all duration-100 font-black font-mono text-sm ${
                        currentPage === totalPages
                          ? 'bg-gray-700 text-gray-500 border-gray-800 cursor-not-allowed'
                          : 'bg-gray-600 hover:bg-gray-500 text-white border-gray-700 hover:border-gray-500'
                      }`}
                    >
                      ▶️ NEXT
                    </button>
                  </div>
                  
                  {/* Page Info */}
                  <div className="text-center mt-3 text-gray-400 font-mono text-xs">
                    📊 Showing {startIndex + 1}-{Math.min(endIndex, filteredBlogs.length)} of {filteredBlogs.length} quests
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Sidebar blogs={blogs} />
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
