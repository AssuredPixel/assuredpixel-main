import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

/* ─── Terminal Command Evaluator ────────────────────────────── */
const COMMAND_MAP = {
  help: [
    ['plain', 'commands:'],
    ['dim', '  services   what we set up for clients'],
    ['dim', '  stack      tools we use'],
    ['dim', '  status     current availability'],
    ['dim', '  work       recent cloud project'],
    ['dim', '  contact    how to reach us'],
    ['dim', '  clear      clear the screen'],
  ],
  services: [
    ['green', '> AWS setup        accounts, networking, permissions'],
    ['green', '> Terraform        your whole setup written as code'],
    ['green', '> CI/CD            deploy on every push, safely'],
    ['green', '> Monitoring       alerts, logs, backups, uptime'],
  ],
  stack: [
    ['plain', 'aws · terraform · docker · kubernetes'],
    ['plain', 'github actions · cloudwatch · grafana'],
  ],
  status: [
    ['ok', 'availability: taking new projects'],
    ['ok', 'response time: within one working day'],
    ['dim', 'timezone: WAT (UTC+1), working with clients globally'],
  ],
  work: [
    ['plain', 'RekrutKlin'],
    ['dim', 'clinical trial recruitment platform · multi-tenant · HIPAA aware'],
    ['dim', 'infra as code · automated pipeline · per-tenant isolation'],
  ],
  contact: [
    ['green', 'email  support@assuredpixel.com'],
    ['green', 'phone  +234 903 097 7669'],
  ],
};

const INITIAL_LINES = [
  { t: 'ok', text: 'mounting /dev/assuredpixel …' },
  { t: 'ok', text: 'lambda runtime warm · api gateway nominal' },
  { t: 'ok', text: 'dynamodb table reachable' },
  { t: 'prompt', text: 'ops@assuredpixel.com · cloud console' },
  { t: 'green', text: 'Type "help" to explore. Try "services" or "status".' },
];

export function CloudPage() {
  const [input, setInput] = useState('');
  const [lines, setLines] = useState(INITIAL_LINES);
  const [latency, setLatency] = useState(24);
  const consoleBottomRef = useRef(null);

  useEffect(() => {
    // Scroll console smoothly to bottom when new lines appear
    if (consoleBottomRef.current) {
      consoleBottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [lines]);

  useEffect(() => {
    // Subtle realistic latency fluctuation
    const interval = setInterval(() => {
      setLatency(Math.floor(21 + Math.random() * 8));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const runCommand = (cmdText) => {
    const trimmed = cmdText.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === 'clear') {
      setLines([]);
      setInput('');
      return;
    }

    const echoLine = { t: 'prompt', text: `ops@assuredpixel.com:~$ ${cmdText.trim()}` };
    const matched = COMMAND_MAP[trimmed];
    const outputRows = matched
      ? matched.map(([t, text]) => ({ t, text }))
      : [{ t: 'dim', text: `command not found: ${trimmed}. Try "help".` }];

    setLines((prev) => [...prev, echoLine, ...outputRows].slice(-40));
    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      runCommand(input);
    }
  };

  const chips = ['help', 'services', 'stack', 'status', 'work', 'contact', 'clear'];

  return (
    <div
      style={{
        background: '#05080A',
        color: '#E6EDF3',
        fontFamily: "'Inter', system-ui, sans-serif",
        minHeight: '100vh',
        overflowX: 'hidden',
      }}
    >
      <Helmet>
        <title>Cloud & DevOps Practice — AssuredPixel</title>
        <meta
          name="description"
          content="AWS setups, CI/CD pipelines and infrastructure as code. The reliable plumbing that lets your product grow."
        />
      </Helmet>

      {/* ── 1. Sub-Brand Navigation ── */}
      <header style={{ borderBottom: '1px solid #141B21' }}>
        <div
          style={{
            maxWidth: 1240,
            margin: '0 auto',
            padding: '22px 32px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 16,
          }}
        >
          {/* Logo mark */}
          <Link
            to="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 600,
              fontSize: 17,
              textDecoration: 'none',
              color: '#E6EDF3',
            }}
          >
            <svg width="30" height="25" viewBox="0 0 160 132" aria-hidden="true">
              <path
                d="M4 124 L58 6 Q61 0 68 0 L104 0 Q110 0 107 6 L52 126 Q49 132 42 132 L9 132 Q1 132 4 124 Z"
                fill="#2CC3A5"
              />
              <rect x="96" y="44" width="22" height="22" fill="#2CC3A5" />
              <rect x="117" y="66" width="22" height="22" fill="#2CC3A5" />
              <rect x="138" y="88" width="22" height="22" fill="#2CC3A5" />
              <rect x="138" y="110" width="22" height="22" fill="#2CC3A5" />
            </svg>
            <span>
              AP<span style={{ color: '#F5A524' }}>·</span>OPS
            </span>
          </Link>

          {/* Nav links */}
          <nav
            aria-label="Cloud navigation"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '4px 28px',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 14,
            }}
          >
            <a href="#console" style={{ textDecoration: 'none', padding: '10px 0', color: '#A7B3BF' }}>
              Console
            </a>
            <a href="#capabilities" style={{ textDecoration: 'none', padding: '10px 0', color: '#A7B3BF' }}>
              Capabilities
            </a>
            <a href="#work" style={{ textDecoration: 'none', padding: '10px 0', color: '#A7B3BF' }}>
              Work
            </a>
            <a href="#stack" style={{ textDecoration: 'none', padding: '10px 0', color: '#A7B3BF' }}>
              Stack
            </a>
            <Link to="/" style={{ textDecoration: 'none', padding: '10px 0', color: '#A7B3BF' }}>
              Studio ↗
            </Link>
          </nav>

          {/* Action button */}
          <a
            href="#contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              minHeight: 44,
              padding: '0 18px',
              border: '1px solid #F5A524',
              borderRadius: 8,
              color: '#F5A524',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 14,
              textDecoration: 'none',
              transition: 'background 0.2s',
            }}
          >
            Start a project
          </a>
        </div>
      </header>

      {/* ── 2. Hero Section ── */}
      <section style={{ maxWidth: 1240, margin: '0 auto', padding: '110px 32px 90px' }}>
        {/* Status Pill */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            padding: '8px 14px',
            border: '1px solid #1E3A2E',
            background: '#0A1712',
            borderRadius: 999,
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 12,
            letterSpacing: '0.12em',
            color: '#3DDC97',
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: '#3DDC97',
              display: 'inline-block',
              boxShadow: '0 0 8px rgba(61, 220, 151, 0.6)',
            }}
          />
          SYSTEMS ONLINE · TAKING NEW CLOUD PROJECTS
        </div>

        {/* Headline */}
        <h1
          className="font-tight font-semibold"
          style={{
            margin: '28px 0 0',
            fontSize: 'clamp(44px, 6.6vw, 96px)',
            lineHeight: 1.02,
            letterSpacing: '-0.04em',
            maxWidth: 1100,
          }}
        >
          Infrastructure that runs itself, so{' '}
          <span style={{ color: '#F5A524' }}>you don't have to.</span>
        </h1>

        {/* Subhead */}
        <p
          style={{
            margin: '28px 0 0',
            maxWidth: 640,
            fontSize: 19,
            lineHeight: 1.6,
            color: '#A7B3BF',
          }}
        >
          We set up and look after the cloud behind your product. AWS accounts done properly, deployments that happen on every push, and alerts that reach us before your users notice anything.
        </p>

        {/* CTA row */}
        <div style={{ marginTop: 40, display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          <a
            href="#contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              minHeight: 52,
              padding: '0 24px',
              borderRadius: 8,
              background: '#F5A524',
              color: '#1A1100',
              fontWeight: 600,
              fontSize: 15,
              textDecoration: 'none',
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            Let's talk →
          </a>
          <a
            href="#console"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              minHeight: 52,
              padding: '0 24px',
              borderRadius: 8,
              border: '1px solid #2A343D',
              color: '#E6EDF3',
              fontSize: 15,
              textDecoration: 'none',
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            Open the console ⌨
          </a>
        </div>
      </section>

      {/* ── 3. Interactive "Ask the Console" ── */}
      <section
        id="console"
        style={{
          borderTop: '1px solid #141B21',
          backgroundImage:
            'linear-gradient(#0B1115 1px, transparent 1px), linear-gradient(90deg, #0B1115 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      >
        <div style={{ maxWidth: 1000, margin: '0 auto', padding: '110px 32px' }}>
          <p
            style={{
              margin: 0,
              textAlign: 'center',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 13,
              letterSpacing: '0.28em',
              color: '#F5A524',
            }}
          >
            // TRY IT
          </p>
          <h2
            className="font-tight font-semibold"
            style={{
              margin: '18px 0 0',
              textAlign: 'center',
              fontSize: 'clamp(36px, 5vw, 64px)',
              letterSpacing: '-0.035em',
            }}
          >
            Ask the console.
          </h2>
          <p
            style={{
              margin: '18px auto 0',
              maxWidth: 620,
              textAlign: 'center',
              fontSize: 17,
              lineHeight: 1.6,
              color: '#A7B3BF',
            }}
          >
            It runs on the same kind of setup we build for clients: API Gateway, Lambda and DynamoDB, shipped through CI/CD. Type{' '}
            <code
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                color: '#F5A524',
                background: '#1A1408',
                padding: '2px 6px',
                borderRadius: 4,
              }}
            >
              help
            </code>
            ,{' '}
            <code
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                color: '#F5A524',
                background: '#1A1408',
                padding: '2px 6px',
                borderRadius: 4,
              }}
            >
              services
            </code>{' '}
            or{' '}
            <code
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                color: '#F5A524',
                background: '#1A1408',
                padding: '2px 6px',
                borderRadius: 4,
              }}
            >
              status
            </code>
            .
          </p>

          {/* Terminal Window */}
          <div
            style={{
              marginTop: 48,
              border: '1px solid #1E262D',
              borderRadius: 14,
              background: '#070B0E',
              overflow: 'hidden',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
            }}
          >
            {/* Title Bar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: '14px 18px',
                borderBottom: '1px solid #1E262D',
              }}
            >
              <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#FF5F57', display: 'block' }} />
              <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#FEBC2E', display: 'block' }} />
              <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#28C840', display: 'block' }} />
              <span
                style={{
                  marginLeft: 10,
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 13,
                  color: '#C9D1D9',
                }}
              >
                ops@assuredpixel.com:~$
              </span>
              <span
                style={{
                  marginLeft: 'auto',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 12,
                  letterSpacing: '0.15em',
                  color: '#3DDC97',
                }}
              >
                <span
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: '50%',
                    background: '#3DDC97',
                    display: 'block',
                    boxShadow: '0 0 6px #3DDC97',
                  }}
                />
                LIVE
              </span>
            </div>

            {/* Output screen */}
            <div
              style={{
                padding: '22px 24px 8px',
                minHeight: 340,
                maxHeight: 460,
                overflowY: 'auto',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 14,
                lineHeight: 1.85,
              }}
            >
              {lines.map((line, idx) => (
                <div key={idx} style={{ whiteSpace: 'pre-wrap' }}>
                  {line.t === 'ok' && (
                    <span style={{ color: '#C9D1D9' }}>
                      <span style={{ color: '#3DDC97' }}>[ok]</span> {line.text}
                    </span>
                  )}
                  {line.t === 'prompt' && <span style={{ color: '#F5A524' }}>{line.text}</span>}
                  {line.t === 'green' && <span style={{ color: '#3DDC97' }}>{line.text}</span>}
                  {line.t === 'plain' && <span style={{ color: '#C9D1D9' }}>{line.text}</span>}
                  {line.t === 'dim' && <span style={{ color: '#8B98A5' }}>{line.text}</span>}
                </div>
              ))}

              {/* Input Prompt line */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '4px 0 18px' }}>
                <label htmlFor="ap-cmd" style={{ color: '#F5A524', whiteSpace: 'nowrap' }}>
                  ops@assuredpixel.com:~$
                </label>
                <input
                  id="ap-cmd"
                  type="text"
                  autoComplete="off"
                  spellCheck="false"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="type a command"
                  style={{
                    flex: 1,
                    minWidth: 0,
                    minHeight: 36,
                    background: 'transparent',
                    border: 'none',
                    outline: 'none',
                    color: '#E6EDF3',
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 14,
                    caretColor: '#F5A524',
                  }}
                />
              </div>
              <div ref={consoleBottomRef} />
            </div>

            {/* Quick Action Chips */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 8,
                padding: '14px 18px',
                borderTop: '1px solid #1E262D',
                background: '#0A0F13',
              }}
            >
              {chips.map((chip) => (
                <button
                  key={chip}
                  type="button"
                  onClick={() => runCommand(chip)}
                  style={{
                    minHeight: 40,
                    padding: '0 16px',
                    borderRadius: 8,
                    border: '1px solid #2A343D',
                    background: '#0F161B',
                    color: '#E6EDF3',
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 13,
                    cursor: 'pointer',
                    transition: 'border-color 0.2s, background 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#F5A524';
                    e.currentTarget.style.background = '#1A1408';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#2A343D';
                    e.currentTarget.style.background = '#0F161B';
                  }}
                >
                  {chip}
                </button>
              ))}
            </div>
          </div>

          {/* Backend Info footer */}
          <p
            style={{
              margin: '16px 0 0',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 12,
              color: '#8B98A5',
            }}
          >
            backend: api gateway → lambda → dynamodb · region us-east-1 · latency{' '}
            <span style={{ color: '#3DDC97' }}>{latency}ms</span>
          </p>
        </div>
      </section>

      {/* ── 4. Self-Shipping Pipeline ── */}
      <section aria-label="Pipeline" style={{ borderTop: '1px solid #141B21' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto', padding: '110px 32px' }}>
          <p
            style={{
              margin: 0,
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 13,
              letterSpacing: '0.28em',
              color: '#F5A524',
            }}
          >
            // SELF SHIPPING
          </p>
          <h2
            className="font-tight font-semibold"
            style={{
              margin: '18px 0 14px',
              fontSize: 'clamp(34px, 4.4vw, 56px)',
              letterSpacing: '-0.035em',
            }}
          >
            Every push goes live on its own.
          </h2>
          <p
            style={{
              margin: '0 0 48px',
              maxWidth: 620,
              fontSize: 17,
              lineHeight: 1.6,
              color: '#A7B3BF',
            }}
          >
            This is the pipeline we give every client. Nobody logs into a server to deploy. If a check fails, nothing ships.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
              gap: 12,
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            <div style={{ padding: 18, border: '1px solid #1E262D', borderRadius: 10, background: '#0A0F13' }}>
              <div style={{ fontSize: 11, color: '#8B98A5' }}>01</div>
              <div style={{ marginTop: 10, fontSize: 14 }}>git push main</div>
            </div>
            <div style={{ padding: 18, border: '1px solid #1E262D', borderRadius: 10, background: '#0A0F13' }}>
              <div style={{ fontSize: 11, color: '#8B98A5' }}>02</div>
              <div style={{ marginTop: 10, fontSize: 14 }}>lint + test</div>
            </div>
            <div style={{ padding: 18, border: '1px solid #1E262D', borderRadius: 10, background: '#0A0F13' }}>
              <div style={{ fontSize: 11, color: '#8B98A5' }}>03</div>
              <div style={{ marginTop: 10, fontSize: 14 }}>security scan</div>
            </div>
            <div style={{ padding: 18, border: '1px solid #1E262D', borderRadius: 10, background: '#0A0F13' }}>
              <div style={{ fontSize: 11, color: '#8B98A5' }}>04</div>
              <div style={{ marginTop: 10, fontSize: 14 }}>terraform apply</div>
            </div>
            <div style={{ padding: 18, border: '1px solid #1E262D', borderRadius: 10, background: '#0A0F13' }}>
              <div style={{ fontSize: 11, color: '#8B98A5' }}>05</div>
              <div style={{ marginTop: 10, fontSize: 14 }}>deploy</div>
            </div>
            <div style={{ padding: 18, border: '1px solid #1E3A2E', borderRadius: 10, background: '#0A1712' }}>
              <div style={{ fontSize: 11, color: '#3DDC97' }}>06</div>
              <div style={{ marginTop: 10, fontSize: 14, color: '#3DDC97' }}>live ✓</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Capabilities ── */}
      <section id="capabilities" style={{ borderTop: '1px solid #141B21' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto', padding: '110px 32px' }}>
          <p
            style={{
              margin: 0,
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 13,
              letterSpacing: '0.28em',
              color: '#F5A524',
            }}
          >
            // CAPABILITIES
          </p>
          <h2
            className="font-tight font-semibold"
            style={{
              margin: '18px 0 48px',
              fontSize: 'clamp(34px, 4.4vw, 56px)',
              letterSpacing: '-0.035em',
            }}
          >
            Four things we do well.
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: 16,
            }}
          >
            {/* AWS Setup */}
            <div style={{ padding: 30, border: '1px solid #1E262D', borderRadius: 12, background: '#0A0F13' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F5A524" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M7 18a4 4 0 0 1-.5-8 6 6 0 0 1 11.5 1.5A3.5 3.5 0 0 1 17.5 18Z" />
              </svg>
              <h3 className="font-tight font-semibold text-[22px]" style={{ margin: '20px 0 10px' }}>
                AWS setup
              </h3>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: '#A7B3BF' }}>
                Accounts, networking and permissions set up the right way from day one, sized for what you need now.
              </p>
            </div>

            {/* Infrastructure as code */}
            <div style={{ padding: 30, border: '1px solid #1E262D', borderRadius: 12, background: '#0A0F13' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F5A524" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M8 6 3 12l5 6M16 6l5 6-5 6" />
              </svg>
              <h3 className="font-tight font-semibold text-[22px]" style={{ margin: '20px 0 10px' }}>
                Infrastructure as code
              </h3>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: '#A7B3BF' }}>
                Everything written in Terraform, so your setup is documented, repeatable and easy to hand over.
              </p>
            </div>

            {/* CI/CD pipelines */}
            <div style={{ padding: 30, border: '1px solid #1E262D', borderRadius: 12, background: '#0A0F13' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F5A524" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="6" cy="6" r="2.5" />
                <circle cx="6" cy="18" r="2.5" />
                <circle cx="18" cy="12" r="2.5" />
                <path d="M6 8.5v7M8.5 6h3a4 4 0 0 1 4 4v0" />
              </svg>
              <h3 className="font-tight font-semibold text-[22px]" style={{ margin: '20px 0 10px' }}>
                CI/CD pipelines
              </h3>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: '#A7B3BF' }}>
                GitHub Actions pipelines with tests, scans and approval gates. Deploys become a non-event.
              </p>
            </div>

            {/* Security & monitoring */}
            <div style={{ padding: 30, border: '1px solid #1E262D', borderRadius: 12, background: '#0A0F13' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F5A524" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 3 4 6v6c0 4.5 3.4 8 8 9 4.6-1 8-4.5 8-9V6Z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              <h3 className="font-tight font-semibold text-[22px]" style={{ margin: '20px 0 10px' }}>
                Security &amp; monitoring
              </h3>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: '#A7B3BF' }}>
                Logging, alerts, backups and compliance-minded setups, including HIPAA-aware work for health products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Quantified Case Study: RekrutKlin ── */}
      <section id="work" style={{ borderTop: '1px solid #141B21' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto', padding: '110px 32px' }}>
          <p
            style={{
              margin: 0,
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 13,
              letterSpacing: '0.28em',
              color: '#F5A524',
            }}
          >
            // SHIPPED
          </p>
          <h2
            className="font-tight font-semibold"
            style={{
              margin: '18px 0 48px',
              fontSize: 'clamp(34px, 4.4vw, 56px)',
              letterSpacing: '-0.035em',
            }}
          >
            Built. Shipped. Still running.
          </h2>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 40,
              padding: 40,
              border: '1px solid #1E262D',
              borderRadius: 14,
              background: '#0A0F13',
            }}
          >
            <div style={{ flex: '1 1 420px', minWidth: 0 }}>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 8,
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 12,
                }}
              >
                <span style={{ padding: '6px 12px', border: '1px solid #2A343D', borderRadius: 999, color: '#C9D1D9' }}>
                  AWS
                </span>
                <span style={{ padding: '6px 12px', border: '1px solid #2A343D', borderRadius: 999, color: '#C9D1D9' }}>
                  Multi tenant
                </span>
                <span style={{ padding: '6px 12px', border: '1px solid #2A343D', borderRadius: 999, color: '#C9D1D9' }}>
                  HIPAA
                </span>
              </div>
              <h3
                className="font-tight font-semibold"
                style={{
                  margin: '22px 0 12px',
                  fontSize: 32,
                  letterSpacing: '-0.02em',
                }}
              >
                RekrutKlin
              </h3>
              <p style={{ margin: 0, fontSize: 16, lineHeight: 1.65, color: '#A7B3BF' }}>
                A clinical trial recruitment platform that handles patient data, so it had to be secure and separated per customer from the start. We designed the cloud setup, wrote it as code and put every release through an automated pipeline.
              </p>
              <Link
                to="/case-studies"
                style={{
                  display: 'inline-block',
                  marginTop: 22,
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 14,
                  color: '#F5A524',
                  textDecoration: 'none',
                }}
              >
                Read the case study →
              </Link>
            </div>

            <div
              style={{
                flex: '1 1 320px',
                minWidth: 0,
                display: 'grid',
                gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                gap: 12,
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              <div style={{ padding: 20, border: '1px solid #1E262D', borderRadius: 10, background: '#070B0E' }}>
                <div style={{ fontSize: 28, color: '#3DDC97' }}>3</div>
                <div style={{ marginTop: 6, fontSize: 12, color: '#8B98A5' }}>environments</div>
              </div>
              <div style={{ padding: 20, border: '1px solid #1E262D', borderRadius: 10, background: '#070B0E' }}>
                <div style={{ fontSize: 28, color: '#3DDC97' }}>99.9%</div>
                <div style={{ marginTop: 6, fontSize: 12, color: '#8B98A5' }}>uptime</div>
              </div>
              <div style={{ padding: 20, border: '1px solid #1E262D', borderRadius: 10, background: '#070B0E' }}>
                <div style={{ fontSize: 28, color: '#3DDC97' }}>3.2 min</div>
                <div style={{ marginTop: 6, fontSize: 12, color: '#8B98A5' }}>push to live</div>
              </div>
              <div style={{ padding: 20, border: '1px solid #1E262D', borderRadius: 10, background: '#070B0E' }}>
                <div style={{ fontSize: 28, color: '#3DDC97' }}>12+</div>
                <div style={{ marginTop: 6, fontSize: 12, color: '#8B98A5' }}>tenants</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. Stack Grid ── */}
      <section id="stack" style={{ borderTop: '1px solid #141B21' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto', padding: '110px 32px' }}>
          <p
            style={{
              margin: 0,
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 13,
              letterSpacing: '0.28em',
              color: '#F5A524',
            }}
          >
            // STACK
          </p>
          <h2
            className="font-tight font-semibold"
            style={{
              margin: '18px 0 48px',
              fontSize: 'clamp(34px, 4.4vw, 56px)',
              letterSpacing: '-0.035em',
            }}
          >
            What we work with.
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: 32,
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 14,
            }}
          >
            <div>
              <div style={{ color: '#8B98A5', fontSize: 12, letterSpacing: '0.14em', marginBottom: 14 }}>
                CLOUD
              </div>
              <div style={{ lineHeight: 2, color: '#C9D1D9' }}>
                AWS · EC2 · ECS
                <br />
                Lambda · S3 · RDS
                <br />
                CloudFront · Route 53
              </div>
            </div>
            <div>
              <div style={{ color: '#8B98A5', fontSize: 12, letterSpacing: '0.14em', marginBottom: 14 }}>
                BUILD &amp; SHIP
              </div>
              <div style={{ lineHeight: 2, color: '#C9D1D9' }}>
                Terraform · Docker
                <br />
                GitHub Actions
                <br />
                Kubernetes
              </div>
            </div>
            <div>
              <div style={{ color: '#8B98A5', fontSize: 12, letterSpacing: '0.14em', marginBottom: 14 }}>
                WATCH
              </div>
              <div style={{ lineHeight: 2, color: '#C9D1D9' }}>
                CloudWatch · Grafana
                <br />
                Uptime alerts
                <br />
                Log retention
              </div>
            </div>
            <div>
              <div style={{ color: '#8B98A5', fontSize: 12, letterSpacing: '0.14em', marginBottom: 14 }}>
                PROTECT
              </div>
              <div style={{ lineHeight: 2, color: '#C9D1D9' }}>
                IAM least privilege
                <br />
                WAF · KMS
                <br />
                Automated backups
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. System Status Ribbon ── */}
      <div
        style={{
          borderTop: '1px solid #141B21',
          borderBottom: '1px solid #141B21',
          background: '#0A0F13',
        }}
      >
        <div
          style={{
            maxWidth: 1240,
            margin: '0 auto',
            padding: '18px 32px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px 32px',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 13,
            color: '#A7B3BF',
          }}
        >
          <span style={{ color: '#3DDC97' }}>● SYSTEM STATUS: AVAILABLE</span>
          <span>new builds</span>
          <span>migrations to AWS</span>
          <span>pipeline setup</span>
          <span>monthly care plans</span>
        </div>
      </div>

      {/* ── 9. Contact / Direct Action ── */}
      <section id="contact">
        <div style={{ maxWidth: 1240, margin: '0 auto', padding: '130px 32px', textAlign: 'center' }}>
          <h2
            className="font-tight font-semibold"
            style={{
              margin: '0 auto',
              maxWidth: 860,
              fontSize: 'clamp(38px, 5.4vw, 76px)',
              lineHeight: 1.04,
              letterSpacing: '-0.04em',
            }}
          >
            Let's make your next deploy{' '}
            <span style={{ color: '#F5A524' }}>the boring kind.</span>
          </h2>
          <p
            style={{
              margin: '22px auto 36px',
              maxWidth: 520,
              fontSize: 18,
              lineHeight: 1.6,
              color: '#A7B3BF',
            }}
          >
            Tell us what you're running and where it hurts. We'll come back with a plain plan and a price.
          </p>
          <div
            style={{
              display: 'inline-flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 12,
            }}
          >
            <a
              href="mailto:support@assuredpixel.com"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                minHeight: 54,
                padding: '0 26px',
                borderRadius: 8,
                background: '#F5A524',
                color: '#1A1100',
                fontWeight: 600,
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 15,
                textDecoration: 'none',
              }}
            >
              support@assuredpixel.com
            </a>
            <a
              href="tel:+2349030977669"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                minHeight: 54,
                padding: '0 26px',
                borderRadius: 8,
                border: '1px solid #2A343D',
                color: '#E6EDF3',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 15,
                textDecoration: 'none',
              }}
            >
              +234 903 097 7669
            </a>
          </div>
        </div>
      </section>

      {/* ── 10. Minimal Cloud Footer ── */}
      <footer style={{ borderTop: '1px solid #141B21' }}>
        <div
          style={{
            maxWidth: 1240,
            margin: '0 auto',
            padding: '26px 32px 40px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: 12,
            justifyContent: 'space-between',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 12,
            color: '#8B98A5',
          }}
        >
          <span>1,420 visitors logged in DynamoDB</span>
          <span>
            © 2026 AssuredPixel ·{' '}
            <Link to="/" style={{ color: '#A7B3BF', textDecoration: 'none' }}>
              back to the studio ↗
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
}

export default CloudPage;
