import Image from "next/image";
import cloudNetwork1 from "../../../public/assets/images/cloudNetwork1.png";

export default function CheckBack() {
  return (
    <aside className="work-preview work-preview-check-back">
      <p>Check back soon to see what we&apos;re working on!</p>
      <Image src={cloudNetwork1} height={200} alt="cloud network" />
    </aside>
  );
}
