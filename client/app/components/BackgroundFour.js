import Image from "next/image";
import blueSphere from "/public/assets/images/blueSphere.png";
import twoMedCloudsR from "../assets/svgs/twoMedCloudsR.svg";
import cloudSmallThreeR from "../assets/svgs/cloudSmallThreeR.svg";

export default function BackgroundFour() {
  return (
    <section id="background-5" className={`background background-four `}>
      <div className="two-med-clouds-b4">
        <Image src={twoMedCloudsR} />
      </div>
      <p id="p-b4-1" className={`p-b4-1 `}>
        Cloud 9 An expression of self.
      </p>
      <div id="image-blue-sphere-b4-1" className={`image-blue-sphere-b4-1`}>
        <Image
          height={180}
          className={`blue-sphere `}
          alt="blue sphere"
          src={blueSphere}
        />
        <div className="two-small-clouds-b4">
          {" "}
          <Image src={twoMedCloudsR} />
        </div>
      </div>
      <div id="image-blue-sphere-b4-2" className={`image-blue-sphere-b4-2 `}>
        <div className="cloud-small-three-b4">
          <Image src={cloudSmallThreeR} />
        </div>
        <Image height={260} alt="blue sphere" src={blueSphere} />
      </div>
    </section>
  );
}
