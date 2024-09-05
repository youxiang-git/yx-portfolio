"use client";

import {
  AnimationControls,
  motion,
  TargetAndTransition,
  VariantLabels,
  Variants,
} from "framer-motion";
import React, { useRef, useState } from "react";

const MagneticIcons = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [iconPos, setIconPos] = useState({ x: 0, y: 0 });

  const mouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current!.getBoundingClientRect();

    const x = clientX - (left + width / 4);
    const y = clientY - (top + height / 4);

    setIconPos({ x, y });
  };

  const mouseLeave = () => {
    setIconPos({ x: 0, y: 0 });
  };

  const { x, y } = iconPos;

  return (
    <motion.div
      ref={ref}
      onMouseMove={mouseMove}
      onMouseLeave={mouseLeave}
      animate={{ x, y }}
      transition={{ type: "tween", stiffness: 200, damping: 10 }}
      whileHover={{ scale: 1.2 }}
    >
      {children}
    </motion.div>
  );
};

export default MagneticIcons;
