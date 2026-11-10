import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { site } from "../../data/site";

function Footer() {
  const icon = "cursor-pointer hover:text-purple-400 transition";
  return (
    <footer className="font-code flex flex-col md:flex-row justify-between items-center text-white py-4 px-6 bg-[#0A0416] gap-4">
      <p className="text-sm md:text-base text-center">
        Designed and Developed by {site.name}
      </p>

      <p className="text-sm md:text-base text-center">
        Copyright © {new Date().getFullYear()} {site.name}. All rights reserved.
      </p>

      <div className="flex gap-6 text-2xl md:text-3xl">
        <a aria-label="GitHub" href={site.github} target="_blank" rel="noreferrer" className={icon}><FaGithub /></a>
        <a aria-label="LinkedIn" href={site.linkedin} target="_blank" rel="noreferrer" className={icon}><FaLinkedin /></a>
        <a aria-label="Instagram" href={site.instagram} target="_blank" rel="noreferrer" className={icon}><FaInstagram /></a>
      </div>
    </footer>
  );
}

export default Footer;
