import Image from "next/image";
import beachBums from "/public/assets/images/beachBums.PNG";
import bmPicBlue from "/public/assets/images/bmPicBlue.jpeg";
import bmPicPink from "/public/assets/images/bmPicPink.PNG";
import Link from "next/link";
import GitHub2 from "../../../assets/svgs/gitHub2R.svg";

export default function BarkMate() {
  return (
    <aside className="work-preview ">
      <section className="work-preview-section work-preview-section-images">
        {" "}
        <Image
          src={beachBums}
          height={180}
          className="work-preview-image"
          alt="bark mate preview"
        />
        <Image
          src={bmPicBlue}
          height={180}
          className="work-preview-image"
          alt="bark mate preview"
        />
        <Image
          src={bmPicPink}
          height={180}
          className="work-preview-image"
          alt="bark mate preview"
        />
      </section>

      <div className="work-preview-body">
        {" "}
        <section className="work-preview-section work-preview-section-title">
          <h5 className="work-preview-header">Bark Mate</h5>
          <p>A social networking platform for dog lovers.</p>
        </section>
        <section className="work-preview-section work-preview-section-tools">
          <h5 className="work-preview-header">Tools</h5>
          <ul className="work-preview-tools">
            <li>React</li>
            <li>NodeJs</li>
            <li>Express</li>
            <li>Docker</li>
            <li>Google Coud Platform</li>
            <li>Nginx</li>
          </ul>
        </section>
        <section className="work-preview-section work-preview-section-features">
          {" "}
          <h5 className="work-preview-header">Features</h5>
          <ul className="work-preview-features">
            <li>Live updates</li>
            <li>Instant chats</li>
            <li>Scalable websockets</li>
            <li>Redux Tool Kit</li>
            <li>Cloudinary optimization</li>
            <li>Proximity searches</li>
            <li>SMTP transports</li>
            <li>Nginx</li>
            <li>Docker containers</li>
            <li>Serverless deployment</li>
          </ul>
        </section>
      </div>

      <section className="work-preview-section work-preview-section-links">
        {" "}
        <Link href="https://barkmate.app" className="link link-bark-mate">
          BarkMate.app
        </Link>
        <Link
          href="https://github.com/anthonyss09/BarkMate"
          className="link link-bark-mate-git"
        >
          <Image src={GitHub2} alt="git hub icons" />
        </Link>
      </section>
    </aside>
  );
}
