"use client";
import { useState, useEffect } from "react";
import Blocks3dBack from "../assets/svgs/Blocks3dBack.js";
import blueSphere from "../../public/assets/images/blueSphere.png";
import Image from "next/image.js";
import Link from "next/link.js";

export default function BackgroundTwo() {
  const [windowY, setWindowY] = useState(0);

  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const scroll = (event) => {
      setWindowY(window.scrollY);
      if (window.scrollY < 240) {
        // setFadeIn(false);
      }
      if (window.scrollY > 240) {
        // setFadeIn(true);
      }
      if (window.scrollY > 800) {
        // setFadeIn(false);
      }
    };
    window.addEventListener("scroll", scroll, false);
    return () => window.removeEventListener("scroll", scroll, false);
  }, [windowY]);
  return (
    <section
      className={`background background-two ${
        fadeIn ? "fade-in-image scroll-into-view" : ""
      } `}
    >
      <div className="blocks-back">
        <p className="p-b2 p-b2-1">Bridge the gap</p>
        <div className="blocks-svg">
          {" "}
          <Blocks3dBack />
        </div>
        <Image
          src={blueSphere}
          height={420}
          width={420}
          className="image-blue-sphere-b2"
        />
        <p className="p-b2 p-b2-2">Between formless & form.</p>
        <Link href="#" className="link-projects">
          View Projects
        </Link>
      </div>
    </section>
  );
}
