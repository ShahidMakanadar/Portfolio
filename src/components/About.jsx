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
          Here is a{' '}Little background
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
            – a skilled web developer with a robust foundation in the world of{' '}
            <span className="underline underline-offset-4 decoration-[#f7ff8a]">
              web development
            </span>
            . I'm a{' '}
            <span className="underline underline-offset-4 decoration-[#f7ff8a]">
            BCA finel year student,
            </span>{' '}
            from rani channamma university Belagavi. My journey has been shaped by a fervent
            dedication to honing my craft through{' '}
            <span className="underline underline-offset-4 decoration-[#f7ff8a]">
              independent projects
            </span>
            .
          </p>
          <p>
            With an insatiable drive, I{' '}
            <span className="underline underline-offset-4 [#f7ff8a]">
              specialize
            </span>{' '}
            in crafting impactful web applications and user-centric experiences.
            My academic journey has paved the way for a deep proficiency in a
            range of{' '}
            <span className="underline underline-offset-4 decoration-[#f7ff8a]">
              web technologies
            </span>
            , including{' '}
            <span>
              JavaScript, React JS, Express.js, Node Js, Tailwind CSS, MongoDB, and more...
            </span>{' '}

          </p>
          <p>
            Now, I'm on the lookout for exciting opportunities to apply my
            skills and contribute to dynamic web projects. If you're seeking a
            dedicated and innovative developer,{' '}
            <span className="underline underline-offset-4 decoration-[#f7ff8a]">
              let's connect and explore
            </span>{' '}
            potential collaborations. Feel free to reach out. Together, we can
            create exceptional web experiences.
          </p>
        </motion.div>
        <AboutBgSvg />
      </div>
    </motion.div>
  );
}

export default About;
