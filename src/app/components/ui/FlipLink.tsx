"use client";
import { motion } from "framer-motion";
import React from "react";
import { RiGithubFill } from "react-icons/ri";

const FlipLink = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      className="relative m-[2vw] h-[8vw] w-[8vw] overflow-hidden md:m-0 md:h-[1.4vw] md:w-[1.4vw]"
      initial="initial"
      whileHover="hovered"
    >
      <motion.div variants={{ initial: { y: 0 }, hovered: { y: "-100%" } }}>
        {children}
      </motion.div>
      <motion.div
        className="absolute inset-0"
        variants={{ initial: { y: "100%" }, hovered: { y: 0 } }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default FlipLink;
