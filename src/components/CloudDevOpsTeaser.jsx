import React from 'react';

/* Terminal log lines */
const LOG_LINES = [
  { ok: true,  text: 'git push origin main' },
  { ok: true,  text: 'lint · test · security scan' },
  { ok: true,  text: 'terraform plan · 0 to destroy' },
  { ok: true,  text: 'deploy · cdn cache cleared' },
  { ok: false, text: 'client site live in 3m 12s', accent: '#F5A524' },
];

export function CloudDevOpsTeaser() {
  return (
    <section
      aria-label="Cloud & DevOps preview"
      style={{
        background: '#05080A',
        borderTop: '1px solid #14191D',
        borderBottom: '1px solid #14191D',
      }}
    >
      <div
        className="flex flex-wrap items-center"
        style={{
          maxWidth: 1360,
          margin: '0 auto',
          padding: '110px 40px',
          gap: 56,
        }}
      >
        {/* ── Left: copy ── */}
        <div style={{ flex: '1 1 420px', minWidth: 0 }}>
          {/* eyebrow */}
          <p
            className="font-mono text-[13px] uppercase"
            style={{
              margin: '0 0 18px',
              letterSpacing: '0.2em',
              color: '#F5A524',
            }}
          >
            04 // Cloud &amp; DevOps
          </p>

          {/* headline */}
          <h2
            className="font-tight font-semibold"
            style={{
              margin: 0,
              fontSize: 'clamp(34px, 4vw, 56px)',
              lineHeight: 1.08,
              letterSpacing: '-0.03em',
              color: '#F3F1EC',
            }}
          >
            The part of your product nobody sees. We build that too.
          </h2>

          {/* body */}
          <p
            className="text-[17px] leading-[1.6]"
            style={{ margin: '22px 0 32px', color: '#A7B0BA', maxWidth: 500 }}
          >
            Pipelines that deploy on every push, infrastructure written in
            Terraform, and monitoring that tells you something is wrong before
            your customers do.
          </p>

          {/* CTA */}
          <a
            href="/cloud"
            className="inline-flex items-center font-mono font-semibold text-[15px] no-underline"
            style={{
              minHeight: 50,
              padding: '0 24px',
              borderRadius: 8,
              background: '#F5A524',
              color: '#1A1100',
              textDecoration: 'none',
            }}
          >
            Open the console ⌨
          </a>
        </div>

        {/* ── Right: terminal window ── */}
        <div
          className="rounded-xl overflow-hidden"
          style={{
            flex: '1 1 480px',
            minWidth: 0,
            border: '1px solid #1E262D',
            background: '#0A0F13',
          }}
        >
          {/* title bar */}
          <div
            className="flex items-center gap-2"
            style={{
              padding: '14px 18px',
              borderBottom: '1px solid #1E262D',
            }}
          >
            {/* traffic lights */}
            {['#FF5F57', '#FEBC2E', '#28C840'].map((bg) => (
              <span
                key={bg}
                style={{ width: 12, height: 12, borderRadius: '50%', background: bg, display: 'block' }}
              />
            ))}
            <span
              className="font-mono text-[13px] ml-2.5"
              style={{ color: '#C9D1D9' }}
            >
              ops@assuredpixel:~$
            </span>
          </div>

          {/* log output */}
          <div
            className="font-mono text-[14px]"
            style={{
              padding: '22px 22px 26px',
              lineHeight: 1.9,
              color: '#C9D1D9',
            }}
          >
            {LOG_LINES.map((line, i) => (
              <div key={i} style={line.accent ? { color: line.accent } : {}}>
                {line.ok && (
                  <span style={{ color: '#3DDC97' }}>[ok] </span>
                )}
                {line.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CloudDevOpsTeaser;
