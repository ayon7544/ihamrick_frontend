import React from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import WomanImage from "../assets/Rectangle.png";
import { Share2 } from "lucide-react";

const SectionListItem = ({ number, title, content }) => (
  <div className="mb-6">
    <h3 className="text-sm sm:text-base md:text-lg font-bold mb-1">
      <span className="mr-1.5">{number}.</span> {title}
    </h3>
    <p className="m-0 text-gray-700 text-xs sm:text-sm md:text-base">
      {content}
    </p>
  </div>
);

const SpecificBlog = () => {
  const { blogId } = useParams();
  const { state } = useLocation();
  const { imageUrl, headline, linkText, blogContent } = state || {};
  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: { headline },
          text: { blogContent },
          url: window.location.href,
        })
        .then(() => console.log("Successful share"))
        .catch((error) => console.log("Error sharing:", error));
    } else {
      alert(
        "Share functionality is not supported in this browser. You can copy the link manually."
      );
    }
  };

  return (
    <div className="flex flex-col items-center py-20 sm:py-12 md:py-16 lg:py-20 min-h-screen w-full bg-white">
      <div className="max-w-full sm:max-w-4xl md:max-w-6xl lg:max-w-7xl w-full mx-auto p-4 sm:p-6 md:p-8 font-sans leading-relaxed text-sm sm:text-base md:text-lg">
        {/* Updated header */}
        <header className="flex flex-col sm:flex-row items-center justify-between gap-3 py-2 w-full">
          <button
            onClick={() => window.history.back()} // goes back one step in browser history
            className="bg-black text-white rounded-2xl px-4 py-2 font-semibold text-sm shadow hover:bg-gray-900 transition"
          >
            ← Back
          </button>

          <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-center flex-1">
            {headline}
          </h1>

          <button
            onClick={handleShare}
            className="text-black hover:text-gray-700 transition"
          >
            <Share2 size={24} />
          </button>
        </header>

        <div className="my-5 overflow-hidden rounded-lg shadow-md">
          <img
            src={imageUrl}
            alt="Happy older woman raising her arms on a beach"
            className="w-full h-auto block object-cover max-w-full"
          />
        </div>

        <div className="text-gray-700">
          <div className="mt-8 pt-3">
            <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1">
              Content:
            </h3>
            <p className="m-0 text-sm sm:text-base md:text-lg">{blogContent}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecificBlog;
