"use client";
import React from "react";
import BentoCard, { projectDetails } from "@/app/components/ui/BentoCard";
import fyp_pic from "/public/fyp_pic.png";
import distill_train from "/public/training.png";
import portfolio_pic from "/public/portfolio_website.png";
import { useScroll } from "framer-motion";

const projects: projectDetails[] = [
  {
    title: [
      "Deep Learning Methods with Less Supervision",
      " (Final Year Project)",
    ],
    image: fyp_pic,
    shortDesc: [
      `Developed a framework for training segmentation models with weak forms of supervision, using foundational models such as Meta's Segment Anything Model for pseudo-label generation.`,
      `Fine-tuned a fully-connected-network with a ResNet50 backbone based on generated pseudo labels and incorporated Conditional Random Fields as a post-processing technique.`,
    ],
    links: [
      {
        linkTo: "demo",
        linkUrl: "https://dr.ntu.edu.sg/handle/10356/172909",
      },
      {
        linkTo: "github",
        linkUrl: "https://github.com/youxiang-git/WSSS_method",
      },
    ],
    tech: ["Python", "PyTorch", "OpenCV", "Segment-Anything-Model"],
  },
  {
    title: ["Developer Portfolio Website"],
    image: portfolio_pic,
    shortDesc: [
      "A personal web developer portfolio website created using React and NextJS, written in Typescript.",
      "",
    ],
    links: [
      {
        linkTo: "github",
        linkUrl: "https://github.com/youxiang-git/yx-portfolio",
      },
    ],
    tech: ["TS", "ReactJS", "Next.JS", "Framer-Motion"],
  },
  {
    title: ["Knowledge Distillation Exploration"],
    image: distill_train,
    shortDesc: [
      "Explored Knowledge Distillation using PyTorch models for classification on the Fashion-MNIST dataset",
      `Experimented with distilling knowledge from ResNet as the teacher model to MobileNet as the student model
        using KL-Divergence as the loss function`,
    ],
    links: [
      {
        linkTo: "github",
        linkUrl: "https://github.com/youxiang-git/totally_not_dl_proj",
      },
    ],
    tech: ["PyTorch", "Fashion-MNIST", "Torchvision"],
  },
];

const BentoGrid = () => {
  return (
    <div className="mx-auto flex h-fit w-[90vw] flex-col">
      {projects.map((proj, index) => {
        return <BentoCard key={index} details={proj} />;
      })}
    </div>
  );
};

export default BentoGrid;
