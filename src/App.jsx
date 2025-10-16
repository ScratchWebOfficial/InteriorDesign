// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layout Components
import Navbar from "./components/Navbar";
import SubNavbar from "./components/SubNavbar";
import AppFrame from "./components/AppFrame";

// Pages
import HomePage from "./pages/HomesPage";
import ProductsPage from "./pages/ProductsPage";
import DesignWirePage from "./pages/DesignWirePage";
import ShowroomPage from "./pages/ShowroomPage";
import ProjectsPage from "./pages/ProjectsPage";
import HomesPage from "./pages/HomesPage";

// Global Styles (corrected import path)
import "./App.css";

export default function App() {
  return (
    <Router>
      {/* Navbar & SubNavbar at top */}
      <Navbar />
      <SubNavbar />

      {/* Main Frame for consistent layout */}
      <AppFrame>
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<HomePage />} />

          {/* Other Pages */}
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/designwire" element={<DesignWirePage />} />
          <Route path="/homes" element={<HomesPage />} />
          <Route path="/showroom" element={<ShowroomPage />} />

          {/* 404 Fallback */}
          <Route
            path="*"
            element={
              <div style={{ textAlign: "center", padding: "80px 0" }}>
                <h1>404 – Page Not Found</h1>
                <p>
                  The page you are looking for doesn’t exist.{" "}
                  <a
                    href="/"
                    style={{ color: "#ff4d30", textDecoration: "none" }}
                  >
                    Go back home
                  </a>
                </p>
              </div>
            }
          />
        </Routes>
      </AppFrame>
    </Router>
  );
}
