"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-7 place-self-center text-center sm:text-left justify-self-start"
        >
          <div className=" h-28 lg:h-auto">
            <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary-500 to-secondary-600">
                Hello I&apos;m{" "}
              </span>
              <TypeAnimation
                sequence={[
                  "Bryan",
                  1000,
                  "a Web Developer",
                  1000,
                  "a Mobile Developer",
                  1000,
                  "a UI/UX Designer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h1>
          </div>

          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
            Welcome to my personal website, where creativity meets technology to
            transform your digital presence.
          </p>
          <div>
            {/* <button onClick={() => (location.href = "#contact")} className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-primary-500 text-slate-100 hover:bg-primary-600  "> */}
            <button
              onClick={() => (location.href = "#contact")}
              className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-800 text-slate-100 hover:bg-primary-600  "
            >
              Let&apos;s Collaborate
            </button>
            <button
              onClick={() => (location.href = "#portfolio")}
              className="px-1 py-1 w-full sm:w-fit rounded-full  bg-gradient-to-br from-primary-500 to-secondary-800 text-slate-100 mt-3"
            >
              <span className="block bg-[#090c17] hover:bg-[#191e24] rounded-full px-5 py-2">
                {" "}
                Explore My Work
              </span>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-5 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] relative">
            <Image
              src="/bryan.jpeg"
              alt="Hero Image"
              width={300}
              height={300}
              className="rounded-full absolute transform w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
