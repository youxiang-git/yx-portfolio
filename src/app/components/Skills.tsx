"use client ";

import {
  SiC,
  SiCss3,
  SiDocker,
  SiFigma,
  SiFirebase,
  SiFramer,
  SiGit,
  SiGithub,
  SiGo,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiLinux,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiNumpy,
  SiOpencv,
  SiPandas,
  SiPostgresql,
  SiPython,
  SiPytorch,
  SiReact,
  SiScikitlearn,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

import {
  easeInOut,
  motion,
  useScroll,
  useTransform,
  Variants,
} from "framer-motion";
import { IconContext } from "react-icons";
import { useRef } from "react";
import MagneticIcons from "./ui/MagneticIcons";

const skillsIcons = [
  {
    title: "Front-End",
    icons: [
      <SiJavascript key="Javascript" />,
      <SiTypescript key="Typescript" />,
      <SiHtml5 key="HTML" />,
      <SiCss3 key="CSS" />,
      <SiReact key="ReactJS" />,
      <SiNextdotjs key="NextJS" />,
      <SiFramer key="Framer Motion" />,
      <SiFigma key="Figma" />,
      <SiTailwindcss key="TailwindCSS" />,
    ],
  },
  {
    title: "Back-End",
    icons: [
      <SiPostgresql key="PostgreSQL" />,
      <SiGraphql key="GraphQL" />,
      <SiPython key="Python" />,
      <SiNodedotjs key="NodeJS" />,
      <SiFirebase key="Firebase" />,
    ],
  },
  {
    title: "DevOps",
    icons: [
      <SiNginx key="NGINX" />,
      <SiDocker key="Docker" />,
      <SiLinux key="Linux" />,
      <SiGit key="Git" />,
      <SiGithub key="Github" />,
    ],
  },
  {
    title: "Languages & Libraries",
    icons: [
      <SiC key="C" />,
      <SiGo key="Golang" />,
      <SiPytorch key="Pytorch" />,
      <SiScikitlearn key="SciKit Learn" />,
      <SiOpencv key="OpenCV" />,
      <SiPandas key="Pandas" />,
      <SiNumpy key="Numpy" />,
    ],
  },
];

const skillsVariants: Variants = {
  hidden: { opacity: 0, y: "-100%" },
  show: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.2, duration: 0.2, staggerChildren: 0.1 },
  },
};

const iconVariants: Variants = {
  hidden: { opacity: 0, y: "-100%" },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: easeInOut },
  },
};

const Skills = () => {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "start start"],
  });

  const translateYTitleY = useTransform(
    scrollYProgress,
    [0, 0.2],
    ["-150%", "0%"],
    {
      ease: easeInOut,
    },
  );

  const translateYFE = useTransform(scrollYProgress, [0.3, 0.5], [0, 1], {
    ease: easeInOut,
  });

  const translateYBE = useTransform(scrollYProgress, [0.4, 0.6], [0, 1], {
    ease: easeInOut,
  });

  const translateYDev = useTransform(scrollYProgress, [0.5, 0.7], [0, 1], {
    ease: easeInOut,
  });

  const translateYLang = useTransform(scrollYProgress, [0.6, 0.8], [0, 1], {
    ease: easeInOut,
  });

  const translates = [
    translateYFE,
    translateYBE,
    translateYDev,
    translateYLang,
  ];

  const translateYOpacityY = useTransform(scrollYProgress, [0, 0.2], [0, 1], {
    ease: easeInOut,
  });

  return (
    <section id="skills" ref={scrollRef}>
      <div className="mx-auto flex h-[85%] w-[90vw] flex-col text-[4vw] text-text md:my-[2vw] md:items-center md:justify-between md:text-left md:text-[1vw]">
        {/* Skill & Tech Title */}
        <motion.h1
          className="mx-auto flex pt-[10%] text-[5vw] font-extrabold md:pt-0 md:text-[2vw]"
          style={{ y: translateYTitleY, opacity: translateYOpacityY }}
        >
          Skills & Technologies
        </motion.h1>

        <IconContext.Provider
          value={{ size: "100%", style: { verticalAlign: "middle" } }}
        >
          {/* Tech Domain (i.e. FE / BE) */}
          {skillsIcons.map((skill, idx) => {
            return (
              <motion.div
                className="flex h-full flex-col items-center justify-center"
                key={`${skill.title}-${idx}`}
              >
                {/* desktop */}
                <motion.h1
                  initial="hidden"
                  whileInView="show"
                  viewport={{ margin: "0% 0% -20% 0%", once: true }}
                  variants={skillsVariants}
                  className="mb-[0.4vw] hidden md:flex"
                >
                  {skill.title}
                </motion.h1>
                {/* mobile */}
                <motion.h1
                  className="flex md:hidden"
                  style={{ opacity: translates[idx] }}
                >
                  {skill.title}
                </motion.h1>
                {/* desktop */}
                <motion.div
                  className="hidden md:mb-0 md:grid md:grid-flow-col md:gap-x-[1.5vw]"
                  initial="hidden"
                  whileInView="show"
                  viewport={{
                    margin: "0% 0% -20% 0%",
                    once: true,
                  }}
                  variants={skillsVariants}
                  style={{ willChange: translateYFE }}
                >
                  {skill.icons.map((icon, index) => {
                    return (
                      <motion.div
                        key={`desktop-${index}`}
                        variants={iconVariants}
                        className="flex md:h-[4vw] md:w-[4vw] md:p-0"
                      >
                        <MagneticIcons>
                          {icon}
                          <div className="flex justify-center pt-[0.2vw] text-center text-[3vw] leading-tight tracking-tighter text-text md:text-[0.8vw]">
                            {icon.key}
                          </div>
                        </MagneticIcons>
                      </motion.div>
                    );
                  })}
                </motion.div>
                {/* mobile */}
                <motion.div className="mb-[5vw] flex max-w-[90vw] flex-row flex-wrap items-center justify-center md:hidden">
                  {skill.icons.map((icon, index) => {
                    return (
                      <motion.div
                        key={`mobile-${index}`}
                        className="mx-[2vw] my-[4vw] flex h-[9vw] w-[9vw] justify-center text-center"
                        style={{ opacity: translates[idx] }}
                      >
                        <div>
                          {icon}
                          <div className="mt-[1vw] text-[2.5vw] leading-tight tracking-tighter text-text">
                            {icon.key}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </motion.div>
            );
          })}
        </IconContext.Provider>
      </div>
    </section>
  );
};

export default Skills;
