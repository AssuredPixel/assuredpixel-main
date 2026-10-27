import React from 'react';

export function BottomCTASection() {
  return (
    <section
      aria-label="Call to action"
      style={{ borderTop: '1px solid #21201E' }}
    >
      <div
        className="text-center"
        style={{
          maxWidth: 1360,
          margin: '0 auto',
          padding: '140px 40px',
        }}
      >
        <h2
          className="font-tight font-medium mx-auto"
          style={{
            margin: '0 auto',
            maxWidth: 900,
            fontSize: 'clamp(36px, 5vw, 72px)',
            lineHeight: 1.06,
            letterSpacing: '-0.035em',
            color: '#F3F1EC',
          }}
        >
          Every good build starts with a conversation.
        </h2>

        <p
          className="mx-auto"
          style={{
            margin: '24px auto 36px',
            maxWidth: 520,
            fontSize: 18,
            lineHeight: 1.6,
            color: '#A8A6A0',
          }}
        >
          Book a free discovery call. We'll look at where you are now, where you want to be, and whether we're the right team to get you there. If we're not, we'll say so.
        </p>

        <a
          href="#contact"
          className="inline-flex items-center justify-center font-semibold text-[16px] no-underline transition-transform hover:scale-[1.03]"
          style={{
            minHeight: 54,
            padding: '0 30px',
            borderRadius: 999,
            background: '#F3F1EC',
            color: '#0C0C0B',
            textDecoration: 'none',
          }}
        >
          Let's work together
        </a>
      </div>
    </section>
  );
}

export default BottomCTASection;
