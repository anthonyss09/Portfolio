import {
  translateOnScrollDown,
  translateOnScrollUp,
} from "../../animationFrames/translateAnimations";
import { heightFromToPx } from "../../animationFrames/heightAnimations";
import {
  opacityOnScrollDown,
  opacityOnScrollUp,
} from "@/app/animationFrames/opacityAnimations";

const handleTouchEnd = (
  deltaY,
  pauseScrollRef,
  windowPositionRef,
  mainPositionRef,
  navbarHeight,
  footerHeight
) => {
  if (!pauseScrollRef.current) {
    pauseScrollRef.current = true;
    //if scrolling down
    if (deltaY < 0) {
      translateOnScrollDown(windowPositionRef, mainPositionRef);
      opacityOnScrollDown(windowPositionRef.current);
      heightFromToPx("navbar", 300, navbarHeight.current, 96);
      heightFromToPx("footer", 300, footerHeight.current, 0);
      navbarHeight.current = 96;
      footerHeight.current = 0;
    }
    //if scrolling up
    if (deltaY > 0) {
      translateOnScrollUp(windowPositionRef, mainPositionRef);
      opacityOnScrollUp(windowPositionRef.current);
      heightFromToPx("navbar", 300, navbarHeight.current, 80);
      heightFromToPx("footer", 300, footerHeight.current, 64);
      navbarHeight.current = 80;
      footerHeight.current = 64;
    }
    if (deltaY === 0) {
      return;
    }

    setTimeout(() => {
      pauseScrollRef.current = false;
    }, 1500);
  }
};

export { handleTouchEnd };
