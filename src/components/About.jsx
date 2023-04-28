import React from "react";
import Picture from "../assets/projects/cvpoza.jpg";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-200">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full  grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-red-500">
              About me
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold ">
            <p>
              Hello, hope you doing alright !<br></br> I am Gabriel Giurca, nice
              to meet you. Please take a look around.
              <img
                className="my-10"
                src={Picture}
                alt="img"
                style={{ height: "500px" }}
              ></img>
            </p>
          </div>
          <div>
            <p>
              I describe myself as a responsible and loyal person, determined to
              perform and I enjoy development because of the satisfaction I get
              by overcoming challenges. I am motivated by the opportunity that
              software provides to positively impact the life of an individual,
              and the world as a whole. Coding and personal development are my
              passion and I am looking forward to bringing that passion to a
              full-time role.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
