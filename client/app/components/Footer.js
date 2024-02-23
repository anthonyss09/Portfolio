import LinkdIn from "../assets/svgs/LinkdIn";
import GmailIcon from "../assets/svgs/GmailIcon";
import GitHubPages from "../assets/svgs/GitHubPages";

export default function Footer({ toFront, noShadow }) {
  return (
    <div id="footer" className={`footer `}>
      <GmailIcon />

      <GitHubPages className="to-front" />

      <LinkdIn />
    </div>
  );
}
