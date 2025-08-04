import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    blog: { type: mongoose.Schema.Types.ObjectId, ref: "blog", required: true },
    name: { type: String, required: true },
    content: { type: String, required: true, maxLength: 1000 }, // Add length limit
    isApproved: { type: Boolean, default: false },
  },
  {
    timestamps: true,
    autoIndex: false,
    bufferCommands: false,
  }
);

// Correct index for blog comments
commentSchema.index({ blog: 1, createdAt: -1 });

// Add lean queries middleware
commentSchema.pre("find", function () {
  this.lean();
});

const Comment = mongoose.model("Comment", commentSchema);
export default Comment;
