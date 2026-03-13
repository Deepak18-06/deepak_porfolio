import Reveal from './Reveal';

export default function About() {
  return (
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
            <div className="highlight-card"><h4>Backend</h4><p>Core Strength</p></div>
            <div className="highlight-card"><h4>SQL</h4><p>Deep Expertise</p></div>
            <div className="highlight-card"><h4>AI/ML</h4><p>Active Growth</p></div>
            <div className="highlight-card"><h4>React</h4><p>Learning Path</p></div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
