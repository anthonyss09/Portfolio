import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  name: { type: String },
  likes: {
    type: Number,
    default: 0,
  },
});

export default mongoose.model("Post", PostSchema);
