import Image from "next/image";
import cloudSmallTwoR from "../assets/svgs/cloudSmallTwoR.svg";
import cloudSmallThreeR from "../assets/svgs/cloudSmallThreeR.svg";
import cloudBigR from "../assets/svgs/cloudBigR.svg";
import blueSphere from "/public/assets/images/blueSphere.png";
import twoSmallCloudsR from "../assets/svgs/twoSmallCloudsR.svg";
import cloudSMallOneR from "../assets/svgs/cloudSmallOneR.svg";
import cloudMedR from "../assets/svgs/cloudMedR.svg";

export default function BackgroundOne() {
  return (
    <section id="background-1" className={`background background-one`}>
      <div className="p-b1-1">Software Development & Design.</div>
      <div className="image-blue-sphere-b1">
        <Image
          height={260}
          width={340}
          alt="blue sphere"
          loading="eager"
          src={blueSphere}
        />
        <div className="two-small-clouds-b1">
          <Image src={twoSmallCloudsR} alt="two-small-clouds" />
        </div>
      </div>

      <div className="cloud-big-b1-right">
        {" "}
        <Image src={cloudBigR} alt="cloud big" />
      </div>

      <div className="cloud-right-far">
        {" "}
        <Image src={cloudMedR} alt="cloud far right" />
      </div>

      <div className="clouds-phone-center">
        {" "}
        <div className="cloud-small-one">
          <Image src={cloudSMallOneR} alt="scloud small one" />
        </div>
        <div className="cloud-small-two">
          <Image src={cloudSmallTwoR} alt="cloud small two" />
        </div>
        <div className="cloud-small-three">
          <Image src={cloudSmallThreeR} alt="cloud small three" />
        </div>
      </div>
    </section>
  );
}
