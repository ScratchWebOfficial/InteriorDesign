import React, { useState, useEffect, useCallback } from "react";
import "../styles/ResearchSection.css";

// Put these two images in: src/assets/images/
import imgTop100 from "../assets/images/research-1.jpg";   // yellow staircase (Top 100)
import imgHospitality from "../assets/images/research-2.jpg"; // b/w hospitality banner

const SLIDES = [
  {
    categoryHeading: "awards & research",
    tag: "RESEARCH",
    title: "Unveiling Interior Design’s 2025 Top 100 Giants",
    image: imgTop100,
  },
  {
    categoryHeading: "awards & research",
    tag: "RESEARCH",
    title: "Announcing Interior Design’s 2025 Hospitality Giants",
    image: imgHospitality,
  },
];

export default function ResearchSection() {
  // start on Hospitality (index 1) so clicking ← shows the Top 100 slide (index 0)
  const [index, setIndex] = useState(1);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length);
  }, []);
  const next = useCallback(() => {
    setIndex((i) => (i + 1) % SLIDES.length);
  }, []);

  // optional: keyboard support
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  const s = SLIDES[index];

  return (
    <section className="research-section">
      <div className="research-container">
        {/* small heading above image */}
        <h3 className="research-kicker"><em>{s.categoryHeading}</em></h3>

        {/* Image */}
        <div className="research-image">
          <img src={s.image} alt={s.title} />
        </div>

        {/* Text */}
        <div className="research-text">
          <p className="research-tag">{s.tag}</p>
          <h2 className="research-heading">
            <em>{s.title}</em>
          </h2>
        </div>

        {/* Arrows */}
        <div className="research-nav">
          <button className="nav-btn" aria-label="Previous" onClick={prev}>←</button>
          <button className="nav-btn" aria-label="Next" onClick={next}>→</button>
        </div>
      </div>
    </section>
  );
}
