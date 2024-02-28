"use client";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import BarkMate from "./components/BarkMate";
import CheckBack from "./components/CheckBack";
import { useRef, useEffect } from "react";
import { heightFromToPx } from "../animationFrames/heightAnimations";

export default function Work() {
  const footerHeight = useRef(0);
  const navbarHeight = useRef(80);
  const touchStartYRef = useRef(0);

  useEffect(() => {
    const footer = document.getElementById("footer");
    const wheel = (e) => {
      const footerFixed = document.getElementById("footer-work");

      const footerRect = footerFixed.getBoundingClientRect();

      console.log(footerRect);
      if (window.scrollY > 400) {
        return;
      }
      //if scrolling down
      if (e.deltaY > 0) {
        heightFromToPx("navbar", 300, navbarHeight.current, 96);
        heightFromToPx("footer", 300, footerHeight.current, 0);
        navbarHeight.current = 96;
        footerHeight.current = 0;
      }
      //if scrolling up
      if (e.deltaY < 0) {
        heightFromToPx("navbar", 300, navbarHeight.current, 80);
        heightFromToPx("footer", 300, footerHeight.current, 64);
        navbarHeight.current = 80;
        footerHeight.current = 64;
        footer.style.background = "white";
      }
    };

    const touchStart = (e) => {
      touchStartYRef.current = e.touches[0].clientY;
    };

    const touchEnd = (e) => {
      const footerFixed = document.getElementById("footer-work");

      const footerRect = footerFixed.getBoundingClientRect();
      console.log(footerRect);
      const deltaY =
        Number(e.changedTouches[0].clientY) - Number(touchStartYRef.current);

      //if scrolling down
      if (deltaY < 0) {
        heightFromToPx("navbar", 300, navbarHeight.current, 96);
        heightFromToPx("footer", 300, footerHeight.current, 0);
        navbarHeight.current = 96;
        footerHeight.current = 0;
      }
      //if scrolling up
      if (deltaY > 0) {
        heightFromToPx("navbar", 300, navbarHeight.current, 80);
        heightFromToPx("footer", 300, footerHeight.current, 64);
        navbarHeight.current = 80;
        footerHeight.current = 64;
        footer.style.background = "white";
      }
      if (deltaY === 0) {
        return;
      }
    };

    const keyDown = (e) => {
      if (window.scrollY > 400) {
        return;
      }
      //if scrolling down
      if (e.keyCode === 40) {
        heightFromToPx("navbar", 300, navbarHeight.current, 96);
        heightFromToPx("footer", 300, footerHeight.current, 0);
        navbarHeight.current = 96;
        footerHeight.current = 0;
      }
      //if scrolling up
      if (e.keyCode === 38) {
        heightFromToPx("navbar", 300, navbarHeight.current, 80);
        heightFromToPx("footer", 300, footerHeight.current, 64);
        navbarHeight.current = 80;
        footerHeight.current = 64;
        footer.style.background = "white";
      }
    };

    const el = document.getElementById("work-main");
    el?.addEventListener("wheel", wheel);
    el?.addEventListener("touchstart", touchStart);
    el?.addEventListener("touchend", touchEnd);
    document.addEventListener("keydown", keyDown);
    return () => {
      el?.removeEventListener("wheel", wheel);
      el?.removeEventListener("touchstart", touchStart);
      el?.removeEventListener("touchend", touchEnd);
      document.removeEventListener("keydown", keyDown);
    };
  }, []);
  return (
    <div className="work-positioner">
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
      <footer>
        <Footer footerClass="footer-work" footerId="footer" />
      </footer>
      <Footer footerClass="footer-work-fixed" footerId="footer-work" />
    </div>
  );
}
