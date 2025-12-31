import React from "react";
import { motion } from "framer-motion";
import { Code2, Layers, Network } from "lucide-react";

/* ================= ANIMATION VARIANTS ================= */

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: -40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

/* ================= EXPERIENCE CARD ================= */

const ExperienceCard = ({
  title,
  company,
  period,
  description,
  icon: Icon,
}) => (
  <motion.div
    variants={cardVariants}
    whileHover={{ y: -10 }}
    className="group relative overflow-hidden transition-all"
  >
    {/* Glass layer */}
    <div className="absolute inset-0 backdrop-blur-lg bg-white/5 rounded-lg" />

    {/* Gradient border on hover */}
    <div className="absolute -inset-[2px] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500" />

    <div className="relative bg-gray-900/90 rounded-lg p-8 h-full border border-gray-800/50 shadow-xl backdrop-blur-xl">
      {/* Icon */}
      <div className="relative mb-6">
        <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-20 rounded-full blur-xl group-hover:opacity-60 transition-all duration-500" />
        <Icon className="w-12 h-12 text-cyan-400 relative z-10 transition-transform duration-300 group-hover:rotate-12" />
      </div>

      {/* Content */}
      <div className="space-y-3">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          {title}
        </h3>

        <div className="flex justify-between items-center text-gray-300">
          <span className="font-semibold text-blue-400 truncate max-w-[70%]">
            {company}
          </span>
          <span className="text-sm font-mono bg-blue-500/10 px-3 py-1 rounded-full">
            {period}
          </span>
        </div>

        <p className="text-gray-300 border-l-4 border-blue-500/50 pl-4 mt-4 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Decorative corners */}
      <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-cyan-500/40" />
      <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-purple-500/40" />
    </div>
  </motion.div>
);

/* ================= EXPERIENCE SECTION ================= */

const ExperienceSection = () => {
  const experiences = [
    {
      icon: Network,
      title: "WordPress Developer",
      company: "Fiverr",
      period: "2019 - 2020",
      description:
        "Delivered high-quality WordPress websites and custom solutions to international clients, ensuring responsive, optimized, and user-friendly designs.",
    },
    {
      icon: Layers,
      title: "Junior Frontend & UI/UX Developer",
      company: "Freelance Projects / Personal Work",
      period: "2021 - 2023",
      description:
        "Focused on frontend development and UI/UX design, prototyping intuitive interfaces, and enhancing usability, responsiveness, and visual consistency.",
    },
    {
      icon: Code2,
      title: "Full Stack / JavaScript & PHP Developer",
      company: "AgroMate & Personal Projects",
      period: "2023 - Present",
      description:
        "Building full-stack web applications, JavaScript libraries, and PHP solutions with database integration, performance optimization, and AI-assisted features.",
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden pt-32 pb-20 bg-[#04081A]">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(50,50,70,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(50,50,70,0.15)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Floating blobs */}
      <div className="absolute top-24 left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-24 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* CONTENT */}
      <div className="relative container mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center space-y-8 mb-20 text-center"
        >
          <h2 className="text-5xl md:text-7xl font-black text-transparent bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text">
            Professional Journey
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl">
            Transforming ideas into digital solutions through frontend,
            backend, database systems, and user-centric design.
          </p>
        </motion.div>

        {/* Experience cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto"
        >
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ExperienceSection;
