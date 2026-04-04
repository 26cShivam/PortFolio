
import React from "react";
import StudyImage from "../assets/StudyImage.jpg";
import Navbar from "../components/Home/Navbar";
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
import Footer from "../components/Footer/footer";
import gsap from 'gsap'
import { useGSAP } from "@gsap/react";

function About() {
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

  useGSAP(()=>{
    const tl = gsap.timeline();
    tl.from('.headingAnimate',{
      x:200,
      opacity:0,
      duration:1,

    })

    tl.from('.TextLeftAnimate',{
      x:-100,
      opacity:0,
      duration:1,
    })
    tl.from('.TextRightAnimate',{
      x:100,
      opacity:0,
      duration:1,
    })

    tl.from(".animateImage", {
      x: 100,
      scale: 0,
      opacity: 0,
      duration: 0.8,
      ease: "back.out(1.7)"
    });

    gsap.from('.animateSkill',{
      x:-200,
      duration:1,
      opacity:0,
      scrollTrigger:{
        trigger:'.animateSkill',
        start: "top 85%",
        end: "bottom 80%",
        scrub: 0.6,
        // markers:true

      }
    })

  })

  return (
    <div className="bg-[#181126] min-h-screen text-white">
      <Navbar />

      {/* ABOUT INTRO SECTION */}
      <div className="flex flex-col lg:flex-row w-11/12 mx-auto items-center gap-10 py-16">

        {/* LEFT TEXT */}
        <div className="w-full lg:w-3/4 px-6 md:px-10 font-code flex flex-col gap-6 text-lg md:text-xl leading-8">

          <h1 className="headingAnimate text-2xl md:text-3xl lg:text-4xl text-center">
            Know Who <span className="text-[#C770F0]">I'M</span>
          </h1>

          <p className="TextLeftAnimate">
            Hi everyone! I’m Shivam from India. I’m a passionate Web Developer
            who enjoys building modern and responsive web applications. I focus
            on creating clean UI and scalable full-stack applications using
            modern technologies.
          </p>

          <p className="TextRightAnimate">
            I mainly work with technologies like React.js, Node.js, Express.js,
            MongoDB, JavaScript, and Tailwind CSS. I enjoy building projects,
            exploring new tools, and continuously improving my development
            skills.
          </p>

          <p className="TextLeftAnimate">
            Outside of coding, I love engaging in activities that keep me
            productive and creative:
          </p>

          <ul className="TextRightAnimate list-disc pl-8 space-y-2">
            <li>Building Web Projects 💻</li>
            <li>Learning New Technologies 📚</li>
            <li>Exploring Data Analytics & Power BI 📊</li>
          </ul>

          <p className="TextLeftAnimate text-[#9B7EAC] italic">
            "Keep learning, keep building, and never stop improving." – Shivam
          </p>

        </div>

        {/* RIGHT IMAGE */}
        <div className="animateImage w-full lg:w-1/4 flex justify-center">
          <img
            src={StudyImage}
            alt="Study"
            className="w-64 md:w-72 lg:w-80 rounded-lg shadow-lg hover:rotate-6 transition-transform duration-500"
          />
        </div>

      </div>

      {/* SKILLS SECTION */}
      <div className="py-16">

        <h1 className="text-center text-2xl md:text-3xl lg:text-4xl mb-10">
          Professional <span className="text-purple-400">Skillset</span>
        </h1>

        <div className="animateSkill flex flex-wrap justify-center gap-6 w-11/12 md:w-10/12 mx-auto">
          {skills.map((skill, index) => (
            <SkillCard key={index} icon={skill.icon} name={skill.name} />
          ))}
        </div>

      </div>

      <Footer />
    </div>
  );
}

export default About;

