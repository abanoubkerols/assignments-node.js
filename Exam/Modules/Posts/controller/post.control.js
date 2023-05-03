// import postSchema
import postModel from "../../../DB/model/post.model.js";



// adding post for user
export const addPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const id = req.user._id;
    const post = await postModel({ title, content, createdBy: id });
    const savePost = await post.save()
    res.json({ message: "Done", savePost });
  } catch (error) {
    res.json({ message: "catch error", error });
  }
};

// update post for user
export const updatePost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const { id } = req.params;
    const post = await postModel.findById(id);
    if (post) {
      if (post.createdBy.toString() == req.user._id.toString()) {
        const updatedPost = await postModel.findByIdAndUpdate(
          { _id: id },
          { title, content },
          { new: true }
        );
        res.json({ message: "Done", updatedPost });
      } else {
        res.json({ message: "you are not able to edit this post" });
      }
    } else {
      res.json({ message: "Post not found" });
    }
  } catch (error) {
    res.json({ message: "catch error", error });
  }
};

// return all posts with user details
export const allPosts = async (req, res) => {
  try {
    const Posts = await postModel.find({}).populate([
      {
          path: "createdBy",
          select: "userName email"
      }
      
    ])
  res.json({ message: "Done", Posts })
  } catch (error) {
    res.json({ message: "catch error", error });
  }
};



// get posts for one user
export const userPost = async (req, res) => {
  try {
        const user = await postModel.findById({_id : req.user._id}).populate([
          {
              path: "createdBy",
              select: "userName email"
          }
        ])
        res.json({ message: "Done", user });
    }
   catch (error) {
    res.json({ message: "catch error", error });
  }
};


// delete post for user
export const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const delPost = await postModel.findById(id);
    if (delPost) {
      if (delPost.createdBy.toString() == req.user._id.toString()) {
        const postDelted = await postModel.findOneAndDelete({
          _id: id,
          createdBy: req.user._id,
        });
        res.json({ message: "Done", postDelted });
      } else {
        res.json({ message: "you are not able to delete this post" });
      }
    } else {
      res.json({ message: "Post not found" });
    }
  } catch (error) {
    res.json({ message: "catch error", error });
  }
};


