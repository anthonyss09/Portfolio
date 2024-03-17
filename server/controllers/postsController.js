import Post from "../models/postModel.js";

const createPost = async (req, res) => {
  const { name, likes } = req.body;
  try {
    const post = await Post.create({ name, likes });
    console.log(post);
    res.json({ post });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
};

const likePost = async (req, res) => {
  const { postId, likes } = req.body;

  try {
    const update = await Post.findOneAndUpdate({ _id: postId }, { likes });
    console.log(update);
  } catch (error) {
    console.log(error);
  }
};

const getPostData = async (req, res) => {
  const { postId } = req.query;
  try {
    const post = await Post.findOne({ _id: postId });
    res.json({ post });
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};

export { likePost, getPostData, createPost };
