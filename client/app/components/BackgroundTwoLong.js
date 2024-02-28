import Image from "next/image";
import Link from "next/link";
import blueSphere from "/public/assets/images/blueSphere.png";
import twoSmallCloudsR from "../assets/svgs/twoSmallCloudsR.svg";
import cloudSmallThreeR from "../assets/svgs/cloudSmallThreeR.svg";
import twoMedCloudsR from "../assets/svgs/twoMedCloudsR.svg";
import blocks3dBackR from "../assets/svgs/blocks3dBackR.svg";

export default function BackgroundOne() {
  return (
    <section id="background-2" className={`background background-two`}>
      <div className="two-med-clouds-b2">
        {/* <TwoMedClouds /> */}
        <Image src={twoMedCloudsR} />
      </div>

      <p id="p-b2-1" className="p-b2 p-b2-1">
        Cloud 9 A concept & a workspace.
      </p>

      <div className="two-small-clouds-b2">
        {" "}
        <Image src={twoSmallCloudsR} />
        {/* <TwoSmallClouds /> */}
        <div className="cloud-small-three-b2">
          {/* <CloudSmallThree /> */}
          <Image src={cloudSmallThreeR} />
        </div>
      </div>

      <div id="image-blue-sphere-b2-1" className={`image-blue-sphere-b2 `}>
        {" "}
        <Image height={325} width={420} alt="blue sphere" src={blueSphere} />
      </div>

      <div className="two-med-clouds-b2-2">
        {/* <TwoMedClouds /> */}
        <Image src={twoMedCloudsR} />
      </div>

      <p className="p-b2 p-b2-2">Bridge the gap</p>
      <p className="p-b2 p-b2-3">Between formless & form.</p>
      <Link href="#" className="link link-projects">
        View Projects
      </Link>

      <div id="blocks-back-b2" className="blocks-back-b2">
        <div id="image-blue-sphere-b2-2" className={`image-blue-sphere-b2-2`}>
          {" "}
          <Image height={325} width={420} alt="blue sphere" src={blueSphere} />
        </div>
        <div id="blocks-svg" className="blocks-svg">
          {" "}
          {/* <Blocks3dBack /> */}
          <Image src={blocks3dBackR} />
        </div>
      </div>
    </section>
  );
}
