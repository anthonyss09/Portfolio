import Image from "next/image";
import ExcerptOne from "./ExcerptOne";
import ExcerptTwo from "./ExcerptTwo";
import animations from "../animations.module.css";

export default function HeaderMain() {
  return (
    <header
      id="header-main"
      className={`w-[400px] mx-auto pt-[128px] flex flex-col px-2 overflow-hidden`}
    >
      <div className="h-[80px] w-[80px] relative mb-8 border-[6px] border-blueMed rounded-[100px] shadow-med">
        {" "}
        <Image
          src="/assets/images/anthony.jpg"
          fill
          alt="anthony toffetti"
          className="rounded-[80px]"
        />
      </div>

      <ExcerptOne />
      <ExcerptTwo />
      <button
        className={`h-[40px] w-0 overflow-hidden font-normal text-base mt-16 ml-4 tracking-wide flex justify-around items-center text-blueLight bg-black/10 shadow-2xl rounded-xl ${animations.typedOutButton}`}
      >
        <p> Send me mail </p>
        <Image
          src="/assets/svgs/arrowRight.svg"
          height={28}
          width={28}
          alt="arrow right"
        />
      </button>
    </header>
  );
}
