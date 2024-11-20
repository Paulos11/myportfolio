import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import profileImage from "../assets/me-new.png";
import CV from "../assets/my_cv_sunil.pdf";

const Header = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const img = new Image();
    img.src = profileImage;
    img.onload = () => setImageLoaded(true);
  }, []);

  const navItems = ["About", "Skills", "Projects", "Contact"];

  const scrollToSection = (section) => {
    document
      .getElementById(section.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative bg-black">
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-center py-4">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`px-4 py-1.5 mx-2 text-sm rounded-lg transition-all duration-300 
                  ${
                    activeSection === item.toLowerCase()
                      ? "text-white bg-white/10"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main content */}
      <div className="relative pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-5 gap-8 items-center">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="md:col-span-2"
            >
              <div className="relative mx-auto w-48 h-48">
                <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent rounded-full blur-xl animate-pulse" />
                <div className="group relative w-full h-full rounded-full overflow-hidden border-2 border-white/10 transition-transform duration-300 hover:scale-105">
                  <img
                    src={profileImage}
                    alt="Paul Lakandri"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="md:col-span-3 space-y-4"
            >
              <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="font-mono text-sm text-gray-400">
                  <div>const developer = {"{"}</div>
                  <div className="pl-4">
                    name: <span className="text-white">"Paul Lakandri"</span>,
                  </div>
                  <div className="pl-4">
                    title:{" "}
                    <span className="text-white">"Full Stack Developer"</span>,
                  </div>
                  <div className="pl-4">
                    passion:{" "}
                    <span className="text-white">
                      "Creating innovative solutions"
                    </span>
                  </div>
                  <div>{"};"}</div>
                </div>

                <div className="flex gap-4 mt-6">
                  <a
                    href={CV}
                    download
                    className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300"
                  >
                    <Download
                      size={16}
                      className="text-gray-400 group-hover:text-white"
                    />
                    <span className="text-sm text-gray-400 group-hover:text-white">
                      Download CV
                    </span>
                  </a>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="px-4 py-2 text-sm rounded-lg bg-white text-black hover:bg-gray-200 transition-colors duration-300"
                  >
                    Contact Me
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
