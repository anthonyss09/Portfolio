import Image from "next/image";
import LinkdIn from "../assets/svgs/linkedInR.svg";
import GmailIcon from "../assets/svgs/gmailIconR.svg";
import GitHubPages from "../assets/svgs/gitHubPagesR.svg";
import Link from "next/link";

export default function Footer({ footerClass, footerId }) {
  return (
    <div id={footerId} className={`footer ${footerClass}`}>
      <Link role="footer-gmail-link" href="/cloud9/contact" className="link">
        <Image role="footer-gmail-icon" src={GmailIcon} alt="gmail icon" />
      </Link>

      <Link
        role="footer-github-link"
        href="https://github.com/anthonyss09"
        className="link"
      >
        {" "}
        <Image role="footer-github-icon" src={GitHubPages} alt="github icon" />
      </Link>

      <Link
        role="footer-linkedin-link"
        href="https://www.linkedin.com/in/anthony-toffetti-58345b122/"
        className="link"
      >
        {" "}
        <Image role="footer-linkedin-icon" src={LinkdIn} alt="linked in icon" />
      </Link>
    </div>
  );
}
