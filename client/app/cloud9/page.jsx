"use client";
import BackgroundOne from "../components/BackgroundOne";
import NavBar from "../components/NavBar";
import BackgroundTwoLong from "../components/BackgroundTwoLong";
import BackgroundThree from "../components/BackgroundThree";
import BackgroundFour from "../components/BackgroundFour";
import Footer from "../components/Footer";
import SidebarMain from "../components/SidebarMain";
import React, { useState, useEffect, useRef } from "react";
import {
  fadeInElement,
  scrollDownFadeAnimations,
  scrollUpFadeAnimations,
} from "../modules/fadeAnimations";

export default function Home() {
  const [navbarClass, setNavbarClass] = useState("navbar-reduced");
  const [footerClass, setFooterClass] = useState("footer-height");
  const [toFront, setToFront] = useState("to-front");
  const [MainInnerPosition, setMainInnerPosition] = useState("");
  const [noShadow, setNoShadow] = useState("");
  const [sidebarMainHeight, setSidebarMainHeight] = useState("");
  const pauseScrollRef = useRef(false);
  const windowPositionRef = useRef(1);
  const touchStartYRef = useRef(0);
  const [menuDropped, setMenuDropped] = useState(false);

  let el;

  const handleScrollUpAnimations = () => {
    //height animations
    setNavbarClass("navbar-reduced");
    setFooterClass("footer-height");
    //index animations
    setTimeout(() => {}, 1500);
    windowPositionRef.current--;
    //scroll animations
    setMainInnerPosition("position-" + windowPositionRef.current);
    //special fade animation cases
    scrollUpFadeAnimations(windowPositionRef.current);
  };

  const handleScrollDownAnimations = () => {
    if (windowPositionRef.current === 5) {
      return;
    }
    //height animations
    setNavbarClass("");
    setFooterClass("");
    windowPositionRef.current++;
    //scroll animations
    setMainInnerPosition("position-" + windowPositionRef.current);
    //special fade animation cases
    scrollDownFadeAnimations(windowPositionRef.current);
  };

  const wheel = (e) => {
    if (!pauseScrollRef.current) {
      pauseScrollRef.current = true;
      setToFront("");
      //if scrolling down
      if (e.deltaY > 0 && windowPositionRef.current < 5) {
        handleScrollDownAnimations();
      }
      //if scrolling up
      if (e.deltaY < 0 && windowPositionRef.current > 1) {
        handleScrollUpAnimations();
      }
      setTimeout(() => {
        pauseScrollRef.current = false;
        setToFront("to-front");
      }, 1500);
    }
  };

  const touchStart = (e) => {
    touchStartYRef.current = e.touches[0].clientY;
  };

  const touchEnd = (e) => {
    const deltaY =
      Number(e.changedTouches[0].clientY) - Number(touchStartYRef.current);
    //if scrolling down
    if (deltaY < 0) {
      handleScrollDownAnimations();
    }
    //if scrolling up
    if (deltaY > 0) {
      handleScrollUpAnimations();
    }
    if (deltaY === 0) {
      return;
    }
  };

  const keyDown = (e) => {
    console.log(e.keyCode);
    //if scrolling down
    if (e.keyCode === 40) {
      handleScrollDownAnimations();
    }
    //if scrolling up
    if (e.keyCode === 38) {
      handleScrollUpAnimations();
    }
  };

  useEffect(() => {
    el = document.getElementById("main-inner");
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
    if (!menuDropped) {
      setNavbarClass("navbar-background");
      setNoShadow("no-shadow");
      setSidebarMainHeight("sidebar-main-height");
      setFooterClass("footer-height-5");
    } else {
      setNavbarClass("");
      setNoShadow("");
      setSidebarMainHeight("");
      setFooterClass("");
    }
    setMenuDropped(!menuDropped);
  };

  return (
    <main className={`main main-fixed`}>
      <NavBar
        navbarClass={navbarClass}
        toFront={toFront}
        handleMenuClick={handleMenuClick}
      />
      <SidebarMain sidebarMainHeight={sidebarMainHeight} noShadow={noShadow} />

      <div id="main-inner" className={`main-inner ${MainInnerPosition} `}>
        {" "}
        <BackgroundOne />
        <BackgroundTwoLong />
        <BackgroundThree />
        <BackgroundFour />
      </div>
      <Footer footerClass={footerClass} toFront={toFront} noShadow={noShadow} />
    </main>
  );
}
