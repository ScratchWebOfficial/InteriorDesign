import React from "react";
import "../styles/AppFrame.css";

export default function AppFrame({ children }) {
  return (
    <div className="app-frame">
      <main className="page-content">{children}</main>
    </div>
  );
}
