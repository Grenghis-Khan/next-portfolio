import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const NavLink = ({
  href,
  title,
  setNavbarOpen,
  navbarOpen,
  setBigNavClicked,
  setClickedHref,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1 }}
      whileTap={{ scale: 0.85 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      <Link
        href={href}
        className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
        onClick={() => {
          setClickedHref(href);
          setBigNavClicked(true);
          if (navbarOpen) {
            setNavbarOpen(false);
          }
        }}
      >
        {title}
      </Link>
    </motion.div>
  );
};

export default NavLink;
