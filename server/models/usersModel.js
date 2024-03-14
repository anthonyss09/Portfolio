import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please provide email."],
  },
});

export default mongoose.model("User", UserSchema);
