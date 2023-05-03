import commentModel from "../../../DB/model/comment.model.js";

import postModel from "../../../DB/model/post.model.js";

// add comment 
export const addComment = async(req,res)=>{
  try {
    const {content} = req.body;
    const user = req.user._id;
    const {id} = req.params;
    const ispost = await postModel.findById(id);
  if (ispost){
    const comment = await commentModel.insertMany({content,createdBy:user});
    await postModel.updateOne({_id:id},{$push:{
        comment: comment[0]._id
    }})
     const post = await postModel.find({_id:id}).populate([{
        path:"comment",
        select:" content "
     },
     {
        path:"createdBy",
        select:"userName email"
     }])
     res.json({message:"Done",post})
}else{
   
    res.json({message:"not found"})

}
  } catch (error) {
    res.json({message:"error",error})
  }
}


// delete comment
export const deleteComment = async(req,res) => {
    try {
        const { id } = req.params;
      const post = await postModel.findById(id);
      if (post) {
        if (post.createdBy.toString() == req.user._id.toString()) {
          const commentDelted = await commentModel.findOneAndDelete({
            _id: id,
            createdBy: req.user._id,
          });
          res.json({ message: "Done", commentDelted });
        } else {
          res.json({ message: "you are not able to delete this post" });
        }
      } else {
        res.json({ message: "Post not found" });
      }
    } catch (error) {
      res.json({ message: "catch error", error });
    }
}


// update comment
export const updateComment = async (req, res) => {
  try {
    const { content } = req.body;
    const { id } = req.params;
    const comment = await postModel.findById(id);
    if (comment) {
      if (comment.createdBy.toString() == req.user._id.toString()) {
        const updatedcomment = await commentModel.findByIdAndUpdate(
          { _id: id },
          {  content },
          { new: true }
        );
        res.json({ message: "Done", updatedcomment });
      } else {
        res.json({ message: "you are not able to edit this comment" });
      }
    } else {
      res.json({ message: "comment not found" });
    }
  } catch (error) {
    res.json({ message: "catch error", error });
  }
};
