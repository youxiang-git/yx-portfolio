"use client";
import About from "@/app/components/About";
import Contact from "@/app/components/Contact";
import Experience from "@/app/components/Experience";
import Hero from "@/app/components/Hero";
import Projects from "@/app/components/Projects";
import Skills from "@/app/components/Skills";
import { ReactLenis, useLenis } from "lenis/react";

export default function Home() {
  return (
    <main>
      <ReactLenis root>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </ReactLenis>
    </main>
  );
}
