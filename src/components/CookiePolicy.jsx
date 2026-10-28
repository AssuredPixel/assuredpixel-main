import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export const CookiePolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Cookie Policy — AssuredPixel</title>
        <meta
          name="description"
          content="Learn how AssuredPixel uses cookies and minimal analytics to improve browsing and digital performance."
        />
        <link rel="canonical" href="https://assuredpixel.com/cookies" />
      </Helmet>

      <div
        style={{
          background: "#0C0C0B",
          color: "#F3F1EC",
          minHeight: "100vh",
          padding: "60px 0 120px",
          fontFamily: "'Inter', system-ui, sans-serif",
        }}
      >
        <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 32px" }}>
          {/* Breadcrumbs */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontSize: 13,
              fontFamily: "'JetBrains Mono', monospace",
              color: "#8E8C87",
              marginBottom: 40,
            }}
          >
            <Link
              to="/"
              style={{ color: "#A8A6A0", textDecoration: "none" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#F5A524")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#A8A6A0")}
            >
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span style={{ color: "#F3F1EC" }}>Cookie Policy</span>
          </nav>

          {/* Header */}
          <div style={{ marginBottom: 48 }}>
            <p
              style={{
                margin: "0 0 16px",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 13,
                letterSpacing: "0.24em",
                color: "#F5A524",
              }}
            >
              // TELEMETRY &amp; SESSION POLICY
            </p>
            <h1
              className="font-tight font-semibold"
              style={{
                margin: "0 0 16px",
                fontSize: "clamp(36px, 5vw, 64px)",
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                color: "#F3F1EC",
              }}
            >
              Cookie Policy
            </h1>
            <p
              style={{
                margin: 0,
                fontSize: 14,
                fontFamily: "'JetBrains Mono', monospace",
                color: "#8E8C87",
              }}
            >
              Last updated: October 2026
            </p>
          </div>

          {/* Document Content Box */}
          <div
            style={{
              background: "#121211",
              border: "1px solid #21201E",
              borderRadius: 16,
              padding: "48px 40px",
              display: "flex",
              flexDirection: "column",
              gap: 40,
            }}
          >
            <section>
              <h2
                className="font-tight font-semibold"
                style={{
                  margin: "0 0 16px",
                  fontSize: 22,
                  color: "#F3F1EC",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <span style={{ color: "#F5A524", fontFamily: "'JetBrains Mono', monospace", fontSize: 16 }}>
                  01
                </span>
                What are Cookies?
              </h2>
              <p style={{ margin: 0, fontSize: 16, lineHeight: 1.7, color: "#A8A6A0" }}>
                Cookies are small data files placed on your device to maintain session states, remember shop cart items, and ensure seamless navigation across our web application.
              </p>
            </section>

            <section style={{ borderTop: "1px solid #1E262D", paddingTop: 36 }}>
              <h2
                className="font-tight font-semibold"
                style={{
                  margin: "0 0 16px",
                  fontSize: 22,
                  color: "#F3F1EC",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <span style={{ color: "#F5A524", fontFamily: "'JetBrains Mono', monospace", fontSize: 16 }}>
                  02
                </span>
                How We Use Cookies
              </h2>
              <div style={{ fontSize: 16, lineHeight: 1.7, color: "#A8A6A0" }}>
                <p style={{ margin: "0 0 14px" }}>We use cookies strictly for practical utility:</p>
                <ul style={{ margin: 0, paddingLeft: 24, display: "flex", flexDirection: "column", gap: 12 }}>
                  <li>
                    <strong style={{ color: "#F3F1EC" }}>Essential Operations:</strong> Preserving cart contents in our shop drawer, maintaining session security, and caching theme settings.
                  </li>
                  <li>
                    <strong style={{ color: "#F3F1EC" }}>Performance Metrics:</strong> Aggregating anonymous visitor insights to identify load latency and enhance user experience.
                  </li>
                </ul>
              </div>
            </section>

            <section style={{ borderTop: "1px solid #1E262D", paddingTop: 36 }}>
              <h2
                className="font-tight font-semibold"
                style={{
                  margin: "0 0 16px",
                  fontSize: 22,
                  color: "#F3F1EC",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <span style={{ color: "#F5A524", fontFamily: "'JetBrains Mono', monospace", fontSize: 16 }}>
                  03
                </span>
                Managing Your Preferences
              </h2>
              <p style={{ margin: 0, fontSize: 16, lineHeight: 1.7, color: "#A8A6A0" }}>
                You may configure your browser to reject cookies or notify you whenever cookies are requested. Note that certain features such as persistent shop cart items rely on local storage to function as designed.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default CookiePolicy;
