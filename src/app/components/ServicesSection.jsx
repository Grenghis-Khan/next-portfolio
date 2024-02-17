"use client";
import React from "react";
import ServiceCard from "./ServiceCard";

const SERVICE_DATA = [
  {
    src: "/computer.jpg",
    alt: "Web Dev",
    title: "Web Development",
    summary:
      "I specialize in creating user-friendly websites with a focus on responsive design and seamless navigation.",
    points: (
      <ul className="list-disc pl-2">
        <li>Customized Web Solutions</li>
        <li>Engaging User Experience</li>
        <li>Optimized Performance</li>
      </ul>
    ),
  },
  {
    src: "/phone.jpg",
    alt: "App Dev",
    title: "App Development",
    summary:
      "From concept to launch, I develop innovative mobile applications tailored to your unique business needs.",
    points: (
      <ul className="list-disc pl-2">
        <li>Intuitive Mobile Apps</li>
        <li>Scalable Solutions</li>
        <li>Robust Backend Systems</li>
      </ul>
    ),
  },
  {
    src: "/microcontroller.jpg",
    alt: "Automation",
    title: "Automation Solutions",
    summary:
      "Leveraging my background in industrial automation, I offer cutting-edge solutions to streamline processes and enhance efficiency.",
    points: (
      <ul className="list-disc pl-2">
        <li>Automated Workflows</li>
        <li>Smart Technology Integration</li>
        <li>Enhanced Productivity</li>
      </ul>
    ),
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="scroll-mt-16 md:scroll-mt-24">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Services
      </h2>
      {SERVICE_DATA.map((item, index) => (
        <ServiceCard
          key={index}
          index={index}
          src={item.src}
          alt={item.alt}
          title={item.title}
          summary={item.summary}
          points={item.points}
        />
      ))}
    </section>
  );
};

export default ServicesSection;
