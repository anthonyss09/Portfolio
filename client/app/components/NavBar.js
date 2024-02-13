"use client";
import Logo from "../components/Logo";
import { useState, useEffect } from "react";

export default function NavBar({ navbarClass }) {
  const [pageName, setPageName] = useState("Software Development & Design.");

  useEffect(() => {
    const scroll = (event) => {
      if (window.scrollY < 200) {
        setPageName("Software Development & Design.");
      } else if (window.scrollY > 200 && window.scrollY < 2000) {
        setPageName("");
      } else if ((window.scrollY > 2000) & (window.scrollY < 4000)) {
        // setPageName("Blog");
      }
    };

    window.addEventListener("scroll", scroll, false);
    return () => window.removeEventListener("scroll", scroll, false);
  }, [pageName]);
  return (
    <nav className={`navbar ${navbarClass}`}>
      <div className="navbar-row-flex">
        <Logo />

        <div className="icon-bars">
          {" "}
          <svg
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
          </svg>
        </div>
      </div>
      <p className="page-name">{pageName}</p>
    </nav>
  );
}
