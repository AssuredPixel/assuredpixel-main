import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Scale, CheckCircle, AlertCircle, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export const TermsAndConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Terms & Conditions | AssuredPixel Digital Marketing</title>
        <meta name="description" content="View the terms and conditions for using AssuredPixel's services and website." />
      </Helmet>

      <div className="min-h-screen pt-24 pb-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="flex items-center space-x-2 text-sm text-slate-500 dark:text-slate-400 mb-8">
            <Link to="/" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-slate-900 dark:text-slate-100 font-medium">Terms & Conditions</span>
          </nav>

          {/* Header */}
          <div className="mb-12">
            <div className="inline-flex items-center justify-center p-3 mb-6 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl text-emerald-600 dark:text-emerald-400">
              <Scale className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Terms & <span className="text-emerald-600 dark:text-emerald-400">Conditions</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Last updated: April 6, 2026
            </p>
          </div>

          {/* Content */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 md:p-12 shadow-sm space-y-10">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-emerald-600" />
                1. Acceptance of Terms
              </h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                By accessing or using our website and services, you agree to comply with and be bound by these Terms and Conditions. If you do not agree to these terms, please refrain from using our site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                <AlertCircle className="w-6 h-6 text-emerald-600" />
                2. Use of Services
              </h2>
              <div className="text-slate-600 dark:text-slate-300 space-y-4 leading-relaxed">
                <p>You agree to use our services only for lawful purposes. You are prohibited from:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Violating any local, state, or federal laws.</li>
                  <li>Attempting to interfere with the network security of AssuredPixel.</li>
                  <li>Using automated systems (bots) to scrape data from our site.</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                3. Intellectual Property
              </h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                All content on this website, including text, graphics, logos, and software, is the property of AssuredPixel Digital and is protected by intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                4. Limitation of Liability
              </h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                AssuredPixel will not be held liable for any indirect, incidental, or consequential damages resulting from the use of our services or website.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};
