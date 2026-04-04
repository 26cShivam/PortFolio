import React from "react";
import { TypeAnimation } from "react-type-animation";
import developer from "../../assets/DeveloperImage.svg";
import Footer from "../Footer/footer";
import Shivam from "../../assets/Shivam.png";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function Main() {

  useGSAP(() => {


    const ctx = gsap.context(()=>{
          const tl = gsap.timeline();

    tl.from(".animateSkill", {
      scale: 0,
      opacity: 0,
      duration: 0.8,
      ease: "back.out(1.7)"
    })

    tl.from(".animateImage", {
      x: 100,
      scale: 0,
      opacity: 0,
      duration: 0.8,
      ease: "back.out(1.7)"
    });

    gsap.from(".introHeading", {
      x: 80,
      opacity: 0,

      scrollTrigger: {
        trigger: ".introSection",
        start: "top 70%",
        // markers:true,
        end: "top 40%",
        scrub: 0.2
      }
    });


    /* ================= INTRO TEXT ================= */

    gsap.from(".introText .introTextLeft", {
      x: -100,
      opacity: 0,
      stagger: 0.3,

      scrollTrigger: {
        trigger: ".introSection",
        start: "top 80%",
        end: "top 0",
        duration: 0.8,
        scrub: 1
      }
    });

    gsap.from(".introText .introTextRight", {
      x: 100,
      opacity: 0,
      stagger: 0.3,

      scrollTrigger: {
        trigger: ".introSection",
        start: "top 80%",
        end: "top 0%",
         duration: 0.8,
        scrub: 1
      }
    });


    /* ================= INTRO IMAGE ================= */

    gsap.from(".introImage", {
      scale: 0.7,
      opacity: 0,

      scrollTrigger: {
        trigger: ".introSection",
        start: "top 80%",
        end: "top 0%",
        scrub: 1
      }
    });
    })
    return () => ctx.revert();

  },[]);

  return (
    <div className="bg-[#181126] min-h-screen w-full overflow-x-hidden">

      {/* ================= HERO SECTION ================= */}

      <div className="flex flex-col lg:flex-row w-11/12 mx-auto items-center">

        {/* LEFT SIDE */}

        <div className="animateSkill w-full lg:w-3/4 flex flex-col gap-8 px-6 py-16 md:px-16 md:py-24 lg:px-40 lg:py-40">

          <h1 className="text-white text-2xl md:text-4xl lg:text-5xl">
            Hi There !
          </h1>

          <h1 className="text-white text-2xl md:text-4xl lg:text-5xl">
            I'M{" "}
            <span className="text-purple-400 font-semibold">
              SHIVAM
            </span>
          </h1>

          <div className="text-purple-400 font-semibold text-2xl md:text-4xl lg:text-5xl">

            <TypeAnimation
              sequence={[
                "MERN STACK DEVELOPER",
                2000,
                "SOFTWARE DEVELOPER",
                2000,
                "REACT JS DEVELOPER",
                2000,
                "NEXT JS DEVELOPER",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />

          </div>

        </div>

        {/* RIGHT SIDE IMAGE */}

        <div className="animateImage w-full lg:w-1/4 flex justify-center pb-10 lg:pb-0">

          <img
            src={developer}
            alt="Developer"
            className="w-60 md:w-72 lg:w-80 transition-transform duration-500 hover:scale-110"
          />

        </div>

      </div>


      {/* ================= INTRODUCTION SECTION ================= */}

      <div className="w-11/12 mx-auto introSection">

        <h1 className="introHeading text-white font-extrabold text-3xl md:text-4xl lg:text-5xl px-4 md:px-10 lg:px-40 py-8 font-code">

          LET ME <span className="text-[#C27AFF]">INTRODUCE</span> MYSELF

        </h1>


        <div className="flex flex-col lg:flex-row items-center justify-center gap-10">

          {/* TEXT */}

          <div className="w-full lg:w-2/3 px-4 lg:px-16 text-white text-lg md:text-xl leading-8 font-code">

            <ul className="flex flex-col gap-6 introText">

              <li className="introTextLeft">
                I’m a passionate Web Developer who enjoys turning ideas into
                real-world web applications. I focus on building responsive,
                user-friendly, and scalable websites that deliver a smooth
                user experience.
              </li>

              <li className="introTextRight">
                I’m proficient in technologies like{" "}
                <span className="text-[#C27AFF]">HTML</span>,{" "}
                <span className="text-[#C27AFF]">CSS</span>,{" "}
                <span className="text-[#C27AFF]">JavaScript</span>,{" "}
                <span className="text-[#C27AFF]">React.js</span>,{" "}
                <span className="text-[#C27AFF]">Node.js</span>,{" "}
                <span className="text-[#C27AFF]">Express.js</span>, and{" "}
                <span className="text-[#C27AFF]">MongoDB</span>.
                I enjoy working across both frontend and backend
                development using the MERN stack.
              </li>

              <li className="introTextLeft">
                My key areas of interest include developing modern{" "}
                <span className="text-[#C27AFF]">Web Applications</span>,
                creating interactive UI with{" "}
                <span className="text-[#C27AFF]">React</span> and{" "}
                <span className="text-[#C27AFF]">Tailwind CSS</span>,
                and building full-stack applications with secure
                backend systems.
              </li>

              <li className="introTextLeft">
                Whenever possible, I love building projects,
                improving my problem-solving skills,
                and exploring tools like WordPress,
                Power BI, and Data Analytics to expand
                my technical knowledge.
              </li>

            </ul>

          </div>


          {/* IMAGE */}

          <div className="introImage w-full lg:w-1/3 flex justify-center">

            <img
              src={Shivam}
              alt="Shivam Image"
              className=" w-52 rounded-3xl md:w-64 lg:w-72 transition-transform duration-500 hover:scale-110"
            />

          </div>

        </div>

      </div>


      {/* ================= CONNECT SECTION ================= */}

      <div className="text-white text-center flex flex-col gap-5 mt-20">

        <h1 className="font-code text-3xl md:text-4xl">
          Find Me On
        </h1>

        <h5 className="font-code text-lg md:text-xl">
          Feel free to <span className="text-[#C770F0]">connect</span> with me
        </h5>

        <div className="flex gap-8 text-2xl md:text-3xl justify-center mt-4 mb-6">

          <FaGithub
            className="cursor-pointer hover:text-purple-400 transition"
            onClick={() =>
              window.open("https://github.com/26cShivam", "_blank")
            }
          />

          <FaLinkedin
            className="cursor-pointer hover:text-purple-400 transition"
            onClick={() =>
              window.open("https://linkedin.com/in/shivam", "_blank")
            }
          />

          <FaInstagram
            className="cursor-pointer hover:text-purple-400 transition"
            onClick={() =>
              window.open("https://instagram.com/shivam", "_blank")
            }
          />

        </div>

      </div>

      <Footer />

    </div>
  );
}

export default Main;