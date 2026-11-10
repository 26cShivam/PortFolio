import resumePreview from "../../assets/resume-preview.png";
import { site } from "../../data/site";

const btn =
  "bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition";

function Resume() {
  return (
    <div className="flex flex-col items-center gap-8 py-16 px-4 min-h-screen bg-[#130F1A]">
      <h1 className="font-code text-2xl md:text-3xl lg:text-4xl text-white">
        My <span className="text-[#C770F0]">Resume</span>
      </h1>

      <a href={site.resume} download="Shivam_Resume.pdf" className={btn}>
        ⬇ Download CV
      </a>

      {/* Phones: embedded PDFs are unreliable, so show a preview image */}
      <a
        href={site.resume}
        target="_blank"
        rel="noreferrer"
        className="md:hidden"
        aria-label="Open resume PDF"
      >
        <img
          src={resumePreview}
          alt="Resume preview"
          loading="lazy"
          className="w-full max-w-sm rounded-lg shadow-lg"
        />
      </a>

      {/* Desktop: embedded PDF */}
      <div className="hidden md:flex w-8/12 justify-center h-[1000px]">
        <object data={site.resume} type="application/pdf" className="w-[80%] h-full">
          <p className="text-white">
            Your browser can't display the PDF.{" "}
            <a className="underline" href={site.resume}>Open it here</a>.
          </p>
        </object>
      </div>
    </div>
  );
}

export default Resume;
