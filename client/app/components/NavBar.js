"use-client";
import Logo from "../components/Logo";
import { Spiral as Hamburger } from "hamburger-react";
import SidebarMain from "./SidebarMain";
import { handleMenuClick } from "../cloud9/cbs/handleMenuClick";
import { useRef, useState } from "react";

export default function NavBar({ navbarClass }) {
  const footerHeight = useRef(0);
  const navbarHeight = useRef(80);
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    const sidebar = document.getElementById("sidebar-main");
    const children = document.getElementById("children");
    const sidebarHeight = sidebar.offsetHeight;
    handleMenuClick(footerHeight, navbarHeight);
    if (sidebarHeight === 0) {
      children.style.position = "fixed";
      setOpen(true);
    } else {
      children.style.position = "relative";
      setOpen(false);
    }
  };

  return (
    <nav id="navbar" className={`navbar ${navbarClass}`}>
      <div className="navbar-row-flex">
        <Logo />
        <div className="icon-bars link" onClick={handleClick}>
          <Hamburger
            id="hamburger"
            color="#ced9df"
            toggled={isOpen}
            toggle={setOpen}
          />{" "}
        </div>
      </div>
      <SidebarMain handleLinkClick={handleClick} />
    </nav>
  );
}
