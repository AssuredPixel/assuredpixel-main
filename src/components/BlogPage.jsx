import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Search, User, Clock, ArrowUpRight } from "lucide-react";
import blogPosts from "../data/remoteBlogPosts.json";
import { trackBlogPostClick } from "../lib/analytics";

export const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Ensure posts is always a valid array even if fetch returned empty
  const posts = Array.isArray(blogPosts) ? blogPosts : [];

  // Extract all unique tags to act as categories
  const allTags = posts.flatMap((post) => post?.tags || []);
  const uniqueTags = [...new Set(allTags)].slice(0, 6); // Limit to top 6 tags
  const categories = ["All", ...uniqueTags];

  const filteredPosts = posts.filter((post) => {
    if (!post || !post.title) return false;
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (post.description && post.description.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory =
      selectedCategory === "All" || (post.tags && post.tags.includes(selectedCategory));
    return matchesSearch && matchesCategory;
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Blog & Engineering Dispatches — AssuredPixel</title>
        <meta
          name="description"
          content="Practical notes on design, full-stack systems, technical SEO, and AWS cloud architecture from the AssuredPixel team."
        />
        <link rel="canonical" href="https://assuredpixel.com/blog" />
      </Helmet>

      <div
        style={{
          background: "#0C0C0B",
          color: "#F3F1EC",
          minHeight: "100vh",
          padding: "60px 0 120px",
          fontFamily: "'Inter', system-ui, sans-serif",
        }}
      >
        <div style={{ maxWidth: 1360, margin: "0 auto", padding: "0 32px" }}>
          {/* Header */}
          <div style={{ marginBottom: 64, maxWidth: 840 }}>
            <p
              style={{
                margin: "0 0 18px",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 13,
                letterSpacing: "0.28em",
                color: "#F5A524",
              }}
            >
              // WRITING & DISPATCHES
            </p>
            <h1
              className="font-tight font-semibold"
              style={{
                margin: "0 0 20px",
                fontSize: "clamp(38px, 5.5vw, 76px)",
                lineHeight: 1.04,
                letterSpacing: "-0.035em",
                color: "#F3F1EC",
              }}
            >
              Design, code, and cloud in practice.
            </h1>
            <p style={{ margin: 0, fontSize: 18, lineHeight: 1.65, color: "#A8A6A0" }}>
              Practical architectural teardowns, technical SEO benchmarks, and notes from our daily builds. Pulled directly from our engineering pipelines.
            </p>
          </div>

          {/* Search & Category Filter Bar */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 20,
              paddingBottom: 32,
              marginBottom: 48,
              borderBottom: "1px solid #21201E",
            }}
          >
            {/* Category Tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {categories.map((category) => {
                const isActive = selectedCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    style={{
                      padding: "8px 16px",
                      borderRadius: 999,
                      border: `1px solid ${isActive ? "#F5A524" : "#21201E"}`,
                      background: isActive ? "#F5A524" : "#121211",
                      color: isActive ? "#1A1100" : "#A8A6A0",
                      fontWeight: isActive ? 700 : 500,
                      fontSize: 13,
                      fontFamily: "'JetBrains Mono', monospace",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.borderColor = "#3B3A37";
                        e.currentTarget.style.color = "#F3F1EC";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.borderColor = "#21201E";
                        e.currentTarget.style.color = "#A8A6A0";
                      }
                    }}
                  >
                    {category}
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div style={{ position: "relative", minWidth: 260, flex: "0 1 340px" }}>
              <Search
                style={{
                  position: "absolute",
                  left: 14,
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: 16,
                  height: 16,
                  color: "#6F6D69",
                  pointerEvents: "none",
                }}
              />
              <input
                type="text"
                placeholder="Search dispatches…"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px 14px 10px 40px",
                  background: "#0F1419",
                  border: "1px solid #1E262D",
                  borderRadius: 8,
                  color: "#E6EDF3",
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontSize: 14,
                  outline: "none",
                  boxSizing: "border-box",
                  transition: "border-color 0.2s",
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "#F5A524")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "#1E262D")}
              />
            </div>
          </div>

          {/* Posts Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
              gap: 32,
            }}
          >
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <a
                  key={post.id}
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackBlogPostClick(post)}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    textDecoration: "none",
                    color: "inherit",
                    border: "1px solid #21201E",
                    borderRadius: 16,
                    background: "#121211",
                    overflow: "hidden",
                    transition:
                      "transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.borderColor = "#3B3A37";
                    e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,0,0,0.45)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.borderColor = "#21201E";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {/* Card Cover */}
                  <div
                    style={{
                      height: 200,
                      position: "relative",
                      background: "#070B0E",
                      overflow: "hidden",
                    }}
                  >
                    {post.coverImage ? (
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        loading="lazy"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          transition: "transform 0.4s ease",
                        }}
                      />
                    ) : (
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          background:
                            "linear-gradient(135deg, rgba(245,165,36,0.1) 0%, rgba(44,195,165,0.05) 100%)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: 12,
                          color: "#6F6D69",
                        }}
                      >
                        // ASSUREDPad / DEV.TO
                      </div>
                    )}
                    {post.tags && post.tags[0] && (
                      <span
                        style={{
                          position: "absolute",
                          top: 14,
                          left: 14,
                          padding: "4px 10px",
                          borderRadius: 999,
                          background: "rgba(10, 24, 18, 0.85)",
                          backdropFilter: "blur(6px)",
                          color: "#2CC3A5",
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: 11,
                          letterSpacing: "0.08em",
                          border: "1px solid rgba(44, 195, 165, 0.3)",
                        }}
                      >
                        {post.tags[0]}
                      </span>
                    )}
                  </div>

                  {/* Card Body */}
                  <div
                    style={{
                      padding: "24px",
                      display: "flex",
                      flexDirection: "column",
                      flex: 1,
                    }}
                  >
                    <h2
                      className="font-tight font-semibold"
                      style={{
                        margin: "0 0 12px",
                        fontSize: 20,
                        lineHeight: 1.3,
                        color: "#F3F1EC",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {post.title}
                    </h2>

                    <p
                      style={{
                        margin: "0 0 24px",
                        fontSize: 14,
                        lineHeight: 1.6,
                        color: "#A8A6A0",
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        flex: 1,
                      }}
                    >
                      {post.description}
                    </p>

                    {/* Metadata Footer */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        paddingTop: 16,
                        borderTop: "1px solid #1E262D",
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 12,
                        color: "#6F6D69",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                        <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                          <User className="w-3.5 h-3.5" />
                          {post.author?.name ? post.author.name.split(" ")[0] : "Author"}
                        </span>
                        {post.readTime && (
                          <span style={{ display: "inline-flex", alignItems: "center", gap: 5 }}>
                            <Clock className="w-3.5 h-3.5" />
                            {post.readTime}
                          </span>
                        )}
                      </div>
                      <span style={{ color: "#F5A524", display: "inline-flex", alignItems: "center" }}>
                        <ArrowUpRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </a>
              ))
            ) : (
              <div
                style={{
                  gridColumn: "1 / -1",
                  padding: "80px 20px",
                  textAlign: "center",
                  border: "1px dashed #21201E",
                  borderRadius: 16,
                }}
              >
                <p style={{ margin: "0 0 16px", color: "#A8A6A0", fontSize: 16 }}>
                  No dispatches found matching your search.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("All");
                  }}
                  style={{
                    padding: "8px 18px",
                    borderRadius: 6,
                    border: "1px solid #21201E",
                    background: "#121211",
                    color: "#F5A524",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 13,
                    cursor: "pointer",
                  }}
                >
                  Reset filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
