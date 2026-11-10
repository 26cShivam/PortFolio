import { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { site } from "../../data/site";

const inputClass =
  "w-full rounded-md border border-purple-600/60 bg-[#0f0820] px-4 py-3 text-white placeholder-gray-400 focus:border-purple-400";

function Contact() {
  const [form, setForm] = useState({ name: "", message: "" });

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name}`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="bg-[#181126] text-white text-center flex flex-col gap-5 py-16 px-4 justify-center"
    >
      <h2 className="font-code text-2xl sm:text-3xl md:text-4xl">Get In Touch</h2>
      <p className="font-code text-base md:text-xl">
        Have a project or an opportunity?{" "}
        <span className="text-[#C770F0]">Let's talk.</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="font-code mx-auto mt-4 flex w-full max-w-xl flex-col gap-4 text-left"
      >
        <label className="sr-only" htmlFor="name">Your name</label>
        <input
          id="name"
          name="name"
          required
          value={form.name}
          onChange={update}
          placeholder="Your name"
          className={inputClass}
        />
        <label className="sr-only" htmlFor="message">Your message</label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={update}
          placeholder="Your message"
          className={inputClass}
        />
        <button
          type="submit"
          className="self-center rounded-md bg-purple-600 px-8 py-3 text-white transition hover:bg-purple-700"
        >
          Send Message
        </button>
      </form>

      <div className="flex gap-8 text-2xl md:text-3xl justify-center mt-6">
        <a aria-label="GitHub" href={site.github} target="_blank" rel="noreferrer" className="hover:text-purple-400 transition"><FaGithub /></a>
        <a aria-label="LinkedIn" href={site.linkedin} target="_blank" rel="noreferrer" className="hover:text-purple-400 transition"><FaLinkedin /></a>
        <a aria-label="Instagram" href={site.instagram} target="_blank" rel="noreferrer" className="hover:text-purple-400 transition"><FaInstagram /></a>
      </div>
    </section>
  );
}

export default Contact;
