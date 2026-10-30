import React from "react";

const CASES = [
  {
    domain: "rekrutklin.com",
    imgSrc: "/images/clients/7a898ada-5080-4088-902d-dafbc620823a.jpg",
    imgAlt: "RekrutKlin retention health dashboard",
    imgBg: "#FFFFFF",
    scrollable: false,
    client: "RekrutKlin · USA",
    title: "A clinical trial platform, built secure from day one.",
    body: "RekrutKlin needed one platform for many research sites, with each site's patient data kept apart. We worked with them from idea to build, covering the product, a multi-tenant setup and the AWS infrastructure that keeps it HIPAA compliant.",
    previewUrl: "https://rekrutklin.com/",
    reverse: false,
  },
  {
    domain: "farasha-project.vercel.app",
    imgSrc: "/images/clients/a54b3b20-05a8-4386-bb1b-33bbd0bb54f8.jpg",
    imgAlt: "Full FarashaCRP homepage",
    imgBg: "#F5F2EC",
    scrollable: true,
    client: "FarashaCRP · USA",
    title: "One site for sponsors, research sites and talent.",
    body: "Farasha Clinical Research Partners works with three very different audiences: sponsors and CROs, research sites, and clinical professionals looking for their next role. We designed and built a site that gives each group a clear path in, with a calm, boutique feel that matches how Farasha works.",
    previewUrl: "https://farasha-project.vercel.app/",
    reverse: true,
  },
  {
    domain: "staging.primesiteacademy.com",
    imgSrc: "/images/clients/c8abcbf6-f3b1-4b44-b86a-f21a1c9b4fcf.jpg",
    imgAlt: "Prime Site Academy homepage",
    imgBg: "#FFFFFF",
    scrollable: false,
    client: "Prime Site Academy · USA",
    title: "Courses, students and progress, all in one place.",
    body: "Prime Site Academy sells self-paced clinical research courses written by a PI who runs real trials. We built the whole platform: the public site, sign-up with a free trial, a student portal with video lessons, quizzes and certificates, plus admin and staff dashboards to run it all.",
    previewUrl: "https://staging.primesiteacademy.com/",
    reverse: false,
  },
  {
    domain: "seasteelsmarine.com",
    imgSrc: "/images/clients/fc230bdd-dadd-423b-a37a-1cd63e73c67b.jpg",
    imgAlt: "Seasteel Marine vessel services homepage",
    imgBg: "#0D1117",
    scrollable: false,
    client: "Seasteel Marine · Nigeria",
    title: "Offshore vessel operations & marine logistics.",
    body: "Seasteel Marine required a modern, professional web presence showcasing offshore logistics, vessel maintenance, and marine chartering. We delivered a clean, high-performance website tailored for international energy partners and industrial vessel clients.",
    previewUrl: "https://www.seasteelsmarine.com/",
    reverse: true,
  },
  {
    domain: "ada-limited.vercel.app",
    imgSrc: "https://ada-limited.vercel.app/images/photo-2.jpg",
    imgAlt: "Adar Limited preview",
    imgBg: "#151514",
    scrollable: false,
    client: "Adar Limited · UK & Global",
    title: "Clean corporate identity & modern web architecture.",
    body: "Adar Limited needed a streamlined, high-trust digital storefront reflecting their modern services and institutional standards. We architected and deployed a fast, responsive digital platform on Vercel.",
    previewUrl: "https://ada-limited.vercel.app/",
    reverse: false,
  },
];

function BrowserDots() {
  return (
    <div className="flex items-center gap-1.5">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: "#3B3A37",
            display: "block",
          }}
        />
      ))}
    </div>
  );
}

export function CaseStudiesSection() {
  return (
    <section id="case-studies" style={{ borderTop: "1px solid #21201E" }}>
      <div
        style={{
          maxWidth: 1360,
          margin: "0 auto",
          padding: "120px 40px",
        }}
      >
        {/* section label */}
        <p
          className="font-mono text-[14px] uppercase"
          style={{
            margin: "0 0 20px",
            color: "#8E8C87",
            letterSpacing: "0.12em",
          }}
        >
          Case studies
        </p>

        {/* headline */}
        <h2
          className="font-tight font-medium"
          style={{
            margin: "0 0 72px",
            fontSize: "clamp(36px, 4.6vw, 64px)",
            lineHeight: 1.08,
            letterSpacing: "-0.03em",
            maxWidth: 900,
          }}
        >
          Real problems. <span style={{ color: "#6F6D69" }}>Real builds.</span>{" "}
          Real results.
        </h2>

        {/* case items stack */}
        <div style={{ display: "flex", flexDirection: "column", gap: 96 }}>
          {CASES.map((item) => (
            <div
              key={item.client}
              className={`flex flex-wrap items-center gap-12 ${
                item.reverse ? "flex-row-reverse" : ""
              }`}
            >
              {/* mockup preview column (clickable to live preview in new tab) */}
              <a
                href={item.previewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl overflow-hidden block no-underline"
                style={{
                  flex: "1 1 480px",
                  minWidth: 0,
                  border: "1px solid #272624",
                  background: "#121211",
                  transition:
                    "border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#3B3A37";
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow =
                    "0 16px 40px rgba(0,0,0,0.45)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#272624";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* browser chrome */}
                <div
                  className="flex items-center gap-1.5 px-3 py-2.5"
                  style={{ borderBottom: "1px solid #21201E" }}
                >
                  <BrowserDots />
                  <span
                    className="ml-2 px-2.5 py-1 rounded-md font-mono text-[11px]"
                    style={{ background: "#1B1B19", color: "#8E8C87" }}
                  >
                    {item.domain} ↗
                  </span>
                  {item.scrollable ? (
                    <span
                      className="ml-auto font-mono text-[11px]"
                      style={{ color: "#8E8C87" }}
                    >
                      hover to scroll
                    </span>
                  ) : (
                    <span
                      className="ml-auto font-mono text-[11px]"
                      style={{ color: "#2CC3A5" }}
                    >
                      live preview ↗
                    </span>
                  )}
                </div>

                {/* image body */}
                {item.imgSrc ? (
                  item.scrollable ? (
                    <div
                      className="ap-scroll"
                      style={{
                        height: 440,
                        overflow: "hidden",
                        background: item.imgBg,
                      }}
                    >
                      <img
                        src={item.imgSrc}
                        alt={item.imgAlt}
                        className="block w-full h-auto"
                      />
                    </div>
                  ) : (
                    <div
                      style={{
                        height: "clamp(240px, 26vw, 400px)",
                        overflow: "hidden",
                        background: item.imgBg,
                      }}
                    >
                      <img
                        src={item.imgSrc}
                        alt={item.imgAlt}
                        className="block w-full h-full object-cover object-top"
                      />
                    </div>
                  )
                ) : (
                  <div
                    style={{
                      height: "clamp(240px, 26vw, 400px)",
                      background: "#151514",
                      padding: 24,
                      boxSizing: "border-box",
                      display: "flex",
                      flexDirection: "column",
                      gap: 16,
                      justifyContent: "center",
                    }}
                  >
                    <span
                      className="block h-4 rounded"
                      style={{ width: "55%", background: "#3B3A37" }}
                    />
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        ["#2CC3A5", "85%", "60%"],
                        ["#3B3A37", "70%", "50%"],
                        ["#F5A524", "75%", "55%"],
                      ].map(([accent, w1, w2], i) => (
                        <div
                          key={i}
                          className="rounded-lg flex flex-col gap-2 p-3"
                          style={{
                            background: "#1B1B19",
                            border: "1px solid #262523",
                          }}
                        >
                          <span
                            className="rounded"
                            style={{
                              width: 20,
                              height: 20,
                              background: accent,
                              display: "block",
                            }}
                          />
                          <span
                            className="block h-2 rounded"
                            style={{ width: w1, background: "#2B2A27" }}
                          />
                          <span
                            className="block h-2 rounded"
                            style={{ width: w2, background: "#2B2A27" }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </a>

              {/* info text column */}
              <div style={{ flex: "1 1 400px", minWidth: 0 }}>
                <div
                  className="font-mono text-[13px]"
                  style={{ color: "#2CC3A5" }}
                >
                  {item.client}
                </div>
                <h3
                  className="font-tight font-semibold"
                  style={{
                    margin: "14px 0 16px",
                    fontSize: "clamp(28px, 2.8vw, 40px)",
                    lineHeight: 1.15,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-[17px] leading-[1.65]"
                  style={{ margin: 0, color: "#A8A6A0" }}
                >
                  {item.body}
                </p>
                <a
                  href={item.previewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[15px] underline-offset-[5px] underline hover:text-[#2CC3A5] transition-colors"
                  style={{ marginTop: 22, color: "#F3F1EC" }}
                >
                  Visit live preview ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CaseStudiesSection;
