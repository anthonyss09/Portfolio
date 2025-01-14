"use client";
import animations from "../animations.module.css";
import { useEffect, useRef } from "react";

export default function ExcerptThree() {
  const scrollYRef = useRef(0);

  function handleScroll() {
    const pExcerptThree = document.getElementById("p-excerpt-three");
    // const excerptThree = document.getElementById("excerpt-three");

    if (window.scrollY >= 440 && scrollYRef.current <= 620 && pExcerptThree) {
      pExcerptThree.classList.add(`${animations.fadeInUp}`);
    } else if (
      scrollYRef.current > 440 &&
      window.scrollY < 440 &&
      pExcerptThree
    ) {
      pExcerptThree.classList.remove(`${animations.fadeInUp}`);
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
      id="excerpt-three"
      className={`w-[400px] px-6 text-white fixed top-[196px] left-[50%] translate-x-[-25%] `}
    >
      <p
        id="p-excerpt-three"
        className={`w-[200px] p-4 opacity-0 tracking-wide font-medium text-base glass shadow-2xl`}
      >
        {" "}
        This is some of my work.
        <br /> Keep scrolling.
      </p>
    </div>
  );
}
