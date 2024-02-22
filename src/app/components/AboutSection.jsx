"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import TabButton from "./TabButton";

const tabs = ["Skills", "Education", "Certifications"];

const TAB_DATA = [
  {
    title: "Skills",
    id: "Skills",
    content: (
      <div className="flex flex-row">
        <ul className="list-disc pl-4">
          <li className="mb-1">Javascript</li>
          <li className="mb-1">Node.js</li>
          <li className="mb-1">Express</li>
          <li className="mb-1">MongoDB</li>
          <li className="mb-1">Firebase</li>
          <li className="mb-1">React</li>
        </ul>

        <ul className=" ml-6 md:ml-16 list-disc pl-2">
          <li className="mb-1">HTML</li>
          <li className="mb-1">CSS</li>
          <li className="mb-1">APIs</li>
          <li className="mb-1">Authentication</li>
          <li className="mb-1">Ladder Logic</li>
          <li className="mb-1">Circuit Design</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Education",
    id: "Education",
    content: (
      <ul className="list-disc pl-4">
        <li className="mb-1">
          The Complete 2023 Web Development Bootcamp - Udemy
        </li>
        <li className="mb-1">
          BS Electrical Engineering - University of Colorado Denver
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "Certifications",
    content: (
      <ul className="list-disc pl-4">
        <li className="mb-1">
          Javascript Algorithms and Data Structures - FreeCodeCamp
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("Skills");
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white scroll-mt-16" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/working.jpg"
          alt="Bryan At Work"
          width={500}
          height={500}
        />

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Hi I&apos;m Bryan, a web and app developer with a background in
            industrial automation. I specialize in creating customized digital
            solutions that seamlessly combine functionality and innovation. With
            years of experience, I have successfully delivered projects that are
            not only visually appealing but also technologically robust,
            ensuring a cutting-edge online presence for my clients.
          </p>
          <div className="flex flex-row justify-center  md:justify-start mt-8">
            {/* <TabButton
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
            </TabButton> */}
            {/* <div> */}
            {tabs.map((item, index) => (
              <button
                key={index}
                className={
                  item === selectedTab
                    ? "text-white m-2 mr-4"
                    : "text-[#ADB7BE] m-2 mr-4"
                }
                onClick={() => {
                  setSelectedTab(item);
                  setTab(item);
                }}
              >
                <p className={` font-semibold hover:text-white `}>{item}</p>
                {item === selectedTab ? (
                  <motion.div
                    className=" bottom-[-2px] left-0 right-0 h-[2px] bg-primary-500"
                    layoutId="underline"
                  />
                ) : null}
              </button>
            ))}
            {/* </div> */}
          </div>
          <div className="mt-4 h-40">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
