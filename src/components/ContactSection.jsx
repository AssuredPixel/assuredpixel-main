import React, { useState, useEffect, useRef } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";

const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_pgdttgj";
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_1kclwha";
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "6sC60wquFbDoBmEAr";

const contactInfo = {
  email: "admin@assuredpixel.com",
  phone: "+234 903 097 7669",
  address: "Remote Studio — Serving clients globally",
  hours: "Mon-Fri: 9AM-6PM WAT",
};

const EMPTY_FORM = {
  name: "",
  email: "",
  company: "",
  phone: "",
  message: "",
  service: "Website Design & Development",
};

function validate(data) {
  if (!data.name.trim())    return "Please enter your full name.";
  if (!data.email.trim())   return "Please enter your email address.";
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRe.test(data.email)) return "Please enter a valid email address.";
  if (!data.company.trim()) return "Please enter your company name.";
  return null;
}

export const ContactSection = () => {
  const [formData, setFormData]     = useState(EMPTY_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [visibleItems, setVisibleItems] = useState(new Set());
  const sectionRef  = useRef(null);
  const observerRef = useRef(null);

  const services = [
    { value: "Website Design & Development",  label: "Website Design & Development" },
    { value: "Brand Identity Design",          label: "Brand Identity Design" },
    { value: "SEO & Search Visibility",        label: "SEO & Search Visibility" },
    { value: "Paid Advertising",               label: "Paid Advertising (Google & Meta)" },
    { value: "Content & Copywriting",          label: "Content & Copywriting" },
    { value: "Digital Strategy & Consulting",  label: "Digital Strategy & Consulting" },
    { value: "Cloud Migration",                label: "Cloud Migration" },
    { value: "Cloud Security",                 label: "Cloud Security" },
  ];

  // Load EmailJS SDK once via CDN
  useEffect(() => {
    if (document.getElementById("emailjs-sdk")) return;
    const script = document.createElement("script");
    script.id  = "emailjs-sdk";
    script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
    script.async = true;
    script.onload = () => {
      if (window.emailjs) {
        window.emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
      }
    };
    document.head.appendChild(script);
  }, []);

  // Scoped IntersectionObserver — only watches elements inside this section
  useEffect(() => {
    if (!sectionRef.current) return;
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => new Set([...prev, entry.target.dataset.index]));
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" }
    );
    const elements = sectionRef.current.querySelectorAll("[data-animate]");
    elements.forEach((el) => observerRef.current.observe(el));
    return () => { if (observerRef.current) observerRef.current.disconnect(); };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sendWithEmailJS = async (templateParams) => {
    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error("EmailJS network timeout")), 4000)
    );

    const sendPromise = (async () => {
      if (window.emailjs) {
        return await window.emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          templateParams,
          EMAILJS_PUBLIC_KEY
        );
      } else {
        const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            service_id: EMAILJS_SERVICE_ID,
            template_id: EMAILJS_TEMPLATE_ID,
            user_id: EMAILJS_PUBLIC_KEY,
            template_params: templateParams,
          }),
        });
        if (!response.ok) throw new Error("EmailJS API failed");
        return response;
      }
    })();

    return await Promise.race([sendPromise, timeoutPromise]);
  };

  const sendWithFormSubmit = async () => {
    const response = await fetch("https://formsubmit.co/ajax/admin@assuredpixel.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        company: formData.company,
        phone: formData.phone || "Not provided",
        service: formData.service,
        message: formData.message || "No message provided",
        _subject: `New Inquiry from ${formData.name} (${formData.company})`,
      }),
    });

    if (!response.ok) {
      throw new Error("FormSubmit failed");
    }
    return response;
  };

  const handleSubmit = async () => {
    const error = validate(formData);
    if (error) { toast.error(error); return; }

    setIsSubmitting(true);

    const templateParams = {
      from_name:  formData.name,
      from_email: formData.email,
      company:    formData.company,
      phone:      formData.phone || "Not provided",
      service:    formData.service,
      message:    formData.message || "No message provided",
    };

    let sentSuccessfully = false;

    // Try EmailJS first
    try {
      await sendWithEmailJS(templateParams);
      sentSuccessfully = true;
    } catch (emailjsError) {
      console.warn("EmailJS failed/timed out, attempting FormSubmit fallback:", emailjsError);
      // Fallback to FormSubmit
      try {
        await sendWithFormSubmit();
        sentSuccessfully = true;
      } catch (formSubmitError) {
        console.error("FormSubmit fallback error:", formSubmitError);
      }
    }

    if (sentSuccessfully) {
      toast.success("Thank you! We've received your message and will respond within 24 hours.", {
        duration: 6000,
      });
      // Clear form inputs on successful send
      setFormData(EMPTY_FORM);
    } else {
      toast.error("Oops! Something went wrong sending your message. Please email admin@assuredpixel.com directly.");
    }

    setIsSubmitting(false);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 focus:border-transparent transition-all duration-300";

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300"
    >
      {/* Keyframe animations — plain <style> tag, no jsx prop */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(2rem); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-3rem); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(3rem); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className="text-center mb-16 opacity-0 translate-y-8"
          data-animate
          data-index="header"
          style={{ animation: visibleItems.has("header") ? "fadeInUp 0.8s ease-out forwards" : "none" }}
        >
          <div className="inline-flex items-center px-4 py-2 bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 rounded-full text-sm font-medium mb-4 transition-colors duration-300">
            Get Started Today
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-slate-50 mb-6 transition-colors duration-300">
            Let's Build Something Great
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed transition-colors duration-300">
            Tell us about your project and we'll get back to you within 24 hours with a clear plan forward.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div
            className="lg:col-span-2 opacity-0 -translate-x-12"
            data-animate
            data-index="form"
            style={{ animation: visibleItems.has("form") ? "slideInLeft 0.8s ease-out 0.2s forwards" : "none" }}
          >
            <Card className="bg-white dark:bg-slate-800 shadow-xl dark:shadow-teal-900/10 border-slate-200 dark:border-slate-700 transition-all duration-300 hover:shadow-2xl dark:hover:shadow-teal-900/20 hover:scale-[1.01]">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-slate-900 dark:text-slate-50 transition-colors duration-300">
                  Start a Project
                </CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-400 transition-colors duration-300">
                  Fill out the form below and we'll reach out to discuss your project, timeline, and budget.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="transform hover:scale-105 transition-transform duration-300">
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 transition-colors duration-300">
                        Full Name *
                      </label>
                      <input type="text" id="name" name="name" required value={formData.name} onChange={handleInputChange} className={inputClass} placeholder="John Smith" />
                    </div>
                    <div className="transform hover:scale-105 transition-transform duration-300">
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 transition-colors duration-300">
                        Email Address *
                      </label>
                      <input type="email" id="email" name="email" required value={formData.email} onChange={handleInputChange} className={inputClass} placeholder="john@company.com" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="transform hover:scale-105 transition-transform duration-300">
                      <label htmlFor="company" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 transition-colors duration-300">
                        Company Name *
                      </label>
                      <input type="text" id="company" name="company" required value={formData.company} onChange={handleInputChange} className={inputClass} placeholder="Your Company LLC" />
                    </div>
                    <div className="transform hover:scale-105 transition-transform duration-300">
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 transition-colors duration-300">
                        Phone Number
                      </label>
                      <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} className={inputClass} placeholder="+1 (555) 123-4567" />
                    </div>
                  </div>

                  <div className="transform hover:scale-105 transition-transform duration-300">
                    <label htmlFor="service" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 transition-colors duration-300">
                      Primary Interest *
                    </label>
                    <select id="service" name="service" required value={formData.service} onChange={handleInputChange} className={inputClass}>
                      {services.map((s) => (
                        <option key={s.value} value={s.value}>{s.label}</option>
                      ))}
                    </select>
                  </div>

                  <div className="transform hover:scale-105 transition-transform duration-300">
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 transition-colors duration-300">
                      Tell us about your goals (Optional)
                    </label>
                    <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleInputChange} className={`${inputClass} resize-none`} placeholder="Tell us about your current challenges and what you'd like to achieve..." />
                  </div>

                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/30 dark:hover:shadow-teal-400/30 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <span className="animate-pulse">Sending...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <ArrowRight className="w-5 h-5 transition-transform duration-300" />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-slate-500 dark:text-slate-500 text-center transition-colors duration-300">
                    We respond to every inquiry within 24 hours. Your information is never shared with third parties.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div
              className="opacity-0 translate-x-12"
              data-animate
              data-index="info"
              style={{ animation: visibleItems.has("info") ? "slideInRight 0.8s ease-out 0.3s forwards" : "none" }}
            >
              <Card className="bg-white dark:bg-slate-800 shadow-xl dark:shadow-teal-900/10 border-slate-200 dark:border-slate-700 transition-all duration-300 hover:shadow-2xl dark:hover:shadow-teal-900/20 hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-slate-900 dark:text-slate-50 transition-colors duration-300">Get In Touch</CardTitle>
                  <CardDescription className="text-slate-600 dark:text-slate-400 transition-colors duration-300">
                    Prefer to talk directly? Reach out using any of the methods below.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { icon: Mail,   label: "Email",          value: contactInfo.email },
                    { icon: Phone,  label: "Phone",          value: contactInfo.phone },
                    { icon: MapPin, label: "Address",        value: contactInfo.address },
                    { icon: Clock,  label: "Business Hours", value: contactInfo.hours },
                  ].map((item) => {
                    const ItemIcon = item.icon;
                    return (
                      <div key={item.label} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-all duration-300 hover:translate-x-2 cursor-pointer group">
                        <div className="p-2 bg-teal-100 dark:bg-teal-900/30 rounded-lg group-hover:scale-110 transition-transform duration-300">
                          <ItemIcon className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                        </div>
                        <div>
                          <div className="font-medium text-slate-900 dark:text-slate-100 transition-colors duration-300">{item.label}</div>
                          <div className="text-sm text-slate-600 dark:text-slate-400 transition-colors duration-300">{item.value}</div>
                        </div>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>
            </div>

            {/* What Happens Next */}
            <div
              className="opacity-0 translate-x-12"
              data-animate
              data-index="steps"
              style={{ animation: visibleItems.has("steps") ? "slideInRight 0.8s ease-out 0.5s forwards" : "none" }}
            >
              <Card className="bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-slate-800 dark:to-slate-800 border-teal-200 dark:border-slate-700 shadow-lg dark:shadow-teal-900/10 transition-all duration-300 hover:shadow-2xl dark:hover:shadow-teal-900/20 hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-slate-900 dark:text-slate-50 transition-colors duration-300">
                    What Happens Next?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { step: 1, title: "We Review Your Request",  body: "We read every submission carefully and respond within 24 hours" },
                    { step: 2, title: "Discovery Call",          body: "A short call to understand your goals, timeline, and budget" },
                    { step: 3, title: "Proposal & Kickoff",      body: "We send a clear proposal. Once approved, we get to work immediately" },
                  ].map(({ step, title, body }) => (
                    <div key={step} className="flex items-start space-x-3 group hover:translate-x-2 transition-transform duration-300">
                      <div className="w-8 h-8 bg-teal-600 dark:bg-teal-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-md">
                        {step}
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900 dark:text-slate-100 transition-colors duration-300">{title}</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400 transition-colors duration-300">{body}</div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
