"use-client";
import Logo from "../components/Logo";
import { Spiral as Hamburger } from "hamburger-react";
import SidebarMain from "./SidebarMain";

export default function NavBar({ navbarClass, handleMenuClick }) {
  return (
    <nav id="navbar" className={`navbar ${navbarClass}`}>
      <div className="navbar-row-flex">
        <Logo />
        <div className="icon-bars link" onClick={handleMenuClick}>
          <Hamburger color="#ced9df" />{" "}
        </div>
      </div>
      <SidebarMain handleLinkClick={handleMenuClick} />
    </nav>
  );
}
