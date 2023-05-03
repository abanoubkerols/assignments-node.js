import userModel from "./../../../DB/models/user.model.js";
import bcrypt from "bcryptjs";
import cloudinary from './../../../service/cloud.js'

// ## 5- change password (user must be logged in)

export const changePassword = async (req, res) => {
    try {
        const { currentPassword, newPassWord, newCPassword } = req.body
        if (newPassWord == newCPassword) {
            const user = await userModel.findById(req.user._id)
            const matched = await bcrypt.compare(currentPassword, user.password)
            if (matched) {
                const hashPassword = await bcrypt.hash(newPassWord, parseInt(process.env.hashPass))
                const updateUser = await userModel.findByIdAndUpdate(user._id, { password: hashPassword }, { new: true })
                res.json({ message: "updated", updateUser });
            }
            else {
                res.json({ message: "password invalid" })
            }

        } else {
            res.json({ message: "newPassword must equal to newCPassword" });
        }

    } catch (error) {
        res.json({ message: " catch Error", error })
    }
}


// ## 6- DELETE USER (account owner only)(user must be logged in and confirmed)

export const daleteUser = async (req, res) => {
    try {
        const id = req.user._id;
        const user = await userModel.findById(id);
        if (user.confirmEmail) {
            const userDelted = await userModel.findOneAndDelete({
                _id: id
            });
            res.json({ message: "Done user deleted", userDelted });

        } else {
            res.json({ message: "user not found or not verify plz check your email" });
        }
    } catch (error) {
        res.json({ message: "catch error", error })

    }
};

//   ## 7- Get all users (user must be logged in and confirmed)

export const getUsers = async (req, res) => {
    try {
        const id = req.user._id;
        let users = await userModel.findById(id)
        res.json({ message: "user", users });
    } catch (error) {
        res.json({ message: "catch error", error })

    }
};

// # 8- get specific user by id with his posts 

export const specificPost = async (req, res) => {
    try {
        const { id } = req.params
        const user = await userModel.findById(req.user._id)
        if (user.confirmEmail) {
            const notes = await noteModel.find({ _id: id, createdBy: req.user._id }).populate(
                { path: "createdBy", select: 'userName email' })
            if (notes.length) {
                res.json({ message: "Done", notes })
            }
            else {
                res.json({ message: "you are not authorized to show this note" })
            }
        }
        else {
            res.json({ message: "your email not verify" });
        }

    } catch ({ error }) {
        res.json({ message: "catch error", error })

    }

}


// export const profilePhoto = async (req, res) => {
   
//         if (!req.file) {
//             res.json({ message: "plz upload img" })
//         }
//         else {
//             const {profilePic}= req.body
//             const addPhoto = await cloudinary.uploader.upload(req.file.path ,{folder : "profile Pic"})
//           let userPhoto =   new userModel({profilePic: { public_id: addPhoto.public_id, url: addPhoto.secure_url }})
//           let savePhoto = await userPhoto.save()
//             res.json({ message: "done",savePhoto })
//         }

//     }

