import React, { useState, useEffect } from "react";
import {
  FaHome,
  FaLaptopCode,
  FaUser,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaEnvelope,
  FaBars,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(() => {
    const path = location.pathname.substring(1) || "home";
    return path;
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle window resize for responsiveness
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setIsMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { id: "home", icon: FaHome, text: "Home", path: "/" },
    { id: "skills", icon: FaCode, text: "Skills", path: "/skills" },
    {
      id: "experience",
      icon: FaBriefcase,
      text: "Experience",
      path: "/experience",
    },
    {
      id: "education",
      icon: FaGraduationCap,
      text: "Education",
      path: "/education",
    },
    { id: "projects", icon: FaLaptopCode, text: "Projects", path: "/projects" },
    { id: "contact", icon: FaEnvelope, text: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-900/95 backdrop-blur-md md:bg-transparent md:backdrop-blur-none">
      <div className="md:fixed md:top-4 md:left-1/2 md:-translate-x-1/2 w-full md:w-auto">
        <div className="p-[2px] md:rounded-full bg-gradient-to-r from-emerald-400 via-cyan-500 to-indigo-500 animate-gradient-x">
          <nav className="bg-gray-900/90 backdrop-blur-md md:rounded-full px-4 md:px-6 py-2.5 flex flex-col md:flex-row md:items-center">
            {/* Mobile Top Bar */}
            <div className="flex justify-between items-center md:hidden">
              <Link to="/" className="text-white font-bold text-lg">
                Foisal Portfolio
              </Link>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white p-2 focus:outline-none"
              >
                <FaBars className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Links */}
            <div
              className={`${
                isMenuOpen ? "block" : "hidden"
              } md:flex md:items-center md:gap-4 lg:gap-6 mt-4 md:mt-0`}
            >
              {navLinks.map(({ id, icon: Icon, text, path }) => (
                <Link
                  key={id}
                  to={path}
                  onClick={() => {
                    setActiveLink(id);
                    setIsMenuOpen(false);
                  }}
                  className={`flex items-center gap-2 px-4 py-2 md:py-1.5 rounded-full text-sm font-medium transition-all duration-300
                    ${
                      activeLink === id
                        ? "bg-white/15 text-white scale-105"
                        : "text-gray-300 hover:text-white hover:bg-white/10"
                    }
                  `}
                >
                  <Icon
                    className={`text-base transition-transform duration-300 ${
                      activeLink === id ? "scale-110" : ""
                    }`}
                  />
                  <span>{text}</span>
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>

      {/* Gradient animation */}
      <style>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          animation: gradient-x 4s linear infinite;
          background-size: 200% 200%;
        }
      `}</style>
    </header>
  );
}
