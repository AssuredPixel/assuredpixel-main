import React from "react";
import { Helmet } from "react-helmet-async";
import { Header } from "./Header";
import { ContactSection } from "./ContactSection";
import { Footer } from "./Footer";
import { Toaster } from "./ui/sonner";

export const ContactPage = () => {
  return (
    <div style={{ background: "#0C0C0B", minHeight: "100vh" }}>
      <Helmet>
        <title>Contact Us — AssuredPixel</title>
        <meta
          name="description"
          content="Tell us about your project. We read every message and reply within 24 hours with an honest, clear response."
        />
      </Helmet>
      <Header />
      <main>
        <ContactSection />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};
