import {
  handleScrollDownAnimations,
  handleScrollUpAnimations,
} from "../../animationFrames/scrollAnimations";
import { heightFromToPx } from "../../animationFrames/heightAnimations";
import {
  scrollDownFadeAnimations,
  scrollUpFadeAnimations,
} from "@/app/animationFrames/fadeAnimations";

const handleWheel = (
  e,
  pauseScrollRef,
  windowPositionRef,
  mainPositionRef,
  navbarHeight,
  footerHeight
) => {
  if (!pauseScrollRef.current) {
    pauseScrollRef.current = true;
    //if scrolling down
    if (e.deltaY > 0 && windowPositionRef.current < 5) {
      handleScrollDownAnimations(windowPositionRef, mainPositionRef);
      scrollDownFadeAnimations(windowPositionRef.current);
      heightFromToPx("navbar", 300, navbarHeight.current, 96);
      heightFromToPx("footer", 300, footerHeight.current, 0);
      navbarHeight.current = 96;
      footerHeight.current = 0;
    }
    //if scrolling up
    if (e.deltaY < 0 && windowPositionRef.current > 1) {
      handleScrollUpAnimations(windowPositionRef, mainPositionRef);
      scrollUpFadeAnimations(windowPositionRef.current);
      heightFromToPx("navbar", 300, navbarHeight.current, 80);
      heightFromToPx("footer", 300, footerHeight.current, 64);
      navbarHeight.current = 80;
      footerHeight.current = 64;
    }

    setTimeout(() => {
      pauseScrollRef.current = false;
    }, 1500);
  }
};

export { handleWheel };
