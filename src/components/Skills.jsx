import Reveal from './Reveal';
import { SKILLS } from '../data/content';

export default function Skills() {
  return (
    <section className="section" id="skills" style={{ background: 'var(--bg-secondary)' }}>
      <Reveal>
        <span className="section-label">02 — Skills</span>
        <h2 className="section-title">What I <em>bring</em> to the table</h2>
        <p className="section-desc">
          Core competencies honed through real-world production systems, complex debugging sessions,
          and a relentless drive to understand things deeply.
        </p>
      </Reveal>
      <div className="skills-grid">
        {SKILLS.map((skill, i) => (
          <Reveal key={i}>
            <div className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.title}</h3>
              <p>{skill.desc}</p>
              <div className="skill-tags">
                {skill.tags.map((tag, j) => (
                  <span key={j} className="skill-tag">{tag}</span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
