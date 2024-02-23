import {
  scrollDownFadeAnimations,
  scrollUpFadeAnimations,
} from "@/app/animationFrames/fadeAnimations";
import {
  handleScrollDownAnimations,
  handleScrollUpAnimations,
} from "../../animationFrames/scrollAnimations";
import { heightFromToPx } from "../../animationFrames/heightAnimations";

const handleKeyDown = (
  e,
  windowPositionRef,
  mainPositionRef,
  navbarHeight,
  footerHeight
) => {
  //if scrolling down
  if (e.keyCode === 40) {
    handleScrollDownAnimations(windowPositionRef, mainPositionRef);
    scrollDownFadeAnimations(windowPositionRef.current);
    heightFromToPx("navbar", 300, navbarHeight.current, 96);
    heightFromToPx("footer", 300, footerHeight.current, 0);
    navbarHeight.current = 96;
    footerHeight.current = 0;
  }
  //if scrolling up
  if (e.keyCode === 38) {
    handleScrollUpAnimations(windowPositionRef, mainPositionRef);
    scrollUpFadeAnimations(windowPositionRef.current);
    heightFromToPx("navbar", 300, navbarHeight.current, 80);
    heightFromToPx("footer", 300, footerHeight.current, 64);
    navbarHeight.current = 80;
    footerHeight.current = 64;
  }
};

export { handleKeyDown };
