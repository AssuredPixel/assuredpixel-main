import {
    Brush,
    Globe,
    Search,
    FileText,
    TrendingUp,
    Target,
} from "lucide-react";

export const services = [
    {
        id: 1,
        title: "Website Design & Development",
        slug: "web-design",
        image: "/service-images/responsive-web-design.jpg",
        description:
            "We build fast, beautiful, conversion-focused websites that represent your business professionally and turn visitors into paying customers.",
        longDescription: `Your website is your hardest-working team member — available 24/7, representing your brand to every potential client. We design and develop custom websites that are built to convert, not just impress.

Every project starts with understanding your business goals and your customers. We then build a site that guides visitors naturally toward taking action — whether that's booking a call, filling a form, or making a purchase. We focus on mobile-first design, fast load speeds, and clean code that holds up long-term. From landing pages to full multi-page sites, we deliver work that makes your business look world-class online.`,
        icon: Globe,
    },
    {
        id: 2,
        title: "Brand Identity Design",
        slug: "branding-strategy",
        image: "/service-images/business-branding-strategy.jpg",
        description:
            "A strong brand makes you the obvious choice. We craft visual identities that communicate trust, professionalism, and authority from first glance.",
        longDescription: `Before a client reads a single word on your website, they've already formed an opinion based on how you look. A weak brand loses business silently — clients move on without ever telling you why.

We build brand identities that command respect. This includes logo design, color systems, typography, and brand guidelines that keep your visual communication consistent across every touchpoint. Whether you're starting from scratch or refreshing an existing brand, we make sure your business looks like the premium option in your market.`,
        icon: Brush,
    },
    {
        id: 3,
        title: "SEO & Search Visibility",
        slug: "seo-ranking",
        image: "/service-images/technical-seo-audit.jpg",
        description:
            "We optimize your website so the right people find you on Google — without paid ads. Sustainable visibility built on solid technical foundations.",
        longDescription: `If your business isn't showing up on Google, you're leaving money on the table every single day. SEO is the long-term investment that keeps paying dividends long after the work is done.

We handle both technical SEO — site speed, structure, crawlability — and content SEO, ensuring your pages rank for the terms your customers are actually searching. We don't use shortcuts or black-hat tactics that get sites penalized. We build sustainable search visibility that grows your organic traffic month over month and puts your business in front of high-intent customers at exactly the right moment.`,
        icon: Search,
    },
    {
        id: 4,
        title: "Paid Advertising (Google & Meta)",
        slug: "google-facebook-ads",
        image: "/service-images/cloud-integration.jpg",
        description:
            "Get in front of your ideal customers today. We run data-driven ad campaigns on Google and Meta that maximize your budget and deliver measurable ROI.",
        longDescription: `Organic growth takes time. Paid advertising gets you results now. We design and manage performance-driven campaigns on Google and Meta (Facebook/Instagram) that connect your business with people actively looking for what you offer.

Every campaign we run is built around your specific goals — leads, sales, or brand awareness. We handle everything from audience research and ad creative to budget management and performance reporting. No guesswork, no wasted spend. You get full transparency on what's working, what's not, and exactly where your money is going.`,
        icon: TrendingUp,
    },
    {
        id: 5,
        title: "Content & Copywriting",
        slug: "content-writing",
        image: "/service-images/seo-content-writing.jpg",
        description:
            "Words that sell. We write website copy, blog content, and brand messaging that speaks directly to your customers and builds the trust that converts.",
        longDescription: `Great design without great copy is a beautiful car with no engine. Words are what actually close the sale — and most businesses are losing customers because their messaging is generic, unclear, or unconvincing.

Our copywriters craft content that speaks directly to your target audience's real problems and positions your business as the obvious solution. From homepage headlines to service page descriptions, blog posts to email sequences, every word is written with one goal: getting your reader to take action. We also optimise all copy for SEO so your content works double duty — converting visitors and ranking on Google.`,
        icon: FileText,
    },
    {
        id: 6,
        title: "Digital Strategy & Consulting",
        slug: "lead-generation",
        image: "/service-images/social-media-management.jpg",
        description:
            "Not sure where to start or what's holding your online presence back? We audit your current digital footprint and build a clear, actionable growth plan.",
        longDescription: `Sometimes the biggest problem isn't execution — it's knowing what to actually focus on. We work with business owners who are overwhelmed by the options and unsure which digital investments will actually move the needle.

We start with a thorough audit of your current website, search visibility, brand, and competitive landscape. From there we build a prioritised digital strategy that fits your budget and goals — no fluff, no unnecessary services pushed on you. You walk away with a clear roadmap of exactly what to do, in what order, and why. Whether you implement it with us or take it in-house, you'll have the clarity to move forward with confidence.`,
        icon: Target,
    },
];