import React, { useRef, useState } from "react";
import { FaHome } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { MdOutlineComputer } from "react-icons/md";
import { CgNotes } from "react-icons/cg";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const navRef = useRef();
  const logoRef = useRef();
  const menuRef = useRef();
  const mobileMenuRef = useRef();

  // Navbar Load Animation
  useGSAP(() => {

    const ctx = gsap.context(()=>{
      const tl = gsap.timeline();

    // Navbar slide from top
    tl.from(navRef.current, {
      y: -120,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out"
    })

    // Logo scale animation
    .from(logoRef.current, {
      scale: 0,
      opacity: 0,
      duration: 0.5,
      ease: "back.out(1.7)"
    })

    // Menu items stagger
    .from(".menu-item", {
      y: -40,
      opacity: 0,
      duration: 0.4,
      stagger: 0.15,
      ease: "power2.out"
    });
    })

    return () => ctx.revert();

  }, []);

  // Mobile Menu Animation
  useGSAP(() => {

    const ctx = gsap.context(()=>{
      if (menuOpen) {
      gsap.fromTo(
        mobileMenuRef.current,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power2.out"
        }
      );
    }

    })
    return () => ctx.revert();

  }, [menuOpen]);

  return (
    <div className="w-full bg-[#181126] overflow-hidden ">

      <nav
        ref={navRef}
        className="flex justify-between items-center px-6 lg:px-20 py-5"
      >

        {/* Logo */}
        <h1
          ref={logoRef}
          className="text-white text-2xl font-bold cursor-pointer"
          onClick={() => navigate("/")}
        >
          SHIVAM
        </h1>

        {/* Desktop Menu */}
        <ul
          ref={menuRef}
          className="hidden lg:flex text-white gap-12 items-center"
        >

          <div
            className="menu-item flex items-center gap-2 relative group cursor-pointer"
            onClick={() => navigate("/")}
          >
            <FaHome />
            <span>Home</span>

            {/* Hover underline */}
            <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-purple-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
          </div>

          <div
            className="menu-item flex items-center gap-2 relative group cursor-pointer"
            onClick={() => navigate("/about")}
          >
            <CiUser />
            <span>About</span>

            <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-purple-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
          </div>

          <div
            className="menu-item flex items-center gap-2 relative group cursor-pointer"
            onClick={() => navigate("/projects")}
          >
            <MdOutlineComputer />
            <span>Projects</span>

            <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-purple-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
          </div>

          <div
            className="menu-item flex items-center gap-2 relative group cursor-pointer"
            onClick={() => navigate("/resume")}
          >
            <CgNotes />
            <span>Resume</span>

            <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-purple-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
          </div>

        </ul>

        {/* Mobile Menu Button */}
        <div className="lg:hidden text-white text-4xl cursor-pointer">

          {menuOpen ? (
            <IoClose
              onClick={() => setMenuOpen(false)}
              className="transition-transform duration-300 rotate-180"
            />
          ) : (
            <IoMdMenu
              onClick={() => setMenuOpen(true)}
              className="transition-transform duration-300"
            />
          )}

        </div>

      </nav>

      {/* Mobile Menu */}
      {menuOpen && (

        <div
          ref={mobileMenuRef}
          className="lg:hidden flex flex-col items-center gap-6 pb-6 text-white"
        >

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