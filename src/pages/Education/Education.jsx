import React from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  BookOpen,
  Award,
  Trophy,
} from "lucide-react";

/* ================= DATA ================= */

const educationData = [
  {
    degree: "Higher Secondary Certificate (HSC)",
    school: "Engineering University School & College",
    year: "2019 – 2021",
    achievements: ["GPA: 5.00", "Science Group"],
    skills: ["Mathematics", "Physics", "Chemistry", "Biology"],
    description:
      "Completed Higher Secondary education with a perfect GPA, developing strong analytical thinking and a solid foundation in core science subjects.",
  },
  {
    degree: "B.Sc in Computer Science & Engineering (CSE)",
    school: "United International University (UIU)",
    year: "2022 – Present",
    achievements: ["Active in UIU Computer Club", "Project Coordinator"],
    skills: [
      "C, C++",
      "Java, Java Swing, JavaFX",
      "HTML, CSS, JavaScript, PHP",
      "UI/UX Design (Figma, Canva)",
      "Git, GitHub, Jira",
      "Database & System Design",
    ],
    description:
      "Currently pursuing a B.Sc in CSE, gaining hands-on experience in programming, full-stack development, UI/UX design, and collaborative project work.",
  },
];

/* ================= ANIMATION ================= */

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* ================= COMPONENT ================= */

const EducationSection = () => {
  return (
    <section className="min-h-screen relative overflow-hidden pt-32 pb-28 px-6 bg-[#04081A] text-white">
      
      {/* Grid background (consistent with Experience & Projects) */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(50,50,70,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(50,50,70,0.15)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Glow blobs */}
      <div className="absolute top-24 left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-24 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative max-w-6xl mx-auto mb-24 text-center"
      >
        <h2 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
          Educational Journey
        </h2>
        <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
          Academic milestones and skill development that form the foundation of
          my professional growth.
        </p>
      </motion.div>

      {/* Education Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="relative grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto"
      >
        {educationData.map((edu, index) => (
          <motion.article
            key={index}
            variants={cardVariants}
            whileHover={{ y: -6 }}
            className="bg-gray-900/80 rounded-2xl p-8 border border-white/10 shadow-xl backdrop-blur-xl transition-all"
          >
            {/* Header */}
            <div className="mb-6 space-y-2">
              <h3 className="text-2xl font-semibold">
                {edu.degree}
              </h3>
              <p className="flex items-center gap-2 text-gray-300">
                <BookOpen className="w-4 h-4 text-cyan-400" />
                {edu.school}
              </p>
              <p className="flex items-center gap-2 text-sm text-gray-400">
                <Calendar className="w-4 h-4" />
                {edu.year}
              </p>
            </div>

            {/* Description */}
            <p className="text-gray-300 text-sm leading-relaxed border-l-2 border-cyan-500/60 pl-4 mb-6">
              {edu.description}
            </p>

            {/* Achievements */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-white flex items-center gap-2 mb-3">
                <Trophy className="w-4 h-4 text-yellow-500" />
                Key Achievements
              </h4>
              <div className="flex flex-wrap gap-2">
                {edu.achievements.map((item, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-2 px-3 py-1 text-sm rounded-full bg-cyan-500/10 text-cyan-400"
                  >
                    <Award className="w-4 h-4" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {edu.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-2 py-1 text-xs rounded bg-blue-500/10 text-blue-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
};

export default EducationSection;
