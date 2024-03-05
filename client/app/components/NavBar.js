"use-client";
import Logo from "../components/Logo";
import { Spiral as Hamburger } from "hamburger-react";
import SidebarMain from "./SidebarMain";
import { handleMenuClick } from "../cloud9/cbs/handleMenuClick";
import { useRef, useState } from "react";
import { usePathname } from "next/navigation";

export default function NavBar({ navbarClass }) {
  const footerHeight = useRef(0);
  const navbarHeight = useRef(80);
  const [isOpen, setOpen] = useState(false);
  const pathName = usePathname();

  const handleClick = () => {
    const sidebar = document.getElementById("sidebar-main");
    const sidebarHeight = sidebar.offsetHeight;
    handleMenuClick(footerHeight, navbarHeight, pathName);
    if (sidebarHeight === 0) {
      document.body.style.overflow = "hidden";
      setOpen(true);
    } else {
      document.body.style.overflow = "unset";
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
