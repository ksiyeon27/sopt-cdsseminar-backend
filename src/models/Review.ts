import mongoose from "mongoose";
import ReviewEntity from "./ReviewEntity";

const ReviewSchema = new mongoose.Schema(
  {
    totalAverage: {
      type: Number,
      required: true,
    },
    reviewImage: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<ReviewEntity & mongoose.Document>(
  "Review",
  ReviewSchema
);
