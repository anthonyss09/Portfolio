"use client";
import animations from "../animations.module.css";
import { useEffect, useRef } from "react";

export default function ExcerptTwo() {
  const scrollYRef = useRef(0);

  function handleScroll() {
    const excerptTwo = document.getElementById("excerpt-two");

    if (window.scrollY >= 200 && excerptTwo) {
      excerptTwo.classList.add(`${animations.fadeOut}`);
    } else if (
      scrollYRef.current >= 200 &&
      window.scrollY < 200 &&
      excerptTwo
    ) {
      excerptTwo.classList.remove(`${animations.fadeOut}`);
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
    <div
      id="excerpt-two"
      className={`w-[400px] px-4 font-normal text-lg text-white rounded-lg`}
    >
      <p className={`w-0 overflow-hidden ${animations.typedOutOne}`}>
        I write clean, developer friendly code
      </p>
      <p className={`w-0 overflow-hidden ${animations.typedOutTwo}`}>
        tested & optimized for the internet.
      </p>
    </div>
  );
}
