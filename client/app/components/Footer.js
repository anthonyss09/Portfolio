import Github from "../assets/svgs/GitHub";
import Mail from "../assets/svgs/Mail";
import LinkdIn from "../assets/svgs/LinkdIn";
import GmailIcon from "../assets/svgs/GmailIcon";
import GitHubPages from "../assets/svgs/GitHubPages";

export default function Footer({ footerClass, toFront }) {
  return (
    <div className={`footer ${footerClass} ${toFront}`}>
      <GmailIcon />
      <div className={`${toFront}`}>
        {" "}
        <GitHubPages className="to-front" />
      </div>
      <LinkdIn />
    </div>
  );
}
