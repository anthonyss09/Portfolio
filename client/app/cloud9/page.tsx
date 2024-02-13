"use client";
import Image from "next/image";
import BackgroundOne from "../components/BackgroundOne";
import NavBar from "../components/NavBar";
import BackgroundTwoLong from "../components/BackgroundTwoLong";
import BackgroundThree from "../components/BackgroundThree";
import BackgroundFour from "../components/BackgroundFour";
import { useState, useEffect } from "react";
import { animateScroll } from "../modules/animateScroll";

export default function Home() {
  const [position, setPosition] = useState("position-1");

  useEffect(() => {
    function scroll() {
      animateScroll(position, setPosition);
    }
    window.addEventListener("scroll", scroll);
    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, [position, setPosition]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="main">
      <NavBar />
      <BackgroundOne />
      <BackgroundTwoLong />
      <BackgroundThree />
      <BackgroundFour />
    </main>
  );
}
