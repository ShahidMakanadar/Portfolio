import React from 'react';
import { motion } from 'framer-motion';
import { FaTelegramPlane, FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
  return (
    <header className="flex  fixed py-2 px-3 bg-[#000000] w-full overflow-hidden  z-30 top-0">
      <div className="w-full flex justify-between max-w-[1300px] mx-auto">
        <motion.div
          initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="flex items-center"
        >
          <a href="/#">
            <h1 className="font-bold  md:text-2xl text-2xl text-white cursor-pointer">
              &lt;shahid.<span className="text-[#f7ff8a]">code/&gt;</span>
            </h1>
          </a>
          <div className="border-orange-500 border-x h-10 w-2 grow justify-center min-w-md ml-5 hidden md:flex" />
          <div className="md:flex w-fit sm:ml-4 gap-3 hidden">
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <a href="https://www.linkedin.com/in/shahid-mkd/" className="self-center">
                <FaLinkedin className="h-8 w-8 text-[#f7ff8a]" />
              </a>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <a href="https://github.com/ShahidMakanadar" className="self-center">
                <FaGithub className="h-8 w-8 text-[#f7ff8a]" />
              </a>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="items-center gap-4 mx-4 text-white text-lg sm:text-xl font-semibold flex md:hidden"
        >
          <a href="https://www.linkedin.com/in/shahid-mkd/" className="self-center">
            <FaLinkedin className="h-6 w-6 text-[#f7ff8a]" />
          </a>
          <a href="https://github.com/ShahidMakanadar" className="self-center">
            <FaGithub className="h-6 w-6 text-[#f7ff8a]" />
          </a>
        </motion.div>

        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="md:flex items-center uppercase gap-4 mx-4 text-[#f7ff8a] text-lg font-medium hidden "
        >
          <a href="#about">
            <h2 className="hover:text-white cursor-pointer">About</h2>
          </a>
          <a href="#skills">
            <h2 className="hover:text-white cursor-pointer">Skills</h2>
          </a>
          <a href="#projects">
            <h2 className="hover:text-white cursor-pointer">Projects</h2>
          </a>
          <a href="#contact">
            <h2 className="hover:text-white cursor-pointer">Contact</h2>
          </a>
        </motion.div>
      </div>
    </header>
  );
};

export default Navbar;
