"use client";
import BackgroundOne from "../components/BackgroundOne";
import BackgroundTwoLong from "../components/BackgroundTwoLong";
import BackgroundThree from "../components/BackgroundThree";
import BackgroundFour from "../components/BackgroundFour";
import React, { useEffect, useRef } from "react";
import { handleWheel } from "./cbs/handleWheel";
import { handleKeyDown } from "./cbs/handleKeyDown";
import { handleTouchEnd } from "./cbs/handleTouchEnd";
import { fadeInElement } from "../animationFrames/opacityAnimations";

export default function Home() {
  const pauseScrollRef = useRef(false);
  const mainPositionRef = useRef(0);
  const windowPositionRef = useRef(1);
  const touchStartYRef = useRef(0);

  useEffect(() => {
    const wheel = (e) => {
      handleWheel(e, pauseScrollRef, windowPositionRef, mainPositionRef);
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
        mainPositionRef
      );
    };

    const keyDown = (e) => {
      handleKeyDown(e, windowPositionRef, mainPositionRef);
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
    fadeInElement("background-1", 1000);
    const navbar = document.getElementById("navbar");
    navbar.style.background = "none";
  }, []);

  return (
    <>
      <main id="main" className={`main main-fixed`}>
        <div id="main-inner" className={`main-inner `}>
          {" "}
          <BackgroundOne />
          <BackgroundTwoLong />
          <BackgroundThree />
          <BackgroundFour />
        </div>
      </main>
    </>
  );
}
