import Image from "next/image";
import Link from "next/link";
import blueSphere from "../../public/assets/images/blueSphere.png";
import TwoSmallClouds from "../assets/svgs/TwoSmallClouds.js";
import CloudSmallThree from "../assets/svgs/CloudSmallThree";
import TwoMedClouds from "../assets/svgs/TwoMedClouds";
import Blocks3dBack from "../assets/svgs/Blocks3dBack";

export default function BackgroundOne() {
  return (
    <section id="background-2" className={`background background-two`}>
      <div className="two-med-clouds-b2">
        <TwoMedClouds />
      </div>

      <p id="p-b2-1" className="p-b2 p-b2-1">
        Cloud 9 A concept & a workspace.
      </p>

      <div className="two-small-clouds-b2">
        {" "}
        <TwoSmallClouds />
        <div className="cloud-small-three-b2">
          <CloudSmallThree />
        </div>
      </div>

      <div id="image-blue-sphere-b2-1" className={`image-blue-sphere-b2 `}>
        {" "}
        <Image src={blueSphere} width={420} alt="blue sphere" />
      </div>

      <div className="two-med-clouds-b2-2">
        <TwoMedClouds />
      </div>

      <p className="p-b2 p-b2-2">Bridge the gap</p>
      <p className="p-b2 p-b2-3">Between formless & form.</p>
      <Link href="#" className="link link-projects">
        View Projects
      </Link>

      <div id="blocks-back-b2" className="blocks-back-b2">
        <div id="image-blue-sphere-b2-2" className={`image-blue-sphere-b2-2`}>
          {" "}
          <Image src={blueSphere} width={420} alt="blue sphere" />
        </div>
        <div id="blocks-svg" className="blocks-svg">
          {" "}
          <Blocks3dBack />
        </div>
      </div>
    </section>
  );
}
