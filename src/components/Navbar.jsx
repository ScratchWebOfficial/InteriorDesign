import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <button className="menu-btn">☰</button>
        <button className="search-btn">🔍</button>
      </div>

      <div className="nav-center">
        <h1 className="brand-name">
          <Link to="/" className="brand-link">
            INTERIOR DESIGN
          </Link>
        </h1>
      </div>

      <div className="nav-right">
        <Link to="/projects">PROJECTS</Link>
        <Link to="/products">PRODUCTS</Link>
        <Link to="/designwire">DESIGNWIRE</Link>
        <Link to="/homes">HOMES</Link>
        <Link to="/showroom">SHOWROOM SHOWCASE</Link>
      </div>
    </nav>
  );
}
