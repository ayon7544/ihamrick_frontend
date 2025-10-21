import React from "react";
import bgImage from "./assets/Home_Background.png";
import LifeCycleImage from "./assets/LifeCycleImage.svg";
import { Link } from "react-router-dom";
import Blog from "../Blog/Blog";
import Videos from "../Videos/Videos";
import Podcasts from "../Podcasts/Podcasts";
import Publications from "../Publications/Publications";
import Contact from "../Contact/Contact";
import Motivation from "../../components/Motivation";
function Home() {
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
    ["Extra6", "ExtraValue6"],
    ["Extra7", "ExtraValue7"],
    ["Extra8", "ExtraValue8"],
    ["Extra9", "ExtraValue9"],
    ["Extra10", "ExtraValue10"],
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
    ["Extra6", "ExtraValue6"],
    ["Extra7", "ExtraValue7"],
    ["Extra8", "ExtraValue8"],
    ["Extra9", "ExtraValue9"],
    ["Extra10", "ExtraValue10"],
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
    ["Extra6", "ExtraValue6"],
    ["Extra7", "ExtraValue7"],
    ["Extra8", "ExtraValue8"],
    ["Extra9", "ExtraValue9"],
    ["Extra10", "ExtraValue10"],
  ];

  return (
    <>
      <div
        className="w-full min-h-screen flex flex-col lg:flex-row items-start lg:items-center justify-center px-4 sm:px-10 lg:px-20 pt-16 md:pt-8 lg:pt-0"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Left: Image */}
        <div className="w-full lg:w-2/3 flex justify-center items-start mb-6 lg:mb-0 lg:mr-6 pt-6 lg:pt-0">
          <img
            src={LifeCycleImage}
            alt="Life Cycle"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Right: Table */}
        {/* Right: Table */}
        <div className="w-full lg:w-1/3 flex justify-center px-2 sm:px-6 lg:px-10 py-2">
          <div className="overflow-x-auto w-full">
            <div className="max-h-[400px] overflow-y-auto w-full scrollbar-hide">
              <table className="w-full min-w-[250px] text-center border border-white border-opacity-30 backdrop-blur-md bg-transparent">
                <tbody>
                  {/* Table title */}
                  <tr>
                    <td
                      colSpan={2}
                      className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold py-3 sm:py-4 bg-transparent text-black"
                    >
                      To Increase Quality of Life
                    </td>
                  </tr>

                  {/* Column headers */}
                  <tr className="h-10 sm:h-12 font-bold bg-transparent text-black">
                    <td className="border-b border-white border-opacity-30 px-2 sm:px-4 text-sm sm:text-base md:text-lg lg:text-xl">
                      Decrease
                    </td>
                    <td className="border-b border-white border-opacity-30 px-2 sm:px-4 text-sm sm:text-base md:text-lg lg:text-xl">
                      Increase
                    </td>
                  </tr>

                  {/* Table rows */}
                  {tableData.map((row, index) => (
                    <tr
                      key={index}
                      className="transition-all duration-300 cursor-pointer bg-transparent text-black hover:bg-white/20"
                    >
                      {row.map((cell, cellIndex) => (
                        <td
                          key={cellIndex}
                          className="border border-white border-opacity-30 px-2 sm:px-4 py-1 sm:py-2 text-sm sm:text-base md:text-lg lg:text-xl text-center font-light"
                        >
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
      <Videos />
      <Podcasts />
      <Motivation />
      <Blog />
      <Publications />
      <Contact />
    </>
  );
}

export default Home;
