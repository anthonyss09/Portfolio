export const pageTwoSnippet = `"use client";
import Slider from "./components/Slider";
import Slide from "./components/Slide";
import { useEffect, useRef } from "react";

export default function Home() {
  useEffect(() => {
    const wheel = (e) => {};

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
