import mongoose from 'mongoose'

const commentSchema = new mongoose.Schema(
  {
 
    content: {
      type: String,
      required: true,
    },
    createdBy:{
        type:mongoose.Types.ObjectId,
        ref:'User',
        required:true
    },
  },
  {
    timestamps: true,
  }
);

const commentModel = mongoose.model('comment',commentSchema)

export default commentModel