import React, { useState, useEffect, useRef, useCallback } from "react";
import { trackCtaClick } from "../lib/analytics";

const SHOWCASE_SLIDES = [
  {
    name: "FarashaCRP",
    kind: "Website · Desktop",
    alt: "FarashaCRP website shown on a laptop",
    img: "/images/showcase/053882c4-c8ed-4b17-8f81-1a554d6e6f18.png",
    bg: "#121211",
  },
  {
    name: "FarashaCRP",
    kind: "Website · Mobile",
    alt: "FarashaCRP website shown on a phone",
    img: "/images/showcase/e1d87e7f-9109-4274-9890-7370d7878904.png",
    bg: "#121211",
  },
  {
    name: "RekrutKlin",
    kind: "Brand identity · Stationery",
    alt: "RekrutKlin brand identity on stationery, business cards and a tablet",
    img: "/images/showcase/a5d12104-bc29-4c5e-8eba-14e9db5f6f60.png",
    bg: "#EDEDED",
  },
  {
    name: "RekrutKlin",
    kind: "Brand identity · App",
    alt: "RekrutKlin logo on a phone in a clinic setting",
    img: "/images/showcase/7fc0a12d-5eb6-4a39-a65f-0aa9a4d0e954.png",
    bg: "#E6EEF4",
  },
  {
    name: "Prime Site Academy",
    kind: "Learning platform · Desktop",
    alt: "Prime Site Academy website shown on a laptop",
    img: "/images/showcase/619e486f-48d3-4ed0-8101-001f8d2556f4.png",
    bg: "#121211",
  },
  {
    name: "Prime Site Academy",
    kind: "Learning platform · Mobile",
    alt: "Prime Site Academy website shown on a phone",
    img: "/images/showcase/d499fe74-2519-49a1-a28d-71fa698a1310.png",
    bg: "#121211",
  },
  {
    name: "Seasteel Marine",
    kind: "Website · Desktop",
    alt: "Seasteel Marine website shown on a laptop",
    img: "/images/showcase/0e15e2ce-6926-4263-9f7e-4c1b4931c4f2.png",
    bg: "#121211",
  },
  {
    name: "Seasteel Marine",
    kind: "Website · Mobile",
    alt: "Seasteel Marine website shown on a phone",
    img: "/images/showcase/cf679989-13fc-40fe-a945-60f252cc1642.png",
    bg: "#121211",
  },
  {
    name: "Adar Limited",
    kind: "Website",
    alt: "Adar Limited corporate website",
    isPlaceholder: true,
    placeholderText: "[ Adar Limited brand mockup ]",
    bg: "#151514",
  },
];

export const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isStopped, setIsStopped] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(() => {
    return new Intl.DateTimeFormat("en-US", { month: "long" }).format(new Date());
  });
  const timerRef = useRef(null);

  const totalSlides = SHOWCASE_SLIDES.length;
  const currentSlide = SHOWCASE_SLIDES[currentIndex];

  useEffect(() => {
    const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(new Date());
    setCurrentMonth(month);
  }, []);

  const goToSlide = useCallback((index, manual = false) => {
    const nextIdx = ((index % totalSlides) + totalSlides) % totalSlides;
    setCurrentIndex(nextIdx);
    if (manual) setIsStopped(true);
  }, [totalSlides]);

  const handleNext = () => {
    trackCtaClick("Hero Carousel Next", "HeroSection");
    goToSlide(currentIndex + 1, true);
  };

  const handlePrev = () => {
    trackCtaClick("Hero Carousel Prev", "HeroSection");
    goToSlide(currentIndex - 1, true);
  };

  // 6-second auto rotation
  useEffect(() => {
    let reduceMotion = false;
    try {
      reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    } catch (e) {
      // fallback
    }

    if (reduceMotion) return;

    if (!isHovered && !isStopped) {
      timerRef.current = setInterval(() => {
        goToSlide(currentIndex + 1, false);
      }, 6000);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentIndex, isHovered, isStopped, goToSlide]);

  const handleCtaClick = (targetId, label) => {
    trackCtaClick(label, "HeroSection");
    const el = document.querySelector(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full bg-[#0C0C0B] text-[#F3F1EC]">
      {/* 1.2 Hero Header & Value Proposition */}
      <section id="top" className="max-w-[1360px] mx-auto px-6 sm:px-10 pt-16 sm:pt-24 pb-14 sm:pb-16">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2.5 mb-8 px-4 py-2 border border-[#2B2A27] rounded-full font-mono text-[13px] text-[#CFCDC7]">
          <span className="w-2 h-2 rounded-full bg-[#2CC3A5] animate-pulse" />
          Booking new projects for {currentMonth}
        </div>

        {/* High-Impact Editorial Heading with single-sweep mirror light reflection on load */}
        <div className="relative inline-block max-w-[1180px]">
          <h1 className="font-tight font-medium text-[42px] sm:text-[62px] lg:text-[88px] leading-[1.05] tracking-[-0.035em] text-[#F3F1EC]">
            <span className="text-[#6F6D69]">We build</span> websites{" "}
            <span className="text-[#6F6D69]">and</span> cloud systems{" "}
            <span className="text-[#6F6D69]">that keep</span> your business moving.
          </h1>
          {/* Unified mirror reflection sweep running once across all text on load */}
          <div
            aria-hidden="true"
            className="headline-shine-overlay font-tight font-medium text-[42px] sm:text-[62px] lg:text-[88px] leading-[1.05] tracking-[-0.035em]"
          >
            We build websites and cloud systems that keep your business moving.
          </div>
        </div>

        {/* Subtitle & Dual Action Buttons */}
        <div className="mt-12 sm:mt-14 flex flex-col md:flex-row gap-8 items-start md:items-end justify-between">
          <p className="max-w-[520px] text-base sm:text-[18px] leading-[1.65] text-[#BDBBB5]">
            AssuredPixel is a remote digital studio. We design the website your customers see and build the cloud setup that keeps it running, so one team looks after everything from the first click to the last deploy.
          </p>

          <div className="flex flex-wrap gap-3.5 items-center">
            <button
              onClick={() => handleCtaClick("#contact", "Book a free strategy call")}
              className="inline-flex items-center justify-center min-h-[52px] px-7 rounded-full bg-[#F3F1EC] text-[#0C0C0B] font-semibold text-base hover:bg-white hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer shadow-sm"
            >
              Book a free strategy call
            </button>
            <button
              onClick={() => handleCtaClick("#work", "See our work")}
              className="inline-flex items-center justify-center min-h-[52px] px-7 rounded-full border border-[#3B3A37] text-[#F3F1EC] font-medium text-base hover:border-[#F3F1EC] hover:bg-[#181816] active:scale-[0.98] transition-all cursor-pointer"
            >
              See our work
            </button>
          </div>
        </div>
      </section>

      {/* 1.2 Interactive 9-Slide Showcase Carousel */}
      <section aria-label="Project showcase" className="max-w-[1360px] mx-auto px-6 sm:px-10 pb-20 sm:pb-24">
        {/* Carousel Frame */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative rounded-2xl sm:rounded-[18px] overflow-hidden border border-[#21201E] bg-[#121211] shadow-2xl"
        >
          <div
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.2,0.7,0.2,1)]"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {SHOWCASE_SLIDES.map((slide, idx) => (
              <div
                key={idx}
                className="flex-[0_0_100%] min-w-0 aspect-[16/9] flex items-center justify-center relative overflow-hidden"
                style={{ backgroundColor: slide.bg }}
              >
                {slide.isPlaceholder ? (
                  <div className="font-mono text-sm sm:text-base text-[#8E8C87] flex items-center justify-center h-full">
                    {slide.placeholderText}
                  </div>
                ) : (
                  <img
                    src={slide.img}
                    alt={slide.alt}
                    loading={idx === 0 ? "eager" : "lazy"}
                    className="w-full h-full object-cover block select-none"
                    draggable={false}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Meta & Navigation Controls */}
        <div className="mt-5 sm:mt-6 flex flex-wrap items-center justify-between gap-5">
          {/* Slide Details */}
          <div aria-live="polite" className="flex items-baseline gap-3 sm:gap-4 min-w-0">
            <span className="font-tight text-lg sm:text-[22px] font-semibold text-[#F3F1EC] tracking-[-0.01em]">
              {currentSlide.name}
            </span>
            <span className="text-xs sm:text-[14px] text-[#A8A6A0]">
              {currentSlide.kind}
            </span>
          </div>

          {/* Interactive Controls: Dots + Arrows */}
          <div className="flex items-center gap-4 sm:gap-5">
            {/* Slide Pill Dots */}
            <div className="flex items-center gap-1.5" role="tablist" aria-label="Slide controls">
              {SHOWCASE_SLIDES.map((slide, k) => {
                const isActive = k === currentIndex;
                return (
                  <button
                    key={k}
                    type="button"
                    onClick={() => goToSlide(k, true)}
                    aria-label={`Go to slide ${k + 1}: ${slide.name}`}
                    role="tab"
                    aria-selected={isActive}
                    className="h-9 px-1 bg-transparent border-0 cursor-pointer flex items-center justify-center focus:outline-none"
                  >
                    <span
                      className={`block h-1 rounded-full transition-all duration-300 ${
                        isActive ? "w-5 bg-[#2CC3A5]" : "w-2 bg-[#3B3A37] hover:bg-[#5A5956]"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Prev Arrow */}
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous project slide"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-[#3B3A37] bg-transparent text-[#F3F1EC] text-lg flex items-center justify-center hover:border-[#F3F1EC] hover:bg-[#181816] active:scale-95 transition-all cursor-pointer"
            >
              ←
            </button>

            {/* Next Arrow */}
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next project slide"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#F3F1EC] text-[#0C0C0B] text-lg font-medium flex items-center justify-center hover:bg-white hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-md"
            >
              →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
