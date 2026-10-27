import React from 'react';

const CASES = [
  {
    domain: 'rekrutklin.com · retention health',
    imgSrc: '/images/clients/7a898ada-5080-4088-902d-dafbc620823a.jpg',
    imgAlt: 'RekrutKlin retention health dashboard',
    imgBg: '#FFFFFF',
    scrollable: false,
    client: 'RekrutKlin · USA',
    title: 'A clinical trial platform, built secure from day one.',
    body: "RekrutKlin needed one platform for many research sites, with each site's patient data kept apart. We worked with them from idea to build, covering the product, a multi-tenant setup and the AWS infrastructure that keeps it HIPAA compliant.",
    href: '/case-studies',
    reverse: false,
  },
  {
    domain: 'farashacrp.com',
    imgSrc: '/images/clients/a54b3b20-05a8-4386-bb1b-33bbd0bb54f8.jpg',
    imgAlt: 'Full FarashaCRP homepage',
    imgBg: '#F5F2EC',
    scrollable: true,
    client: 'FarashaCRP · USA',
    title: 'One site for sponsors, research sites and talent.',
    body: 'Farasha Clinical Research Partners works with three very different audiences: sponsors and CROs, research sites, and clinical professionals looking for their next role. We designed and built a site that gives each group a clear path in, with a calm, boutique feel that matches how Farasha works.',
    href: '/case-studies',
    reverse: true,
  },
  {
    domain: 'primesiteacademy.com',
    imgSrc: '/images/clients/c8abcbf6-f3b1-4b44-b86a-f21a1c9b4fcf.jpg',
    imgAlt: 'Prime Site Academy homepage',
    imgBg: '#FFFFFF',
    scrollable: false,
    client: 'Prime Site Academy · USA',
    title: 'Courses, students and progress, all in one place.',
    body: 'Prime Site Academy sells self-paced clinical research courses written by a PI who runs real trials. We built the whole platform: the public site, sign-up with a free trial, a student portal with video lessons, quizzes and certificates, plus admin and staff dashboards to run it all.',
    href: '/case-studies',
    reverse: false,
  },
];

function BrowserDots() {
  return (
    <div className="flex items-center gap-1.5">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          style={{ width: 8, height: 8, borderRadius: '50%', background: '#3B3A37', display: 'block' }}
        />
      ))}
    </div>
  );
}

export function CaseStudiesSection() {
  return (
    <section
      id="case-studies"
      style={{ borderTop: '1px solid #21201E' }}
    >
      <div
        style={{
          maxWidth: 1360,
          margin: '0 auto',
          padding: '120px 40px',
        }}
      >
        {/* section label */}
        <p
          className="font-mono text-[14px] uppercase"
          style={{ margin: '0 0 20px', color: '#8E8C87', letterSpacing: '0.12em' }}
        >
          06 · Case studies
        </p>

        {/* headline */}
        <h2
          className="font-tight font-medium"
          style={{
            margin: '0 0 72px',
            fontSize: 'clamp(36px, 4.6vw, 64px)',
            lineHeight: 1.08,
            letterSpacing: '-0.03em',
            maxWidth: 900,
          }}
        >
          Real problems. <span style={{ color: '#6F6D69' }}>Real builds.</span> Real results.
        </h2>

        {/* case items stack */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 96 }}>
          {CASES.map((item) => (
            <div
              key={item.client}
              className={`flex flex-wrap items-center gap-12 ${
                item.reverse ? 'flex-row-reverse' : ''
              }`}
            >
              {/* mockup preview column */}
              <div
                className="rounded-xl overflow-hidden"
                style={{
                  flex: '1 1 480px',
                  minWidth: 0,
                  border: '1px solid #272624',
                  background: '#121211',
                }}
              >
                {/* browser chrome */}
                <div
                  className="flex items-center gap-1.5 px-3 py-2.5"
                  style={{ borderBottom: '1px solid #21201E' }}
                >
                  <BrowserDots />
                  <span
                    className="ml-2 px-2.5 py-1 rounded-md font-mono text-[11px]"
                    style={{ background: '#1B1B19', color: '#8E8C87' }}
                  >
                    {item.domain}
                  </span>
                  {item.scrollable && (
                    <span
                      className="ml-auto font-mono text-[11px]"
                      style={{ color: '#8E8C87' }}
                    >
                      hover to scroll
                    </span>
                  )}
                </div>

                {/* image body */}
                {item.scrollable ? (
                  <div
                    className="ap-scroll"
                    style={{
                      height: 440,
                      overflow: 'hidden',
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
                      height: 'clamp(240px, 26vw, 400px)',
                      overflow: 'hidden',
                      background: item.imgBg,
                    }}
                  >
                    <img
                      src={item.imgSrc}
                      alt={item.imgAlt}
                      className="block w-full h-full object-cover object-top"
                    />
                  </div>
                )}
              </div>

              {/* info text column */}
              <div style={{ flex: '1 1 400px', minWidth: 0 }}>
                <div
                  className="font-mono text-[13px]"
                  style={{ color: '#2CC3A5' }}
                >
                  {item.client}
                </div>
                <h3
                  className="font-tight font-semibold"
                  style={{
                    margin: '14px 0 16px',
                    fontSize: 'clamp(28px, 2.8vw, 40px)',
                    lineHeight: 1.15,
                    letterSpacing: '-0.02em',
                  }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-[17px] leading-[1.65]"
                  style={{ margin: 0, color: '#A8A6A0' }}
                >
                  {item.body}
                </p>
                <a
                  href={item.href}
                  className="inline-block text-[15px] underline-offset-[5px] underline hover:text-[#2CC3A5] transition-colors"
                  style={{ marginTop: 22, color: '#F3F1EC' }}
                >
                  Read the case study →
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
