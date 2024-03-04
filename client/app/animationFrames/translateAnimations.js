const translateYFromToPx = (el, duration, from, to) => {
  const start = document.timeline.currentTime;
  requestAnimationFrame(animate);

  function animate() {
    const now = document.timeline.currentTime;
    const delta = (now - start) / duration;
    const yCoord = from + (to - from) * delta;
    if (delta < 1) {
      el.style.transform = `translateY(${yCoord}px)`;
      requestAnimationFrame(() => {
        animate();
      });
    } else {
      el.style.transform = `translateY(${to}px)`;
    }
  }
};

const translateOnScrollDown = (windowPositionRef, mainPositionRef) => {
  if (windowPositionRef.current === 5) {
    return;
  }
  const el = document.getElementById("main-inner");

  switch (windowPositionRef.current) {
    case 1:
      translateYFromToPx(el, 300, mainPositionRef.current, -760);
      mainPositionRef.current = -760;
      break;
    case 2:
      translateYFromToPx(el, 300, mainPositionRef.current, -1740);
      mainPositionRef.current = -1740;

      break;
    case 3:
      translateYFromToPx(el, 300, mainPositionRef.current, -2440);
      mainPositionRef.current = -2440;

      break;
    case 4:
      translateYFromToPx(el, 300, mainPositionRef.current, -3240);
      mainPositionRef.current = -3240;
      break;
    case 5:
      break;
    default:
      break;
  }
  // windowPositionRef.current++;
};

const translateOnScrollUp = (windowPositionRef, mainPositionRef) => {
  if (windowPositionRef.current === 1) {
    return;
  }
  const el = document.getElementById("main-inner");

  switch (windowPositionRef.current) {
    case 1:
      break;
    case 2:
      translateYFromToPx(el, 300, mainPositionRef.current, 0);
      mainPositionRef.current = 0;

      break;
    case 3:
      translateYFromToPx(el, 300, mainPositionRef.current, -760);
      mainPositionRef.current = -760;

      break;
    case 4:
      translateYFromToPx(el, 300, mainPositionRef.current, -1740);
      mainPositionRef.current = -1740;
      break;
    case 5:
      translateYFromToPx(el, 300, mainPositionRef.current, -2440);
      mainPositionRef.current = -2440;
      break;
    default:
      break;
  }
  // windowPositionRef.current--;
};

export { translateOnScrollDown, translateOnScrollUp };
