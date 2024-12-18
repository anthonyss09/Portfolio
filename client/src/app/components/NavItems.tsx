import { svgInfo } from "../utils/constants";
import Image from "next/image";

export default function NavItems() {
  const items = svgInfo.map((item, index) => {
    return (
      <div
        key={index}
        className="h-16 w-[80px] z-30 flex items-center justify-center shrink-0 "
      >
        {" "}
        <Image
          src={`/assets/svgs/${item.file}`}
          height={item.height}
          width={item.width}
          alt={item.file}
          className="z-30"
        />
      </div>
    );
  });
  return items;
}
