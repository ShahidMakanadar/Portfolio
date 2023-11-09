import React from 'react';
import { BiMessageDetail } from "react-icons/bi";
import { BiCodeAlt } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { GoProjectRoadmap } from "react-icons/go";

const BottomBar = () => {
  return (
    <div className="fixed bottom-0 flex justify-center z-20 w-full  md:hidden text-white">
      <div className="rounded-2xl mx-3 backdrop-blur-sm bg-[#0c0c0c]/50 flex justify-center w-full py-2 px-8">
        <div className="flex items-center uppercase justify-between gap-3 xs:gap-5 w-full text-sm">
          <a href="#about" className="items-center flex flex-col">
            <FaRegUser className="text-[#f7ff8a] h-5 w-5" />
            Who am I?
          </a>
          <a href="#skills" className="items-center flex flex-col">
            <BiCodeAlt className="text-[#f7ff8a] h-6 w-6" />
            Skills
          </a>
          <a href="#projects" className="items-center flex flex-col">
            <GoProjectRoadmap className="text-[#f7ff8a] h-6 w-5" />
            Projects
          </a>
          <a href="#contact" className="items-center flex flex-col">
            <BiMessageDetail className="text-[#f7ff8a] h-6 w-5" />
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default BottomBar;
