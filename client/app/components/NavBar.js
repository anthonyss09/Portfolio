"use-client";
import Logo from "../components/Logo";
import { Spiral as Hamburger } from "hamburger-react";
import SidebarMain from "./SidebarMain";
import { handleMenuClick } from "../cloud9/cbs/handleMenuClick";
import { useRef, useState } from "react";
import { usePathname } from "next/navigation";
import FollowForm from "../components/FollowForm";
import { fadeInElement } from "../animationFrames/opacityAnimations";

export default function NavBar({ navbarClass }) {
  const footerHeight = useRef(0);
  const navbarHeight = useRef(80);
  const [isOpen, setOpen] = useState(false);
  const [followOpen, setFollowOpen] = useState(false);
  const pathName = usePathname();

  const handleClick = () => {
    const sidebar = document.getElementById("sidebar-main");
    const sidebarHeight = sidebar.offsetHeight;
    handleMenuClick(footerHeight, navbarHeight, pathName);
    if (sidebarHeight === 0) {
      document.body.style.overflow = "hidden";
      fadeInElement("btn-follow", 1000);
      setOpen(true);
    } else {
      document.body.style.overflow = "unset";
      setOpen(false);
    }
  };

  const handleToggleFollowForm = () => {
    if (!followOpen) {
      fadeInElement("follow-form", 300);
    }
    setFollowOpen(!followOpen);
  };

  return (
    <>
      {followOpen && (
        <FollowForm handleToggleFollowForm={handleToggleFollowForm} />
      )}
      <nav id="navbar" className={`navbar ${navbarClass}`}>
        <div className="navbar-row-flex">
          <span className="logo-follow">
            <Logo />
            {isOpen && (
              <button
                id="btn-follow"
                className="btn btn-follow"
                onClick={handleToggleFollowForm}
              >
                + Follow
              </button>
            )}
          </span>

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
    </>
  );
}
