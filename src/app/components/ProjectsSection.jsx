import React from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "Coin MC Analyzer",
    description:
      "Cryptocurrency filtering site using CoinGecko's API and MongoDB",
    image: "/crypto-mc-calculator.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://crypto-mc-calculator.vercel.app/",
  },
  {
    id: 2,
    title: "oneCTRL",
    description:
      "Universal Cloud Remote App with Authorization and Firebase Realtime Database",
    image: "/oneCTRL.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "/",
    previewUrl: "https://my-pi-remote-frontend.vercel.app/",
  },
  {
    id: 3,
    title: "Daily Journal",
    description: "A simple daily journal using MongoDB",
    image: "/dailyjournal-kyqw.onrender.com_.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://dailyjournal-kyqw.onrender.com/",
  },
  {
    id: 4,
    title: "To Do List",
    description: "A simple To Do list using MongoDB",
    image: "/todolist-ii7i.onrender.com_.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://todolist-ii7i.onrender.com/",
  },
  {
    id: 5,
    title: "5280 CWS Website",
    description: "A Waste Managment Service built with WordPress",
    image: "/cws5280.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://ik8.8b1.myftpupload.com/",
  },
  {
    id: 6,
    title: "tindog",
    description: "tinder... for dogs",
    image: "/tindog.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://tindog-a35c.onrender.com/",
  },
];

const ProjectsSection = () => {
  return (
    <section id="portfolio" className="scroll-mt-16 md:scroll-mt-24">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Featured Work
      </h2>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;