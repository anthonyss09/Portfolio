"use client";
import { useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  function handleScroll() {
    const overflowContainer = document.getElementById("overflow-container");

    if (overflowContainer) {
      if (overflowContainer?.scrollLeft <= 0) {
        overflowContainer.scrollLeft += 400;
      } else if (overflowContainer?.scrollLeft >= 800) {
        overflowContainer.scrollLeft -= 400;
      }
    }
  }

  useEffect(() => {
    const overflowContainer = document.getElementById("overflow-container");
    if (overflowContainer) {
      overflowContainer.scrollLeft = 400;
      overflowContainer.addEventListener("scroll", handleScroll);
    }

    return () => {
      overflowContainer?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="w-full h-16 z-20 fixed top-8 left-0 flex justify-center items-center">
      <div className="h-12 w-12 glass absolute top-0 left-4 flex items-center justify-center">
        {" "}
        <Image
          src="/assets/svgs/boxMenu.svg"
          height={36}
          width={36}
          alt="menu"
          className=""
        />
      </div>

      {/* <div className="h-12 w-[160px] z-50 backdrop-blur-sm opacity-70 fixed left-1/2 translate-x-[-280px] rounded-[200px]"></div>
      <div className="h-12 w-[160px] z-50 backdrop-blur-sm opacity-70 fixed right-1/2 translate-x-[280px] rounded-[200px]"></div>
      <div
        id="overflow-container"
        className="h-16 w-[400px] overflow-x-scroll overflow-y-hidden  hide-scroll-bar flex z-40 relative"
      >
        {" "}
        <div
          id="view-box"
          className="w-[240px] h-16 glas fixed top-8 left-1/2 translate-x-[-50%] z-20"
        >
          {" "}
        </div>
        <div ref={elementRef} id="slider" className="flex justify-center">
          {" "}
          <NavItems />
          <NavItems />
          <NavItems />
        </div>
      </div> */}
    </nav>
  );
}
