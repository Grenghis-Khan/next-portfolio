import React from "react";
import Link from "next/link";

const NavLink = ({ href, title, setNavbarOpen, navbarOpen }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
      onClick={() => {
        if (navbarOpen) {
          setNavbarOpen(false);
        }
      }}
    >
      {title}
    </Link>
  );
};

export default NavLink;
