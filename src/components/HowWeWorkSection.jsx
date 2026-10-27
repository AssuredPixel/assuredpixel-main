import React, { useEffect, useRef, useState } from 'react';

const STEPS = [
  {
    num: 'Step 1',
    title: 'We talk',
    body: "A free 30-minute call about your business, your customers and what isn't working right now.",
    badge: '30 min · free',
    badgeStyle: { border: '1px solid #2B2A27', color: '#CFCDC7', background: 'transparent' },
  },
  {
    num: 'Step 2',
    title: 'We plan',
    body: 'You get a clear scope, timeline and price in writing before anything starts.',
    badge: 'Scope ✓ Timeline ✓ Price ✓',
    badgeStyle: { border: '1px solid #2B2A27', color: '#CFCDC7', background: 'transparent' },
  },
  {
    num: 'Step 3',
    title: 'We build',
    body: 'Short weekly updates and a live preview link, so you see progress instead of waiting on it.',
    badge: 'Preview link · updated weekly',
    badgeStyle: { border: '1px solid #2B2A27', color: '#CFCDC7', background: 'transparent' },
  },
  {
    num: 'Step 4',
    title: 'We stick around',
    body: 'Launch is the start. We keep things updated, backed up and running after you go live.',
    badge: 'Live ✓ · care plan on',
    badgeStyle: { border: 'none', color: '#2CC3A5', background: '#0F2A24' },
  },
];

export function HowWeWorkSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = rect.height;
      // How far we've scrolled into the section (0 = top of section at top of viewport)
      const scrolledIn = -rect.top;
      // Divide the section height into 4 equal bands
      const band = sectionHeight / STEPS.length;
      // Clamp and compute which step we're in
      const raw = Math.floor(scrolledIn / band);
      const idx = Math.max(0, Math.min(STEPS.length - 1, raw));
      setActiveIndex(idx);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // set initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="How we work"
      style={{ maxWidth: 1360, margin: '0 auto', padding: '120px 40px' }}
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
        style={{ margin: '0 0 56px', fontSize: 'clamp(36px, 4.6vw, 64px)', letterSpacing: '-0.03em' }}
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
        {STEPS.map((step, i) => {
          const isActive = i === activeIndex;
          return (
            <div
              key={step.num}
              style={{
                borderTop: `2px solid ${isActive ? '#F3F1EC' : '#3B3A37'}`,
                paddingTop: 22,
                transition: 'border-color 0.45s ease',
              }}
            >
              {/* step number */}
              <div
                className="font-mono text-[13px]"
                style={{
                  color: isActive ? '#F3F1EC' : '#8E8C87',
                  transition: 'color 0.45s ease',
                }}
              >
                {step.num}
              </div>

              {/* title */}
              <h3
                className="font-tight font-semibold text-[22px]"
                style={{
                  margin: '12px 0 10px',
                  color: isActive ? '#F3F1EC' : '#6F6D69',
                  transition: 'color 0.45s ease',
                }}
              >
                {step.title}
              </h3>

              {/* body */}
              <p
                className="text-[15px] leading-[1.6]"
                style={{
                  margin: 0,
                  color: isActive ? '#A8A6A0' : '#4A4845',
                  transition: 'color 0.45s ease',
                }}
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
                  opacity: isActive ? 1 : 0.35,
                  transition: 'opacity 0.45s ease',
                  ...step.badgeStyle,
                }}
              >
                {step.badge}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default HowWeWorkSection;
