"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

export const AnimatedButton = ({
  className,
  text = "Click Me",
  initialColor = "#007bff", // Initial background color of the button
  animateColor = "#00d1b2", // Color of the expanding circle
}: {
  className?: string;
  text?: string;
  initialColor?: string;
  animateColor?: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative inline-block rounded-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Expanding circle */}

      {/* Button content */}
      <motion.button
        className={`relative overflow-clip rounded-full px-6 py-3 font-bold text-white focus:outline-none ${className}`}
        style={{ backgroundColor: initialColor }}
      >
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{ backgroundColor: animateColor }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: isHovered ? 1.5 : 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
          }}
        />
        <span className="relative">{text}</span>
      </motion.button>
    </div>
  );
};
