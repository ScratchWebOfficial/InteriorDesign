import React from "react";
import "../styles/ProductSpotlight.css";

export default function ProductSpotlight({
  image,
  tag = "PRODUCTS",
  title = "Lawson-Fenning’s NoHo Shop Glows With Terra-Cotta Hues",
}) {
  return (
    <section className="ps-section">
      <div className="ps-container">
        <h2 className="ps-heading"><em>product spotlight</em></h2>

        <div className="ps-main">
          <img src={image} alt={title} />
        </div>

        <div className="ps-caption">
          <p className="ps-tag">{tag}</p>
          <h3 className="ps-title"><em>{title}</em></h3>
        </div>
      </div>
    </section>
  );
}
