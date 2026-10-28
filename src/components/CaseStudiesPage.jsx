import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Header } from "./Header";
import { CaseStudiesSection } from "./CaseStudiesSection";
import { Footer } from "./Footer";
import { Toaster } from "./ui/sonner";

export const CaseStudiesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ background: "#0C0C0B", minHeight: "100vh", color: "#F3F1EC" }}>
      <Helmet>
        <title>Case Studies — AssuredPixel</title>
        <meta
          name="description"
          content="Real problems. Real builds. Real results. Explore how AssuredPixel architects and builds healthcare, clinical, LMS and commercial products."
        />
      </Helmet>
      <Header />
      <main style={{ paddingTop: "40px" }}>
        <CaseStudiesSection />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default CaseStudiesPage;
