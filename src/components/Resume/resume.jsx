import React from "react";
import resume from "../../assets/Resume.pdf";
import Navbar from "../Home/Navbar";
import Footer from "../Footer/footer";

function Resume() {
  return (
    <>
      <Navbar />

      <div className="flex flex-col items-center gap-10 py-20 min-h-screen bg-[#130F1A]">
        <a
          href={resume}
          download="Shivam_Resume.pdf"
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition"
        >
          ⬇ Download CV
        </a>

        <div className="w-8/12 m-auto flex justify-center h-[1000px]   ">
          <object
            data={resume}
            type="application/pdf"
            className="w-[80%] h-full"
          ></object>
        </div>

        <a
          href={resume}
          download="Shivam_Resume.pdf"
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition"
        >
          ⬇ Download CV
        </a>
      </div>
      <Footer />
    </>
  );
}

export default Resume;
