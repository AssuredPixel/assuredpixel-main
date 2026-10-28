import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Privacy Policy — AssuredPixel</title>
        <meta
          name="description"
          content="Our commitment to your privacy. Learn how AssuredPixel collects, uses, and protects your personal information."
        />
        <link rel="canonical" href="https://assuredpixel.com/privacy" />
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
            <span style={{ color: "#F3F1EC" }}>Privacy Policy</span>
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
              // LEGAL &amp; DATA PRIVACY
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
              Privacy Policy
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
                Information We Collect
              </h2>
              <div style={{ fontSize: 16, lineHeight: 1.7, color: "#A8A6A0" }}>
                <p style={{ margin: "0 0 14px" }}>
                  We collect information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, including:
                </p>
                <ul style={{ margin: 0, paddingLeft: 24, display: "flex", flexDirection: "column", gap: 8 }}>
                  <li>Personal identifiers (name, email address, phone number).</li>
                  <li>Inquiry details related to web, product, or cloud engineering services.</li>
                  <li>Technical usage data (browser type, interaction telemetry, anonymous analytics).</li>
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
                  02
                </span>
                How We Use Your Information
              </h2>
              <div style={{ fontSize: 16, lineHeight: 1.7, color: "#A8A6A0" }}>
                <p style={{ margin: "0 0 14px" }}>The information we collect is strictly used to:</p>
                <ul style={{ margin: 0, paddingLeft: 24, display: "flex", flexDirection: "column", gap: 8 }}>
                  <li>Provide, build, and support client digital architectures.</li>
                  <li>Communicate with you regarding proposals, project updates, and discovery calls.</li>
                  <li>Analyze traffic trends to optimize site performance and security.</li>
                  <li>Comply with standard legal, compliance, and regulatory obligations.</li>
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
                Data Security
              </h2>
              <p style={{ margin: 0, fontSize: 16, lineHeight: 1.7, color: "#A8A6A0" }}>
                We implement hardened technical and organizational safeguards designed to protect your personal information against unauthorized access, disclosure, or alteration. All client data transfers utilize modern TLS encryption protocols.
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
                Your Rights &amp; Contact
              </h2>
              <p style={{ margin: "0 0 16px", fontSize: 16, lineHeight: 1.7, color: "#A8A6A0" }}>
                Depending on your jurisdiction, you have the right to request access to, correction of, or permanent deletion of your personal data. You may contact us anytime at:
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

export default PrivacyPolicy;
