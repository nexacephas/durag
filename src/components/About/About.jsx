import "./About.css";
import Aboutimg from "../../assets/STMNT Grooming Goods Fiber Pomade _ Semi-Matte Finish _ Strong Control _ Easy To Wash Out.jpg";

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="container about-container">
        
        {/* Text */}
        <div className="about-text">
          <h2>About Vibez360Waves</h2>

          <p>
            Vibez360Waves is more than a grooming brand — it is a 
            fashion-forward culture built around mastery, discipline, 
            and self-expression.
          </p>

          <p>
            Born from a deep passion for 360 waves, grooming, and personal style, 
            our mission is to help individuals develop elite waves while 
            presenting themselves with confidence and intention.
          </p>

          <p>
            We believe style begins within — and is completed through 
            discipline, consistency, and identity.
          </p>

          <div className="about-signature">
            <span>Elite Waves.</span>
            <span>Elite Discipline.</span>
            <span>Elite Identity.</span>
          </div>
        </div>

        {/* Image */}
        <div className="about-image">
          <img src={Aboutimg} alt="Vibez360Waves Grooming" />
        </div>

      </div>
    </section>
  );
};

export default About;
