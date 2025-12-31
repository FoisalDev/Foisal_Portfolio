import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, MapPin, Mail } from "lucide-react";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

/* ================= ANIMATION ================= */

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* ================= COMPONENT ================= */

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  const validateForm = () => {
    let temp = {};
    if (!formData.name) temp.name = true;
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) temp.email = true;
    if (!formData.subject) temp.subject = true;
    if (!formData.message) temp.message = true;
    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      setStatus("Please fill all required fields correctly.");
      return;
    }

    const form = new FormData();
    form.append("access_key", "ab9517b6-97d5-4c47-931d-bfba0bcdc578");
    Object.entries(formData).forEach(([k, v]) => form.append(k, v));

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
      });
      if (res.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setErrors({});
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch {
      setStatus("Unexpected error occurred.");
    }
  };

  const socialLinks = [
    {
      icon: <FaFacebookF />,
      link: "https://www.facebook.com/dev.foisal/",
      bg: "bg-blue-600",
    },
    {
      icon: <FaGithub />,
      link: "https://github.com/FoisalDev",
      bg: "bg-gray-800",
    },
    {
      icon: <FaLinkedinIn />,
      link: "https://www.linkedin.com/in/foisal-arefin/",
      bg: "bg-blue-700",
    },
  ];

  return (
    <section className="min-h-screen relative overflow-hidden pt-32 pb-28 px-6 bg-[#04081A] text-white">
      
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(50,50,70,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(50,50,70,0.15)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Glow blobs */}
      <div className="absolute top-24 left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-24 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="relative max-w-6xl mx-auto mb-24 text-center"
      >
        <h1 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
          Let’s Connect
        </h1>
        <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
          Open to collaboration, freelance projects, and full-time opportunities.
          Let’s build something impactful together.
        </p>
      </motion.div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto"
      >
        {/* Info */}
        <motion.div variants={fadeUp} className="space-y-8">
          {[
            {
              icon: <Mail className="w-5 h-5 text-cyan-400" />,
              label: "Email",
              value: "foisalarefin0987@gmail.com",
            },
            {
              icon: <MapPin className="w-5 h-5 text-cyan-400" />,
              label: "Location",
              value: "Dhaka, Bangladesh",
            },
            {
              icon: <Phone className="w-5 h-5 text-cyan-400" />,
              label: "Phone",
              value: "+880 1919-933481 / +880 1531-780118",
            },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="p-3 bg-cyan-500/10 rounded-lg">
                {item.icon}
              </div>
              <div>
                <h3 className="font-semibold">{item.label}</h3>
                <p className="text-gray-400">{item.value}</p>
              </div>
            </div>
          ))}

          {/* Socials */}
          <div className="flex gap-4 pt-4">
            {socialLinks.map((s, i) => (
              <a
                key={i}
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 flex items-center justify-center rounded-full ${s.bg} hover:scale-110 transition-transform shadow-lg`}
              >
                <span className="text-white text-xl">{s.icon}</span>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          variants={fadeUp}
          className="bg-gray-900/80 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-xl"
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            {["name", "email", "subject"].map((field) => (
              <input
                key={field}
                type={field === "email" ? "email" : "text"}
                placeholder={`Your ${field}`}
                value={formData[field]}
                onChange={(e) =>
                  setFormData({ ...formData, [field]: e.target.value })
                }
                className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                  errors[field] ? "border-red-500" : "border-gray-700"
                } focus:border-cyan-500 outline-none`}
              />
            ))}
            <textarea
              rows="4"
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                errors.message ? "border-red-500" : "border-gray-700"
              } focus:border-cyan-500 outline-none resize-none`}
            />

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-teal-400 to-blue-500 py-3 rounded-lg font-semibold hover:opacity-90 transition"
            >
              Send Message <Send size={16} />
            </button>
          </form>

          {status && (
            <p className="mt-4 text-center text-sm text-gray-300">{status}</p>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}
