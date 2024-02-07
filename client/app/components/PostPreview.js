import Image from "next/image";

export default function PostPreview({ postHeading, postImage }) {
  return (
    <article className="post-preview">
      <h1 className="post-preview-heading">{postHeading}</h1>
      <Image src={postImage} height={200} className="post-preview-image" />
    </article>
  );
}
