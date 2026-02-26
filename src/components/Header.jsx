import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Logo } from "./Logo";

// Sections that get active-highlight treatment
const SCROLL_SECTIONS = ["home", "services", "testimonials"];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll-based active-section tracking
  // Uses a scroll listener instead of IntersectionObserver so it works
  // even though ServicesSection / TestimonialsSection are lazy-loaded.
  useEffect(() => {
    if (location.pathname !== "/") {
      setActiveSection("");
      return;
    }

    const getActive = () => {
      const offset = 100; // account for fixed header height
      let current = "home";

      SCROLL_SECTIONS.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const top = el.getBoundingClientRect().top;
        if (top - offset <= 0) {
          current = id;
        }
      });

      setActiveSection(current);
    };

    // Run immediately so the initial state is correct
    getActive();

    window.addEventListener("scroll", getActive, { passive: true });
    return () => window.removeEventListener("scroll", getActive);
  }, [location.pathname]);

  // Scroll to hash on load/location change
  useEffect(() => {
    if (location.hash && location.pathname === "/") {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  // Check for saved theme preference or default to light mode
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const navigation = [
    { name: "Home", href: "/", sectionId: "home" },
    { name: "Services", href: "/#services", sectionId: "services" },
    { name: "Testimonials", href: "/#testimonials", sectionId: "testimonials" },
    { name: "About", href: "/about" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  // Returns true when this nav item should be highlighted
  const isActive = (item) => {
    if (location.pathname !== "/") return false;
    return item.sectionId === activeSection;
  };

  const handleNavClick = (href) => {
    if (href.startsWith("/#") || href === "/") {
      if (window.location.pathname === "/") {
        const id = href.replace("/", "");
        const element = document.querySelector(id || "#home");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        navigate(href);
      }
    } else {
      navigate(href);
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-gray-200 dark:border-slate-700 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" onClick={() => handleNavClick("/")} className="flex-shrink-0">
              <Logo className="h-9" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => {
                const active = isActive(item);
                return (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className={`relative px-3 py-2 text-sm font-medium transition-all duration-200
                      ${active
                        ? "text-teal-600 dark:text-teal-400"
                        : "text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400"
                      }`}
                  >
                    {item.name}
                    {/* Active underline indicator */}
                    <span
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 rounded-full bg-teal-500 transition-all duration-300"
                      style={{ width: active ? "80%" : "0%" }}
                    />
                  </button>
                );
              })}
            </div>
          </nav>

          {/* Desktop Actions - Dark Mode Toggle + CTA */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* CTA Button */}
            <Button
              onClick={() => handleNavClick("/#book-call")}
              className="bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white px-6 py-2 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Book Free Audit
            </Button>
          </div>

          {/* Mobile menu button + Dark mode toggle */}
          <div className="lg:hidden flex items-center gap-2">
            {/* Dark Mode Toggle - Mobile */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-700">
              {navigation.map((item) => {
                const active = isActive(item);
                return (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className={`block px-3 py-2 text-base font-medium w-full text-left transition-all duration-200 rounded-md
                      ${active
                        ? "text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-900/20 border-l-2 border-teal-500 pl-4"
                        : "text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400"
                      }`}
                  >
                    {item.name}
                  </button>
                );
              })}
              <div className="pt-4">
                <Button
                  onClick={() => handleNavClick("/#book-call")}
                  className="bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white px-6 py-2 rounded-lg w-full transition-all duration-300"
                >
                  Book Free Audit
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
