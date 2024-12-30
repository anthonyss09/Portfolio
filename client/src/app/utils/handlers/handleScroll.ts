export default function handleScroll(e: Event) {
  const headerMain = document.getElementById("header-main");
  const background2 = document.getElementById("background2");
  const sectionClean = document.getElementById("section-clean");
  const page = document.getElementById("page");
  if (window.scrollY >= 200) {
    if (headerMain && sectionClean && background2) {
      headerMain.classList.add("fadeOutSectionUp-animation");
      sectionClean.classList.add("fadeInSectionUp-animation");
      background2.style.height = "100%";
      background2.style.width = "100%";
    }
  } else if (window.scrollY <= 200) {
    if (headerMain && sectionClean && background2) {
      // headerMain.classList.remove("fadeOutUp-animation");
      headerMain.style.transform = "translateY(600px)";
      background2.style.height = "0";
      background2.style.width = "0";
    }
  }
}
