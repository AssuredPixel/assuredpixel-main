import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { trackCtaClick } from "../lib/analytics";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: "Work", href: "/#work" },
    { name: "Services", href: "/#services" },
    { name: "Cloud & DevOps", href: "/cloud-devops" },
    { name: "About", href: "/about" },
  ];

  const handleNavClick = (href, label) => {
    trackCtaClick(label || href, "Header");
    setIsMenuOpen(false);

    if (href.startsWith("/#")) {
      const id = href.replace("/", "");
      if (location.pathname === "/") {
        const element = document.querySelector(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          return;
        }
      }
    }
    navigate(href);
  };

  return (
    <div className="w-full bg-[#0C0C0B] text-[#F3F1EC] z-50">
      {/* 1.1 Top Announcement Bar */}
      <div className="border-b border-[#21201E] px-6 py-2.5 text-center text-[13px] text-[#A8A6A0]">
        Remote studio, working with clients globally.{" "}
        <Link
          to="/cloud-devops"
          onClick={() => trackCtaClick("Announcement: Cloud & DevOps", "AnnouncementBar")}
          className="text-[#F3F1EC] underline underline-offset-[3px] hover:text-[#2CC3A5] transition-colors"
        >
          See our new Cloud &amp; DevOps practice →
        </Link>
      </div>

      {/* Main Navigation Header */}
      <header className="max-w-[1360px] mx-auto px-6 sm:px-10 py-6 sm:py-7 flex items-center justify-between gap-5">
        {/* Brand Logo */}
        <Link
          to="/"
          onClick={() => handleNavClick("/", "Logo Home")}
          className="flex items-center text-decoration-none"
          aria-label="AssuredPixel Home"
        >
          <Logo className="h-8" />
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Main" className="hidden md:flex items-center gap-8 lg:gap-10 text-[15px] font-normal text-[#F3F1EC]">
          {navLinks.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.href, item.name)}
              className="py-2.5 hover:text-[#2CC3A5] transition-colors bg-transparent border-0 cursor-pointer text-[15px]"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Right CTA - Let's Talk */}
        <div className="hidden md:flex items-center">
          <button
            onClick={() => handleNavClick("/#contact", "Let's Talk")}
            className="text-[15px] font-medium text-[#F3F1EC] underline underline-offset-[6px] hover:text-[#2CC3A5] transition-colors bg-transparent border-0 cursor-pointer p-0"
          >
            Let's Talk
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-[#F3F1EC] hover:text-[#2CC3A5] focus:outline-none"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[105px] bottom-0 bg-[#0C0C0B]/98 backdrop-blur-xl border-t border-[#21201E] z-50 flex flex-col justify-between p-8 animate-in fade-in duration-200">
          <nav className="flex flex-col gap-6 text-xl font-tight text-[#F3F1EC]">
            {navLinks.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href, item.name)}
                className="text-left py-2 hover:text-[#2CC3A5] transition-colors border-b border-[#1E1E1C]"
              >
                {item.name}
              </button>
            ))}
          </nav>

          <div className="pt-6 border-t border-[#21201E]">
            <button
              onClick={() => handleNavClick("/#contact", "Let's Talk (Mobile)")}
              className="w-full py-4 rounded-full bg-[#F3F1EC] text-[#0C0C0B] font-semibold text-center text-base hover:bg-white transition-all shadow-lg"
            >
              Let's Talk
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
