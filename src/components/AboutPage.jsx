import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from './Header';
import { AboutSection } from './AboutSection';
import { Footer } from './Footer';
import { Toaster } from './ui/sonner';
import { BackToTop } from './BackToTop';

export const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[#0C0C0B] text-[#F3F1EC]">
      <Helmet>
        <title>About Us — AssuredPixel Digital Studio &amp; Founders</title>
        <meta
          name="description"
          content="Meet the founders and team behind AssuredPixel. A senior remote studio specializing in custom web products and cloud infrastructure."
        />
        <meta property="og:title" content="About Us — AssuredPixel Digital Studio & Founders" />
        <meta
          property="og:description"
          content="A senior digital studio with zero bloat. No account managers, no middlemen. Just the people who design, code, and deploy your product."
        />
      </Helmet>

      <Header />
      <main>
        <AboutSection />
      </main>
      <Footer />
      <Toaster />
      <BackToTop />
    </div>
  );
};

export default AboutPage;
