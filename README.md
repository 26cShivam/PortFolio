# Shivam's Portfolio

A responsive, single-page portfolio for introducing Shivam, sharing selected projects, and viewing or downloading a resume. The top navigation scrolls to each section using clean paths such as `/about`, `/projects`, and `/resume`.

## Sections

- **Home:** introduction and developer profile
- **About:** background and technology skillset
- **Projects:** PyroDekho and Snake Game, with repository and demo links
- **Resume:** embedded PDF preview and download link
- **Contact:** social links at the bottom of the page

Scroll-triggered GSAP animations reveal the introduction, About content, and project cards as they enter view. Project cards alternate their entrance direction.

## Built with

- React 19 and Vite
- React Router
- Tailwind CSS
- GSAP and ScrollTrigger
- React Icons and React Type Animation

## Run locally

Requirements: Node.js and npm.

```bash
npm install
npm run dev
```

Vite prints the local development URL in the terminal.

## Other commands

```bash
npm run build    # Create a production build in dist/
npm run preview  # Preview the production build locally
npm run lint     # Run ESLint
```

## Project files

```text
src/
  components/    Shared navigation, contact, footer, and project cards
  pages/         Home, About, and Projects content
  assets/        Images and the resume PDF
```

To update the portfolio, edit the corresponding page or component under `src/`. Update project details in `src/pages/Projects.jsx`, social profile URLs in the contact/footer components, and replace `src/assets/Resume.pdf` to change the resume.
