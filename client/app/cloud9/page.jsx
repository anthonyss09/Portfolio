"use client";
import BackgroundOne from "../components/BackgroundOne";
import BackgroundTwoLong from "../components/BackgroundTwoLong";
import BackgroundThree from "../components/BackgroundThree";
import BackgroundFour from "../components/BackgroundFour";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import SidebarMain from "../components/SidebarMain";
import React, { useEffect, useRef } from "react";
import { fadeInElement } from "../animationFrames/opacityAnimations";
import { heightFromToPx } from "../animationFrames/heightAnimations";
import { handleWheel } from "./cbs/handleWheel";
import { handleKeyDown } from "./cbs/handleKeyDown";
import { handleTouchEnd } from "./cbs/handleTouchEnd";

export default function Home() {
  const pauseScrollRef = useRef(false);
  const mainPositionRef = useRef(0);
  const windowPositionRef = useRef(1);
  const touchStartYRef = useRef(0);
  const footerHeight = useRef(64);
  const navbarHeight = useRef(80);

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

  useEffect(() => {
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
  }, [wheel, touchStart, touchEnd, keyDown]);

  useEffect(() => {
    window.scrollTo(0, 0);
    fadeInElement("p-b2-1", 1000);
  }, []);

  const handleMenuClick = () => {
    const navbar = document.getElementById("navbar");
    const footer = document.getElementById("footer");
    const sidebar = document.getElementById("sidebar-main");
    const sidebarHeight = sidebar.offsetHeight;
    footerHeight.current = footer.offsetHeight;
    if (sidebarHeight === 0) {
      navbar.style.background = "white";
      navbar.style.boxShadow = "0 -4px 30px #6cc7f860";
      footer.style.background = "white";
      heightFromToPx("footer", 300, footerHeight.current, 80);
      heightFromToPx("navbar", 300, navbarHeight.current, 96);
      heightFromToPx("sidebar-main", 300, 0, 800);
      navbarHeight.current = 96;
      footerHeight.current = 80;
    } else {
      setTimeout(() => {
        navbar.style.background = "none";
        navbar.style.boxShadow = "0 4px 30px #ced9df60";
      }, 500);
      footer.style.background = "none";
      heightFromToPx("footer", 300, footerHeight.current, 0);
      heightFromToPx("sidebar-main", 300, 800, 0);
      footerHeight.current = 0;
    }
  };

  const handleLinkClick = () => {
    console.log("link clicked");
    const sidebar = document.getElementById("sidebar-main");
    const sidebarHeight = sidebar.offsetHeight;
    if (sidebarHeight > 0) {
      heightFromToPx("sidebar-main", 300, 800, 0);
    }
  };
  return (
    <>
      {" "}
      <header>
        {" "}
        <NavBar handleMenuClick={handleMenuClick} />
      </header>
      <main id="main" className={`main main-fixed`}>
        <SidebarMain handleLinkClick={handleLinkClick} />
        <div id="main-inner" className={`main-inner `}>
          {" "}
          <BackgroundOne />
          <BackgroundTwoLong />
          <BackgroundThree />
          <BackgroundFour />
        </div>
      </main>
      <footer>
        {" "}
        <Footer />
      </footer>
    </>
  );
}
