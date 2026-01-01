import { motion } from "framer-motion";

// Academic achievement images
import trophyImg from "../../assets/achievements/sad-trophy.jpg";
import certificateImg from "../../assets/achievements/sad-certificate.jpg";
import teamImg from "../../assets/achievements/sad-team.jpg";
import meImg from "../../assets/achievements/me.jpg";

// Online certificates
import htmlCert from "../../assets/achievements/html-cert.jpg";
import cssCert from "../../assets/achievements/css-cert.jpg";
import javaCert from "../../assets/achievements/java-cert.jpg";
import CCert from "../../assets/achievements/C-cert.jpg";
import CppCert from "../../assets/achievements/cpp-cert.png";
/* ================= ANIMATION ================= */

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

/* ================= COMPONENT ================= */

export default function Achievements() {
  return (
    <section className="min-h-screen relative overflow-hidden pt-32 pb-28 px-6 bg-[#04081A] text-white">
      {/* Grid background (same as Experience / Projects / Education) */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(50,50,70,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(50,50,70,0.15)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Glow blobs */}
      <div className="absolute top-24 left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-24 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* ================= ACADEMIC ACHIEVEMENT ================= */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative max-w-6xl mx-auto mb-32"
      >
        {/* Header */}
        <motion.div variants={fadeUp} className="mb-16">
          <h1 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
            Academic Achievement
          </h1>
        </motion.div>

        {/* Trophy + Text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Trophy */}
          <motion.img
            variants={fadeUp}
            src={trophyImg}
            alt="UIU CSE SAD Lab Trophy"
            whileHover={{ scale: 1.05 }}
            className="rounded-2xl shadow-2xl border border-white/10 w-full"
          />

          {/* Text */}
          <motion.div variants={fadeUp}>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              UIU CSE SAD Lab Project Showcase
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed">
              Honored to share that our project{" "}
              <span className="text-white font-semibold">Law Shield</span>{" "}
              secured the{" "}
              <span className="text-white font-semibold">
                8th Runner-Up position among 105 teams
              </span>{" "}
              at the UIU CSE SAD Lab Project Showcase.
              <br />
              <br />
              This achievement reflects strong teamwork, system analysis skills,
              and real-world problem-solving — motivating me to aim even higher
              in the next chapter.
            </p>
          </motion.div>
        </div>

        {/* Supporting Images */}
        <div className="mt-20 space-y-12">
          {/* Certificate + Team */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.img
              variants={fadeUp}
              src={certificateImg}
              alt="Achievement Certificate"
              whileHover={{ scale: 1.03 }}
              className="rounded-xl border border-white/10 shadow-xl w-full"
            />

            <motion.img
              variants={fadeUp}
              src={teamImg}
              alt="Team Photo"
              whileHover={{ scale: 1.03 }}
              className="rounded-xl border border-white/10 shadow-xl w-full"
            />
          </div>

          {/* You holding award */}
          <motion.div
            variants={fadeUp}
            whileHover={{ scale: 1.02 }}
            className="flex justify-center"
          >
            <img
              src={meImg}
              alt="Holding Trophy and Certificate"
              className="rounded-2xl border border-white/10 shadow-2xl w-full max-w-sm"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* ================= ONLINE CERTIFICATIONS ================= */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative max-w-6xl mx-auto"
      >
        <motion.h2
          variants={fadeUp}
          className="text-3xl md:text-4xl font-bold mb-14"
        >
          Professional Certifications
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {[
            {
              img: htmlCert,
              title: "Introduction to HTML",
              org: "SoloLearn • 2025",
            },
            {
              img: cssCert,
              title: "Introduction to CSS",
              org: "SoloLearn • 2025",
            },
            {
              img: javaCert,
              title: "Introduction to Java",
              org: "SoloLearn • 2025",
            },
            {
              img: CppCert,
              title: "Introduction to C++",
              org: "SoloLearn • 2025",
            },
            {
              img: CCert,
              title: "Introduction to C",
              org: "SoloLearn • 2026",
            },
          ].map((cert, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className="bg-gray-900/80 rounded-2xl p-6 border border-white/10 shadow-xl backdrop-blur-xl transition-all"
            >
              <img
                src={cert.img}
                alt={cert.title}
                className="rounded-lg mb-4 w-full"
              />
              <h3 className="font-semibold text-lg">{cert.title}</h3>
              <p className="text-sm text-gray-400">{cert.org}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </section>
  );
}
