import { useState, useEffect, useRef } from "react";

const FONT_LINK = (() => {
  const link = document.createElement("link");
  link.href = "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=JetBrains+Mono:wght@400;500&display=swap";
  link.rel = "stylesheet";
  document.head.appendChild(link);
  return true;
})();

const STYLES = `
  :root {
    --bg-primary: #08090c;
    --bg-secondary: #0e1015;
    --bg-card: #12141a;
    --bg-card-hover: #181b23;
    --border: #1e2130;
    --border-glow: #c8a46440;
    --text-primary: #f0ece4;
    --text-secondary: #8a8d9b;
    --text-muted: #555869;
    --accent: #c8a464;
    --accent-dim: #a68840;
    --accent-glow: #c8a46430;
    --accent-bright: #e4c882;
    --serif: 'Instrument Serif', Georgia, serif;
    --sans: 'DM Sans', system-ui, sans-serif;
    --mono: 'JetBrains Mono', monospace;
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }

  html {
    scroll-behavior: smooth;
    scrollbar-width: thin;
    scrollbar-color: var(--accent-dim) var(--bg-primary);
  }

  body {
    background: var(--bg-primary);
    color: var(--text-primary);
    font-family: var(--sans);
    overflow-x: hidden;
  }

  ::selection {
    background: var(--accent);
    color: var(--bg-primary);
  }

  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(40px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes slideInLeft {
    from { opacity: 0; transform: translateX(-60px); }
    to { opacity: 1; transform: translateX(0); }
  }

  @keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }

  @keyframes marqueeReverse {
    0% { transform: translateX(-50%); }
    100% { transform: translateX(0); }
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }

  @keyframes grain {
    0%, 100% { transform: translate(0, 0); }
    10% { transform: translate(-5%, -10%); }
    20% { transform: translate(-15%, 5%); }
    30% { transform: translate(7%, -25%); }
    40% { transform: translate(-5%, 25%); }
    50% { transform: translate(-15%, 10%); }
    60% { transform: translate(15%, 0%); }
    70% { transform: translate(0%, 15%); }
    80% { transform: translate(3%, 35%); }
    90% { transform: translate(-10%, 10%); }
  }

  @keyframes borderGlow {
    0%, 100% { border-color: var(--border); }
    50% { border-color: var(--border-glow); }
  }

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-8px); }
  }

  .visible {
    animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }

  .nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    padding: 0 clamp(24px, 5vw, 80px);
    height: 72px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #08090ccc;
    backdrop-filter: blur(20px) saturate(180%);
    border-bottom: 1px solid var(--border);
    transition: all 0.4s ease;
  }

  .nav.scrolled {
    background: #08090cee;
    border-bottom-color: var(--border-glow);
  }

  .nav-logo {
    font-family: var(--serif);
    font-size: 1.6rem;
    color: var(--text-primary);
    text-decoration: none;
    letter-spacing: -0.02em;
  }

  .nav-logo span {
    color: var(--accent);
  }

  .nav-links {
    display: flex;
    gap: 32px;
    list-style: none;
    align-items: center;
  }

  .nav-links a {
    color: var(--text-secondary);
    text-decoration: none;
    font-size: 0.875rem;
    font-weight: 500;
    letter-spacing: 0.02em;
    transition: color 0.3s;
    position: relative;
  }

  .nav-links a::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 1px;
    background: var(--accent);
    transition: width 0.3s ease;
  }

  .nav-links a:hover { color: var(--text-primary); }
  .nav-links a:hover::after { width: 100%; }

  .nav-cta {
    background: var(--accent) !important;
    color: var(--bg-primary) !important;
    padding: 8px 20px;
    border-radius: 6px;
    font-weight: 600 !important;
    font-size: 0.8rem !important;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    transition: all 0.3s ease !important;
  }

  .nav-cta:hover {
    background: var(--accent-bright) !important;
    box-shadow: 0 0 24px var(--accent-glow);
  }

  .nav-cta::after { display: none !important; }

  .mobile-toggle {
    display: none;
    background: none;
    border: none;
    color: var(--text-primary);
    font-size: 1.5rem;
    cursor: pointer;
  }

  /* HERO */
  .hero {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: clamp(120px, 15vh, 200px) clamp(24px, 8vw, 120px) clamp(60px, 8vh, 100px);
    position: relative;
    overflow: hidden;
  }

  .hero::before {
    content: '';
    position: absolute;
    top: -20%;
    right: -10%;
    width: 700px;
    height: 700px;
    background: radial-gradient(circle, var(--accent-glow) 0%, transparent 70%);
    pointer-events: none;
  }

  .hero::after {
    content: '';
    position: absolute;
    inset: 0;
    background: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
    pointer-events: none;
    opacity: 0.5;
    animation: grain 8s steps(10) infinite;
  }

  .hero-tag {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 16px;
    border: 1px solid var(--border);
    border-radius: 100px;
    font-size: 0.8rem;
    color: var(--text-secondary);
    font-weight: 500;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    width: fit-content;
    margin-bottom: 32px;
    animation: fadeIn 0.6s ease forwards;
    backdrop-filter: blur(8px);
  }

  .hero-tag .dot {
    width: 6px;
    height: 6px;
    background: #4ade80;
    border-radius: 50%;
    animation: pulse 2s ease infinite;
  }

  .hero h1 {
    font-family: var(--serif);
    font-size: clamp(3rem, 8vw, 7rem);
    line-height: 1.05;
    font-weight: 400;
    letter-spacing: -0.03em;
    margin-bottom: 28px;
    animation: slideInLeft 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.15s backwards;
    position: relative;
    z-index: 1;
  }

  .hero h1 em {
    font-style: italic;
    color: var(--accent);
  }

  .hero-sub {
    font-size: clamp(1rem, 1.8vw, 1.25rem);
    color: var(--text-secondary);
    max-width: 560px;
    line-height: 1.7;
    margin-bottom: 48px;
    animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.35s backwards;
    position: relative;
    z-index: 1;
  }

  .hero-actions {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.5s backwards;
    position: relative;
    z-index: 1;
  }

  .btn-primary {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 14px 32px;
    background: var(--accent);
    color: var(--bg-primary);
    border: none;
    border-radius: 8px;
    font-family: var(--sans);
    font-size: 0.9rem;
    font-weight: 600;
    letter-spacing: 0.02em;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
  }

  .btn-primary:hover {
    background: var(--accent-bright);
    box-shadow: 0 0 40px var(--accent-glow), 0 8px 32px #00000060;
    transform: translateY(-2px);
  }

  .btn-ghost {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 14px 32px;
    background: transparent;
    color: var(--text-primary);
    border: 1px solid var(--border);
    border-radius: 8px;
    font-family: var(--sans);
    font-size: 0.9rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
  }

  .btn-ghost:hover {
    border-color: var(--accent-dim);
    background: var(--accent-glow);
  }

  .hero-stats {
    display: flex;
    gap: 48px;
    margin-top: 72px;
    padding-top: 40px;
    border-top: 1px solid var(--border);
    animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.65s backwards;
    position: relative;
    z-index: 1;
  }

  .stat h3 {
    font-family: var(--serif);
    font-size: 2.2rem;
    color: var(--accent);
    font-weight: 400;
    line-height: 1;
  }

  .stat p {
    color: var(--text-muted);
    font-size: 0.8rem;
    margin-top: 6px;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    font-weight: 500;
  }

  /* MARQUEE STRIP */
  .marquee-strip {
    padding: 16px 0;
    background: var(--bg-secondary);
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
    overflow: hidden;
    position: relative;
  }

  .marquee-track {
    display: flex;
    width: max-content;
    animation: marquee 40s linear infinite;
  }

  .marquee-strip:nth-of-type(even) .marquee-track {
    animation: marqueeReverse 35s linear infinite;
  }

  .marquee-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 0 32px;
    white-space: nowrap;
    font-size: 0.85rem;
    font-weight: 500;
    color: var(--text-muted);
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }

  .marquee-item .sep {
    width: 4px;
    height: 4px;
    background: var(--accent);
    border-radius: 50%;
    flex-shrink: 0;
  }

  /* SECTIONS */
  .section {
    padding: clamp(60px, 10vh, 120px) clamp(24px, 8vw, 120px);
    position: relative;
  }

  .section-label {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 20px;
    font-family: var(--mono);
  }

  .section-label::before {
    content: '';
    width: 24px;
    height: 1px;
    background: var(--accent);
  }

  .section-title {
    font-family: var(--serif);
    font-size: clamp(2rem, 4.5vw, 3.5rem);
    font-weight: 400;
    letter-spacing: -0.02em;
    line-height: 1.15;
    margin-bottom: 16px;
  }

  .section-title em {
    font-style: italic;
    color: var(--accent);
  }

  .section-desc {
    color: var(--text-secondary);
    max-width: 600px;
    line-height: 1.7;
    font-size: 1.05rem;
    margin-bottom: 56px;
  }

  /* ABOUT */
  .about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 64px;
    align-items: start;
  }

  .about-text p {
    color: var(--text-secondary);
    line-height: 1.8;
    font-size: 1.05rem;
    margin-bottom: 20px;
  }

  .about-text p strong {
    color: var(--text-primary);
    font-weight: 600;
  }

  .about-highlights {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-top: 40px;
  }

  .highlight-card {
    padding: 24px;
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 12px;
    transition: all 0.4s ease;
  }

  .highlight-card:hover {
    border-color: var(--border-glow);
    background: var(--bg-card-hover);
    transform: translateY(-4px);
    box-shadow: 0 12px 40px #00000040;
  }

  .highlight-card h4 {
    font-family: var(--serif);
    font-size: 1.6rem;
    color: var(--accent);
    font-weight: 400;
    margin-bottom: 6px;
  }

  .highlight-card p {
    color: var(--text-muted);
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    font-weight: 500;
  }

  /* SKILLS */
  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
  }

  .skill-card {
    padding: 32px;
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 16px;
    transition: all 0.4s ease;
    position: relative;
    overflow: hidden;
  }

  .skill-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, var(--accent), transparent);
    opacity: 0;
    transition: opacity 0.4s;
  }

  .skill-card:hover::before { opacity: 1; }

  .skill-card:hover {
    border-color: var(--border-glow);
    background: var(--bg-card-hover);
    transform: translateY(-6px);
    box-shadow: 0 20px 60px #00000040;
  }

  .skill-icon {
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    background: var(--accent-glow);
    border: 1px solid var(--accent-dim);
    margin-bottom: 20px;
    font-size: 1.3rem;
  }

  .skill-card h3 {
    font-family: var(--sans);
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 10px;
    letter-spacing: -0.01em;
  }

  .skill-card p {
    color: var(--text-secondary);
    font-size: 0.9rem;
    line-height: 1.6;
    margin-bottom: 16px;
  }

  .skill-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .skill-tag {
    padding: 4px 12px;
    background: var(--bg-primary);
    border: 1px solid var(--border);
    border-radius: 100px;
    font-size: 0.75rem;
    color: var(--text-muted);
    font-family: var(--mono);
    font-weight: 500;
    transition: all 0.3s;
  }

  .skill-card:hover .skill-tag {
    border-color: var(--accent-dim);
    color: var(--text-secondary);
  }

  /* PROJECTS */
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
    gap: 24px;
  }

  .project-card {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 16px;
    overflow: hidden;
    transition: all 0.4s ease;
    cursor: pointer;
  }

  .project-card:hover {
    border-color: var(--border-glow);
    transform: translateY(-8px);
    box-shadow: 0 24px 64px #00000050;
  }

  .project-banner {
    height: 200px;
    position: relative;
    overflow: hidden;
  }

  .project-banner-bg {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--serif);
    font-size: 3rem;
    color: var(--accent);
    opacity: 0.15;
    letter-spacing: -0.02em;
  }

  .project-status {
    position: absolute;
    top: 16px;
    right: 16px;
    padding: 4px 12px;
    border-radius: 100px;
    font-size: 0.7rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  .status-live {
    background: #4ade8020;
    color: #4ade80;
    border: 1px solid #4ade8030;
  }

  .status-wip {
    background: #facc1520;
    color: #facc15;
    border: 1px solid #facc1530;
  }

  .status-archived {
    background: #8a8d9b15;
    color: var(--text-muted);
    border: 1px solid var(--border);
  }

  .project-body {
    padding: 28px;
  }

  .project-body h3 {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 10px;
    letter-spacing: -0.01em;
  }

  .project-body p {
    color: var(--text-secondary);
    font-size: 0.9rem;
    line-height: 1.6;
    margin-bottom: 20px;
  }

  .project-tech {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }

  .project-tech span {
    padding: 4px 10px;
    background: var(--bg-primary);
    border: 1px solid var(--border);
    border-radius: 6px;
    font-size: 0.72rem;
    color: var(--accent);
    font-family: var(--mono);
    font-weight: 500;
  }

  /* ARTICLES */
  .articles-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 24px;
  }

  .article-card {
    padding: 32px;
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 16px;
    transition: all 0.4s ease;
    cursor: pointer;
    display: flex;
    flex-direction: column;
  }

  .article-card:hover {
    border-color: var(--border-glow);
    transform: translateY(-6px);
    box-shadow: 0 20px 60px #00000040;
  }

  .article-meta {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 16px;
    font-size: 0.78rem;
    color: var(--text-muted);
    font-family: var(--mono);
  }

  .article-category {
    padding: 3px 10px;
    background: var(--accent-glow);
    border: 1px solid var(--accent-dim);
    border-radius: 4px;
    color: var(--accent);
    font-weight: 500;
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }

  .article-card h3 {
    font-size: 1.15rem;
    font-weight: 600;
    margin-bottom: 12px;
    letter-spacing: -0.01em;
    line-height: 1.4;
  }

  .article-card p {
    color: var(--text-secondary);
    font-size: 0.9rem;
    line-height: 1.6;
    flex: 1;
  }

  .article-read {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    margin-top: 20px;
    color: var(--accent);
    font-size: 0.85rem;
    font-weight: 500;
    transition: gap 0.3s;
  }

  .article-card:hover .article-read { gap: 12px; }

  /* TESTIMONIALS */
  .testimonials-track {
    display: flex;
    gap: 24px;
    overflow: hidden;
    position: relative;
  }

  .testimonials-track::before,
  .testimonials-track::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 120px;
    z-index: 2;
    pointer-events: none;
  }

  .testimonials-track::before {
    left: 0;
    background: linear-gradient(90deg, var(--bg-primary), transparent);
  }

  .testimonials-track::after {
    right: 0;
    background: linear-gradient(-90deg, var(--bg-primary), transparent);
  }

  .testimonial-scroll {
    display: flex;
    gap: 24px;
    animation: marquee 50s linear infinite;
  }

  .testimonial-card {
    min-width: 400px;
    max-width: 400px;
    padding: 32px;
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 16px;
    flex-shrink: 0;
    transition: all 0.3s;
  }

  .testimonial-card:hover {
    border-color: var(--border-glow);
  }

  .testimonial-stars {
    display: flex;
    gap: 4px;
    margin-bottom: 16px;
    color: var(--accent);
    font-size: 0.9rem;
  }

  .testimonial-card blockquote {
    color: var(--text-secondary);
    font-size: 0.95rem;
    line-height: 1.7;
    margin-bottom: 24px;
    font-style: italic;
  }

  .testimonial-author {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .testimonial-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--accent-dim), var(--accent));
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--bg-primary);
    font-weight: 700;
    font-size: 0.85rem;
  }

  .testimonial-author h4 {
    font-size: 0.9rem;
    font-weight: 600;
  }

  .testimonial-author p {
    font-size: 0.78rem;
    color: var(--text-muted);
  }

  /* CONTACT / CTA */
  .cta-section {
    text-align: center;
    padding: clamp(80px, 12vh, 160px) clamp(24px, 8vw, 120px);
    position: relative;
    overflow: hidden;
  }

  .cta-section::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, var(--accent-glow) 0%, transparent 70%);
    pointer-events: none;
  }

  .cta-section .section-title {
    max-width: 700px;
    margin: 0 auto 16px;
  }

  .cta-section .section-desc {
    margin: 0 auto 48px;
    text-align: center;
  }

  .cta-links {
    display: flex;
    justify-content: center;
    gap: 16px;
    flex-wrap: wrap;
    margin-top: 32px;
    position: relative;
    z-index: 1;
  }

  .cta-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 12px 24px;
    border: 1px solid var(--border);
    border-radius: 10px;
    color: var(--text-secondary);
    text-decoration: none;
    font-size: 0.85rem;
    font-weight: 500;
    transition: all 0.3s;
    background: var(--bg-card);
  }

  .cta-link:hover {
    border-color: var(--accent-dim);
    color: var(--text-primary);
    background: var(--bg-card-hover);
    transform: translateY(-2px);
    box-shadow: 0 8px 32px #00000030;
  }

  /* FOOTER */
  .footer {
    padding: 32px clamp(24px, 8vw, 120px);
    border-top: 1px solid var(--border);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 16px;
  }

  .footer p {
    color: var(--text-muted);
    font-size: 0.8rem;
  }

  .footer-links {
    display: flex;
    gap: 24px;
  }

  .footer-links a {
    color: var(--text-muted);
    text-decoration: none;
    font-size: 0.8rem;
    transition: color 0.3s;
  }

  .footer-links a:hover { color: var(--accent); }

  /* RESPONSIVE */
  @media (max-width: 900px) {
    .about-grid { grid-template-columns: 1fr; gap: 40px; }
    .projects-grid { grid-template-columns: 1fr; }
    .hero-stats { gap: 32px; flex-wrap: wrap; }
    .nav-links { display: none; }
    .mobile-toggle { display: block; }
    .testimonial-card { min-width: 320px; max-width: 320px; }
  }

  @media (max-width: 600px) {
    .about-highlights { grid-template-columns: 1fr; }
    .articles-grid { grid-template-columns: 1fr; }
    .hero-stats { gap: 24px; }
    .stat h3 { font-size: 1.6rem; }
  }
`;

function useScrollReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("visible"); obs.unobserve(el); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function Reveal({ children, className = "", style = {} }) {
  const ref = useScrollReveal();
  return <div ref={ref} className={className} style={{ opacity: 0, ...style }}>{children}</div>;
}

const SKILLS = [
  { icon: "⬡", title: "Backend Engineering", desc: "Designing robust APIs, background jobs, and data-heavy systems built for scale.", tags: ["Ruby on Rails", "PostgreSQL", "Sidekiq", "REST APIs"] },
  { icon: "◈", title: "Database Architecture", desc: "Schema design, query optimization, and working across relational and analytical stores.", tags: ["PostgreSQL", "ClickHouse", "pgvector", "SQL"] },
  { icon: "△", title: "System Design", desc: "Distributed architectures, caching strategies, pub/sub systems, and payroll pipelines.", tags: ["Redis", "Saga Pattern", "gRPC", "Pub/Sub"] },
  { icon: "◉", title: "AI Integration", desc: "Building RAG pipelines, AI tutor backends, and integrating LLMs into production apps.", tags: ["OpenAI", "pgvector", "RAG", "LLMs"] },
  { icon: "□", title: "Frontend (Learning)", desc: "Growing React skills through hands-on projects, building toward full-stack fluency.", tags: ["React", "JavaScript", "Tailwind", "HTML/CSS"] },
  { icon: "◇", title: "Dev Tooling & Ops", desc: "CI/CD workflows, Git strategies, deployment pipelines, and developer experience.", tags: ["Git", "GitLab", "Docker", "CI/CD"] },
];

const PROJECTS = [
  { title: "AI Tutor Platform", desc: "Backend for an AI tutor app targeting students in classes 1–8. Built with Rails, OpenAI services, pgvector, and RAG-based content understanding.", tech: ["Rails", "OpenAI", "pgvector", "Sidekiq", "RAG"], status: "live", gradient: "linear-gradient(135deg, #1a1520, #0c1a18)" },
  { title: "Agent Rankings System", desc: "Precomputed agent ranking engine using SQL window functions (ROW_NUMBER, RANK, DENSE_RANK) with background job refresh cycles.", tech: ["Rails", "PostgreSQL", "SQL", "Sidekiq"], status: "live", gradient: "linear-gradient(135deg, #0d1520, #1a150d)" },
  { title: "Payroll Architecture", desc: "End-to-end payroll system with CSV/Excel parsing, currency handling, invoice models, and financial data pipelines.", tech: ["Rails", "PostgreSQL", "CSV/Excel", "RSpec"], status: "live", gradient: "linear-gradient(135deg, #150d1a, #0d1a15)" },
  { title: "Monorepo Product (WIP)", desc: "New product with separate frontend/backend in a monorepo, leveraging Claude Code with optimized CLAUDE.md files.", tech: ["Rails", "React", "Claude Code", "Monorepo"], status: "wip", gradient: "linear-gradient(135deg, #1a1a0d, #0d151a)" },
];

const ARTICLES = [
  { title: "Understanding SOLID Principles in Ruby", desc: "A deep dive into all five SOLID principles with practical Ruby examples and real-world patterns.", category: "Ruby", date: "2025" },
  { title: "SQL Window Functions: A Practical Guide", desc: "How ROW_NUMBER, RANK, and DENSE_RANK work and when to use each in production ranking systems.", category: "SQL", date: "2025" },
  { title: "Structuring CLAUDE.md for Better AI Output", desc: "Lessons learned optimizing Claude Code configuration files to minimize tokens and maximize code quality.", category: "AI Tooling", date: "2025" },
  { title: "Ruby Class Hierarchy Deep Dive", desc: "Navigating instance variables, class instance variables, and class variables in Ruby inheritance chains.", category: "Ruby", date: "2025" },
];

const TESTIMONIALS = [
  { name: "Team Lead", role: "Shuru Tech", quote: "Deepak consistently delivers clean, well-tested code. His database optimization skills have significantly improved our query performance across the board.", initials: "TL" },
  { name: "Senior Developer", role: "Colleague", quote: "Working with Deepak on the payroll system was great. He has a keen eye for edge cases and writes thorough RSpec tests that catch issues early.", initials: "SD" },
  { name: "Product Manager", role: "Shuru Tech", quote: "Deepak's work on the AI tutor backend exceeded our expectations. He architected the RAG pipeline thoughtfully and delivered ahead of schedule.", initials: "PM" },
  { name: "Engineering Peer", role: "Collaborator", quote: "His understanding of PostgreSQL and ClickHouse is impressive. He migrated complex queries between the two with minimal downtime.", initials: "EP" },
];

const MARQUEE_ITEMS = [
  "Ruby on Rails", "PostgreSQL", "ClickHouse", "Sidekiq", "Redis", "RSpec", "React", "JavaScript",
  "OpenAI", "pgvector", "RAG", "SQL", "Git", "Docker", "REST APIs", "System Design",
];

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = STYLES;
    document.head.appendChild(style);
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => { window.removeEventListener("scroll", onScroll); document.head.removeChild(style); };
  }, []);

  const marqueeItems = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div>
      {/* NAV */}
      <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
        <a href="#" className="nav-logo">D<span>.</span></a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Work</a></li>
          <li><a href="#articles">Articles</a></li>
          <li><a href="#testimonials">Voices</a></li>
          <li><a href="#contact" className="nav-cta">Get in Touch</a></li>
        </ul>
        <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-tag">
          <span className="dot"></span>
          Available for opportunities
        </div>
        <h1>Building <em>reliable</em><br />systems that scale</h1>
        <p className="hero-sub">
          Backend engineer crafting robust Rails applications, optimizing databases,
          and integrating AI — currently at Shuru Tech building products that matter.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn-primary">View My Work →</a>
          <a href="#contact" className="btn-ghost">Let's Connect</a>
        </div>
        <div className="hero-stats">
          <div className="stat"><h3>3+</h3><p>Years Experience</p></div>
          <div className="stat"><h3>Rails</h3><p>Primary Stack</p></div>
          <div className="stat"><h3>AI</h3><p>Current Focus</p></div>
          <div className="stat"><h3>∞</h3><p>Curiosity</p></div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee-strip">
        <div className="marquee-track">
          {marqueeItems.map((item, i) => (
            <span className="marquee-item" key={i}>
              <span className="sep"></span>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section className="section" id="about">
        <Reveal>
          <span className="section-label">01 — About</span>
          <h2 className="section-title">Crafting code with <em>intention</em></h2>
        </Reveal>
        <div className="about-grid" style={{ marginTop: 40 }}>
          <Reveal>
            <div className="about-text">
              <p>
                I'm <strong>Deepak</strong>, a backend engineer at <strong>Shuru Tech</strong> where I work on
                systems involving financial data, agent statistics, payroll architecture, and database optimization.
              </p>
              <p>
                My day-to-day revolves around <strong>Ruby on Rails</strong>, <strong>PostgreSQL</strong>, and
                <strong> ClickHouse</strong> — building APIs, background jobs with Sidekiq, and ensuring data
                integrity at scale. I've consciously chosen to stay hands-on with technical work over
                management roles.
              </p>
              <p>
                Right now I'm diving deeper into <strong>AI integration</strong> — building RAG pipelines with
                pgvector, working with OpenAI services, and architecting an AI tutor platform for students.
                I'm also picking up <strong>React</strong> to move toward full-stack capability.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="about-highlights">
              <div className="highlight-card">
                <h4>Backend</h4>
                <p>Core Strength</p>
              </div>
              <div className="highlight-card">
                <h4>SQL</h4>
                <p>Deep Expertise</p>
              </div>
              <div className="highlight-card">
                <h4>AI/ML</h4>
                <p>Active Growth</p>
              </div>
              <div className="highlight-card">
                <h4>React</h4>
                <p>Learning Path</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SKILLS */}
      <section className="section" id="skills" style={{ background: "var(--bg-secondary)" }}>
        <Reveal>
          <span className="section-label">02 — Skills</span>
          <h2 className="section-title">What I <em>bring</em> to the table</h2>
          <p className="section-desc">
            Core competencies honed through real-world production systems, complex debugging sessions,
            and a relentless drive to understand things deeply.
          </p>
        </Reveal>
        <div className="skills-grid">
          {SKILLS.map((s, i) => (
            <Reveal key={i}>
              <div className="skill-card">
                <div className="skill-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className="skill-tags">
                  {s.tags.map((t, j) => <span key={j} className="skill-tag">{t}</span>)}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section" id="projects">
        <Reveal>
          <span className="section-label">03 — Work</span>
          <h2 className="section-title">Systems I've <em>built</em></h2>
          <p className="section-desc">
            Production systems handling real data, real users, and real stakes.
          </p>
        </Reveal>
        <div className="projects-grid">
          {PROJECTS.map((p, i) => (
            <Reveal key={i}>
              <div className="project-card">
                <div className="project-banner" style={{ background: p.gradient }}>
                  <div className="project-banner-bg">{p.title.split(" ")[0]}</div>
                  <span className={`project-status status-${p.status}`}>
                    {p.status === "live" ? "● Production" : p.status === "wip" ? "◐ In Progress" : "○ Archived"}
                  </span>
                </div>
                <div className="project-body">
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <div className="project-tech">
                    {p.tech.map((t, j) => <span key={j}>{t}</span>)}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ARTICLES */}
      <section className="section" id="articles" style={{ background: "var(--bg-secondary)" }}>
        <Reveal>
          <span className="section-label">04 — Articles</span>
          <h2 className="section-title">Thoughts & <em>learnings</em></h2>
          <p className="section-desc">
            Writing about what I learn — from Ruby internals to database patterns to AI tooling.
          </p>
        </Reveal>
        <div className="articles-grid">
          {ARTICLES.map((a, i) => (
            <Reveal key={i}>
              <div className="article-card">
                <div className="article-meta">
                  <span className="article-category">{a.category}</span>
                  <span>{a.date}</span>
                </div>
                <h3>{a.title}</h3>
                <p>{a.desc}</p>
                <span className="article-read">Read more →</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* MARQUEE 2 */}
      <div className="marquee-strip">
        <div className="marquee-track" style={{ animationDirection: "reverse" }}>
          {marqueeItems.map((item, i) => (
            <span className="marquee-item" key={i}>
              <span className="sep"></span>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* TESTIMONIALS */}
      <section className="section" id="testimonials">
        <Reveal>
          <span className="section-label">05 — Voices</span>
          <h2 className="section-title">What people <em>say</em></h2>
        </Reveal>
        <div className="testimonials-track" style={{ marginTop: 40 }}>
          <div className="testimonial-scroll">
            {[...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
              <div key={i} className="testimonial-card">
                <div className="testimonial-stars">{"★★★★★"}</div>
                <blockquote>"{t.quote}"</blockquote>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{t.initials}</div>
                  <div>
                    <h4>{t.name}</h4>
                    <p>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / CONTACT */}
      <section className="cta-section" id="contact">
        <Reveal>
          <span className="section-label">06 — Connect</span>
          <h2 className="section-title">Let's build something <em>great</em> together</h2>
          <p className="section-desc">
            Open to interesting backend challenges, AI projects, and collaborative work.
            Drop me a line — I'd love to hear from you.
          </p>
          <a href="mailto:deepak@example.com" className="btn-primary" style={{ position: "relative", zIndex: 1 }}>
            Say Hello →
          </a>
          <div className="cta-links">
            <a href="#" className="cta-link">◆ GitHub</a>
            <a href="#" className="cta-link">◆ LinkedIn</a>
            <a href="#" className="cta-link">◆ Twitter / X</a>
            <a href="mailto:deepak@example.com" className="cta-link">◆ Email</a>
          </div>
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 Deepak. Built with intention.</p>
        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#projects">Work</a>
          <a href="#articles">Articles</a>
          <a href="#contact">Contact</a>
        </div>
      </footer>
    </div>
  );
}
