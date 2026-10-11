import React, { useRef } from "react";
import ProjectCard from "../components/ProjectCard/projects";
import pyroDekho from "../assets/pyroDekho.png";
import snake from "../assets/Snake.jpg";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
function Projects() {
  const projectsRef = useRef(null);

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

  useGSAP(() => {
    gsap.utils.toArray(".project-reveal").forEach((element) => {
      gsap.fromTo(element,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top 88%",
            end: "top 58%",
            scrub: 0.6,
          },
        }
      );
    });

    gsap.utils.toArray(".project-card-reveal").forEach((element, index) => {
      gsap.fromTo(element,
        { x: index % 2 === 0 ? -100 : 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top 88%",
            end: "top 58%",
            scrub: 0.6,
          },
        }
      );
    });
  }, { scope: projectsRef });

  return (
    <div ref={projectsRef} className="bg-[#181126] min-h-screen flex flex-col font-code">
      {" "}
      {/* PROJECTS */}{" "}
      <div className="w-11/12 mx-auto text-center mt-12">
        {" "}
        <h1 className="project-reveal text-2xl md:text-3xl lg:text-4xl text-white">
          {" "}
          My Recent <span className="text-[#C770F0]">Works</span>{" "}
        </h1>{" "}
        <p className="project-reveal text-gray-300 mt-4 text-sm md:text-base">
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
    </div>
  );
}
export default Projects;
