import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";

function ProjectCard({ img, title, description, tech = [], github, demo }) {
  const btn =
    "flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition";

  return (
    <div
      className="animateProject project-card-reveal bg-[#0f0820] border border-purple-600 rounded-xl
    shadow-[0_0_15px_rgba(168,85,247,0.6)] p-6 text-center text-white
    flex flex-col h-full hover:scale-105 transition duration-300"
    >
      <img
        src={img}
        alt={title}
        loading="lazy"
        className="rounded-md mb-4 w-full h-[200px] object-cover"
      />

      <h2 className="text-xl font-semibold text-white mb-3">{title}</h2>

      <p className="text-gray-300 text-sm mb-4 leading-6">{description}</p>

      {tech.length > 0 && (
        <ul className="flex flex-wrap justify-center gap-2 mb-5 flex-grow content-start">
          {tech.map((t) => (
            <li
              key={t}
              className="rounded-full border border-purple-500/60 px-3 py-1 text-xs text-purple-200"
            >
              {t}
            </li>
          ))}
        </ul>
      )}

      <div className="flex flex-wrap justify-center gap-4 mt-auto">
        <a href={github} target="_blank" rel="noopener noreferrer" className={btn}>
          <FaGithub /> GitHub
        </a>
        <a href={demo} target="_blank" rel="noopener noreferrer" className={btn}>
          <HiOutlineExternalLink /> Demo
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
