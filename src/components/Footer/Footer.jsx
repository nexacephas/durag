import { FiInstagram, FiTwitter, FiFacebook } from "react-icons/fi";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        {/* Newsletter */}
        <div className="footer-newsletter">
          <h3>Subscribe to Our Newsletter</h3>
          <p>Stay updated on new arrivals and exclusive offers.</p>
          <form>
            <input type="email" placeholder="Your email" />
            <button className="btn btn-dark">Subscribe</button>
          </form>
        </div>

        {/* Links */}
        <div className="footer-links">
          <div>
            <h4>Company</h4>
            <ul>
              <li>About</li>
              <li>Contact</li>
              <li>Careers</li>
            </ul>
          </div>
          <div>
            <h4>Shop</h4>
            <ul>
              <li>Best Sellers</li>
              <li>New Arrivals</li>
              <li>Collections</li>
            </ul>
          </div>
        </div>

        {/* Social */}
        <div className="footer-social">
          <FiInstagram />
          <FiTwitter />
          <FiFacebook />
        </div>

        <p className="footer-copy">© 2026 OREMU. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
