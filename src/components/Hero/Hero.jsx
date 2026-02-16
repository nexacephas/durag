import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay" />

      <div className="hero-content container">
        <span className="hero-tag">MASTERY • DISCIPLINE • STYLE</span>

        <h1>
          Elevate Your <br />
          Wave Game <br />
          Own Your Presence
        </h1>

        <p>
          Vibez360Waves is more than grooming — it’s a lifestyle.
          Built for those committed to elite 360 waves,
          confidence, and intentional self-expression.
        </p>

        <div className="hero-actions">
          <button className="btn btn-dark">Shop Essentials</button>
          <button className="btn outline">Join The Movement</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
