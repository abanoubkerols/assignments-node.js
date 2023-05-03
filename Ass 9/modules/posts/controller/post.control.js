import cloudinary from './../../../service/cloud.js'
import postModel from './../../../DB/models/post.model.js'
import userModel from '../../../db/models/user.model.js'


export const addPost = async (req, res) => {
    try {
        const { content, image } = req.body
        const result = await cloudinary.uploader.upload(req.file.path, { folder: "user" })
        let post = new postModel({ content, image: { public_id: result.public_id, url: result.secure_url }, createdBy: req.user._id })

        let savePost = await post.save()
        res.json({ message: "done", savePost  });
    } catch (error) {
        res.json({ message: "err", error });

    }


}





export const updatePost = async (req, res) => {
    try {
        const { id } = req.params
        const { content, image } = req.body;
        let currentimg = await postModel.findById(id)
        const user = await userModel.findById(req.user._id)
        if (user.confirmEmail) {

            const img = currentimg.image.public_id;
            await cloudinary.uploader.destroy(img);

            const newImage = await cloudinary.uploader.upload(req.file.path, {
                folder: "updated",

            });
            const post = await postModel.findOneAndUpdate({ _id: id, createdBy: req.user._id }, { image: { public_id: newImage.public_id, url: newImage.secure_url }, content }, { new: true })
            res.json({ message: "post updated ", post })
        }
        else {
            res.json({ message: "your email not verify" });
        }
    } catch (error) {
        res.json({ message: "catch error", error })
    }

}


export const deletePost = async (req, res) => {

    const { id } = req.params
    const user = await userModel.findById(req.user._id)

    let findpost = await postModel.findById(id)
    let pic = findpost.image.public_id

    if (user.confirmEmail) {
        if (pic) {
            await cloudinary.uploader.destroy(pic)
            const post = await postModel.findOneAndDelete({ id, createdBy: req.user._id })
            res.json({ message: " deleted post Done ", post })
        }

    }
    else {
        res.json({ message: "your email not verify" });

    }
}



export const allPosts = async (req, res) => {
    try {
        const user = await userModel.findById(req.user._id)
        if (user.confirmEmail) {
            const post = await postModel.find({ createdBy: req.user._id }).populate(
                {
                    path: "createdBy",
                    select: 'userName email'
                }
            )
            res.json({ message: "Done", post })
        }
        else {
            res.json({ message: "your email not verify" });
        }

    } catch ({ error }) {
        res.json({ message: "catch error", error })
    }
}


export const specificPost = async (req, res) => {
    try {
        const { id } = req.params
        const user = await userModel.findById(req.user._id)
        if (user.confirmEmail) {
            const posts = await postModel.find({ _id: id, createdBy: req.user._id }).populate(
                { path: "createdBy", select: 'userName email' })
            if (notes.length) {
                res.json({ message: "Done", posts })
            }
            else{
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
