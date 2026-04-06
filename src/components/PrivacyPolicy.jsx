import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Shield, Lock, Eye, FileText, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Privacy Policy | AssuredPixel Digital Marketing</title>
        <meta name="description" content="Our commitment to your privacy. Learn how AssuredPixel collects, uses, and protects your personal information." />
      </Helmet>

      <div className="min-h-screen pt-24 pb-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="flex items-center space-x-2 text-sm text-slate-500 dark:text-slate-400 mb-8">
            <Link to="/" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-slate-900 dark:text-slate-100 font-medium">Privacy Policy</span>
          </nav>

          {/* Header */}
          <div className="mb-12">
            <div className="inline-flex items-center justify-center p-3 mb-6 bg-teal-100 dark:bg-teal-900/30 rounded-2xl text-teal-600 dark:text-teal-400">
              <Shield className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Privacy <span className="text-teal-600 dark:text-teal-400">Policy</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Last updated: April 6, 2026
            </p>
          </div>

          {/* Content */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 md:p-12 shadow-sm space-y-10">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                <Eye className="w-6 h-6 text-teal-600" />
                1. Information We Collect
              </h2>
              <div className="text-slate-600 dark:text-slate-300 space-y-4 leading-relaxed">
                <p>We collect information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, including:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Personal identifiers (name, email address, phone number).</li>
                  <li>Inquiry details related to project services.</li>
                  <li>Usage data (IP address, browser type, pages visited).</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                <Lock className="w-6 h-6 text-teal-600" />
                2. How We Use Your Information
              </h2>
              <div className="text-slate-600 dark:text-slate-300 space-y-4 leading-relaxed">
                <p>The information we collect is used to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide and improve our digital marketing services.</li>
                  <li>Communicate with you regarding project inquiries.</li>
                  <li>Analyze website traffic to optimize user experience.</li>
                  <li>Comply with legal obligations.</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                <FileText className="w-6 h-6 text-teal-600" />
                3. Data Security
              </h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                We implement appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                4. Your Rights
              </h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Depending on your location, you may have certain rights regarding your personal information, including the right to access, correct, or delete your data. You can contact us at any time to exercise these rights.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};
