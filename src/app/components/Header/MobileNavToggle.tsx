"use client";
import React from "react";
import { useState } from "react";
import { NavLinks, sections } from "./NavLink";
import { motion, MotionConfig } from "framer-motion";

const variants = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["35%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "35%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      bottom: ["35%", "50%", "50%"],
      left: "50%",
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "35%"],
      left: "calc(50% + 10px)",
    },
  },
};

const MobileNavToggle = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <MotionConfig
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
    >
      <motion.button
        initial={false}
        animate={isOpen ? "open" : "closed"}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed right-0 top-0 z-50 mr-6 mt-6 h-20 w-20 rounded-full"
      >
        <motion.span
          variants={variants.top}
          className="absolute h-0.5 w-10 bg-white"
          style={{ left: "50%", top: "35%", x: "-50%", y: "-50%" }}
        />
        <motion.span
          variants={variants.middle}
          className="absolute h-0.5 w-10 bg-white"
          style={{ left: "50%", top: "50%", x: "-50%", y: "-50%" }}
        />
        <motion.span
          variants={variants.bottom}
          className="absolute h-0.5 w-5 bg-white"
          style={{
            x: "-50%",
            y: "50%",
            bottom: "35%",
            left: "calc(50% + 10px)",
          }}
        />
      </motion.button>
    </MotionConfig>
  );
};

export default MobileNavToggle;
