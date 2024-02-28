import Image from "next/image";
import cloudBigB3R from "../assets/svgs/cloudBigB3R.svg";
import CloudComputers from "/public/assets/images/cloudComputers.png";
import twoSmallCloudsR from "../assets/svgs/twoSmallCloudsR.svg";
import Link from "next/link";
import cloudSmallThreeR from "../assets/svgs/cloudSmallThreeR.svg";
import cloudSmallOneR from "../assets/svgs/cloudSmallOneR.svg";
import cloudMedR from "../assets/svgs/cloudMedR.svg";

export default function BackgroundOne() {
  return (
    <section id="background-4" className={`background background-three`}>
      <div className="cloud-small-one-b3">
        <Image src={cloudSmallOneR} />
      </div>

      <div className="cloud-small-three-b3">
        <Image src={cloudSmallThreeR} />
      </div>

      <div className="cloud-big-b3">
        <Image src={cloudBigB3R} />
      </div>

      <div className="cloud-big-b3-right">
        <Image src={cloudBigB3R} />
      </div>

      <div className="cloud-med-b3">
        <Image src={cloudMedR} />
      </div>

      <div className="cloud-computers">
        <p className="p-b3 p-b3-1">Build with thoughtful</p>
        <p className="p-b3 p-b3-2">Integration strategies.</p>
        <Link href="/cloud9/blog" className="link link-articles">
          View Blog
        </Link>
        <Image
          height={365}
          width={505}
          alt="cloud & computers"
          src={CloudComputers}
        />
        <div className="two-small-clouds-b3">
          <Image src={twoSmallCloudsR} />
        </div>
      </div>
    </section>
  );
}
