"use client";
import BackgroundOne from "../components/BackgroundOne";
import NavBar from "../components/NavBar";
import BackgroundTwoLong from "../components/BackgroundTwoLong";
import BackgroundThree from "../components/BackgroundThree";
import BackgroundFour from "../components/BackgroundFour";
import SidebarMain from "../components/SidebarMain";
import { useState, useEffect, useRef } from "react";
import {
  fadeInElement,
  scrollDownFadeAnimations,
  scrollUpFadeAnimations,
} from "../modules/fadeAnimations";

export default function Home() {
  const [navbarClass, setNavbarClass] = useState("");
  const [MainInnerPosition, setMainInnerPosition] = useState("");
  const pauseScrollRef = useRef(false);
  const windowPositionRef = useRef(1);

  const wheel = (e) => {
    if (!pauseScrollRef.current) {
      pauseScrollRef.current = true;

      //if scrolling down
      if (e.deltaY > 0 && windowPositionRef.current < 5) {
        //height animations
        setNavbarClass("");
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
        windowPositionRef.current--;
        //scroll animations
        setMainInnerPosition("position-" + windowPositionRef.current);
        //special fade animation cases
        scrollUpFadeAnimations(windowPositionRef.current);
      }

      setTimeout(() => {
        pauseScrollRef.current = false;
      }, 1500);
    }
  };

  useEffect(() => {
    const el = document.getElementById("main-inner");
    el?.addEventListener("wheel", wheel);
    return () => {
      el?.removeEventListener("wheel", wheel);
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
      <div id="main-inner" className={`main-inner ${MainInnerPosition} `}>
        {" "}
        <NavBar navbarClass={navbarClass} />
        {/* <SidebarMain /> */}
        <BackgroundOne />
        <BackgroundTwoLong />
        <BackgroundThree />
        <BackgroundFour />
      </div>
    </main>
  );
}
