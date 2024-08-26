import React from "react";
import Link from "next/link";
import Navbar from "@/app/components/Header/Navbar";
import ContactButton from "@/app/components/Header/ContactButton";
import MobileNavToggle from "@/app/components/Header/MobileNavToggle";

const Header = () => {
  return (
    <>
      <div className="fixed top-0 z-50 hidden w-screen items-center justify-between bg-background/50 py-8 text-xl backdrop-blur-sm md:flex md:flex-row">
        <Link className="ml-8" href="/">
          <span>Chai Youxiang</span>
        </Link>
        <Navbar />
        <ContactButton />
      </div>
      <div className="flex md:hidden">
        <MobileNavToggle />
      </div>
    </>
  );
};

export default Header;
