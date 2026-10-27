import React from "react";
import { trackCtaClick } from "../lib/analytics";

export const WhoWeAreSection = () => {
  const handleScrollToWork = (e) => {
    e.preventDefault();
    trackCtaClick("Explore our work", "WhoWeAreSection");
    const el = document.querySelector("#work");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="about"
      className="max-w-[1360px] mx-auto px-6 sm:px-10 py-24 sm:py-32 flex flex-col lg:flex-row gap-12 lg:gap-16 justify-between items-start"
    >
      {/* Left Column: Heading and section label */}
      <div className="flex-1 min-w-0 max-w-[640px]">
        <p className="font-mono text-xs sm:text-[14px] text-[#8E8C87] uppercase tracking-[0.12em] mb-5">
          Who we are
        </p>
        <h2 className="font-tight font-medium text-[28px] sm:text-[38px] lg:text-[48px] leading-[1.15] tracking-[-0.025em] text-[#F3F1EC]">
          We work with founders, B2B teams and growing companies who want a site that brings in business and a setup that doesn't fall over when it does.
        </h2>
      </div>

      {/* Right Column: Key metrics and exploration action */}
      <div className="flex-1 min-w-0 lg:max-w-[440px] flex flex-col gap-8 lg:self-end">
        <div className="grid grid-cols-3 gap-6 sm:gap-8">
          <div>
            <div className="font-tight text-3xl sm:text-4xl lg:text-[52px] font-semibold tracking-[-0.03em] text-[#F3F1EC] leading-none">
              5+
            </div>
            <div className="text-xs sm:text-[14px] text-[#A8A6A0] mt-2 leading-snug">
              Projects delivered
            </div>
          </div>

          <div>
            <div className="font-tight text-3xl sm:text-4xl lg:text-[52px] font-semibold tracking-[-0.03em] text-[#F3F1EC] leading-none">
              2
            </div>
            <div className="text-xs sm:text-[14px] text-[#A8A6A0] mt-2 leading-snug">
              Countries served, incl. the USA
            </div>
          </div>

          <div>
            <div className="font-tight text-3xl sm:text-4xl lg:text-[52px] font-semibold tracking-[-0.03em] text-[#2CC3A5] leading-none">
              100%
            </div>
            <div className="text-xs sm:text-[14px] text-[#A8A6A0] mt-2 leading-snug">
              Client retention
            </div>
          </div>
        </div>

        <a
          href="#work"
          onClick={handleScrollToWork}
          className="self-start inline-flex items-center justify-center min-h-[48px] px-6 rounded-full border border-[#3B3A37] text-[15px] font-medium text-[#F3F1EC] hover:border-[#F3F1EC] hover:bg-[#181816] active:scale-95 transition-all text-decoration-none cursor-pointer"
        >
          Explore our work
        </a>
      </div>
    </section>
  );
};
