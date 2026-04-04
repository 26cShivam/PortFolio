import React from "react";
import Navbar from "../components/Home/Navbar";
import ProjectCard from "../components/ProjectCard/projects";
import pyroDekho from "../assets/pyroDekho.png";
import snake from "../assets/Snake.jpg";
import Footer from "../components/Footer/footer";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
function Projects() {



  const projects = [
    {
      img: pyroDekho,
      title: "PyroDekho",
      description:
        "A full-stack fireworks product showcase platform built using React.js, Node.js, Express.js, and MongoDB, with Cloudinary integration for efficient image storage and management.",
      github: "https://github.com/Pyro-Dekho/PyroDekho",
      demo: "https://pyrodekho.com/",
    },
    {
      img: snake,
      title: "Snake Game",
      description:
        "A classic Snake game built with React and CSS, featuring smooth animations and responsive design.",
      github: "https://github.com/26cShivam/SnakeGame",
      demo: "https://snakegameheree.netlify.app/",
    },
  ];
  return (
    <div className="bg-[#181126] min-h-screen flex flex-col font-code">
      {" "}
      <Navbar /> {/* HEADER */}{" "}
      <div className="w-11/12 mx-auto text-center mt-12">
        {" "}
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-white">
          {" "}
          My Recent <span className="text-[#C770F0]">Works</span>{" "}
        </h1>{" "}
        <p className="text-gray-300 mt-4 text-sm md:text-base">
          {" "}
          Here are a few projects I have worked on recently.{" "}
        </p>{" "}
      </div>{" "}
      {/* PROJECT GRID */}{" "}
      <div className="py-16">
        {" "}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-11/12 md:w-10/12 mx-auto">
          {" "}
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}{" "}
        </div>{" "}
      </div>{" "}
      <Footer />{" "}
    </div>
  );
}
export default Projects;
