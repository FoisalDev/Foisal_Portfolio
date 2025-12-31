import { motion } from "framer-motion";

// Academic achievement images
import trophyImg from "../../assets/achievements/sad-trophy.jpg";
import certificateImg from "../../assets/achievements/sad-certificate.jpg";
import teamImg from "../../assets/achievements/sad-team.jpg";
import meImg from "../../assets/achievements/me.jpg";

// Online certificates
import htmlCert from "../../assets/achievements/html-cert.jpg";
import cssCert from "../../assets/achievements/css-cert.jpg";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Achievements() {
  return (
    <div className="pt-32 px-6 min-h-screen text-white bg-gradient-to-b from-black via-gray-900 to-black">
      
      {/* ================= ACADEMIC ACHIEVEMENT ================= */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-6xl mx-auto mb-28"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-10 tracking-tight">
          Academic Achievement
        </h1>

        {/* Trophy + Text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Trophy */}
          <motion.img
            src={trophyImg}
            alt="UIU CSE SAD Lab Trophy"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="rounded-2xl shadow-2xl border border-white/10 w-full"
          />

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25, duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-5">
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
              <br /><br />
              This achievement demonstrates strong teamwork, system analysis
              expertise, and real-world problem-solving — motivating me to push
              further and aim even higher in the next chapter.
            </p>
          </motion.div>
        </div>

        {/* ================= SUPPORTING IMAGES (PRO LAYOUT) ================= */}
        <div className="mt-20 space-y-12">

          {/* Certificate + Team */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.img
              src={certificateImg}
              alt="Achievement Certificate"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
              className="rounded-xl border border-white/10 shadow-xl w-full"
            />

            <motion.img
              src={teamImg}
              alt="Team Photo"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
              className="rounded-xl border border-white/10 shadow-xl w-full"
            />
          </div>

          {/* You holding award */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
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
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-12">
          Professional Certifications
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
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
          ].map((cert, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 140 }}
              className="bg-gray-900/70 rounded-2xl p-6 border border-white/10 backdrop-blur-md"
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
    </div>
  );
}
