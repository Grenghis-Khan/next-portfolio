"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="flex flex-row">
        <ul className="list-disc pl-2">
          <li>Javascript</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>MongoDB</li>
          <li>Firebase</li>
          <li>React</li>
        </ul>

        <ul className=" ml-16 list-disc pl-2">
          <li>HTML</li>
          <li>CSS</li>
          <li>APIs</li>
          <li>Authentication</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>The Complete 2023 Web Development Bootcamp - Udemy</li>
        <li>BS Electrical Engineering - University of Colorado Denver</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Javascript Algorithms and Data Structures - FreeCodeCamp</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/working.jpg"
          alt="Bryan At Work"
          width={500}
          height={500}
        />

        <div className="mt-4 md:mt-0 text-left flex flex-col h-[515px]">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Hi I&apos;m Bryan, a web and app developer with a background in
            industrial automation. I specialize in creating customized digital
            solutions that seamlessly combine functionality and innovation. With
            years of experience, I have successfully delivered projects that are
            not only visually appealing but also technologically robust,
            ensuring a cutting-edge online presence for my clients.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
