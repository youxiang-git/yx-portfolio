"use client";

import { motion, Variants } from "framer-motion";
import React from "react";
import Image from "next/image";
import ProfilePic from "/public/self_portrait.jpg";

const imageAnimation: Variants = {
  hidden: { opacity: 0, y: -200 },
  show: {
    opacity: 1,
    y: 0,
    rotate: [0, 8],
    transition: { delay: 0.2, duration: 0.5 },
  },
};

const About = () => {
  return (
    <section id="about">
      <div className="div_content mt-[10%] md:mt-[5%]">
        <div className="flex">
          <motion.div
            className="relative h-[50vh] w-[40%] md:w-[30vw]"
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
              className="rounded-bl-[6rem] rounded-tr-[6rem] object-cover object-[45%]"
            ></Image>
          </motion.div>
          <div className="ml-[4vw] flex w-[70vw] flex-col justify-around text-2xl">
            <h1 className="text-[4vw] text-text md:text-[2vw]">About me</h1>
            <p className="leading-[4vh]">
              My name is Chai Youxiang and I’m a fresh graduate of Computer
              Science from Nanyang Technological University, Singapore. I’ve
              always had a deep passion for Software and Web Development and I
              thrive on learning new technologies to expand my skillset.
            </p>
            <p className="leading-[4vh]">
              My goal is to create software that is not only functional, but
              engaging and user-oriented. I strongly believe in creating
              experiences that resonate with the user and applications that are
              accessible and easy to use.
            </p>
            <p className="leading-[4vh]">
              Currently, I am looking for full time opportunities where I can
              contribute my skills and continue to grow as a developer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
