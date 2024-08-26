"use client";

import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { NavLinks, sections } from "@/app/components/Header/NavLink";

const Navbar = () => {
  const [selected, setSelected] = useState<NavLinks | undefined>();

  return (
    <div className="flex md:gap-1 lg:gap-2">
      {sections
        .filter((filterSect) => filterSect.title !== "Hero")
        .map((sect, index) => (
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
  selected,
  setSelected,
}: {
  section: NavLinks;
  selected: Boolean;
  setSelected: React.Dispatch<React.SetStateAction<NavLinks | undefined>>;
}) => {
  return (
    <button
      onClick={() => setSelected(section)}
      className={`${
        selected ? "" : "hover:text-accent"
      } relative rounded-md px-2.5 py-0.5 text-text transition-colors`}
    >
      <span className="relative z-10">{section.title}</span>
      {selected && (
        <motion.span
          layoutId="pill-tab"
          transition={{ type: "spring", duration: 0.5 }}
          className="absolute inset-0 z-0 rounded-md bg-gradient-to-r from-secondary to-primary"
        ></motion.span>
      )}
    </button>
  );
};

export default Navbar;
