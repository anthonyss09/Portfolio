import Image from "next/image";
import ExcerptOne from "./ExcerptOne";
import ExcerptTwo from "./ExcerptTwo";
import animations from "../animations.module.css";
import { useEffect, useRef } from "react";

export default function HeaderMain() {
  const scrollYRef = useRef(0);

  function handleScroll() {
    const buttonHeader = document.getElementById("button-wrapper-header");

    if (window.scrollY >= 300 && buttonHeader) {
      buttonHeader.classList.add(`${animations.fadeOut}`);
    } else if (
      scrollYRef.current >= 300 &&
      window.scrollY < 300 &&
      buttonHeader
    ) {
      buttonHeader.classList.remove(`${animations.fadeOut}`);
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
    <header
      id="header-main"
      className={`w-[400px] mx-auto pt-[128px] flex flex-col px-2 overflow-hidden`}
    >
      <div
        id="profile-image-main"
        className="h-[80px] w-[80px] mb-8 border-[6px] border-blueMed rounded-[100px] shadow-med ml-2 fixed z-10"
      >
        {" "}
        <Image
          src="/assets/images/anthony.jpg"
          fill
          alt="anthony toffetti"
          className="rounded-[80px]"
        />
      </div>

      <ExcerptOne />
      <ExcerptTwo />
      <div id="button-wrapper-header">
        {" "}
        <button
          className={`h-[40px] w-0 overflow-hidden font-normal text-base mt-16 ml-4 tracking-wide flex justify-around items-center text-blueLight bg-black/10 shadow-2xl rounded-xl ${animations.typedOutButton}`}
        >
          <p id="p-button" className={`opacity-0 ${animations.fadeInEOButton}`}>
            {" "}
            Send me mail{" "}
          </p>
          <Image
            src="/assets/svgs/arrowRight.svg"
            height={28}
            width={28}
            alt="arrow right"
          />
        </button>
      </div>
    </header>
  );
}
