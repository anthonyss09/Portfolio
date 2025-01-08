import Image from "next/image";
import Link from "next/link";

export default function FooterLinks() {
  return (
    <footer className="free-center bg-[#ffffff] px-6 pt-2  flex justify-center items-center fixed bottom-2 gap-4 shadow-[1px_-2px_20px_2px_rgba(0,0,0,.08)] rounded-tl-xl rounded-tr-xl rounded-xl shadow-xl border-[1px]">
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
