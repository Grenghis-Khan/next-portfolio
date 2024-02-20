import React from "react";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent border-b-transparent text-white">
      <div className="container p-12 flex flex-wrap justify-center md:justify-between">
        {/* <span> */}

        <Image
          src="/DL-logo.jpg"
          alt="Logo Image"
          width={70}
          height={70}
          className="rounded-full m-6"
        />

        {/* </span> */}

        <p className="text-slate-600 self-center">
          Copyright © {currentYear} Digital Lyfers
        </p>
      </div>
    </footer>
  );
};

export default Footer;
