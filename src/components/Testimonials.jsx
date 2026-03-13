import Reveal from './Reveal';
import { TESTIMONIALS } from '../data/content';

// Tripled to create a seamless infinite scroll loop.
const items = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];

export default function Testimonials() {
  return (
    <section className="section" id="testimonials">
      <Reveal>
        <span className="section-label">05 — Voices</span>
        <h2 className="section-title">What people <em>say</em></h2>
      </Reveal>
      <div className="testimonials-track" style={{ marginTop: 40 }}>
        <div className="testimonial-scroll">
          {items.map((t, i) => (
            <div key={i} className="testimonial-card">
              <div className="testimonial-stars">{'★★★★★'}</div>
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
  );
}
