import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-red-600">Hi, my name is</p>
        <h1 className="text-3xl sm-text-6xl font-bold text-[#FFFFFF]">
          Gabriel Giurca
        </h1>
        <h3 className="text-3xl sm:text-6xl font-bold text-[#6e7a75] ">
          I`m a Junior Developer.
        </h3>
        <p className="text-[#6e7a75] py-4 max-w-[700px]">
          I`am a junior developer at the beginning of my career, lifelong
          learner that embraces teamwork.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-red-500 hover:border-red-500">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />{" "}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
