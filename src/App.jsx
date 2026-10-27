import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { ClientMarquee } from "./components/ClientMarquee";
import { WhoWeAreSection } from "./components/WhoWeAreSection";
import { SelectedWorkSection } from "./components/SelectedWorkSection";
import { WhatWeDoSection } from "./components/WhatWeDoSection";
import { CloudDevOpsTeaser } from "./components/CloudDevOpsTeaser";
import { HowWeWorkSection } from "./components/HowWeWorkSection";
import { CaseStudiesSection } from "./components/CaseStudiesSection";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";
import { BackToTop } from "./components/BackToTop";
import { ScrollToTop } from "./components/ScrollToTop";

// Lazy-load below-the-fold & non-home page routes to keep the initial JS bundle minimal
const ServicesSection = lazy(() => import("./components/ServicesSection").then(m => ({ default: m.ServicesSection })));
const CalendlyForm = lazy(() => import("./components/CalendlyForm").then(m => ({ default: m.CalendlyForm })));
const ServiceDetail = lazy(() => import("./components/ServiceDetail").then(m => ({ default: m.ServiceDetail })));
const AboutPage = lazy(() => import("./components/AboutPage").then(m => ({ default: m.AboutPage })));
const CaseStudiesPage = lazy(() => import("./components/CaseStudiesPage").then(m => ({ default: m.CaseStudiesPage })));
const ContactPage = lazy(() => import("./components/ContactPage").then(m => ({ default: m.ContactPage })));
const BlogPage = lazy(() => import("./components/BlogPage").then(m => ({ default: m.BlogPage })));
const PrivacyPolicy = lazy(() => import("./components/PrivacyPolicy").then(m => ({ default: m.PrivacyPolicy })));
const TermsAndConditions = lazy(() => import("./components/TermsAndConditions").then(m => ({ default: m.TermsAndConditions })));
const CookiePolicy = lazy(() => import("./components/CookiePolicy").then(m => ({ default: m.CookiePolicy })));



const Home = () => {
  return (
    <div className="min-h-screen bg-[#0C0C0B] text-[#F3F1EC]">
      <Header />
      <main>
        <HeroSection />
        <ClientMarquee />
        <WhoWeAreSection />
        <SelectedWorkSection />
        <WhatWeDoSection />
        <CloudDevOpsTeaser />
        <HowWeWorkSection />
        <CaseStudiesSection />
        <Suspense fallback={<div className="py-20 text-center">Loading section...</div>}>
          <ServicesSection />
          <CalendlyForm />
        </Suspense>
      </main>
      <Footer />
      <Toaster />
      <BackToTop />
    </div>
  );
};

// We will provide BrowserRouter or StaticRouter from the entry-client/entry-server
export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Suspense fallback={<div>Loading...</div>}><AboutPage /></Suspense>} />
      <Route path="/case-studies" element={<Suspense fallback={<div>Loading...</div>}><CaseStudiesPage /></Suspense>} />
      <Route path="/contact" element={<Suspense fallback={<div>Loading...</div>}><ContactPage /></Suspense>} />
      <Route path="/services/:slug" element={
        <>
          <Header />
          <Suspense fallback={<div className="py-20 text-center">Loading Service...</div>}>
            <ServiceDetail />
          </Suspense>
          <Footer />
          <Toaster />
        </>
      } />
      <Route path="/blog" element={
        <>
          <Header />
          <Suspense fallback={<div className="py-20 text-center">Loading Blog...</div>}>
            <BlogPage />
          </Suspense>
          <Footer />
          <Toaster />
        </>
      } />
      <Route path="/privacy" element={
        <>
          <Header />
          <Suspense fallback={<div className="py-20 text-center">Loading...</div>}>
            <PrivacyPolicy />
          </Suspense>
          <Footer />
          <Toaster />
        </>
      } />
      <Route path="/terms" element={
        <>
          <Header />
          <Suspense fallback={<div className="py-20 text-center">Loading...</div>}>
            <TermsAndConditions />
          </Suspense>
          <Footer />
          <Toaster />
        </>
      } />
      <Route path="/cookies" element={
        <>
          <Header />
          <Suspense fallback={<div className="py-20 text-center">Loading...</div>}>
            <CookiePolicy />
          </Suspense>
          <Footer />
          <Toaster />
        </>
      } />
    </Routes>
  );
}

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <BrowserRouter>
          <ScrollToTop />
          <AppRoutes />
        </BrowserRouter>
      </div>
    </HelmetProvider>
  );
}

export default App;