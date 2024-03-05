import Image from "next/image";
import LinkdIn from "../assets/svgs/linkedInR.svg";
import GmailIcon from "../assets/svgs/gmailIconR.svg";
import GitHubPages from "../assets/svgs/gitHubPagesR.svg";

export default function Footer({ footerClass, footerId }) {
  return (
    <div id={footerId} className={`footer ${footerClass}`}>
      <Image src={GmailIcon} alt="gmail icon" />

      <Image src={GitHubPages} alt="github icon" />

      <Image src={LinkdIn} alt="linked in icon" />
    </div>
  );
}
