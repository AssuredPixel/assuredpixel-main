import React from 'react';

const STEPS = [
  {
    num: 'Step 1',
    title: 'We talk',
    body: 'A free 30-minute call about your business, your customers and what isn\'t working right now.',
    badge: '30 min · free',
    badgeStyle: {
      border: '1px solid #2B2A27',
      color: '#CFCDC7',
      background: 'transparent',
    },
    topBorder: '#F3F1EC', // bright — active first step
  },
  {
    num: 'Step 2',
    title: 'We plan',
    body: 'You get a clear scope, timeline and price in writing before anything starts.',
    badge: 'Scope ✓ Timeline ✓ Price ✓',
    badgeStyle: {
      border: '1px solid #2B2A27',
      color: '#CFCDC7',
      background: 'transparent',
    },
    topBorder: '#3B3A37',
  },
  {
    num: 'Step 3',
    title: 'We build',
    body: 'Short weekly updates and a live preview link, so you see progress instead of waiting on it.',
    badge: 'Preview link · updated weekly',
    badgeStyle: {
      border: '1px solid #2B2A27',
      color: '#CFCDC7',
      background: 'transparent',
    },
    topBorder: '#3B3A37',
  },
  {
    num: 'Step 4',
    title: 'We stick around',
    body: 'Launch is the start. We keep things updated, backed up and running after you go live.',
    badge: 'Live ✓ · care plan on',
    badgeStyle: {
      border: 'none',
      color: '#2CC3A5',
      background: '#0F2A24',
    },
    topBorder: '#3B3A37',
  },
];

export function HowWeWorkSection() {
  return (
    <section
      aria-label="How we work"
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
        05 · How we work
      </p>

      {/* headline */}
      <h2
        className="font-tight font-medium"
        style={{
          margin: '0 0 56px',
          fontSize: 'clamp(36px, 4.6vw, 64px)',
          letterSpacing: '-0.03em',
        }}
      >
        Simple, and you're in the loop.
      </h2>

      {/* 4-step grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 24,
        }}
      >
        {STEPS.map((step) => (
          <div
            key={step.num}
            style={{
              borderTop: `2px solid ${step.topBorder}`,
              paddingTop: 22,
            }}
          >
            {/* step number */}
            <div
              className="font-mono text-[13px]"
              style={{ color: '#8E8C87' }}
            >
              {step.num}
            </div>

            {/* title */}
            <h3
              className="font-tight font-semibold text-[22px]"
              style={{ margin: '12px 0 10px' }}
            >
              {step.title}
            </h3>

            {/* body */}
            <p
              className="text-[15px] leading-[1.6]"
              style={{ margin: 0, color: '#A8A6A0' }}
            >
              {step.body}
            </p>

            {/* badge */}
            <span
              className="inline-block font-mono text-[12px]"
              style={{
                marginTop: 16,
                padding: '6px 12px',
                borderRadius: 999,
                ...step.badgeStyle,
              }}
            >
              {step.badge}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowWeWorkSection;
