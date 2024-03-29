"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { motion, AnimatePresence } from "framer-motion";

export const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Services",
    path: "#services",
  },
  {
    title: "Portfolio",
    path: "#portfolio",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

let initLoad = true;
let settingsBtnW = "w-6";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [navItemClicked, setNavItemClicked] = useState(false);
  const [bigNavClicked, setBigNavClicked] = useState(false);
  const [clickedHref, setClickedHref] = useState("");
  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const closeVariants = {
    closed: {
      x: "100vw",
      backgroundColor: "rgb(255,255,255)",
      opacity: 0,
      transition: { duration: 0.5, x: { delay: 0.5 } },
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  const navVariants = {
    initial: {
      y: 0,
      //backgroundColor: "rgb(255,255,255)",
      opacity: 0,
      transition: { duration: 0 },
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.1,
        //ease: "circOut",
      },
    },
    exit: {
      y: 0,
      //backgroundColor: "rgb(255,255,255)",
      opacity: 0,
      transition: { duration: 0.1 },
    },
  };

  useEffect(() => {
    if (bigNavClicked) {
      console.log("setting to false");
      setTimeout(() => setBigNavClicked(false), 1000);
    }
  }, [bigNavClicked]);

  settingsBtnW = navbarOpen ? "w-8 left-2" : "w-6";

  return (
    <nav className="fixed z-20 top-0 left-0 right-0 bg-[#090c17] bg-opacity-100 border border-[#33353F] border-l-transparent border-r-transparent border-t-transparent">
      {/* <AnimatePresence>
        {bigNavClicked && (
          <motion.div
            variants={navVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed top-0 left-0 w-full h-full bg-[#161923] text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
          >
            {clickedHref.charAt(1).toUpperCase() + clickedHref.slice(2)}
          </motion.div>
        )}
      </AnimatePresence> */}
      <div className="flex container lg:py-4 items-center justify-between mx-auto px-4 py-4">
        <motion.div
          whileHover={{ scale: 1 }}
          whileTap={{ scale: 0.85 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          <Link
            href={"/"}
            className="text-2xl md:text-5xl text-white font-semibold"
            //onClick={() => setNavbarOpen(false)}
          >
            <Image
              src="/DL-logo.jpg"
              alt="Logo Image"
              width={50}
              height={50}
              className="rounded-full "
            />
          </Link>
        </motion.div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  href={link.path}
                  title={link.title}
                  setBigNavClicked={setBigNavClicked}
                  setClickedHref={setClickedHref}
                />
              </li>
            ))}
          </ul>
        </div>
        {/* RESPONSIVE MENU */}
        <div className="md:hidden">
          {/* MENU BUTTON */}
          <button
            className={`${settingsBtnW} h-6 flex flex-col justify-between z-50 relative`}
            onClick={() => {
              initLoad = false;
              setNavbarOpen((prev) => !prev);
              setNavItemClicked(false);
            }}
          >
            <motion.div
              variants={topVariants}
              animate={navbarOpen ? "opened" : "closed"}
              className={`${settingsBtnW} h-0.5 bg-white rounded origin-left`}
            ></motion.div>
            <motion.div
              variants={centerVariants}
              animate={navbarOpen ? "opened" : "closed"}
              className={`${settingsBtnW} h-0.5 bg-white rounded`}
            ></motion.div>
            <motion.div
              variants={bottomVariants}
              animate={navbarOpen ? "opened" : "closed"}
              className={`${settingsBtnW} h-0.5 bg-white rounded origin-left`}
            ></motion.div>
          </button>
          {/* MENU LIST */}
          {navbarOpen && (
            <motion.div
              variants={listVariants}
              initial="closed"
              animate="opened"
              className="absolute top-0 left-0 w-screen h-screen bg-[#161923] text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
            >
              {navLinks.map((link) => (
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 500, transition: { duration: 5 } }}
                  variants={listItemVariants}
                  className=""
                  key={link.title}
                >
                  <Link
                    href={link.path}
                    onClick={() => {
                      //setNavbarOpen(false);
                      setNavbarOpen((prev) => !prev);
                      setNavItemClicked(true);
                    }}
                  >
                    {link.title}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
          {!navbarOpen && navItemClicked && (
            <motion.div
              variants={closeVariants}
              initial="opened"
              animate="closed"
              transition={{ delay: 1 }}
              className="absolute top-0 left-0 w-screen h-screen bg-[#161923] text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
            ></motion.div>
          )}
          {!navbarOpen && !navItemClicked && !initLoad && (
            <motion.div
              variants={listVariants}
              initial="opened"
              animate="closed"
              transition={{ delay: 0.1 }}
              className="absolute top-0 left-0 w-screen h-screen bg-[#161923] text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
            ></motion.div>
          )}
        </div>

        {/* <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div> */}
      </div>
      {/* {navbarOpen ? (
        <MenuOverlay
          links={navLinks}
          setNavbarOpen={setNavbarOpen}
          navbarOpen={navbarOpen}
        />
      ) : null} */}
    </nav>
  );
};

export default Navbar;
