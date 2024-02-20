"use client";
import BackgroundOne from "../components/BackgroundOne";
import NavBar from "../components/NavBar";
import BackgroundTwoLong from "../components/BackgroundTwoLong";
import BackgroundThree from "../components/BackgroundThree";
import BackgroundFour from "../components/BackgroundFour";
import Footer from "../components/Footer";
import SidebarMain from "../components/SidebarMain";
import { useState, useEffect, useRef } from "react";
import {
  fadeInElement,
  scrollDownFadeAnimations,
  scrollUpFadeAnimations,
} from "../modules/fadeAnimations";

export default function Home() {
  const [navbarClass, setNavbarClass] = useState("");
  const [footerClass, setFooterClass] = useState("footer-height");
  const [toFront, setToFront] = useState("to-front");
  const [MainInnerPosition, setMainInnerPosition] = useState("");
  const pauseScrollRef = useRef(false);
  const windowPositionRef = useRef(1);
  const touchStartYRef = useRef(0);
  const touchEndYRef = useRef(0);

  const wheel = (e) => {
    if (!pauseScrollRef.current) {
      pauseScrollRef.current = true;
      setToFront("");

      //if scrolling down
      if (e.deltaY > 0 && windowPositionRef.current < 5) {
        //height animations
        setNavbarClass("");
        setFooterClass("");
        windowPositionRef.current++;
        //scroll animations
        setMainInnerPosition("position-" + windowPositionRef.current);
        //special fade animation cases
        scrollDownFadeAnimations(windowPositionRef.current);
      }

      //if scrolling up
      if (e.deltaY < 0 && windowPositionRef.current > 1) {
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
      //height animations
      setNavbarClass("");
      setFooterClass("");
      windowPositionRef.current++;
      //scroll animations
      setMainInnerPosition("position-" + windowPositionRef.current);
      //special fade animation cases
      scrollDownFadeAnimations(windowPositionRef.current);
    }

    //if scrolling up
    if (deltaY > 0) {
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
    }
  };

  useEffect(() => {
    const el = document.getElementById("main-inner");
    el?.addEventListener("wheel", wheel);
    el?.addEventListener("touchstart", touchStart);
    el?.addEventListener("touchend", touchEnd);
    return () => {
      el?.removeEventListener("wheel", wheel);
      el?.removeEventListener("touchstart", touchStart);
      el?.removeEventListener("touchend", touchEnd);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    fadeInElement("p-b2-1", 1000);
  }, []);

  const handleMenuClick = () => {
    setNavbarClass("");
    //animate height sidebarMain
    //set page Name in nav
  };

  return (
    <main className={`main main-fixed`}>
      <NavBar navbarClass={navbarClass} toFront={toFront} />

      <div id="main-inner" className={`main-inner ${MainInnerPosition} `}>
        {" "}
        {/* <SidebarMain /> */}
        <BackgroundOne />
        <BackgroundTwoLong />
        <BackgroundThree />
        <BackgroundFour />
      </div>
      <Footer footerClass={footerClass} toFront={toFront} />
    </main>
  );
}
