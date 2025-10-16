import React from "react";

// Reuse your existing sections
import HeroSection from "../components/HeroSection";
import WhatsHot from "../components/WhatsHot";
import ResearchSection from "../components/ResearchSection";
import EditorsPicks from "../components/EditorsPicks";
import ProductSpotlight from "../components/ProductSpotlight";
import NewsletterSignup from "../components/NewsletterSignup";
import MarketGallery from "../components/MarketGallery";
import Footer from "../components/Footer";

import spotlightImg from "../assets/images/spotlight-1.jpg";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhatsHot />
      <ResearchSection />
      <EditorsPicks />
      <ProductSpotlight
        image={spotlightImg}
        tag="PRODUCTS"
        title="Lawson-Fenning’s NoHo Shop Glows With Terra-Cotta Hues"
      />
      <NewsletterSignup />
      <MarketGallery />
      <Footer />
    </>
  );
}
