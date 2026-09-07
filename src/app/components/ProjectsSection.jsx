"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "BarbellX",
    description: "Simple barbell weight calculator",
    image: "/barbellx.jpg",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "/",
    previewUrl: "https://barbellx.digitallyfers.com/",
  },
  {
    id: 2,
    title: "Fountains Scorekeeper",
    description: "Player score keeper for the board game Fountains",
    image: "/fountains.jpg",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "/",
    previewUrl: "https://fountains-scorekeeper.web.app/",
  },
  {
    id: 3,
    title: "Shelf Destruct",
    description: "Make your Elf on the Shelf come alive!",
    image: "/shelf-destruct.jpg",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "/",
    previewUrl: "https://shelf-destruct.web.app/",
  },
  {
    id: 4,
    title: "Threadsmith",
    description: "Guided LLM chat via a structured decision tree",
    image: "/threadsmith.jpg",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "/",
    previewUrl: "https://www.threadsmith.live/",
  },
  {
    id: 5,
    title: "Reindeer Runner",
    description: "Holiday themed endless runner browser game",
    image: "/reindeer-runner.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "/",
    previewUrl: "https://reindeer-runner.vercel.app/",
  },
  {
    id: 6,
    title: "MoltOverflow",
    description: "Stack Overflow, but for AI agents",
    image: "/moltoverflow.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://www.moltoverflow.xyz/",
  },
  {
    id: 7,
    title: "oneCTRL",
    description:
      "Universal Cloud Remote App with Authorization and Firebase Realtime Database",
    image: "/oneCTRL.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "/",
    previewUrl: "https://my-pi-remote-frontend.vercel.app/",
  },
  {
    id: 8,
    title: "5280 CWS Website",
    description: "A Waste Managment Service built with WordPress",
    image: "/cws5280.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://cws5280.com/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [tabChanged, setTabChanged] = useState(false);

  const handleTagChange = (newTag) => {
    if (tag != newTag) {
      setTabChanged(false);
    }

    setTag(newTag);
  };

  const filteredProjects = tabChanged
    ? projectsData.filter((project) => project.tag.includes(tag))
    : [];

  if (filteredProjects.length === 0) {
    setTimeout(() => {
      setTabChanged(true);
    }, 10);
  }

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="portfolio" className="scroll-mt-24 min-h-screen">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Featured Work
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul
        ref={ref}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
      >
        {filteredProjects.map((project, index) => {
          return (
            <motion.li
              variants={cardVariants}
              initial="initial"
              animate={isInView && tabChanged ? "animate" : "initial"}
              key={index}
              transition={{ duration: 0.3, delay: index * 0.4 }}
            >
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
};

export default ProjectsSection;
