import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div>
        <div className="bg-black text-gray-400 h-[100px] mx-auto max-w-[1200px] flex justify-between items-center">
          <h1 className="text-3xl font-bold  primary-color ml-4 ">SHUBHAM</h1>
          <ul className=" hidden md:flex">
            <li className="p-5">
              <a href="#skills">Skills</a>
            </li>
            <li className="p-5">
              <a href="#about">About</a>
            </li>
            <li className="p-5">
              <a href="#work">Work</a>
            </li>
            <li className="p-5">
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <div className="block md:hidden mr-6" onClick={handleNav}>
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </div>

          <div
            className={
              nav
                ? `fixed h-full left-0 top-0 width-[60%] bg-[#202121] ease-in-out duration-500 `
                : `fixed left-[-100%]`
            }
          >
            <h1 className="text-3xl font-bold m-4 primary-color">S.B</h1>
            <ul className="p-8 text-2xl">
              <li className="p-2">
                <a href="#home">Home</a>
              </li>
              <li className="p-2">
                <a href="#skills">Skills</a>
              </li>
              <li className="p-2">
                <a href="#about">About</a>
              </li>
              <li className="p-2">
                <a href="#work">Work</a>
              </li>
              <li className="p-2">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
