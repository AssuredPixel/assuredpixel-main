
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { mockData } from '../data/mock';

import { Logo } from './Logo';

export const Footer = () => {
  const { contactInfo, companyInfo } = mockData;
  const navigate = useNavigate();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/#services' },
    { name: 'Our Work', href: '/case-studies' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const services = [
    'Website Design & Development',
    'Brand Identity Design',
    'SEO & Search Visibility',
    'Paid Advertising',
    'Content & Copywriting',
    'Digital Strategy & Consulting',
  ];

  const handleNavClick = (href) => {
    if (href.startsWith("/#") || href === "/") {
      if (window.location.pathname === "/") {
        const id = href.replace("/", "");
        const element = document.querySelector(id || "#home");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        navigate(href);
      }
    } else {
      navigate(href);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <Logo className="h-10 mb-4" />
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {companyInfo.tagline}
                </p>
              </div>

              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
                We design and build high-quality websites and digital experiences for ambitious businesses worldwide.
              </p>

              {/* Social Proof */}
              <div className="flex items-center space-x-6 text-sm">
                <div>
                  <div className="text-2xl font-bold text-teal-600 dark:text-teal-400">4+</div>
                  <div className="text-slate-600 dark:text-slate-400">Projects</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">2</div>
                  <div className="text-slate-600 dark:text-slate-400">Countries</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900 dark:text-white">100%</div>
                  <div className="text-slate-600 dark:text-slate-400">Retention</div>
                </div>
              </div>

            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-200 text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <span className="text-slate-600 dark:text-slate-300 text-sm">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & CTA */}
            <div>
              <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">Get Started</h4>

              {/* Contact Info */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-teal-600 dark:text-teal-400 flex-shrink-0" />
                  <span className="text-slate-600 dark:text-slate-300 text-sm">{contactInfo.email}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-teal-600 dark:text-teal-400 flex-shrink-0" />
                  <span className="text-slate-600 dark:text-slate-300 text-sm">{contactInfo.phone}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-teal-600 dark:text-teal-400 flex-shrink-0" />
                  <span className="text-slate-600 dark:text-slate-300 text-sm">{contactInfo.address}</span>
                </div>
              </div>

              {/* CTA Button */}
              <button
                onClick={() => handleNavClick('/#book-call')}
                className="w-full bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg group flex items-center justify-center space-x-2"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 dark:border-slate-700 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-500 dark:text-slate-400 text-sm">
              © {currentYear} AssuredPixel. All rights reserved.
            </div>

            <div className="flex items-center space-x-6 text-sm text-slate-500 dark:text-slate-400">
              <Link to="/privacy" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-200">
                Terms of Service
              </Link>
              <Link to="/cookies" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-200">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};