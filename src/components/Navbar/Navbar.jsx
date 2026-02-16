import { useState, useEffect } from "react";
import { FiShoppingBag, FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`navbar-wrapper ${scrolled ? "scrolled" : ""}`}>
        <nav className="navbar container">

          {/* Logo */}
          <div className="logo">
            <Link to="/">Vibez360Waves</Link>
          </div>

          {/* Desktop Links */}
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          {/* Right Actions */}
          <div className="nav-actions">
            <button className="login-btn"><Link to="/auth">Login</Link></button>

            <div
              className="cart-icon"
              onClick={() => setCartOpen(!cartOpen)}
            >
              <FiShoppingBag />
              <span className="cart-badge">0</span>

              {cartOpen && (
                <div className="cart-dropdown">
                  <p className="empty">Your cart is empty</p>
                  <button className="btn btn-dark full">View Cart</button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Icon */}
          <div className="menu-icon" onClick={() => setMenuOpen(true)}>
            <FiMenu />
          </div>
        </nav>
      </header>

      {/* ===== Mobile Drawer ===== */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <div className="mobile-header">
          <span>Menu</span>
          <FiX onClick={() => setMenuOpen(false)} />
        </div>
<ul className="mobile-links">
  <li>
    <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
  </li>
  <li>
    <Link to="/shop" onClick={() => setMenuOpen(false)}>Shop</Link>
  </li>
  <li>
    <Link to="/blog" onClick={() => setMenuOpen(false)}>Blog</Link>
  </li>
  <li>
    <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
  </li>
  <li>
    <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
  </li>
  <li className="login">
    <Link to="/auth" onClick={() => setMenuOpen(false)}>Login</Link>
  </li>
</ul>

      </div>

      {/* Overlay */}
      {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)} />}
    </>
  );
};

export default Navbar;
