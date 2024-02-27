"use client";
import BackgroundOne from "./components/BackgroundOne";
import BackgroundTwoLong from "./components/BackgroundTwoLong";
import BackgroundThree from "./components/BackgroundThree";
import BackgroundFour from "./components/BackgroundFour";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import React, { useEffect, useRef } from "react";
import { fadeInElement } from "./animationFrames/opacityAnimations";
import { handleWheel } from "./cbs/handleWheel";
import { handleKeyDown } from "./cbs/handleKeyDown";
import { handleTouchEnd } from "./cbs/handleTouchEnd";

export default function Home() {
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
        footerHeight
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
        footerHeight
      );
    };

    const keyDown = (e) => {
      handleKeyDown(
        e,
        windowPositionRef,
        mainPositionRef,
        navbarHeight,
        footerHeight
      );
    };
    const el = document.getElementById("main-inner");
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

  useEffect(() => {
    window.scrollTo(0, 0);
    fadeInElement("p-b2-1", 1000);
  }, []);

  return (
    <>
      <header>
        {" "}
        <NavBar elId="main" />
      </header>
      <main id="main" className={`main main-fixed`}>
        <div id="main-inner" className={`main-inner `}>
          {" "}
          <BackgroundOne />
          <BackgroundTwoLong />
          <BackgroundThree />
          {/* <BackgroundFour /> */}
        </div>
      </main>
      <footer>
        {" "}
        <Footer />
      </footer>
    </>
  );
}
