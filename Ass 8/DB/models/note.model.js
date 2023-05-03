import mongoose from "mongoose"

const noteSchema = new mongoose.Schema(
  {
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      require: true
    },
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true,
  }
);

const noteModel = mongoose.model("Note", noteSchema);

export default noteModel