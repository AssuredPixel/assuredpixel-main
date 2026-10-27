import React from 'react';

/* ─── image map ──────────────────────────────────────────────── */
const IMGS = {
  rekrutklin:  '/images/clients/5e2975f1-8b61-439b-8414-cb25c12a1000.jpg',
  farashacrp:  '/images/clients/72f83173-c9a7-46d6-91b8-80a77063edf1.jpg',
  primeSite:   '/images/clients/f37c896b-b88a-4144-a784-2aee8ac44319.jpg',
  seasteel:    '/images/clients/fc230bdd-dadd-423b-a37a-1cd63e73c67b.jpg',
};

/* ─── shared atoms ───────────────────────────────────────────── */
function BrowserDots({ size = 9 }) {
  return (
    <div className="flex items-center gap-1.5">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          style={{ width: size, height: size, borderRadius: '50%', background: '#3B3A37', display: 'block' }}
        />
      ))}
    </div>
  );
}

function LiveBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 text-[13px]" style={{ color: '#2CC3A5' }}>
      <span
        style={{ width: 7, height: 7, borderRadius: '50%', background: '#2CC3A5', display: 'block' }}
      />
      Live
    </span>
  );
}

function Arrow() {
  return (
    <span
      className="ap-arrow inline-block text-[18px]"
      aria-hidden="true"
      style={{ color: '#8E8C87' }}
    >
      ↗
    </span>
  );
}

/* ─── Hero feature card: RekrutKlin ─────────────────────────── */
function HeroCard() {
  return (
    <a
      href="#case-studies"
      className="ap-card flex flex-col rounded-2xl overflow-hidden no-underline"
      style={{
        flex: '2 1 560px',
        minWidth: 0,
        border: '1px solid #21201E',
        background: '#121211',
        color: '#F3F1EC',
        textDecoration: 'none',
      }}
    >
      {/* browser chrome */}
      <div
        className="flex items-center gap-2 px-3.5 py-3"
        style={{ borderBottom: '1px solid #21201E' }}
      >
        <BrowserDots size={9} />
        <span
          className="ml-2.5 px-3 py-1 rounded-md font-mono text-[12px]"
          style={{ background: '#1B1B19', color: '#8E8C87' }}
        >
          rekrutklin.com
        </span>
      </div>

      {/* screenshot */}
      <div className="relative overflow-hidden" style={{ height: 340, background: '#F5F9FC' }}>
        <img
          src={IMGS.rekrutklin}
          alt="RekrutKlin website homepage"
          className="block w-full h-full object-cover object-top"
        />
        {/* HIPAA badge */}
        <span
          className="absolute bottom-4 right-4 px-2.5 py-1 rounded-full font-mono text-[11px]"
          style={{ background: '#0F2A24', color: '#2CC3A5' }}
        >
          HIPAA
        </span>
      </div>

      {/* info footer */}
      <div
        className="flex flex-wrap items-end justify-between gap-3.5 px-6 py-5"
      >
        <div>
          <div
            className="font-tight text-[28px] font-semibold"
            style={{ letterSpacing: '-0.02em' }}
          >
            RekrutKlin
          </div>
          <div className="mt-1 font-mono text-[12px]" style={{ color: '#8E8C87' }}>
            USA · HEALTHCARE SAAS · PRODUCT + CLOUD
          </div>
          <p
            className="mt-3 text-[15px] leading-[1.55]"
            style={{ color: '#A8A6A0', maxWidth: 460, margin: '12px 0 0' }}
          >
            Clinical trial recruitment platform and the AWS setup behind it.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <LiveBadge />
          <span
            className="ap-arrow inline-block text-[20px]"
            aria-hidden="true"
            style={{ color: '#8E8C87' }}
          >
            ↗
          </span>
        </div>
      </div>
    </a>
  );
}

/* ─── Stats sidebar card ─────────────────────────────────────── */
function StatCard() {
  return (
    <div
      className="rounded-2xl flex flex-col justify-between"
      style={{
        flex: '1 1 300px',
        minWidth: 0,
        border: '1px solid #21201E',
        background: '#121211',
        padding: 32,
        gap: 32,
      }}
    >
      {/* live badge */}
      <span
        className="inline-flex items-center gap-2 font-mono text-[12px]"
        style={{ letterSpacing: '0.08em', color: '#2CC3A5' }}
      >
        <span
          style={{ width: 8, height: 8, borderRadius: '50%', background: '#2CC3A5', display: 'block' }}
        />
        5 PROJECTS LIVE
      </span>

      {/* big number */}
      <div>
        <div
          className="font-tight font-semibold"
          style={{
            fontSize: 'clamp(88px, 9vw, 128px)',
            lineHeight: 0.9,
            letterSpacing: '-0.05em',
            color: '#2CC3A5',
          }}
        >
          3
        </div>
        <p
          className="text-[17px] leading-[1.5]"
          style={{ margin: '16px 0 0', color: '#BDBBB5', maxWidth: 280 }}
        >
          of our live projects are for clients in the USA, across healthcare,
          clinical research and education.
        </p>
      </div>

      {/* CTA */}
      <a
        href="#case-studies"
        className="self-start inline-flex items-center no-underline text-[14px]"
        style={{
          minHeight: 46,
          padding: '0 20px',
          borderRadius: 999,
          border: '1px solid #3B3A37',
          color: '#F3F1EC',
          textDecoration: 'none',
        }}
      >
        Read the case studies
      </a>
    </div>
  );
}

/* ─── small project card ─────────────────────────────────────── */
function ProjectCard({ domain, imgSrc, imgAlt, imgBg, name, tags, placeholder }) {
  return (
    <a
      href="#case-studies"
      className="ap-card flex flex-col rounded-2xl overflow-hidden no-underline"
      style={{
        flex: '1 1 260px',
        minWidth: 0,
        border: '1px solid #21201E',
        background: '#121211',
        color: '#F3F1EC',
        textDecoration: 'none',
      }}
    >
      {/* browser chrome */}
      <div
        className="flex items-center gap-1.5 px-3 py-2.5"
        style={{ borderBottom: '1px solid #21201E' }}
      >
        <BrowserDots size={8} />
        <span
          className="ml-2 px-2.5 py-1 rounded-md font-mono text-[11px]"
          style={{ background: '#1B1B19', color: '#8E8C87' }}
        >
          {domain}
        </span>
      </div>

      {/* screenshot / placeholder */}
      <div
        className="overflow-hidden"
        style={{ height: 180, background: imgBg }}
      >
        {imgSrc ? (
          <img
            src={imgSrc}
            alt={imgAlt}
            className="block w-full h-full object-cover object-left-top"
          />
        ) : (
          /* Adar Limited skeleton */
          <div className="h-full p-[18px] box-border flex flex-col gap-3.5" style={{ background: '#151514' }}>
            <span className="block h-3 rounded" style={{ width: '65%', background: '#3B3A37' }} />
            <div className="flex-1 grid grid-cols-3 gap-2">
              {[['#2CC3A5', '80%', '60%'], ['#3B3A37', '70%', '50%'], ['#3B3A37', '75%', '55%']].map(
                ([accent, w1, w2], i) => (
                  <div
                    key={i}
                    className="rounded-lg flex flex-col gap-2 p-2.5"
                    style={{ background: '#1B1B19', border: '1px solid #262523' }}
                  >
                    <span className="rounded" style={{ width: 16, height: 16, background: accent, display: 'block' }} />
                    <span className="block h-1.5 rounded" style={{ width: w1, background: '#2B2A27' }} />
                    <span className="block h-1.5 rounded" style={{ width: w2, background: '#2B2A27' }} />
                  </div>
                )
              )}
            </div>
          </div>
        )}
      </div>

      {/* info */}
      <div className="flex flex-col gap-1.5 px-[18px] py-[18px]">
        <div className="flex justify-between items-center gap-2">
          <span className="font-tight text-[20px] font-semibold">{name}</span>
          <Arrow />
        </div>
        <div className="font-mono text-[11px]" style={{ color: '#8E8C87' }}>
          {tags}
        </div>
        <LiveBadge />
      </div>
    </a>
  );
}

/* ─── Section ────────────────────────────────────────────────── */
export function SelectedWorkSection() {
  return (
    <section
      id="work"
      style={{ maxWidth: 1360, margin: '0 auto', padding: '0 40px 120px' }}
    >
      {/* section label */}
      <p
        className="font-mono text-[14px] uppercase"
        style={{ margin: '0 0 20px', color: '#8E8C87', letterSpacing: '0.12em' }}
      >
        Work
      </p>

      {/* heading row */}
      <div
        className="flex flex-wrap justify-between items-end gap-4"
        style={{ marginBottom: 40 }}
      >
        <h2
          className="font-tight font-medium"
          style={{
            margin: 0,
            fontSize: 'clamp(36px, 4.6vw, 64px)',
            letterSpacing: '-0.03em',
          }}
        >
          Selected work
        </h2>
        <a
          href="#case-studies"
          className="text-[15px] underline underline-offset-[5px]"
          style={{ color: '#F3F1EC' }}
        >
          See the case studies →
        </a>
      </div>

      {/* ── row 1: hero + stat ── */}
      <div className="flex flex-wrap gap-4">
        <HeroCard />
        <StatCard />
      </div>

      {/* ── row 2: 4 small cards ── */}
      <div className="flex flex-wrap gap-4 mt-4">
        <ProjectCard
          domain="farashacrp.com"
          imgSrc={IMGS.farashacrp}
          imgAlt="FarashaCRP homepage hero"
          imgBg="#F5F2EC"
          name="FarashaCRP"
          tags="USA · CLINICAL RESEARCH · WEBSITE"
        />
        <ProjectCard
          domain="primesiteacademy.com"
          imgSrc={IMGS.primeSite}
          imgAlt="Prime Site Academy homepage hero"
          imgBg="#0F2A4A"
          name="Prime Site Academy"
          tags="USA · EDUCATION · LMS"
        />
        <ProjectCard
          domain="seasteelmarine.com"
          imgSrc={IMGS.seasteel}
          imgAlt="Seasteel Marine homepage hero"
          imgBg="#0D1117"
          name="Seasteel Marine"
          tags="NIGERIA · MARINE & OFFSHORE · WEBSITE"
        />
        <ProjectCard
          domain="adarlimited.com"
          imgSrc={null}
          imgAlt=""
          imgBg="#151514"
          name="Adar Limited"
          tags="WEBSITE"
        />
      </div>
    </section>
  );
}

export default SelectedWorkSection;
