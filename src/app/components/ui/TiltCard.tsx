import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { cn } from "@/app/lib/utils";

const TiltCard = ({
  children,
  className,
}: {
  children: any;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x);
  const springY = useSpring(y);

  const transform = useMotionTemplate`rotateX(${springX}deg) rotateY(${springY}deg)`;

  const rotateX = useTransform(springY, [-0.5, 0.5], ["20deg", "-20deg"]);
  const rotateY = useTransform(springX, [-0.5, 0.5], ["-20deg", "20deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const percentX = mouseX / width - 0.5;
    const percentY = mouseY / height - 0.5;

    x.set(percentX);
    y.set(percentY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(8);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(className)}
      style={{ transformStyle: "preserve-3d", rotateX, rotateY }}
    >
      {children}
    </motion.div>
  );
};

export default TiltCard;
