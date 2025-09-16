import { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "@/assets/css/tomorrow.css";
import Meteors from "@/components/ui/meteors";
import PortfolioPage from "@/pages/About/About";
import SparklesText from "@/components/ui/sparkles-text";
import { FlipWords } from "@/components/ui/flip-words";

// Grid Background
const GridBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
    <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        className="absolute inset-0"
      >
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <rect
            width="40"
            height="40"
            fill="none"
            stroke="white"
            strokeWidth="0.5"
            className="opacity-40 animate-gridPulse"
          />
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  </div>
);

export default function Hero() {
  const words = [
    "Full-Stack Developer & UI/UX Enthusiast",
    "JavaScript Developer",
    "Front-End & Back-End Developer",
    "IoT Device Maker & Arduino Coder",
    "Networking & Cisco Packet Tracer Enthusiast",
  ];

  const [code] = useState(`
const profile = {
    name: 'Foisal Arefin',
    title: 'Full-Stack Developer | Cloud Enthusiast | Problem Solver',
    skills: [
        'React', 'NextJS', 'Redux', 'Express',
        'MySQL', 'MongoDB', 'Docker', 'AWS', 'TypeScript',
        'GraphQL', 'Git', 'Linux', 'Discord Development'
    ],
    hardWorker: true,
    quickLearner: true,
    problemSolver: true,
    yearsOfExperience: 4, 
    hireable: function() {
        return (
            this.hardWorker &&
            this.problemSolver &&
            this.skills.length >= 5 &&
            this.yearsOfExperience >= 3
        );
    }
};
  `);

  useEffect(() => {
    Prism.highlightAll();
    const style = document.createElement("style");
    style.textContent = `
      @keyframes gridPulse {
        0%, 100% { opacity: 0.1; }
        50% { opacity: 0.3; }
      }
      
      @keyframes dotPulse {
        0%, 100% { opacity: 0.2; transform: scale(0.8); }
        50% { opacity: 0.5; transform: scale(1.2); }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, [code]);

  return (
    <main className="bg-[#020617] text-white min-h-screen">
      <section className="hero min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8 py-10 md:py-16 lg:py-0">
        <GridBackground />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Meteors number={10} />
        </div>

        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10 py-8 md:py-10 lg:py-12">
          {/* Left column */}
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0 relative">
            {/* Decorative blurs */}
            <div className="absolute hidden lg:-top-20 lg:-left-20 lg:block w-48 h-48 lg:w-64 lg:h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute hidden lg:block lg:top-40 lg:-right-20 w-48 h-48 lg:w-64 lg:h-64 bg-teal-500/10 rounded-full blur-3xl"></div>

            {/* Welcome badge */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 mb-6 sm:mb-8">
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
              <span className="text-gray-300 text-xs sm:text-sm font-medium">
                Welcome to my universe
              </span>
            </div>

            {/* Name section */}
            <div className="relative mb-6 sm:mb-8">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
                <SparklesText text="Hello" />
                <span className="relative inline-block">
                  I&apos;m
                  <span className="typing-effect gradient-text">
                    {" "}
                    Foisal Arefin
                  </span>
                </span>
              </h1>
            </div>

            {/* Role badge */}
            <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-500/10 to-teal-500/10 border border-blue-500/20 mb-6 sm:mb-8 backdrop-blur-sm">
              <span>
                <FlipWords
                  className="text-lg sm:text-xl text-blue-400 font-medium"
                  words={words}
                />
              </span>
            </div>

            {/* Description */}
            <div className="relative mb-8 sm:mb-12 max-w-xl">
              <p className="text-base sm:text-xl text-gray-300/90 leading-relaxed">
                JavaScript lover 🚀 | IoT Device Creator 🔧 | Networking & Cisco
                Packet Tracer Enthusiast 💻✨
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              {/* Learn More Button */}
              <a
                href="https://github.com/FoisalDev"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-teal-400 p-0.5 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_2rem_-0.5rem_#60A5FA]"
              >
                <span className="block w-full px-6 sm:px-8 py-3 sm:py-4 rounded-[11px] bg-gray-900 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-teal-400">
                  <span className="relative flex items-center justify-center gap-2 text-white font-medium">
                    <span>Learn More</span>
                    <i className="fas fa-arrow-right transform transition-all duration-300 group-hover:translate-x-1"></i>
                  </span>
                </span>
              </a>

              {/* Get Resume Button */}
              <a
                href="/resume.pdf" // ফাইলটা public ফোল্ডারে resume.pdf নামে রাখতে হবে
                download="Foisal_Arefin_Resume.pdf"
                className="group relative inline-flex items-center justify-center gap-3 
             bg-gradient-to-r from-blue-500 to-teal-400 p-0.5 rounded-xl 
             transition-all duration-300 hover:scale-105 
             hover:shadow-[0_0_2rem_-0.5rem_#60A5FA]"
              >
                <span
                  className="block w-full px-6 sm:px-8 py-3 sm:py-4 rounded-[11px] 
                   bg-gray-900 border border-blue-500/30 
                   transition-all duration-300 
                   group-hover:bg-gradient-to-r 
                   group-hover:from-blue-500 group-hover:to-teal-400 
                   group-hover:text-white flex items-center justify-center gap-2"
                >
                  <span>📄 Get Resume</span>
                </span>
              </a>
            </div>
          </div>

          {/* Right column - Code window */}
          <div className="w-full lg:w-1/2">
            <div className="gradient-border">
              <div className="code-window bg-[#091121]">
                <div className="window-header">
                  <div className="window-dot bg-red-500"></div>
                  <div className="window-dot bg-yellow-500"></div>
                  <div className="window-dot bg-green-500"></div>
                  <span className="ml-2 text-sm text-gray-400 flex items-center gap-2">
                    <i className="fas fa-code"></i>
                    developer.js
                  </span>
                </div>
                <pre className="language-javascript">
                  <code className="language-javascript">{code}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce flex flex-col items-center gap-2">
        <span className="text-gray-400 text-sm flex items-center gap-2">
          <i className="fas fa-mouse text-blue-400"></i>
          About me
        </span>
        <i className="fas fa-chevron-down text-blue-400 text-xl"></i>
      </div>

      <PortfolioPage />
    </main>
  );
}
