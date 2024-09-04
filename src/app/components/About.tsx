"use client";

import {
  delay,
  motion,
  useScroll,
  useTransform,
  Variants,
} from "framer-motion";
import React, { useRef } from "react";
import Image from "next/image";
import ProfilePic from "/public/self_portrait.jpg";
import { easeInOut } from "framer-motion/dom";

const AboutText = [
  `My name is Chai Youxiang and I’m a fresh graduate of Computer
  Science from Nanyang Technological University, Singapore. I’ve
  always had a deep passion for Software and Web Development and I
  thrive on learning new technologies to expand my skillset.`,

  `My goal is to create software that is not only functional, but
  engaging and user-oriented. I strongly believe in creating
  experiences that resonate with the user and applications that
  are accessible and easy to use.`,

  `Currently, I am looking for full time opportunities
  where I can contribute my skills and continue to grow as a
  developer.`,
];

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const translateYImage = useTransform(
    scrollYProgress,
    [0, 0.45, 0.55, 1],
    ["100%", "0%", "0%", "-100%"],
    { ease: easeInOut },
  );

  const translateYAbout = useTransform(
    scrollYProgress,
    [0, 0.25, 0.75, 1],
    [0, 1, 1, 0],
    {
      ease: easeInOut,
    },
  );

  return (
    <section id="about" ref={ref}>
      <div className="mx-auto mt-[10%] w-[90vw] md:mt-[5%]">
        <div className="flex">
          <motion.div
            className="relative h-[35vw] w-[20vw]"
            style={{ y: translateYImage }}
          >
            <Image
              src={ProfilePic}
              alt="Self Portrait"
              fill
              priority
              className="rotate-[8deg] rounded-bl-[6rem] rounded-tr-[6rem] object-cover object-[45%]"
            ></Image>
          </motion.div>
          <div className="ml-[4vw] flex w-[50vw] flex-col text-2xl">
            <motion.span
              className="my-[2vw] text-left text-[2vw] leading-[2vw] text-text underline underline-offset-[0.3vw] md:text-[1.5vw]"
              style={{ opacity: translateYAbout }}
            >
              About me
            </motion.span>
            <div className="mb-[2vw] flex size-full flex-col justify-between">
              {AboutText.map((text, index) => {
                return (
                  <motion.p
                    key={index}
                    className="text-[1.2vw] leading-[2vw]"
                    style={{ opacity: translateYAbout }}
                  >
                    {text}
                  </motion.p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
