import React from "react";
import "../styles/SidebarMenu.css";

export default function SidebarMenu({ isOpen, onClose }) {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-content">
        <button className="close-btn" onClick={onClose}>✕</button>

        {/* Left section with links */}
        <div className="sidebar-left">
          <ul>
            <li>PROJECTS</li>
            <li>PRODUCTS</li>
            <li>DESIGNWIRE</li>
            <li>HOMES</li>
            <li>SHOWROOM SHOWCASE</li>
            <hr />
            <li>BEST OF YEAR</li>
            <li>GIANTS OF DESIGN</li>
            <li>EVENTS</li>
            <li>NEWSLETTERS</li>
            <li>DESIGNTV</li>
            <li>DESIGN JOBS</li>
            <li>SHOWROOM SHOWCASE</li>
            <li>SUBSCRIBE</li>
          </ul>
        </div>

        {/* Right section (latest issue) */}
        <div className="sidebar-right">
          <p className="issue-text">Latest Issue: October 2025</p>
          <a href="#" className="subscribe-link">
            <em>subscribe</em>
          </a>
          <div className="issue-box">
            <img src="/assets/images/sidebar-issue.jpg" alt="Latest Issue" />
            <div className="issue-info">
              <p className="project-type">PROJECTS</p>
              <p>
                Recharge in a Restored Spanish Farmhouse in Menorca
              </p>
              <a href="#" className="read-more"><em>read more</em></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
