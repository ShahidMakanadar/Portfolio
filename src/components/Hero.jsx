import React from "react";
import Image from "./Images/profile.png";
import BackGroundCircle from "./BackGroundCircle";
import { motion } from "framer-motion";
import { Cursor, useTypewriter } from "react-simple-typewriter";

function Hero() {
  const [text, count] = useTypewriter({
    words: ["Express-JS", "Node-JS", "React-JS", "Mongo-DB", "MERN-Stack"],
    loop: true,
    delaySpeed: 1500,
  });


  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'https://github.com/ShahidMakanadar/Portfolio/blob/main/src/components/Shahid%20Makandar(CV).pdf';
    link.download = 'Shahid%20Makandar(CV).pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col md:mt-14 text-white w-full h-screen space-y-8 items-center justify-center text-center overflow-hidden">
      <BackGroundCircle />

      <div className="relative h-44 w-44 object-cover mx-auto">
        <img
          src={Image}
          alt="profile image"
          className="-mt-2 rounded-full object-cover"
        />
      </div>

      <motion.div
        initial={{
          y: 200,
          opacity: 0,
        }}
        animate={{
          y: 0,
          scale: 1,
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="z-20 top-10"
      >
        <h5 className="sm:text-md text-sm font-bold uppercase  text-[#f7ff8a] pb-2 tracking-[15px]">
          Web Developer
        </h5>
        <div className="text-white-400 px-4 text-xl sm:text-3xl">
          <h1 className="pb-3">
            <span className="font-semibold">
              {" "}
              ...{" "}
              <span className="text-[#f7ff8a] font-mono tracking-[5px]">
                {text}
              </span>
              <Cursor cursorColor="#FDBA74" />
              <span className="text-white  tracking-[1px]">...</span>
            </span>
          </h1>
    
            <button className="Dbutton" onClick={handleDownload}> 
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="yellow"
                viewBox="0 0 24 24"
                height="24px"
                width="24px"
              >
                <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                <g
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  id="SVGRepo_tracerCarrier"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g id="Interface / Download">
                    {" "}
                    <path
                      stroke-linejoin="round"
                      stroke-linecap="round"
                      stroke-width="2"
                      stroke="#f1f1f1"
                      d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12"
                      id="Vector"
                    ></path>{" "}
                  </g>{" "}
                </g>
              </svg>{" "}
              <span> Download My Resume ( cv ) , Here</span>
            </button>
       
        </div>
      </motion.div>
      <div className="absolute -bottom-4 animate-bounce w-full hidden md:flex justify-center">
        <a
          href="#about"
          className="group hidden transform md:flex items-center flex-col"
        >
          <span className="text-[#f7ff8a] group-hover:text-white">Scroll</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            className="dark:fill-bglight fill-[#f7ff8a] group-hover:fill-[#f7ff8a]"
          >
            <path d="M11.975 22H12c3.859 0 7-3.14 7-7V9c0-3.841-3.127-6.974-6.981-7h-.06C8.119 2.022 5 5.157 5 9v6c0 3.86 3.129 7 6.975 7zM7 9a5.007 5.007 0 0 1 4.985-5C14.75 4.006 17 6.249 17 9v6c0 2.757-2.243 5-5 5h-.025C9.186 20 7 17.804 7 15V9z"></path>
            <path d="M11 6h2v6h-2z"></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            className="dark:fill-bglight fill-[#f7ff8a] group-hover:fill-white"
          >
            <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Hero;
