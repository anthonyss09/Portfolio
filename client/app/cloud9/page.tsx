"use client";
import Image from "next/image";
import BackgroundOne from "../components/BackgroundOne";
import NavBar from "../components/NavBar";
import BackgroundTwoLong from "../components/BackgroundTwoLong";
import BackgroundThree from "../components/BackgroundThree";
import BackgroundFour from "../components/BackgroundFour";
import { useState, useEffect } from "react";
import { scrollAnimationLanding } from "../modules/scrollAnimations";
import { fadeAnimationLanding } from "../modules/fadeAnimations";

export default function Home() {
  const [position, setPosition] = useState("position-1");
  const [windowY, setWindowY] = useState(0);
  const [navbarClass, setNavbarClass] = useState("");

  useEffect(() => {
    function scroll() {
      if (window.scrollY < windowY) {
        setNavbarClass("navbar-reduced");
      } else {
        setNavbarClass("");
      }
      setWindowY(window.scrollY);
      scrollAnimationLanding(position, setPosition);
      fadeAnimationLanding(position, setPosition);
    }
    window.addEventListener("scroll", scroll);
    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, [windowY, position, setPosition]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="main">
      <NavBar navbarClass={navbarClass} />
      <BackgroundOne />
      <BackgroundTwoLong />
      <BackgroundThree />
      <BackgroundFour />
    </main>
  );
}
