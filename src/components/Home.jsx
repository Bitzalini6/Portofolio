import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import Picture from "../assets/projects/cvpoza.jpg";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-red-600">Hi, my name is</p>
        <h1 className="text-3xl sm-text-6xl font-bold text-[#FFFFFF]">
          Gabriel Giurca
        </h1>
        <h3 className="text-3xl sm:text-4xl font-bold text-[#6e7a75] ">
          I`am a junior developer at the beginning of my career, lifelong
          learner that embraces teamwork.
        </h3>
        <p className="text-[#6e7a75] py-4 max-w-[700px]">
          <img
            className="my-10"
            src={Picture}
            alt="img"
            style={{ height: "500px" }}
          ></img>
        </p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-red-500 hover:border-red-500">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />{" "}
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
