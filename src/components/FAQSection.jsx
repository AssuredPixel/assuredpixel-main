import React from 'react';

const FAQS = [
  {
    question: 'Do you work with clients outside Nigeria?',
    answer:
      'Yes. Most of our recent projects are for US companies. We keep things moving with short calls and written updates, so time zones are rarely a problem.',
  },
  {
    question: 'Can you build for health and clinical companies?',
    answer:
      "Yes. We've built a HIPAA compliant platform and a clinical business website, so we plan for privacy and security from the first day.",
  },
  {
    question: 'How much does a project cost?',
    answer:
      "It depends on what you need, so we don't guess. After a free call we send a clear price and scope in writing, and you decide from there with no pressure.",
  },
  {
    question: 'How long does a website take?',
    answer:
      "Usually 2 to 6 weeks, depending on the scope, number of pages, and how ready your content is. You'll have the exact timeline in writing before we start.",
  },
  {
    question: 'What happens after launch?',
    answer:
      "We don't disappear. You can stay on a care plan and we'll handle updates, backups and small changes, or we hand everything over cleanly if you'd rather run it yourself.",
  },
  {
    question: 'Who owns the site and the code?',
    answer:
      'You do. 100%. Once final payment is made, all code, design files, domain accounts, and cloud assets are transferred completely to you. No vendor lock-in, ever.',
  },
];

export function FAQSection() {
  return (
    <section
      id="faq"
      style={{ borderTop: '1px solid #21201E' }}
    >
      <div
        className="flex flex-wrap"
        style={{
          maxWidth: 1360,
          margin: '0 auto',
          padding: '120px 40px',
          gap: 48,
        }}
      >
        {/* Left header column */}
        <div style={{ flex: '1 1 320px', minWidth: 0 }}>
          <p
            className="font-mono text-[14px] uppercase"
            style={{
              margin: '0 0 20px',
              color: '#8E8C87',
              letterSpacing: '0.12em',
            }}
          >
            Questions
          </p>
          <h2
            className="font-tight font-medium"
            style={{
              margin: 0,
              fontSize: 'clamp(36px, 4.6vw, 64px)',
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
            }}
          >
            Things people ask us.
          </h2>
        </div>

        {/* Right Q&A list */}
        <div
          style={{
            flex: '2 1 560px',
            minWidth: 0,
            borderTop: '1px solid #21201E',
          }}
        >
          {FAQS.map((item, idx) => (
            <div
              key={idx}
              style={{
                padding: '28px 0',
                borderBottom: '1px solid #21201E',
              }}
            >
              <h3
                className="font-tight font-semibold"
                style={{
                  margin: '0 0 10px',
                  fontSize: 21,
                  color: '#F3F1EC',
                }}
              >
                {item.question}
              </h3>
              <p
                style={{
                  margin: 0,
                  fontSize: 16,
                  lineHeight: 1.6,
                  color: '#A8A6A0',
                }}
              >
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
