import { heightFromToPx } from "../../animationFrames/heightAnimations";

const handleMenuClick = (footerHeight, navbarHeight, pathName) => {
  const navbar = document.getElementById("navbar");
  const footer = document.getElementById("footer");
  const sidebar = document.getElementById("sidebar-main");
  const sidebarHeight = sidebar.offsetHeight;
  footerHeight.current = footer.offsetHeight;
  navbarHeight.current = navbar.offsetHeight;
  if (sidebarHeight === 0) {
    navbar.style.background = "white";
    navbar.style.opacity = 1;
    navbar.style.boxShadow = "none";
    footer.style.background = "white";
    heightFromToPx("footer", 300, footerHeight.current, 80);
    heightFromToPx("navbar", 300, navbarHeight.current, 96);
    heightFromToPx("sidebar-main", 300, 0, 800);
    navbarHeight.current = 96;
    footerHeight.current = 80;
  } else {
    if (pathName === "/cloud9") {
      setTimeout(() => {
        navbar.style.background = "none";
      }, 500);
      footer.style.background = "none";
    }
    setTimeout(() => {
      navbar.style.boxShadow = "0 4px 30px #ced9df60";
    }, 500);

    heightFromToPx("footer", 300, footerHeight.current, 0);
    heightFromToPx("sidebar-main", 300, 800, 0);
    footerHeight.current = 0;
  }
};

export { handleMenuClick };
