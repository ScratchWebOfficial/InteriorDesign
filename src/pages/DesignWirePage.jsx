import React from "react";
import EditorsPicks from "../components/EditorsPicks";
import NewsletterSignup from "../components/NewsletterSignup";
import Footer from "../components/Footer";

export default function DesignWirePage() {
  return (
    <>
      <header style={{ textAlign: "center", padding: "30px 0 10px" }}>
        <h1 style={{ margin: 0, letterSpacing: ".5px" }}>DesignWire</h1>
        <p style={{ color: "#555", marginTop: 8 }}>
          News, people, events, awards, and industry updates.
        </p>
      </header>

      {/* Reuse Editors’ Picks as a newsy list for now */}
      <EditorsPicks />

      <section style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px 40px" }}>
        <h2 style={{ fontSize: 20, marginBottom: 10 }}>Latest Headlines</h2>
        <ul style={{ lineHeight: 1.8, color: "#222" }}>
          <li>Studio unveils experimental seating at Milan Design Week</li>
          <li>Museum announces expansion designed by noted architect</li>
          <li>Lighting brand debuts adaptive hospitality collection</li>
        </ul>
      </section>

      <NewsletterSignup />
      <Footer />
    </>
  );
}
