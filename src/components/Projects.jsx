import React from "react";
import ProjectCard from "./cards/ProjectCard";
import { projects } from "../constants";

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col mt-1 relative text-center md:text-left md:flex-row max-w-7xl px-1 justify-evenly mx-auto items-center overflow-x-hidden">
      <h5 className="absolute top-20 font-bold uppercase tracking-[20px] text-[#f7ff8a] z-10">
        Projects
      </h5>
      <div className="flex flex-col mt-28">
        <div className="flex w-full justify-center">
          <h4 className="text-md p-3 rounded-lg text-center max-w-md flex justify-center flex-col top-32 text-quaternary z-10">
            “Talk is cheap. Show me the code”? I got you. Here are some of my
            projects you shouldn't miss
          </h4>
        </div>
        <div className="flex flex-wrap gap-6 xl:justify-between justify-center mt-16 mx-8 mb-7">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              desc={project.desc}
              imgUrl={project.imgUrl}
              liveUrl={project.liveUrl}
              codeUrl={project.codeUrl}
              tags={project.tags}
            />
          ))}
        </div>
        <p className="w-full mx-auto flex justify-center text-center">
          Explore more of my projects :
          <a
            href="https://github.com/ShahidMakanadar"
            className="mx-1 text-[#f7ff8a] hover:text-[#b4b97c] hover:underline-offset-2 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub profile
          </a>
        </p>
      </div>
    </div>
  );
};

export default Projects;
