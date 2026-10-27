import React, { useRef, useState, useEffect } from "react";

const WHAT_TO_EXPECT = [
  {
    icon: "→",
    title: "No pitch deck",
    body: "We talk about your problem first. Everything else comes after we understand what you actually need.",
  },
  {
    icon: "→",
    title: "Honest scope estimate",
    body: "If we're a good fit, you'll leave with a realistic idea of timeline and budget — not vague promises.",
  },
  {
    icon: "→",
    title: "We'll say no if we have to",
    body: "If you'd be better served by a different team or a different approach, we'll tell you that too.",
  },
];

export const CalendlyForm = () => {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="book-call"
      style={{
        background: "#0C0C0B",
        borderTop: "1px solid #21201E",
        color: "#F3F1EC",
        fontFamily: "'Inter', system-ui, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "110px 32px",
        }}
      >
        {/* ── Section label ── */}
        <p
          style={{
            margin: "0 0 20px",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 13,
            letterSpacing: "0.28em",
            color: "#F5A524",
          }}
        >
          // BOOK A CALL
        </p>

        {/* ── Two-column layout ── */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 64,
            alignItems: "flex-start",
          }}
        >
          {/* LEFT — Copy block */}
          <div
            style={{
              flex: "1 1 340px",
              minWidth: 0,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            <h2
              className="font-tight font-semibold"
              style={{
                margin: 0,
                fontSize: "clamp(32px, 4vw, 56px)",
                lineHeight: 1.06,
                letterSpacing: "-0.035em",
                color: "#F3F1EC",
              }}
            >
              30 minutes.{" "}
              <span style={{ color: "#F5A524" }}>No pitch.</span>
              <br />
              Just a real conversation.
            </h2>

            <p
              style={{
                margin: "24px 0 40px",
                fontSize: 17,
                lineHeight: 1.7,
                color: "#A8A6A0",
                maxWidth: 460,
              }}
            >
              Pick a slot that works for you and we'll show up prepared — having looked at your site, your goals, and what might be getting in the way.
            </p>

            {/* What to expect list */}
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {WHAT_TO_EXPECT.map((item) => (
                <div
                  key={item.title}
                  style={{ display: "flex", gap: 16, alignItems: "flex-start" }}
                >
                  <span
                    style={{
                      flexShrink: 0,
                      marginTop: 3,
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 16,
                      color: "#F5A524",
                    }}
                  >
                    {item.icon}
                  </span>
                  <div>
                    <p
                      style={{
                        margin: "0 0 4px",
                        fontWeight: 600,
                        fontSize: 15,
                        color: "#F3F1EC",
                      }}
                    >
                      {item.title}
                    </p>
                    <p style={{ margin: 0, fontSize: 14, lineHeight: 1.65, color: "#A8A6A0" }}>
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact fallback */}
            <p
              style={{
                margin: "40px 0 0",
                fontSize: 14,
                color: "#6B6964",
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              prefer email?{" "}
              <a
                href="mailto:admin@assuredpixel.com"
                style={{ color: "#F5A524", textDecoration: "none" }}
              >
                admin@assuredpixel.com
              </a>
            </p>
          </div>

          {/* RIGHT — Calendly embed */}
          <div
            style={{
              flex: "1 1 420px",
              minWidth: 0,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(32px)",
              transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
            }}
          >
            {/* Frame card */}
            <div
              style={{
                border: "1px solid #1E262D",
                borderRadius: 16,
                background: "#070B0E",
                overflow: "hidden",
                boxShadow: "0 24px 60px rgba(0,0,0,0.55)",
              }}
            >
              {/* Titlebar */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "14px 18px",
                  borderBottom: "1px solid #1E262D",
                }}
              >
                <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#FF5F57", display: "block" }} />
                <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#FEBC2E", display: "block" }} />
                <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#28C840", display: "block" }} />
                <span
                  style={{
                    marginLeft: 10,
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 13,
                    color: "#C9D1D9",
                  }}
                >
                  calendly.com/assuredpixel
                </span>
                {iframeLoaded && (
                  <span
                    style={{
                      marginLeft: "auto",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 11,
                      letterSpacing: "0.15em",
                      color: "#3DDC97",
                    }}
                  >
                    <span
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: "#3DDC97",
                        display: "block",
                        boxShadow: "0 0 6px #3DDC97",
                      }}
                    />
                    LIVE
                  </span>
                )}
              </div>

              {/* Spinner shown until iframe loads */}
              {!iframeLoaded && (
                <div
                  style={{
                    height: 660,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 12,
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 13,
                    color: "#3B4550",
                  }}
                >
                  <span
                    style={{
                      width: 32,
                      height: 32,
                      border: "2px solid #1E262D",
                      borderTopColor: "#F5A524",
                      borderRadius: "50%",
                      animation: "ap-cal-spin 0.8s linear infinite",
                      display: "block",
                    }}
                  />
                  loading calendar…
                  <style>{`@keyframes ap-cal-spin { to { transform: rotate(360deg); } }`}</style>
                </div>
              )}

              <iframe
                src="https://calendly.com/admin-assuredpixel/30min?embed_domain=assuredpixel.com&embed_type=Inline&hide_gdpr_banner=1&background_color=070B0E&text_color=E6EDF3&primary_color=F5A524"
                width="100%"
                height={iframeLoaded ? 660 : 0}
                frameBorder="0"
                title="Book a 30-minute discovery call with AssuredPixel"
                loading="lazy"
                onLoad={() => setIframeLoaded(true)}
                style={{ display: "block", border: "none", minWidth: "320px" }}
              />
            </div>

            {/* Caption */}
            <p
              style={{
                marginTop: 14,
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 12,
                color: "#4A4845",
                textAlign: "center",
              }}
            >
              30 min · free · no commitment · mon–fri, WAT (UTC+1)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
