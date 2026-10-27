import React, { useState, useEffect, useRef } from "react";
import { toast } from "sonner";
import { trackLeadSubmission, trackContactMethod } from "../lib/analytics";

/* ── EmailJS config ─────────────────────────────────────────── */
const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  || "service_pgdttgj";
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_1kclwha";
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  || "6sC60wquFbDoBmEAr";

const CONTACT_INFO = [
  { label: "Email",          value: "admin@assuredpixel.com",          href: "mailto:admin@assuredpixel.com", type: "email" },
  { label: "Phone",          value: "+234 903 097 7669",               href: "tel:+2349030977669",            type: "phone" },
  { label: "Location",       value: "Remote studio — global clients",  href: null,                            type: null   },
  { label: "Hours",          value: "Mon–Fri, 9 AM–6 PM WAT (UTC+1)", href: null,                            type: null   },
];

const NEXT_STEPS = [
  { n: "01", title: "We review your request",   body: "Every submission is read carefully. You'll hear back within 24 hours." },
  { n: "02", title: "Discovery call",           body: "A short call to understand your goals, timeline and budget." },
  { n: "03", title: "Proposal & kickoff",       body: "Clear scope and price in writing. Once approved, we start immediately." },
];

const SERVICES = [
  "Website Design & Development",
  "Brand Identity Design",
  "SEO & Search Visibility",
  "Paid Advertising (Google & Meta)",
  "Content & Copywriting",
  "Digital Strategy & Consulting",
  "Cloud Migration",
  "Cloud Security",
];

const EMPTY_FORM = {
  name: "", email: "", company: "", phone: "",
  message: "", service: SERVICES[0], website_hp: "",
};

function validate(data) {
  if (data.website_hp?.trim()) return "Bot submission detected.";
  if (!data.name.trim())       return "Please enter your full name.";
  if (!data.email.trim())      return "Please enter your email address.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) return "Please enter a valid email address.";
  if (!data.company.trim())    return "Please enter your company name.";
  return null;
}

/* ── Shared input style ─────────────────────────────────────── */
const INPUT_STYLE = {
  width: "100%",
  padding: "13px 16px",
  background: "#0F1419",
  border: "1px solid #1E262D",
  borderRadius: 8,
  color: "#E6EDF3",
  fontFamily: "'Inter', system-ui, sans-serif",
  fontSize: 15,
  outline: "none",
  boxSizing: "border-box",
  transition: "border-color 0.2s",
};

function Field({ label, required, children }) {
  return (
    <div>
      <label
        style={{
          display: "block",
          marginBottom: 8,
          fontSize: 13,
          fontWeight: 500,
          color: "#8B98A5",
          fontFamily: "'JetBrains Mono', monospace",
          letterSpacing: "0.06em",
        }}
      >
        {label}{required && <span style={{ color: "#F5A524", marginLeft: 4 }}>*</span>}
      </label>
      {children}
    </div>
  );
}

export const ContactSection = () => {
  const [formData, setFormData]     = useState(EMPTY_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted]   = useState(false);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible]   = useState(false);

  /* Load EmailJS once */
  useEffect(() => {
    if (document.getElementById("emailjs-sdk")) return;
    const s = document.createElement("script");
    s.id = "emailjs-sdk";
    s.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
    s.async = true;
    s.onload = () => window.emailjs?.init({ publicKey: EMAILJS_PUBLIC_KEY });
    document.head.appendChild(s);
  }, []);

  /* Scroll-in animation */
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setIsVisible(true); obs.disconnect(); } },
      { threshold: 0.06 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const focusStyle = (e) => (e.currentTarget.style.borderColor = "#F5A524");
  const blurStyle  = (e) => (e.currentTarget.style.borderColor = "#1E262D");

  /* ── Send helpers ── */
  const sendEmailJS = async (params) => {
    const timeout = new Promise((_, rej) => setTimeout(() => rej(new Error("timeout")), 4000));
    const send = window.emailjs
      ? window.emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, params, EMAILJS_PUBLIC_KEY)
      : fetch("https://api.emailjs.com/api/v1.0/email/send", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ service_id: EMAILJS_SERVICE_ID, template_id: EMAILJS_TEMPLATE_ID, user_id: EMAILJS_PUBLIC_KEY, template_params: params }),
        }).then((r) => { if (!r.ok) throw new Error("EmailJS API failed"); return r; });
    return Promise.race([send, timeout]);
  };

  const sendFormSubmit = () =>
    fetch("https://formsubmit.co/ajax/admin@assuredpixel.com", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        name: formData.name, email: formData.email, company: formData.company,
        phone: formData.phone || "Not provided", service: formData.service,
        message: formData.message || "No message provided",
        _subject: `New Inquiry from ${formData.name} (${formData.company})`,
      }),
    }).then((r) => { if (!r.ok) throw new Error("FormSubmit failed"); return r; });

  const handleSubmit = async (e) => {
    e?.preventDefault();
    if (formData.website_hp?.trim()) { setFormData(EMPTY_FORM); return; }
    const err = validate(formData);
    if (err) { toast.error(err); return; }

    setIsSubmitting(true);
    const params = {
      from_name: formData.name, from_email: formData.email,
      company: formData.company, phone: formData.phone || "Not provided",
      service: formData.service, message: formData.message || "No message provided",
    };

    let ok = false;
    try { await sendEmailJS(params); ok = true; }
    catch { try { await sendFormSubmit(); ok = true; } catch { /* both failed */ } }

    if (ok) {
      trackLeadSubmission(formData.service);
      setSubmitted(true);
      setFormData(EMPTY_FORM);
      toast.success("Message sent! We'll reply within 24 hours.", { duration: 6000 });
    } else {
      toast.error("Something went wrong. Email us directly at admin@assuredpixel.com");
    }
    setIsSubmitting(false);
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      style={{
        background: "#0C0C0B",
        borderTop: "1px solid #21201E",
        color: "#F3F1EC",
        fontFamily: "'Inter', system-ui, sans-serif",
      }}
    >
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "110px 32px" }}>

        {/* ── Header ── */}
        <div
          style={{
            marginBottom: 72,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <p
            style={{
              margin: "0 0 18px",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 13,
              letterSpacing: "0.28em",
              color: "#F5A524",
            }}
          >
            // GET IN TOUCH
          </p>
          <h1
            className="font-tight font-semibold"
            style={{
              margin: "0 0 20px",
              fontSize: "clamp(36px, 5vw, 72px)",
              lineHeight: 1.04,
              letterSpacing: "-0.035em",
              maxWidth: 820,
            }}
          >
            Tell us what you're building.
          </h1>
          <p style={{ margin: 0, fontSize: 18, lineHeight: 1.65, color: "#A8A6A0", maxWidth: 560 }}>
            We read every message and reply within 24 hours with a clear, honest answer — not a sales pitch.
          </p>
        </div>

        {/* ── Two-column grid ── */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 64,
            alignItems: "flex-start",
          }}
        >
          {/* LEFT — Form */}
          <div
            style={{
              flex: "2 1 520px",
              minWidth: 0,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(28px)",
              transition: "opacity 0.65s ease 0.1s, transform 0.65s ease 0.1s",
            }}
          >
            {submitted ? (
              /* ── Success state ── */
              <div
                style={{
                  padding: "64px 40px",
                  border: "1px solid #1E3A2E",
                  borderRadius: 16,
                  background: "#070E09",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: 56, height: 56, borderRadius: "50%",
                    background: "#0A2018", border: "1px solid #3DDC97",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    margin: "0 auto 24px",
                    fontSize: 24, color: "#3DDC97",
                  }}
                >
                  ✓
                </div>
                <h3
                  className="font-tight font-semibold"
                  style={{ margin: "0 0 12px", fontSize: 26, color: "#F3F1EC" }}
                >
                  Message received.
                </h3>
                <p style={{ margin: "0 0 32px", fontSize: 16, color: "#A8A6A0", lineHeight: 1.65 }}>
                  We'll review your project and get back to you within 24 hours with a clear, honest response.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  style={{
                    padding: "12px 28px",
                    border: "1px solid #2E2D2B",
                    borderRadius: 8,
                    background: "none",
                    color: "#A8A6A0",
                    fontSize: 14,
                    cursor: "pointer",
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              /* ── Contact form ── */
              <form
                onSubmit={handleSubmit}
                noValidate
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 24,
                  padding: "40px",
                  border: "1px solid #1E262D",
                  borderRadius: 16,
                  background: "#070B0E",
                }}
              >
                {/* Honeypot — invisible to real users */}
                <div aria-hidden="true" style={{ opacity: 0, position: "absolute", top: 0, left: 0, height: 0, width: 0, zIndex: -1, overflow: "hidden" }}>
                  <label htmlFor="website_hp">Do not fill this field</label>
                  <input type="text" id="website_hp" name="website_hp" tabIndex={-1} autoComplete="off" value={formData.website_hp} onChange={handleChange} />
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20 }}>
                  <Field label="Full Name" required>
                    <input
                      type="text" id="name" name="name" required
                      value={formData.name} onChange={handleChange}
                      onFocus={focusStyle} onBlur={blurStyle}
                      placeholder="Jane Smith"
                      style={INPUT_STYLE}
                    />
                  </Field>
                  <Field label="Email Address" required>
                    <input
                      type="email" id="email" name="email" required
                      value={formData.email} onChange={handleChange}
                      onFocus={focusStyle} onBlur={blurStyle}
                      placeholder="jane@company.com"
                      style={INPUT_STYLE}
                    />
                  </Field>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20 }}>
                  <Field label="Company Name" required>
                    <input
                      type="text" id="company" name="company" required
                      value={formData.company} onChange={handleChange}
                      onFocus={focusStyle} onBlur={blurStyle}
                      placeholder="Your Company LLC"
                      style={INPUT_STYLE}
                    />
                  </Field>
                  <Field label="Phone Number">
                    <input
                      type="tel" id="phone" name="phone"
                      value={formData.phone} onChange={handleChange}
                      onFocus={focusStyle} onBlur={blurStyle}
                      placeholder="+1 555 123 4567"
                      style={INPUT_STYLE}
                    />
                  </Field>
                </div>

                <Field label="Primary Interest" required>
                  <select
                    id="service" name="service"
                    value={formData.service} onChange={handleChange}
                    onFocus={focusStyle} onBlur={blurStyle}
                    style={{ ...INPUT_STYLE, appearance: "none", cursor: "pointer" }}
                  >
                    {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </Field>

                <Field label="Tell us about your goals">
                  <textarea
                    id="message" name="message" rows={5}
                    value={formData.message} onChange={handleChange}
                    onFocus={focusStyle} onBlur={blurStyle}
                    placeholder="What are you building, what's breaking, what do you need?"
                    style={{ ...INPUT_STYLE, resize: "vertical", lineHeight: 1.65 }}
                  />
                </Field>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 10,
                    width: "100%",
                    minHeight: 54,
                    borderRadius: 8,
                    border: "none",
                    background: isSubmitting ? "#2A1F00" : "#F5A524",
                    color: isSubmitting ? "#A8A6A0" : "#1A1100",
                    fontWeight: 700,
                    fontSize: 15,
                    cursor: isSubmitting ? "wait" : "pointer",
                    fontFamily: "'JetBrains Mono', monospace",
                    letterSpacing: "0.04em",
                    transition: "background 0.2s, transform 0.15s",
                    opacity: isSubmitting ? 0.7 : 1,
                  }}
                  onMouseEnter={(e) => { if (!isSubmitting) e.currentTarget.style.transform = "scale(1.01)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
                >
                  {isSubmitting ? (
                    <>
                      <span
                        style={{
                          width: 16, height: 16,
                          border: "2px solid #4A4845",
                          borderTopColor: "#F5A524",
                          borderRadius: "50%",
                          animation: "ap-ct-spin 0.7s linear infinite",
                          display: "inline-block",
                          flexShrink: 0,
                        }}
                      />
                      Sending…
                      <style>{`@keyframes ap-ct-spin { to { transform: rotate(360deg); } }`}</style>
                    </>
                  ) : (
                    "Send Message →"
                  )}
                </button>

                <p style={{ margin: 0, fontSize: 13, color: "#4A4845", textAlign: "center", fontFamily: "'JetBrains Mono', monospace" }}>
                  We respond within 24 hours · your data is never shared
                </p>
              </form>
            )}
          </div>

          {/* RIGHT — Contact info + What happens next */}
          <div
            style={{
              flex: "1 1 280px",
              minWidth: 0,
              display: "flex",
              flexDirection: "column",
              gap: 40,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(28px)",
              transition: "opacity 0.65s ease 0.25s, transform 0.65s ease 0.25s",
            }}
          >
            {/* Contact details */}
            <div>
              <p
                style={{
                  margin: "0 0 20px",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 12,
                  letterSpacing: "0.2em",
                  color: "#4A4845",
                  textTransform: "uppercase",
                }}
              >
                Direct contact
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {CONTACT_INFO.map((item) => (
                  <div
                    key={item.label}
                    onClick={() => item.type && trackContactMethod(item.type, item.value)}
                    style={{ display: "flex", flexDirection: "column", gap: 3, cursor: item.href ? "pointer" : "default" }}
                  >
                    <span style={{ fontSize: 12, color: "#4A4845", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.1em" }}>
                      {item.label}
                    </span>
                    {item.href ? (
                      <a
                        href={item.href}
                        style={{ fontSize: 15, color: "#F3F1EC", textDecoration: "none", transition: "color 0.2s" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "#F5A524")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "#F3F1EC")}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span style={{ fontSize: 15, color: "#A8A6A0" }}>{item.value}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div style={{ height: "1px", background: "#21201E" }} />

            {/* What happens next */}
            <div>
              <p
                style={{
                  margin: "0 0 24px",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 12,
                  letterSpacing: "0.2em",
                  color: "#4A4845",
                  textTransform: "uppercase",
                }}
              >
                What happens next
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {NEXT_STEPS.map(({ n, title, body }) => (
                  <div key={n} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                    <span
                      style={{
                        flexShrink: 0,
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 13,
                        color: "#F5A524",
                        marginTop: 2,
                        minWidth: 28,
                      }}
                    >
                      {n}
                    </span>
                    <div>
                      <p style={{ margin: "0 0 4px", fontWeight: 600, fontSize: 15, color: "#F3F1EC" }}>{title}</p>
                      <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: "#6B6964" }}>{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Book a call nudge */}
            <div style={{ padding: "20px 24px", border: "1px solid #1E262D", borderRadius: 12, background: "#070B0E" }}>
              <p style={{ margin: "0 0 6px", fontSize: 14, fontWeight: 600, color: "#F3F1EC" }}>Prefer to talk first?</p>
              <p style={{ margin: "0 0 14px", fontSize: 13, color: "#6B6964", lineHeight: 1.55 }}>
                Book a free 30-minute discovery call — no pitch, just an honest conversation.
              </p>
              <a
                href="/#book-call"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "10px 18px",
                  borderRadius: 7,
                  border: "1px solid #2E2D2B",
                  color: "#F3F1EC",
                  fontSize: 13,
                  textDecoration: "none",
                  fontFamily: "'JetBrains Mono', monospace",
                  transition: "border-color 0.2s, color 0.2s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#F5A524"; e.currentTarget.style.color = "#F5A524"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#2E2D2B"; e.currentTarget.style.color = "#F3F1EC"; }}
              >
                Book a call →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
