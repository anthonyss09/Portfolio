import Link from "next/link";
import TwoSmallClouds from "../assets/svgs/TwoSmallClouds";
import CloudSmallTwo from "../assets/svgs/CloudSmallTwo";

export default function SidebarMain({ handleLinkClick }) {
  return (
    <aside id="sidebar-main" className={`sidebar-main `}>
      <div className="sidebar-main-links">
        <Link
          href="/cloud9"
          className="link sidebar-main-link sidebar-main-link-top"
          onClick={handleLinkClick}
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
          href="#"
          className="link sidebar-main-link"
          onClick={handleLinkClick}
        >
          Work
        </Link>
        <Link
          href="#"
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
          <TwoSmallClouds />
          <div className="cloud-small-two-sidebar">
            <CloudSmallTwo />
            {/* <div className="image-blue-sphere-sidebar">
              {" "}
              <Image src={blueSphere} height={140} />
            </div> */}
          </div>
        </div>
      </div>
    </aside>
  );
}
