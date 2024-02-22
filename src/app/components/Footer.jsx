"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent border-b-transparent text-white">
      <div className="container p-12 flex flex-wrap justify-center md:justify-between">
        {/* <span> */}
        <motion.div
          whileHover={{ scale: 1 }}
          whileTap={{ scale: 0.85 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          <Link href={"/"}>
            <Image
              src="/DL-logo.jpg"
              alt="Logo Image"
              width={70}
              height={70}
              className="rounded-full m-6"
            />
          </Link>
        </motion.div>

        {/* </span> */}

        <p className="text-slate-600 self-center">
          Copyright © {currentYear} Digital Lyfers
        </p>
      </div>
    </footer>
  );
};

export default Footer;
