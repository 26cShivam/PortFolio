import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Contact() {
  return (
    <section className="bg-[#181126] text-white text-center flex flex-col gap-5 py-20 min-h-[300px] justify-center">
      <h2 className="font-code text-3xl md:text-4xl">Find Me On</h2>
      <p className="font-code text-lg md:text-xl">
        Feel free to <span className="text-[#C770F0]">connect</span> with me
      </p>
      <div className="flex gap-8 text-2xl md:text-3xl justify-center mt-4">
        <a aria-label="GitHub" href="https://github.com/26cShivam" target="_blank" rel="noreferrer" className="hover:text-purple-400 transition"><FaGithub /></a>
        <a aria-label="LinkedIn" href="https://linkedin.com/in/shivam" target="_blank" rel="noreferrer" className="hover:text-purple-400 transition"><FaLinkedin /></a>
        <a aria-label="Instagram" href="https://instagram.com/shivam" target="_blank" rel="noreferrer" className="hover:text-purple-400 transition"><FaInstagram /></a>
      </div>
    </section>
  );
}

export default Contact;
