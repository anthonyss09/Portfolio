const fadeInElement = (targetId, duration) => {
  requestAnimationFrame(animate);
  const start = document.timeline.currentTime;

  function animate() {
    const now = document.timeline.currentTime;
    const element = document.getElementById(targetId);
    const delta = (now - start) / duration;
    if (delta < 1) {
      element.style.opacity = delta;
      requestAnimationFrame(() => {
        animate();
      });
    } else {
      return;
    }
  }
};

const fadeOutElement = (targetId, duration) => {
  requestAnimationFrame(animate);
  const start = document.timeline.currentTime;

  function animate() {
    const now = document.timeline.currentTime;
    const element = document.getElementById(targetId);
    const delta = (duration - (now - start)) / duration;
    if (delta > 0) {
      element.style.opacity = delta;
      requestAnimationFrame(() => {
        animate();
      });
    } else {
      return;
    }
  }
};

const fadeAnimationLanding = (position, setPosition) => {
  switch (position) {
    case "position-1":
      if (window.scrollY > 100) {
        fadeOutElement("background-one", 1000);
        fadeInElement("background-two", 1000);
        fadeInElement("p-b2-1", 1000);
        fadeInElement("image-blue-sphere-b2-1", 1000);
        setPosition("");
        setTimeout(() => {
          setPosition("position-2");
        }, 1000);
      }
      break;

    case "position-2":
      if (window.scrollY > 860) {
        fadeOutElement("p-b2-1", 1000);
        fadeOutElement("image-blue-sphere-b2-1", 1000);
        fadeInElement("blocks-back-b2", 1000);
        setPosition("");
        setTimeout(() => {
          setPosition("position-3");
        }, 1000);
      } else if (window.scrollY < 660) {
        fadeInElement("background-one", 1000);
        setPosition("");
        setTimeout(() => {
          setPosition("position-1");
        }, 1000);
      }
      break;

    case "position-3":
      if (window.scrollY > 1840) {
        fadeOutElement("blocks-back-b2", 1000);
        fadeInElement("background-three", 1000);
        setPosition("");
        setTimeout(() => {
          setPosition("position-4");
        }, 1000);
      } else if (window.scrollY < 1640) {
        fadeInElement("background-two", 1000);
        fadeInElement("image-blue-sphere-b2-1", 1000);
        fadeInElement("p-b2-1", 1000);
        setPosition("");
        setTimeout(() => {
          setPosition("position-2");
        }, 1000);
      }
      break;

    case "position-4":
      if (window.scrollY > 2540) {
        fadeOutElement("background-three", 1000);
        fadeInElement("background-four", 1000);
        setTimeout(() => {
          fadeOutElement("image-blue-sphere-b4-1", 1000);
          fadeInElement("image-blue-sphere-b4-2", 1000);
        }, 500);
        setTimeout(() => {
          fadeInElement("p-b4-1", 1000);
        }, 1500);
        setPosition("");
        setTimeout(() => {
          setPosition("position-5");
        }, 1000);
      } else if (window.scrollY < 2340) {
        fadeInElement("blocks-back-b2", 1000);
        setPosition("");
        setTimeout(() => {
          setPosition("position-3");
        }, 1000);
      }
      break;

    case "position-5":
      if (window.scrollY < 3200) {
        fadeInElement("background-three", 1000);
        setPosition("");
        setTimeout(() => {
          setPosition("position-4");
        }, 1000);
      }
    default:
      break;
  }
};

export { fadeInElement, fadeOutElement, fadeAnimationLanding };
