import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const location = useLocation();

  return (
    <div className="header">
      {/* Top Navigation Bar */}
      <div className="navbar">
        <img src="/logo192.png" alt="Logo" className="logo" />
        <h1 className="app-title">ShopZee</h1>
        <div className="navbar-right">
          <i className="search-icon">🔍</i>
          <i className="profile-icon">👤</i>
          <select className="language-select">
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
          </select>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="nav-links">
        <Link
          to="/shop"
          className={`nav-link ${
            location.pathname === "/shop" ? "active" : ""
          }`}>
          Shop
        </Link>
        <Link
          to="/skills"
          className={`nav-link ${
            location.pathname === "/skills" ? "active" : ""
          }`}>
          Skills
        </Link>
        <Link
          to="/stores"
          className={`nav-link ${
            location.pathname === "/stores" ? "active" : ""
          }`}>
          Stores
        </Link>
        <Link
          to="/about"
          className={`nav-link ${
            location.pathname === "/about" ? "active" : ""
          }`}>
          About
        </Link>
        <Link
          to="/contactus"
          className={`nav-link ${
            location.pathname === "/contactus" ? "active" : ""
          }`}>
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Header;
