"use client";
import Navbar from "./components/Navbar";
import HeaderMain from "./components/HeaderMain";
import { useEffect, useRef } from "react";
import gradients from "./gradients.module.css";

export default function Home() {
  const scrollYRef = useRef(0);
  function handleScroll() {
    const backgroundRed = document.getElementById("background-red");
    const backgroundTwo = document.getElementById("background-two");
    const excerptTwo = document.getElementById("excerpt-two");

    if (scrollYRef.current === 0 && window.scrollY >= 1) {
      if (backgroundRed && backgroundTwo && excerptTwo) {
        backgroundRed.style.transform = "translateY(0)";
        excerptTwo.style.color = "rgb(196,227,254)";
      }
    } else if (window.scrollY === 0) {
      if (backgroundRed && backgroundTwo && excerptTwo) {
        backgroundRed.style.transform = "translateY(-400px)";
        excerptTwo.style.color = "rgb(53,156,246)";
      }
    }
    scrollYRef.current = window.scrollY;
  }

  useEffect(() => {
    if (typeof window !== undefined) {
      window.addEventListener("scroll", handleScroll);
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="page" className="h-[2000px] w-full overflow-hidden">
      <div
        id="background-red"
        className={`h-[800px] translate-y-[-400px] w-full fixed z-[-1] top-0 left-0 border-b-[2px] border-blueLight duration-500 ${gradients.redMin}`}
      ></div>
      <div
        id="background-two"
        className={`h-[352px] w-full fixed z-[-2] top-[400px] left-0 ${gradients.blueLight}`}
      ></div>
      <Navbar />

      <HeaderMain />

      <main className={``}></main>
    </div>
  );
}
