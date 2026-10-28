import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { services } from "../data/services";

export const ServiceDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const service = services.find((s) => s.slug === slug);

  // Find current service index and adjacent services
  const currentIndex = services.findIndex((s) => s.slug === slug);
  const prevService =
    currentIndex > 0 ? services[currentIndex - 1] : services[services.length - 1];
  const nextService =
    currentIndex < services.length - 1 ? services[currentIndex + 1] : services[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return (
      <div
        style={{
          background: "#0C0C0B",
          color: "#F3F1EC",
          minHeight: "80vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px",
          fontFamily: "'Inter', system-ui, sans-serif",
        }}
      >
        <p
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 13,
            color: "#F5A524",
            letterSpacing: "0.2em",
          }}
        >
          // 404
        </p>
        <h1
          className="font-tight font-semibold"
          style={{ margin: "16px 0", fontSize: "clamp(32px, 4vw, 48px)" }}
        >
          Service not found
        </h1>
        <button
          onClick={() => navigate("/")}
          style={{
            marginTop: 20,
            padding: "12px 24px",
            borderRadius: 8,
            background: "#F5A524",
            color: "#1A1100",
            border: "none",
            fontFamily: "'JetBrains Mono', monospace",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Return to home →
        </button>
      </div>
    );
  }

  const IconComponent = service.icon;

  return (
    <>
      <Helmet>
        <title>{service.seoTitle || `${service.title} | AssuredPixel`}</title>
        <meta name="description" content={service.description} />
        <link rel="canonical" href={`https://assuredpixel.com/services/${service.slug}`} />
      </Helmet>

      <section
        style={{
          background: "#0C0C0B",
          color: "#F3F1EC",
          minHeight: "100vh",
          padding: "60px 0 120px",
          fontFamily: "'Inter', system-ui, sans-serif",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>
          {/* Top navigation row */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 16,
              paddingBottom: 32,
              marginBottom: 48,
              borderBottom: "1px solid #21201E",
            }}
          >
            <Link
              to="/#services"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                color: "#A8A6A0",
                textDecoration: "none",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 13,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#F5A524")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#A8A6A0")}
            >
              <ArrowLeft className="w-4 h-4" />
              All services
            </Link>

            {/* Pagination Controls */}
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <Link
                to={`/services/${prevService.slug}`}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "8px 14px",
                  borderRadius: 8,
                  border: "1px solid #21201E",
                  background: "#121211",
                  color: "#F3F1EC",
                  textDecoration: "none",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 12,
                  transition: "border-color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#F5A524")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#21201E")}
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Prev</span>
              </Link>

              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 12,
                  color: "#6F6D69",
                  padding: "0 4px",
                }}
              >
                {String(currentIndex + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
              </span>

              <Link
                to={`/services/${nextService.slug}`}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "8px 14px",
                  borderRadius: 8,
                  border: "1px solid #21201E",
                  background: "#121211",
                  color: "#F3F1EC",
                  textDecoration: "none",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 12,
                  transition: "border-color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#F5A524")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#21201E")}
              >
                <span className="hidden sm:inline">Next</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Main 2-column layout */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 64,
              alignItems: "flex-start",
            }}
          >
            {/* Left Column: Details */}
            <div style={{ flex: "1 1 540px", minWidth: 0 }}>
              <p
                style={{
                  margin: "0 0 16px",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 13,
                  letterSpacing: "0.24em",
                  color: "#F5A524",
                }}
              >
                // PRACTICE DETAIL
              </p>

              <h1
                className="font-tight font-semibold"
                style={{
                  margin: "0 0 24px",
                  fontSize: "clamp(36px, 5vw, 64px)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.03em",
                  color: "#F3F1EC",
                }}
              >
                {service.title}
              </h1>

              {/* Tag / Icon pill */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "8px 16px",
                  borderRadius: 999,
                  border: "1px solid #21201E",
                  background: "#121211",
                  marginBottom: 32,
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 13,
                  color: "#2CC3A5",
                }}
              >
                {IconComponent && <IconComponent className="w-4 h-4" />}
                <span>Active Service Offering</span>
              </div>

              {/* Long description text */}
              <div
                style={{
                  fontSize: 18,
                  lineHeight: 1.75,
                  color: "#A8A6A0",
                  whiteSpace: "pre-line",
                  marginBottom: 44,
                }}
              >
                {service.longDescription}
              </div>

              {/* CTA row */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
                <a
                  href="/#book-call"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    minHeight: 52,
                    padding: "0 28px",
                    borderRadius: 8,
                    background: "#F5A524",
                    color: "#1A1100",
                    fontWeight: 700,
                    fontSize: 15,
                    textDecoration: "none",
                    fontFamily: "'JetBrains Mono', monospace",
                    transition: "transform 0.15s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                >
                  Book a discovery call →
                </a>
                <Link
                  to="/contact"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    minHeight: 52,
                    padding: "0 24px",
                    borderRadius: 8,
                    border: "1px solid #21201E",
                    background: "#121211",
                    color: "#F3F1EC",
                    fontSize: 15,
                    textDecoration: "none",
                    fontFamily: "'JetBrains Mono', monospace",
                    transition: "border-color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#F5A524")}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#21201E")}
                >
                  Start a project
                </Link>
              </div>
            </div>

            {/* Right Column: Visual Frame */}
            <div style={{ flex: "1 1 440px", minWidth: 0 }}>
              <div
                style={{
                  border: "1px solid #21201E",
                  borderRadius: 16,
                  background: "#121211",
                  overflow: "hidden",
                  boxShadow: "0 24px 60px rgba(0,0,0,0.5)",
                }}
              >
                {/* Browser bar */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "14px 18px",
                    borderBottom: "1px solid #21201E",
                  }}
                >
                  <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#FF5F57", display: "block" }} />
                  <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#FEBC2E", display: "block" }} />
                  <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#28C840", display: "block" }} />
                  <span
                    style={{
                      marginLeft: 10,
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 12,
                      color: "#6F6D69",
                    }}
                  >
                    assuredpixel.com/services/{service.slug}
                  </span>
                </div>

                {/* Service image */}
                <div style={{ height: 320, background: "#070B0E", overflow: "hidden" }}>
                  <img
                    src={service.image}
                    alt={service.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                </div>

                {/* Feature highlight list */}
                <div style={{ padding: "28px" }}>
                  <p
                    style={{
                      margin: "0 0 16px",
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 12,
                      color: "#6F6D69",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                    }}
                  >
                    What we guarantee
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    {[
                      "Direct founder execution with zero account managers",
                      "100% code, domain, and design asset ownership",
                      "Fast turnaround with weekly interactive preview links",
                      "Full transparency on scope, timeline, and pricing",
                    ].map((item, idx) => (
                      <div key={idx} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                        <span style={{ color: "#2CC3A5", fontFamily: "'JetBrains Mono', monospace" }}>✓</span>
                        <span style={{ fontSize: 14, color: "#C9D1D9", lineHeight: 1.5 }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetail;
