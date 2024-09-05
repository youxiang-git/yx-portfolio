"use client ";
import React from "react";

import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNextdotjs,
  SiFramer,
  SiFigma,
  SiTailwindcss,
  SiPostgresql,
  SiGraphql,
  SiPython,
  SiNodedotjs,
  SiFirebase,
  SiNginx,
  SiDocker,
  SiLinux,
  SiGit,
  SiGithub,
  SiC,
  SiGo,
  SiPytorch,
  SiScikitlearn,
  SiOpencv,
  SiPandas,
  SiNumpy,
} from "react-icons/si";

import { IconContext } from "react-icons";
import { motion } from "framer-motion";

const skillsIcons = [
  {
    title: "Front-End",
    icons: [
      <SiJavascript key="js" />,
      <SiTypescript key="ts" />,
      <SiHtml5 key="html5" />,
      <SiCss3 key="css" />,
      <SiReact key="react" />,
      <SiNextdotjs key="nextjs" />,
      <SiFramer key="framer" />,
      <SiFigma key="figma" />,
      <SiTailwindcss key="tailwind" />,
    ],
  },
  {
    title: "Back-End",
    icons: [
      <SiPostgresql key="postgres" />,
      <SiGraphql key="graphql" />,
      <SiPython key="python" />,
      <SiNodedotjs key="nodejs" />,
      <SiFirebase key="firebase" />,
    ],
  },
  {
    title: "DevOps",
    icons: [
      <SiNginx key="nginx" />,
      <SiDocker key="docker" />,
      <SiLinux key="linux" />,
      <SiGit key="git" />,
      <SiGithub key="github" />,
    ],
  },
  {
    title: "Languages & Libraries",
    icons: [
      <SiC key="c" />,
      <SiGo key="golang" />,
      <SiPytorch key="pytorch" />,
      <SiScikitlearn key="sklearn" />,
      <SiOpencv key="opencv" />,
      <SiPandas key="pandas" />,
      <SiNumpy key="np" />,
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills">
      <div className="mx-auto flex h-[60%] w-[90vw] flex-col items-center justify-between text-[4vw] text-text md:my-[2vw] md:text-left md:text-[1vw]">
        <h1>Skills & Technologies</h1>
        <IconContext.Provider
          value={{ size: "100%", style: { verticalAlign: "middle" } }}
        >
          {skillsIcons.map((skill) => {
            return (
              <div
                className="flex flex-col items-center justify-center"
                key={skill.title}
              >
                <h1>{skill.title}</h1>
                <div className="grid grid-flow-col gap-x-[1vw]">
                  {skill.icons.map((icon, index) => {
                    return (
                      <motion.div
                        className="mt-[1vw] h-[2vw] w-[2vw]"
                        key={index}
                      >
                        {icon}
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </IconContext.Provider>
      </div>
    </section>
  );
};

export default Skills;
