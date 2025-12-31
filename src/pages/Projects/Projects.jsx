import { motion } from "framer-motion";
import PropTypes from "prop-types";

/* ================= PROJECT DATA ================= */

const projects = [
  {
    title: "LawShield",
    tag: "Backend • Database",
    description:
      "A law-focused management system built with PHP and MySQL, designed for secure legal record handling and structured data workflows.",
    image: "/projects/lawshield.jpg",
    github: "https://github.com/FoisalDev/LAW_SHEILD.git",
    live: "",
  },
  {
    title: "JobGate",
    tag: "Full Stack",
    description:
      "A recruitment platform featuring candidate filtering, structured assessments, and role-based data access.",
    image: "/projects/jobgate.jpg",
    github: "https://github.com/FoisalDev/JobGate.git",
    live: "",
  },
  {
    title: "Personal Portfolio",
    tag: "Frontend",
    description:
      "My personal portfolio website built with React and Tailwind CSS, focusing on performance, accessibility, and clean UI.",
    image: "/projects/portfolio.jpg",
    github: "https://github.com/FoisalDev/Foisal_Portfolio.git",
    live: "",
  },
  {
    title: "Bank Management System",
    tag: "Backend System",
    description:
      "A banking system supporting authentication, account management, and transaction workflows with data validation.",
    image: "/projects/bankmanagement.jpg",
    github: "https://github.com/FoisalDev/BankManagement.git",
    live: "",
  },
  {
    title: "UI / UX Design Works",
    tag: "Design",
    description:
      "A collection of UI/UX design explorations created in Figma, focusing on layout systems and interaction clarity.",
    image: "/projects/uiux-1.jpg",
    github: "https://github.com/FoisalDev/ui-ux.git",
    live: "",
  },
  {
    title: "Prototype Projects",
    tag: "Prototyping",
    description:
      "Interactive prototypes demonstrating user flows, wireframes, and visual hierarchy using modern design principles.",
    image: "/projects/prototype-1.jpg",
    github: "https://github.com/FoisalDev/Prototype.git",
    live: "",
  },
];

/* ================= ANIMATION ================= */

const gridVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

/* ================= PAGE ================= */

export default function Projects() {
  return (
    <section className="min-h-screen bg-black text-white pt-32 pb-28 px-6">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Selected Projects
        </h1>
        <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
          A curated selection of academic, personal, and professional projects
          demonstrating my experience in system design, full-stack development,
          and UI/UX.
        </p>
      </div>

      {/* Projects Grid */}
      <motion.div
        variants={gridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto"
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
      className="group bg-zinc-900/90 rounded-2xl overflow-hidden border border-white/10 shadow-lg transition-all"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col h-full">
        <span className="text-xs uppercase tracking-wider text-gray-400 mb-2">
          {project.tag}
        </span>

        <h3 className="text-xl font-semibold mb-3">
          {project.title}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Actions */}
        <div className="mt-auto flex items-center gap-5 text-sm font-medium">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              View Code →
            </a>
          )}

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              Live Demo →
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
