"use client";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import PostPreview from "@/app/components/PostPreview";
import dataFlow from "../../../public/assets/images/dataFlow.jpg";
import cloudNetwork1 from "../../../public/assets/images/cloudNetwork1.png";

export default function Blog() {
  return (
    <>
      <header>
        <NavBar navbarClass="navbar-blog" elId="blog-main" />
      </header>
      <main id="blog-main" className="blog-main">
        <section className="blog-section-featured blog-section">
          <h4 className="blog-header">Featured Post</h4>{" "}
          <PostPreview
            postHeading="Deploy dockerized React/Nginx app featuring Redux & RTK with Node.js
            in serverless Google Cloud Run containers."
            postImage={dataFlow}
            postDate="02/25/2024"
          />
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
      <footer>
        <Footer footerClass="footer-blog" />
      </footer>
    </>
  );
}
