import {
  translateOnScrollDown,
  translateOnScrollUp,
} from "../../animationFrames/translateAnimations";
import {
  opacityOnScrollDown,
  opacityOnScrollUp,
} from "../../animationFrames/opacityAnimations";

const handleTouchEnd = (
  deltaY,
  pauseScrollRef,
  windowPositionRef,
  mainPositionRef
) => {
  if (!pauseScrollRef.current) {
    //if scrolling down

    if (deltaY < 0) {
      if (windowPositionRef.current < 5) {
        pauseScrollRef.current = true;
        translateOnScrollDown(windowPositionRef, mainPositionRef);
        opacityOnScrollDown(windowPositionRef.current);
        windowPositionRef.current++;
      }
    }
    //if scrolling up
    if (deltaY > 0) {
      if (windowPositionRef.current > 1) {
        pauseScrollRef.current = true;
        translateOnScrollUp(windowPositionRef, mainPositionRef);
        opacityOnScrollUp(windowPositionRef.current);
        windowPositionRef.current--;
      }
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
