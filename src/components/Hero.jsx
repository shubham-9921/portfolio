import p2 from "../assets/p2-removebg-preview.png";
import { TypeAnimation } from "react-type-animation";
const Hero = () => {
  return (
    <div>
      <div className="grid grid-cols-1  sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8 bg-black">
        <div className="col-span-1 mt-[-10] my-auto mx-auto  w-[300px] h-auto  lg:w-[400px]">
          <img src={p2} alt="Profile" className="imageShadow  " />
        </div>

        <div className="col-span-2 px-5">
          <h1 className="text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold mt-16 ">
            <span className="primary-color"> I&apos;m a</span> <br />
            <TypeAnimation
              sequence={[
                "Frontend Dev",
                1000,
                "Web Dev",
                1000,
                "Full Stack Dev",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>

          <p className="text-white sm:text-lg lg:text-xl my-10">
            My name is Shubham Bodkhe and I have 1+ year of experience in web
            development.
          </p>

          <div className="my-8">
            <a
              href="/"
              className="px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-orange-400 to bg-pink-500 text-white"
            >
              Download CV{" "}
            </a>
            <a
              href="#contact"
              className="px-6 py-3 w-full rounded-xl mr-4 border border-gray-400   hover:border-none hover:bg-gradient-to-br from-orange-400 to bg-pink-500 text-white"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
