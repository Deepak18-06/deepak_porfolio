import Reveal from './Reveal';
import PROJECTS from '../data/projects.json';

const STATUS_LABEL = {
  live: '● Production',
  wip: '◐ In Progress',
  archived: '○ Archived',
};

export default function Projects() {
  return (
    <section className="section" id="projects">
      <Reveal>
        <span className="section-label">03 — Work</span>
        <h2 className="section-title">Systems I've <em>built</em></h2>
        <p className="section-desc">
          Production systems handling real data, real users, and real stakes.
        </p>
      </Reveal>
      <div className="projects-grid">
        {PROJECTS.map((project, i) => (
          <Reveal key={i}>
            <div className="project-card">
              <div className="project-banner" style={{ background: project.gradient }}>
                <div className="project-banner-bg">{project.title.split(' ')[0]}</div>
                <span className={`project-status status-${project.status}`}>
                  {STATUS_LABEL[project.status]}
                </span>
              </div>
              <div className="project-body">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <div className="project-tech">
                  {project.tech.map((t, j) => <span key={j}>{t}</span>)}
                </div>
                {project.url && (
                  <a className="project-link" href={project.url} target="_blank" rel="noopener noreferrer">
                    View project →
                  </a>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
