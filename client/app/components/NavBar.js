"use client";
import Logo from "../components/Logo";
import { useState, useEffect } from "react";
import SidebarMain from "../components/SidebarMain";
import { Spiral as Hamburger } from "hamburger-react";

export default function NavBar({ navbarClass, handleMenuClick, noShadow }) {
  const [pageName, setPageName] = useState("");

  return (
    <nav className={`navbar ${navbarClass} ${noShadow}`}>
      <div className="navbar-row-flex">
        <Logo />

        <div className="icon-bars" onClick={handleMenuClick}>
          <Hamburger color="#ced9df" />{" "}
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#ced9df"
            className="w-8 h-8"
            height="30px"
          >
            <path
              fillRule="evenodd"
              d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
              clipRule="evenodd"
            />
          </svg> */}
        </div>
      </div>
      <p className="page-name">{pageName}</p>
    </nav>
  );
}
