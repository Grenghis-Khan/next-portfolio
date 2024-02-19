import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent border-b-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span>Logo</span>
        <p className="text-slate-600">
          Copyright © {currentYear} Digital Lyfers
        </p>
      </div>
    </footer>
  );
};

export default Footer;
