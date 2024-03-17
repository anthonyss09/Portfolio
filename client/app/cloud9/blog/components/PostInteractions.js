import like from "../../../assets/svgs/like.svg";
import Image from "next/image";
import FollowForm from "../../../components/FollowForm";
import { useState } from "react";
import { fadeInElement } from "../../../animationFrames/opacityAnimations";
import {
  useLikePostMutation,
  useGetPostDataQuery,
} from "../../../../lib/features/posts/postSlice";

export default function PostInteractions({ showComment, postId }) {
  let likeCount = "";
  const { data, isLoading, isSuccess, reFetch } = useGetPostDataQuery(postId);

  if (!isLoading) {
    likeCount = data.post.likes;
    console.log(data);
  }

  const [followOpen, setFollowOpen] = useState(false);
  const [likePost] = useLikePostMutation();
  const handleToggleFollowForm = () => {
    if (!followOpen) {
      fadeInElement("follow-form", 300);
    }
    setFollowOpen(!followOpen);
  };
  const handleLikePost = async () => {
    const likes = likeCount + 1;
    try {
      await likePost({ postId, likes });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="blog-interactions">
      {followOpen && (
        <FollowForm handleToggleFollowForm={handleToggleFollowForm} />
      )}
      <div>
        {" "}
        <button
          id="btn-follow"
          className="btn btn-follow"
          onClick={handleToggleFollowForm}
        >
          + Follow
        </button>
        <button className="btn btn-like" onClick={handleLikePost}>
          <p className="like-count">{likeCount}</p>
          <Image src={like} height={20} alt="thumbs up" />
        </button>
      </div>
      {showComment && <button className="btn btn-comment">Comment</button>}
    </section>
  );
}
