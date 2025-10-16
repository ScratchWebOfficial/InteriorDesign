import React from "react";
import "../styles/EditorsPicks.css";

const picks = [
  {
    img: "/assets/images/pick-1.jpg",
    title: "Partner Content: Prostoria Embraces Sustainability In All Aspects",
  },
  {
    img: "/assets/images/pick-2.jpg",
    title: "Waldorf Astoria Welcomes Back Interior Design’s Hall Of Fame Gala",
  },
  {
    img: "/assets/images/pick-3.jpg",
    title: "10 Questions With... Navajo Textile Artist DY Begay",
  },
  {
    img: "/assets/images/pick-4.jpg",
    title: "This Serene Miami Home Is A Celebration Of Intentional Living",
  },
  {
    img: "/assets/images/pick-5.jpg",
    title: "Awaken The Senses At This French-Inspired Patisserie In Taiwan",
  },
  {
    img: "/assets/images/pick-6.jpg",
    title: "How Ace Group International Curates Hospitality Hot Spots",
  },
];

export default function EditorsPicks() {
  return (
    <section className="editors-section">
      <div className="editors-container">
        <h2 className="editors-heading">
          <em>editors’ picks</em>
        </h2>

        <div className="editors-grid">
          {picks.map((item, i) => (
            <div className="editors-card" key={i}>
              <div className="img-box">
                <img src={item.img} alt={item.title} />
              </div>
              <h3 className="title">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
