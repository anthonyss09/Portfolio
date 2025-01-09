import animations from "../animations.module.css";
import { useEffect, useRef } from "react";

export default function ExcerptOne() {
  const scrollYRef = useRef(0);

  function handleScroll() {
    const excerptOne = document.getElementById("excerpt-one");

    if (window.scrollY >= 100 && excerptOne) {
      excerptOne.classList.add(`${animations.fadeOut}`);
    } else if (
      scrollYRef.current >= 100 &&
      window.scrollY < 100 &&
      excerptOne
    ) {
      excerptOne.classList.remove(`${animations.fadeOut}`);
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
      id="excerpt-one"
      className="h-min w-[400px] max-w-[400px] flex flex-col gap-0 mb-4 px-4 rounded-2xl mt-28"
    >
      <p
        className={`text-blueLight text-3xl font-light opacity-0 ${animations.fadeInEOFirst}`}
      >
        Hi.
      </p>
      <p
        className={`text-white text-3xl font-light opacity-0 ${animations.fadeInEOSecond}`}
      >
        <span className={`text-white `}>I&apos;m</span>
        <span className={`font-thin text-[36px] text-white`}>
          {" "}
          Anthony Toffetti
        </span>
        <span className="text-blueLight">.</span>
      </p>
      <p
        className={`text-blueLight text-xl opacity-0 ${animations.fadeInEOThird}`}
      >
        <span>A</span>{" "}
        <span className="text-white font-medium text-[32px]">
          web developer
        </span>
        <span className="text-blueLight">.</span>
      </p>
    </div>
  );
}
