import Image from "next/image";
import userOne from "../../../assets/svgs/userOne.svg";

export default function Comment({ comment, author }) {
  return (
    <div className="comment-container">
      <div className="comment-row">
        {" "}
        <div className="comment-user">
          {" "}
          <Image src={userOne} alt="user icon" />
        </div>
        <p className="post-comment">Be the first to comment...</p>
      </div>
      <p className="comment-author">Author</p>
    </div>
  );
}
