import { heightFromToPx } from "../../animationFrames/heightAnimations";

const handleNavFooterHeight = (e, navbarHeight, footerHeight, deltaY) => {
  switch (e.type) {
    case "wheel":
      //if scrolling down
      if (e.deltaY > 0) {
        heightFromToPx("navbar", 300, navbarHeight.current, 96);
        heightFromToPx("footer", 300, footerHeight.current, 0);
        navbarHeight.current = 96;
        footerHeight.current = 0;
      }
      //if scrolling up
      if (e.deltaY < 0) {
        heightFromToPx("navbar", 300, navbarHeight.current, 80);
        heightFromToPx("footer", 300, footerHeight.current, 64);
        navbarHeight.current = 80;
        footerHeight.current = 64;
        footer.style.background = "none";
        setTimeout(() => {
          footer.style.background = "white";
        }, 1000);
      }

      break;
    case "keydown":
      //if scrolling down
      if (e.keyCode === 40) {
        heightFromToPx("navbar", 300, navbarHeight.current, 96);
        heightFromToPx("footer", 300, footerHeight.current, 0);
        navbarHeight.current = 96;
        footerHeight.current = 0;
      }
      //if scrolling up
      if (e.keyCode === 38) {
        heightFromToPx("navbar", 300, navbarHeight.current, 80);
        heightFromToPx("footer", 300, footerHeight.current, 64);
        navbarHeight.current = 80;
        footerHeight.current = 64;
        footer.style.background = "none";
        setTimeout(() => {
          footer.style.background = "white";
        }, 1000);
      }
      break;
    case "touch":
      //if scrolling down
      if (deltaY < 0) {
        heightFromToPx("navbar", 300, navbarHeight.current, 96);
        heightFromToPx("footer", 300, footerHeight.current, 0);
        navbarHeight.current = 96;
        footerHeight.current = 0;
      }
      //if scrolling up
      if (deltaY > 0) {
        heightFromToPx("navbar", 300, navbarHeight.current, 80);
        heightFromToPx("footer", 300, footerHeight.current, 64);
        navbarHeight.current = 80;
        footerHeight.current = 64;
        footer.style.background = "none";
        setTimeout(() => {
          footer.style.background = "white";
        }, 1000);
      }
      if (deltaY === 0) {
        return;
      }

      break;
    default:
      break;
  }
};

export { handleNavFooterHeight };
