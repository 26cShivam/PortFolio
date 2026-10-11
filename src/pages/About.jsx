
import React, { useRef } from "react";
import StudyImage from "../assets/StudyImage.jpg";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaDocker,
  FaGit,
} from "react-icons/fa";
import {
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
  SiMysql,
  SiPostman,
} from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";
import SkillCard from "../components/About/SkillCard";
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const sectionRef = useRef(null);
  const skills = [
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
    { name: "React.js", icon: <FaReact className="text-blue-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: "Python", icon: <FaPython className="text-yellow-400" /> },
    { name: "Java", icon: <FaJava className="text-blue-500" /> },
    { name: "Redux", icon: <TbBrandRedux className="text-purple-500" /> },
    { name: "Git", icon: <FaGit className="text-orange-500" /> },
    { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
  ];

  //Animation Code

  useGSAP(() => {
    gsap.utils.toArray(".about-reveal").forEach((element) => {
      gsap.fromTo(element,
        { y: 36, opacity: 0 },
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
  }, { scope: sectionRef })

  return (
    <div ref={sectionRef} className="bg-[#181126] min-h-screen text-white">

      {/* ABOUT INTRO SECTION */}
      <div className="flex flex-col lg:flex-row w-11/12 mx-auto items-center gap-10 py-16">

        {/* LEFT TEXT */}
        <div className="w-full lg:w-3/4 px-6 md:px-10 font-code flex flex-col gap-6 text-lg md:text-xl leading-8">

          <h1 className="headingAnimate about-reveal text-2xl md:text-3xl lg:text-4xl text-center">
            Know Who <span className="text-[#C770F0]">I'M</span>
          </h1>

          <p className="TextLeftAnimate about-reveal">
            Hi everyone! I’m Shivam from India. I’m a passionate Web Developer
            who enjoys building modern and responsive web applications. I focus
            on creating clean UI and scalable full-stack applications using
            modern technologies.
          </p>

          <p className="TextRightAnimate about-reveal">
            I mainly work with technologies like React.js, Node.js, Express.js,
            MongoDB, JavaScript, and Tailwind CSS. I enjoy building projects,
            exploring new tools, and continuously improving my development
            skills.
          </p>

          <p className="TextLeftAnimate about-reveal">
            Outside of coding, I love engaging in activities that keep me
            productive and creative:
          </p>

          <ul className="TextRightAnimate about-reveal list-disc pl-8 space-y-2">
            <li>Building Web Projects 💻</li>
            <li>Learning New Technologies 📚</li>
            <li>Exploring Data Analytics & Power BI 📊</li>
          </ul>

          <p className="TextLeftAnimate about-reveal text-[#9B7EAC] italic">
            "Keep learning, keep building, and never stop improving." – Shivam
          </p>

        </div>

        {/* RIGHT IMAGE */}
        <div className="animateImage about-reveal w-full lg:w-1/4 flex justify-center">
          <img
            src={StudyImage}
            alt="Study"
            className="w-64 md:w-72 lg:w-80 rounded-lg shadow-lg hover:rotate-6 transition-transform duration-500"
          />
        </div>

      </div>

      {/* SKILLS SECTION */}
      <div className="py-16">

        <h1 className="about-reveal text-center text-2xl md:text-3xl lg:text-4xl mb-10">
          Professional <span className="text-purple-400">Skillset</span>
        </h1>

        <div className="animateSkill about-reveal flex flex-wrap justify-center gap-6 w-11/12 md:w-10/12 mx-auto">
          {skills.map((skill, index) => (
            <SkillCard key={index} icon={skill.icon} name={skill.name} />
          ))}
        </div>

      </div>

    </div>
  );
}

export default About;

