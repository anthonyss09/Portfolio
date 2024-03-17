"use client";
import PostPreview from "./components/PostPreview";
import dataFlow from "/public/assets/images/dataFlow.jpg";
import cloudNetwork1 from "/public/assets/images/cloudNetwork1.png";
import Link from "next/link";
import { useEffect } from "react";
import sliderDiagram from "/public/assets/images/sliderDiagram.png";

export default function Blog() {
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
      <main id="blog-main" className="blog-main">
        <section className="blog-section-featured blog-section">
          <h4 className="blog-header">Featured Post</h4>{" "}
          <Link href="/cloud9/blog/post-two" className="link">
            {" "}
            <PostPreview
              postHeading=" Create a reusable customizable slider component that responds to
            touch swipes, mouse wheel, and arrow key events in NextJs."
              postImage={sliderDiagram}
              postDate="03/14/2024"
            />
          </Link>
        </section>
        <div className="blog-spacer"></div>
        <section className="blog-section-recent blog-section">
          {" "}
          <h4 className="blog-header blog-header-recent">Recent</h4>
          <Link className="link" href="/cloud9/blog/post-one">
            <PostPreview
              postHeading="Deploy dockerized React/Nginx app featuring Redux & RTK with Node.js
            in serverless Google Cloud Run containers."
              postImage={dataFlow}
              postDate="02/25/2024"
            />
          </Link>
          <PostPreview
            postHeading="Check back we'll be adding new posts soon!"
            postImage={cloudNetwork1}
          />
        </section>
      </main>
    </>
  );
}
