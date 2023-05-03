import mongoose from 'mongoose'

// create post schema 
const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    createdBy:{
        type:mongoose.Types.ObjectId,
        ref:'User',
        required:true
    },
    comment: [{
        type:mongoose.Types.ObjectId,
        ref:'comment'
    }],
  },
  {
    timestamps: true,
  }
);

const postModel = mongoose.model('Post',postSchema)

export default postModel