"use client";

import {
  ArrowDownIcon,
  ArrowTopRightIcon,
  DownloadIcon,
} from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Typewriter from "typewriter-effect";
import ProfilePic from "/public/self_portrait.jpg";
import { AnimatedButton } from "./ui/AnimatedButton";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <section id="hero">
      <div className="relative flex h-fit w-full flex-col pb-[10vh]">
        <div className="div_content relative mt-[10%] flex h-fit flex-col md:mt-[12%] md:flex-row md:justify-center">
          <h1 className="text-clamp z-[1] self-center font-light leading-none tracking-normal mix-blend-difference md:absolute md:bottom-[35%] md:left-[0%]">
            CHAI
          </h1>
          <h1 className="text-clamp z-[1] mb-8 self-center font-extrabold leading-none tracking-[-0.3rem] mix-blend-difference md:absolute md:-bottom-[8vw]">
            YOUXIANG
          </h1>
          <div className="relative aspect-square w-[90%] rotate-[8deg] self-center md:w-[30%]">
            <Image
              src={ProfilePic}
              alt="Self Portrait"
              fill
              priority
              className="rounded-[10%] object-cover"
            ></Image>
          </div>
          <div className="bottom-1/3 left-2/3 text-text md:absolute">
            <span className="text-[1vw]">{"I'm an aspiring"}</span>
            <span className="text-[6vw] font-bold md:text-[2vw]">
              <Typewriter
                options={{
                  strings: ["Software Engineer.", "Full Stack Developer."],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </div>
        </div>
        {/* <AnimatedButton /> */}
        <motion.button
          className="z-[2] mt-[8vw] self-center rounded-full border border-text px-6 py-4"
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.15, ease: "easeInOut" },
          }}
          whileTap={{ scale: 0.9 }}
        >
          <a
            href="/chaiyouxiang_resume_latest.pdf"
            download
            className="flex flex-row items-center"
          >
            <span className="text-buttons font-medium text-text">
              Download CV
            </span>
            <DownloadIcon className="ml-[0.5vw] h-[1vw] min-h-6 w-[1vw] min-w-6" />
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
            animate={{
              y: [0, -10, 0], // Move up by 10px and then back to the starting position
            }}
            transition={{
              duration: 1.5, // Duration of one full cycle (up and down)
              repeat: Infinity, // Repeat indefinitely
              ease: "easeInOut", // Easing function
            }}
          >
            <ArrowDownIcon
              className="h-[2vw] min-h-6 w-[2vw] min-w-6"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
          </motion.div>
        </div>

        <div className="absolute bottom-0 right-0 m-8 grid w-fit grid-cols-2 gap-x-4 text-[1vw] text-text">
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
