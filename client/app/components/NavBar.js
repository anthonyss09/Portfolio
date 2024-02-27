"use-client";
import Logo from "../components/Logo";
import { Spiral as Hamburger } from "hamburger-react";
import SidebarMain from "./SidebarMain";
import { handleMenuClickLanding } from "../cloud9/cbs/handleMenuClickLanding";
import { useRef } from "react";
import { heightFromToPx } from "../animationFrames/heightAnimations";

export default function NavBar({ navbarClass, elId }) {
  const footerHeight = useRef(0);
  const navbarHeight = useRef(80);

  const handleClick = () => {
    const navbar = document.getElementById("navbar");
    const sidebar = document.getElementById("sidebar-main");
    const parentEl = document.getElementById(elId);
    const sidebarHeight = sidebar.offsetHeight;
    if (elId === "main") {
      handleMenuClickLanding(footerHeight, navbarHeight);
    } else {
      if (sidebarHeight === 0) {
        navbar.style.opacity = 1;
        parentEl.style.position = "fixed";
        heightFromToPx("sidebar-main", 300, 0, 800);
      } else {
        parentEl.style.position = "relative";
        heightFromToPx("sidebar-main", 300, 800, 0);
        setTimeout(() => {
          navbar.style.opacity = 0.9;
        }, 3000);
      }
    }
  };

  return (
    <nav id="navbar" className={`navbar ${navbarClass}`}>
      <div className="navbar-row-flex">
        <Logo />
        <div className="icon-bars link" onClick={handleClick}>
          <Hamburger color="#ced9df" />{" "}
        </div>
      </div>
      <SidebarMain handleLinkClick={handleClick} />
    </nav>
  );
}
