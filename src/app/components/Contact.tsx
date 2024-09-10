import { motion, Variants } from "framer-motion";
import { DownloadIcon, MailIcon } from "lucide-react";
import { useState } from "react";

const elementsVariants: Variants = {
  hidden: { opacity: 0, y: "100%" },
  show: {
    opacity: [0, 0, 0, 1],
    y: 0,
  },
};

const Contact = () => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <section id="contact">
      <div className="relative mx-auto flex flex-col items-center justify-center">
        <h1 className="text-[5vw] md:text-[2vw]">{`Let's get in touch!`}</h1>
        <p className="pt-[1vw] text-[3vw] md:text-[1vw]">
          {`I'm currently open to full-time opportunities.`}
        </p>
        <div className="my-[5vh] flex md:my-0">
          <motion.button
            initial="hidden"
            whileInView="show"
            variants={elementsVariants}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="relative z-[10] m-[2vw] items-center self-center border-text md:mt-[5vw]"
            onMouseDown={() => setIsClicked(true)}
            onMouseUp={() => setIsClicked(false)}
          >
            <a
              href="/chaiyouxiang_resume_latest.pdf"
              download
              className="relative flex flex-row items-center"
            >
              <span
                className={`duration-50 ease relative z-[10] flex rounded-full border bg-background px-[3vw] py-[2vw] text-[4vw] font-medium text-text transition-all ease-out md:px-[0.8vw] md:py-[0.5vw] md:text-[1vw] ${isClicked ? "" : "hover:-translate-y-2 hover:translate-x-2"}`}
              >
                Download CV
                <DownloadIcon className="ml-[0.5vw] h-[4vw] w-[4vw] self-center md:h-[1vw] md:w-[1vw]" />
              </span>
              <span className="absolute z-[5] size-full rounded-full border bg-text" />
            </a>
          </motion.button>
          <motion.button
            initial="hidden"
            whileInView="show"
            variants={elementsVariants}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="relative z-[10] m-[2vw] items-center self-center border-text md:mt-[5vw]"
            onMouseDown={() => setIsClicked(true)}
            onMouseUp={() => setIsClicked(false)}
          >
            <a
              href="mailto:chaiyouxiang@gmail.com"
              rel="noopener noreferrer"
              target="_blank"
              className="relative flex flex-row items-center"
            >
              <span
                className={`duration-50 ease relative z-[10] flex rounded-full border bg-background px-[3vw] py-[2vw] text-[4vw] font-medium text-text transition-all ease-out md:px-[0.8vw] md:py-[0.5vw] md:text-[1vw] ${isClicked ? "" : "hover:-translate-y-2 hover:translate-x-2"}`}
              >
                Say hi!
                <MailIcon className="ml-[2vw] h-[4vw] w-[4vw] self-center md:ml-[1vw] md:h-[1vw] md:w-[1vw]" />
              </span>
              <span className="absolute z-[5] size-full rounded-full border bg-text" />
            </a>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
