import Header from "@/app/components/Header/Header";
import About from "@/app/components/About";
import Contact from "@/app/components/Contact";
import Experience from "@/app/components/Experience";
import Hero from "@/app/components/Hero";
import Projects from "@/app/components/Projects";
import Skills from "@/app/components/Skills";
import { AuroraBackground } from "@/app/components/ui/Aurora";

export default function Home() {
  return (
    <main className="container mx-auto">
      {/* <AuroraBackground> */}
      <Hero />
      {/* </AuroraBackground> */}
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
