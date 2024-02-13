//write scroll animation

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

const animateScroll = (position, setPosition) => {
  console.log("listener added");
  console.log(position);

  switch (position) {
    case "position-1":
      if (window.scrollY > 100) {
        // scrollDown(100, 660, 1000);
        window.scrollTo({ top: 760, behavior: "smooth" });
        setPosition("");
        setTimeout(() => {
          setPosition("position-2");
        }, 1000);
      }
      break;
    case "position-2":
      if (window.scrollY > 860) {
        // scrollDown(860, 860, 1000);
        window.scrollTo({ top: 1740, behavior: "smooth" });
        setPosition("");
        setTimeout(() => {
          setPosition("position-3");
        }, 1000);
      } else if (window.scrollY < 660) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setPosition("");
        setTimeout(() => {
          setPosition("position-1");
        }, 1000);
      }
      break;
    case "position-3":
      if (window.scrollY > 1840) {
        // scrollDown(1840, 600, 1000);
        window.scrollTo({ top: 2440, behavior: "smooth" });
        setPosition("");
        setTimeout(() => {
          setPosition("position-4");
        }, 1000);
      } else if (window.scrollY < 1640) {
        window.scrollTo({ top: 760, behavior: "smooth" });
        setPosition("");
        setTimeout(() => {
          setPosition("position-2");
        }, 1000);
      }
      break;
    case "position-4":
      if (window.scrollY > 2540) {
        // scrollDown(2540, 760, 1000);
        window.scrollTo({ top: 3300, behavior: "smooth" });
        setPosition("");
        setTimeout(() => {
          setPosition("position-5");
        }, 1000);
      } else if (window.scrollY < 2340) {
        window.scrollTo({ top: 1740, behavior: "smooth" });
        setPosition("");
        setTimeout(() => {
          setPosition("position-3");
        }, 1000);
      }
      break;
    case "position-5":
      if (window.scrollY < 3200) {
        window.scrollTo({ top: 2440, behavior: "smooth" });
        setPosition("");
        setTimeout(() => {
          setPosition("position-4");
        }, 1000);
      }
    default:
      break;
  }
};

export { animateScroll };
