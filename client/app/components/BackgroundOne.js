import Image from "next/image";
import cloudSmallTwoR from "../assets/svgs/cloudSmallTwoR.svg";
import cloudSmallThreeR from "../assets/svgs/cloudSmallThreeR.svg";
import cloudBigR from "../assets/svgs/cloudBigR.svg";
import blueSphere from "/public/assets/images/blueSphere.png";
import twoSmallCloudsR from "../assets/svgs/twoSmallCloudsR.svg";
import cloudSMallOneR from "../assets/svgs/cloudSmallOneR.svg";

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
          {/* <TwoSmallClouds /> */}
          <Image src={twoSmallCloudsR} />
        </div>
      </div>

      <div className="cloud-big-b1-right">
        {/* <BigCloud /> */}
        <Image src={cloudBigR} />
      </div>

      <div className="cloud-right-far">{/* <CloudMed /> */}</div>

      <div className="clouds-phone-center">
        {" "}
        <div className="cloud-small-one">
          {/* <CloudSmallOne /> */}
          <Image src={cloudSMallOneR} />
        </div>
        <div className="cloud-small-two">
          {/* <CloudSmallTwo /> */}
          <Image src={cloudSmallTwoR} />
        </div>
        <div className="cloud-small-three">
          {/* <CloudSmallThree /> */}
          <Image src={cloudSmallThreeR} />
        </div>
      </div>
    </section>
  );
}
