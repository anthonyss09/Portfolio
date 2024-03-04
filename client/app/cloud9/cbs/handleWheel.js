import {
  translateOnScrollDown,
  translateOnScrollUp,
} from "../../animationFrames/translateAnimations";

import {
  opacityOnScrollDown,
  opacityOnScrollUp,
} from "../../animationFrames/opacityAnimations";

const handleWheel = (e, pauseScrollRef, windowPositionRef, mainPositionRef) => {
  if (!pauseScrollRef.current) {
    //if scrolling down
    if (e.deltaY > 0) {
      if (windowPositionRef.current < 5) {
        pauseScrollRef.current = true;
        translateOnScrollDown(windowPositionRef, mainPositionRef);
        opacityOnScrollDown(windowPositionRef.current);
        windowPositionRef.current++;
      }
    }
    //if scrolling up
    if (e.deltaY < 0) {
      if (windowPositionRef.current > 1) {
        pauseScrollRef.current = true;
        translateOnScrollUp(windowPositionRef, mainPositionRef);
        opacityOnScrollUp(windowPositionRef.current);
        windowPositionRef.current--;
      }
    }
    setTimeout(() => {
      pauseScrollRef.current = false;
    }, 1500);
  }
};

export { handleWheel };
