"use client";

import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { NavLinks, sections } from "@/app/components/Header/NavLink";
import { useLenis } from "lenis/react";

const Navbar = () => {
  const [selected, setSelected] = useState<NavLinks | undefined>();

  return (
    <div className="relative flex items-center justify-around border-b-[0.5px] border-text/80 bg-background pb-[0.4vw] md:gap-1 lg:gap-2">
      {sections.map((sect, index) => (
        <ChipTab
          section={sect}
          selected={selected === sect}
          setSelected={setSelected}
          key={index}
        />
      ))}
    </div>
  );
};

const ChipTab = ({
  section,
}: {
  section: NavLinks;
  selected: Boolean;
  setSelected: React.Dispatch<React.SetStateAction<NavLinks | undefined>>;
}) => {
  const lenis = useLenis();

  return (
    <motion.button
      onClick={() => {
        lenis?.scrollTo(section.hash);
      }}
      className="relative flex overflow-hidden text-[1vw]"
      initial="initial"
      whileHover="hovered"
    >
      <motion.span
        className="relative inset-0 px-[1vw]"
        variants={{ initial: { y: 0 }, hovered: { y: "-100%" } }}
      >
        {section.title}
      </motion.span>
      <motion.span
        className="absolute inset-0"
        variants={{ initial: { y: "100%" }, hovered: { y: 0 } }}
      >
        {section.title}
      </motion.span>
    </motion.button>
  );
};

export default Navbar;
