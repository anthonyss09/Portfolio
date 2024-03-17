"use-client";
import Logo from "../components/Logo";
import { Spiral as Hamburger } from "hamburger-react";
import SidebarMain from "./SidebarMain";
import { handleMenuClick } from "../cloud9/cbs/handleMenuClick";
import { useRef, useState } from "react";
import { usePathname } from "next/navigation";
import FollowForm from "../components/FollowForm";
import {
  fadeInElement,
  fadeOutElement,
} from "../animationFrames/opacityAnimations";
import Alert from "../components/Alert";
import { useAppSelector } from "../../lib/hooks";
import { selectAlertsInfo } from "../../lib/features/alerts/alertsSlice";

export default function NavBar({ navbarClass }) {
  const footerHeight = useRef(0);
  const navbarHeight = useRef(80);
  const [isOpen, setOpen] = useState(false);
  const [followOpen, setFollowOpen] = useState(false);
  const pathName = usePathname();

  const { showAlert, alertMessage } = useAppSelector(selectAlertsInfo);

  const handleClick = () => {
    const sidebar = document.getElementById("sidebar-main");
    const sidebarHeight = sidebar.offsetHeight;
    handleMenuClick(footerHeight, navbarHeight, pathName);
    if (sidebarHeight === 0) {
      document.body.style.overflow = "hidden";
      fadeInElement("btn-follow", 300);
      setOpen(true);
    } else {
      document.body.style.overflow = "unset";
      fadeOutElement("btn-follow", 300);
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
      {showAlert && <Alert alertMessage={alertMessage} />}
      <nav id="navbar" className={`navbar ${navbarClass}`}>
        <div className="navbar-row-flex">
          <span className="logo-follow">
            <Logo />

            <button
              id="btn-follow"
              className="btn btn-follow btn-follow-navbar"
              onClick={handleToggleFollowForm}
            >
              + Follow
            </button>
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
