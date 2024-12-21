import Image from "next/image";
import BouncingBalls from "./BouncingBalls";

export default function HeaderMain() {
  return (
    <header className="flex flex-col gap-4 items-center">
      <div className="w-[280px] flex justify-start items-center gap-4">
        {" "}
        <div className="h-[100px] w-[100px] relative my-4 border-[2px] border-blueLight rounded-[100px]">
          {" "}
          <Image
            src="/assets/images/anthony.jpg"
            fill
            alt="anthony toffetti"
            className="rounded-[100px] shadow-md"
          />
        </div>
        <p className="text-blueLight text-3xl font-light fadeInDown-animation-first opacity-0">
          Hi.
        </p>
      </div>

      <p className="text-white text-3xl font-light fadeInDown-animation-second opacity-0">
        <span className="text-blueLight">I&apos;m</span>
        <span className=""> Anthony Toffetti</span>
        <span className="text-blueLight">.</span>
      </p>
      <p className="text-blueLight mb-8 text-3xl fadeInDown-animation-third opacity-0">
        <span>A</span> <span className="text-white">web developer</span>
        <span className="text-blueLight">.</span>
      </p>
      <BouncingBalls />
    </header>
  );
}
