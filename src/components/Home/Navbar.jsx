import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { MdOutlineComputer } from "react-icons/md";
import { CgNotes } from "react-icons/cg";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router";

function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full bg-[#181126]">
      <nav className="flex justify-between items-center px-6 lg:px-20 py-5">
        {/* Logo */}
        <h1
          className="text-white text-2xl font-bold cursor-pointer"
          onClick={() => navigate("/")}
        >
          SHIVAM
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex text-white gap-12 items-center">
          <div
            className="flex items-center gap-2 relative group cursor-pointer"
            onClick={() => navigate("/")}
          >
            <FaHome />
            <span className="text-lg">Home</span>

            <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-purple-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
          </div>

          <div
            className="flex items-center gap-2 relative group cursor-pointer"
            onClick={() => navigate("/about")}
          >
            <CiUser />
            <span>About</span>
            <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-purple-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
          </div>

          <div
            className="flex items-center gap-2 relative group cursor-pointer"
            onClick={() => navigate("/projects")}
          >
            <MdOutlineComputer />
            <span>Projects</span>
            <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-purple-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
          </div>

          <div
            className="flex items-center gap-2 relative group cursor-pointer"
            onClick={() => navigate("/resume")}
          >
            <CgNotes />
            <span>Resume</span>
            <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-purple-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
          </div>
        </ul>

        {/* Mobile Menu Button */}
        <div className="lg:hidden text-white text-4xl cursor-pointer transition-all duration-300">
          {menuOpen ? (
            <IoClose
              onClick={() => setMenuOpen(false)}
              className="transition-transform duration-300 rotate-180"
            />
          ) : (
            <IoMdMenu
              onClick={() => setMenuOpen(true)}
              className="transition-transform duration-300 rotate-0"
            />
          )}
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden flex flex-col items-center gap-6 pb-6 text-white transition-all duration-300">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <FaHome />
            Home
          </div>

          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => navigate("/about")}
          >
            <CiUser />
            About
          </div>

          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => navigate("/projects")}
          >
            <MdOutlineComputer />
            Projects
          </div>

          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => navigate("/resume")}
          >
            <CgNotes />
            Resume
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
