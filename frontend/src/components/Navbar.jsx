import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <span className="logo-blue">Career</span>Pilot AI
      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#features">Features</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="nav-buttons">
        <Link to="/login" className="login-btn">
          Login
        </Link>
        <Link to="/register" className="signup-btn">
          Get Started
        </Link>
      </div>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </div>
    </nav>
  );
}

export default Navbar;
