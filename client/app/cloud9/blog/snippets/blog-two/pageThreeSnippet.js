export const pageThreeSnippet = `"use client";
import Slider from "./components/Slider";
import Slide from "./components/Slide";
import { useEffect, useRef } from "react";

export default function Home() {
  const pauseScrollRef = useRef(false);
  const translationRef = useRef(0);
  const activeSlideRef = useRef(1);
  const numberOfSlides = 4;
  const slideHeightInt = 500;

  useEffect(() => {
    const wheel = (e) => {
      if (!pauseScrollRef.current) {
        pauseScrollRef.current = true;

        //if scrolling down
        if (e.deltaY > 0 && activeSlideRef.current < numberOfSlides) {
          activeSlideRef.current++;
          translationRef.current -= slideHeightInt;
          sliderInner.style.transform = \`translateY(&#36;{translationRef.current}px)\`;
        }
        //if scrolling up
        if (e.deltaY < 0 && activeSlideRef.current > 1) {
          activeSlideRef.current--;
          translationRef.current += slideHeightInt;
          sliderInner.style.transform = \`translateY(&#36;{translationRef.current}px)\`;
        }

        setTimeout(() => {
          pauseScrollRef.current = false;
        }, 1000);
      }
    };

    const touchStart = (e) => {};

    const touchEnd = (e) => {};

    const keyDown = (e) => {};

    const sliderInner = document.getElementById("slider-inner");
    const sliderContainer = document.getElementById("slider-container");
    sliderContainer?.addEventListener("wheel", wheel);
    sliderContainer?.addEventListener("touchstart", touchStart);
    sliderContainer?.addEventListener("touchend", touchEnd);
    document.addEventListener("keydown", keyDown);
    return () => {
      sliderContainer?.removeEventListener("wheel", wheel);
      sliderContainer?.removeEventListener("touchstart", touchStart);
      sliderContainer?.removeEventListener("touchend", touchEnd);
      document.removeEventListener("keydown", keyDown);
    };
  }, []);
  return (
    <main className="main">
      <div className="center">
        {" "}
        <h1>Responsive Slider</h1>
        <Slider>
          <Slide slideNumber="one" />
          <Slide slideNumber="two" />
          <Slide slideNumber="three" />
          <Slide slideNumber="four" />
        </Slider>
      </div>
    </main>
  );
}`;
