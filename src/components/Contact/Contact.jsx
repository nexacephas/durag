import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <div className="container contact-container">

        {/* Text */}
        <div className="contact-text">
          <h2>Connect With Vibez360Waves</h2>
          <p>
            Questions? Feedback? Want to level up your wave game? 
            Reach out and let’s elevate together.
          </p>
        </div>

        {/* Contact Info */}
        <div className="contact-info">
          <div className="info-card">
            <FiMail className="icon" />
            <p>Vibez360waves@gmail.com</p>
          </div>
          <div className="info-card">
            <FiPhone className="icon" />
            <p>08107333507</p>
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
