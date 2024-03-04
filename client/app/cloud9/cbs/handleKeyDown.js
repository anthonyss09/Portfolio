import {
  opacityOnScrollDown,
  opacityOnScrollUp,
} from "../../animationFrames/opacityAnimations";
import {
  translateOnScrollDown,
  translateOnScrollUp,
} from "../../animationFrames/translateAnimations";

const handleKeyDown = (e, windowPositionRef, mainPositionRef) => {
  //if scrolling down
  if (e.keyCode === 40) {
    if (windowPositionRef.current < 5) {
      translateOnScrollDown(windowPositionRef, mainPositionRef);
      opacityOnScrollDown(windowPositionRef.current);
      windowPositionRef.current++;
    }
  }
  //if scrolling up
  if (e.keyCode === 38) {
    if (windowPositionRef.current > 1) {
      translateOnScrollUp(windowPositionRef, mainPositionRef);
      opacityOnScrollUp(windowPositionRef.current);
      windowPositionRef.current--;
    }
  }
};

export { handleKeyDown };
