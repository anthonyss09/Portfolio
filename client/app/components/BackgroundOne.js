"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import CloudSmallOne from "../assets/svgs/CloudSmallOne";
import CloudSmallTwo from "../assets/svgs/CloudSmallTwo";
import CloudSmallThree from "../assets/svgs/CloudSmallThree";
import CloudMed from "../assets/svgs/CloudMed";
import BigCloud from "../assets/svgs/CloudBig";
import blueSphere from "../../public/assets/images/blueSphere.png";
import TwoSmallClouds from "../assets/svgs/TwoSmallClouds";

export default function BackgroundOne() {
  const [windowY, setWindowY] = useState(0);
  const [hideBackgroundOne, setHideBackgroundOne] = useState(false);

  useEffect(() => {
    const scroll = (event) => {
      setWindowY(window.scrollY);
      if (windowY < 100) {
        setHideBackgroundOne(false);
      } else if (windowY > 100) {
        setHideBackgroundOne(true);
      }
    };
    console.log(hideBackgroundOne);

    window.addEventListener("scroll", scroll, false);
    return () => window.removeEventListener("scroll", scroll, false);
  }, [windowY, hideBackgroundOne]);
  return (
    <section
      className={`background background-one  ${
        hideBackgroundOne ? "fade-out-image" : ""
      }`}
    >
      <div className="image-blue-sphere-b1">
        <Image src={blueSphere} height={260} alt="blue sphere" />
        <div className="two-small-clouds-b1">
          <TwoSmallClouds />
        </div>
      </div>

      <div className="cloud-big-b1-right">
        <BigCloud />
      </div>

      <div className="cloud-right">
        <CloudMed />
      </div>

      <div className="cloud-right-far">
        <CloudMed />
      </div>

      <div className="clouds-phone-center">
        {" "}
        <div className="cloud-small-one">
          <CloudSmallOne />
        </div>
        <div className="cloud-small-two">
          <CloudSmallTwo />
        </div>
        <div className="cloud-small-three">
          <CloudSmallThree />
        </div>
        {/* <p className="scroll-text">Scroll</p> */}
      </div>
    </section>
  );
}
