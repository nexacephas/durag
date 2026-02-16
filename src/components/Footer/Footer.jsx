import { FiInstagram, FiPhone, FiMail } from "react-icons/fi";
import { FaTiktok, FaYoutube } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">

        {/* Newsletter */}
        <div className="footer-newsletter">
          <h3>Join The Vibez Movement</h3>
          <p>
            Get grooming tips, wave mastery secrets, and exclusive drops.
          </p>
          <form>
            <input type="email" placeholder="Enter your email" />
            <button className="btn btn-dark">Subscribe</button>
          </form>
        </div>

        {/* Links */}
        <div className="footer-links">
          <div>
            <h4>Vibez360Waves</h4>
            <ul>
              <li>About</li>
              <li>Shop</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h4>Support</h4>
            <ul>
              <li>Shipping Policy</li>
              <li>Returns</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h4>Contact</h4>
          <p><FiPhone /> 08107333507</p>
          <p><FiMail /> Vibez360waves@gmail.com</p>
        </div>

        {/* Social */}
        <div className="footer-social">
          <FiInstagram />
          <FaTiktok />
          <FaYoutube />
        </div>

        <p className="footer-copy">
          © 2026 Vibez360Waves. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
