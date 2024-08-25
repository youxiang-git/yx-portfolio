import React from "react";

type NavLinks = {
	title: String;
	hash: String;
};

const sections: NavLinks[] = [
	{ title: "About", hash: "#about" },
	{ title: "Skills", hash: "#skill" },
	{ title: "Experience", hash: "#experience" },
	{ title: "Projects", hash: "#projects" },
];

const Navbar = () => {
	return <div>Navbar</div>;
};

export default Navbar;
