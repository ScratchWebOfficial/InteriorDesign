import React from "react";
import "../styles/HeroSection.css";
import heroImage from "../assets/images/hero.jpg";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-wrap">
        <img src={heroImage} alt="Country Home" className="hero-image" />
      </div>
      <div className="hero-text">
        <p className="project-tag">PROJECTS</p>
        <h2>
          How A Contemporary Country Home Connects To The Australian Landscape
        </h2>
      </div>
    </section>
  );
}
