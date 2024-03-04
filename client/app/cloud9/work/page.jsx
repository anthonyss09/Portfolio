"use client";
import BarkMate from "./components/BarkMate";
import CheckBack from "./components/CheckBack";
import { useEffect } from "react";

export default function Work() {
  useEffect(() => {
    const footer = document.getElementById("footer");
    const navbar = document.getElementById("navbar");
    setTimeout(() => {
      navbar.style.background = "white";
      footer.style.background = "white";
      navbar.style.opacity = 0.9;
    }, 500);
  }, []);
  return (
    <div className="work-positioner">
      <main id="work-main" className="work-main">
        <section className="work-section work-section-featured">
          {" "}
          <h4 className="work-header work-header-featured">Featured Project</h4>
          <BarkMate />
        </section>
        <div className="work-spacer"></div>
        <section className="work-section work-section-recent">
          <h4 className="work-header work-header-featured">All Work</h4>
          <CheckBack />
        </section>
      </main>
    </div>
  );
}
