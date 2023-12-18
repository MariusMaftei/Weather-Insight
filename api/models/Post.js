import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    region: {
      type: String,
      required: true,
      unique: false,
    },
    country: {
      type: String,
      required: true,
      unique: false,
    },
    city: {
      type: String,
      required: true,
      unique: true,
    },
    countryID: {
      type: String,
      required: true,
      unique: false,
    },
  },
  { timestamps: true }
);
const Post = mongoose.model("Post", postSchema);

export default Post;
