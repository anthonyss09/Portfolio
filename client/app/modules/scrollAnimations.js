const scrollDown = (startingY, height, duration, position, setPosition) => {
  const start = document.timeline.currentTime;
  requestAnimationFrame(animate);

  function animate() {
    const now = document.timeline.currentTime;
    const delta = (now - start) / duration;
    const yCoord = delta * height + startingY;
    if (delta < 1) {
      window.scrollTo(0, yCoord);
      requestAnimationFrame(() => {
        animate();
      });
    } else {
    }
  }
};

const scrollUp = (startingY, height, duration) => {
  const start = document.timeline.currentTime;
  requestAnimationFrame(animate);

  function animate() {
    const now = document.timeline.currentTime;
    const delta = (now - start) / duration;
    const yCoord = startingY - delta * height;
    if (delta < 1) {
      window.scrollTo(0, yCoord);
      requestAnimationFrame(() => {
        animate();
      });
    } else {
    }
  }
};

const scrollAnimationLanding = (
  scrollDirection,
  windowPosition,
  setWindowPosition,
  setInnerPosition
) => {
  let newPosition;
  if (scrollDirection === "down") {
    newPosition = windowPosition + 1;
    switch (windowPosition) {
      case 1:
        console.log(windowPosition);
        setInnerPosition("position-2");
        break;
      case 2:
        console.log("position 2");
        setInnerPosition("position-3");
        break;
      case 3:
        console.log("position 3");
        setInnerPosition("position-4");
        break;
      case 4:
        console.log("position 4");
        setInnerPosition("position-5");
        break;
      case 5:
        console.log(windowPosition);
        break;
      default:
        break;
    }
  } else if (scrollDirection === "up") {
    switch (windowPosition) {
      case 1:
        console.log(windowPosition);
        // window.scrollTo({ top: 760, behavior: "smooth" });
        break;
      case 2:
        console.log("position 2");
        setInnerPosition("position-1");
        break;
      case 3:
        console.log("position 3");
        setInnerPosition("position-2");
        break;
      case 4:
        console.log("position 4");
        setInnerPosition("position-3");
        break;
      case 5:
        console.log("position 5");
        setInnerPosition("position-4");
      default:
        break;
    }
    newPosition = windowPosition - 1;
  }

  setTimeout(() => {
    setWindowPosition(newPosition);
  }, 1000);
};

export { scrollAnimationLanding };
