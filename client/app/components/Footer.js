import Image from "next/image";
import LinkdIn from "../assets/svgs/linkedInR.svg";
import GmailIcon from "../assets/svgs/gmailIconR.svg";
import GitHubPages from "../assets/svgs/gitHubPagesR.svg";
import Link from "next/link";

export default function Footer({ footerClass, footerId }) {
  return (
    <div id={footerId} className={`footer ${footerClass}`}>
      <Link href="/cloud9/contact" className="link">
        <Image src={GmailIcon} alt="gmail icon" />
      </Link>
      <Link href="https://github.com/anthonyss09" className="link">
        {" "}
        <Image src={GitHubPages} alt="github icon" />
      </Link>
      <Link
        href="https://www.linkedin.com/in/anthony-toffetti-58345b122/"
        className="link"
      >
        {" "}
        <Image src={LinkdIn} alt="linked in icon" />
      </Link>
    </div>
  );
}
