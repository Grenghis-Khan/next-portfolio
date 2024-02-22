"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import GithubIcon from "./../../../public/github-icon.svg";
import emailjs from "@emailjs/browser";

const EmailSection = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  //-----------used for sending email via EmailJS-------------------//
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        () => {
          setError(true);
        }
      );
  };
  //-----------used for sending email via EmailJS-------------------//

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Bring Your Vision to Life
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          My inbox is always open. Whether you have a question or just want to
          say hi, I&apos;ll try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2 mb-12 justify-center md:justify-normal">
          <motion.div
            whileHover={{ scale: 1 }}
            whileTap={{ scale: 0.85 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <Link
              href="https://github.com/Grenghis-Khan"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Image src={GithubIcon} alt="Github Icon" />
            </Link>
          </motion.div>
        </div>
      </div>
      <div className="z-10">
        <form className="flex flex-col" onSubmit={sendEmail} ref={form}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block text-sm font-medium mb-2"
            >
              Email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="bg-[#161923] border border-[#2e3449] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="smith@email.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block text-sm font-medium mb-2"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="bg-[#161923] border border-[#2e3449] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Hello!"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm font-medium mb-2"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#161923] border border-[#2e3449] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
            />
          </div>
          <motion.div
            whileHover={{ scale: 1 }}
            whileTap={{ scale: 0.85 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
          </motion.div>
          {
            //if the email was submitted successfull, show a success message.
            success && (
              <p className="text-green-500 text-sm mt-2">
                Email sent successfully!
              </p>
            )
          }
          {
            //if the email failed, show a error message.
            error && (
              <p className="text-red-500 text-sm mt-2">
                Error sending Email, please try again.
              </p>
            )
          }
        </form>
      </div>
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-500 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
    </section>
  );
};

export default EmailSection;
