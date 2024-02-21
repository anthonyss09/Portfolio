import Github from "../assets/svgs/GitHub";
import Mail from "../assets/svgs/Mail";
import LinkdIn from "../assets/svgs/LinkdIn";
import GmailIcon from "../assets/svgs/GmailIcon";
import GitHubPages from "../assets/svgs/GitHubPages";

export default function Footer({ footerClass, toFront, noShadow }) {
  return (
    <div className={`footer ${footerClass} ${toFront} ${noShadow}`}>
      <GmailIcon />
      <div className={`${toFront} ${noShadow}`}>
        {" "}
        <GitHubPages className="to-front" />
      </div>
      <LinkdIn />
    </div>
  );
}
