"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import blueSphere from "../../public/assets/images/blueSphere.png";
import TwoMedClouds from "../assets/svgs/TwoMedClouds";
import TwoSmallClouds from "../assets/svgs/TwoSmallClouds";
import CloudSmallThree from "../assets/svgs/CloudSmallThree";

export default function BackgroundFour() {
  const [windowY, setWindowY] = useState(0);
  const [fadeIn, setFadeIn] = useState(false);
  const [showSphere, setShowSphere] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const scroll = (event) => {
      setWindowY(window.scrollY);
      if (window.scrollY > 2600) {
        setFadeIn(true);
        setTimeout(() => {
          setShowText(true);
        }, 1000);
        setTimeout(() => {
          setShowSphere(true);
        }, 2000);
      }
      if (window.scrollY < 2600) {
        setFadeIn(false);
        setShowSphere(false);
        setShowText(false);
      }
    };
    window.addEventListener("scroll", scroll, false);
    return () => window.removeEventListener("scroll", scroll, false);
  }, [windowY]);

  return (
    <section
      className={`background background-four ${fadeIn ? "fade-in-image" : ""}`}
    >
      <div className="two-med-clouds-b4">
        <TwoMedClouds />
      </div>
      <p className={`p-b4-1 ${showText ? "fade-in-image" : ""}`}>
        Cloud 9 An expression of self.
      </p>
      <div className="image-blue-sphere-b4-1">
        <Image src={blueSphere} height={180} />
        <div className="two-small-clouds-b4">
          {" "}
          <TwoSmallClouds />
        </div>
      </div>
      <div
        className={`image-blue-sphere-b4-2 ${
          showSphere ? "fade-in-image" : ""
        }`}
      >
        <div className="cloud-small-three-b4">
          <CloudSmallThree />
        </div>
        <Image src={blueSphere} height={260} />
      </div>
    </section>
  );
}
