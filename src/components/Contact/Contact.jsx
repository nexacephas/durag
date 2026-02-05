import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact section">
      <div className="container contact-container">
        <div className="contact-text">
          <h2>Get In Touch</h2>
          <p>We’d love to hear from you. Reach out with questions or feedback!</p>
        </div>

        <div className="contact-info">
          <div className="info-card">
            <FiMail className="icon" />
            <p>hello@oremu.com</p>
          </div>
          <div className="info-card">
            <FiPhone className="icon" />
            <p>+234 800 000 0000</p>
          </div>
          <div className="info-card">
            <FiMapPin className="icon" />
            <p>Lagos, Nigeria</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
