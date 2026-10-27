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
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!wrapperRef.current) return;
      const rect = wrapperRef.current.getBoundingClientRect();
      const totalScrollable = wrapperRef.current.offsetHeight - window.innerHeight;
      // How far the user has scrolled into the sticky zone (0 → totalScrollable)
      const scrolled = Math.max(0, -rect.top);
      const progress = Math.min(scrolled / totalScrollable, 1); // 0..1
      // Map progress to step index
      const idx = Math.min(
        STEPS.length - 1,
        Math.floor(progress * STEPS.length)
      );
      setActiveIndex(idx);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    /*
     * Outer wrapper: tall enough to "spend" scroll ticks on 4 steps.
     * Each step gets 100vh of scroll distance.
     * The inner panel sticks to the top of the viewport for the whole duration.
     */
    <div
      ref={wrapperRef}
      style={{ height: `${STEPS.length * 100}vh` }}
    >
      <div
        aria-label="How we work"
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          background: '#0C0C0B', // matches page bg so it looks seamless
          borderTop: '1px solid #21201E',
          borderBottom: '1px solid #21201E',
        }}
      >
        <div style={{ maxWidth: 1360, margin: '0 auto', padding: '0 40px', width: '100%' }}>
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
              gridTemplateColumns: 'repeat(4, 1fr)',
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
                    transition: 'border-color 0.5s ease',
                  }}
                >
                  {/* step number */}
                  <div
                    className="font-mono text-[13px]"
                    style={{
                      color: isActive ? '#F3F1EC' : '#8E8C87',
                      transition: 'color 0.5s ease',
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
                      transition: 'color 0.5s ease',
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
                      transition: 'color 0.5s ease',
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
                      opacity: isActive ? 1 : 0.3,
                      transition: 'opacity 0.5s ease',
                      ...step.badgeStyle,
                    }}
                  >
                    {step.badge}
                  </span>
                </div>
              );
            })}
          </div>

          {/* scroll progress dots */}
          <div
            className="flex items-center gap-2"
            style={{ marginTop: 48 }}
            aria-hidden="true"
          >
            {STEPS.map((_, i) => (
              <span
                key={i}
                style={{
                  width: i === activeIndex ? 24 : 6,
                  height: 6,
                  borderRadius: 999,
                  background: i === activeIndex ? '#F3F1EC' : '#3B3A37',
                  transition: 'width 0.4s ease, background 0.4s ease',
                  display: 'block',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowWeWorkSection;

