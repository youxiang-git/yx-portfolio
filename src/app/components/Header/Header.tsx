import React from "react";
import Link from "next/link";
import Navbar from "@/app/components/Header/Navbar";
import ContactButton from "@/app/components/Header/ContactButton";

const Header = () => {
	return (
		<div className="sticky bg-background py-8 flex flex-row justify-between text-xl">
      <Link className="ml-4" href="/"><span>Chai Youxiang</span></Link>
			<Navbar />
      <ContactButton />
		</div>
	);
};

export default Header;
