"use client";
import Navbar from "./components/Navbar";
import HeaderMain from "./components/HeaderMain";
import { useEffect, useRef } from "react";
import FooterLinks from "./components/FooterLinks";

export default function Home() {
  const scrollYRef = useRef(0);
  function handleScroll() {
    const backgroundRed = document.getElementById("background-red");
    const backgroundThree = document.getElementById("background-three");

    if (window.scrollY >= 400 && backgroundRed && backgroundThree) {
      backgroundRed.style.transform = "translateY(-100%)";
      backgroundThree.style.transform = "translateY(-100%)";
    } else if (window.scrollY <= 400 && backgroundThree && backgroundRed) {
      backgroundThree.style.transform = "translateY(0)";
      backgroundRed.style.transform = "translateY(0)";
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
        className={`h-[800px] w-full fixed z-[-1] top-0 left-0 border-b-[0px] border-[#90AFC9] duration-500 back-red-peaks overflow-hidden`}
      ></div>
      <div
        id="background-three"
        className={`h-[800px] w-full fixed  top-[800px] left-0 bg-black duration-500`}
      ></div>
      <Navbar />
      <HeaderMain />
      <main></main>
      <FooterLinks />
    </div>
  );
}
