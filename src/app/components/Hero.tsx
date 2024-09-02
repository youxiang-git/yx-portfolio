"use client";

import {
  ArrowDownIcon,
  ArrowTopRightIcon,
  DownloadIcon,
} from "@radix-ui/react-icons";
import {
  AnimationProps,
  delay,
  motion,
  VariantLabels,
  Variants,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Typewriter from "typewriter-effect";
import ProfilePic from "/public/self_portrait.jpg";
import { AnimatedButton } from "./ui/AnimatedButton";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const imageAnimation: Variants = {
    hidden: { opacity: 0, y: -200 },
    show: {
      opacity: 1,
      y: 0,
      rotate: [0, 8],
      transition: { delay: 0.2, duration: 0.5 },
    },
  };

  const h1Right = {
    hidden: { opacity: 0, x: "-100%" },
    show: {
      opacity: [0, 0, 1],
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  const h1Left = {
    hidden: { opacity: 0, x: "100%" },
    show: {
      opacity: [0, 0, 1],
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  const typewriterVariants = {
    hidden: { opacity: 0, y: "100%" },
    show: {
      opacity: [0, 0, 0, 1],
      y: 0,
      transition: { duration: 1 },
    },
  };

  const elementsVariants: Variants = {
    hidden: { opacity: 0, y: "100%" },
    show: {
      opacity: [0, 0, 0, 1],
      y: 0,
    },
  };

  return (
    <section id="hero">
      <div className="relative flex h-fit w-full flex-col pb-[10vh]">
        <div className="div_content relative mt-[10%] flex h-fit flex-col md:mt-[12%] md:flex-row md:justify-center">
          <motion.h1
            variants={h1Right}
            initial="hidden"
            animate="show"
            viewport={{ once: true }}
            className="z-[1] self-center text-clamp font-light leading-none tracking-normal mix-blend-difference md:absolute md:bottom-[35%] md:left-[0%]"
          >
            CHAI
          </motion.h1>
          <motion.h1
            variants={h1Left}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="z-[1] mb-8 self-center text-clamp font-extrabold leading-none tracking-[-0.3rem] mix-blend-difference md:absolute md:-bottom-[8vw]"
          >
            YOUXIANG
          </motion.h1>

          <motion.div
            className="relative aspect-square w-[90%] self-center md:w-[30%]"
            variants={imageAnimation}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <Image
              src={ProfilePic}
              alt="Self Portrait"
              fill
              priority
              className="rounded-[10%] object-cover"
            ></Image>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={typewriterVariants}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bottom-1/3 left-2/3 text-text md:absolute"
          >
            <span className="text-[4vw] md:text-[1vw]">
              {"I'm an aspiring"}
            </span>
            <span className="text-[6vw] font-bold md:text-[2vw]">
              <Typewriter
                options={{
                  strings: ["Software Engineer.", "Full Stack Developer."],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </motion.div>
        </div>

        <motion.button
          initial="hidden"
          whileInView="show"
          variants={elementsVariants}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="z-[10] mt-[8vw] items-center self-center border-text"
          onMouseDown={() => setIsClicked(true)}
          onMouseUp={() => setIsClicked(false)}
        >
          <a
            href="/chaiyouxiang_resume_latest.pdf"
            download
            className="relative flex flex-row items-center"
          >
            <span
              className={`duration-50 ease relative z-[10] flex rounded-full border bg-background px-6 py-4 text-buttons font-medium text-text transition-all ease-out ${isClicked ? "" : "hover:-translate-y-2 hover:translate-x-2"}`}
            >
              Download CV
              <DownloadIcon className="ml-[0.5vw] h-[1vw] min-h-6 w-[1vw] min-w-6 self-center" />
            </span>
            <span className="absolute z-[5] size-full rounded-full border bg-text" />
          </a>
        </motion.button>

        <div className="absolute bottom-0 left-0 m-8 flex flex-col items-center">
          <motion.div
            className="mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.1 }}
          >
            Scroll Down
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={elementsVariants}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 1 }}
            className="hidden md:visible"
          >
            <ArrowDownIcon
              className="h-[2vw] min-h-6 w-[2vw] min-w-6 animate-bounce"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          variants={elementsVariants}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="absolute bottom-0 right-0 m-8 hidden w-fit grid-cols-2 gap-x-4 text-[1vw] text-text lg:grid"
        >
          <Link
            href="https://www.linkedin.com/in/youxiang-chai/"
            className="flex items-center"
          >
            LinkedIn
            <ArrowTopRightIcon className="h-[1vw] min-h-6 w-[1vw] min-w-6" />
          </Link>
          <Link
            href="https://github.com/youxiang-git"
            className="flex items-center"
          >
            GitHub
            <ArrowTopRightIcon className="h-[1vw] min-h-6 w-[1vw] min-w-6" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
