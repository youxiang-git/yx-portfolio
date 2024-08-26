"use client"

import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";

type NavLinks = {
	title: String;
	hash: String;
};

const sections: NavLinks[] = [
	{ title: "Hero", hash: "#hero" },
	{ title: "About", hash: "#about" },
	{ title: "Skills", hash: "#skill" },
	{ title: "Experience", hash: "#experience" },
	{ title: "Projects", hash: "#projects" },
];

const Navbar = () => {
	const [selected, setSelected] = useState<NavLinks | undefined>();

	return (
		<div className="flex flex-wrap gap-2 text-xl">
			{sections.filter((filterSect) => filterSect.title !== "Hero").map((sect, index) => (
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

const ChipTab = ({ section, selected, setSelected }: { section: NavLinks, selected: Boolean, setSelected: React.Dispatch<React.SetStateAction<NavLinks | undefined>>}) => {
	return (
		<button
			onClick={() => setSelected(section)}
			className={`${
				selected
					? ""
					: "hover:bg-slate-700"
			} text-textPrimary transition-colors px-2.5 py-0.5 rounded-md relative`}
		>
			<span className="relative z-10">{section.title}</span>
			{selected && (
				<motion.span
					layoutId="pill-tab"
					transition={{ type: "spring", duration: 0.5 }}
					className="absolute inset-0 z-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-md"
				></motion.span>
			)}
		</button>
	);
};

export default Navbar;
