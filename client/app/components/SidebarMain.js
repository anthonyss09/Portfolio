import Link from "next/link";
import Image from "next/image";
import cloudNetwork1 from "../../public/assets/images/phoneBlack.png";
import Footer from "./Footer";
import TwoSmallClouds from "../assets/svgs/TwoSmallClouds";
import CloudSmallTwo from "../assets/svgs/CloudSmallTwo";
import CloudSmallOne from "../assets/svgs/CloudSmallOne";

export default function SidebarMain({ sidebarMainHeight }) {
  return (
    <aside className={`sidebar-main ${sidebarMainHeight} `}>
      {/* <div className="cloud-small-one-sidebar">
        <CloudSmallOne />
      </div> */}
      <div className="sidebar-main-links">
        <Link href="#" className="link sidebar-main-link sidebar-main-link-top">
          Home
        </Link>
        <Link href="#" className="link sidebar-main-link">
          Blog
        </Link>
        <Link href="#" className="link sidebar-main-link">
          Work
        </Link>
      </div>

      <div className="image-sidebar-container">
        {" "}
        <Image
          src={cloudNetwork1}
          className="image-sidebar"
          alt="cloud network & computers"
          height={120}
        />
        <div className="two-small-clouds-sidebar">
          {" "}
          <TwoSmallClouds />
        </div>
      </div>
      <div className="cloud-small-two-sidebar">
        <CloudSmallTwo />
      </div>
    </aside>
  );
}
