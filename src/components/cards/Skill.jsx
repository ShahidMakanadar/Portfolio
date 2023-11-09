import React from 'react';
import { motion } from 'framer-motion';

const Skill = ({ name, imgUrl, proficiency }) => {
  return (
    <motion.div
      initial={{
        rotate: -20,
        y: -10,
      }}
      whileInView={{
        rotate: 0,
        y: 0,
      }}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      className="group relative flex cursor-default bg-teal-100/20 rounded-2xl"
    >
      <img
        className="rounded-2xl border border-[#f7ff8a] p-2 object-cover w-20 h-20 xl:w-28 xl:h-28 filter md:w-24 md:h-24 transition duration-300 ease-in-out"
        src={imgUrl}
        alt={name}
        width={40}
        height={40}
      />
      <div className="absolute opacity-0 transition duration-300 ease-in-out group-hover:bg-[#f7ff8a] group-hover:opacity-80  w-20 h-20 xl:w-28 xl:h-28 md:w-24 md:h-24  rounded-2xl z-0">
        <div className="flex items-center justify-center h-full">
          <p className="md:text-lg text-sm font-semibold text-black opacity-100">
            {name}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Skill;
