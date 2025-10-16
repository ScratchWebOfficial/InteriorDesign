import React from "react";
import MarketGallery from "../components/MarketGallery";
import NewsletterSignup from "../components/NewsletterSignup";
import Footer from "../components/Footer";

export default function ShowroomPage() {
  return (
    <>
      <header style={{ textAlign: "center", padding: "30px 0 10px" }}>
        <h1 style={{ margin: 0, letterSpacing: ".5px" }}>Showroom Showcase</h1>
        <p style={{ color: "#555", marginTop: 8 }}>
          Featured showrooms and standout product displays.
        </p>
      </header>

      {/* Use MarketGallery as a clean visual grid */}
      <MarketGallery />

      <section style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px 40px" }}>
        <h2 style={{ fontSize: 20, marginBottom: 10 }}>Featured Locations</h2>
        <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
          <div style={{ background: "#f8f8f8", padding: 16, borderRadius: 6 }}>
            <strong>NYC Flagship</strong>
            <p style={{ marginTop: 6, color: "#444" }}>
              A minimal, light-filled space highlighting modular seating.
            </p>
          </div>
          <div style={{ background: "#f8f8f8", padding: 16, borderRadius: 6 }}>
            <strong>Los Angeles Studio</strong>
            <p style={{ marginTop: 6, color: "#444" }}>
              Textural materials and warm tones curated for hospitality.
            </p>
          </div>
          <div style={{ background: "#f8f8f8", padding: 16, borderRadius: 6 }}>
            <strong>Paris Gallery</strong>
            <p style={{ marginTop: 6, color: "#444" }}>
              Boutique vignette featuring contemporary lighting.
            </p>
          </div>
        </div>
      </section>

      <NewsletterSignup />
      <Footer />
    </>
  );
}
