export default function Hero() {
  return (
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
  );
}
