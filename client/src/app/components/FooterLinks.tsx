import Image from "next/image";
import Link from "next/link";

export default function FooterLinks() {
  return (
    <footer className="w-full flex justify-center items-center fixed bottom-4 gap-4">
      <Link href="https://github.com/anthonyss09">
        {" "}
        <Image
          src="/assets/svgs/githubDark.svg"
          alt="github"
          height={24}
          width={24}
        />
      </Link>

      <Link href="https://www.linkedin.com/in/anthony-toffetti-58345b122/">
        {" "}
        <Image
          src="/assets/svgs/linkedinDark.svg"
          alt="linkedin"
          height={40}
          width={40}
        />
      </Link>
    </footer>
  );
}
