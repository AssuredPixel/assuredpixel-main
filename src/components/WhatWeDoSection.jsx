import React from 'react';

const SERVICES = [
  {
    num: '01',
    title: 'Websites',
    body: 'Custom sites built around what you sell and who you sell to. Fast, easy to update, and written to turn visits into enquiries.',
    href: null,
    isNew: false,
  },
  {
    num: '02',
    title: 'Brand identity',
    body: 'Logo, type, colour and a voice that sounds like you. Everything you need to show up the same way everywhere.',
    href: null,
    isNew: false,
  },
  {
    num: '03',
    title: 'Apps & products',
    body: 'Web and mobile apps, from the first clickable prototype to a product real users log into every day.',
    href: null,
    isNew: false,
  },
  {
    num: '04',
    title: 'SEO & search visibility',
    body: 'Technical audits and steady on-page work so the people already searching for you can actually find you.',
    href: null,
    isNew: false,
  },
  {
    num: '05',
    title: 'Ads & content',
    body: 'Google and Meta campaigns plus the copy behind them, tracked properly so you know what each naira or dollar brought back.',
    href: null,
    isNew: false,
  },
  {
    num: '06',
    title: 'Cloud & DevOps →',
    body: 'AWS setups, CI/CD pipelines and infrastructure as code. The boring, reliable plumbing that lets your product grow.',
    href: '/cloud',
    isNew: true,
  },
];

function ServiceCard({ num, title, body, href, isNew }) {
  const inner = (
    <>
      {/* number */}
      <div
        className="font-mono text-[13px]"
        style={{ color: isNew ? '#2CC3A5' : '#8E8C87' }}
      >
        {num}{isNew && ' · new'}
      </div>

      {/* title */}
      <h3
        className="font-tight font-semibold text-[24px]"
        style={{ margin: '16px 0 10px' }}
      >
        {title}
      </h3>

      {/* body */}
      <p
        className="text-[16px] leading-[1.6]"
        style={{ margin: 0, color: '#A8A6A0' }}
      >
        {body}
      </p>
    </>
  );

  const sharedStyle = {
    padding: '36px 32px 40px 0',
    borderBottom: '1px solid #21201E',
    display: 'block',
    textDecoration: 'none',
    color: '#F3F1EC',
  };

  if (href) {
    return (
      <a href={href} style={sharedStyle}>
        {inner}
      </a>
    );
  }

  return <div style={sharedStyle}>{inner}</div>;
}

export function WhatWeDoSection() {
  return (
    <section
      id="services"
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
          What we do
        </p>

        {/* headline: muted / bright / muted */}
        <h2
          className="font-tight font-medium"
          style={{
            margin: '0 0 64px',
            fontSize: 'clamp(36px, 4.6vw, 64px)',
            lineHeight: 1.08,
            letterSpacing: '-0.03em',
            maxWidth: 900,
          }}
        >
          <span style={{ color: '#6F6D69' }}>Design, code and</span>
          {' '}cloud,{' '}
          <span style={{ color: '#6F6D69' }}>under one roof.</span>
        </h2>

        {/* 6-service grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            borderTop: '1px solid #21201E',
          }}
        >
          {SERVICES.map((s) => (
            <ServiceCard key={s.num} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeDoSection;
