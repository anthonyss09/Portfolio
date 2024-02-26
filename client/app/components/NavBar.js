"use client";
import Logo from "../components/Logo";
import { Spiral as Hamburger } from "hamburger-react";

export default function NavBar({ handleMenuClick, navbarClass }) {
  return (
    <nav id="navbar" className={`navbar ${navbarClass}`}>
      <div className="navbar-row-flex">
        <Logo />
        <div className="icon-bars" onClick={handleMenuClick}>
          <Hamburger color="#ced9df" />{" "}
        </div>
      </div>
    </nav>
  );
}
