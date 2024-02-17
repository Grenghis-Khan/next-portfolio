import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ links, setNavbarOpen, navbarOpen }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink
            href={link.path}
            title={link.title}
            setNavbarOpen={setNavbarOpen}
            navbarOpen={navbarOpen}
          />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
