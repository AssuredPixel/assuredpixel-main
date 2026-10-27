import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const MARQUEE_PHRASE = "Let's build something that works.";

  return (
    <footer
      id="contact"
      style={{
        borderTop: '1px solid #21201E',
        background: '#0C0C0B',
        color: '#F3F1EC',
        overflow: 'hidden',
        width: '100%',
        maxWidth: '100vw',
      }}
    >
      {/* ── 1. Infinite Statement Marquee (smooth, seamless loop, strictly contained) ── */}
      <div
        className="w-full overflow-hidden select-none"
        style={{
          padding: '56px 0 48px',
          borderBottom: '1px solid #21201E',
        }}
        aria-label="Let's build something that works marquee"
      >
        <div className="ap-marquee flex items-center whitespace-nowrap">
          {/* Track 1 */}
          <div className="flex items-center shrink-0">
            {[0, 1, 2].map((i) => (
              <span
                key={`t1-${i}`}
                className="font-tight font-medium inline-flex items-center"
                style={{
                  fontSize: 'clamp(56px, 8vw, 136px)',
                  letterSpacing: '-0.04em',
                  lineHeight: 1,
                  color: '#F3F1EC',
                  paddingRight: '48px',
                }}
              >
                {MARQUEE_PHRASE}
                <span
                  style={{
                    display: 'inline-block',
                    width: 14,
                    height: 14,
                    borderRadius: '50%',
                    background: '#2CC3A5',
                    marginLeft: '48px',
                  }}
                  aria-hidden="true"
                />
              </span>
            ))}
          </div>

          {/* Track 2 (Duplicate for seamless loop) */}
          <div className="flex items-center shrink-0" aria-hidden="true">
            {[0, 1, 2].map((i) => (
              <span
                key={`t2-${i}`}
                className="font-tight font-medium inline-flex items-center"
                style={{
                  fontSize: 'clamp(56px, 8vw, 136px)',
                  letterSpacing: '-0.04em',
                  lineHeight: 1,
                  color: '#F3F1EC',
                  paddingRight: '48px',
                }}
              >
                {MARQUEE_PHRASE}
                <span
                  style={{
                    display: 'inline-block',
                    width: 14,
                    height: 14,
                    borderRadius: '50%',
                    background: '#2CC3A5',
                    marginLeft: '48px',
                  }}
                  aria-hidden="true"
                />
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── 2. Founder / Leadership Cards (Chiebuka Lawrence left, Nsikak Ekpo right) ── */}
      <div
        style={{
          maxWidth: 1360,
          margin: '0 auto',
          padding: '40px 40px',
          borderBottom: '1px solid #21201E',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 20,
          }}
        >
          {/* Left card: Chiebuka Lawrence */}
          <div
            className="flex items-center justify-between gap-4 transition-all"
            style={{
              padding: '16px 20px',
              borderRadius: 12,
              border: '1px solid #2B2A27',
              background: '#121211',
            }}
          >
            <div className="flex items-center gap-3.5 min-w-0">
              <div
                className="font-mono font-semibold text-[14px] flex items-center justify-center shrink-0"
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: '50%',
                  background: '#1B1B19',
                  border: '1px solid #2B2A27',
                  color: '#2CC3A5',
                }}
              >
                CL
              </div>
              <div className="min-w-0">
                <div
                  className="font-tight font-semibold text-[16px]"
                  style={{ color: '#F3F1EC' }}
                >
                  Chiebuka Lawrence
                </div>
                <div
                  className="font-mono text-[12px] truncate"
                  style={{ color: '#A8A6A0', marginTop: 2 }}
                >
                  Co-Founder, AssuredPixel
                </div>
              </div>
            </div>
            <a
              href="#contact"
              aria-label="Book a call with Chiebuka"
              className="font-semibold flex items-center justify-center shrink-0 no-underline transition-colors hover:bg-[#2CC3A5] hover:text-[#0C0C0B]"
              style={{
                width: 42,
                height: 42,
                borderRadius: 8,
                background: '#F3F1EC',
                color: '#0C0C0B',
                fontSize: 18,
              }}
            >
              →
            </a>
          </div>

          {/* Right card: Nsikak Ekpo */}
          <div
            className="flex items-center justify-between gap-4 transition-all"
            style={{
              padding: '16px 20px',
              borderRadius: 12,
              border: '1px solid #2B2A27',
              background: '#121211',
            }}
          >
            <div className="flex items-center gap-3.5 min-w-0">
              <div
                className="font-mono font-semibold text-[14px] flex items-center justify-center shrink-0"
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: '50%',
                  background: '#1B1B19',
                  border: '1px solid #2B2A27',
                  color: '#2CC3A5',
                }}
              >
                NE
              </div>
              <div className="min-w-0">
                <div
                  className="font-tight font-semibold text-[16px]"
                  style={{ color: '#F3F1EC' }}
                >
                  Nsikak Ekpo
                </div>
                <div
                  className="font-mono text-[12px] truncate"
                  style={{ color: '#A8A6A0', marginTop: 2 }}
                >
                  Founder &amp; CEO, AssuredPixel
                </div>
              </div>
            </div>
            <a
              href="#contact"
              aria-label="Book a call with Nsikak"
              className="font-semibold flex items-center justify-center shrink-0 no-underline transition-colors hover:bg-[#2CC3A5] hover:text-[#0C0C0B]"
              style={{
                width: 42,
                height: 42,
                borderRadius: 8,
                background: '#F3F1EC',
                color: '#0C0C0B',
                fontSize: 18,
              }}
            >
              →
            </a>
          </div>
        </div>
      </div>

      {/* ── 3. Navigation Columns ── */}
      <div
        style={{
          maxWidth: 1360,
          margin: '0 auto',
          padding: '56px 40px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 40,
        }}
      >
        {/* Company */}
        <div>
          <h3
            className="font-mono text-[13px] font-bold uppercase tracking-[0.1em]"
            style={{ margin: '0 0 22px', color: '#F3F1EC' }}
          >
            Company
          </h3>
          <div className="flex flex-col gap-3 text-[15px]">
            <a href="/#top" style={{ color: '#BDBBB5', textDecoration: 'none' }}>Home</a>
            <a href="/#work" style={{ color: '#BDBBB5', textDecoration: 'none' }}>Work</a>
            <Link to="/about" style={{ color: '#BDBBB5', textDecoration: 'none' }}>About</Link>
            <Link to="/contact" style={{ color: '#BDBBB5', textDecoration: 'none' }}>Contact</Link>
            <a href="/shop" style={{ color: '#BDBBB5', textDecoration: 'none' }}>Shop</a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3
            className="font-mono text-[13px] font-bold uppercase tracking-[0.1em]"
            style={{ margin: '0 0 22px', color: '#F3F1EC' }}
          >
            Services
          </h3>
          <div className="flex flex-col gap-3 text-[15px]">
            <a href="/#services" style={{ color: '#BDBBB5', textDecoration: 'none' }}>Websites</a>
            <a href="/#services" style={{ color: '#BDBBB5', textDecoration: 'none' }}>Brand identity</a>
            <a href="/#services" style={{ color: '#BDBBB5', textDecoration: 'none' }}>SEO &amp; ads</a>
            <a href="/cloud" style={{ color: '#BDBBB5', textDecoration: 'none' }}>Cloud &amp; DevOps</a>
          </div>
        </div>

        {/* Get started */}
        <div>
          <h3
            className="font-mono text-[13px] font-bold uppercase tracking-[0.1em]"
            style={{ margin: '0 0 22px', color: '#F3F1EC' }}
          >
            Get started
          </h3>
          <div className="flex flex-col gap-3 text-[15px]">
            <a href="#contact" style={{ color: '#BDBBB5', textDecoration: 'none' }}>Book a call</a>
            <a href="#contact" style={{ color: '#BDBBB5', textDecoration: 'none' }}>Free website audit</a>
            <a href="/cloud" style={{ color: '#BDBBB5', textDecoration: 'none' }}>Free cloud audit</a>
            <a href="/#faq" style={{ color: '#BDBBB5', textDecoration: 'none' }}>FAQs</a>
          </div>
        </div>

        {/* Business enquiries */}
        <div>
          <h3
            className="font-mono text-[13px] font-bold uppercase tracking-[0.1em]"
            style={{ margin: '0 0 22px', color: '#F3F1EC' }}
          >
            Business enquiries
          </h3>
          <div className="flex flex-col gap-3 text-[16px]">
            <a
              href="tel:+2349030977669"
              style={{ color: '#F3F1EC', textDecoration: 'none' }}
            >
              +234 903 097 7669
            </a>
            <a
              href="mailto:support@assuredpixel.com"
              style={{ color: '#F3F1EC', textDecoration: 'none' }}
            >
              support@assuredpixel.com
            </a>
            <a
              href="#contact"
              className="font-tight font-semibold text-[24px] no-underline"
              style={{
                marginTop: 10,
                color: '#2CC3A5',
              }}
            >
              Book a call →
            </a>
            <span style={{ fontSize: 14, color: '#A8A6A0' }}>
              A 30 minute call to see if we can help.
            </span>
          </div>
        </div>
      </div>

      {/* ── 4. Bottom Legal / Copyright Bar ── */}
      <div
        style={{
          maxWidth: 1360,
          margin: '0 auto',
          padding: '24px 40px 40px',
          borderTop: '1px solid #21201E',
          display: 'flex',
          flexWrap: 'wrap',
          gap: 16,
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: 14,
          color: '#A8A6A0',
        }}
      >
        <div>
          © 2026 AssuredPixel ·{' '}
          <Link to="/privacy" style={{ color: '#A8A6A0', textDecoration: 'none' }}>
            Privacy
          </Link>{' '}
          ·{' '}
          <Link to="/terms" style={{ color: '#A8A6A0', textDecoration: 'none' }}>
            Terms
          </Link>{' '}
          ·{' '}
          <Link to="/cookies" style={{ color: '#A8A6A0', textDecoration: 'none' }}>
            Cookies
          </Link>
        </div>

        <button
          onClick={scrollToTop}
          className="bg-transparent border-0 cursor-pointer p-0 text-[14px]"
          style={{ color: '#F3F1EC' }}
        >
          Back up ↑
        </button>
      </div>
    </footer>
  );
}

export default Footer;
