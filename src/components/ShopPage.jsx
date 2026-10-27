import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const TEE_SIZES = ['S', 'M', 'L', 'XL', 'XXL'];

const PRODUCTS = [
  {
    id: 'tee-black',
    name: 'Logo Tee, Black',
    price: 28,
    cat: 'apparel',
    sizes: TEE_SIZES,
    tag: 'Best seller',
    blurb: 'Heavy cotton tee with the teal logo on the chest.',
    accent: '#0C0C0B',
  },
  {
    id: 'tee-ivory',
    name: 'Logo Tee, Ivory',
    price: 28,
    cat: 'apparel',
    sizes: TEE_SIZES,
    tag: '',
    blurb: 'Same cut, warm ivory body, dark logo print.',
    accent: '#F3F1EC',
  },
  {
    id: 'tee-steps',
    name: 'Pixel Steps Tee',
    price: 32,
    cat: 'apparel',
    sizes: TEE_SIZES,
    tag: 'New',
    blurb: 'The pixel steps from our mark, printed large on the back.',
    accent: '#2CC3A5',
  },
  {
    id: 'hoodie',
    name: 'Studio Hoodie',
    price: 55,
    cat: 'apparel',
    sizes: TEE_SIZES,
    tag: '',
    blurb: 'Brushed fleece hoodie for late deploys.',
    accent: '#181816',
  },
  {
    id: 'cap',
    name: 'Logo Cap',
    price: 22,
    cat: 'accessories',
    sizes: [],
    tag: '',
    blurb: 'Six panel cap with an embroidered mark.',
    accent: '#1B1B19',
  },
  {
    id: 'tote',
    name: 'Canvas Tote',
    price: 18,
    cat: 'accessories',
    sizes: [],
    tag: '',
    blurb: 'Sturdy tote that fits a laptop and then some.',
    accent: '#E4E4E2',
  },
  {
    id: 'mug',
    name: 'Ship It Mug',
    price: 16,
    cat: 'accessories',
    sizes: [],
    tag: '',
    blurb: 'Matte black mug for the morning standup.',
    accent: '#121211',
  },
  {
    id: 'stickers',
    name: 'Sticker Pack',
    price: 8,
    cat: 'accessories',
    sizes: [],
    tag: '',
    blurb: 'Five vinyl stickers for your laptop.',
    accent: '#2CC3A5',
  },
];

/* AP geometric logo mark */
function ApLogoSvg({ width = 34, height = 28 }) {
  return (
    <svg width={width} height={height} viewBox="0 0 160 132" aria-hidden="true">
      <path
        d="M4 124 L58 6 Q61 0 68 0 L104 0 Q110 0 107 6 L52 126 Q49 132 42 132 L9 132 Q1 132 4 124 Z"
        fill="#2CC3A5"
      />
      <rect x="96" y="44" width="22" height="22" fill="#2CC3A5" />
      <rect x="117" y="66" width="22" height="22" fill="#2CC3A5" />
      <rect x="138" y="88" width="22" height="22" fill="#2CC3A5" />
      <rect x="138" y="110" width="22" height="22" fill="#2CC3A5" />
    </svg>
  );
}

export function ShopPage() {
  const [filter, setFilter] = useState('all');
  const [sizes, setSizes] = useState({});
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [justAddedId, setJustAddedId] = useState(null);

  // Close cart drawer on ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setCartOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const sizeFor = (p) => sizes[p.id] || (p.sizes.length ? 'M' : '');

  const setSizeFor = (productId, s) => {
    setSizes((prev) => ({ ...prev, [productId]: s }));
  };

  const addToCart = (p) => {
    const size = sizeFor(p);
    const key = `${p.id}|${size}`;
    setCart((prev) => {
      const idx = prev.findIndex((item) => item.key === key);
      if (idx >= 0) {
        const copy = [...prev];
        copy[idx] = { ...copy[idx], qty: copy[idx].qty + 1 };
        return copy;
      }
      return [...prev, { key, id: p.id, name: p.name, size, price: p.price, qty: 1 }];
    });

    setJustAddedId(p.id);
    setTimeout(() => {
      setJustAddedId((cur) => (cur === p.id ? null : cur));
    }, 1800);
  };

  const changeQty = (key, delta) => {
    setCart((prev) =>
      prev
        .map((item) => (item.key === key ? { ...item, qty: item.qty + delta } : item))
        .filter((item) => item.qty > 0)
    );
  };

  const totalCount = cart.reduce((acc, item) => acc + item.qty, 0);
  const subtotal = cart.reduce((acc, item) => acc + item.qty * item.price, 0);

  const filteredProducts = PRODUCTS.filter((p) => filter === 'all' || p.cat === filter);

  return (
    <div
      style={{
        background: '#0C0C0B',
        color: '#F3F1EC',
        fontFamily: "'Inter', system-ui, sans-serif",
        minHeight: '100vh',
        overflowX: 'hidden',
      }}
    >
      <Helmet>
        <title>Shop — AssuredPixel Official Merchandise</title>
        <meta
          name="description"
          content="Heavyweight tees, everyday accessories and desk essentials made with the same attention to detail as our work."
        />
      </Helmet>

      {/* ── 1. Shop Header ── */}
      <header style={{ borderBottom: '1px solid #21201E' }}>
        <div
          style={{
            maxWidth: 1360,
            margin: '0 auto',
            padding: '22px 40px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 16,
          }}
        >
          {/* Logo brand */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
            <ApLogoSvg width={34} height={28} />
            <span style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 22, color: '#F3F1EC' }}>
              <span style={{ fontWeight: 700 }}>Assured</span>
              <span style={{ fontWeight: 400 }}>Pixel</span>
            </span>
            <span
              style={{
                marginLeft: 4,
                padding: '4px 10px',
                border: '1px solid #2B2A27',
                borderRadius: 999,
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 12,
                color: '#CFCDC7',
              }}
            >
              SHOP
            </span>
          </Link>

          {/* Cart button & back to studio */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
            <Link
              to="/"
              style={{
                fontSize: 15,
                textDecoration: 'none',
                color: '#BDBBB5',
                padding: '10px 0',
              }}
            >
              Back to the studio
            </Link>

            <button
              type="button"
              onClick={() => setCartOpen(true)}
              aria-label="Open cart"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                minHeight: 46,
                padding: '0 18px',
                borderRadius: 999,
                border: '1px solid #3B3A37',
                background: 'transparent',
                color: '#F3F1EC',
                fontSize: 15,
                cursor: 'pointer',
                transition: 'border-color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#2CC3A5')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#3B3A37')}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 7h14l-1.2 12.2a1 1 0 0 1-1 .8H7.2a1 1 0 0 1-1-.8Z" />
                <path d="M9 7V5.5a3 3 0 0 1 6 0V7" />
              </svg>
              Cart
              <span
                style={{
                  minWidth: 24,
                  height: 24,
                  padding: '0 6px',
                  borderRadius: 999,
                  background: '#2CC3A5',
                  color: '#0C0C0B',
                  fontSize: 13,
                  fontWeight: 600,
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {totalCount}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* ── 2. Shop Hero & Filters ── */}
      <section style={{ maxWidth: 1360, margin: '0 auto', padding: '88px 40px 56px' }}>
        <p
          className="font-mono text-[14px] uppercase"
          style={{ margin: '0 0 20px', color: '#8E8C87', letterSpacing: '0.12em' }}
        >
          The AssuredPixel shop
        </p>

        <h1
          className="font-tight font-medium"
          style={{
            margin: 0,
            fontSize: 'clamp(42px, 6vw, 84px)',
            lineHeight: 1.04,
            letterSpacing: '-0.035em',
            maxWidth: 1000,
          }}
        >
          <span style={{ color: '#6F6D69' }}>Gear made with the same</span> attention to detail{' '}
          <span style={{ color: '#6F6D69' }}>as our work.</span>
        </h1>

        <p
          style={{
            margin: '28px 0 0',
            maxWidth: 560,
            fontSize: 18,
            lineHeight: 1.6,
            color: '#BDBBB5',
          }}
        >
          Heavyweight tees, everyday accessories and a few things for your desk. Quality pieces we're proud to wear ourselves.
        </p>

        {/* Filter Buttons */}
        <div
          role="group"
          aria-label="Filter products"
          style={{ marginTop: 44, display: 'flex', flexWrap: 'wrap', gap: 10 }}
        >
          {[
            ['all', 'All'],
            ['apparel', 'Tees & hoodies'],
            ['accessories', 'Accessories'],
          ].map(([val, label]) => {
            const isActive = filter === val;
            return (
              <button
                key={val}
                type="button"
                onClick={() => setFilter(val)}
                aria-pressed={isActive}
                style={{
                  minHeight: 44,
                  padding: '0 20px',
                  borderRadius: 999,
                  border: `1px solid ${isActive ? '#F3F1EC' : '#3B3A37'}`,
                  background: isActive ? '#F3F1EC' : 'transparent',
                  color: isActive ? '#0C0C0B' : '#F3F1EC',
                  fontSize: 14,
                  fontWeight: isActive ? 600 : 400,
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                {label}
              </button>
            );
          })}
        </div>
      </section>

      {/* ── 3. Product Catalog Grid ── */}
      <section aria-label="Products" style={{ maxWidth: 1360, margin: '0 auto', padding: '0 40px 110px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: 28,
          }}
        >
          {filteredProducts.map((p) => {
            const selectedSize = sizeFor(p);
            const isJustAdded = justAddedId === p.id;

            return (
              <article key={p.id} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {/* Visual Card Media */}
                <div
                  style={{
                    position: 'relative',
                    aspectRatio: '4 / 5',
                    borderRadius: 12,
                    background: '#161615',
                    border: '1px solid #272624',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 18,
                    overflow: 'hidden',
                  }}
                >
                  <ApLogoSvg width={64} height={53} />
                  <span
                    className="font-mono text-[12px]"
                    style={{ color: '#8E8C87' }}
                  >
                    {p.name}
                  </span>

                  {/* Badge */}
                  {p.tag && (
                    <span
                      style={{
                        position: 'absolute',
                        top: 14,
                        left: 14,
                        padding: '5px 10px',
                        borderRadius: 999,
                        background: '#0F2A24',
                        color: '#2CC3A5',
                        fontSize: 12,
                        fontWeight: 500,
                      }}
                    >
                      {p.tag}
                    </span>
                  )}
                </div>

                {/* Title & Price */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 12 }}>
                  <h2
                    className="font-tight font-semibold text-[19px]"
                    style={{ margin: 0, color: '#F3F1EC' }}
                  >
                    {p.name}
                  </h2>
                  <span style={{ fontSize: 16, color: '#CFCDC7' }}>${p.price}</span>
                </div>

                {/* Blurb */}
                <p style={{ margin: 0, fontSize: 14, lineHeight: 1.5, color: '#A8A6A0' }}>
                  {p.blurb}
                </p>

                {/* Size picker (for apparel) */}
                {p.sizes.length > 0 && (
                  <div role="group" aria-label="Size" style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {p.sizes.map((s) => {
                      const isSelected = selectedSize === s;
                      return (
                        <button
                          key={s}
                          type="button"
                          onClick={() => setSizeFor(p.id, s)}
                          aria-pressed={isSelected}
                          style={{
                            minWidth: 44,
                            minHeight: 44,
                            borderRadius: 8,
                            border: `1px solid ${isSelected ? '#F3F1EC' : '#3B3A37'}`,
                            background: isSelected ? '#F3F1EC' : 'transparent',
                            color: isSelected ? '#0C0C0B' : '#CFCDC7',
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: 13,
                            fontWeight: 500,
                            cursor: 'pointer',
                            transition: 'all 0.15s',
                          }}
                        >
                          {s}
                        </button>
                      );
                    })}
                  </div>
                )}

                {/* Add to Cart button */}
                <button
                  type="button"
                  onClick={() => addToCart(p)}
                  style={{
                    minHeight: 48,
                    borderRadius: 999,
                    border: `1px solid ${isJustAdded ? '#2CC3A5' : '#3B3A37'}`,
                    background: isJustAdded ? '#0F2A24' : 'transparent',
                    color: isJustAdded ? '#2CC3A5' : '#F3F1EC',
                    fontSize: 15,
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    if (!isJustAdded) e.currentTarget.style.borderColor = '#F3F1EC';
                  }}
                  onMouseLeave={(e) => {
                    if (!isJustAdded) e.currentTarget.style.borderColor = '#3B3A37';
                  }}
                >
                  {isJustAdded ? 'Added ✓ Add another' : 'Add to cart'}
                </button>
              </article>
            );
          })}
        </div>
      </section>

      {/* ── 4. Brand Promises ── */}
      <section
        aria-label="Shop promises"
        style={{ borderTop: '1px solid #21201E', borderBottom: '1px solid #21201E' }}
      >
        <div
          style={{
            maxWidth: 1360,
            margin: '0 auto',
            padding: '56px 40px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 32,
          }}
        >
          <div>
            <h3
              className="font-tight font-semibold text-[19px]"
              style={{ margin: '0 0 8px' }}
            >
              Built to last
            </h3>
            <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: '#A8A6A0' }}>
              240gsm combed organic cotton, screen-printed with water-based durable inks. Built for everyday wear.
            </p>
          </div>
          <div>
            <h3
              className="font-tight font-semibold text-[19px]"
              style={{ margin: '0 0 8px' }}
            >
              Shipping
            </h3>
            <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: '#A8A6A0' }}>
              Worldwide tracked shipping. Orders dispatch within 2–3 business days with automated tracking updates.
            </p>
          </div>
          <div>
            <h3
              className="font-tight font-semibold text-[19px]"
              style={{ margin: '0 0 8px' }}
            >
              Easy returns
            </h3>
            <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: '#A8A6A0' }}>
              30-day hassle-free exchanges or full refunds on unworn items. Reach out to our team anytime.
            </p>
          </div>
        </div>
      </section>

      {/* ── 5. Studio Bridge Link ── */}
      <section aria-label="Studio link">
        <div
          style={{
            maxWidth: 1360,
            margin: '0 auto',
            padding: '110px 40px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: 32,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <h2
            className="font-tight font-medium"
            style={{
              margin: 0,
              maxWidth: 720,
              fontSize: 'clamp(32px, 4vw, 54px)',
              lineHeight: 1.08,
              letterSpacing: '-0.03em',
            }}
          >
            <span style={{ color: '#6F6D69' }}>Came for the tee?</span> Stay for the website.
          </h2>
          <Link
            to="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              minHeight: 52,
              padding: '0 26px',
              borderRadius: 999,
              background: '#F3F1EC',
              color: '#0C0C0B',
              fontWeight: 600,
              fontSize: 16,
              textDecoration: 'none',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            See what we build
          </Link>
        </div>
      </section>

      {/* ── 6. Shop Minimal Footer ── */}
      <footer style={{ borderTop: '1px solid #21201E' }}>
        <div
          style={{
            maxWidth: 1360,
            margin: '0 auto',
            padding: '24px 40px 40px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: 16,
            justifyContent: 'space-between',
            fontSize: 14,
            color: '#A8A6A0',
          }}
        >
          <span>
            © 2026 AssuredPixel ·{' '}
            <Link to="/privacy" style={{ color: '#A8A6A0', textDecoration: 'none' }}>
              Privacy
            </Link>{' '}
            ·{' '}
            <Link to="/terms" style={{ color: '#A8A6A0', textDecoration: 'none' }}>
              Terms
            </Link>
          </span>
          <a
            href="mailto:support@assuredpixel.com"
            style={{ color: '#F3F1EC', textDecoration: 'none' }}
          >
            Questions about an order? support@assuredpixel.com
          </a>
        </div>
      </footer>

      {/* ── 7. Slide-Over Cart Drawer ── */}
      {cartOpen && (
        <>
          {/* Backdrop overlay */}
          <div
            onClick={() => setCartOpen(false)}
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              background: 'rgba(0, 0, 0, 0.65)',
              backdropFilter: 'blur(4px)',
              zIndex: 60,
            }}
          />

          {/* Drawer container */}
          <aside
            aria-label="Your cart"
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              bottom: 0,
              width: 'min(440px, 100%)',
              background: '#121211',
              borderLeft: '1px solid #2B2A27',
              zIndex: 61,
              display: 'flex',
              flexDirection: 'column',
              boxSizing: 'border-box',
              boxShadow: '-10px 0 30px rgba(0, 0, 0, 0.6)',
            }}
          >
            {/* Drawer Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '22px 24px',
                borderBottom: '1px solid #21201E',
              }}
            >
              <h2
                className="font-tight font-semibold text-[22px]"
                style={{ margin: 0, color: '#F3F1EC' }}
              >
                Your cart ({totalCount})
              </h2>
              <button
                type="button"
                onClick={() => setCartOpen(false)}
                aria-label="Close cart"
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 8,
                  border: '1px solid #3B3A37',
                  background: 'transparent',
                  color: '#F3F1EC',
                  fontSize: 20,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                ×
              </button>
            </div>

            {/* Line items scroll list */}
            <div style={{ flex: 1, overflowY: 'auto', padding: '8px 24px' }}>
              {cart.length === 0 ? (
                <div style={{ padding: '60px 0', textAlign: 'center', color: '#A8A6A0', fontSize: 15 }}>
                  Your cart is empty. Pick something you like.
                </div>
              ) : (
                cart.map((item) => (
                  <div
                    key={item.key}
                    style={{
                      display: 'flex',
                      gap: 14,
                      alignItems: 'center',
                      padding: '18px 0',
                      borderBottom: '1px solid #21201E',
                    }}
                  >
                    {/* Thumbnail preview */}
                    <div
                      style={{
                        width: 64,
                        height: 76,
                        flex: '0 0 64px',
                        borderRadius: 6,
                        background: '#1B1B19',
                        border: '1px solid #2B2A27',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <ApLogoSvg width={24} height={20} />
                    </div>

                    {/* Meta */}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: 15, fontWeight: 600, color: '#F3F1EC' }}>
                        {item.name}
                      </div>
                      <div style={{ marginTop: 2, fontSize: 13, color: '#A8A6A0' }}>
                        {item.size ? `Size ${item.size} · ` : ''}${item.price} each
                      </div>

                      {/* Quantity stepper */}
                      <div style={{ marginTop: 10, display: 'flex', alignItems: 'center', gap: 8 }}>
                        <button
                          type="button"
                          onClick={() => changeQty(item.key, -1)}
                          aria-label="Remove one"
                          style={{
                            width: 38,
                            height: 32,
                            borderRadius: 6,
                            border: '1px solid #3B3A37',
                            background: 'transparent',
                            color: '#F3F1EC',
                            fontSize: 16,
                            cursor: 'pointer',
                          }}
                        >
                          −
                        </button>
                        <span
                          className="font-mono text-[14px]"
                          style={{ minWidth: 24, textAlign: 'center', color: '#F3F1EC' }}
                        >
                          {item.qty}
                        </span>
                        <button
                          type="button"
                          onClick={() => changeQty(item.key, 1)}
                          aria-label="Add one"
                          style={{
                            width: 38,
                            height: 32,
                            borderRadius: 6,
                            border: '1px solid #3B3A37',
                            background: 'transparent',
                            color: '#F3F1EC',
                            fontSize: 16,
                            cursor: 'pointer',
                          }}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Line total */}
                    <span style={{ fontSize: 15, color: '#CFCDC7', fontWeight: 600 }}>
                      ${(item.qty * item.price).toFixed(2)}
                    </span>
                  </div>
                ))
              )}
            </div>

            {/* Drawer Subtotal & Checkout */}
            {cart.length > 0 && (
              <div
                style={{
                  padding: '22px 24px 26px',
                  borderTop: '1px solid #21201E',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 14,
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 16 }}>
                  <span style={{ color: '#BDBBB5' }}>Subtotal</span>
                  <span style={{ fontWeight: 600, color: '#F3F1EC' }}>
                    ${subtotal.toFixed(2)}
                  </span>
                </div>
                <div style={{ fontSize: 13, color: '#8E8C87' }}>
                  Shipping and taxes calculated at checkout.
                </div>
                <button
                  type="button"
                  onClick={() => alert(`Proceeding to checkout with subtotal $${subtotal.toFixed(2)}`)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: 52,
                    borderRadius: 999,
                    background: '#F3F1EC',
                    color: '#0C0C0B',
                    fontWeight: 600,
                    fontSize: 16,
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  Checkout
                </button>
              </div>
            )}
          </aside>
        </>
      )}
    </div>
  );
}

export default ShopPage;
