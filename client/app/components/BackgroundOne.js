import Image from "next/image";
import CloudSmallOne from "../assets/svgs/CloudSmallOne";
import CloudSmallTwo from "../assets/svgs/CloudSmallTwo";
import CloudSmallThree from "../assets/svgs/CloudSmallThree";
import CloudMed from "../assets/svgs/CloudMed";
import BigCloud from "../assets/svgs/CloudBig";
import blueSphere from "/public/assets/images/blueSphere.png";
import TwoSmallClouds from "../assets/svgs/TwoSmallClouds";

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
          <TwoSmallClouds />
        </div>
      </div>

      <div className="cloud-big-b1-right">
        <BigCloud />
      </div>

      <div className="cloud-right-far">
        <CloudMed />
      </div>

      <div className="clouds-phone-center">
        {" "}
        <div className="cloud-small-one">
          <CloudSmallOne />
        </div>
        <div className="cloud-small-two">
          <CloudSmallTwo />
        </div>
        <div className="cloud-small-three">
          <CloudSmallThree />
        </div>
      </div>
    </section>
  );
}
