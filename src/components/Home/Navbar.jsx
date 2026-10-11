import { useState } from "react";
import { FaHome } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { MdOutlineComputer } from "react-icons/md";
import { CgNotes } from "react-icons/cg";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router";

const links = [
  { label: "Home", href: "/", icon: FaHome },
  { label: "About", href: "/about", icon: CiUser },
  { label: "Projects", href: "/projects", icon: MdOutlineComputer },
  { label: "Resume", href: "/resume", icon: CgNotes },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const renderLink = ({ label, href, icon: Icon }, mobile = false) => (
    <Link
      key={label}
      to={href}
      onClick={() => setMenuOpen(false)}
      className={`${mobile ? "" : "menu-item relative group"} flex items-center gap-2 cursor-pointer`}
    >
      <Icon />
      <span>{label}</span>
      {!mobile && <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-purple-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 w-full bg-[#181126]/95 backdrop-blur">
      <nav className="flex justify-between items-center px-6 lg:px-20 py-5">
        <Link to="/" className="text-white text-2xl font-bold">SHIVAM</Link>
        <div className="hidden lg:flex text-white gap-12 items-center">
          {links.map((link) => renderLink(link))}
        </div>
        <button
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          className="lg:hidden text-white text-4xl"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <IoClose /> : <IoMdMenu />}
        </button>
      </nav>
      {menuOpen && (
        <div className="lg:hidden flex flex-col items-center gap-6 pb-6 text-white">
          {links.map((link) => renderLink(link, true))}
        </div>
      )}
    </header>
  );
}

export default Navbar;
