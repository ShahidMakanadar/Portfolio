import React from 'react';
import { motion } from 'framer-motion';
import Image from './Images/shahid.jpg';
import AboutBgSvg from './AboutBgSvg';

function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen flex flex-col mt-10 relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center overflow-x-hidden"
    >
      <h5 className="absolute top-10 font-bold uppercase tracking-[20px] text-[#f7ff8a] z-10">
        Who am I?
      </h5>
      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        className="relative h-64 w-56 md:w-64 md:h-96 xl:h-[480px] xl:w-[300px] object-cover mx-auto md:pt-0 mt-28 md:mt-0 z-0"
      >
        <motion.img
          src={Image}
          alt="profile image"
          className="-mb-20 mt-0 md:mt-14 md:mb-0 flex-shrink-0 rounded-2xl hover:-rotate-3 hover:scale-105 transition ease-in-out duration-300 object-cover md:rounded-lg"
        />
      </motion.div>

      <div className="px-0 space-y-10 md:px-4 md:w-1/2 md:mt-0 mt-24">
        <h1 className="lg:text-2xl text-2xl font-semibold">
          Here’s a Little Background
        </h1>
        <motion.div
          initial={{
            x: 200,
            opacity: 0,
          }}
          whileInView={{
            x: 1,
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="flex flex-col gap-2 lg:text-base text-sm"
        >
          <p>
            Hello, I'm{' '}
            <span className="underline underline-offset-2 font-bold text-[#f7ff8a] tracking-wider">
              Shahid Makandar
            </span>{' '}
            – a passionate web developer with a strong foundation in both frontend and backend technologies. 
            I hold a Bachelor's degree in Computer Applications (BCA) from Rani Channamma University, Belagavi.
          </p>
          <p>
            My expertise lies in building robust and scalable web applications. 
            I specialize in the{' '}
            <span className="underline underline-offset-4 decoration-[#f7ff8a]">
              MERN stack, ASP.NET Core, and .NET development
            </span>
            , with a deep understanding of backend architecture and database management using{' '}
            <span className="underline underline-offset-4 decoration-[#f7ff8a]">
              SQL Server (SSMS)
            </span>
            . My technical proficiency extends to JavaScript, React.js, Express.js, Node.js, Tailwind CSS, and MongoDB.
          </p>
          <p>
            Currently, I am expanding my skill set by learning{' '}
            <span className="underline underline-offset-4 decoration-[#f7ff8a]">
              Azure DevOps and Microsoft Admin Center
            </span>
            , aiming to strengthen my expertise in cloud infrastructure, CI/CD pipelines, and system administration.
          </p>
          <p>
            I am actively seeking opportunities to contribute my skills and collaborate on innovative projects. 
            If you're looking for a dedicated and results-driven developer,{' '}
            <span className="underline underline-offset-4 decoration-[#f7ff8a]">
              let’s connect
            </span>
            ! Together, we can build exceptional digital experiences.
          </p>
        </motion.div>
        <AboutBgSvg />
      </div>

    </motion.div>
  );
}

export default About;
