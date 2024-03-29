// import { Inter } from "next/font/google";
"use client";
import "../globals.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import React, { useEffect, useRef } from "react";
import { handleNavFooterHeight } from "./cbs/handleNavFooterHeight";
import { usePathname } from "next/navigation";

// const inter = Inter({ subsets: ["latin"] });

export default function CloudLayout({ children }) {
  const touchStartYRef = useRef(0);
  const footerHeight = useRef(0);
  const navbarHeight = useRef(80);
  const dynamicClassName = useRef("");

  const pathName = usePathname();

  useEffect(() => {
    const navbar = document.getElementById("navbar");
    const footer = document.getElementById("footer");
    setTimeout(() => {
      if (pathName === "/cloud9") {
        navbar.style.background = "none";
        footer.style.background = "none";
      } else {
        navbar.style.background = "white";
        footer.style.background = "white";
      }
    }, 500);
  }, [pathName]);

  useEffect(() => {
    const wheel = (e) => {
      handleNavFooterHeight(e, navbarHeight, footerHeight, undefined);
    };

    const touchStart = (e) => {
      touchStartYRef.current = e.touches[0].clientY;
    };

    const touchEnd = (e) => {
      const deltaY =
        Number(e.changedTouches[0].clientY) - Number(touchStartYRef.current);
      handleNavFooterHeight(e, navbarHeight, footerHeight, deltaY);
    };

    const keyDown = (e) => {
      handleNavFooterHeight(e, navbarHeight, footerHeight, undefined);
    };
    window.addEventListener("wheel", wheel);
    window.addEventListener("touchstart", touchStart);
    window.addEventListener("touchend", touchEnd);
    document.addEventListener("keydown", keyDown);
    return () => {
      window.removeEventListener("wheel", wheel);
      window.removeEventListener("touchstart", touchStart);
      window.removeEventListener("touchend", touchEnd);
      document.removeEventListener("keydown", keyDown);
    };
  }, []);

  return (
    <div>
      <NavBar navbarClass={dynamicClassName.current} />
      <div id="children"> {children}</div>
      <Footer footerId="footer" footerClass={dynamicClassName.current} />
    </div>
  );
}
