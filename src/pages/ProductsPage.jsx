import React from "react";
import ProductSpotlight from "../components/ProductSpotlight";
import MarketGallery from "../components/MarketGallery";
import NewsletterSignup from "../components/NewsletterSignup";
import Footer from "../components/Footer";

import spotlightImg from "../assets/images/spotlight-1.jpg";

export default function ProductsPage() {
  return (
    <>
      <header style={{ textAlign: "center", padding: "30px 0 10px" }}>
        <h1 style={{ margin: 0, letterSpacing: ".5px" }}>Products</h1>
        <p style={{ color: "#555", marginTop: 8 }}>
          New launches, materials, lighting, furniture & more.
        </p>
      </header>

      <ProductSpotlight
        image={spotlightImg}
        tag="PRODUCTS"
        title="Lawson-Fenning’s NoHo Shop Glows With Terra-Cotta Hues"
      />

      <MarketGallery />

      <NewsletterSignup />
      <Footer />
    </>
  );
}
