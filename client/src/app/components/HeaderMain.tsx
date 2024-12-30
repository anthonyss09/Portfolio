import Image from "next/image";
import ExcerptOne from "./ExcerptOne";
import ExcerptTwo from "./ExcerptTwo";

export default function HeaderMain() {
  return (
    <header
      id="header-main"
      className={`w-[100%]  pt-[96px] flex flex-col  items-center`}
    >
      <div className="h-[80px] w-[80px] relative mb-8 border-[2px] border-blueMed rounded-[100px]">
        {" "}
        <Image
          src="/assets/images/anthony.jpg"
          fill
          alt="anthony toffetti"
          className="rounded-[100px] shadow-md"
        />
      </div>

      <ExcerptOne />
      <ExcerptTwo />
    </header>
  );
}
