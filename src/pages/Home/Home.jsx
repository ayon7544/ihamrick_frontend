import React, { useState, useEffect, useRef } from "react";
import bgImage from "./assets/Home_Background.png";
import LifeCycleImage from "./assets/LifeCycleImage.svg";
import Blog from "../Blog/Blog";
import Videos from "../Videos/Videos";
import Podcasts from "../Podcasts/Podcasts";
import Publications from "../Publications/Publications";
import Contact from "../Contact/Contact";
import Motivation from "../../components/Motivation";

// Dummy headline data (replace with your actual content)
const latestContent = {
  videos: "The Science of Sleep",
  podcasts: "Healthy Habits for Life",
  blog: "10 Tips to Reduce Stress",
  publications: "Research on Mindfulness",
};

function Home() {
  const [headerBg, setHeaderBg] = useState("bg-transparent");
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;

      const heroBottom = heroRef.current.getBoundingClientRect().bottom;
      if (heroBottom <= 0) {
        setHeaderBg("bg-white shadow-lg");
      } else {
        setHeaderBg("bg-transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const tableData = [
    ["Alcohol", "Healthy Food"],
    ["Smoking", "Good Sleep"],
    ["Stress", "Exercise"],
    ["Caffeine", "Water Intake"],
    ["Processed Food", "Fruits & Veggies"],
    ["Extra1", "ExtraValue1"],
    ["Extra2", "ExtraValue2"],
    ["Extra3", "ExtraValue3"],
    ["Extra4", "ExtraValue4"],
    ["Extra5", "ExtraValue5"],
  ];

  return (
    <>
      {/* Header */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${headerBg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-4 text-black font-bold text-xl">
          My Website
        </div>
      </header>

    {/* Hero / Table Section */}
<div
  ref={heroRef}
  className="w-full min-h-screen flex flex-col items-start justify-center px-4 sm:px-10 lg:px-20 pt-24 md:pt-8 lg:pt-0"
  style={{
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  {/* Top Flex Row: Image + Main Table */}
  <div className="w-full flex flex-col lg:flex-row items-start lg:items-center justify-center">
    {/* Left: Image */}
    <div className="w-full lg:w-2/3 flex justify-center items-start mb-6 lg:mb-0 lg:mr-6 pt-6 lg:pt-0">
      <img
        src={LifeCycleImage}
        alt="Life Cycle"
        className="w-full h-auto object-contain"
      />
    </div>

    {/* Right: Main Table */}
    <div className="w-full lg:w-1/3 flex justify-center px-2 sm:px-6 lg:px-10 py-2">
      <div className="overflow-x-auto w-full">
        <div className="max-h-[400px] overflow-y-auto w-full scrollbar-hide">
          <table className="w-full min-w-[250px] text-center border border-white border-opacity-30 backdrop-blur-md bg-transparent">
            <tbody>
              <tr>
                <td colSpan={2} className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold py-3 sm:py-4 bg-transparent text-black">
                  To Increase Quality of Life
                </td>
              </tr>
              <tr className="h-10 sm:h-12 font-bold bg-transparent text-black">
                <td className="border-b border-white border-opacity-30 px-2 sm:px-4 text-sm sm:text-base md:text-lg lg:text-xl">
                  Decrease
                </td>
                <td className="border-b border-white border-opacity-30 px-2 sm:px-4 text-sm sm:text-base md:text-lg lg:text-xl">
                  Increase
                </td>
              </tr>
              {tableData.map((row, index) => (
                <tr key={index} className="cursor-pointer bg-transparent text-black hover:bg-white/20">
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex} className="border border-white border-opacity-30 px-2 sm:px-4 py-1 sm:py-2 text-sm sm:text-base md:text-lg lg:text-xl text-center font-light">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  {/* Transparent Summary Table: directly under image + main table */}
  <div className="w-full flex justify-center mt-6 px-2 sm:px-6 lg:px-10">
    <table className="w-full max-w-3xl text-center border border-white border-opacity-20 backdrop-blur-md bg-transparent">
      <tbody>
        {[
          { label: "Videos", headline: latestContent.videos },
          { label: "Podcasts", headline: latestContent.podcasts },
          { label: "Blog", headline: latestContent.blog },
          { label: "Publications", headline: latestContent.publications },
        ].map((item, index) => (
          <tr key={index} className="hover:bg-white/10 transition cursor-pointer">
            <td className="border-b border-white border-opacity-20 px-4 py-3 font-semibold text-lg sm:text-xl">
              {item.label}
            </td>
            <td className="border-b border-white border-opacity-20 px-4 py-3 text-left text-sm sm:text-base md:text-lg lg:text-xl">
              {item.headline}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>




      {/* Motivation Section */}
      <Motivation />

      {/* Rest of content */}
      <Videos />
      <Podcasts />
      <Blog />
      <Publications />
      <Contact />
    </>
  );
}

export default Home;
