import "./About.css";
import Aboutimg from "../../assets/STMNT Grooming Goods Fiber Pomade _ Semi-Matte Finish _ Strong Control _ Easy To Wash Out.jpg";
const About = () => {
  return (
    <section className="about section">
      <div className="container about-container">
        {/* Text */}
        <div className="about-text">
          <h2>About OREMU</h2>
          <p>
            OREMU was born from a passion for minimalism, quality, and bold fashion statements. 
            Our collections are carefully curated to empower individuals to express themselves with confidence.
          </p>
          <p>
            Every piece we design balances style and functionality. We believe fashion should be timeless, 
            versatile, and luxurious without being excessive.
          </p>
        </div>

        {/* Image */}
        <div className="about-image">
          <img src={Aboutimg} alt="About OREMU" />
        </div>
      </div>
    </section>
  );
};

export default About;
