import Reveal from './Reveal';
import ARTICLES from '../data/articles.json';

export default function Articles() {
  return (
    <section className="section" id="articles" style={{ background: 'var(--bg-secondary)' }}>
      <Reveal>
        <span className="section-label">04 — Articles</span>
        <h2 className="section-title">Thoughts & <em>learnings</em></h2>
        <p className="section-desc">
          Writing about what I learn — from Ruby internals to database patterns to AI tooling.
        </p>
      </Reveal>
      <div className="articles-grid">
        {ARTICLES.map((article, i) => (
          <Reveal key={i}>
            <div className="article-card">
              <div className="article-meta">
                <span className="article-category">{article.category}</span>
                <span>{article.date}</span>
              </div>
              <h3>{article.title}</h3>
              <p>{article.desc}</p>
              {article.url
                ? <a className="article-read" href={article.url} target="_blank" rel="noopener noreferrer">Read more →</a>
                : <span className="article-read">Read more →</span>
              }
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
