import React, { useRef, useState, useEffect } from "react";

export const CalendlyForm = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const currentSection = sectionRef.current;
        if (currentSection) {
            observer.observe(currentSection);
        }

        return () => {
            if (currentSection) {
                observer.unobserve(currentSection);
            }
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            id="book-call"
            className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    className={`text-center mb-12 transition-all duration-1000 ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                >
                    <div className="inline-flex items-center px-4 py-2 bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 rounded-full text-sm font-medium mb-4 transition-colors duration-300">
                        Book a Strategy Session
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-slate-50 mb-6 transition-colors duration-300">
                        Let's Talk About Your Growth
                    </h2>
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed transition-colors duration-300">
                        Schedule a free 15-minute strategy call with our team to discuss your business goals and how we can help you grow online.
                    </p>
                </div>

                <div
                    className={`max-w-5xl mx-auto transition-all duration-1000 delay-300 ${
                        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                    }`}
                >
                    {/* Calendly iframe — faster than the widget.js script approach */}
                    <div className="rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700">
                        <iframe
                            src="https://calendly.com/admin-assuredpixel/30min?embed_domain=assuredpixel.com&embed_type=Inline&hide_gdpr_banner=1"
                            width="100%"
                            height="700"
                            frameBorder="0"
                            title="Book a 15-minute strategy call with AssuredPixel"
                            loading="lazy"
                            style={{ minWidth: "320px", border: "none" }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
