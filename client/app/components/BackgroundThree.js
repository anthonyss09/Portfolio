"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import CloudBigB3 from "../assets/svgs/CloudBigB3";
import CloudComputers from "../../public/assets/images/cloudComputers.png";
import TwoSmallClouds from "../assets/svgs/TwoSmallClouds.js";
import Link from "next/link";
import CloudSmallOne from "../assets/svgs/CloudSmallOne";
import CloudSmallThree from "../assets/svgs/CloudSmallThree";
import CloudMed from "../assets/svgs/CloudMed";

export default function BackgroundOne() {
  const [windowY, setWindowY] = useState(0);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const scroll = (event) => {
      setWindowY(window.scrollY);
      if (window.scrollY > 1800) {
        setFadeIn(true);
      }
      if (window.scrollY < 1800) {
        setFadeIn(false);
      }
    };
    window.addEventListener("scroll", scroll, false);
    return () => window.removeEventListener("scroll", scroll, false);
  }, [windowY]);

  return (
    <section
      className={`background background-three ${fadeIn ? "fade-in-image" : ""}`}
    >
      <div className="cloud-small-one-b3">
        <CloudSmallOne />
      </div>

      <div className="cloud-small-three-b3">
        <CloudSmallThree />
      </div>

      <div className="cloud-big-b3">
        <CloudBigB3 />
      </div>

      <div className="cloud-big-b3-right">
        <CloudBigB3 />
      </div>

      <div className="cloud-med-b3">
        <CloudMed />
      </div>

      <div className="cloud-computers">
        <p className="p-b3 p-b3-1">Build with thoughtful</p>
        <p className="p-b3 p-b3-2">Integration strategies.</p>
        <Link href="#" className="link link-articles">
          View Blog
        </Link>
        <Image src={CloudComputers} height={365} alt="cloud & computers" />
        <div className="two-small-clouds-b3">
          <TwoSmallClouds />
        </div>
      </div>
    </section>
  );
}
