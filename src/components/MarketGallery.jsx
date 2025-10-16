import React from "react";
import "../styles/MarketGallery.css";

const galleryItems = [
  {
    img: "/assets/images/market-1.jpg",
    alt: "Tile texture",
  },
  {
    img: "/assets/images/market-2.jpg",
    alt: "Green chair with table",
  },
  {
    img: "/assets/images/market-3.jpg",
    alt: "Wall panel design",
  },
  {
    img: "/assets/images/market-4.jpg",
    alt: "Blue chair",
  },
];

export default function MarketGallery() {
  return (
    <section className="market-section">
      <div className="market-container">
        {/* Headings */}
        <div className="market-header">
          <h1 className="market-title left">MARKET</h1>
          <h1 className="market-title right">GALLERY</h1>
        </div>

        {/* Description */}
        <div className="market-desc">
          <h3>A GLOBAL TOUR OF THE LATEST PRODUCT INTRODUCTIONS</h3>
          <p>
            Discover the latest in design as the editors of <strong>INTERIOR DESIGN</strong> highlight 
            the most captivating and innovative introductions from this season. 
            Explore cutting-edge trends, groundbreaking products, and exceptional designs 
            shaping the future of interiors.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="market-grid">
          {galleryItems.map((item, index) => (
            <div key={index} className="market-card">
              <img src={item.img} alt={item.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
