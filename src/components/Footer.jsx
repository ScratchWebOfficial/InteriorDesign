import React from "react";
import "../styles/Footer.css";
import {
  FaFacebookF,
  FaPinterestP,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTv,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Column 1: Logo + Social */}
        <div className="footer-column logo-col">
          <h1 className="footer-logo">
            INTERIOR <br /> DESIGN
          </h1>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaPinterestP /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaYoutube /></a>
            <a href="#"><FaTv /></a>
          </div>
        </div>

        {/* Column 2 */}
        <div className="footer-column">
          <ul>
            <li><a href="#">MEDIA KIT</a></li>
            <li><a href="#">READER SERVICES</a></li>
            <li><a href="#">JOBS IN DESIGN</a></li>
            <li><a href="#">CONTACT US</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-column">
          <ul>
            <li><a href="#">NEWSLETTER</a></li>
            <li><a href="#">SUBSCRIPTIONS</a></li>
            <li><a href="#">EDITORIAL SUBMISSIONS</a></li>
            <li><a href="#">SANDOW CAREERS</a></li>
          </ul>
        </div>

        {/* Column 4: Latest Issue */}
        <div className="footer-column issue-col">
          <h4>LATEST ISSUES:</h4>
          <img
            src="/assets/images/latest-issue.jpg"
            alt="Latest Interior Design Issue"
          />
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© 2025 SANDOW. ALL RIGHTS RESERVED.</p>
        <div className="bottom-links">
          <a href="#">PRIVACY POLICY</a>
          <a href="#">COOKIE POLICY</a>
          <a href="#">TERMS OF USE</a>
          <a href="#">DO NOT SELL OR SHARE MY PERSONAL INFORMATION</a>
        </div>
      </div>
    </footer>
  );
}
