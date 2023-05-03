import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    age: {
      type: Number,
    },
    phone: {
      type: Number,
    },
    confirmEmail: {
      type: Boolean,
      default: false,
    },
    profilePic: {
      type: String
    },
    code: {
      type: String
    }
  },
  {
    timestamps: true,
  }
);


const userModel = mongoose.model("User", userSchema);

export default userModel