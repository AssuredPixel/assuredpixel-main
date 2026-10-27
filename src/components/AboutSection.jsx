import React from 'react';
import { Link } from 'react-router-dom';

const PRINCIPLES = [
  {
    num: '01',
    title: 'Quality Over Volume',
    body: 'We deliberately cap client intake to 2–3 active projects at a time. That means your build gets obsessive attention, daily momentum, and partner-level execution — not an overworked junior queue.',
    badge: 'Capped intake',
  },
  {
    num: '02',
    title: 'Design, Code & Cloud',
    body: 'Most agencies either make pretty mockups that take months to code, or write code without an eye for typography and brand. We do design, frontend engineering, and AWS cloud infrastructure under one roof.',
    badge: 'Under one roof',
  },
  {
    num: '03',
    title: '100% Client Ownership',
    body: 'No proprietary CMS locks, no hidden license fees. Once final delivery is made, you own every repository, design token, domain account, and cloud pipeline completely. Zero lock-in, ever.',
    badge: 'Zero lock-in',
  },
];

const METRICS = [
  { value: '5+', label: 'Live Projects Delivered', note: 'Across healthcare, clinical research, LMS, and marine' },
  { value: '2', label: 'Countries Served', note: 'Including clients in the United States and Nigeria' },
  { value: '100%', label: 'Care Plan Retention', note: 'Clients who launch with us stay with us for updates' },
  { value: '99.9%', label: 'Cloud Uptime Standard', note: 'Automated CI/CD pipelines & resilient AWS setups' },
];

export function AboutSection() {
  return (
    <div className="w-full text-[#F3F1EC]">
      {/* ── 1. Hero Section ── */}
      <section
        style={{
          maxWidth: 1360,
          margin: '0 auto',
          padding: '80px 40px 100px',
        }}
      >
        <p
          className="font-mono text-[14px] uppercase"
          style={{ margin: '0 0 20px', color: '#8E8C87', letterSpacing: '0.12em' }}
        >
          The Studio
        </p>

        <h1
          className="font-tight font-medium"
          style={{
            margin: '0 0 32px',
            fontSize: 'clamp(40px, 6vw, 84px)',
            lineHeight: 1.05,
            letterSpacing: '-0.035em',
            maxWidth: 1080,
          }}
        >
          A senior digital studio with zero bloat.{' '}
          <span style={{ color: '#6F6D69' }}>
            No account managers, no handoff friction, no excuses.
          </span>
        </h1>

        <div
          className="flex flex-wrap gap-12 justify-between items-start"
          style={{ marginTop: 40 }}
        >
          <p
            style={{
              margin: 0,
              maxWidth: 640,
              fontSize: 19,
              lineHeight: 1.65,
              color: '#BDBBB5',
            }}
          >
            AssuredPixel was created to solve the biggest frustration in hiring digital agencies: paying high fees to talk to middlemen while junior freelancers build your site. At AssuredPixel, you work directly with the founders who architect your design, write your code, and maintain your cloud.
          </p>

          <div
            className="flex flex-wrap gap-4"
            style={{ alignSelf: 'flex-start' }}
          >
            <a
              href="#contact"
              className="inline-flex items-center text-[15px] font-semibold no-underline"
              style={{
                minHeight: 50,
                padding: '0 26px',
                borderRadius: 999,
                background: '#F3F1EC',
                color: '#0C0C0B',
              }}
            >
              Book a discovery call
            </a>
            <Link
              to="/#work"
              className="inline-flex items-center text-[15px] no-underline"
              style={{
                minHeight: 50,
                padding: '0 24px',
                borderRadius: 999,
                border: '1px solid #3B3A37',
                color: '#F3F1EC',
              }}
            >
              See our work →
            </Link>
          </div>
        </div>
      </section>

      {/* ── 2. Studio Principles ── */}
      <section
        style={{
          borderTop: '1px solid #21201E',
          borderBottom: '1px solid #21201E',
        }}
      >
        <div
          style={{
            maxWidth: 1360,
            margin: '0 auto',
            padding: '110px 40px',
          }}
        >
          <p
            className="font-mono text-[14px] uppercase"
            style={{ margin: '0 0 20px', color: '#8E8C87', letterSpacing: '0.12em' }}
          >
            How We Operate
          </p>

          <h2
            className="font-tight font-medium"
            style={{
              margin: '0 0 64px',
              fontSize: 'clamp(34px, 4.4vw, 56px)',
              letterSpacing: '-0.03em',
              maxWidth: 800,
            }}
          >
            Three commitments we make to every client.
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 32,
            }}
          >
            {PRINCIPLES.map((p) => (
              <div
                key={p.num}
                className="ap-card flex flex-col justify-between"
                style={{
                  padding: 36,
                  borderRadius: 16,
                  border: '1px solid #21201E',
                  background: '#121211',
                }}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[13px]" style={{ color: '#8E8C87' }}>
                      {p.num}
                    </span>
                    <span
                      className="font-mono text-[11px] px-2.5 py-1 rounded-full"
                      style={{ background: '#0F2A24', color: '#2CC3A5' }}
                    >
                      {p.badge}
                    </span>
                  </div>

                  <h3
                    className="font-tight font-semibold text-[22px]"
                    style={{ margin: '20px 0 12px', color: '#F3F1EC' }}
                  >
                    {p.title}
                  </h3>

                  <p
                    style={{
                      margin: 0,
                      fontSize: 15,
                      lineHeight: 1.6,
                      color: '#A8A6A0',
                    }}
                  >
                    {p.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Leadership & Founders ── */}
      <section
        id="leadership"
        style={{
          maxWidth: 1360,
          margin: '0 auto',
          padding: '110px 40px',
        }}
      >
        <p
          className="font-mono text-[14px] uppercase"
          style={{ margin: '0 0 20px', color: '#8E8C87', letterSpacing: '0.12em' }}
        >
          Leadership
        </p>

        <h2
          className="font-tight font-medium"
          style={{
            margin: '0 0 64px',
            fontSize: 'clamp(34px, 4.4vw, 56px)',
            letterSpacing: '-0.03em',
          }}
        >
          The founders behind the work.
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: 28,
          }}
        >
          {/* Nsikak Ekpo */}
          <div
            className="ap-card flex flex-col justify-between"
            style={{
              padding: 40,
              borderRadius: 16,
              border: '1px solid #21201E',
              background: '#121211',
              gap: 32,
            }}
          >
            <div>
              <div className="flex items-center gap-4">
                <div
                  className="font-mono font-semibold text-[17px] flex items-center justify-center shrink-0"
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: '50%',
                    background: '#1B1B19',
                    border: '1px solid #2B2A27',
                    color: '#2CC3A5',
                  }}
                >
                  NE
                </div>
                <div>
                  <h3
                    className="font-tight font-semibold text-[22px]"
                    style={{ margin: 0, color: '#F3F1EC' }}
                  >
                    Nsikak Ekpo
                  </h3>
                  <div
                    className="font-mono text-[13px]"
                    style={{ color: '#2CC3A5', marginTop: 4 }}
                  >
                    Founder &amp; CEO
                  </div>
                </div>
              </div>

              <p
                style={{
                  margin: '24px 0 0',
                  fontSize: 16,
                  lineHeight: 1.65,
                  color: '#A8A6A0',
                }}
              >
                Nsikak drives product strategy, high-converting digital architecture, and client partnerships. With a background spanning commercial design, brand positioning, and digital growth, he ensures every project directly advances the client's business metrics.
              </p>
            </div>

            <div
              className="pt-6 border-t border-[#21201E] flex flex-wrap gap-2 font-mono text-[12px]"
              style={{ color: '#8E8C87' }}
            >
              <span className="px-3 py-1 rounded bg-[#1B1B19] border border-[#262523]">
                Product Strategy
              </span>
              <span className="px-3 py-1 rounded bg-[#1B1B19] border border-[#262523]">
                Brand Architecture
              </span>
              <span className="px-3 py-1 rounded bg-[#1B1B19] border border-[#262523]">
                Conversion UX
              </span>
            </div>
          </div>

          {/* Chiebuka Lawrence */}
          <div
            className="ap-card flex flex-col justify-between"
            style={{
              padding: 40,
              borderRadius: 16,
              border: '1px solid #21201E',
              background: '#121211',
              gap: 32,
            }}
          >
            <div>
              <div className="flex items-center gap-4">
                <div
                  className="font-mono font-semibold text-[17px] flex items-center justify-center shrink-0"
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: '50%',
                    background: '#1B1B19',
                    border: '1px solid #2B2A27',
                    color: '#2CC3A5',
                  }}
                >
                  CL
                </div>
                <div>
                  <h3
                    className="font-tight font-semibold text-[22px]"
                    style={{ margin: 0, color: '#F3F1EC' }}
                  >
                    Chiebuka Lawrence
                  </h3>
                  <div
                    className="font-mono text-[13px]"
                    style={{ color: '#2CC3A5', marginTop: 4 }}
                  >
                    Co-Founder
                  </div>
                </div>
              </div>

              <p
                style={{
                  margin: '24px 0 0',
                  fontSize: 16,
                  lineHeight: 1.65,
                  color: '#A8A6A0',
                }}
              >
                Chiebuka oversees full-stack engineering, systems architecture, and automated cloud infrastructure. He specializes in designing clean codebases, multi-tenant SaaS environments, automated deployment pipelines, and HIPAA-compliant AWS architectures.
              </p>
            </div>

            <div
              className="pt-6 border-t border-[#21201E] flex flex-wrap gap-2 font-mono text-[12px]"
              style={{ color: '#8E8C87' }}
            >
              <span className="px-3 py-1 rounded bg-[#1B1B19] border border-[#262523]">
                Full-Stack Systems
              </span>
              <span className="px-3 py-1 rounded bg-[#1B1B19] border border-[#262523]">
                AWS &amp; DevOps
              </span>
              <span className="px-3 py-1 rounded bg-[#1B1B19] border border-[#262523]">
                Infrastructure as Code
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Proven Track Record (Metrics Grid) ── */}
      <section
        style={{
          borderTop: '1px solid #21201E',
          background: '#0E0E0D',
        }}
      >
        <div
          style={{
            maxWidth: 1360,
            margin: '0 auto',
            padding: '110px 40px',
          }}
        >
          <p
            className="font-mono text-[14px] uppercase"
            style={{ margin: '0 0 20px', color: '#8E8C87', letterSpacing: '0.12em' }}
          >
            Track Record
          </p>

          <h2
            className="font-tight font-medium"
            style={{
              margin: '0 0 64px',
              fontSize: 'clamp(34px, 4.4vw, 56px)',
              letterSpacing: '-0.03em',
            }}
          >
            Measured in results, not agency slide decks.
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: 32,
            }}
          >
            {METRICS.map((m, i) => (
              <div
                key={i}
                style={{
                  borderTop: '2px solid #2CC3A5',
                  paddingTop: 24,
                }}
              >
                <div
                  className="font-tight font-semibold"
                  style={{
                    fontSize: 'clamp(48px, 5.5vw, 76px)',
                    lineHeight: 1,
                    letterSpacing: '-0.04em',
                    color: '#2CC3A5',
                  }}
                >
                  {m.value}
                </div>
                <div
                  className="font-tight font-semibold text-[18px]"
                  style={{ margin: '14px 0 6px', color: '#F3F1EC' }}
                >
                  {m.label}
                </div>
                <p style={{ margin: 0, fontSize: 14, lineHeight: 1.5, color: '#8E8C87' }}>
                  {m.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Closing Call to Action ── */}
      <section
        style={{
          borderTop: '1px solid #21201E',
          textAlign: 'center',
          padding: '130px 40px',
        }}
      >
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <h2
            className="font-tight font-medium"
            style={{
              margin: '0 auto 24px',
              fontSize: 'clamp(36px, 5vw, 68px)',
              lineHeight: 1.08,
              letterSpacing: '-0.035em',
            }}
          >
            Ready to work directly with the people building your product?
          </h2>
          <p
            style={{
              margin: '0 auto 36px',
              maxWidth: 540,
              fontSize: 18,
              lineHeight: 1.6,
              color: '#A8A6A0',
            }}
          >
            Book a 30-minute discovery call. We'll listen to what you're building, see if we're a match, and outline next steps in plain English.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center text-[16px] font-semibold no-underline transition-transform hover:scale-[1.03]"
            style={{
              minHeight: 54,
              padding: '0 32px',
              borderRadius: 999,
              background: '#F3F1EC',
              color: '#0C0C0B',
            }}
          >
            Let's work together
          </a>
        </div>
      </section>
    </div>
  );
}

export default AboutSection;
