import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay" />

      <div className="hero-content container">
        <span className="hero-tag">NEW COLLECTION 2026</span>

        <h1>
          Timeless <br />
          Fashion <br />
          For Modern Souls
        </h1>

        <p>
          Designed for those who move with confidence.
          Minimal. Bold. Unapologetically premium.
        </p>

        <div className="hero-actions">
          <button className="btn btn-dark">Shop Collection</button>
          <button className="btn outline">Explore Lookbook</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
