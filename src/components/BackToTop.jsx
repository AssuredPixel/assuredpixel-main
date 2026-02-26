import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export const BackToTop = () => {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const servicesSection = document.getElementById("services");

    const handleScroll = () => {
      if (!servicesSection) {
        setVisible(window.scrollY > 300);
        return;
      }
      // Show after user scrolls past the top of the services section
      const threshold = servicesSection.offsetTop;
      setVisible(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <style>{`
        .btt-btn {
          position: fixed;
          bottom: 28px;
          right: 28px;
          z-index: 9999;
          width: 52px;
          height: 52px;
          border-radius: 50%;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #0d9488, #0f766e);
          box-shadow: 0 4px 20px rgba(13, 148, 136, 0.45);
          transition: opacity 0.35s cubic-bezier(.4,0,.2,1),
                      transform 0.35s cubic-bezier(.4,0,.2,1),
                      box-shadow 0.25s ease;
          opacity: 0;
          pointer-events: none;
          transform: translateY(20px) scale(0.85);
          outline: none;
        }

        .btt-btn.visible {
          opacity: 1;
          pointer-events: auto;
          transform: translateY(0) scale(1);
        }

        .btt-btn:hover {
          background: linear-gradient(135deg, #0f766e, #115e59);
          box-shadow: 0 8px 32px rgba(13, 148, 136, 0.65);
          transform: translateY(-3px) scale(1.08);
        }

        .btt-btn:active {
          transform: translateY(0) scale(0.97);
        }

        .btt-ring {
          position: absolute;
          inset: -3px;
          border-radius: 50%;
          border: 2px solid rgba(13, 148, 136, 0.35);
          animation: btt-pulse 2.4s ease-in-out infinite;
        }

        .btt-icon {
          color: #ffffff;
          transition: transform 0.25s ease;
        }

        .btt-btn:hover .btt-icon {
          transform: translateY(-2px);
        }

        @keyframes btt-pulse {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50%       { transform: scale(1.22); opacity: 0; }
        }

        @media (prefers-color-scheme: dark) {
          .btt-btn { box-shadow: 0 4px 20px rgba(45, 212, 191, 0.3); }
          .btt-ring { border-color: rgba(45, 212, 191, 0.25); }
        }
      `}</style>

      <button
        className={`btt-btn${visible ? " visible" : ""}`}
        onClick={scrollToTop}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        aria-label="Back to top"
        title="Back to top"
      >
        <span className="btt-ring" />
        <ChevronUp size={24} strokeWidth={2.5} className="btt-icon" />
      </button>
    </>
  );
};
