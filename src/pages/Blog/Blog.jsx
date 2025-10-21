import React from "react";
import { Link, useLocation } from "react-router-dom";
import Motivation from "../../components/Motivation";
import BlogCard from "./components/BlogCard";
import blogData from "./components/blogData"; // ✅ Import data
import { useState } from "react"; // ✅ Import useState

import Pagination from "../../components/Pagination";

const ITEMS_PER_PAGE = 6; // 2 rows x 3 columns
function Blog() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(blogData.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = blogData.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  const location = useLocation();
  const currentPath = location.pathname;
  const fromMain = currentPath === "/" || currentPath === "/home";
  const isRootBlogRoute = currentPath === "/blog";

  return (
    <div className="flex flex-col items-center py-12 sm:py-16 md:py-24 lg:py-32 min-h-[98vh] relative w-full">
      {isRootBlogRoute && <Motivation />}

      {/* Header Row */}
      <header className="relative flex justify-center items-center mb-8 sm:mb-10 md:mb-12 w-full px-4 sm:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 text-center w-full">
          Blog
        </h1>

        {fromMain && (
          <div className="absolute right-4 sm:right-6 md:right-10 top-1/2 -translate-y-1/2">
            <Link
              to="/blog"
              className="flex items-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-900 text-white text-xs sm:text-sm md:text-base font-semibold rounded-md sm:rounded-lg shadow-md hover:bg-gray-700 transition duration-300 transform hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
            >
              <span>View All</span>
            </Link>
          </div>
        )}
      </header>

      {/* Blog Grid
      {isRootBlogRoute && (

      )} */}
      <div className="grid gap-8 sm:gap-10 md:gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 px-4 sm:px-6 md:px-10 w-full max-w-7xl">
        {currentItems.map((item) => (
          <BlogCard
            key={item.id}
            id={item.id}
            imageUrl={item.imageUrl}
            headline={item.headline}
            linkText={item.linkText}
            blogContent={item.blogContent}
          />
        ))}
      </div>
      {/* Pagination */}
      {totalPages > 1 && isRootBlogRoute && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
        />
      )}
    </div>
  );
}

export default Blog;
