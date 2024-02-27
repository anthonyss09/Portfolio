import Image from "next/image";
import blueSphere from "/public/assets/images/blueSphere.png";
import TwoMedClouds from "../assets/svgs/TwoMedClouds";
import TwoSmallClouds from "../assets/svgs/TwoSmallClouds";
import CloudSmallThree from "../assets/svgs/CloudSmallThree";

export default function BackgroundFour() {
  return (
    <section id="background-5" className={`background background-four `}>
      <div className="two-med-clouds-b4">
        <TwoMedClouds />
      </div>
      <p id="p-b4-1" className={`p-b4-1 `}>
        Cloud 9 An expression of self.
      </p>
      <div id="image-blue-sphere-b4-1" className={`image-blue-sphere-b4-1`}>
        <Image
          src={blueSphere}
          height={180}
          className={`blue-sphere `}
          alt="blue sphere"
        />
        <div className="two-small-clouds-b4">
          {" "}
          <TwoSmallClouds />
        </div>
      </div>
      <div id="image-blue-sphere-b4-2" className={`image-blue-sphere-b4-2 `}>
        <div className="cloud-small-three-b4">
          <CloudSmallThree />
        </div>
        <Image src={blueSphere} height={260} alt="blue sphere" />
      </div>
    </section>
  );
}
