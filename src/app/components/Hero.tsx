"use client";

import React from "react";
import Image from "next/image";
import ProfilePic from "/public/self_portrait.jpg";
import { AuroraBackground } from "./ui/Aurora";

const Hero = () => {
  return (
    <section id="hero">
      <div className="min-h-[320px]w-screen relative flex h-screen flex-col items-center md:flex-row md:justify-center">
        <div className="relative my-auto aspect-square w-[70%] max-w-xl rotate-[8deg] transform lg:w-[60%]">
          <Image
            src={ProfilePic}
            alt="Self Portrait"
            fill
            priority
            className="rounded-[10%] object-cover"
          ></Image>
        </div>
        <h1 className="z-10 mt-8 w-fit text-[4rem] font-light leading-none tracking-normal mix-blend-difference md:absolute md:text-[16rem] md:tracking-[-1.5rem] lg:left-[20%]">
          CHAI
        </h1>
        <h1 className="bottom-0 z-10 text-[4rem] font-bold leading-none tracking-[-0.3rem] mix-blend-difference md:absolute md:text-[16rem]">
          YOUXIANG
        </h1>
      </div>
    </section>
  );
};

export default Hero;
