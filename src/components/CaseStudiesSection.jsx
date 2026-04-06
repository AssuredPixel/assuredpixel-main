import React, { useRef, useState, useEffect } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    name: "Seasteel Marine & Offshore Services",
    category: "Corporate Website",
    country: "Nigeria",
    description:
      "Full website design and development for Nigeria's premier marine and offshore services company. Built to establish credibility with major oil sector clients including ExxonMobil, Chevron, and NLNG.",
    stack: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    url: "https://www.seasteelsmarine.com",
    image: "/portfolio/seasteelmarin-homepage.JPG",
    accent: "#00AEEF",
  },
  {
    id: 2,
    name: "Adar Limited",
    category: "Landing Page & Waitlist",
    country: "Nigeria",
    description:
      "Conversion-focused landing page for a career coaching startup targeting young African professionals. Designed to drive waitlist signups for their quarterly Mastery Pod cohort.",
    stack: ["Next.js", "Tailwind CSS", "Vercel"],
    url: "https://adar-limited.vercel.app",
    image: "/portfolio/Adar-landing-page.JPG",
    accent: "#10B981",
  },
  {
    id: 3,
    name: "RekrutKlin",
    category: "SaaS Platform",
    country: "United States",
    description:
      "Clinical trial recruitment platform for a US-based doctor. Built for both web and mobile with a focus on professional credibility and clean UX for medical industry users.",
    stack: ["Next.js", "Tailwind CSS", "MongoDB", "Vercel", "AWS", "Cloudflare", "Twilio", "AGORA"],
    url: "https://rekrutklin.com",
    image: "/portfolio/Rekrutklin-home.JPG",
    accent: "#6366F1",
  },
];

export const CaseStudiesSection = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => new Set([...prev, entry.target.dataset.index]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach((el) => observerRef.current.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <section
      id="case-studies"
      className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 rounded-full text-sm font-medium mb-4">
            Our Work
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-slate-50 mb-6">
            Projects We've Built
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Every project gets our full attention. Here's what we've delivered for real clients.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              data-animate
              data-index={`card-${index}`}
              className={`group transition-all duration-700 ${visibleItems.has(`card-${index}`)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
                }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:border-teal-300 dark:hover:border-teal-600 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">

                {/* Image */}
                <div className="relative h-52 overflow-hidden bg-slate-100 dark:bg-slate-700">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextElementSibling.style.display = "flex";
                    }}
                  />
                  {/* Fallback if image missing */}
                  <div
                    className="absolute inset-0 hidden items-center justify-center"
                    style={{ backgroundColor: project.accent + "15" }}
                  >
                    <span className="text-4xl font-bold" style={{ color: project.accent }}>
                      {project.name.charAt(0)}
                    </span>
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm text-slate-700 dark:text-slate-300 px-3 py-1 rounded-full text-xs font-medium">
                      {project.category}
                    </span>
                  </div>

                  {/* Country badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm text-slate-700 dark:text-slate-300 px-3 py-1 rounded-full text-xs font-medium">
                      {project.country}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300">
                    {project.name}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>

                  {/* Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded-md text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-teal-600 dark:text-teal-400 font-semibold text-sm hover:gap-3 transition-all duration-300"
                  >
                    View Live Site
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="text-center mt-12">
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            More projects coming soon. We take on a limited number of clients each month to ensure quality.
          </p>
        </div>
      </div>
    </section >
  );
};