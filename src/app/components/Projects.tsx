"use client";
import React from "react";
import BentoGrid from "@/app/components/ui/BentoGrid";

const Projects = () => {
  return (
    <section id="projects" className="h-fit max-h-fit">
      <div className="mx-auto text-[4vw] md:text-[1vw]">
        <h1 className="my-[5%] flex justify-center text-[5vw] font-extrabold md:text-[2vw]">
          My projects
        </h1>
        <BentoGrid />
      </div>
    </section>
  );
};

export default Projects;
