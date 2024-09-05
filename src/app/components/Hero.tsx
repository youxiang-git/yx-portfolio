"use client";

import {
  ArrowDownIcon,
  ArrowTopRightIcon,
  DownloadIcon,
} from "@radix-ui/react-icons";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import Typewriter from "typewriter-effect";
import ProfilePic from "/public/self_portrait.jpg";

const Hero = () => {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const translateYMobile = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "120%"],
  );
  const opacityMobile = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scaleMobile = useTransform(scrollYProgress, [0, 1], [1, 0.1]);

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
    <section id="hero" ref={ref}>
      <div className="relative mx-auto flex h-fit w-[90vw] flex-col self-center">
        <div className="relative mt-[10vw] flex h-fit flex-col md:flex-row md:justify-center">
          <motion.h1
            variants={h1Right}
            initial="hidden"
            animate="show"
            viewport={{ once: true }}
            className="z-[1] self-center text-clamp font-light leading-none tracking-normal mix-blend-difference md:absolute md:bottom-[6vw] md:left-[1.8vw]"
          >
            CHAI
          </motion.h1>
          <motion.h1
            variants={h1Left}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            exit={{ opacity: 0 }}
            className="z-[1] mb-[5vw] self-center text-clamp font-extrabold leading-none tracking-[-0.5vw] mix-blend-difference md:absolute md:-bottom-[8vw] md:mb-0"
          >
            YOUXIANG
          </motion.h1>
          {/* Profile Picture Desktop */}
          <motion.div
            className="relative hidden aspect-square w-[82vw] self-center md:block md:w-[23vw]"
            variants={imageAnimation}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            style={{ y: translateY }}
          >
            <Image
              src={ProfilePic}
              alt="Self Portrait"
              fill
              priority
              className="rounded-[10%] object-cover"
            ></Image>
          </motion.div>
          {/* Profile Picture Desktop */}
          <motion.div
            className="relative aspect-square w-[82vw] self-center md:hidden md:w-[23vw]"
            variants={imageAnimation}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            style={{
              y: translateYMobile,
              opacity: opacityMobile,
              scale: scaleMobile,
            }}
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
            <span className="relative z-10 text-buttons">
              {"I'm an aspiring"}
            </span>
            <span className="relative z-10 text-tw font-bold">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .pauseFor(800)
                    .typeString("Software Engineer.")
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString("Full Stack Developer.")
                    .pauseFor(2000)
                    .start();
                }}
                options={{ loop: true }}
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
          className="relative z-[10] m-[4vw] items-center self-center border-text md:mt-[10vw]"
          onMouseDown={() => setIsClicked(true)}
          onMouseUp={() => setIsClicked(false)}
        >
          <a
            href="/chaiyouxiang_resume_latest.pdf"
            download
            className="relative flex flex-row items-center"
          >
            <span
              className={`duration-50 ease relative z-[10] flex rounded-full border bg-background px-[3vw] py-[2vw] text-[4vw] font-medium text-text transition-all ease-out md:px-[0.8vw] md:py-[0.5vw] md:text-[1vw] ${isClicked ? "" : "hover:-translate-y-2 hover:translate-x-2"}`}
            >
              Download CV
              <DownloadIcon className="ml-[0.5vw] h-[4vw] w-[4vw] self-center md:h-[1vw] md:w-[1vw]" />
            </span>
            <span className="absolute z-[5] size-full rounded-full border bg-text" />
          </a>
        </motion.button>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-0 left-0 m-[1vw] hidden flex-col items-center md:flex">
          <motion.div
            className="mb-[1vw] text-[0.8vw]"
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
          >
            <ArrowDownIcon
              className="h-[2vw] w-[2vw] animate-bounce"
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
          className="absolute bottom-0 right-0 m-[1vw] hidden w-fit grid-cols-2 gap-x-[0.5vw] text-[1vw] text-text md:grid"
        >
          <Link
            href="https://www.linkedin.com/in/youxiang-chai/"
            className="group/linkedin flex transform items-center overflow-hidden transition-all"
          >
            LinkedIn
            <ArrowTopRightIcon className="h-[1vw] w-[1vw] group-hover/linkedin:animate-flyUp" />
          </Link>
          <Link
            href="https://github.com/youxiang-git"
            className="group/gh flex size-fit transform items-center overflow-hidden transition-all"
          >
            GitHub
            <ArrowTopRightIcon className="h-[1vw] w-[1vw] group-hover/gh:animate-flyUp" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
