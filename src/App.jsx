import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";
import { ServiceDetail } from "./components/ServiceDetail";
import { BackToTop } from "./components/BackToTop";

import { AboutPage } from "./components/AboutPage";
import { CaseStudiesPage } from "./components/CaseStudiesPage";
import { ContactPage } from "./components/ContactPage";
import { BlogPage } from "./components/BlogPage";
import { BlogPostDetail } from "./components/BlogPostDetail";
import { CalendlyForm } from "./components/CalendlyForm";
import { ServicesSection } from "./components/ServicesSection";
import { TestimonialsSection } from "./components/TestimonialSection";

const BACKEND_URL = import.meta.env.VITE_REACT_APP_BACKEND_URL || 'http://localhost:8001';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <Suspense fallback={<div className="py-20 text-center">Loading section...</div>}>
          <ServicesSection />
          <TestimonialsSection />
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
          <ServiceDetail />
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
      <Route path="/blog/:slug" element={
        <>
          <Header />
          <Suspense fallback={<div className="py-20 text-center">Loading Article...</div>}>
            <BlogPostDetail />
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
          <AppRoutes />
        </BrowserRouter>
      </div>
    </HelmetProvider>
  );
}

export default App;