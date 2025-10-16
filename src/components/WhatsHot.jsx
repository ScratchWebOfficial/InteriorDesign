import React from "react";
import "../styles/WhatsHot.css";

const items = [
  {
    tag: "PROJECTS",
    title: "Discover The Duality Of This Striking Brazilian Home",
    excerpt:
      "Casa 258 by Cornetta Arquitetura channels Latin American modernism through raw materiality and a deep connection to its forest surroundings.",
    image: "/assets/images/whats-hot-1.jpg",
    href: "#"
  },
  {
    tag: "DESIGNWIRE",
    title:
      "Office Design Meets Hospitality In This San Francisco Locale",
    excerpt:
      "Architecture Plus Information partners with Cushman & Wakefield to curate the vibe and character of The Cove, crafting a seamless amenity zone.",
    image: "/assets/images/whats-hot-2.jpg",
    href: "#"
  }
];

export default function WhatsHot() {
  return (
    <section className="wh-section">
      <div className="wh-container">
        <h2 className="wh-title"><em>what’s hot</em></h2>

        <div className="wh-grid">
          {items.map((it, i) => (
            <article key={i} className="wh-card">
              <a href={it.href} className="wh-media">
                <img src={it.image} alt={it.title} />
              </a>

              <div className="wh-meta">{it.tag}</div>
              <a href={it.href} className="wh-heading">{it.title}</a>
              <p className="wh-excerpt">{it.excerpt}</p>

              <hr className="wh-divider" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
