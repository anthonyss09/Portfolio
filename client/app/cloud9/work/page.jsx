"use client";
import BarkMate from "./components/BarkMate";
import CheckBack from "./components/CheckBack";
import { useRef, useEffect } from "react";
import { handleWheel } from "../cbs/handleWheel";
import { handleKeyDown } from "../cbs/handleKeyDown";
import { handleTouchEnd } from "../cbs/handleTouchEnd";

export default function Work() {
  const pauseScrollRef = useRef(false);
  const mainPositionRef = useRef(0);
  const windowPositionRef = useRef(1);
  const touchStartYRef = useRef(0);
  const footerHeight = useRef(0);
  const navbarHeight = useRef(80);

  useEffect(() => {
    const wheel = (e) => {
      handleWheel(
        e,
        pauseScrollRef,
        windowPositionRef,
        mainPositionRef,
        navbarHeight,
        footerHeight,
        false
      );
    };

    const touchStart = (e) => {
      touchStartYRef.current = e.touches[0].clientY;
    };

    const touchEnd = (e) => {
      const deltaY =
        Number(e.changedTouches[0].clientY) - Number(touchStartYRef.current);
      handleTouchEnd(
        deltaY,
        pauseScrollRef,
        windowPositionRef,
        mainPositionRef,
        navbarHeight,
        footerHeight,
        false
      );
    };

    const keyDown = (e) => {
      handleKeyDown(
        e,
        windowPositionRef,
        mainPositionRef,
        navbarHeight,
        footerHeight,
        false
      );
    };
    const el = document.getElementById("main-inner");
    window.addEventListener("wheel", wheel);
    window.addEventListener("touchstart", touchStart);
    window.addEventListener("touchend", touchEnd);
    document.addEventListener("keydown", keyDown);
    return () => {
      window.removeEventListener("wheel", wheel);
      window.removeEventListener("touchstart", touchStart);
      window.removeEventListener("touchend", touchEnd);
      document.removeEventListener("keydown", keyDown);
    };
  }, []);

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
