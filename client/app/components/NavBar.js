"use client";
import Logo from "../components/Logo";
import { useState } from "react";
import { Spiral as Hamburger } from "hamburger-react";

export default function NavBar({ handleMenuClick }) {
  const [pageName, setPageName] = useState("");

  return (
    <nav id="navbar" className={`navbar `}>
      <div className="navbar-row-flex">
        <Logo />

        <div className="icon-bars" onClick={handleMenuClick}>
          <Hamburger color="#ced9df" />{" "}
        </div>
      </div>
      <p className="page-name">{pageName}</p>
    </nav>
  );
}
