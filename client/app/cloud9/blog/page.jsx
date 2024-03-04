"use client";
import PostPreview from "@/app/components/PostPreview";
import dataFlow from "/public/assets/images/dataFlow.jpg";
import cloudNetwork1 from "/public/assets/images/cloudNetwork1.png";
import Link from "next/link";
import { useRef, useEffect } from "react";
import { handleWheel } from "../cbs/handleWheel";
import { handleKeyDown } from "../cbs/handleKeyDown";
import { handleTouchEnd } from "../cbs/handleTouchEnd";

export default function Blog() {
  const pauseScrollRef = useRef(false);
  const mainPositionRef = useRef(0);
  const windowPositionRef = useRef(1);
  const touchStartYRef = useRef(0);
  const footerHeight = useRef(0);
  const navbarHeight = useRef(80);

  useEffect(() => {
    const wheel = (e) => {
      handleWheel(
        e,
        pauseScrollRef,
        windowPositionRef,
        mainPositionRef,
        navbarHeight,
        footerHeight,
        false
      );
    };

    const touchStart = (e) => {
      touchStartYRef.current = e.touches[0].clientY;
    };

    const touchEnd = (e) => {
      const deltaY =
        Number(e.changedTouches[0].clientY) - Number(touchStartYRef.current);
      handleTouchEnd(
        deltaY,
        pauseScrollRef,
        windowPositionRef,
        mainPositionRef,
        navbarHeight,
        footerHeight,
        false
      );
    };

    const keyDown = (e) => {
      handleKeyDown(
        e,
        windowPositionRef,
        mainPositionRef,
        navbarHeight,
        footerHeight,
        false
      );
    };
    const el = document.getElementById("main-inner");
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

  useEffect(() => {
    const footer = document.getElementById("footer");
    const navbar = document.getElementById("navbar");
    setTimeout(() => {
      navbar.style.background = "white";
      footer.style.background = "white";
      navbar.style.opacity = 0.9;
    }, 500);
  }, []);
  return (
    <>
      {/* <header>
        <NavBar navbarClass="navbar-blog" elId="blog-main" />
      </header> */}
      <main id="blog-main" className="blog-main">
        <section className="blog-section-featured blog-section">
          <h4 className="blog-header">Featured Post</h4>{" "}
          <Link href="/cloud9/blog/post-one" className="link">
            {" "}
            <PostPreview
              postHeading="Deploy dockerized React/Nginx app featuring Redux & RTK with Node.js
            in serverless Google Cloud Run containers."
              postImage={dataFlow}
              postDate="02/25/2024"
            />
          </Link>
        </section>
        <div className="blog-spacer"></div>
        <section className="blog-section-recent blog-section">
          {" "}
          <h4 className="blog-header blog-header-recent">Recent</h4>
          <PostPreview
            postHeading="Check back we'll be adding new posts soon!"
            postImage={cloudNetwork1}
          />
        </section>
      </main>
      {/* <footer>
        <Footer footerClass="footer-blog" />
      </footer> */}
    </>
  );
}
