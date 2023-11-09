import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTelegramPlane, FaHeart } from "react-icons/fa";



const BottomContact = () => {
  return (
    <div className="md:mb-6 mb-24 flex flex-col justify-center items-center gap-3 text-[#f7ff8a]">
      <div className="flex justify-center items-center gap-10">
        <motion.a
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          href="https://www.linkedin.com/in/shahid-mkd/"
          className="self-center"
        >
          <FaLinkedin className="h-8 w-8 hover:text-white" />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          href="https://github.com/ShahidMakanadar"
          className="self-center"
        >
          <FaGithub className="h-8 w-8 hover:text-white" />
        </motion.a>
      </div>
      <div className="flex justify-center items-center w-full">
        Coded with <FaHeart className="mx-1" /> by shahid_makandar
      </div>
    </div>
  );
};

export default BottomContact;