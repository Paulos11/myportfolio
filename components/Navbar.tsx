// components/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Home, User, Briefcase, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", icon: <Home className="w-4 h-4" />, href: "#home" },
  { name: "About", icon: <User className="w-4 h-4" />, href: "#about" },
  {
    name: "Projects",
    icon: <Briefcase className="w-4 h-4" />,
    href: "#projects",
  },
  { name: "Contact", icon: <Mail className="w-4 h-4" />, href: "#contact" },
];

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);

      const sections = navItems.map(
        (item) => document.querySelector(item.href) as HTMLElement
      );

      const current = sections.findIndex((section) => {
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (current !== -1) {
        setActiveSection(navItems[current].href.slice(1));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-6 left-[calc(50%+225px)] -translate-x-1/2 z-50 transition-all duration-300",
        hasScrolled ? "scale-90" : "scale-100"
      )}
    >
      <nav className="relative px-4 py-2 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border border-gray-200 dark:border-gray-800 rounded-full shadow-lg">
        {/* Tech Accent Line */}
        <div className="absolute -top-px left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent" />

        <ul className="flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className={cn(
                  "relative px-3 py-1.5 rounded-full text-sm font-medium transition-colors duration-200",
                  "hover:text-gray-900 dark:hover:text-white",
                  "flex items-center gap-1.5",
                  activeSection === item.href.slice(1)
                    ? "text-gray-900 dark:text-white"
                    : "text-gray-600 dark:text-gray-400"
                )}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(item.href)?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                {item.icon}
                {activeSection === item.href.slice(1) && (
                  <motion.span
                    layoutId="navbar-active-pill"
                    className="absolute inset-0 bg-gray-100 dark:bg-gray-800 rounded-full -z-10"
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Decorative Circuit Lines */}
        <div className="absolute -left-3 top-1/2 w-3 h-[1px] bg-gradient-to-r from-gray-200 dark:from-gray-700 to-transparent" />
        <div className="absolute -right-3 top-1/2 w-3 h-[1px] bg-gradient-to-l from-gray-200 dark:from-gray-700 to-transparent" />
      </nav>
    </header>
  );
};
