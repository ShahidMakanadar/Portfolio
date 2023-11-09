import React from 'react';
import { motion } from 'framer-motion';

const BackGroundCircle = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center z-0"
    >
      <div className="absolute border border-yellow-500/80 rounded-full h-[200px] w-[200px] animate-ping mt-56" />
      <div className="absolute border border-yellow-300/50 rounded-full  animate-pulse  h-[250px] w-[250px] mt-56" /> 
      <div className="absolute border border-yellow-300/20 rounded-full h-[400px] w-[400px] mt-56" />
      <div className="rounded-full border border-yellow-300/100 opacity-20 h-[525px] w-[525px] absolute animate-pulse mt-56" />
      <div className="rounded-full border border-yellow-300/20 h-[650px] w-[650px] absolute mt-56" />
    </motion.div>
  );
};

export default BackGroundCircle;
