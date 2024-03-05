import Link from "next/link";
import TwoSmallClouds from "../assets/svgs/twoSmallCloudsR.svg";
import CloudSmallTwo from "../assets/svgs/cloudSmallTwoR.svg";
import Image from "next/image";

export default function SidebarMain({ handleLinkClick }) {
  return (
    <aside id="sidebar-main" className={`sidebar-main `}>
      <div className="sidebar-main-links">
        <Link
          href="/"
          className="link sidebar-main-link sidebar-main-link-top"
          onClick={handleLinkClick}
          shallow
        >
          Home
        </Link>
        <Link
          href="/cloud9/blog"
          className="link sidebar-main-link"
          onClick={handleLinkClick}
        >
          Blog
        </Link>{" "}
        <Link
          href="/cloud9/work"
          className="link sidebar-main-link"
          onClick={handleLinkClick}
        >
          Work
        </Link>
        <Link
          href="/cloud9/contact"
          className="link sidebar-main-link"
          onClick={handleLinkClick}
        >
          Contact
        </Link>
      </div>
      <div className="image-sidebar-container">
        {" "}
        <div className="two-small-clouds-sidebar">
          {" "}
          <Image src={TwoSmallClouds} alt="two small clouds" />
          <div className="cloud-small-two-sidebar">
            <Image src={CloudSmallTwo} alt="small cloud" />
          </div>
        </div>
      </div>
    </aside>
  );
}
