import {
  opacityOnScrollDown,
  opacityOnScrollUp,
} from "../../animationFrames/opacityAnimations";
import {
  translateOnScrollDown,
  translateOnScrollUp,
} from "../../animationFrames/translateAnimations";
import { heightFromToPx } from "../../animationFrames/heightAnimations";

const handleKeyDown = (
  e,
  windowPositionRef,
  mainPositionRef,
  navbarHeight,
  footerHeight,
  landing
) => {
  //if scrolling down
  if (e.keyCode === 40) {
    if (landing && windowPositionRef.current < 5) {
      translateOnScrollDown(windowPositionRef, mainPositionRef);
      opacityOnScrollDown(windowPositionRef.current);
      windowPositionRef.current++;
    }

    heightFromToPx("navbar", 300, navbarHeight.current, 96);
    heightFromToPx("footer", 300, footerHeight.current, 0);
    navbarHeight.current = 96;
    footerHeight.current = 0;
  }
  //if scrolling up
  if (e.keyCode === 38) {
    if (landing && windowPositionRef.current > 1) {
      translateOnScrollUp(windowPositionRef, mainPositionRef);
      opacityOnScrollUp(windowPositionRef.current);
      windowPositionRef.current--;
    }

    heightFromToPx("navbar", 300, navbarHeight.current, 80);
    heightFromToPx("footer", 300, footerHeight.current, 64);
    navbarHeight.current = 80;
    footerHeight.current = 64;
    // footer.style.background = "none";
    // setTimeout(() => {
    //   footer.style.background = "white";
    // }, 1000);
  }
};

export { handleKeyDown };
