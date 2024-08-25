import React from "react";
import Link from "next/link";
import Navbar from "@/app/components/Header/Navbar";
import ContactButton from "@/app/components/Header/ContactButton";

const Header = () => {
	return (
		<div className="flex flex-row justify-between">
      <Link href="/">Chai Youxiang</Link>
			<Navbar />
      <ContactButton />
		</div>
	);
};

export default Header;
