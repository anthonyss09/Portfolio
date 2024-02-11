"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import blueSphere from "../../public/assets/images/blueSphere.png";
import TwoSmallClouds from "../assets/svgs/TwoSmallClouds.js";
import CloudSmallThree from "../assets/svgs/CloudSmallThree";
import TwoMedClouds from "../assets/svgs/TwoMedClouds";
import Blocks3dBack from "../assets/svgs/Blocks3dBack";

export default function BackgroundOne() {
  const [windowY, setWindowY] = useState(0);
  const [fadeIn, setFadeIn] = useState("");
  const [fadeOutSphereOne, setFadeOutSphereOne] = useState("");
  const [fadeInSphereTwo, setFadeInSphereTwo] = useState("");

  useEffect(() => {
    const scroll = (event) => {
      setWindowY(window.scrollY);
      if (window.scrollY > 200) {
        setFadeIn("fade-in-image");
      }
      if (window.scrollY < 200) {
        setFadeIn("");
      }
      if (window.scrollY > 1100) {
        setDropSphere(true);
        setFadeOutSphereOne("fade-out-sphere-1");
        setFadeInSphereTwo("fade-in-sphere-2");
      }
      if (window.scrollY < 1100) {
        setDropSphere(false);
        setFadeOutSphereOne("");
        setFadeInSphereTwo("");
      }
    };
    window.addEventListener("scroll", scroll, false);
    return () => window.removeEventListener("scroll", scroll, false);
  }, [windowY]);

  return (
    <section className={`background background-two ${fadeIn}`}>
      <div className="two-med-clouds-b2">
        <TwoMedClouds />
      </div>

      <div className="two-small-clouds-b2">
        {" "}
        <p className="p-b2">Cloud 9 A concept & a workspace.</p>
        <TwoSmallClouds />
        <div className="cloud-small-three-b2">
          <CloudSmallThree />
        </div>
      </div>

      <div className={`image-blue-sphere-b2 ${fadeOutSphereOne}`}>
        {" "}
        <Image src={blueSphere} width={420} alt="blue sphere" />
      </div>
      <div
        className={`image-blue-sphere-b2 image-blue-sphere-b2-dropped ${fadeInSphereTwo}`}
      >
        {" "}
        <Image src={blueSphere} width={420} alt="blue sphere" />
      </div>

      <div className="two-med-clouds-b2-2">
        <TwoMedClouds />
      </div>

      <div className="blocks-back-b2">
        <p className="p-b2 p-b2-1">Bridge the gap</p>
        <div className="blocks-svg">
          {" "}
          <Blocks3dBack />
        </div>
        <p className="p-b2 p-b2-2">Between formless & form.</p>
        <Link href="#" className="link link-projects">
          View Projects
        </Link>
      </div>
    </section>
  );
}
