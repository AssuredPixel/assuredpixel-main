import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export const TermsAndConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Terms & Conditions — AssuredPixel</title>
        <meta
          name="description"
          content="Terms and conditions governing the use of AssuredPixel services, websites, and engagements."
        />
        <link rel="canonical" href="https://assuredpixel.com/terms" />
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
            <span style={{ color: "#F3F1EC" }}>Terms &amp; Conditions</span>
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
              // CLIENT ENGAGEMENT &amp; TERMS
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
              Terms &amp; Conditions
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
                Acceptance of Terms
              </h2>
              <p style={{ margin: 0, fontSize: 16, lineHeight: 1.7, color: "#A8A6A0" }}>
                By accessing or using our websites, digital services, or entering into an engineering engagement with AssuredPixel, you agree to comply with and be bound by these Terms and Conditions.
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
                Project Engagements &amp; Deliverables
              </h2>
              <div style={{ fontSize: 16, lineHeight: 1.7, color: "#A8A6A0" }}>
                <p style={{ margin: "0 0 14px" }}>
                  All projects are governed by written milestone agreements defining scope, budget, and delivery timelines:
                </p>
                <ul style={{ margin: 0, paddingLeft: 24, display: "flex", flexDirection: "column", gap: 8 }}>
                  <li>We commit to transparent pricing with no hidden licensing or account management fees.</li>
                  <li>Clients receive weekly progress milestones and interactive preview links.</li>
                  <li>Scope revisions are agreed upon mutually in writing before additional work commences.</li>
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
                100% Client Ownership
              </h2>
              <p style={{ margin: 0, fontSize: 16, lineHeight: 1.7, color: "#A8A6A0" }}>
                Upon settlement of project fees, all intellectual property, source code repositories, design assets, and cloud configurations transfer entirely to you. We do not enforce proprietary locks or vendor lock-in of any kind.
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
                  04
                </span>
                Limitation of Liability
              </h2>
              <p style={{ margin: "0 0 16px", fontSize: 16, lineHeight: 1.7, color: "#A8A6A0" }}>
                While we build to rigorous industry standards including uptime monitoring and secure configurations, AssuredPixel will not be liable for indirect, incidental, or consequential disruptions caused by third-party infrastructure outages.
              </p>
              <a
                href="mailto:admin@assuredpixel.com"
                style={{
                  color: "#F5A524",
                  textDecoration: "none",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 14,
                }}
              >
                admin@assuredpixel.com
              </a>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsAndConditions;
