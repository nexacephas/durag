import { useState, useEffect } from "react";
import { FiShoppingBag, FiMenu, FiX } from "react-icons/fi";
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
          <div className="logo">OREMU</div>

          {/* Desktop Links */}
          <ul className="nav-links">
            <li>Home</li>
            <li>Shop</li>
            <li>Collection</li>
            <li>About</li>
          </ul>

          {/* Right Actions */}
          <div className="nav-actions">
            <button className="login-btn">Login</button>

            <div
              className="cart-icon"
              onClick={() => setCartOpen(!cartOpen)}
            >
              <FiShoppingBag />
              <span className="cart-badge">0</span>

              {/* Cart Dropdown */}
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
          <li>Home</li>
          <li>Shop</li>
          <li>Collection</li>
          <li>About</li>
          <li className="login">Login</li>
        </ul>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div className="overlay" onClick={() => setMenuOpen(false)} />
      )}
    </>
  );
};

export default Navbar;
