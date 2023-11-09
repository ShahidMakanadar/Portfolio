import React from 'react';
import Skill from './cards/Skill';
import { skills } from '../constants';

const Skills = () => {
  return (
    <div className="min-h-screen flex mt-10 flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center overflow-x-hidden">
      <h5 className="absolute top-10 font-bold  uppercase tracking-[20px] text-[#f7ff8a] z-10">
        Skills
      </h5>

      <div className="flex flex-col sm:mt-8 mt-20">
        <div className="flex w-full justify-center">
          <h4 className="text-md p-3 rounded-lg text-center flex justify-center max-w-md flex-col top-32 text-quaternary z-10">
            Skills are the foundation, but actions speak louder. Let's explore what I can do. Here's a snapshot of my skill set.
          </h4>
        </div>
        <div className="flex flex-wrap justify-evenly gap-5 mb-7 max-w-4xl mt-16">
          {skills.map((skill) => (
            <Skill
              key={skill.name}
              name={skill.name}
              imgUrl={skill.imgUrl}
              proficiency={skill.proficiency}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;