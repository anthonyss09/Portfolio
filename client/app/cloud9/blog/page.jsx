"use client";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import PostPreview from "@/app/components/PostPreview";
import dataFlow from "../../../public/assets/images/dataFlow.jpg";
import SidebarMain from "@/app/components/SidebarMain";
import { heightFromToPx } from "@/app/animationFrames/heightAnimations";

export default function Blog() {
  const handleMenuClick = () => {
    const navbar = document.getElementById("navbar");
    const footer = document.getElementById("footer");
    const sidebar = document.getElementById("sidebar-main");
    const sidebarHeight = sidebar.offsetHeight;
    // footerHeight.current = footer.offsetHeight;
    if (sidebarHeight === 0) {
      navbar.style.background = "white";
      navbar.style.boxShadow = "0 -4px 30px #6cc7f860";
      heightFromToPx("sidebar-main", 300, 0, 800);
    } else {
      setTimeout(() => {
        navbar.style.background = "none";
        navbar.style.boxShadow = "0 4px 30px #ced9df60";
      }, 500);

      heightFromToPx("sidebar-main", 300, 800, 0);
    }
  };

  const handleLinkClick = () => {
    console.log("link clicked");
    const sidebar = document.getElementById("sidebar-main");
    const sidebarHeight = sidebar.offsetHeight;
    if (sidebarHeight > 0) {
      heightFromToPx("sidebar-main", 300, 800, 0);
    }
  };
  return (
    <>
      <header>
        <NavBar navbarClass="navbar-blog" handleMenuClick={handleMenuClick} />
      </header>
      <SidebarMain handleLinkClick={handleLinkClick} />
      <main className="blog-main">
        <div className="blog-intro">
          <h4 className="blog-header">Browse posts</h4>
        </div>
        <div className="post-first">
          {" "}
          <PostPreview
            postHeading="            Deploy dockerized React/Nginx app featuring Redux & RTK with Node.js
            in serverless Google Cloud Run containers."
            postImage={dataFlow}
            postDate="02/25/2024"
          />
        </div>
      </main>
      <footer>
        <Footer footerClass="footer-blog" />
      </footer>
    </>
  );
}
