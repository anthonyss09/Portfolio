"use client";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import BarkMate from "./components/BarkMate";
import CheckBack from "./components/CheckBack";

export default function Work() {
  return (
    <>
      <header>
        <Navbar navbarClass="navbar-work" elId="work-main" />
      </header>
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
      {/* <footer>
        <Footer footerClass="footer-work" />
      </footer> */}
    </>
  );
}
