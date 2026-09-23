import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "About Us", href: "#about" },
    { label: "Earn With Garibook", href: "#how-it-works" },
    { label: "Garibook Business", href: "#offers" },
    { label: "Garibook Club", href: "#testimonials" },
    { label: "Campaign", href: "#contact" },
    { label: "Blogs", href: "#contact" },
  ];

  return (
    <header className="header">

      <div className="header-container">

        {/* Logo */}

        <a href="/" className="logo">
          <span className="logo-icon">
            <img src="images/Garibook_Logo.svg" alt="Garibook" />
          </span>
          <span className="logo-text">garibook</span>
        </a>

        {/* Desktop Navigation */}

        <nav className={`navigation ${menuOpen ? "active" : ""}`}>

          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}

        </nav>

        {/* Authentication Buttons */}

        <div className="header-actions">

          <a
            href="https://garibook.com/"
            className="login-btn"
          >
            Login
          </a>

          <a
            href="https://garibook.com/"
            className="signup-btn"
          >
            Sign Up
          </a>

        </div>

        {/* Mobile Menu Button */}

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>

    </header>
  );
}

export default Header;