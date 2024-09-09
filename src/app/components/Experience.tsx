import React from "react";
import { Timeline, TimelineEntry } from "@/app/components/ui/Timeline";

const data: TimelineEntry[] = [
  {
    title: "FinTech Intern",
    content: (
      <div>
        <h1 className="mb-[0.25vw] text-[4vw] underline underline-offset-[0.2vw] md:text-[1vw]">
          Ernst & Young, Singapore
        </h1>
        <h2 className="text-[3vw] md:text-[0.8vw]">ASEAN FinTech Intern</h2>
        <h2 className="mb-[3vw] text-[3vw] md:mb-[0.5vw] md:text-[0.8vw]">
          August 2017 - Feburary 2018
        </h2>
        <ul className="list-disc text-left text-[3vw] md:text-[1vw]">
          <li>
            Collaborated on and helped maintain a database of 1,000 Global
            Fintech Startups and 500 Investors for EY’s Investor Summit during
            the Singapore Fintech Festival 2017
          </li>
          <li>
            Initiated and automated Startup and Investor matching using SQL
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "Software Engineering Intern",
    content: (
      <div>
        <h1 className="mb-[0.25vw] text-[4vw] underline underline-offset-[0.2vw] md:text-[1vw]">
          Ministry of Home Affairs, Singapore
        </h1>
        <h2 className="text-[3vw] md:text-[0.8vw]">
          Software Engineering Intern
        </h2>
        <h2 className="mb-[3vw] text-[3vw] md:mb-[0.5vw] md:text-[0.8vw]">
          May 2022 - December 2022
        </h2>
        <ul className="list-disc text-left text-[3vw] md:text-[1vw]">
          <li>
            Designed and developed the front-end UI/UX for a mobile/web
            cross-platform application to track completion rates and progress of
            users within the department
          </li>
          <li>
            Leverages tools such as Figma for wireframing and collaboration;
            Node.js, React.js, Typescript and the Ionic framework for front-end
            development
          </li>
          <li>
            Employed a CI/CD pipeline using Microsoft Azure DevOps, GitHub and
            deployed the application onto Azure Kubernetes Service
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "Bachelor's Degree Graduation",
    content: (
      <div>
        <h1 className="mb-[0.25vw] text-[4vw] underline underline-offset-[0.2vw] md:text-[1vw]">
          Nanyang Technological University, Singapore
        </h1>
        <h2 className="text-[3vw] md:text-[0.8vw]">
          Bachelor of Engineering in Computer Science
        </h2>
        <h2 className="mb-[3vw] text-[3vw] md:mb-[0.5vw] md:text-[0.8vw]">
          August 2017 - Feburary 2018
        </h2>
        <ul className="list-disc text-left text-[3vw] md:text-[1vw]">
          <li>
            Elective focus - Artificial Intelligence, Data Science & Analytics
          </li>
        </ul>
      </div>
    ),
  },
];
const Experience = () => {
  return (
    <section id="experience" className="h-fit max-h-fit">
      <Timeline data={data}></Timeline>
    </section>
  );
};

export default Experience;
