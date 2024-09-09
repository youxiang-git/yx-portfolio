"use client";
import {
  easeIn,
  easeInOut,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { RiGithubFill, RiLinksFill } from "react-icons/ri";
import FlipLink from "./FlipLink";
import { useRef } from "react";

type links = {
  linkTo: "github" | "demo";
  linkUrl: string;
};

export interface projectDetails {
  title: string[];
  image: StaticImageData;
  shortDesc: string[];
  links: links[];
  tech: string[];
}

const BentoCard = ({ details }: { details: projectDetails }) => {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end end"],
  });

  const transformX = useTransform(scrollYProgress, [0, 1], ["-100%", "0%"], {
    ease: easeIn,
  });
  const opacityY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["0%", "0%", "100%"],
  );

  return (
    <motion.div
      style={{ x: transformX, opacity: opacityY }}
      ref={cardRef}
      className="relative mx-auto mb-[2vw] flex h-[80vh] w-full flex-col p-[4vw] md:h-[20vw] md:w-[50vw] md:flex-row md:p-[0.5vw]"
    >
      <div className="absolute left-0 top-0 z-10 h-4 w-4 border-l-2 border-t-2 border-text"></div>
      <div className="absolute right-0 top-0 z-10 h-4 w-4 border-r-2 border-t-2 border-text"></div>
      <div className="absolute bottom-0 left-0 z-10 h-4 w-4 border-b-2 border-l-2 border-text"></div>
      <div className="absolute bottom-0 right-0 z-10 h-4 w-4 border-b-2 border-r-2 border-text"></div>
      {/* Background picture here */}
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{ scale: 0.9, cursor: "pointer" }}
        className="relative z-0"
      >
        <Image
          src={details.image}
          alt={details.title[0]}
          quality={80}
          className="mx-auto h-[30vh] object-cover object-center md:h-full md:w-[30vw]"
        ></Image>
      </motion.div>
      <div className="ml-[1vw] flex w-full flex-col items-end">
        {/* Links to projects */}
        <div className="absolute bottom-0 right-0 mr-[0.2vw] mt-[0.2vw] flex justify-end md:relative">
          {details.links.map((link, index) => {
            return (
              <Link
                className="relative ml-[0.5vw]"
                key={index}
                href={link.linkUrl}
              >
                {link.linkTo === "github" ? (
                  <FlipLink>
                    <RiGithubFill className="h-[8vw] w-[8vw] md:h-[1.4vw] md:w-[1.4vw]" />
                  </FlipLink>
                ) : (
                  <FlipLink>
                    <RiLinksFill className="h-[8vw] w-[8vw] md:h-[1.4vw] md:w-[1.4vw]" />
                  </FlipLink>
                )}
              </Link>
            );
          })}
        </div>
        {/* Title of project */}
        <div className="my-[2%] w-full pl-[2%] text-[5vw] font-bold md:text-[1.2vw]">
          {details.title.map((t, idx) => {
            return <h1 key={idx}>{t}</h1>;
          })}
        </div>
        <div className="relative z-10 w-[100%] rounded-xl border-solid p-[2%] text-[3vw] drop-shadow-lg md:text-[0.8vw]">
          {details.shortDesc.map((desc, index) => {
            return (
              <p key={index} className="text- mb-[2%]">
                {desc}
              </p>
            );
          })}
        </div>
        <div className="flex h-full w-full items-end">
          {details.tech.map((tag, index) => {
            return (
              <motion.span
                initial={{ y: 0 }}
                whileHover={{ y: "-10%", cursor: "default" }}
                key={index}
                className="mx-[0.8vw] text-[3vw] font-light italic md:text-[0.8vw]"
              >
                {tag}
              </motion.span>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default BentoCard;
