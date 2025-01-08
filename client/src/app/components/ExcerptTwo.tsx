"use client";
import animations from "../animations.module.css";
import { useEffect } from "react";

export default function ExcerptTwo() {
  function handleScroll() {
    const excerptTwo = document.getElementById("excerpt-two");

    if (window.scrollY >= 1 && excerptTwo) {
    } else if (window.scrollY === 0 && excerptTwo) {
    }
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
