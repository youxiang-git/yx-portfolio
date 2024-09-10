"use client";
import MobileNavToggle from "@/app/components/Header/MobileNavToggle";
import Navbar from "@/app/components/Header/Navbar";
import { useScroll } from "framer-motion";
import { useEffect, useState } from "react";

const Header = () => {
  const { scrollYProgress } = useScroll();
  const [isScrollDown, setIsScrollDown] = useState(false);
  const [lastScrollProgress, setLastScrollProgress] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latestScrollProgress) => {
      if (latestScrollProgress > lastScrollProgress) {
        // Scrolling down
        setIsScrollDown(true);
      } else {
        // Scrolling up
        setIsScrollDown(false);
      }
      setLastScrollProgress(latestScrollProgress); // Update the last scroll progress value
    });

    return () => unsubscribe(); // Cleanup on component unmount
  }, [scrollYProgress, lastScrollProgress]);

  return (
    <>
      <div
        className={`fixed top-0 z-50 hidden w-screen justify-center bg-background/0 pt-[0.8vw] transition-all md:flex md:flex-row ${
          isScrollDown ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <Navbar />
      </div>
      <div className="md:hidden">
        <MobileNavToggle />
      </div>
    </>
  );
};

export default Header;
