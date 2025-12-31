import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { Github, ExternalLink } from "lucide-react";

/* ================= PROJECT DATA ================= */

const projects = [
  {
    title: "LawShield",
    tag: "Backend • Database",
    description:
      "A law-focused management system built with PHP and MySQL, designed for secure legal record handling.",
    image: "/projects/lawshield.jpg",
    github: "https://github.com/FoisalDev/LAW_SHEILD.git",
    live: "",
  },
  {
    title: "JobGate",
    tag: "Full Stack",
    description:
      "Recruitment platform with candidate filtering, assessments, and role-based access.",
    image: "/projects/jobgate.jpg",
    github: "https://github.com/FoisalDev/JobGate.git",
    live: "",
  },
  {
    title: "Personal Portfolio",
    tag: "Frontend",
    description:
      "Personal portfolio built with React and Tailwind CSS, focused on performance and clean UI.",
    image: "/projects/portfolio.jpg",
    github: "https://github.com/FoisalDev/Foisal_Portfolio.git",
    live: "",
  },
  {
    title: "Bank Management System",
    tag: "Backend System",
    description:
      "Banking system supporting authentication, account handling, and transactions.",
    image: "/projects/bankmanagement.jpg",
    github: "https://github.com/FoisalDev/BankManagement.git",
    live: "",
  },
  {
    title: "UI / UX Design Works",
    tag: "Design",
    description:
      "Collection of UI/UX works created in Figma, emphasizing layout systems and clarity.",
    image: "/projects/uiux-1.jpg",
    github: "https://github.com/FoisalDev/ui-ux.git",
    live: "",
  },
  {
    title: "Prototype Projects",
    tag: "Prototyping",
    description:
      "Interactive prototypes demonstrating user flows and visual hierarchy.",
    image: "/projects/prototype-1.jpg",
    github: "https://github.com/FoisalDev/Prototype.git",
    live: "",
  },
];

/* ================= ANIMATION ================= */

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* ================= PAGE ================= */

export default function Projects() {
  return (
    <section className="min-h-screen relative overflow-hidden pt-32 pb-28 px-6 bg-[#04081A] text-white">
      
      {/* Grid background (same as Experience) */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(50,50,70,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(50,50,70,0.15)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Glow blobs */}
      <div className="absolute top-24 left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-24 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* Header */}
      <div className="relative max-w-6xl mx-auto mb-24 text-center">
        <h1 className="text-4xl md:text-6xl font-black text-transparent bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text">
          Selected Projects
        </h1>
        <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
          A curated selection of projects demonstrating real-world development
          experience and system design skills.
        </p>
      </div>

      {/* Projects Grid */}
      <motion.div
        variants={gridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto"
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </motion.div>
    </section>
  );
}

/* ================= CARD ================= */

function ProjectCard({ project }) {
  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ y: -6 }}
      className="group bg-gray-900/90 rounded-2xl overflow-hidden border border-white/10 shadow-xl backdrop-blur-xl transition-all"
    >
      {/* Image + GitHub Overlay */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* GitHub Icon */}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 backdrop-blur-md text-white opacity-90 hover:opacity-100 hover:scale-110 transition-all"
            aria-label="View source code on GitHub"
          >
            <Github size={22} />
          </a>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col h-full">
        <span className="text-xs uppercase tracking-wider text-cyan-400 mb-2">
          {project.tag}
        </span>

        <h3 className="text-xl font-semibold mb-3">
          {project.title}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Footer actions */}
        <div className="mt-auto flex items-center gap-6 text-sm font-medium">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <Github size={16} />
              View Code
            </a>
          )}

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

/* ================= PROPS ================= */

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
};
