import LinkdIn from "../assets/svgs/LinkdIn";
import GmailIcon from "../assets/svgs/GmailIcon";
import GitHubPages from "../assets/svgs/GitHubPages";

export default function Footer({ footerClass }) {
  return (
    <div id="footer" className={`footer ${footerClass}`}>
      <GmailIcon />

      <GitHubPages className="to-front" />

      <LinkdIn />
    </div>
  );
}
