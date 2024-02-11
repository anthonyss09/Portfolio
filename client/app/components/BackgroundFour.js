"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import blueSphere from "../../public/assets/images/blueSphere.png";
import TwoMedClouds from "../assets/svgs/TwoMedClouds";
import TwoSmallClouds from "../assets/svgs/TwoSmallClouds";
import CloudSmallThree from "../assets/svgs/CloudSmallThree";

export default function BackgroundFour() {
  const [windowY, setWindowY] = useState(0);
  const [fadeIn, setFadeIn] = useState("");
  const [fadeInText, setFadeInText] = useState("");
  const [fadeOutSphereOne, setFadeOutSphereOne] = useState("");
  const [fadeInSphereTwo, setFadeInSphereTwo] = useState("");

  useEffect(() => {
    const scroll = (event) => {
      setWindowY(window.scrollY);
      if (window.scrollY > 2600) {
        setFadeIn("fade-in-image");
        setTimeout(() => {
          setFadeInSphereTwo("fade-in-sphere-2");
          setFadeOutSphereOne("fade-out-sphere-1");
        }, 1000);
        setTimeout(() => {
          setFadeInText("fade-in-text");
        }, 2000);
      }
      if (window.scrollY < 2600) {
        setFadeIn("");
        setFadeInSphereTwo("");
        setFadeOutSphereOne("");
        setFadeInText("");
      }
    };
    window.addEventListener("scroll", scroll, false);
    return () => window.removeEventListener("scroll", scroll, false);
  }, [windowY]);

  return (
    <section className={`background background-four ${fadeIn}`}>
      <div className="two-med-clouds-b4">
        <TwoMedClouds />
      </div>
      <p className={`p-b4-1 ${fadeInText}`}>Cloud 9 An expression of self.</p>
      <div className={`image-blue-sphere-b4-1`}>
        <Image
          src={blueSphere}
          height={180}
          className={`blue-sphere ${fadeOutSphereOne}`}
          alt="blue sphere"
        />
        <div className="two-small-clouds-b4">
          {" "}
          <TwoSmallClouds />
        </div>
      </div>
      <div className={`image-blue-sphere-b4-2 ${fadeInSphereTwo}`}>
        <div className="cloud-small-three-b4">
          <CloudSmallThree />
        </div>
        <Image src={blueSphere} height={260} alt="blue sphere" />
      </div>
    </section>
  );
}
