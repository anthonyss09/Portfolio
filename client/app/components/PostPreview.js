import Image from "next/image";

export default function PostPreview({ postHeading, postImage, postDate }) {
  return (
    <article className="post-preview">
      <Image
        src={postImage}
        height={100}
        width={100}
        className="post-preview-image"
        alt="preview of post"
      />
      <h4 className="post-preview-heading">
        {postHeading}
        <p className="post-preview-date">{postDate}</p>
      </h4>
    </article>
  );
}
