import LinkdIn from "../assets/svgs/LinkdIn";
import GmailIcon from "../assets/svgs/GmailIcon";
import GitHubPages from "../assets/svgs/GitHubPages";

export default function Footer({ footerClass, footerId }) {
  return (
    <div id={footerId} className={`footer ${footerClass}`}>
      <GmailIcon />

      <GitHubPages className="to-front" />

      <LinkdIn />
    </div>
  );
}
