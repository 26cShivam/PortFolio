import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className="font-code flex flex-col md:flex-row justify-between items-center text-white py-4 px-6 bg-[#0A0416] gap-4">
      
      <p className="text-sm md:text-base text-center">
        Designed and Developed by Shivam
      </p>

      <p className="text-sm md:text-base">
        Copyright © 2026 Shivam. All rights reserved.
      </p>

      <div className="flex gap-6 text-2xl md:text-3xl">
        <FaGithub className="cursor-pointer hover:text-purple-400 transition" onClick={() =>
              window.open("https://github.com/26cShivam", "_blank")
            } />
        <FaLinkedin className="cursor-pointer hover:text-purple-400 transition" onClick={() =>
              window.open("https://linkedin.com/in/shivam", "_blank")
            } />
        <FaInstagram className="cursor-pointer hover:text-purple-400 transition" onClick={() =>
              window.open("https://instagram.com/26cShivam", "_blank")
            } />
      </div>

    </div>
  );
}

export default Footer;