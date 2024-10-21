import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/javascript.png";
import react from "../assets/react.png";
import node from "../assets/nodejs.png";
import express from "../assets/express.png";
import mongo from "../assets/mongo.png";
import tailwind from "../assets/tailwind.png";

const Skills = () => {
  return (
    <div className="text-white max-w-[1200px] mx-auto my-12 mt-32" id="skills">
      <div className="mt-14 md:mt-0 text-left flex flex-col h-full justify-start py-6 md:py-0">
        <div className="my-auto mx-6">
          <h2 className="text-4xl font-bold mb-4 primary-color "> Skills </h2>
        </div>

        <div className="flex  flex-wrap gap-10 flw flex-col  md:flex-row  ml-20 mt-5">
          <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
            <img src={html} alt="" />
            <p className="mt-2">HTML</p>
          </div>
          <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
            <img src={css} alt="" />
            <p className="mt-2">CSS</p>
          </div>
          <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
            <img src={js} alt="" />
            <p className="mt-2">JS</p>
          </div>
          <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
            <img src={react} alt="" />
            <p className="mt-2">REACT</p>
          </div>
          <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
            <img src={node} alt="" />
            <p className="mt-2">Node Js</p>
          </div>
          <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
            <img src={express} alt="" />
            <p className="mt-2">Express JS</p>
          </div>
          <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
            <img src={mongo} alt="" />
            <p className="mt-2">Mongo DB</p>
          </div>
          <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
            <img src={tailwind} alt="" />
            <p className="mt-2">Tailwind Css</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
