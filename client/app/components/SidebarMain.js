import Link from "next/link";
import Image from "next/image";
import cloudNetwork1 from "../../public/assets/images/cloudNetwork1.png";
import Footer from "./Footer";

export default function SidebarMain() {
  return (
    <aside className="sidebar-main">
      <div className="sidebar-main-links">
        <Link href="#" className="link sidebar-main-link">
          Home
        </Link>
        <Link href="#" className="link sidebar-main-link">
          Blog
        </Link>
        <Link href="#" className="link sidebar-main-link">
          Work
        </Link>
      </div>

      <Image src={cloudNetwork1} className="image-cloud-network-sidebar" />
      <Footer />
    </aside>
  );
}
