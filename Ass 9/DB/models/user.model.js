import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    userName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profilePic: {
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    },
    coverPics: Array,
    confirmEmail: { type: Boolean, default: false },
    code: String


}, {
    timestamps: true
})
const userModel = mongoose.models.User || mongoose.model("User", userSchema);

export default userModel 