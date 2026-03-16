import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
import { NavLink } from "react-router";

function ProjectCard({ img, title, description, github, demo }) {
  return (
    <div
      className="bg-[#0f0820] border border-purple-600 rounded-xl 
    shadow-[0_0_15px_rgba(168,85,247,0.6)] p-6 text-center 
    hover:scale-105 transition duration-300"
    >
      <img
        src={img}
        alt={title}
        className="rounded-md mb-4 w-full h-[200px] object-cover size-6"
      />

      <h2 className="text-xl mb-3">{title}</h2>

      <p className="text-gray-300 text-sm mb-5 leading-6">{description}</p>

      <div className="flex justify-center gap-4">
        <a
          href={github}
          className="flex items-center gap-2 bg-purple-600 px-4 py-2 rounded-md hover:bg-purple-700"
        >
          <FaGithub /> GitHub
        </a>

        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-purple-600 px-4 py-2 rounded-md hover:bg-purple-700"
        >
          <HiOutlineExternalLink /> Demo
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
