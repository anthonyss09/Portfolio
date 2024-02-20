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

const scrollDownFadeAnimations = (windowPosition) => {
  switch (windowPosition) {
    case 2:
      fadeOutElement("background-1", 1000);
      fadeInElement("background-2", 1000);
      fadeInElement("image-blue-sphere-b2-1", 1000);
      break;
    case 3:
      fadeOutElement("image-blue-sphere-b2-1", 500);
      fadeInElement("blocks-back-b2", 1000);
      fadeInElement("image-blue-sphere-b2-2", 1000);
      break;
    case 4:
      fadeInElement("background-4", 1000);
      fadeOutElement("blocks-back-b2", 1000);
      fadeOutElement("image-blue-sphere-b2-2", 1000);
      break;
    case 5:
      fadeInElement("background-5", 1000);
      fadeOutElement("background-4", 1000);
      fadeInElement("image-blue-sphere-b4-2", 1000);
      fadeInElement("p-b4-1", 1000);
      fadeOutElement("image-blue-sphere-b4-1", 1000);
      break;
    default:
      break;
  }
};

const scrollUpFadeAnimations = (windowPosition) => {
  switch (windowPosition) {
    case 1:
      fadeInElement("background-1", 1000);
      fadeOutElement("background-2", 1000);
      fadeOutElement("image-blue-sphere-b2-1", 1000);
      break;
    case 2:
      fadeInElement("image-blue-sphere-b2-1", 500);
      fadeOutElement("blocks-back-b2", 1000);
      fadeOutElement("image-blue-sphere-b2-2", 1000);
      break;
    case 3:
      fadeOutElement("background-4", 1000);
      fadeInElement("blocks-back-b2", 1000);
      fadeInElement("image-blue-sphere-b2-2", 1000);
      break;
    case 4:
      fadeInElement("background-4", 1000);
      fadeOutElement("background-5", 1000);
      fadeInElement("image-blue-sphere-b4-1", 1000);
      fadeOutElement("image-blue-sphere-b4-2", 1000);
      fadeOutElement("p-b4-1", 1000);
      break;
    default:
      break;
  }
};

export {
  fadeInElement,
  fadeOutElement,
  scrollDownFadeAnimations,
  scrollUpFadeAnimations,
};
