"use client";

import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { easeInOut } from "framer-motion/dom";
import Image from "next/image";
import { useEffect, useRef } from "react";
import ProfilePic from "/public/self_portrait.jpg";

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const translateYImageMobile = useTransform(
    scrollYProgress,
    [0, 0.5],
    ["-150%", "0%"],
    { ease: easeInOut },
  );
  const translateYImageOpacityMobile = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 1],
    [0, 0, 1, 1],
    { ease: easeInOut },
  );

  const translateYImageOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0, 1, 1, 0],
    { ease: easeInOut },
  );

  const translateYImage = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    ["-50%", "0%", "0%", "50%"],
    { ease: easeInOut },
  );

  const translateYAbout = useTransform(
    scrollYProgress,
    [0, 0.2, 0.75, 1],
    [0, 1, 1, 0],
    {
      ease: easeInOut,
    },
  );

  const translateYAbout1 = useTransform(
    scrollYProgress,
    [0.1, 0.3, 0.8, 1],
    [0, 1, 1, 0],
    {
      ease: easeInOut,
    },
  );

  const translateYAbout2 = useTransform(
    scrollYProgress,
    [0.2, 0.4, 0.85, 1],
    [0, 1, 1, 0],
    {
      ease: easeInOut,
    },
  );

  const translateYAbout3 = useTransform(
    scrollYProgress,
    [0.3, 0.5, 0.9, 1],
    [0, 1, 1, 0],
    {
      ease: easeInOut,
    },
  );

  return (
    <section id="about" ref={ref}>
      <div className="p mx-auto my-[10%] flex w-[90vw] items-center justify-center md:mt-0">
        <div className="flex size-full flex-col items-center justify-center md:flex-row">
          {/* Profile Picture Desktop*/}
          <motion.div
            className="relative hidden h-[35vw] w-[20vw] md:block"
            style={{ y: translateYImage, opacity: translateYImageOpacity }}
          >
            <Image
              src={ProfilePic}
              alt="Self Portrait"
              priority
              fill
              className="rotate-[8deg] rounded-bl-[6rem] rounded-tr-[6rem] object-cover object-[45%]"
            ></Image>
          </motion.div>
          {/* Profile Picture Mobile*/}
          <motion.div
            className="relative h-[40vw] w-[40vw] md:hidden"
            style={{
              y: translateYImageMobile,
              opacity: translateYImageOpacityMobile,
            }}
          >
            <Image
              src={ProfilePic}
              alt="Self Portrait"
              priority
              fill
              className="rotate-[8deg] rounded-full object-cover object-[45%]"
            ></Image>
          </motion.div>
          <div className="ml-[4vw] flex h-[70%] w-[80vw] flex-col md:h-[35vw] md:w-[50vw]">
            <motion.span
              className="my-[6vw] text-center text-[5vw] font-extrabold leading-[2vw] text-text md:my-[2vw] md:text-left md:text-[2vw]"
              style={{ opacity: translateYAbout }}
            >
              About me
            </motion.span>
            <div className="flex h-full flex-col justify-between pb-[8vw] text-justify text-[3.3vw] leading-normal text-text md:pb-0 md:text-left md:text-[1.2vw] md:leading-loose">
              <motion.p style={{ opacity: translateYAbout1 }}>
                {`My name is Chai Youxiang and I’m a fresh graduate of Computer
                Science from Nanyang Technological University, Singapore. I’ve
                always had a deep passion for Software and Web Development and I
                thrive on learning new technologies to expand my skillset.`}
              </motion.p>
              <motion.p style={{ opacity: translateYAbout2 }}>
                {`My goal is to create software that is not only functional, but
                  engaging and user-oriented. I strongly believe in creating
                  experiences that resonate with the user and applications that
                  are accessible and easy to use.`}
              </motion.p>
              <motion.p style={{ opacity: translateYAbout3 }}>
                <b>Currently, I am looking for full time opportunities </b>
                where I can contribute my skills and continue to grow as a
                developer.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
