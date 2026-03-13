import Reveal from './Reveal';

export default function Contact() {
  return (
    <section className="cta-section" id="contact">
      <Reveal>
        <span className="section-label">06 — Connect</span>
        <h2 className="section-title">Let's build something <em>great</em> together</h2>
        <p className="section-desc">
          Open to interesting backend challenges, AI projects, and collaborative work.
          Drop me a line — I'd love to hear from you.
        </p>
        <a href="mailto:deepak@example.com" className="btn-primary" style={{ position: 'relative', zIndex: 1 }}>
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
  );
}
