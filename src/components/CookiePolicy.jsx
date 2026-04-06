import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Cookie, Info, Settings, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export const CookiePolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Cookie Policy | AssuredPixel Digital Marketing</title>
        <meta name="description" content="Learn about how we use cookies to improve your experience on AssuredPixel." />
      </Helmet>

      <div className="min-h-screen pt-24 pb-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="flex items-center space-x-2 text-sm text-slate-500 dark:text-slate-400 mb-8">
            <Link to="/" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-slate-900 dark:text-slate-100 font-medium">Cookie Policy</span>
          </nav>

          {/* Header */}
          <div className="mb-12">
            <div className="inline-flex items-center justify-center p-3 mb-6 bg-amber-100 dark:bg-amber-900/30 rounded-2xl text-amber-600 dark:text-amber-400">
              <Cookie className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Cookie <span className="text-amber-600 dark:text-amber-400">Policy</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Last updated: April 6, 2026
            </p>
          </div>

          {/* Content */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 md:p-12 shadow-sm space-y-10">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                <Info className="w-6 h-6 text-amber-600" />
                1. What are Cookies?
              </h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Cookies are small text files that are placed on your computer or mobile device when you browse websites. We use them to make our website work effectively and to provide session information to ourselves.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                <Settings className="w-6 h-6 text-amber-600" />
                2. Types of Cookies We Use
              </h2>
              <div className="text-slate-600 dark:text-slate-300 space-y-6 leading-relaxed">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">Essential Cookies</h3>
                  <p>Necessary for the website to function, such as security and routing. They cannot be switched off.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">Analytics Cookies</h3>
                  <p>Used to collect information about how visitors use our site, allowing us to improve browsing and performance.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">Functionality Cookies</h3>
                  <p>Used to recognize you when you return to our website and remember your preferences.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                3. Managing Cookies
              </h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                You can set your browser to refuse all or some cookies, or to alert you when websites set or access cookies. Note that if you disable or refuse cookies, some parts of this website may become inaccessible or not function properly.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};
